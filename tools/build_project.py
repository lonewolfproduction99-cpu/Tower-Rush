"""
Writes game/TowerRush.json, the GDevelop 5 project, from data/game_data.json and game/assets/.

All game logic is native GDevelop events (no JavaScript blocks). They are split into external
events, one per system, linked from the "Game" scene in this order:

  RunManager -> ObstacleGenerator -> TowerController -> TurretController -> ProjectileSystem
  -> ObstacleGrid -> CloudController -> CameraAndHUD

Each system owns its own scene variables (listed in its first comment); other systems only read them.

The project file is the source of truth once you edit it in GDevelop. This script refuses to
overwrite a project changed in the editor since the last build (see game/.build_stamp.json);
use --force to throw such edits away.

Run: python3 tools/build_project.py [--force]
"""

import glob
import hashlib
import json
import os
import re
import sys
import uuid

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
GAME = os.path.join(ROOT, "game")
OUT = os.path.join(GAME, "TowerRush.json")
STAMP = os.path.join(GAME, ".build_stamp.json")
DATA = json.load(open(os.path.join(ROOT, "data", "game_data.json"), encoding="utf-8"))
_ART = os.path.join(ROOT, "data", "art_formations.json")
# Whole-object pixel art turned into formations by tools/import_formations.py.
ART_FORMATIONS = json.load(open(_ART, encoding="utf-8")) if os.path.exists(_ART) else []
ALL_FORMATIONS = [dict(f, Texture="") for f in DATA["Formations"]] + ART_FORMATIONS
META = json.load(open(os.path.join(ROOT, "tools", "gd", "instructions.json")))
T = DATA["Tuning"]
MOUNT = DATA.get("TowerArt", {}).get("TurretMount", [30, 10])
_ns = uuid.UUID("6c1d7b8e-2f0a-4e55-9a3b-1f4d2c7e9b10")


def uid(key):
    return str(uuid.uuid5(_ns, key))


# ======================================================================= EVENT HELPERS
def _instr(kind, name, params, inverted=False):
    """One condition/action. `params` are the visible parameters only; code-only ones are filled in
    from GDevelop's own metadata (tools/gd/instructions.json), which also catches typos."""
    meta = META.get(kind + ":" + name)
    if meta is None:
        raise KeyError("Unknown GDevelop %s: %s" % ("condition" if kind == "C" else "action", name))
    visible = [p for p in meta if not p["codeOnly"]]
    # Trailing optional code-only/visible params may be omitted; too many is always an error.
    if len(params) > len(visible):
        raise ValueError("%s %s takes %d parameters, got %d: %r" % (kind, name, len(visible), len(params), params))
    it = iter(params)
    full = []
    for p in meta:
        if p["codeOnly"]:
            full.append("")
        else:
            full.append(str(next(it, "")))
    return {"type": {"inverted": inverted, "value": name}, "parameters": full}


def C(name, *params, inv=False):
    return _instr("C", name, params, inv)


def A(name, *params):
    return _instr("A", name, params)


def ev(conds=(), acts=(), subs=()):
    return {"type": "BuiltinCommonInstructions::Standard", "conditions": list(conds), "actions": list(acts),
            "events": list(subs)}


def repeat(times, acts=(), subs=(), conds=()):
    return {"type": "BuiltinCommonInstructions::Repeat", "repeatExpression": times, "conditions": list(conds),
            "actions": list(acts), "events": list(subs)}


def foreach(obj, conds=(), acts=(), subs=()):
    return {"type": "BuiltinCommonInstructions::ForEach", "object": obj, "conditions": list(conds),
            "actions": list(acts), "events": list(subs)}


def group(name, events, color=(74, 112, 150)):
    return {"type": "BuiltinCommonInstructions::Group", "name": name, "source": "", "folded": False,
            "colorR": color[0], "colorG": color[1], "colorB": color[2], "creationTime": 0, "events": list(events)}


def comment(text):
    return {"type": "BuiltinCommonInstructions::Comment",
            "color": {"b": 109, "g": 230, "r": 255, "textB": 0, "textG": 0, "textR": 0}, "comment": text}


def link(target):
    return {"type": "BuiltinCommonInstructions::Link", "include": {"includeConfig": 0}, "target": target}


def q(s):
    """A string literal inside an expression."""
    return '"' + s + '"'


# Shorthands for common instructions -------------------------------------------------------------
def setv(name, op, value):            # scene/global variable (number)
    return A("SetNumberVariable", name, op, value)


def sets(name, value):                # scene variable (text)
    return A("SetStringVariable", name, "=", value)


def isv(name, op, value):
    return C("NumberVariable", name, op, value)


def iss(name, value):
    return C("StringVariable", name, "=", value)


def setov(obj, name, op, value):      # object variable (number)
    return A("SetNumberObjectVariable", obj, name, op, value)


def isov(obj, name, op, value):
    return C("NumberObjectVariable", obj, name, op, value)


def cmp(a, op, b):
    return C("BuiltinCommonInstructions::CompareNumbers", a, op, b)


def set_xy(obj, x, y):
    return A("SetXY", obj, "=", x, "=", y)


def set_text(obj, value):
    return A("TextContainerCapability::TextContainerBehavior::SetValue", obj, "Text", "=", value)


def set_opacity(obj, value):
    return A("OpacityCapability::OpacityBehavior::SetValue", obj, "Opacity", "=", value)


def set_anim(obj, name_expr):
    return A("AnimatableCapability::AnimatableBehavior::SetName", obj, "Animation", "=", name_expr)


def tune(key):
    return "GlobalVariable(Tuning.%s)" % key


V = "Variable(%s)".__mod__


# The owner's backgrounds (art/backgrounds/sky.png, hills.png, ground.png) replace the placeholders.
# The owner's tower (art/tower/tower_0.png, tower_1.png, ... and turret.png) likewise.
for _f in glob.glob(os.path.join(ROOT, "art", "backgrounds", "*.png")) + glob.glob(os.path.join(ROOT, "art", "tower", "*.png")):
    import shutil
    shutil.copyfile(_f, os.path.join(GAME, "assets", os.path.basename(_f)))


def img_size(name):
    """Size of an image in game/assets (backgrounds adapt to whatever size the owner draws)."""
    return Image.open(os.path.join(GAME, "assets", name)).size


GROUND_W, GROUND_H = img_size("ground.png")
FAR_W, FAR_H = img_size("hills.png")
FAR_SINK = 20  # px of the far layer hidden behind the ground strip
DT = V("Dt")
CAM_X = 'CameraX("", 0)'
GROUND = tune("GroundY")


# ======================================================================= THE SYSTEMS
def run_manager():
    return [
        comment("RUN MANAGER - owns: State (\"Run\" / \"Over\"), Dt, StartX, Distance, BestDistance, NewBest, "
                "OverTime.\nStarts the run, ends it (GameOver is requested by CloudController through State), "
                "saves the best distance (storage \"TowerRush\") and restarts the scene."),
        group("Start of the run", [
            ev([C("SceneJustBegins")], [
                sets("State", q("Run")),
                setv("StartX", "=", "Tower.X()"),
                setv("Distance", "=", "0"),
                A("Hide", "GameOverUI"),
                A("Hide", "MuzzleFlash"),
            ], [
                ev([C("GroupExists", q("TowerRush"), q("Best"))],
                   [A("ReadNumberFromStorage", q("TowerRush"), q("Best"), "BestDistance")]),
            ]),
        ]),
        group("Frame time", [
            comment("Dt is the frame time, capped so a slow frame can never make the tower or a bullet skip "
                    "through a cell. Every system moves things with Dt, never with a fixed step per frame."),
            ev([], [setv("Dt", "=", "min(TimeDelta(), %s)" % tune("MaxFrameTime"))]),
        ]),
        group("Distance (only forward progress counts)", [
            ev([iss("State", q("Run")),
                cmp("(Tower.X() - Variable(StartX)) / %s" % tune("PixelsPerMeter"), ">", V("Distance"))],
               [setv("Distance", "=", "(Tower.X() - Variable(StartX)) / %s" % tune("PixelsPerMeter"))]),
        ]),
        group("Game over", [
            ev([iss("State", q("Dying"))], [
                sets("State", q("Over")),
                setv("OverTime", "=", "0"),
                A("Show", "GameOverUI"),
                A("Hide", "MuzzleFlash"),
                A("Hide", "Crosshair"),
                A("AnimatableCapability::AnimatableBehavior::PauseAnimation", "Tower", "Animation"),
                set_text("ResultText", '"DISTANCE  " + ToString(floor(Variable(Distance))) + " m"'),
            ], [
                ev([cmp("floor(%s)" % V("Distance"), ">", V("BestDistance"))], [
                    setv("BestDistance", "=", "floor(Variable(Distance))"),
                    A("EcrireFichierExp", q("TowerRush"), q("Best"), V("BestDistance")),
                    set_text("BestResultText", '"NEW BEST!"'),
                ]),
                ev([cmp("floor(%s)" % V("Distance"), "<=", V("BestDistance"))], [
                    set_text("BestResultText", '"BEST  " + ToString(Variable(BestDistance)) + " m"'),
                ]),
            ]),
            ev([iss("State", q("Over"))], [setv("OverTime", "+", DT)]),
        ]),
        group("Restart", [
            comment("Restart reloads the scene, which resets every run variable and object. The short delay "
                    "stops the finger that was firing when the cloud hit from pressing Restart by accident."),
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"),
                C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "RestartButton")],
               [A("Scene", q("Game"), "no")]),
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"),
                C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "UpgradesButton")],
               [A("Scene", q("Shop"), "no")]),
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"), C("KeyFromTextJustPressed", q("r"))],
               [A("Scene", q("Game"), "no")]),
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"), C("KeyFromTextJustPressed", q("Space"))],
               [A("Scene", q("Game"), "no")]),
        ]),
    ]


GEM_TYPES = list(DATA["Gems"].items())  # [(name, {Value, Weight})], type number = position + 1


def lane_cost(f):
    """Shots to clear the tower's lane (bottom 7 rows) of a formation."""
    hp = {info["Char"]: info["HP"] for info in DATA["Materials"].values()}
    hp.update({c.lower(): T.get("PartialHP", 1) for c in list(hp) if c.isalpha()})
    return sum(hp.get(ch, 0) for row in f["Rows"][-7:] for ch in row if ch != ".")


