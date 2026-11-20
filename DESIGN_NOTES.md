# Design notes (ideas for later phases)

## Special weapons / power-ups (owner's idea, Nov 2026)

These would also be the main tool for heavy obstacles; obstacle difficulty is to be revisited together with them.

Weapon ideas:
- **Ram:** a train-front plough on the tower that smashes the low obstacle pieces in front of it while driving.
- **Rocket salvo:** several rockets at once at the obstacle(s) ahead, with area damage.
- **Laser beam:** cuts through several obstacles in a line, whatever the material.

Two ways to get them (the owner is choosing; they can be combined):
1. **In-run pickups:** power bubbles hidden in formations. Shoot one free to get that power for a short time.
2. **Permanent unlocks:** earn currency (gems), unlock weapons in the main-menu shop, and pick up to 3 for a run. Each gets a button at the bottom of the screen that fires it for a few seconds, then recharges.

Notes for building it:
- The bottom strip (ground, y 800–960) has nothing to aim at, so it's the natural place for 3 buttons. Touches there must not fire the main gun, like the top bar today.
- This fits the brief's Phase 2 (gems), Phase 3 (shop, saved progression, weapon unlocks) and Phase 4 (explosives, special materials).
- Suggested hybrid: buy and equip in the shop (Phase 3); in a run, a button charges up by shooting energy cores/bubbles out of formations, the same way gems are freed (Phase 2 mechanic), plus a cooldown. This keeps the "collect or rush" tension.

## Difficulty and progression (owner's decisions, Nov 2026)

- **The game stays hard.** The current obstacle set is kept, heavy concrete buildings included, and the gas keeps its distance and speed (`CloudStartGap` 450, `CloudSpeed` 60) unless there's a strong reason. Don't make the obstacles easier to fix balance; progression is what lets players get further.
- **The loop:** each run earns points (currency). Players spend them between runs on permanent upgrades and power-ups, so every run gets them a little further.
- **Main-gun upgrades** (Phase 3 shop):
  - **Damage:** more damage per bullet, so concrete (2) and metal (3) break in fewer shots.
  - **Fire rate:** shots per second.
  - **Accuracy:** the gun is perfectly accurate today. An accuracy upgrade needs a starting spread (bullets wander a few degrees), which the upgrade then tightens. Add the spread and its upgrade together, and check that the starting spread doesn't make the early game unfair.
  - From the brief: track speed, gem collection radius.
- **Power-ups / special weapons:** see "Special weapons / power-ups" above (ram, rocket salvo, laser; up to 3 equipped, buttons in the bottom strip).

## Materials (planned additions)

- More materials and map colours will be added: one more sample on `art/formations/material_reference.png` (drawing colours on top, map colour below), plus an entry in `data/game_data.json` > `Materials` (Char, HP, MapColor, DebrisColor, Tile).
- One drawing or map can already mix any number of materials: each 12 x 12 piece gets its own material.
- Current strengths: glass 1, wood 1, concrete 2, metal 3 shots (stone 1, hardstone 3 are unused).
