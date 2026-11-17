# Drawing destructible objects (ruins, boulders, wrecks…)

Draw an obstacle as one whole picture. The game cuts it into 12 × 12 px cells, and each cell shows its own piece of your picture. Every bullet knocks one piece out.

## Steps

1. **Draw** your object as a PNG with a transparent background, at 1× (no scaling).
   - The **bottom edge of the image is the ground**.
   - Any size works. Empty space above and to the left is trimmed for you.
2. **Save it here** as `art/formations/<name>.png`, e.g. `ruin_office.png`. Use lower-case letters, digits and `_` only.
3. **Optional: a material map**, `<name>_material.png`. It has the same size as your drawing, painted in flat colours: one colour per material. Without a map, the whole object uses one material (see below).

   | Colour | Material | Hits to break one cell |
   |---|---|---|
   | grey `#808080` | Concrete | 1 |
   | red `#ff0000` | Metal (beams, rebar, car bodies) | 4 |
   | brown `#8c7a64` | Stone (boulders, rock) | 1 |
   | dark blue `#3c4664` | Hardstone | 3 |

   For each cell, the colour covering most of it wins. You can add new materials in `data/game_data.json` > `Materials`. Each needs a `Char` (one letter), `HP`, `MapColor`, `DebrisColor` and a 12 × 12 `Tile`.
4. **Optional: the default material.** Add `<name>.json` containing `{"material": "Stone"}` to give the object one material without a map. Without either, it is Concrete.
5. **Run** `python3 tools/import_formations.py`. It prints, for each object:
   - its cell count;
   - how many cells are in the tower's lane;
   - how many shots that lane takes to clear.
6. **Rebuild:** run `python3 tools/build_project.py`. Or just ask Claude: "I added art/formations/xyz.png".

## Rules that matter for gameplay

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