def deck_pick(deck):
    return "GlobalVariable(%s[RandomInRange(0, GlobalVariableChildCount(%s) - 1)])" % (deck, deck)


def obstacle_generator():
    cs = tune("CellSize")
    cell_events = []
    variants = []
    for mat, info in DATA["Materials"].items():
        variants.append((mat, info, info["Char"], "GlobalVariable(Materials.%s.HP)" % mat))
        if info["Char"].isalpha():  # partly drawn square: lower-case letter, PartialHP whatever the material
            variants.append((mat, info, info["Char"].lower(), tune("PartialHP")))
    for mat, info, char, hp in variants:
        cell_events.append(ev([iss("Ch", q(char))], [
            A("Create", "Cell", "Variable(SpawnX) + Variable(Col) * %s" % cs,
              "%s - (Variable(ShapeRows) - Variable(Row)) * %s" % (GROUND, cs), q("")),
            A("SetStringObjectVariable", "Cell", "Material", "=", q(mat)) if "A:SetStringObjectVariable" in META
            else A("ModVarObjetTxt", "Cell", "Material", "=", q(mat)),
            setov("Cell", "MaxHP", "=", hp),
            setov("Cell", "HP", "=", hp),
            setov("Cell", "Batch", "=", V("FormationCount")),
            A("SetZOrder", "Cell", "=", "10"),
            setv("CellsSpawned", "+", "1"),
        ], [
            ev([isv("FormationArt", "=", "0")], [A("TiledSpriteObject::SetImageFromResource", "Cell", info["Tile"])]),
            ev([isv("FormationArt", "=", "1")], [
                setov("Cell", "SliceX", "=", "Variable(Col) * %s" % cs),
                setov("Cell", "SliceY", "=", "Variable(Row) * %s" % cs),
            ]),
        ]))
    art_events = [
        ev([isv("FormationIndex", "=", str(i)), isov("Cell", "Batch", "=", V("FormationCount"))],
           [A("TiledSpriteObject::SetImageFromResource", "Cell", f["Texture"]),
            # The offset must be set after the picture: GDevelop wraps it by the current image's size.
            A("TiledSpriteObject::XOffset", "Cell", "=", "Cell.Variable(SliceX)"),
            A("TiledSpriteObject::YOffset", "Cell", "=", "Cell.Variable(SliceY)")])
        for i, f in enumerate(ALL_FORMATIONS) if f["Texture"]]
    return [
        comment("OBSTACLE GENERATOR - owns: NextFormationX, FormationCount, FormationIndex, Shape, ShapeW, "
                "ShapeRows, SpawnX, Idx, Col, Row, Ch, CellsSpawned.\n"
                "Formations are text grids in the global variable Formations (one string per formation, rows "
                "separated by |, top row first, the bottom row sits on the ground). Each character is a cell: "
                "a material's Char (# Stone, H Hardstone, C Concrete, M Metal, G Glass, W Wood), . empty. A lower-case "
                "letter is a partly drawn square of that material: Tuning.PartialHP (1) shot whatever the material.\n"
                "Cell is a 12 x 12 tiled sprite. Text-grid formations show their material's tile; art formations "
                "(Texture set, made by tools/import_formations.py from whole pixel-art pictures) show their own "
                "12 x 12 slice of the picture: the cell's X/Y offset is its column/row times 12."),
        group("Spawn the next formation ahead of the camera", [
            ev([cmp(V("NextFormationX"), "<", "%s + 270 + %s" % (CAM_X, tune("SpawnAhead")))], [
                setv("FormationIndex", "=", deck_pick("FormationDeck")),
            ], [
                comment("FormationDeck lists every formation as many times as its Weight (art/formations/<name>.json "
                        "{\"weight\": 2}). The first Tuning.EasyStart formations of a run come from EasyDeck (lane "
                        "cost up to Tuning.EasyLaneShots shots). The same formation never comes twice in a row."),
                ev([cmp(V("FormationCount"), "<", tune("EasyStart")), cmp("GlobalVariableChildCount(EasyDeck)", ">", "0")],
                   [setv("FormationIndex", "=", deck_pick("EasyDeck"))]),
                repeat("6", [], [
                    ev([cmp(V("FormationIndex"), "=", V("LastFormation")), cmp(V("FormationCount"), ">=", tune("EasyStart")),
                        cmp("GlobalVariableChildCount(Formations)", ">", "1")],
                       [setv("FormationIndex", "=", deck_pick("FormationDeck"))]),
                    ev([cmp(V("FormationIndex"), "=", V("LastFormation")), cmp(V("FormationCount"), "<", tune("EasyStart")),
                        cmp("GlobalVariableChildCount(EasyDeck)", ">", "1")],
                       [setv("FormationIndex", "=", deck_pick("EasyDeck"))]),
                ]),
                comment("Preview one formation (e.g. your new art): set Tuning.TestFormation to its index in "
                        "Formations. -1 = normal game."),
                ev([cmp(tune("TestFormation"), ">=", "0")], [setv("FormationIndex", "=", tune("TestFormation"))]),
                ev([], [
                    sets("Shape", "GlobalVariableString(Formations[Variable(FormationIndex)].Shape)"),
                    setv("FormationArt", "=", "GlobalVariable(Formations[Variable(FormationIndex)].Art)"),
                    setv("ShapeW", "=", 'StrFind(VariableString(Shape), "|")'),
                ], [
                    ev([isv("ShapeW", "<", "0")], [setv("ShapeW", "=", "StrLength(VariableString(Shape))")]),
                ]),
                ev([], [
                    setv("ShapeRows", "=", "(StrLength(VariableString(Shape)) + 1) / (Variable(ShapeW) + 1)"),
                    setv("SpawnX", "=", "max(Variable(NextFormationX), Tower.X() + %s)"
                                                % tune("MinSpawnAheadOfTower")),
                    setv("Col", "=", "0"), setv("Row", "=", "0"), setv("Idx", "=", "0"),
                ]),
                repeat("StrLength(VariableString(Shape))",
                       [sets("Ch", "SubStr(VariableString(Shape), Variable(Idx), 1)")],
                       [ev([iss("Ch", q("|"))], [setv("Row", "+", "1"), setv("Col", "=", "-1")])]
                       + cell_events
                       + [ev([], [setv("Col", "+", "1"), setv("Idx", "+", "1")])]),
                group("Art formations: give the new cells their picture", art_events),
                group("Embed gems in some of the new cells", embed_gems()),
                ev([], [
                    setv("NextFormationX", "=", "Variable(SpawnX) + Variable(ShapeW) * %s + RandomInRange(%s, %s)"
                         % (cs, tune("GapMin"), tune("GapMax"))),
                    setv("LastFormation", "=", V("FormationIndex")),
                    setv("FormationCount", "+", "1"),
                ], [
                    comment("Sometimes the next formation follows right behind (a cluster)."),
                    ev([cmp("RandomFloat(1)", "<", tune("ClusterChance"))], [
                        setv("NextFormationX", "=", "Variable(SpawnX) + Variable(ShapeW) * %s + RandomInRange(%s, %s)"
                             % (cs, tune("ClusterGapMin"), tune("ClusterGapMax"))),
                    ]),
                ]),
            ]),
        ]),
        group("Remove what is far behind", [
            comment("Everything behind the left edge of the screen is gone for good (the cloud is there)."),
            ev([C("PosX", "Cell", "<", "%s - 330" % CAM_X)], [A("Delete", "Cell")]),
            ev([C("PosX", "Crack", "<", "%s - 330" % CAM_X)], [A("Delete", "Crack")]),
            ev([C("PosX", "GemMark", "<", "%s - 330" % CAM_X)], [A("Delete", "GemMark")]),
        ]),
    ]




def embed_gems():
    """Events placing gems in the cells just spawned (Batch = FormationCount)."""
    total = sum(g["Weight"] for _, g in GEM_TYPES)
    roll, type_events = 0, []
    for i, (name, g) in enumerate(GEM_TYPES):
        lo, roll = roll, roll + g["Weight"]
        conds = [isv("GemRoll", ">=", str(lo * 100.0 / total))]
        if i < len(GEM_TYPES) - 1:
            conds.append(isv("GemRoll", "<", str(roll * 100.0 / total)))
        type_events.append(ev(conds, [setv("GemType", "=", str(i + 1))]))
    embed = [
        setov("Cell", "Gem", "=", V("GemType")),
        A("Create", "GemMark", "Cell.X() + 2", "Cell.Y() + 2", q("")),
        A("SetZOrder", "GemMark", "=", "12"),
        A("AnimatableCapability::AnimatableBehavior::SetIndex", "GemMark", "Animation", "=", "Variable(GemType) - 1"),
        A("LinkedObjects::LinkObjects", "Cell", "GemMark"),
        setv("GemPlaced", "=", "1"),
    ]
    mine = [isov("Cell", "Batch", "=", V("FormationCount")), isov("Cell", "Gem", "=", "0")]
    return [
        comment("GEMS (Phase 2): with chance Tuning.GemChance a new formation hides GemsMin..GemsMax gems. A gem "
                "goes in a cell above the tower's lane with chance GemAboveLaneChance (more time to dig it out), "
                "else anywhere in the formation. The type is drawn by the Weight of each entry in the global Gems."),
        ev([cmp("RandomFloat(1)", "<", tune("GemChance"))],
           [setv("GemsToPlace", "=", "RandomInRange(%s, %s)" % (tune("GemsMin"), tune("GemsMax")))], [
            repeat(V("GemsToPlace"), [setv("GemPlaced", "=", "0"), setv("GemRoll", "=", "RandomFloat(100)")],
                   type_events + [
                       ev([cmp("RandomFloat(1)", "<", tune("GemAboveLaneChance"))] + mine +
                          [C("PosY", "Cell", "<=", "%s - 96" % GROUND)],
                          [A("PickRandomInstance", "Cell")] + embed),
                       ev([isv("GemPlaced", "=", "0")] + mine, [A("PickRandomInstance", "Cell")] + embed),
                   ]),
        ]),
    ]


UPGRADES = list(DATA["Upgrades"].items())  # [(key, {Label, Stat, Unit, Values, Costs})], shop order


