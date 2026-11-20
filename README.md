# Tower Rush

A portrait-mode (540 × 960) side-scrolling arcade game made with **GDevelop 5**. You command a mechanical tower on tank tracks. It drives right on its own. You shoot paths through stone formations made of small cells. A gas cloud follows you from behind.

**Status: Phases 1–4.** Phase 1: the tower, turret, bullets, destructible cells, the cloud, distance and best distance, and restart. Phase 2: gems hidden in obstacles, collected for a saved total, and better obstacle selection. Phase 3: an upgrade shop spending saved gems, and three power-up weapons (ram, rocket salvo, laser). Phase 4: special materials (explosives with chain reactions, fracture points, reinforced metal, regrowing growth with a core) and five regions. The tower, background, road and obstacles are the owner's art; the rest is code-drawn placeholder art.

## Play it

- **In the browser:** open `docs/index.html` through any local web server, e.g. `cd docs && python3 -m http.server 8000`, then visit http://localhost:8000. Browsers block games opened as `file://`.
- **GitHub Pages:** in the repository settings, set Pages to deploy from this branch, folder `/docs`.
- **In GDevelop:** File > Open project > `game/TowerRush.json`, then press Preview.

Controls:
- **Phone:** press anywhere below the top bar and drag to aim. The turret fires while your finger is down. The crosshair sits 80 px above your finger so the target stays visible. Tap **AIM +80** to change that offset (0 to 160, saved).
- **PC:** the mouse aims. Hold the left button to fire. On the game-over screen, **R** or **Space** restarts.

## How the project is organised

All gameplay is **native GDevelop events**, with no JavaScript blocks. Each system is an external event (Project manager > External events). The `Game` scene includes them in this order:

| External events | Owns (scene variables) | Does |
|---|---|---|
| `UpgradeManager` | Lv_<Upgrade>, Damage, FireRate, Spread, TowerSpeed, PickupRadius | loads the bought levels; sets the stats the other systems read |
| `RunManager` | State, Dt, StartX, Distance, BestDistance, OverTime | start, frame time, distance, game over, best distance (storage), restart |
| `RegionManager` | Region, RegionCloudSpeed, RegionGemChance, RegionBannerTime | regions by distance: gas speed, gem chance, sky tint, banner |
| `ObstacleGenerator` | NextFormationX, FormationCount, LastFormation, Shape… | picks and builds formations ahead of the camera, hides gems in them, removes cells left behind |
| `PowerUps` | <Power>_Time, <Power>_Cool, Salvo_Left/Timer, PowerUsed, RocketsFired, Blasts | the power buttons, ram, rockets and blasts, laser beam |
| `TowerController` | TowerStep, Blocked | auto-drive, stop on any cell in the way |
| `TurretController` | Aim*, Pivot*, TurretAngle, InputTouch, Firing, FireCooldown, AimOffset | mouse/touch aim, smooth turning, chassis-safe angles, firing, muzzle flash |
| `ProjectileSystem` | BulletStep, BulletHit, HitX/Y | ray-cast bullets (no tunnelling), damage |
| `ObstacleGrid` | CellsDestroyed + Cell variables | breaks every cell whose HP reached 0 (from any weapon): gem release, debris; hit flash, sparks |
| `GemSystem` | RunGems, TotalGems, GemsCollected, GemsLost, GemsSaved | loose gems: fall, bounce, pickup radius, collection, saved total |
| `CloudController` | CloudX, CloudGap | the pursuing cloud, catching the tower |
| `CameraAndHUD` | — (reads only) | camera follow, ground and hills, HUD, warning |

Only the system that owns a variable writes to it. The others only read it.

### Tuning and content (global variables)

- **`Tuning`:** speeds, fire rate, damage, the cloud's start gap, spawn distances and so on. The defaults follow the design brief: tower 85 px/s, cloud 60 px/s, 450 px gap, 6 shots/s, 1 damage, bullets at 900 px/s.
- **`Materials`:** one entry per cell type: `Char` (its letter in a formation), `HP`, `Tile` (a 12 × 12 image for text-grid formations), `MapColor` (its colour in material maps) and `DebrisColor`. The current types are Stone `#` (1 HP), Hardstone `H` (3), Concrete `C` (1) and Metal `M` (4).
- **`Formations`:** each one has a `Name`, a `Shape` and `Art`. The shape is rows of characters separated by `|`, top row first; the bottom row sits on the ground. `.` is empty. Currently empty: the game uses only the owner's art formations, in random order (`IntroFormations` 0). `Tuning.TestFormation` (index, -1 = off) spawns only one formation, for previewing.

