# Tower Rush: notes for Claude sessions

Portrait (540×960) GDevelop 5 arcade game: a tracked tower auto-drives right, the player shoots paths through cell-grid formations, a gas cloud pursues. The owner's brief has 5 phases; **Phase 1 is done** (see README.md for the full layout).

## Rules from the brief

- **Native GDevelop events only** for gameplay. Don't add JavaScript blocks without a strong reason.
- Mobile-first: avoid physics behaviors, shaders and per-frame work over all cells that isn't needed.
- Placeholders stay until the gameplay is proven. Don't polish the art early.
- Each system owns its variables (README table). Don't write another system's variables.
- Report honestly what was and wasn't tested.

## Workflow

- `python3 tools/make_placeholders.py` writes the art to `game/assets/`.
- `python3 tools/build_project.py` writes `game/TowerRush.json`. It refuses to overwrite the file if the owner edited it in GDevelop (`game/.build_stamp.json`). In that case, edit the JSON directly, or ask before using `--force`.
- Events use the helpers `C()` / `A()`. They take only the visible parameters; code-only ones are padded from `tools/gd/instructions.json`, which also catches wrong names.
  - String parameters are expressions, so wrap literal strings in quotes (`q("...")`).
  - Capability actions need the default behaviour name: `"Animation"`, `"Opacity"`, `"Text"`.
- **Export:**
  1. Download `GDevelop-5-5.6.285-linux.zip` from the GitHub releases and unzip it.
  2. Run `tools/export.sh <dir> docs`. It needs xvfb-run.
  3. Check `docs/code0.js` for odd code (e.g. `badVariablesContainer` used where it shouldn't be).
- **Test:** `node tools/test/play.js docs <out>`.
  - It plays with real mouse input, then real touch input through CDP `Input.dispatchTouchEvent`.
  - It checks acceptance tests 1–15 and writes screenshots plus `report.json`.
  - It reads the scene through `gdjs.registerRuntimeScenePostEventsCallback`, which is test-only.
- **libGD** (for `tools/gd/dump_metadata.js`) is `www/libGD.js` inside `resources/app.asar`. Extract it with `npx asar extract`.

## Gotchas

- The tower's collision mask is x 8..52, y 16..96 of the 60×96 sprite (origin 30,96). The turret pivot is Tower.X+22, Tower.Y−86. Several events hard-code 22 and 86, so change those together.
- The clearance needed is 7 cells. Rows are 12 px from GroundY=800, and the chassis top is at 720.
- `State` goes `"Run"` → `"Dying"` (set by CloudController) → `"Over"` (RunManager shows the UI and saves the best distance).
- A Restart tap is ignored for 0.5 s after game over, so the firing finger can't restart by accident.