def upgrade_manager():
    """Game scene: loads the bought upgrade levels and sets the stats every other system reads."""
    load = []
    for key, u in UPGRADES:
        load.append(ev([], [setv("Lv_" + key, "=", "0")], [
            ev([C("GroupExists", q("TowerRush"), q("Up_" + key))],
               [A("ReadNumberFromStorage", q("TowerRush"), q("Up_" + key), "Lv_" + key)]),
            ev([], [setv("Lv_" + key, "=", "clamp(round(Variable(Lv_%s)), 0, %d)" % (key, len(u["Values"]) - 1)),
                    setv(u["Stat"], "=", "GlobalVariable(Upgrades.%s.Values[Variable(Lv_%s)])" % (key, key))]),
        ]))
    return [
        comment("UPGRADE MANAGER - owns: the upgrade levels Lv_<Upgrade> and the stats Damage, FireRate, Spread, "
                "TowerSpeed, PickupRadius (read by the other systems).\n"
                "Levels are bought in the Shop scene and saved in storage TowerRush / Up_<Upgrade>. Each stat is "
                "the global Upgrades.<Upgrade>.Values[level]; prices are Upgrades.<Upgrade>.Costs[level]."),
        ev([C("SceneJustBegins")], [], load),
    ]


def shop_events():
    """Shop scene: one row per upgrade (objects carry the variable Row = their upgrade's position)."""
    rows = []
    for i, (key, u) in enumerate(UPGRADES):
        mx = len(u["Values"]) - 1
        lv, gv = V("Lv_" + key), "Upgrades.%s" % key
        val = lambda idx: 'ToString(GlobalVariable(%s.Values[%s]))' % (gv, idx)
        unit = q(u["Unit"])
        rows.append(group(u["Label"], [
            ev([isov("RowName", "Row", "=", str(i))],
               [set_text("RowName", '"%s   LV " + ToString(%s) + "/%d"' % (u["Label"].upper(), lv, mx))]),
            ev([isov("RowInfo", "Row", "=", str(i)), isv("Lv_" + key, "<", str(mx))],
               [set_text("RowInfo", '%s + %s + "   >   " + %s + %s' % (val(lv), unit, val(lv + " + 1"), unit))]),
            ev([isov("RowInfo", "Row", "=", str(i)), isv("Lv_" + key, ">=", str(mx))],
               [set_text("RowInfo", '%s + %s + "   (max)"' % (val(lv), unit))]),
            ev([isov("BuyText", "Row", "=", str(i)), isv("Lv_" + key, "<", str(mx))],
               [set_text("BuyText", 'ToString(GlobalVariable(%s.Costs[%s])) + " GEMS"' % (gv, lv))], [
            ]),
            ev([isov("BuyText", "Row", "=", str(i)), isv("Lv_" + key, ">=", str(mx))], [set_text("BuyText", q("MAX"))]),
            comment("The button is gold when you can buy the next level, grey when you can't (or at max)."),
            ev([isov("BuyButton", "Row", "=", str(i)), isv("Lv_" + key, "<", str(mx)),
                cmp(V("TotalGems"), ">=", "GlobalVariable(%s.Costs[%s])" % (gv, lv))],
               [A("ChangeColor", "BuyButton", q("255;255;255"))]),
            ev([isov("BuyButton", "Row", "=", str(i)), isv("Lv_" + key, "<", str(mx)),
                cmp(V("TotalGems"), "<", "GlobalVariable(%s.Costs[%s])" % (gv, lv))],
               [A("ChangeColor", "BuyButton", q("120;120;120"))]),
            ev([isov("BuyButton", "Row", "=", str(i)), isv("Lv_" + key, ">=", str(mx))],
               [A("ChangeColor", "BuyButton", q("120;120;120"))]),
            comment("Buy the next level: tap the row's button (a fresh release, after the first 0.3 s)."),
            ev([C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "BuyButton"),
                isov("BuyButton", "Row", "=", str(i)), isv("ShopTime", ">", "0.3")], [], [
                ev([isv("Lv_" + key, "<", str(mx)), cmp(V("TotalGems"), ">=", "GlobalVariable(%s.Costs[%s])" % (gv, lv))], [
                    setv("TotalGems", "-", "GlobalVariable(%s.Costs[%s])" % (gv, lv)),
                    setv("Lv_" + key, "+", "1"),
                    A("EcrireFichierExp", q("TowerRush"), q("TotalGems"), V("TotalGems")),
                    A("EcrireFichierExp", q("TowerRush"), q("Up_" + key), lv),
                    setv("Purchases", "+", "1"),
                    set_text("ShopMessage", q(u["Label"] + " upgraded!")),
                ]),
                ev([isv("Lv_" + key, "<", str(mx)), cmp(V("TotalGems"), "<", "GlobalVariable(%s.Costs[%s])" % (gv, lv))],
                   [set_text("ShopMessage", q("Not enough gems"))]),
            ]),
        ]))
    load = [ev([], [setv("Lv_" + key, "=", "0")], [
        ev([C("GroupExists", q("TowerRush"), q("Up_" + key))],
           [A("ReadNumberFromStorage", q("TowerRush"), q("Up_" + key), "Lv_" + key)]),
        ev([], [setv("Lv_" + key, "=", "clamp(round(Variable(Lv_%s)), 0, %d)" % (key, len(u["Values"]) - 1))]),
    ]) for key, u in UPGRADES]
    return [
        comment("SHOP - spend the saved gems (storage TowerRush / TotalGems) on upgrade levels (Up_<Upgrade>). "
                "Rows, labels, values and prices come from the global variable Upgrades; the game reads the levels "
                "in UpgradeManager."),
        ev([C("SceneJustBegins")], [], [
            ev([C("GroupExists", q("TowerRush"), q("TotalGems"))],
               [A("ReadNumberFromStorage", q("TowerRush"), q("TotalGems"), "TotalGems")]),
        ] + load),
        ev([], [setv("ShopTime", "+", "TimeDelta()"),
                set_text("ShopGems", '"GEMS  " + ToString(Variable(TotalGems))')]),
        group("Rows", rows),
        group("Centre the price on its button", [
            foreach("BuyButton", [], [], [
                ev([isov("BuyText", "Row", "=", "BuyButton.Variable(Row)")],
                   [set_xy("BuyText", "BuyButton.CenterX() - BuyText.Width() / 2", "BuyButton.CenterY() - BuyText.Height() / 2")]),
            ]),
        ]),
        ev([C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "PlayButton"), isv("ShopTime", ">", "0.3")],
           [A("Scene", q("Game"), "no")]),
    ]


POWERS = [(k, v) for k, v in DATA["PowerUps"].items() if v.get("Unlocked", 1)]
POWER_KEYS = [k for k, _ in POWERS]


def pu(k, f):
    return "GlobalVariable(PowerUps.%s.%s)" % (k, f)


