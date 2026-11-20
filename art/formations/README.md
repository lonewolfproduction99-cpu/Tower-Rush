# Drawing destructible objects (ruins, boulders, wrecks…)

Draw an obstacle as one whole picture. The game cuts it into 12 × 12 px cells, and each cell shows its own piece of your picture. Every bullet knocks one piece out.

## Materials without painting a map

`art/formations/material_reference.png` is a sheet with one sample per material, drawn in its drawing colours (top row), and that material's map colour below it. When you draw a building **with those colours**, the importer works out the material of every 12 × 12 piece by itself, so no `_material.png` is needed. The colour covering most of a piece wins. The outline colour, shared by every sample, doesn't count.

What decides a piece's material, in order:
1. a hand-painted `<name>_material.png`;
2. `<name>.json` with `{"material": "..."}`, for the whole object (your first four test buildings are pinned to Concrete this way);
3. the reference sheet (automatic);
4. Concrete.

To add a material or change its colours, edit the reference sheet: add a sample on top and its map colour square below it. The map colour must be one of the `MapColor`s in `data/game_data.json` > `Materials`.

## Steps

1. **Draw** your object as a PNG with a transparent background, at 1× (no scaling).
   - The **bottom edge of the image is the ground**.
   - Any size works. Empty space above and to the left is trimmed for you.
2. **Save it here** as `art/formations/<name>.png`, e.g. `ruin_office.png`. Use lower-case letters, digits and `_` only.
3. **Optional: a material map**, `<name>_material.png`. It has the same size as your drawing, painted in flat colours: one colour per material. Without a map, the whole object uses one material (see below).

   | Map colour | Material | Shots to break one cell |
   |---|---|---|
   | cyan `#00FFFF` | Glass (windows) | 1 |
   | yellow `#FFFF00` | Wood (doors, boarding, planks) | 1 |
   | grey `#808080` | Concrete | 2 |
   | red `#FF0000` | Metal (beams, rebar, car bodies) | 3 |
   | brown `#8c7a64` | Stone (boulders, rock) | 1 |
   | dark blue `#3c4664` | Hardstone | 3 |

   Drawing colours for each material: `art/templates/building_materials.png`.

   For each cell, the colour covering most of it wins. You can add new materials in `data/game_data.json` > `Materials`. Each needs a `Char` (one letter), `HP`, `MapColor`, `DebrisColor` and a 12 × 12 `Tile`.
4. **Optional: the default material.** Add `<name>.json` containing `{"material": "Stone"}` to give the object one material without a map. Without either, it is Concrete.
5. **Run** `python3 tools/import_formations.py`. It prints, for each object:
   - its cell count;
   - how many cells are in the tower's lane;
   - how many shots that lane takes to clear.
6. **Rebuild:** run `python3 tools/build_project.py`. Or just ask Claude: "I added art/formations/xyz.png".

## Rules that matter for gameplay

- **Partly drawn squares are weak.** A 12 × 12 square that is drawn but not completely filled (rounded tops, broken edges, jagged corners) takes 1 shot whatever its material (`Tuning.PartialHP`). In the formation grid it gets the lower-case letter of its material (`c`, `m`, `g`, `w`). Ragged, broken edges are therefore quicker to shoot through than clean straight ones.

- **Cells are a 12 px grid.** A square becomes a solid cell when at least 25 % of its pixels are drawn. Thin bits on a nearly empty square are dropped, and the importer tells you how many pixels that was.
- **The tower needs 7 cells (84 px) of clear height** above the ground to drive through. Everything in the bottom 84 px of your object blocks it until shot away.
  - A ground floor 84 px or taller, with thin walls, makes a quick passage.
  - A solid block makes a slow one.
  - Try to keep the lane under about 40 shots. At 6 shots/s, that's about 7 s while the gas closes in.
- **Overhangs stay in the air** when you shoot under them. Collapse comes in a later phase.
- **Damage shows as cracks** drawn over the cell: `game/assets/crack_1.png` and `crack_2.png`, 12 × 12, transparent. One pair of crack images is shared by every object. Draw your own to match your style.
- **Debris chips** take the material's `DebrisColor`.

## Previewing your object

In GDevelop, set the global variable `Tuning > TestFormation` to the index of your object in `Formations` and press Preview. Only that object will spawn. The art formations come after the built-in ones; the importer lists them in order. Set it back to `-1` for the normal game.

## Placeholder examples

`placeholder_ruin.png` (with `placeholder_ruin_material.png`) and `placeholder_boulder.png` are **code-drawn placeholders** that show the pipeline. Replace them with your own, or delete them, then run the importer again.

## Templates

`art/templates/` has guide images. Import one into your drawing app as the bottom layer, draw on layers above it, and hide that layer before exporting.

- `obstacle_grid_*.png`: the 12 px cell grid, counted from the ground. The red dotted line is the tower's 84 px clearance: anything below it blocks the tower.
- `tower_guide_60x96.png`: the red box is the chassis collision box, the blue dot is the turret mount, and the green mark is the origin (bottom centre).
- `turret_guide_44x16.png`: the blue dot is the pivot, the red dot is the muzzle, and the barrel points right.

Regenerate them with `python3 tools/make_templates.py`.