### Your own pixel-art obstacles

Draw a whole object, such as a ruined building, a boulder or a wreck. Put it in `art/formations/` and run `python3 tools/import_formations.py`. The game cuts it into 12 × 12 cells, each showing its own piece of your picture, and you blast it apart piece by piece. An optional material map sets which parts are concrete, metal and so on.

Full guide: **[art/formations/README.md](art/formations/README.md)**.

### Key mechanics

- **Cells:** every cell is its own 12 × 12 `Cell` object (a tiled sprite) with its own collision box. A destroyed cell stops blocking at once.
  - A text-grid cell shows its material's tile. An art cell shows its slice of the picture through its X/Y offset.
  - Damage is a `Crack` overlay linked to the cell (GDevelop's Linked objects).
- **Tower:** the collision mask is the chassis, 44 × 80 px. Each frame the tower moves and, if it overlaps a cell, moves back. A step is at most about 4 px, so it can't skip through a cell.
  - It fits an opening at least **7 cells (84 px)** high. A 6-cell opening blocks it; the play-test checks both with a test-only piece.
- **Bullets:** each frame a ray is cast for the distance the bullet travels. Only the first cell on that ray is hit.
  - A new bullet starts at the turret pivot, and its first ray covers the barrel. So it appears at the muzzle and still hits a cell touching the barrel.
- **Turret:** it pivots on the tower sprite's `TurretMount` point (default (18, 10): set back so the level barrel ends at the chassis front). Move the point in GDevelop's sprite editor, or `TowerArt.TurretMount` in `data/game_data.json`, to match your art.
  - The turret and bullets never collide with the tower: bullets only test against obstacle cells, and they're drawn above the tower.
  - Its angle stays between straight left, up, and 88° (almost straight down in front), and it turns through the top only.
- **Frame time:** it is capped (`Tuning.MaxFrameTime`), and all movement uses it.

## Rebuilding (for development with Claude / scripts)

`game/TowerRush.json` is generated by `python3 tools/build_project.py` from `data/game_data.json` and the images in `game/assets/`. The images come from `python3 tools/make_placeholders.py`.

**Once you edit the project in GDevelop, the `.json` is the source of truth.** The build script then refuses to overwrite it (it keeps a hash in `game/.build_stamp.json`).

Your formation art is imported by `python3 tools/import_formations.py` (writes `data/art_formations.json` and `game/assets/formation_*.png`).

Web build and tests (Linux, as used in the cloud container):

```bash
python3 tools/build_project.py
tools/export.sh <extracted GDevelop-5-5.6.285-linux.zip folder> docs   # needs xvfb-run
node tools/test/play.js docs test-output                                 # needs Playwright + Chromium
node tools/test/play.js docs test-output art                             # every art formation: slices, cracks, passable
node tools/test/play.js docs test-output gems                            # Phase 2 gem checks
node tools/test/play.js docs test-output shop                            # Phase 3 shop checks
node tools/test/play.js docs test-output power                           # Phase 3 power-up checks
node tools/test/play.js docs test-output phase4                          # Phase 4 materials and regions
```

`tools/gd/instructions.json` lists GDevelop's instructions and their parameters. It is dumped from the editor's own `libGD.js` by `tools/gd/dump_metadata.js`. The build checks every event against it.

## Replacing the placeholder art

Keep each file name and pixel size and the project needs no change. The files are in `game/assets/`. In GDevelop you can also change the images in the object editors.

| File | Size | Origin / notes |
|---|---|---|
| `tower_0.png`, `tower_1.png` | 60 × 96 | origin bottom-centre (30, 96); collision mask x 8–52, y 16–96; turret mount point `TurretMount` (18, 10) by default, movable; two track frames |
| `turret.png` | 44 × 16 | pivot (8, 8), muzzle (42, 8), barrel points right |
| `tile_stone.png`, `tile_hard.png`, `tile_concrete.png`, `tile_metal.png` | 12 × 12 | material tiles for text-grid formations |
| `crack_1.png`, `crack_2.png` | 12 × 12 | transparent crack overlays (damaged, badly damaged), shared by all materials |
| `art/formations/*.png` | any | whole destructible objects: see [art/formations/README.md](art/formations/README.md) |
| `bullet.png` | 12 × 4 | origin at the tip (11, 2) |
| `muzzle_flash.png` | 20 × 16 | origin (0, 8) |
| `cloud_0..2.png` | 600 × 960 | origin at the right edge (600, 0); the right edge is the deadly front |
| `sky.png` | 540 × 960 | the whole screen; doesn't move (its own layer `Sky`) |
| `hills.png` | any width × any height (540 × 300 suggested) | far skyline; repeats sideways, scrolls at 30 % (parallax); its bottom 20 px sit behind the ground |
| `ground.png` | any width × 160 (128 × 160 suggested) | the strip the tower drives on; its top edge is the ground line; repeats sideways |
| `crosshair.png` | 32 × 32 | centred |

Guides for all of these are in `art/templates/`. The backgrounds take whatever size you draw: rebuild with `python3 tools/build_project.py` and the objects resize to fit.

## Roadmap

1. **Phase 1:** tower, turret, projectiles, destructible cells, cloud, restart. *(this build)*
2. **Phase 2:** gems inside formations, collection radius, more formations, better generation.
3. **Phase 3:** saved progression, upgrade shop, weapon unlocks.
4. **Phase 4:** explosives, fracture points, special materials, regions.
5. **Phase 5:** final art, effects, balancing, UI polish, release.

## Asset provenance

All art in this repository is currently **code-drawn placeholder art**: `tools/make_placeholders.py` draws it with Pillow, using no generative AI. That includes `art/formations/placeholder_*`.

Slicing your own drawings into cells (`tools/import_formations.py`) only cuts and copies your pixels. It doesn't generate or change any art.

### Tower art

Put the owner's tower frames in `art/tower/` as `tower_0.png`, `tower_1.png`, … (60 × 96 each). A sprite sheet of frames side by side also works: Claude slices it, and the original is kept in `art/tower/originals/`. `TowerArt.TrackFrameTime` in `data/game_data.json` sets the seconds per frame. To keep the treads in step with the ground: (pixels the marks move per frame) / 85. For example, 2 px gives 0.0235.

## Gems (Phase 2)

- **Hiding:** when an obstacle appears, with chance `Tuning.GemChance` it hides `GemsMin`–`GemsMax` gems in random pieces, shown as a small glint (`GemMark`).
  - With chance `GemAboveLaneChance` a gem goes in a piece above the tower's lane, so digging it out costs time.
- **Types:** from the global `Gems`: Common 1, Rare 5, Legendary 25, drawn by `Weight` (70 / 25 / 5).
- **Release:** a gem comes out only when the piece holding it breaks. It pops up, falls and bounces on the road.
- **Pickup:** within `PickupRadius` (90 px) of the tower's centre it flies to the tower and is counted. Gems left behind the screen are lost.
- **Banking:** at game over the run's gems are added to the saved total (storage `TowerRush` / `TotalGems`), shown on the panel. Phase 3's shop will spend them.
- **Obstacle selection:**
  - The first `EasyStart` (2) obstacles come from those taking at most `EasyLaneShots` (40) shots in the lane.
  - The same obstacle never comes twice in a row.
  - `art/formations/<name>.json` `{"weight": 2}` makes one come more often.
  - With chance `ClusterChance` the next obstacle follows right behind.
- **Gem art:** `gem_common/rare/legendary.png` (12 × 12, loose gem, origin centre) and `gem_mark_*.png` (8 × 8, the glint on a piece) are placeholders.

## Shop and upgrades (Phase 3, part 1)

- **Getting there:** the game-over panel has **RESTART** and **UPGRADES**. UPGRADES opens the `Shop` scene (its events are the external events `ShopScreen`), and **PLAY** starts a new run.
- **The upgrades:** the global variable `Upgrades` lists them in shop order. Each has `Label`, `Stat` (the scene variable it sets), `Unit`, `Values` (level 0..5) and `Costs` (price of the next level).

  | Upgrade | Level 0 → 5 | Prices |
  |---|---|---|
  | Gun damage | 1 → 3 per shot | 20, 50, 110, 220, 400 |
  | Fire rate | 6 → 12 shots/s | 15, 40, 90, 180, 350 |
  | Accuracy | 3° → 0° spread | 10, 30, 70, 150, 300 |
  | Track speed | 85 → 112 px/s | 25, 60, 130, 260, 500 |
  | Gem magnet | 90 → 240 px | 10, 25, 60, 120, 240 |

- **Starting spread:** the gun starts with ±3° of spread (each bullet's angle is the turret's ± up to `Spread`), so Accuracy has something to improve.
- **Saving:** levels are saved in storage `TowerRush` / `Up_<Upgrade>`, gems in `TotalGems`.
- **Power-ups:** see below.

## Power-ups (Phase 3, part 2)

Three buttons sit in the bottom strip, y 892–952 (`Tuning.ButtonStripY`). Taps there neither aim nor fire the main gun. Tap a button, or press 1, 2 or 3, when it is ready. It fires, then recharges for its `Cooldown`, and a dark shade drains as it does; it glows yellow while active. All settings are in the global variable `PowerUps`. All three are unlocked for testing (`Unlocked` 1; 0 hides a button). `Tuning.PowerStartCharged` 1 makes them start ready.

| Power | What it does | Settings |
|---|---|---|
| RAM (1) | a plough on the tower front crushes the cells it touches in the bottom `Height` px while driving, for `Duration` s; higher cells in the lane must still be shot | Duration 5, Cooldown 18, Height 60, Reach 16, Dps 40 |
| ROCKETS (2) | `Rockets` rockets toward the aim (± `Spread`°), each exploding on the first cell or the ground, `Damage` to every cell within `Radius` px | Cooldown 15, Rockets 6, Interval 0.15, Speed 520, Damage 4, Radius 34 |
| LASER (3) | a beam along the aim, `Range` px long, cutting every cell it touches whatever the material, for `Duration` s; the main gun pauses | Duration 2.5, Cooldown 22, Range 480, Dps 14 |

Every damage source only lowers `Cell.HP`; ObstacleGrid breaks cells in one place, so gems and debris work the same for all weapons. Placeholder art: `power_ram.png`, `power_rocket.png`, `power_blast.png`, `power_laser.png` and `power_button_<power>.png` (150 × 60).

Not handled yet: tapping a power button with a second finger while the first holds fire (multi-touch). A tap works when no other finger is down.

## Special materials and regions (Phase 4)

| Material | Char | Map colour | Shots | Special |
|---|---|---|---|---|
| Explosive | `X` | magenta `#FF00FF` | 1 | blows up when broken: `ExplosionDamage` (6) to every cell within `ExplosionRadius` (40 px). Explosives it breaks go off the next frame, so explosions chain. |
| Fracture | `F` | orange `#FF8000` | 1 | holds up its section: when broken, every cell of the same formation above it, within `FractureReach` (30 px) to either side, collapses. |
| Reinforced | `R` | dark red `#800000` | 6 | very tough metal |
| Growth | `V` | green `#00FF00` | 1 | regrows `RegrowTime` (3 s) after breaking while a **Core** of the same formation survives. It never regrows into the tower. |
| Core | `O` | dark green `#008000` | 6 | the growth's heart: destroy it and the growth stays broken |

- **Where the logic lives:** every special runs in ObstacleGrid's break pass, so it works whatever broke the cell (bullet, rocket, ram, laser, another explosion).
- **Using them in your art:** paint them in a hand-drawn `_material.png` with the map colours above, or add samples of them to `art/formations/material_reference.png`.
- **Placement:** put fracture points and explosives where the gun can see them. A support hidden behind other pieces can't be hit.
- **Test obstacles:** `test_explosive`, `test_fracture`, `test_growth` and `test_reinforced` are text-grid formations in `data/game_data.json` with `Weight` 0. They never spawn in normal play; use them with `Tuning.TestFormation` (indices 0–3).

**Regions** (global variable `Regions`): Rocky Wasteland (0 m), Scrap Fields (300), Crystal Badlands (700), Toxic Expanse (1200), Fracture Zone (1800).
- **Each region sets** the gas speed (60 → 68 px/s, a small ramp), the chance a formation hides gems (0.75 → 1.0) and the sky tint, and is announced by a banner.
- **Not yet:** a different obstacle set per region. That needs more art and region tags on formations.

**Not done in Phase 4:** general collapse, meaning any floating piece falling when everything under it is shot away. Fracture points give controlled collapse. Full support checking would be costly in native events, so it's left for a later decision.