def power_ups():
    strip = tune("ButtonStripY")
    out = [
        comment("POWER-UPS - owns: <Power>_Time (seconds left active), <Power>_Cool (seconds until ready), "
                "Salvo_Left, Salvo_Timer, PowerUsed, RocketsFired, Blasts, and the Ram, Rocket, Blast, LaserBeam "
                "objects and the power buttons.\n"
                "Tap a button in the bottom strip (or press 1/2/3) when it is ready: it fires, then recharges for "
                "PowerUps.<Power>.Cooldown seconds (the dark shade drains). Settings: the global variable PowerUps "
                "(Unlocked = 1 shows the button). Power-ups only lower Cell.HP; ObstacleGrid breaks the cells."),
        ev([C("SceneJustBegins")],
           [setv(k + "_Cool", "=", "%s * (1 - %s)" % (pu(k, "Cooldown"), tune("PowerStartCharged"))) for k in POWER_KEYS],
           [ev([isov("PowerButton", "Row", "=", str(i))],
               [A("AnimatableCapability::AnimatableBehavior::SetIndex", "PowerButton", "Animation", "=",
                  str(list(DATA["PowerUps"]).index(k)))]) for i, k in enumerate(POWER_KEYS)]),
        ev([], [setv(k + "_Cool", "=", "max(0, Variable(%s_Cool) - %s)" % (k, DT)) for k in POWER_KEYS]
               + [setv(k + "_Time", "=", "max(0, Variable(%s_Time) - %s)" % (k, DT)) for k in POWER_KEYS]),
    ]
    for i, (k, v) in enumerate(POWERS):
        start = [setv(k + "_Cool", "=", pu(k, "Cooldown")), setv(k + "_Time", "=", pu(k, "Duration")),
                 setv("PowerUsed", "+", "1")]
        if k == "Salvo":
            start += [setv("Salvo_Left", "=", pu(k, "Rockets")), setv("Salvo_Timer", "=", "0")]
        ready = [iss("State", q("Run")), isv(k + "_Cool", "<=", "0")]
        out.append(group("Activate " + v["Label"], [
            ev([C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "PowerButton"),
                isov("PowerButton", "Row", "=", str(i)), cmp('CursorY("UI", 0)', ">=", strip)] + ready, start),
            ev([C("KeyFromTextJustPressed", q(v["Key"]))] + ready, start),
        ]))
    if "Ram" in POWER_KEYS:
        out.append(group("Ram: a plough on the tower front crushes the low cells it touches", [
            ev([isv("Ram_Time", ">", "0"), iss("State", q("Run"))], [
                A("Show", "Ram"),
                set_xy("Ram", "Tower.X() + 22", "%s - %s" % (GROUND, pu("Ram", "Height"))),
                A("ResizableCapability::ResizableBehavior::SetSize", "Ram", "Resizable", pu("Ram", "Reach"), pu("Ram", "Height")),
            ], [
                ev([C("CollisionNP", "Ram", "Cell", "")], [setov("Cell", "HP", "-", "%s * %s" % (pu("Ram", "Dps"), DT))]),
            ]),
            ev([isv("Ram_Time", "<=", "0")], [A("Hide", "Ram")]),
        ]))
    if "Salvo" in POWER_KEYS:
        out.append(group("Rocket salvo: rockets toward the aim, each exploding on the first cell it meets", [
            ev([isv("Salvo_Left", ">", "0"), iss("State", q("Run"))], [setv("Salvo_Timer", "-", DT)], [
                ev([isv("Salvo_Timer", "<=", "0")], [
                    A("Create", "Rocket", V("PivotX"), V("PivotY"), q("")),
                    A("SetAngle", "Rocket", "=", "Variable(TurretAngle) + RandomFloatInRange(-%s, %s)"
                      % (pu("Salvo", "Spread"), pu("Salvo", "Spread"))),
                    setov("Rocket", "Extra", "=", tune("BarrelLength")),
                    A("SetZOrder", "Rocket", "=", "23"),
                    setv("Salvo_Left", "-", "1"),
                    setv("Salvo_Timer", "+", pu("Salvo", "Interval")),
                    setv("RocketsFired", "+", "1"),
                ]),
            ]),
            ev([], [setv("RocketStep", "=", "%s * %s" % (pu("Salvo", "Speed"), DT))]),
            foreach("Rocket", [], [setv("RocketHit", "=", "0")], [
                ev([C("Raycast", "Cell", "Rocket.X()", "Rocket.Y()", "Rocket.Angle()",
                      "Variable(RocketStep) + Rocket.Variable(Extra)", "HitX", "HitY")],
                   [setv("RocketHit", "=", "1")]),
                ev([isv("RocketHit", "=", "0"),
                    cmp("Rocket.Y() + sin(ToRad(Rocket.Angle())) * Variable(RocketStep)", ">", GROUND)],
                   [setv("RocketHit", "=", "1"), setv("HitX", "=", "Rocket.X()"), setv("HitY", "=", GROUND)]),
                ev([isv("RocketHit", "=", "1")], [
                    A("Create", "Blast", V("HitX"), V("HitY"), q("")),
                    A("SetZOrder", "Blast", "=", "28"),
                    A("ResizableCapability::ResizableBehavior::SetSize", "Blast", "Resizable",
                      "%s * 2" % pu("Salvo", "Radius"), "%s * 2" % pu("Salvo", "Radius")),
                    A("Delete", "Rocket"),
                    setv("Blasts", "+", "1"),
                ], [
                    ev([C("PickAllInstances", "Cell"), C("Distance", "Cell", "Blast", pu("Salvo", "Radius"))],
                       [setov("Cell", "HP", "-", pu("Salvo", "Damage"))]),
                ]),
                ev([isv("RocketHit", "=", "0")], [
                    set_xy("Rocket", "Rocket.X() + cos(ToRad(Rocket.Angle())) * (Variable(RocketStep) + Rocket.Variable(Extra))",
                           "Rocket.Y() + sin(ToRad(Rocket.Angle())) * (Variable(RocketStep) + Rocket.Variable(Extra))"),
                    setov("Rocket", "Extra", "=", "0"),
                ]),
            ]),
            ev([C("PosX", "Rocket", ">", "%s + 320" % CAM_X)], [A("Delete", "Rocket")]),
            ev([C("PosY", "Rocket", "<", "-60")], [A("Delete", "Rocket")]),
            ev([], [setov("Blast", "Life", "+", DT),
                    A("OpacityCapability::OpacityBehavior::SetValue", "Blast", "Opacity", "=",
                      "255 * (1 - Blast.Variable(Life) / 0.35)")]),
            ev([isov("Blast", "Life", ">", "0.35")], [A("Delete", "Blast")]),
        ]))
    if "Laser" in POWER_KEYS:
        out.append(group("Laser: a beam along the aim that cuts every cell it touches, any material", [
            ev([isv("Laser_Time", ">", "0"), iss("State", q("Run"))], [
                A("Show", "LaserBeam"),
                set_xy("LaserBeam", "Variable(PivotX) + cos(ToRad(Variable(TurretAngle))) * %s" % tune("BarrelLength"),
                       "Variable(PivotY) + sin(ToRad(Variable(TurretAngle))) * %s" % tune("BarrelLength")),
                A("SetAngle", "LaserBeam", "=", V("TurretAngle")),
                A("ResizableCapability::ResizableBehavior::SetSize", "LaserBeam", "Resizable", pu("Laser", "Range"),
                  "6 + RandomFloat(4)"),
            ], [
                ev([C("CollisionNP", "LaserBeam", "Cell", "")],
                   [setov("Cell", "HP", "-", "%s * %s" % (pu("Laser", "Dps"), DT))]),
            ]),
            ev([isv("Laser_Time", "<=", "0")], [A("Hide", "LaserBeam")]),
        ]))
    out.append(ev([iss("State", q("Over"))], [A("Hide", "LaserBeam"), A("Hide", "Ram")]))
    btn = []
    for i, (k, v) in enumerate(POWERS):
        btn += [
            ev([isov("PowerShade", "Row", "=", str(i))], [
                A("ResizableCapability::ResizableBehavior::SetHeight", "PowerShade", "Resizable", "=",
                  "60 * Variable(%s_Cool) / %s" % (k, pu(k, "Cooldown"))),
            ]),
            ev([isov("PowerButton", "Row", "=", str(i)), isv(k + "_Time", ">", "0")],
               [A("ChangeColor", "PowerButton", q("255;240;120"))]),
            ev([isov("PowerButton", "Row", "=", str(i)), isv(k + "_Time", "<=", "0"), isv(k + "_Cool", "<=", "0")],
               [A("ChangeColor", "PowerButton", q("255;255;255"))]),
            ev([isov("PowerButton", "Row", "=", str(i)), isv(k + "_Time", "<=", "0"), isv(k + "_Cool", ">", "0")],
               [A("ChangeColor", "PowerButton", q("150;150;150"))]),
        ]
    out.append(group("Buttons: shade = recharge left, yellow = active", btn))
    return out


def tower_controller():
    return [
        comment("TOWER CONTROLLER - owns: TowerStep, Blocked.\n"
                "The tower drives right at Tuning.TowerSpeed. Each frame it moves, and if its collision mask "
                "(the chassis, 44 x 80 px) now overlaps any surviving Cell it moves back and counts as blocked. "
                "A step is at most TowerSpeed x MaxFrameTime (about 4 px), smaller than a cell, so it can never "
                "skip through one. The tower fits through an opening at least 7 cells (84 px) high."),
        ev([iss("State", q("Run"))], [
            setv("TowerStep", "=", "%s * %s" % (V("TowerSpeed"), DT)),
            setv("Blocked", "=", "0"),
            A("MettreX", "Tower", "+", V("TowerStep")),
        ], [
            ev([C("CollisionNP", "Tower", "Cell", "")], [
                A("MettreX", "Tower", "-", V("TowerStep")),
                setv("Blocked", "=", "1"),
            ]),
            ev([isv("Blocked", "=", "0")],
               [A("AnimatableCapability::AnimatableBehavior::PlayAnimation", "Tower", "Animation")]),
            ev([isv("Blocked", "=", "1")],
               [A("AnimatableCapability::AnimatableBehavior::PauseAnimation", "Tower", "Animation")]),
        ]),
    ]


def turret_controller():
    pivot_x = 'Tower.PointX("TurretMount")'
    pivot_y = 'Tower.PointY("TurretMount")'
    maxdown = tune("TurretMaxDown")
    return [
        comment("TURRET CONTROLLER - owns: PivotX/Y, AimX/Y, TargetAngle, TurretAngle, InputTouch, "
                "LastTouchTime, HasAimed, Firing, FireCooldown, AimOffset, ShotsFired.\n"
                "Mouse: the cursor is the aim point, hold the left button to fire.\n"
                "Touch: press anywhere below the top bar and drag; the aim point is AimOffset px above the finger "
                "so the target stays visible (change it with the AIM button, saved in storage).\n"
                "The turret pivots on the Tower sprite's point TurretMount (move it in the sprite editor to match "
                "the art). The turret and bullets never collide with the tower: bullets only ray-cast against "
                "Cells and are drawn above the tower. The angle is kept between straight left (-180), up, and "
                "TurretMaxDown (88 = almost straight down, in front), turning through the top only."),
        group("Settings", [
            ev([C("SceneJustBegins")], [setv("AimOffset", "=", tune("AimOffsetDefault"))], [
                ev([C("GroupExists", q("TowerRush"), q("AimOffset"))],
                   [A("ReadNumberFromStorage", q("TowerRush"), q("AimOffset"), "AimOffset")]),
            ]),
            ev([C("MouseButtonFromTextReleased", q("Left")), C("IsCursorOnObject", "OffsetButton"),
                iss("State", q("Run"))], [
                setv("AimOffset", "+", tune("AimOffsetStep")),
            ], [
                ev([isv("AimOffset", ">", tune("AimOffsetMax"))], [setv("AimOffset", "=", "0")]),
                ev([], [A("EcrireFichierExp", q("TowerRush"), q("AimOffset"), V("AimOffset"))]),
            ]),
            ev([], [set_text("OffsetText", '"AIM +" + ToString(Variable(AimOffset))')]),
        ]),
        group("Touch or mouse?", [
            comment("A real touch switches to touch aiming. A mouse press switches back, unless a finger was "
                    "down in the last second (phones also send an imitation mouse click after a tap)."),
            ev([C("HasAnyTouchStarted")], [setv("InputTouch", "=", "1"), setv("HasAimed", "=", "1")]),
            ev([isv("InputTouch", "=", "1"), C("MouseButtonFromTextPressed", q("Left"))],
               [setv("LastTouchTime", "=", "TimeFromStart()")]),
            ev([C("HasAnyTouchOrMouseStarted"), C("HasAnyTouchStarted", inv=True),
                cmp("TimeFromStart() - Variable(LastTouchTime)", ">", "1")],
               [setv("InputTouch", "=", "0"), setv("HasAimed", "=", "1")]),
            ev([isv("HasAimed", "=", "0"), cmp('CursorX("UI", 0) + CursorY("UI", 0)', ">", "0")],
               [setv("HasAimed", "=", "1")]),
        ]),
        group("Aim", [
            comment("CursorX/CursorY of the base layer are world coordinates: they already include the "
                    "camera scroll, so the aim stays exact while the world moves."),
            ev([], [setv("PivotX", "=", pivot_x), setv("PivotY", "=", pivot_y)]),
            comment("Taps in the button strip at the bottom (Tuning.ButtonStripY) don't move the aim."),
            ev([cmp('CursorY("UI", 0)', "<", tune("ButtonStripY"))], [
                setv("AimX", "=", 'CursorX("", 0)'),
                setv("AimY", "=", 'CursorY("", 0) - Variable(AimOffset) * Variable(InputTouch)'),
            ]),
            ev([isv("HasAimed", "=", "0")], [
                setv("AimX", "=", "Variable(PivotX) + 200"),
                setv("AimY", "=", "Variable(PivotY)"),
            ]),
            ev([], [setv("TargetAngle", "=",
                         "ToDeg(atan2(Variable(AimY) - Variable(PivotY), Variable(AimX) - Variable(PivotX)))")]),
            comment("Down-and-back angles (aiming under or behind the tower) snap to the nearest allowed one."),
            ev([isv("TargetAngle", ">", maxdown), isv("TargetAngle", "<", "134")],
               [setv("TargetAngle", "=", maxdown)]),
            ev([isv("TargetAngle", ">=", "134")], [setv("TargetAngle", "=", "-180")]),
            ev([], [
                setv("TurretAngle", "+",
                     "clamp(Variable(TargetAngle) - Variable(TurretAngle), -%s * %s, %s * %s)"
                     % (tune("TurretTurnSpeed"), DT, tune("TurretTurnSpeed"), DT)),
                set_xy("Turret", V("PivotX"), V("PivotY")),
                A("SetAngle", "Turret", "=", V("TurretAngle")),
                set_xy("Crosshair", V("AimX"), V("AimY")),
            ]),
        ]),
        group("Fire", [
            ev([], [setv("Firing", "=", "0"), setv("FireCooldown", "-", DT)]),
            ev([iss("State", q("Run")), isv("HasAimed", "=", "1"), C("MouseButtonFromTextPressed", q("Left")),
                cmp('CursorY("UI", 0)', ">", "96"), cmp('CursorY("UI", 0)', "<", tune("ButtonStripY")),
                isv("Laser_Time", "<=", "0")], [setv("Firing", "=", "1")]),
            ev([isv("Firing", "=", "0"), isv("FireCooldown", "<", "0")], [setv("FireCooldown", "=", "0")]),
            ev([isv("Firing", "=", "1"), isv("FireCooldown", "<=", "0")], [
                setv("FireCooldown", "+", "1 / %s" % V("FireRate")),
                setv("ShotsFired", "+", "1"),
                A("Create", "Bullet", V("PivotX"), V("PivotY"), q("")),
                A("SetAngle", "Bullet", "=", "Variable(TurretAngle) + RandomFloatInRange(-Variable(Spread), Variable(Spread))"),
                setov("Bullet", "Extra", "=", tune("BarrelLength")),
                A("SetZOrder", "Bullet", "=", "22"),
                A("Show", "MuzzleFlash"),
                A("ResetObjectTimer", "MuzzleFlash", q("shown")),
            ]),
            ev([], [
                set_xy("MuzzleFlash", "Variable(PivotX) + cos(ToRad(Variable(TurretAngle))) * %s" % tune("BarrelLength"),
                       "Variable(PivotY) + sin(ToRad(Variable(TurretAngle))) * %s" % tune("BarrelLength")),
                A("SetAngle", "MuzzleFlash", "=", V("TurretAngle")),
            ]),
            ev([C("CompareObjectTimer", "MuzzleFlash", q("shown"), ">", "0.05")], [A("Hide", "MuzzleFlash")]),
        ]),
    ]


