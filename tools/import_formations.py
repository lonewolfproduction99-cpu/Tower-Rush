"""
Turns whole-object pixel art in art/formations/ into destructible formations.

For every art/formations/<name>.png (transparent background, drawn at 1x, its bottom edge is the ground):
  - the image is padded to a multiple of the cell size (12 px): extra rows on top, extra columns on the right;
  - every 12 x 12 square whose pixels cover at least --min-cover of it (default 25 %) becomes a cell;
    in the game each cell shows exactly that square of your picture;
  - the material of each cell comes from <name>_material.png if it exists: paint the object in flat colours,
    one colour per material (the "MapColor" of each entry in the Materials table of data/game_data.json:
    grey #808080 Concrete, red #ff0000 Metal, ...). The colour covering most of a cell wins. Without a map,
    every cell is the formation's default material (<name>.json {"material": "Stone"}, else Concrete);
  - the padded image is copied to game/assets/formation_<name>.png.

The result is written to data/art_formations.json; tools/build_project.py adds these formations to the game.

Run: python3 tools/import_formations.py [--min-cover 0.25]
Then: python3 tools/build_project.py   (and export / test as usual)
"""

import glob
import json
import os
import sys

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ART = os.path.join(ROOT, "art", "formations")
ASSETS = os.path.join(ROOT, "game", "assets")
DATA = json.load(open(os.path.join(ROOT, "data", "game_data.json"), encoding="utf-8"))
CELL = DATA["Tuning"]["CellSize"]
CLEARANCE_ROWS = 7  # the tower's chassis needs 7 free cells (84 px) above the ground


def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def nearest_material(rgb, palette):
    return min(palette, key=lambda m: sum((a - b) ** 2 for a, b in zip(rgb, palette[m])))


def pad(im, w, h):
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(im, (0, h - im.height))  # keep the bottom edge on the ground, pad on top and right
    return out


def import_one(path, min_cover, palette):
    name = os.path.splitext(os.path.basename(path))[0]
    im = Image.open(path).convert("RGBA")
    box = im.getchannel("A").getbbox()
    if not box:
        sys.exit("%s is empty (fully transparent)" % path)
    # Empty space above, left and right of the drawing is dropped; the bottom edge stays the ground line.
    crop = (box[0], box[1], box[2], im.height)
    im = im.crop(crop)
    cols = -(-im.width // CELL)
    rows = -(-im.height // CELL)
    im = pad(im, cols * CELL, rows * CELL)
    side = os.path.join(ART, name + ".json")
    opts = json.load(open(side)) if os.path.exists(side) else {}
    default = opts.get("material", "Concrete")
    if default not in DATA["Materials"]:
        sys.exit("%s: unknown material %r (Materials: %s)" % (side, default, ", ".join(DATA["Materials"])))
    mpath = os.path.join(ART, name + "_material.png")
    mat_im = None
    if os.path.exists(mpath):
        mat_im = pad(Image.open(mpath).convert("RGBA").crop(crop), cols * CELL, rows * CELL)
    alpha = im.getchannel("A").load()
    grid, lost, counts = [], 0, {}
    for r in range(rows):
        line = ""
        for c in range(cols):
            covered = sum(1 for y in range(r * CELL, (r + 1) * CELL) for x in range(c * CELL, (c + 1) * CELL)
                          if alpha[x, y] > 0)
            if covered < min_cover * CELL * CELL:
                lost += covered
                line += "."
                continue
            mat = default
            if mat_im is not None:
                votes = {}
                for y in range(r * CELL, (r + 1) * CELL):
                    for x in range(c * CELL, (c + 1) * CELL):
                        p = mat_im.getpixel((x, y))
                        if p[3] > 0:
                            m = nearest_material(p[:3], palette)
                            votes[m] = votes.get(m, 0) + 1
                if votes:
                    mat = max(votes, key=votes.get)
            counts[mat] = counts.get(mat, 0) + 1
            line += DATA["Materials"][mat]["Char"]
        grid.append(line)
    texture = "formation_%s.png" % name
    im.save(os.path.join(ASSETS, texture))
    lane = sum(1 for line in grid[-CLEARANCE_ROWS:] for ch in line if ch != ".")
    lane_hp = sum(DATA["Materials"][m]["HP"] for line in grid[-CLEARANCE_ROWS:] for ch in line if ch != "."
                  for m, info in DATA["Materials"].items() if info["Char"] == ch)
    report = "%-22s %2d x %2d cells, %4d solid (%s); in the tower's lane: %d cells, %d shots" % (
        name, cols, rows, sum(counts.values()), ", ".join("%s %d" % kv for kv in sorted(counts.items())),
        lane, lane_hp)
    if lost:
        report += "; %d px of thin edges dropped" % lost
    if lane_hp > 40:
        report += "  <-- slow to clear (over ~7 s of shooting)"
    print(report)
    return {"Name": name, "Texture": texture, "Rows": grid, "Intro": bool(opts.get("intro", False))}


def main():
    min_cover = 0.25
    if "--min-cover" in sys.argv:
        min_cover = float(sys.argv[sys.argv.index("--min-cover") + 1])
    palette = {m: hex_rgb(info["MapColor"]) for m, info in DATA["Materials"].items() if info.get("MapColor")}
    os.makedirs(ASSETS, exist_ok=True)
    for old in glob.glob(os.path.join(ASSETS, "formation_*.png")):
        os.remove(old)
    out = []
    for path in sorted(glob.glob(os.path.join(ART, "*.png"))):
        if path.endswith("_material.png"):
            continue
        out.append(import_one(path, min_cover, palette))
    with open(os.path.join(ROOT, "data", "art_formations.json"), "w") as f:
        json.dump(out, f, indent=1)
    print("%d art formations -> data/art_formations.json" % len(out))


if __name__ == "__main__":
    main()
