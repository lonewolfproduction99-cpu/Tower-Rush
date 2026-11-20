"""
Turns whole-object pixel art in art/formations/ into destructible formations.

For every art/formations/<name>.png (transparent background, drawn at 1x, its bottom edge is the ground):
  - the image is padded to a multiple of the cell size (12 px): extra rows on top, extra columns on the right;
  - every 12 x 12 square whose pixels cover at least --min-cover of it (default 25 %) becomes a cell;
    in the game each cell shows exactly that square of your picture;
  - the material of each cell comes from, in this order:
    1. <name>_material.png if it exists (a hand-painted map, see below);
    2. <name>.json {"material": "Stone"} (one material for the whole object);
    3. art/formations/material_reference.png (automatic): a sheet with a row of material samples drawn in
       the drawing colours and, below each, a square of that material's map colour. Each cell takes the
       material whose sample colours its pixels are closest to (colours shared by all samples, like the
       outline, and colours far from every sample don't count);
    4. Concrete.
  - a hand-painted map: <name>_material.png: paint the object in flat colours,
    one colour per material (the "MapColor" of each entry in the Materials table of data/game_data.json:
    grey #808080 Concrete, red #ff0000 Metal, ...). The colour covering most of a cell wins. Without a map,
    every cell is the formation's default material (<name>.json {"material": "Stone"}, else Concrete);
  - a square that is drawn but not completely filled is a "partial" piece: it gets the lower-case letter
    of its material (c, m, g, w ...) and takes Tuning.PartialHP shots (1) whatever the material;
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


REFERENCE = os.path.join(ART, "material_reference.png")
MAX_COLOUR_DISTANCE = 40  # a pixel further than this from every sample colour doesn't vote


def blobs(im):
    """Rectangles of non-transparent pixels, as (x0, y0, x1, y1), row by row."""
    a = im.getchannel("A")
    def runs(vals):
        out, s, p = [], None, None
        for v in vals:
            if s is None:
                s = v
            elif v != p + 1:
                out.append((s, p)); s = v
            p = v
        if s is not None:
            out.append((s, p))
        return out
    rows = [y for y in range(im.height) if any(a.getpixel((x, y)) for x in range(im.width))]
    found = []
    for y0, y1 in runs(rows):
        cols = [x for x in range(im.width) if any(a.getpixel((x, y)) for y in range(y0, y1 + 1))]
        for x0, x1 in runs(cols):
            found.append((x0, y0, x1, y1))
    return found


def load_reference(palette):
    """{rgb: material} from material_reference.png: sample row on top, map-colour row below."""
    if not os.path.exists(REFERENCE):
        return {}
    im = Image.open(REFERENCE).convert("RGBA")
    bs = blobs(im)
    top = min(b[1] for b in bs)
    samples = [b for b in bs if b[1] == top]
    maps = [b for b in bs if b[1] != top]
    per_sample = []
    for sx0, sy0, sx1, sy1 in samples:
        below = min(maps, key=lambda m: abs((m[0] + m[2]) - (sx0 + sx1)))
        mc = im.getpixel(((below[0] + below[2]) // 2, (below[1] + below[3]) // 2))[:3]
        mat = nearest_material(mc, palette)
        cols = {im.getpixel((x, y))[:3] for y in range(sy0, sy1 + 1) for x in range(sx0, sx1 + 1)
                if im.getpixel((x, y))[3] > 0}
        per_sample.append((mat, cols))
    shared = set.intersection(*[c for _, c in per_sample]) if len(per_sample) > 1 else set()
    ref = {}
    for mat, cols in per_sample:
        for c in cols - shared:
            ref[c] = mat
    return ref


def auto_material(im, x0, y0, ref):
    votes = {}
    for y in range(y0, y0 + CELL):
        for x in range(x0, x0 + CELL):
            p = im.getpixel((x, y))
            if p[3] == 0:
                continue
            c = min(ref, key=lambda r: sum((a - b) ** 2 for a, b in zip(p[:3], r)))
            if sum((a - b) ** 2 for a, b in zip(p[:3], c)) <= MAX_COLOUR_DISTANCE ** 2:
                votes[ref[c]] = votes.get(ref[c], 0) + 1
    return max(votes, key=votes.get) if votes else None


def pad(im, w, h):
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(im, (0, h - im.height))  # keep the bottom edge on the ground, pad on top and right
    return out


def import_one(path, min_cover, palette, ref):
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
    use_ref = bool(ref) and "material" not in opts
    if default not in DATA["Materials"]:
        sys.exit("%s: unknown material %r (Materials: %s)" % (side, default, ", ".join(DATA["Materials"])))
    mpath = os.path.join(ART, name + "_material.png")
    mat_im = None
    if os.path.exists(mpath):
        mat_im = pad(Image.open(mpath).convert("RGBA").crop(crop), cols * CELL, rows * CELL)
    alpha = im.getchannel("A").load()
    grid, lost, counts, partial = [], 0, {}, 0
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
            if mat_im is None and use_ref:
                mat = auto_material(im, c * CELL, r * CELL, ref) or default
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
            ch = DATA["Materials"][mat]["Char"]
            if covered < CELL * CELL and ch.isalpha():
                ch = ch.lower()  # a partly drawn square: 1 shot whatever the material (Tuning.PartialHP)
                partial += 1
            line += ch
        grid.append(line)
    texture = "formation_%s.png" % name
    im.save(os.path.join(ASSETS, texture))
    lane = sum(1 for line in grid[-CLEARANCE_ROWS:] for ch in line if ch != ".")
    hp = {info["Char"]: info["HP"] for info in DATA["Materials"].values()}
    hp.update({c.lower(): DATA["Tuning"].get("PartialHP", 1) for c in list(hp) if c.isalpha()})
    lane_hp = sum(hp[ch] for line in grid[-CLEARANCE_ROWS:] for ch in line if ch != ".")
    report = "%-22s %2d x %2d cells, %4d solid (%s); in the tower's lane: %d cells, %d shots" % (
        name, cols, rows, sum(counts.values()), ", ".join("%s %d" % kv for kv in sorted(counts.items())),
        lane, lane_hp)
    if partial:
        report += "; %d partial pieces (1 shot)" % partial
    if lost:
        report += "; %d px of thin edges dropped" % lost
    if lane_hp > 40:
        report += "  <-- slow to clear (over ~7 s of shooting)"
    print(report)
    return {"Name": name, "Texture": texture, "Rows": grid, "Weight": opts.get("weight", 1)}


def main():
    min_cover = 0.25
    if "--min-cover" in sys.argv:
        min_cover = float(sys.argv[sys.argv.index("--min-cover") + 1])
    palette = {m: hex_rgb(info["MapColor"]) for m, info in DATA["Materials"].items() if info.get("MapColor")}
    os.makedirs(ASSETS, exist_ok=True)
    for old in glob.glob(os.path.join(ASSETS, "formation_*.png")):
        os.remove(old)
    out = []
    ref = load_reference(palette)
    if ref:
        print("material reference: %d colours (%s)" % (len(ref), ", ".join(sorted(set(ref.values())))))
    for path in sorted(glob.glob(os.path.join(ART, "*.png"))):
        if path.endswith("_material.png") or path == REFERENCE:
            continue
        out.append(import_one(path, min_cover, palette, ref))
    with open(os.path.join(ROOT, "data", "art_formations.json"), "w") as f:
        json.dump(out, f, indent=1)
    print("%d art formations -> data/art_formations.json" % len(out))


if __name__ == "__main__":
    main()