def break_children():
    """What happens when a cell breaks (ObstacleGrid runs this for every cell whose HP reached 0)."""
    return [
                    ev([C("LinkedObjects::PickObjectsLinkedTo", "Crack", "Cell")], [A("Delete", "Crack")]),
                    comment("A gem is released only when the cell holding it breaks; GemSystem takes it from here."),
                    ev([isov("Cell", "Gem", ">", "0")], [
                        A("Create", "Gem", "Cell.CenterX()", "Cell.CenterY()", q("")),
                        setov("Gem", "Type", "=", "Cell.Variable(Gem)"),
                        setov("Gem", "VX", "=", "RandomFloatInRange(-40, 90)"),
                        setov("Gem", "VY", "=", "RandomFloatInRange(-280, -170)"),
                        A("SetZOrder", "Gem", "=", "27"),
                        A("AnimatableCapability::AnimatableBehavior::SetIndex", "Gem", "Animation", "=",
                          "Gem.Variable(Type) - 1"),
                        setv("GemsReleased", "+", "1"),
                    ], [ev([C("LinkedObjects::PickObjectsLinkedTo", "GemMark", "Cell")], [A("Delete", "GemMark")])]
                       + [ev([isov("Gem", "Type", "=", str(i + 1))], [setov("Gem", "Value", "=", "GlobalVariable(Gems.%s.Value)" % n)])
                          for i, (n, _) in enumerate(GEM_TYPES)]),
                    repeat("3", [
                        A("Create", "Debris", "Cell.CenterX()", "Cell.CenterY()", q("")),
                        A("ChangeColor", "Debris",
                          "GlobalVariableString(Materials[Cell.VariableString(Material)].DebrisColor)"),
                        setov("Debris", "VX", "=", "RandomFloatInRange(-60, 160)"),
                        setov("Debris", "VY", "=", "RandomFloatInRange(-260, -60)"),
                        A("SetZOrder", "Debris", "=", "25"),
                    ]),
                    ev([], [A("Delete", "Cell")]),
                    ]


def projectile_system():
    return [
        comment("PROJECTILE SYSTEM - owns: BulletStep, BulletHit, HitX, HitY.\n"
                "Bullets are moved by a ray, not by forces: each frame a ray is cast from the bullet along its "
                "path for the distance it travels this frame (BulletSpeed x Dt). The first Cell the ray meets is "
                "hit - only that one - so a fast bullet can never pass through a thin cell. A new bullet starts "
                "at the turret pivot and its first ray also covers the barrel (Extra), so it leaves at the muzzle "
                "and still hits a cell touching the barrel."),
        ev([], [setv("BulletStep", "=", "%s * %s" % (tune("BulletSpeed"), DT))]),
        foreach("Bullet", [], [setv("BulletHit", "=", "0")], [
            ev([C("Raycast", "Cell", "Bullet.X()", "Bullet.Y()", "Bullet.Angle()",
                  "Variable(BulletStep) + Bullet.Variable(Extra)", "HitX", "HitY")], [
                setv("BulletHit", "=", "1"),
                setv("ShotsHit", "+", "1"),
                setov("Cell", "HP", "-", V("Damage")),
                A("Create", "Spark", V("HitX"), V("HitY"), q("")),
                A("SetZOrder", "Spark", "=", "26"),
                A("Delete", "Bullet"),
            ], [
                ev([isov("Cell", "HP", ">", "0")], [
                    A("TiledSpriteObject::SetColor", "Cell", q("255;170;140")),
                    A("ResetObjectTimer", "Cell", q("flash")),
                    setov("Cell", "Flash", "=", "1"),
                    setov("Cell", "Stage", "=",
                          "min(2, floor((1 - Cell.Variable(HP) / Cell.Variable(MaxHP)) * 3))"),
                ], [
                    comment("Damage shows as a crack overlay (one shared image for every material and picture), "
                            "linked to its cell so it goes when the cell goes."),
                    ev([isov("Cell", "Stage", ">=", "1"), isov("Cell", "HasCrack", "=", "0")], [
                        A("Create", "Crack", "Cell.X()", "Cell.Y()", q("")),
                        A("SetZOrder", "Crack", "=", "11"),
                        A("LinkedObjects::LinkObjects", "Cell", "Crack"),
                        setov("Cell", "HasCrack", "=", "1"),
                    ]),
                    ev([C("LinkedObjects::PickObjectsLinkedTo", "Crack", "Cell")],
                       [set_anim("Crack", '"Crack" + ToString(Cell.Variable(Stage))')]),
                ]),
            ]),
            ev([isv("BulletHit", "=", "0")], [
                set_xy("Bullet",
                       "Bullet.X() + cos(ToRad(Bullet.Angle())) * (Variable(BulletStep) + Bullet.Variable(Extra))",
                       "Bullet.Y() + sin(ToRad(Bullet.Angle())) * (Variable(BulletStep) + Bullet.Variable(Extra))"),
                setov("Bullet", "Extra", "=", "0"),
            ]),
        ]),
        group("Bullets that leave the play area", [
            ev([C("PosY", "Bullet", ">", GROUND)], [
                A("Create", "Spark", "Bullet.X()", GROUND, q("")),
                A("SetZOrder", "Spark", "=", "26"),
                A("Delete", "Bullet"),
            ]),
            ev([C("PosX", "Bullet", ">", "%s + 320" % CAM_X)], [A("Delete", "Bullet")]),
            ev([C("PosX", "Bullet", "<", "%s - 320" % CAM_X)], [A("Delete", "Bullet")]),
            ev([C("PosY", "Bullet", "<", "-60")], [A("Delete", "Bullet")]),
        ]),
    ]


def obstacle_grid():
    return [
        comment("OBSTACLE GRID - owns: CellsDestroyed, CellsSpawned, the Cell object variables (HP, MaxHP, "
                "Material, Flash) and the hit effects.\n"
                "Every Cell is its own 12 x 12 object with its own collision box, so a destroyed cell stops "
                "blocking at once and the tower can drive through any tunnel big enough for its chassis. "
                "Damage is shown by a Crack overlay (animations Crack1, Crack2) linked to the cell."),
        group("Break cells with no HP left (bullets, rockets, ram, laser)", [
            comment("Every damage source only lowers Cell.HP; this one place breaks the cells: crack and gem mark "
                    "removed, the gem released, debris thrown, the cell deleted."),
            ev([isov("Cell", "HP", "<=", "0")], [], [
                foreach("Cell", [], [setv("CellsDestroyed", "+", "1")], break_children()),
            ]),
        ]),
        group("Hit flash", [
            ev([isov("Cell", "Flash", "=", "1"), C("CompareObjectTimer", "Cell", q("flash"), ">", "0.06")],
               [A("TiledSpriteObject::SetColor", "Cell", q("255;255;255")), setov("Cell", "Flash", "=", "0")]),
        ]),
        group("Debris and sparks", [
            ev([], [
                setov("Debris", "VY", "+", "900 * %s" % DT),
                set_xy("Debris", "Debris.X() + Debris.Variable(VX) * %s" % DT,
                       "Debris.Y() + Debris.Variable(VY) * %s" % DT),
                setov("Debris", "Life", "+", DT),
                setov("Spark", "Life", "+", DT),
            ]),
            ev([isov("Debris", "Life", ">", "0.7")], [A("Delete", "Debris")]),
            ev([C("PosY", "Debris", ">", GROUND)], [A("Delete", "Debris")]),
            ev([isov("Spark", "Life", ">", "0.07")], [A("Delete", "Spark")]),
        ]),
    ]


