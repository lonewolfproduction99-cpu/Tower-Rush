# Tower Rush

A portrait-mode (540 × 960) side-scrolling arcade game made with **GDevelop 5**. You command a mechanical tower on tank tracks. It drives right on its own. You shoot paths through stone formations made of small cells. A gas cloud follows you from behind.

**Status: Phase 1 prototype.** It has the tower, the turret, bullets, destructible cells, the cloud, distance and best distance, and restart. All art is a temporary placeholder drawn by code.

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
| `RunManager` | State, Dt, StartX, Distance, BestDistance, OverTime | start, frame time, distance, game over, best distance (storage), restart |
| `ObstacleGenerator` | NextFormationX, FormationCount, Shape… | builds formations from text grids ahead of the camera, removes cells left behind |
| `TowerController` | TowerStep, Blocked | auto-drive, stop on any cell in the way |
| `TurretController` | Aim*, Pivot*, TurretAngle, InputTouch, Firing, FireCooldown, AimOffset | mouse/touch aim, smooth turning, chassis-safe angles, firing, muzzle flash |
| `ProjectileSystem` | BulletStep, BulletHit, HitX/Y | ray-cast bullets (no tunnelling), damage |
| `ObstacleGrid` | CellsDestroyed + Cell variables | hit flash, debris, sparks |
| `CloudController` | CloudX, CloudGap | the pursuing cloud, catching the tower |
| `CameraAndHUD` | — (reads only) | camera follow, ground and hills, HUD, warning |

Only the system that owns a variable writes to it. The others only read it.

### Tuning and content (global variables)

- **`Tuning`:** speeds, fire rate, damage, the cloud's start gap, spawn distances and so on. The defaults follow the design brief: tower 85 px/s, cloud 60 px/s, 450 px gap, 6 shots/s, 1 damage, bullets at 900 px/s.
- **`Materials`:** one entry per cell type: `Char` (its letter in a formation), `HP`, `Tile` (a 12 × 12 image for text-grid formations), `MapColor` (its colour in material maps) and `DebrisColor`. The current types are Stone `#` (1 HP), Hardstone `H` (3), Concrete `C` (1) and Metal `M` (4).
- **`Formations`:** each one has a `Name`, a `Shape` and `Art`. The shape is rows of characters separated by `|`, top row first; the bottom row sits on the ground. `.` is empty. Gate and Cave always come first, then the rest at random. `Tuning.TestFormation` (index, -1 = off) spawns only one formation, for previewing.

### Your own pixel-art obstacles

Draw a whole object, such as a ruined building, a boulder or a wreck. Put it in `art/formations/` and run `python3 tools/import_formations.py`. The game cuts it into 12 × 12 cells, each showing its own piece of your picture, and you blast it apart piece by piece. An optional material map sets which parts are concrete, metal and so on.

Full guide: **[art/formations/README.md](art/formations/README.md)**.

### Key mechanics

- **Cells:** every cell is its own 12 × 12 `Cell` object (a tiled sprite) with its own collision box. A destroyed cell stops blocking at once.
  - A text-grid cell shows its material's tile. An art cell shows its slice of the picture through its X/Y offset.
  - Damage is a `Crack` overlay linked to the cell (GDevelop's Linked objects).
- **Tower:** the collision mask is the chassis, 44 × 80 px. Each frame the tower moves and, if it overlaps a cell, moves back. A step is at most about 4 px, so it can't skip through a cell.
  - It fits an opening at least **7 cells (84 px)** high. A 6-cell opening blocks it; the Cave formation shows this.
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
