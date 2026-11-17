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
import sys
import uuid

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
GAME = os.path.join(ROOT, "game")
OUT = os.path.join(GAME, "TowerRush.json")
STAMP = os.path.join(GAME, ".build_stamp.json")
DATA = json.load(open(os.path.join(ROOT, "data", "game_data.json"), encoding="utf-8"))
META = json.load(open(os.path.join(ROOT, "tools", "gd", "instructions.json")))
T = DATA["Tuning"]
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
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"), C("KeyFromTextJustPressed", q("r"))],
               [A("Scene", q("Game"), "no")]),
            ev([iss("State", q("Over")), isv("OverTime", ">", "0.5"), C("KeyFromTextJustPressed", q("Space"))],
               [A("Scene", q("Game"), "no")]),
        ]),
    ]


def obstacle_generator():
    cs = tune("CellSize")
    cell_events = []
    for mat, info in DATA["Materials"].items():
        cell_events.append(ev([iss("Ch", q(info["Char"]))], [
            A("Create", "Cell", "Variable(SpawnX) + Variable(Col) * %s" % cs,
              "%s - (Variable(ShapeRows) - Variable(Row)) * %s" % (GROUND, cs), q("")),
            A("SetStringObjectVariable", "Cell", "Material", "=", q(mat)) if "A:SetStringObjectVariable" in META
            else A("ModVarObjetTxt", "Cell", "Material", "=", q(mat)),
            setov("Cell", "MaxHP", "=", "GlobalVariable(Materials.%s.HP)" % mat),
            setov("Cell", "HP", "=", "GlobalVariable(Materials.%s.HP)" % mat),
            set_anim("Cell", q(mat + "0")),
            A("SetZOrder", "Cell", "=", "10"),
            setv("CellsSpawned", "+", "1"),
        ]))
    return [
        comment("OBSTACLE GENERATOR - owns: NextFormationX, FormationCount, FormationIndex, Shape, ShapeW, "
                "ShapeRows, SpawnX, Idx, Col, Row, Ch, CellsSpawned.\n"
                "Formations are text grids in the global variable Formations (one string per formation, rows "
                "separated by |, top row first, the bottom row sits on the ground). Each character is a cell: "
                "# Stone, H Hardstone, . empty. Add a material: add it to the global Materials (with its Char), "
                "add animations <Name>0..2 to Cell, and copy one of the 'Character' events below."),
        group("Spawn the next formation ahead of the camera", [
            ev([cmp(V("NextFormationX"), "<", "%s + 270 + %s" % (CAM_X, tune("SpawnAhead")))], [
                setv("FormationIndex", "=",
                     "RandomInRange(%s, GlobalVariableChildCount(Formations) - 1)" % tune("IntroFormations")),
            ], [
                comment("The first formations are always the intro ones, in order (Gate, then Cave)."),
                ev([cmp(V("FormationCount"), "<", tune("IntroFormations"))],
                   [setv("FormationIndex", "=", V("FormationCount"))]),
                ev([], [
                    sets("Shape", "GlobalVariableString(Formations[Variable(FormationIndex)].Shape)"),
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
                ev([], [
                    setv("NextFormationX", "=", "Variable(SpawnX) + Variable(ShapeW) * %s + RandomInRange(%s, %s)"
                         % (cs, tune("GapMin"), tune("GapMax"))),
                    setv("FormationCount", "+", "1"),
                ]),
            ]),
        ]),
        group("Remove what is far behind", [
            comment("Everything behind the left edge of the screen is gone for good (the cloud is there)."),
            ev([C("PosX", "Cell", "<", "%s - 330" % CAM_X)], [A("Delete", "Cell")]),
        ]),
    ]


def tower_controller():
    return [
        comment("TOWER CONTROLLER - owns: TowerStep, Blocked.\n"
                "The tower drives right at Tuning.TowerSpeed. Each frame it moves, and if its collision mask "
                "(the chassis, 44 x 80 px) now overlaps any surviving Cell it moves back and counts as blocked. "
                "A step is at most TowerSpeed x MaxFrameTime (about 4 px), smaller than a cell, so it can never "
                "skip through one. The tower fits through an opening at least 7 cells (84 px) high."),
        ev([iss("State", q("Run"))], [
            setv("TowerStep", "=", "%s * %s" % (tune("TowerSpeed"), DT)),
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
    pivot_x = "Tower.X() + 22"
    pivot_y = "Tower.Y() - 86"
    maxdown = tune("TurretMaxDown")
    return [
        comment("TURRET CONTROLLER - owns: PivotX/Y, AimX/Y, TargetAngle, TurretAngle, InputTouch, "
                "LastTouchTime, HasAimed, Firing, FireCooldown, AimOffset, ShotsFired.\n"
                "Mouse: the cursor is the aim point, hold the left button to fire.\n"
                "Touch: press anywhere below the top bar and drag; the aim point is AimOffset px above the finger "
                "so the target stays visible (change it with the AIM button, saved in storage).\n"
                "The turret sits on the front-top corner of the chassis. Its angle is kept between straight "
                "left (-180), up, and TurretMaxDown (88 = almost straight down, in front of the tower), and it "
                "turns through the top only, so it never points or fires through the chassis."),
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
            ev([], [
                setv("PivotX", "=", pivot_x),
                setv("PivotY", "=", pivot_y),
                setv("AimX", "=", 'CursorX("", 0)'),
                setv("AimY", "=", 'CursorY("", 0) - Variable(AimOffset) * Variable(InputTouch)'),
            ]),
            ev([isv("HasAimed", "=", "0")], [
                setv("AimX", "=", "Variable(PivotX) + 200"),
                setv("AimY", "=", "Variable(PivotY)"),
            ]),
            ev([], [setv("TargetAngle", "=",
                         "ToDeg(atan2(Variable(AimY) - Variable(PivotY), Variable(AimX) - Variable(PivotX)))")]),
            comment("Keep the barrel out of the chassis: down-and-back angles snap to the nearest allowed one."),
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
                cmp('CursorY("UI", 0)', ">", "96")], [setv("Firing", "=", "1")]),
            ev([isv("Firing", "=", "0"), isv("FireCooldown", "<", "0")], [setv("FireCooldown", "=", "0")]),
            ev([isv("Firing", "=", "1"), isv("FireCooldown", "<=", "0")], [
                setv("FireCooldown", "+", "1 / %s" % tune("FireRate")),
                setv("ShotsFired", "+", "1"),
                A("Create", "Bullet", V("PivotX"), V("PivotY"), q("")),
                A("SetAngle", "Bullet", "=", V("TurretAngle")),
                setov("Bullet", "Extra", "=", tune("BarrelLength")),
                A("SetZOrder", "Bullet", "=", "15"),
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
                setov("Cell", "HP", "-", tune("BulletDamage")),
                A("Create", "Spark", V("HitX"), V("HitY"), q("")),
                A("SetZOrder", "Spark", "=", "26"),
                A("Delete", "Bullet"),
            ], [
                ev([isov("Cell", "HP", "<=", "0")], [
                    setv("CellsDestroyed", "+", "1"),
                ], [
                    repeat("3", [
                        A("Create", "Debris", "Cell.CenterX()", "Cell.CenterY()", q("")),
                        setov("Debris", "VX", "=", "RandomFloatInRange(-60, 160)"),
                        setov("Debris", "VY", "=", "RandomFloatInRange(-260, -60)"),
                        A("SetZOrder", "Debris", "=", "25"),
                    ]),
                    ev([], [A("Delete", "Cell")]),
                ]),
                ev([isov("Cell", "HP", ">", "0")], [
                    A("ChangeColor", "Cell", q("255;170;140")),
                    A("ResetObjectTimer", "Cell", q("flash")),
                    setov("Cell", "Flash", "=", "1"),
                    set_anim("Cell", 'Cell.VariableString(Material) + ToString(min(2, floor((1 - Cell.Variable(HP) '
                                     '/ Cell.Variable(MaxHP)) * 3)))'),
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
                "Every Cell is its own 12 x 12 object with its own collision mask, so a destroyed cell stops "
                "blocking at once and the tower can drive through any tunnel big enough for its chassis. "
                "Damage states are the animations <Material>0, 1 and 2 (intact to badly cracked)."),
        group("Hit flash", [
            ev([isov("Cell", "Flash", "=", "1"), C("CompareObjectTimer", "Cell", q("flash"), ">", "0.06")],
               [A("ChangeColor", "Cell", q("255;255;255")), setov("Cell", "Flash", "=", "0")]),
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
            set_xy("Ground", "floor((%s - 300) / 32) * 32" % CAM_X, GROUND),
            set_xy("Hills", "%s - 270" % CAM_X, "560"),
            A("TiledSpriteObject::XOffset", "Hills", "=", "%s * 0.3" % CAM_X),
        ]),
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
            ev([isv("CloudGap", "<", warn)], [A("TextObject::ChangeColor", "GasText", q("255;80;60"))]),
            ev([isv("CloudGap", ">=", warn)], [A("TextObject::ChangeColor", "GasText", q("200;235;150"))]),
            ev([isv("ShotsFired", ">", "0")], [A("Hide", "HintText")]),
        ]),
    ]


SYSTEMS = [
    ("RunManager", run_manager), ("ObstacleGenerator", obstacle_generator), ("TowerController", tower_controller),
    ("TurretController", turret_controller), ("ProjectileSystem", projectile_system),
    ("ObstacleGrid", obstacle_grid), ("CloudController", cloud_controller), ("CameraAndHUD", camera_and_hud),
]

SCENE_VARS = {
    "State": "", "Dt": 0, "StartX": 0, "Distance": 0, "BestDistance": 0, "OverTime": 0,
    "NextFormationX": 0, "FormationCount": 0, "FormationIndex": 0, "Shape": "", "ShapeW": 0, "ShapeRows": 0,
    "SpawnX": 0, "Idx": 0, "Col": 0, "Row": 0, "Ch": "", "CellsSpawned": 0,
    "TowerStep": 0, "Blocked": 0,
    "PivotX": 0, "PivotY": 0, "AimX": 0, "AimY": 0, "TargetAngle": 0, "TurretAngle": 0, "InputTouch": 0,
    "LastTouchTime": -10, "HasAimed": 0, "Firing": 0, "FireCooldown": 0, "AimOffset": 0, "ShotsFired": 0,
    "BulletStep": 0, "BulletHit": 0, "HitX": 0, "HitY": 0, "ShotsHit": 0,
    "CellsDestroyed": 0, "CloudX": 0, "CloudGap": 0,
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


def frame(image, origin=(0, 0), points=None, mask=None):
    return {"hasCustomCollisionMask": mask is not None, "image": image,
            "points": [{"name": n, "x": x, "y": y} for n, (x, y) in (points or {}).items()],
            "originPoint": {"name": "origine", "x": origin[0], "y": origin[1]},
            "centerPoint": {"automatic": True, "name": "centre", "x": 0, "y": 0},
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


def text(name, size, color="255;255;255", string="", bold=True):
    o = base_obj(name, "TextObject::Text")
    o["content"] = {"bold": bold, "isOutlineEnabled": True, "isShadowEnabled": False, "italic": False,
                    "outlineColor": "20;16;24", "outlineThickness": 3, "shadowAngle": 90, "shadowBlurRadius": 0,
                    "shadowColor": "0;0;0", "shadowDistance": 3, "shadowOpacity": 160, "smoothed": True,
                    "underlined": False, "text": string, "font": "", "textAlignment": "left",
                    "verticalTextAlignment": "top", "characterSize": size, "lineHeight": 0, "color": color}
    return o


def build_objects():
    tower_mask = [(8, 16), (52, 16), (52, 96), (8, 96)]
    cell_anims = []
    for mat in DATA["Materials"]:
        img = {"Stone": "stone", "Hardstone": "hard"}.get(mat, "stone")
        cell_anims += [(mat + str(i), ["cell_%s_%d.png" % (img, i)]) for i in range(3)]
    return [
        sprite("Tower", [("Drive", ["tower_0.png", "tower_1.png"])], loop_time=0.09, origin=(30, 96),
               mask=tower_mask, points={"TurretMount": (52, 10)}),
        sprite("Turret", [("Idle", ["turret.png"])], origin=(8, 8), points={"Muzzle": (42, 8)}),
        sprite("Bullet", [("Fly", ["bullet.png"])], {"Extra": 0}, origin=(11, 2)),
        sprite("MuzzleFlash", [("Flash", ["muzzle_flash.png"])], origin=(0, 8)),
        sprite("Cell", cell_anims, {"HP": 1, "MaxHP": 1, "Material": "Stone", "Flash": 0}),
        sprite("Debris", [("Chip", ["debris.png"])], {"VX": 0, "VY": 0, "Life": 0}, origin=(2, 2)),
        sprite("Spark", [("Hit", ["spark.png"])], {"Life": 0}, origin=(5, 5)),
        sprite("Crosshair", [("Aim", ["crosshair.png"])], origin=(16, 16)),
        sprite("Cloud", [("Roll", ["cloud_0.png", "cloud_1.png", "cloud_2.png"])], loop_time=0.22, origin=(600, 0)),
        tiled("Ground", "ground.png", 640, 160),
        tiled("Hills", "hills.png", 540, 260),
        # UI layer
        text("DistanceText", 40, string="0 m"),
        text("BestText", 20, "255;225;150", "BEST 0 m"),
        text("GasText", 20, "200;235;150", "GAS"),
        sprite("OffsetButton", [("Idle", ["button_small.png"])]),
        text("OffsetText", 20, string="AIM +80"),
        text("HintText", 22, "255;255;255", "Hold and drag to aim and fire\nMouse: aim, hold left button"),
        sprite("WarningEdge", [("Idle", ["warning_edge.png"])]),
        sprite("Panel", [("Idle", ["panel.png"])]),
        text("GameOverTitle", 44, "160;230;80", "ENGULFED!"),
        text("ResultText", 30, string="DISTANCE 0 m"),
        text("BestResultText", 26, "255;225;150", "BEST 0 m"),
        sprite("RestartButton", [("Idle", ["button.png"])]),
        text("RestartText", 32, "40;24;8", "RESTART"),
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
        inst("Hills", 0, 560, -10, w=540, h=260),
        inst("Ground", -50, g, 1, w=640, h=160),
        inst("Tower", tx, g, 20),
        inst("Turret", tx + 22, g - 86, 21),
        inst("MuzzleFlash", tx + 56, g - 86, 22),
        inst("Cloud", tx - 22 - T["CloudStartGap"], -20, 40),
        inst("Crosshair", tx + 220, g - 86, 50),
        # UI (540 x 960)
        inst("WarningEdge", 0, 0, 0, "UI"),
        inst("DistanceText", 16, 10, 5, "UI"),
        inst("BestText", 18, 58, 5, "UI"),
        inst("GasText", 18, 84, 5, "UI"),
        inst("OffsetButton", 374, 14, 5, "UI"),
        inst("OffsetText", 398, 26, 6, "UI"),
        inst("HintText", 70, 880, 5, "UI"),
        inst("Panel", 50, 300, 10, "UI"),
        inst("GameOverTitle", 150, 330, 11, "UI"),
        inst("ResultText", 110, 400, 11, "UI"),
        inst("BestResultText", 110, 444, 11, "UI"),
        inst("RestartButton", 150, 500, 11, "UI"),
        inst("RestartText", 205, 518, 12, "UI"),
    ]


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
    forms = [{"Name": f["Name"], "Shape": "|".join(f["Rows"])} for f in DATA["Formations"]]
    for f in DATA["Formations"]:
        widths = {len(r) for r in f["Rows"]}
        assert len(widths) == 1, "Formation %s: every row needs the same width" % f["Name"]
    return [var("Tuning", T), var("Materials", DATA["Materials"]), var("Formations", forms)]


def build_project():
    objects = build_objects()
    scene_events = [
        comment("TOWER RUSH - Phase 1 prototype. Every system is an external event (Project manager > External "
                "events), included here in this order. Tuning numbers are the global variable Tuning; "
                "formations are the global variable Formations."),
    ] + [link(name) for name, _ in SYSTEMS]
    scene = {
        "b": 150, "v": 196, "r": 236,
        "disableInputWhenNotFocused": True, "mangledName": "Game", "name": "Game",
        "standardSortMethod": True, "stopSoundsOnStartup": True, "title": "",
        "uiSettings": {"grid": False, "gridType": "rectangular", "gridWidth": 12, "gridHeight": 12, "gridDepth": 32,
                       "gridOffsetX": 0, "gridOffsetY": 0, "gridOffsetZ": 0, "gridColor": 10401023, "gridAlpha": 0.8,
                       "snap": False, "zoomFactor": 0.8, "windowMask": False, "selectedLayer": "",
                       "gameEditorMode": "instances-editor"},
        "objectsGroups": [{"name": "GameOverUI", "objects": [{"name": n} for n in (
            "Panel", "GameOverTitle", "ResultText", "BestResultText", "RestartButton", "RestartText")]}],
        "variables": [var(k, v) for k, v in SCENE_VARS.items()],
        "instances": build_instances(), "objects": objects,
        "objectsFolderStructure": {"folderName": "__ROOT", "children": [{"objectName": o["name"]} for o in objects]},
        "events": scene_events, "layers": [layer(""), layer("UI")], "behaviorsSharedData": [],
    }
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
        "layouts": [scene],
        "externalEvents": [{"associatedLayout": "Game", "lastChangeTimeStamp": 0, "name": n, "events": f()}
                           for n, f in SYSTEMS],
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