def gem_system():
    tcx, tcy = "Tower.X()", "Tower.Y() - 48"
    return [
        comment("GEM SYSTEM - owns: RunGems, TotalGems, GemsCollected, GemsLost, GemsSaved, GemDX/DY/Dist/Step and the "
                "Gem / GemPopup objects once a gem is released (ProjectileSystem creates it when its cell breaks).\n"
                "A released gem pops out, falls and bounces on the ground. Once within Tuning.PickupRadius of the "
                "tower's centre it flies to the tower and its value is added to the run (no tapping). Gems left "
                "behind the screen are lost. At game over the run's gems are added to TotalGems (storage)."),
        ev([C("SceneJustBegins")], [], [
            ev([C("GroupExists", q("TowerRush"), q("TotalGems"))],
               [A("ReadNumberFromStorage", q("TowerRush"), q("TotalGems"), "TotalGems")]),
        ]),
        foreach("Gem", [], [], [
            ev([isov("Gem", "Magnet", "=", "0")], [
                setov("Gem", "VY", "+", "%s * %s" % (tune("GemGravity"), DT)),
                set_xy("Gem", "Gem.X() + Gem.Variable(VX) * %s" % DT, "Gem.Y() + Gem.Variable(VY) * %s" % DT),
            ], [
                ev([C("PosY", "Gem", ">", "%s - 6" % GROUND)], [
                    set_xy("Gem", "Gem.X()", "%s - 6" % GROUND),
                    setov("Gem", "VY", "=", "-Gem.Variable(VY) * %s" % tune("GemBounce")),
                    setov("Gem", "VX", "*", "0.7"),
                ], [
                    ev([cmp("abs(Gem.Variable(VY))", "<", "60")], [setov("Gem", "VY", "=", "0"), setov("Gem", "VX", "=", "0")]),
                ]),
            ]),
            ev([], [
                setv("GemDX", "=", "%s - Gem.X()" % tcx),
                setv("GemDY", "=", "%s - Gem.Y()" % tcy),
                setv("GemDist", "=", "sqrt(Variable(GemDX) * Variable(GemDX) + Variable(GemDY) * Variable(GemDY))"),
            ]),
            ev([isov("Gem", "Magnet", "=", "0"), isv("GemDist", "<", V("PickupRadius")), iss("State", q("Run"))], [
                setov("Gem", "Magnet", "=", "1"), setov("Gem", "Speed", "=", tune("GemMagnetSpeed")),
            ]),
            ev([isov("Gem", "Magnet", "=", "1"), isv("GemDist", "<", "14")], [
                setv("RunGems", "+", "Gem.Variable(Value)"),
                setv("GemsCollected", "+", "1"),
                A("Create", "GemPopup", "Tower.X() - 10", "Tower.Y() - 120", q("")),
                set_text("GemPopup", '"+" + ToString(Gem.Variable(Value))'),
                A("SetZOrder", "GemPopup", "=", "60"),
                A("Delete", "Gem"),
            ]),
            ev([isov("Gem", "Magnet", "=", "1"), isv("GemDist", ">=", "14")], [
                setov("Gem", "Speed", "+", "%s * %s" % (tune("GemMagnetAccel"), DT)),
                setv("GemStep", "=", "min(Variable(GemDist), Gem.Variable(Speed) * %s)" % DT),
                set_xy("Gem", "Gem.X() + Variable(GemDX) / Variable(GemDist) * Variable(GemStep)",
                       "Gem.Y() + Variable(GemDY) / Variable(GemDist) * Variable(GemStep)"),
            ]),
        ]),
        ev([C("PosX", "Gem", "<", "%s - 330" % CAM_X)], [setv("GemsLost", "+", "1"), A("Delete", "Gem")]),
        group("Gem popups", [
            ev([], [setov("GemPopup", "Life", "+", DT),
                    set_xy("GemPopup", "GemPopup.X()", "GemPopup.Y() - 50 * %s" % DT),
                    A("TextObject::Opacity", "GemPopup", "=", "255 * (1 - GemPopup.Variable(Life) / 0.8)")]),
            ev([isov("GemPopup", "Life", ">", "0.8")], [A("Delete", "GemPopup")]),
        ]),
        group("Bank the run's gems at game over", [
            ev([iss("State", q("Over")), isv("GemsSaved", "=", "0")], [
                setv("TotalGems", "+", V("RunGems")),
                A("EcrireFichierExp", q("TowerRush"), q("TotalGems"), V("TotalGems")),
                setv("GemsSaved", "=", "1"),
                set_text("GemsResultText", '"GEMS  +" + ToString(Variable(RunGems)) + "   (TOTAL " + '
                                           'ToString(Variable(TotalGems)) + ")"'),
            ]),
        ]),
    ]


def cloud_controller():
    return [
        comment("CLOUD CONTROLLER - owns: CloudX, CloudGap.\n"
                "The cloud is a wall of gas at world position CloudX (its right edge). It moves right at "
                "Tuning.CloudSpeed all the time, whatever the tower does; it starts Tuning.CloudStartGap px "
                "behind the back of the chassis. When it reaches the chassis the run ends."),
        ev([C("SceneJustBegins")], [setv("CloudX", "=", "Tower.X() - 22 - %s" % tune("CloudStartGap"))]),
        ev([iss("State", q("Run"))], [setv("CloudX", "+", "%s * %s" % (tune("CloudSpeed"), DT))]),
        comment("After the run ends the cloud rolls on a little to swallow the tower."),
        ev([iss("State", q("Over")), cmp(V("CloudX"), "<", "Tower.X() + 60")],
           [setv("CloudX", "+", "%s * 2 * %s" % (tune("CloudSpeed"), DT))]),
        ev([], [
            setv("CloudGap", "=", "Tower.X() - 22 - Variable(CloudX)"),
            set_xy("Cloud", V("CloudX"), "-20 + sin(TimeFromStart() * 1.7) * 8"),
        ]),
        ev([iss("State", q("Run")), isv("CloudGap", "<=", "0")], [sets("State", q("Dying"))]),
    ]


def camera_and_hud():
    warn = tune("WarningDistance")
    return [
        comment("CAMERA AND HUD - reads the other systems' variables, owns nothing else.\n"
                "The camera follows the tower horizontally with the tower in the left part of the screen "
                "(Tuning.CameraLead), so the next formations are visible. The ground and far hills are tiled "
                "sprites that follow the camera."),
        ev([], [
            A("SetCameraCenterX", "=", "Tower.X() + %s" % tune("CameraLead"), q(""), "0"),
            comment("Ground and far layer cover the screen and slide their picture: the ground moves with the "
                    "world, the far layer at 30 % (parallax). Any image width tiles seamlessly."),
            set_xy("Ground", "%s - 270" % CAM_X, GROUND),
            A("TiledSpriteObject::XOffset", "Ground", "=", "%s - 270" % CAM_X),
            set_xy("Hills", "%s - 270" % CAM_X, "%s + %d - %d" % (GROUND, FAR_SINK, FAR_H)),
            A("TiledSpriteObject::XOffset", "Hills", "=", "%s * 0.3" % CAM_X),
        ]),
        comment("Tuning.ShowFarLayer = 0 hides the scrolling far skyline (when the sky picture has its own)."),
        ev([C("SceneJustBegins"), cmp(tune("ShowFarLayer"), "=", "0")], [A("Hide", "Hills")]),
        group("HUD", [
            ev([], [
                set_text("DistanceText", 'ToString(floor(Variable(Distance))) + " m"'),
                set_text("BestText", '"BEST " + ToString(Variable(BestDistance)) + " m"'),
                set_text("GasText", '"GAS " + ToString(max(0, floor(Variable(CloudGap) / %s))) + " m BEHIND"'
                         % tune("PixelsPerMeter")),
                set_opacity("WarningEdge",
                            "clamp((%s - Variable(CloudGap)) / %s, 0, 1) * (190 + 65 * sin(TimeFromStart() * 14))"
                            % (warn, warn)),
            ]),
            ev([], [set_text("GemText", '"GEMS " + ToString(Variable(RunGems))')]),
            ev([isv("CloudGap", "<", warn)], [A("TextObject::ChangeColor", "GasText", q("255;80;60"))]),
            ev([isv("CloudGap", ">=", warn)], [A("TextObject::ChangeColor", "GasText", q("200;235;150"))]),
            ev([isv("ShotsFired", ">", "0")], [A("Hide", "HintText")]),
        ]),
    ]


SYSTEMS = [
    ("UpgradeManager", upgrade_manager), ("RunManager", run_manager), ("ObstacleGenerator", obstacle_generator),
    ("TurretController", turret_controller), ("PowerUps", power_ups), ("ProjectileSystem", projectile_system),
    ("ObstacleGrid", obstacle_grid), ("TowerController", tower_controller), ("GemSystem", gem_system),
    ("CloudController", cloud_controller), ("CameraAndHUD", camera_and_hud),
]

SCENE_VARS = {
    **{"Lv_" + k: 0 for k in DATA["Upgrades"]},
    "State": "", "Dt": 0, "StartX": 0, "Distance": 0, "BestDistance": 0, "OverTime": 0,
    "NextFormationX": 0, "FormationCount": 0, "FormationIndex": 0, "Shape": "", "ShapeW": 0, "ShapeRows": 0,
    "SpawnX": 0, "FormationArt": 0, "Idx": 0, "Col": 0, "Row": 0, "Ch": "", "CellsSpawned": 0,
    "TowerStep": 0, "Blocked": 0,
    "PivotX": 0, "PivotY": 0, "AimX": 0, "AimY": 0, "TargetAngle": 0, "TurretAngle": 0, "InputTouch": 0,
    "LastTouchTime": -10, "HasAimed": 0, "Firing": 0, "FireCooldown": 0, "AimOffset": 0, "ShotsFired": 0,
    "BulletStep": 0, "BulletHit": 0, "HitX": 0, "HitY": 0, "ShotsHit": 0,
    "CellsDestroyed": 0, "CloudX": 0, "CloudGap": 0, "LastFormation": -1,
    "GemsToPlace": 0, "GemPlaced": 0, "GemRoll": 0, "GemType": 0, "GemsReleased": 0,
    "RunGems": 0, "TotalGems": 0, "GemsCollected": 0, "GemsLost": 0, "GemsSaved": 0,
    "GemDX": 0, "GemDY": 0, "GemDist": 0, "GemStep": 0,
    "Damage": 1, "FireRate": 6, "Spread": 0, "TowerSpeed": 85, "PickupRadius": 90,
    **{k + "_Time": 0 for k in DATA["PowerUps"]}, **{k + "_Cool": 0 for k in DATA["PowerUps"]},
    "Salvo_Left": 0, "Salvo_Timer": 0, "PowerUsed": 0, "RocketStep": 0, "RocketHit": 0, "RocketsFired": 0, "Blasts": 0,
}


# ======================================================================= OBJECTS
def var(name, value):
    if isinstance(value, bool):
        return {"name": name, "type": "boolean", "value": value}
    if isinstance(value, (int, float)):
        return {"name": name, "type": "number", "value": value}
    if isinstance(value, str):
        return {"name": name, "type": "string", "value": value}
    if isinstance(value, list):
        return {"name": name, "type": "array", "children": [_child(v) for v in value]}
    if isinstance(value, dict):
        return {"name": name, "type": "structure", "children": [var(k, v) for k, v in value.items()]}
    raise TypeError(value)


def _child(value):
    v = var("", value)
    v.pop("name")
    return v


def base_obj(name, type_, variables=None):
    return {"assetStoreId": "", "name": name, "persistentUuid": uid("obj-" + name), "type": type_,
            "variables": [var(k, v) for k, v in (variables or {}).items()], "effects": [], "behaviors": []}


def frame(image, origin=(0, 0), points=None, mask=None, center=None):
    return {"hasCustomCollisionMask": mask is not None, "image": image,
            "points": [{"name": n, "x": x, "y": y} for n, (x, y) in (points or {}).items()],
            "originPoint": {"name": "origine", "x": origin[0], "y": origin[1]},
            "centerPoint": ({"automatic": False, "name": "centre", "x": center[0], "y": center[1]} if center
                            else {"automatic": True, "name": "centre", "x": 0, "y": 0}),
            "customCollisionMask": [[{"x": x, "y": y} for x, y in mask]] if mask else []}


def sprite(name, animations, variables=None, loop_time=None, **frame_kw):
    """animations: [(name, [images])]. loop_time: seconds per frame for looping animations."""
    o = base_obj(name, "Sprite", variables)
    o.update({"adaptCollisionMaskAutomatically": False, "updateIfNotVisible": False, "animations": [
        {"name": an, "useMultipleDirections": False,
         "directions": [{"looping": loop_time is not None, "timeBetweenFrames": loop_time or 1,
                         "sprites": [frame(img, **frame_kw) for img in imgs]}]}
        for an, imgs in animations]})
    return o


def tiled(name, image, w, h):
    o = base_obj(name, "TiledSpriteObject::TiledSprite")
    o.update({"texture": image, "width": w, "height": h})
    return o


def text(name, size, color="255;255;255", string="", bold=True, outline=True):
    o = base_obj(name, "TextObject::Text")
    o["content"] = {"bold": bold, "isOutlineEnabled": outline, "isShadowEnabled": False, "italic": False,
                    "outlineColor": "20;16;24", "outlineThickness": 3, "shadowAngle": 90, "shadowBlurRadius": 0,
                    "shadowColor": "0;0;0", "shadowDistance": 3, "shadowOpacity": 160, "smoothed": True,
                    "underlined": False, "text": string, "font": "", "textAlignment": "left",
                    "verticalTextAlignment": "top", "characterSize": size, "lineHeight": 0, "color": color}
    return o


def tower_frames():
    """Track animation frames: the owner's art/tower/tower_<n>.png if any, else the placeholders, in number order."""
    def frames(folder):
        fs = glob.glob(os.path.join(folder, "tower_*.png"))
        fs = [f for f in fs if re.fullmatch(r"tower_\d+\.png", os.path.basename(f))]
        return [os.path.basename(f) for f in sorted(fs, key=lambda f: int(re.findall(r"\d+", os.path.basename(f))[0]))]
    return frames(os.path.join(ROOT, "art", "tower")) or frames(os.path.join(GAME, "assets"))


def build_objects():
    tower_mask = [(8, 16), (52, 16), (52, 96), (8, 96)]
    cell = tiled("Cell", "tile_stone.png", 12, 12)
    cell["variables"] = [var(k, v) for k, v in {"HP": 1, "MaxHP": 1, "Material": "Stone", "Flash": 0, "Stage": 0,
                                                 "HasCrack": 0, "Batch": 0, "Gem": 0, "SliceX": 0, "SliceY": 0}.items()]
    return [
        sprite("Tower", [("Drive", tower_frames())], loop_time=DATA.get("TowerArt", {}).get("TrackFrameTime", 0.09),
               origin=(30, 96),
               mask=tower_mask, points={"TurretMount": tuple(MOUNT)}),
        sprite("Turret", [("Idle", ["turret.png"])], origin=(8, 8), points={"Muzzle": (42, 8)}),
        sprite("Bullet", [("Fly", ["bullet.png"])], {"Extra": 0}, origin=(11, 2)),
        sprite("MuzzleFlash", [("Flash", ["muzzle_flash.png"])], origin=(0, 8)),
        cell,
        sprite("Crack", [("Crack1", ["crack_1.png"]), ("Crack2", ["crack_2.png"])]),
        sprite("Ram", [("Idle", ["power_ram.png"])]),
        sprite("Rocket", [("Fly", ["power_rocket.png"])], {"Extra": 0}, origin=(13, 3)),
        sprite("Blast", [("Boom", ["power_blast.png"])], {"Life": 0}, origin=(32, 32)),
        # Rotates around its start (the centre point), not its middle: the beam leaves the muzzle.
        sprite("LaserBeam", [("Beam", ["power_laser.png"])], origin=(0, 4), center=(0, 4)),
        sprite("PowerButton", [(k, ["power_button_%s.png" % k.lower()]) for k in DATA["PowerUps"]], {"Row": 0}),
        sprite("PowerShade", [("Idle", ["power_shade.png"])], {"Row": 0}),
        sprite("Gem", [(n, ["gem_%s.png" % n.lower()]) for n, _ in GEM_TYPES],
               {"Type": 1, "Value": 1, "VX": 0, "VY": 0, "Magnet": 0, "Speed": 0}, origin=(6, 6)),
        sprite("GemMark", [(n, ["gem_mark_%s.png" % n.lower()]) for n, _ in GEM_TYPES]),
        dict(text("GemPopup", 24, "120;230;255", "+1"), variables=[var("Life", 0)]),
        sprite("Debris", [("Chip", ["debris.png"])], {"VX": 0, "VY": 0, "Life": 0}, origin=(2, 2)),
        sprite("Spark", [("Hit", ["spark.png"])], {"Life": 0}, origin=(5, 5)),
        sprite("Crosshair", [("Aim", ["crosshair.png"])], origin=(16, 16)),
        sprite("Cloud", [("Roll", ["cloud_0.png", "cloud_1.png", "cloud_2.png"])], loop_time=0.22, origin=(600, 0)),
        tiled("Ground", "ground.png", 540, GROUND_H),
        tiled("Hills", "hills.png", 540, FAR_H),
        sprite("Sky", [("Idle", ["sky.png"])]),
        # UI layer
        text("DistanceText", 40, string="0 m"),
        text("BestText", 20, "255;225;150", "BEST 0 m"),
        text("GasText", 20, "200;235;150", "GAS"),
        text("GemText", 20, "120;230;255", "GEMS 0"),
        text("GemsResultText", 22, "120;230;255", "GEMS +0"),
        sprite("OffsetButton", [("Idle", ["button_small.png"])]),
        text("OffsetText", 20, string="AIM +80"),
        text("HintText", 22, "255;255;255", "Hold and drag to aim and fire\nMouse: aim, hold left button"),
        sprite("WarningEdge", [("Idle", ["warning_edge.png"])]),
        sprite("Panel", [("Idle", ["panel.png"])]),
        text("GameOverTitle", 44, "160;230;80", "ENGULFED!"),
        text("ResultText", 30, string="DISTANCE 0 m"),
        text("BestResultText", 26, "255;225;150", "BEST 0 m"),
        sprite("RestartButton", [("Idle", ["button.png"])]),
        text("RestartText", 28, "40;24;8", "RESTART", outline=False),
        sprite("UpgradesButton", [("Idle", ["button.png"])]),
        text("UpgradesText", 26, "40;24;8", "UPGRADES", outline=False),
    ]


def inst(name, x, y, z=0, layer="", w=None, h=None):
    d = {"angle": 0, "customSize": w is not None, "height": h or 0, "width": w or 0, "layer": layer,
         "locked": False, "name": name, "persistentUuid": uid("inst-%s-%s-%s" % (name, x, y)),
         "x": x, "y": y, "zOrder": z, "numberProperties": [], "stringProperties": [], "initialVariables": []}
    return d


def build_instances():
    g = T["GroundY"]
    tx = T["TowerStartX"]
    return [
        inst("Sky", 0, 0, 0, "Sky"),
        inst("Hills", 0, g + FAR_SINK - FAR_H, -10, w=540, h=FAR_H),
        inst("Ground", 0, g, 1, w=540, h=GROUND_H),
        inst("Tower", tx, g, 20),
        inst("Turret", tx + MOUNT[0] - 30, g - 96 + MOUNT[1], 23),
        inst("MuzzleFlash", tx + MOUNT[0] - 30 + 34, g - 96 + MOUNT[1], 24),
        inst("Cloud", tx - 22 - T["CloudStartGap"], -20, 40),
        inst("Crosshair", tx + 220, g - 86, 50),
        *power_instances(),
        # UI (540 x 960)
        inst("WarningEdge", 0, 0, 0, "UI"),
        inst("DistanceText", 16, 10, 5, "UI"),
        inst("BestText", 18, 58, 5, "UI"),
        inst("GasText", 18, 84, 5, "UI"),
        inst("GemText", 18, 108, 5, "UI"),
        inst("OffsetButton", 374, 14, 5, "UI"),
        inst("OffsetText", 398, 26, 6, "UI"),
        inst("HintText", 70, 820, 5, "UI"),
        inst("Panel", 50, 300, 10, "UI"),
        inst("GameOverTitle", 150, 330, 11, "UI"),
        inst("ResultText", 110, 395, 11, "UI"),
        inst("BestResultText", 110, 436, 11, "UI"),
        inst("GemsResultText", 110, 474, 11, "UI"),
        inst("RestartButton", 60, 515, 11, "UI", w=200, h=64),
        inst("RestartText", 103, 530, 12, "UI"),
        inst("UpgradesButton", 280, 515, 11, "UI", w=200, h=64),
        inst("UpgradesText", 312, 531, 12, "UI"),
    ]


def power_instances():
    out = []
    y = T.get("ButtonStripY", 892)
    for i, (k, v) in enumerate(POWERS):
        x = 22 + i * 172
        b = inst("PowerButton", x, y, 20, "UI", w=150, h=60)
        sh = inst("PowerShade", x, y, 21, "UI", w=150, h=60)
        for o in (b, sh):
            o["initialVariables"] = [var("Row", i)]
            o["persistentUuid"] = uid("power-%s-%d" % (o["name"], i))
        b["numberProperties"] = [{"name": "animation", "value": list(DATA["PowerUps"]).index(k)}]
        out += [b, sh]
    out += [inst("Ram", -500, -500, 24), inst("LaserBeam", -500, -800, 24)]
    return out


def layer(name):
    return {"ambientLightColorB": 200, "ambientLightColorG": 200, "ambientLightColorR": 200,
            "camera2DPlaneMaxDrawingDistance": 5000, "camera3DFarPlaneDistance": 10000,
            "camera3DFieldOfView": 45, "camera3DNearPlaneDistance": 3, "cameraType": "",
            "followBaseLayerCamera": False, "isLightingLayer": False, "isLocked": False, "name": name,
            "renderingType": "2d", "visibility": True,
            "cameras": [{"defaultSize": True, "defaultViewport": True, "height": 0, "viewportBottom": 1,
                         "viewportLeft": 0, "viewportRight": 1, "viewportTop": 0, "width": 0}],
            "effects": []}


def build_resources():
    res = []
    for f in sorted(glob.glob(os.path.join(GAME, "assets", "*.png"))):
        n = os.path.basename(f)
        res.append({"file": "assets/" + n, "kind": "image", "metadata": "", "name": n, "smoothed": False,
                    "userAdded": True})
    return res


def global_variables():
    forms = [{"Name": f["Name"], "Shape": "|".join(f["Rows"]), "Art": 1 if f["Texture"] else 0}
             for f in ALL_FORMATIONS]
    for f in ALL_FORMATIONS:
        widths = {len(r) for r in f["Rows"]}
        assert len(widths) == 1, "Formation %s: every row needs the same width" % f["Name"]
    deck = [i for i, f in enumerate(ALL_FORMATIONS) for _ in range(int(f.get("Weight", 1)))]
    easy = [i for i, f in enumerate(ALL_FORMATIONS) if lane_cost(f) <= T.get("EasyLaneShots", 40)]
    return [var("Tuning", T), var("Materials", DATA["Materials"]), var("Formations", forms),
            var("FormationDeck", deck), var("EasyDeck", easy), var("Gems", DATA["Gems"]),
            var("Upgrades", DATA["Upgrades"]), var("PowerUps", DATA["PowerUps"])]


def scene_json(name, objects, instances, events, layers, variables, groups, bg=(0, 0, 0)):
    return {
        "b": bg[2], "v": bg[1], "r": bg[0],
        "disableInputWhenNotFocused": True, "mangledName": name, "name": name,
        "standardSortMethod": True, "stopSoundsOnStartup": True, "title": "",
        "uiSettings": {"grid": False, "gridType": "rectangular", "gridWidth": 12, "gridHeight": 12, "gridDepth": 32,
                       "gridOffsetX": 0, "gridOffsetY": 0, "gridOffsetZ": 0, "gridColor": 10401023, "gridAlpha": 0.8,
                       "snap": False, "zoomFactor": 0.8, "windowMask": False, "selectedLayer": "",
                       "gameEditorMode": "instances-editor"},
        "objectsGroups": groups, "variables": variables, "instances": instances, "objects": objects,
        "objectsFolderStructure": {"folderName": "__ROOT", "children": [{"objectName": o["name"]} for o in objects]},
        "events": events, "layers": layers, "behaviorsSharedData": [],
    }


def build_shop():
    """Shop scene objects and layout (540 x 960): title, gem count, one row per upgrade, PLAY."""
    objs = [
        text("ShopTitle", 44, "255;225;150", "UPGRADES"),
        text("ShopGems", 28, "120;230;255", "GEMS 0"),
        text("ShopMessage", 22, "230;230;230", "Tap a price to buy the next level"),
        sprite("RowPanel", [("Idle", ["panel_row.png"])], {"Row": 0}),
        dict(text("RowName", 24, "255;255;255", "NAME"), variables=[var("Row", 0)]),
        dict(text("RowInfo", 20, "200;235;150", "INFO"), variables=[var("Row", 0)]),
        sprite("BuyButton", [("Idle", ["button.png"])], {"Row": 0}),
        dict(text("BuyText", 22, "40;24;8", "0 GEMS", outline=False), variables=[var("Row", 0)]),
        sprite("PlayButton", [("Idle", ["button.png"])]),
        text("PlayText", 34, "40;24;8", "PLAY", outline=False),
    ]
    insts = [inst("ShopTitle", 150, 34, 5), inst("ShopGems", 30, 108, 5), inst("ShopMessage", 30, 150, 5)]
    for i in range(len(UPGRADES)):
        y = 200 + i * 124
        for o in (inst("RowPanel", 20, y, 1, w=500, h=110), inst("RowName", 38, y + 14, 5),
                  inst("RowInfo", 38, y + 58, 5), inst("BuyButton", 352, y + 26, 4, w=150, h=58),
                  inst("BuyText", 372, y + 44, 6)):
            o["initialVariables"] = [var("Row", i)]
            o["persistentUuid"] = uid("shop-%s-%d" % (o["name"], i))
            insts.append(o)
    insts += [inst("PlayButton", 150, 840, 5), inst("PlayText", 228, 856, 6)]
    return objs, insts


def build_project():
    objects = build_objects()
    scene_events = [
        comment("TOWER RUSH. Every system is an external event (Project manager > External "
                "events), included here in this order. Tuning numbers are the global variable Tuning; "
                "formations are the global variable Formations."),
    ] + [link(name) for name, _ in SYSTEMS]
    scene = scene_json("Game", objects, build_instances(), scene_events, [layer("Sky"), layer(""), layer("UI")],
                       [var(k, v) for k, v in SCENE_VARS.items()],
                       [{"name": "GameOverUI", "objects": [{"name": n} for n in (
                           "Panel", "GameOverTitle", "ResultText", "BestResultText", "GemsResultText", "RestartButton",
                           "RestartText", "UpgradesButton", "UpgradesText")]}], bg=(236, 196, 150))
    shop_objs, shop_insts = build_shop()
    shop = scene_json("Shop", shop_objs, shop_insts, [comment("The shop screen's events are the external events "
                      "\"ShopScreen\"."), link("ShopScreen")], [layer("")],
                      [var(k, v) for k, v in {**{"Lv_" + k: 0 for k in DATA["Upgrades"]}, "TotalGems": 0,
                                               "ShopTime": 0, "Purchases": 0}.items()], [], bg=(34, 40, 42))
    return {
        "firstLayout": "Game",
        "gdVersion": {"build": 285, "major": 5, "minor": 6, "revision": 0},
        "properties": {
            "adaptGameResolutionAtRuntime": False, "antialiasingMode": "none", "antialisingEnabledOnMobile": False,
            "folderProject": False, "orientation": "portrait", "packageName": "com.lonewolfproduction.towerrush",
            "pixelsRounding": True, "projectUuid": uid("project"), "scaleMode": "nearest",
            "sizeOnStartupMode": "", "templateSlug": "", "useDeprecatedZeroAsDefaultStringVariable": False,
            "version": "0.1.0", "name": "Tower Rush",
            "description": "Blast a path through stone with your tracked tower before the gas cloud catches you.",
            "author": "", "windowWidth": 540, "windowHeight": 960, "latestCompilationDirectory": "",
            "maxFPS": 60, "minFPS": 20, "verticalSync": False, "platformSpecificAssets": {},
            "loadingScreen": {"backgroundColor": 0, "backgroundFadeInDuration": 0.2,
                              "backgroundImageResourceName": "", "gdevelopLogoStyle": "light",
                              "logoAndProgressFadeInDuration": 0.2, "logoAndProgressLogoFadeInDelay": 0.2,
                              "minDuration": 0, "progressBarColor": 16777215, "progressBarHeight": 16,
                              "progressBarMaxWidth": 300, "progressBarMinWidth": 40,
                              "progressBarWidthPercent": 40, "showGDevelopSplash": False, "showProgressBar": True},
            "watermark": {"placement": "bottom-left", "showWatermark": False},
            "authorIds": [], "authorUsernames": [], "categories": ["action"], "playableDevices": ["mobile", "keyboard"],
            "extensionProperties": [], "platforms": [{"name": "GDevelop JS platform"}],
            "currentPlatform": "GDevelop JS platform",
        },
        "resources": {"resources": build_resources()},
        "objects": [], "objectsFolderStructure": {"folderName": "__ROOT", "children": []}, "objectsGroups": [],
        "variables": global_variables(),
        "layouts": [scene, shop],
        "externalEvents": [{"associatedLayout": "Game", "lastChangeTimeStamp": 0, "name": n, "events": f()}
                           for n, f in SYSTEMS]
                          + [{"associatedLayout": "Shop", "lastChangeTimeStamp": 0, "name": "ShopScreen",
                              "events": shop_events()}],
        "tests": [], "eventsFunctionsExtensions": [], "externalLayouts": [],
    }


def _hash(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest() if os.path.exists(path) else None


def main():
    if os.path.exists(OUT) and os.path.exists(STAMP) and "--force" not in sys.argv:
        if json.load(open(STAMP)).get("sha256") != _hash(OUT):
            print("game/TowerRush.json was changed (in GDevelop?) since the last build. Not overwriting it.\n"
                  "Use --force to replace it anyway (the editor changes are lost).")
            sys.exit(1)
    project = build_project()
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(project, f, indent=1, ensure_ascii=False)
    json.dump({"sha256": _hash(OUT)}, open(STAMP, "w"))
    print("Wrote", os.path.relpath(OUT, ROOT))


if __name__ == "__main__":
    main()
