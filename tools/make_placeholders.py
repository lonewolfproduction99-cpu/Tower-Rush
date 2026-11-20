"""
Draws the temporary pixel-art placeholders into game/assets/ (code-made, meant to be replaced).

Every file keeps its name and size when you replace it with final art, so the project needs no
change: see README.md "Replacing the placeholder art" for the sizes and origins.

Run: python3 tools/make_placeholders.py
"""

import math
import os
import random

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "game", "assets")
random.seed(7)


OWNER_BG = os.path.join(ROOT, "art", "backgrounds")


def save(img, name):
    os.makedirs(OUT, exist_ok=True)
    if os.path.exists(os.path.join(OWNER_BG, name)) or os.path.exists(os.path.join(ROOT, "art", "tower", name)):
        return  # the owner's own art (art/backgrounds/) is used instead; build_project.py copies it in
    img.save(os.path.join(OUT, name))


def rgba(w, h):
    return Image.new("RGBA", (w, h), (0, 0, 0, 0))


# ------------------------------------------------------------------ tower (60 x 96, origin 30,96)
# Hitbox (set in build_project.py): x 8..52, y 16..96. The turret pivot is at the front-top corner (52, 10),
# so the front face of the chassis is never in the line of fire.
def tower(frame):
    im = rgba(60, 96)
    d = ImageDraw.Draw(im)
    # Tracks: y 74..96
    d.rounded_rectangle([2, 74, 57, 95], radius=10, fill=(40, 40, 46), outline=(16, 16, 20))
    for i in range(7):
        x = 6 + i * 8 + (4 if frame else 0)
        if x < 54:
            d.rectangle([x, 75, x + 2, 77], fill=(110, 110, 120))
            d.rectangle([x, 92, x + 2, 94], fill=(110, 110, 120))
    for cx in (12, 24, 36, 48):
        d.ellipse([cx - 5, 79, cx + 5, 89], fill=(90, 90, 98), outline=(30, 30, 36))
        d.point((cx + (2 if frame else -2), 84), fill=(200, 200, 210))
    # Body: y 18..74, a tall plated tower
    d.rectangle([8, 40, 52, 74], fill=(176, 120, 52), outline=(70, 44, 18))
    d.rectangle([12, 18, 50, 42], fill=(196, 140, 64), outline=(70, 44, 18))
    d.rectangle([16, 24, 30, 32], fill=(60, 200, 230), outline=(20, 60, 80))  # window
    d.rectangle([10, 52, 50, 56], fill=(120, 80, 34))
    for x in (12, 22, 32, 42):
        d.point((x, 46), fill=(240, 200, 120))
        d.point((x, 66), fill=(240, 200, 120))
    # Turret mount on top of the chassis, at the TurretMount point (18, 10): set back so the 34 px barrel
    # ends at the chassis front (x 52) when it points forward
    d.rectangle([12, 8, 24, 20], fill=(120, 80, 34), outline=(70, 44, 18))
    # Hazard stripes on the front
    for y in range(44, 72, 8):
        d.polygon([(48, y), (52, y), (52, y + 4)], fill=(30, 30, 30))
    return im


# ------------------------------------------------------------------ turret (44 x 16, pivot 8,8, muzzle 42,8)
def turret():
    im = rgba(44, 16)
    d = ImageDraw.Draw(im)
    d.rectangle([12, 5, 41, 10], fill=(70, 74, 82), outline=(20, 20, 26))
    d.rectangle([36, 4, 43, 11], fill=(50, 54, 60), outline=(20, 20, 26))
    d.ellipse([0, 0, 15, 15], fill=(140, 146, 156), outline=(30, 30, 36))
    d.ellipse([5, 5, 10, 10], fill=(220, 90, 40))
    return im


def bullet():
    im = rgba(12, 4)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 1, 11, 2], fill=(255, 220, 90))
    d.rectangle([7, 0, 11, 3], fill=(255, 250, 200))
    return im


def muzzle():
    im = rgba(20, 16)
    d = ImageDraw.Draw(im)
    d.polygon([(0, 4), (19, 8), (0, 12)], fill=(255, 200, 60))
    d.polygon([(0, 6), (12, 8), (0, 10)], fill=(255, 255, 220))
    d.polygon([(4, 0), (10, 8), (4, 16)], fill=(255, 150, 40))
    return im


TILE_COLORS = {"stone": (128, 116, 104), "hard": (82, 86, 102), "concrete": (150, 150, 146), "metal": (120, 70, 50),
               "glass": (63, 86, 92), "wood": (140, 99, 58)}


def tile(material):
    """A 12 x 12 tile for formations typed as text grids (one per material)."""
    base = TILE_COLORS[material]
    im = Image.new("RGBA", (12, 12), base + (255,))
    d = ImageDraw.Draw(im)
    light = tuple(min(255, c + 30) for c in base)
    dark = tuple(max(0, c - 40) for c in base)
    d.line([(0, 0), (11, 0)], fill=light)
    d.line([(0, 0), (0, 11)], fill=light)
    d.line([(11, 1), (11, 11)], fill=dark)
    d.line([(1, 11), (11, 11)], fill=dark)
    rnd = random.Random(material)
    for _ in range(4):
        d.point((rnd.randint(2, 9), rnd.randint(2, 9)), fill=dark)
    return im


def crack(stage):
    """Transparent 12 x 12 crack overlay drawn over any damaged cell (stage 1 or 2)."""
    im = rgba(12, 12)
    d = ImageDraw.Draw(im)
    col = (20, 16, 14, 230)
    d.line([(3, 2), (6, 5), (5, 8)], fill=col)
    if stage >= 2:
        d.line([(9, 3), (6, 5), (8, 9), (10, 10)], fill=col)
        d.line([(2, 9), (5, 8)], fill=col)
        d.point((7, 6), fill=col)
    return im


# ------------------------------------------------------------------ example formation art (PLACEHOLDERS)
# Stand-ins for the owner's pixel art, to show the "draw a whole object" pipeline (tools/import_formations.py).
def ruin():
    """A ruined two-storey building, 120 x 252, open ground floor 7 cells (84 px) high."""
    w, h = 120, 252
    im, mp = rgba(w, h), Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d, m = ImageDraw.Draw(im), ImageDraw.Draw(mp)
    conc, conc_d, conc_l = (150, 150, 146, 255), (104, 104, 100, 255), (178, 176, 168, 255)
    grey, red = (128, 128, 128, 255), (255, 0, 0, 255)
    # back wall (right) full height with a jagged top
    d.rectangle([108, 40, 119, 251], fill=conc_d)
    m.rectangle([108, 40, 119, 251], fill=grey)
    # front wall (left): broken at the bottom (rubble gap 4 cells high), jagged top
    d.rectangle([0, 72, 11, 203], fill=conc)
    m.rectangle([0, 72, 11, 203], fill=grey)
    # floor slabs (metal-reinforced): above the ground floor and between storeys
    for y in (156, 84):
        d.rectangle([0, y, 119, y + 11], fill=(110, 76, 58, 255))
        d.line([(0, y + 5), (119, y + 5)], fill=(70, 40, 30, 255))
        m.rectangle([0, y, 119, y + 11], fill=red)
    # upper storey walls with window holes
    d.rectangle([12, 96, 107, 155], fill=conc_l)
    m.rectangle([12, 96, 107, 155], fill=grey)
    for x in (24, 60):
        d.rectangle([x, 108, x + 23, 143], fill=(0, 0, 0, 0))
        m.rectangle([x, 108, x + 23, 143], fill=(0, 0, 0, 0))
    # jagged broken top
    for x in range(0, w, 12):
        top = 40 + (x * 37 % 48)
        d.rectangle([x, 30, x + 11, top], fill=(0, 0, 0, 0))
        m.rectangle([x, 30, x + 11, top], fill=(0, 0, 0, 0))
    d.rectangle([0, 0, w - 1, 39], fill=(0, 0, 0, 0))
    m.rectangle([0, 0, w - 1, 39], fill=(0, 0, 0, 0))
    # rubble pile at the foot of the front wall
    d.polygon([(0, 251), (0, 230), (8, 222), (18, 236), (22, 251)], fill=(120, 116, 108, 255))
    m.polygon([(0, 251), (0, 230), (8, 222), (18, 236), (22, 251)], fill=grey)
    # cracks and grime
    rnd = random.Random(11)
    for _ in range(140):
        x, y = rnd.randint(0, w - 1), rnd.randint(0, h - 1)
        if im.getpixel((x, y))[3]:
            d.point((x, y), fill=(90, 88, 84, 255))
    return im, mp


def boulder():
    """A 72 x 48 boulder, all stone."""
    im = rgba(72, 48)
    d = ImageDraw.Draw(im)
    d.polygon([(4, 47), (0, 30), (10, 12), (28, 2), (50, 4), (66, 16), (71, 34), (66, 47)],
              fill=(132, 118, 98, 255), outline=(70, 60, 48, 255))
    d.polygon([(14, 16), (28, 8), (44, 10), (30, 20)], fill=(166, 150, 126, 255))
    d.line([(30, 24), (40, 34), (38, 44)], fill=(80, 68, 54, 255))
    return im


def debris():
    im = rgba(5, 5)
    ImageDraw.Draw(im).rectangle([0, 0, 4, 4], fill=(150, 136, 120), outline=(70, 60, 52))
    return im


def spark():
    im = rgba(10, 10)
    d = ImageDraw.Draw(im)
    d.line([(0, 5), (9, 5)], fill=(255, 240, 160))
    d.line([(5, 0), (5, 9)], fill=(255, 240, 160))
    d.rectangle([3, 3, 6, 6], fill=(255, 255, 255))
    return im


def crosshair():
    im = rgba(32, 32)
    d = ImageDraw.Draw(im)
    for col, w in (((0, 0, 0, 200), 4), ((255, 80, 60, 255), 2)):
        d.ellipse([4, 4, 27, 27], outline=col, width=w)
        d.line([(16, 0), (16, 9)], fill=col, width=w)
        d.line([(16, 22), (16, 31)], fill=col, width=w)
        d.line([(0, 16), (9, 16)], fill=col, width=w)
        d.line([(22, 16), (31, 16)], fill=col, width=w)
    d.rectangle([15, 15, 16, 16], fill=(255, 255, 255, 255))
    return im


# ------------------------------------------------------------------ cloud (600 x 960, origin at the right edge)
def cloud(frame):
    w, h = 600, 960
    small = rgba(w // 4, h // 4)  # drawn at 1/4 and scaled up: chunky pixels
    d = ImageDraw.Draw(small)
    sw, sh = small.size
    d.rectangle([0, 0, sw - 30, sh], fill=(92, 140, 40, 235))
    rnd = random.Random(frame)
    for i in range(26):
        y = i * sh / 25 + rnd.uniform(-3, 3)
        r = 12 + rnd.uniform(0, 9) + 3 * math.sin(frame * 2.1 + i)
        x = sw - 30 + rnd.uniform(-6, 8)
        d.ellipse([x - r, y - r, x + r, y + r], fill=(120, 170, 50, 235))
    for i in range(40):
        x = rnd.uniform(0, sw - 20)
        y = rnd.uniform(0, sh)
        r = rnd.uniform(4, 10)
        d.ellipse([x - r, y - r, x + r, y + r], fill=(150, 200, 70, 200))
    for i in range(14):
        x = rnd.uniform(sw - 50, sw - 10)
        y = rnd.uniform(0, sh)
        d.ellipse([x - 2, y - 2, x + 2, y + 2], fill=(220, 255, 120, 255))
    return small.resize((w, h), Image.NEAREST)


def ground():
    im = Image.new("RGBA", (32, 160), (92, 66, 44, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 31, 5], fill=(150, 116, 70))
    d.line([(0, 6), (31, 6)], fill=(60, 42, 28))
    rnd = random.Random(3)
    for _ in range(40):
        x, y = rnd.randint(0, 31), rnd.randint(9, 159)
        d.point((x, y), fill=(70, 50, 34))
    d.rectangle([5, 1, 7, 2], fill=(180, 146, 96))
    d.rectangle([21, 2, 24, 3], fill=(120, 92, 56))
    return im


def hills():
    w, h = 256, 260
    im = rgba(w, h)
    d = ImageDraw.Draw(im)
    pts = [(0, h)]
    for x in range(0, w + 1, 8):
        y = 120 + 40 * math.sin(x / w * 2 * math.pi) + 22 * math.sin(x / w * 6 * math.pi + 1)
        pts.append((x, int(y) // 4 * 4))
    pts.append((w, h))
    d.polygon(pts, fill=(176, 120, 96, 255))
    pts2 = [(0, h)]
    for x in range(0, w + 1, 8):
        y = 180 + 26 * math.sin(x / w * 4 * math.pi + 2)
        pts2.append((x, int(y) // 4 * 4))
    pts2.append((w, h))
    d.polygon(pts2, fill=(150, 98, 80, 255))
    return im


GEM_COLORS = {"common": ((90, 220, 110), (40, 120, 60)), "rare": ((80, 170, 255), (30, 70, 160)),
              "legendary": ((255, 214, 80), (170, 100, 20))}


def gem(kind, size):
    """A faceted gem: 12 x 12 loose, 8 x 8 embedded (the mark shown on the cell that holds it)."""
    light, dark = GEM_COLORS[kind]
    im = rgba(size, size)
    d = ImageDraw.Draw(im)
    m = size - 1
    d.polygon([(m // 2, 0), (m, m // 2 - 1), (m // 2, m), (0, m // 2 - 1)], fill=light, outline=(20, 20, 24))
    d.polygon([(m // 2, 0), (m, m // 2 - 1), (m // 2, m // 2)], fill=tuple(min(255, c + 50) for c in light))
    d.polygon([(0, m // 2 - 1), (m // 2, m), (m // 2, m // 2)], fill=dark)
    d.point((m // 2 - 1, 2), fill=(255, 255, 255))
    return im


def sky():
    """540 x 960, does not scroll: a dusty gradient."""
    im = Image.new("RGBA", (540, 960))
    d = ImageDraw.Draw(im)
    top, bottom = (196, 140, 110), (240, 200, 150)
    for y in range(0, 960, 8):  # 8 px bands: a pixel-art gradient
        t = y / 959
        d.rectangle([0, y, 539, y + 7], fill=tuple(int(a + (b - a) * t) for a, b in zip(top, bottom)) + (255,))
    return im


def button(w, h, fill, edge):
    im = rgba(w, h)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 4, w - 1, h - 1], fill=edge)
    d.rectangle([0, 0, w - 1, h - 5], fill=fill, outline=edge, width=3)
    return im


def warning_edge():
    w, h = 90, 960
    im = rgba(w, h)
    px = im.load()
    for x in range(w):
        a = int(170 * (1 - x / w) ** 1.6)
        for y in range(h):
            px[x, y] = (230, 40, 30, a)
    return im


def panel():
    im = rgba(440, 300)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 439, 299], fill=(20, 18, 24, 230), outline=(230, 190, 90, 255), width=4)
    return im


def main():
    for f in (0, 1):
        save(tower(f), "tower_%d.png" % f)
    save(turret(), "turret.png")
    save(bullet(), "bullet.png")
    save(muzzle(), "muzzle_flash.png")
    for m in TILE_COLORS:
        save(tile(m), "tile_%s.png" % m)
    for st in (1, 2):
        save(crack(st), "crack_%d.png" % st)
    save(debris(), "debris.png")
    save(spark(), "spark.png")
    save(crosshair(), "crosshair.png")
    for f in range(3):
        save(cloud(f), "cloud_%d.png" % f)
    save(ground(), "ground.png")
    save(sky(), "sky.png")
    for k in GEM_COLORS:
        save(gem(k, 12), "gem_%s.png" % k)
        save(gem(k, 8), "gem_mark_%s.png" % k)
    save(hills(), "hills.png")
    save(button(240, 72, (230, 170, 60, 255), (110, 70, 20, 255)), "button.png")
    save(button(150, 50, (60, 70, 90, 220), (20, 24, 34, 255)), "button_small.png")
    save(warning_edge(), "warning_edge.png")
    row = rgba(500, 110)
    ImageDraw.Draw(row).rectangle([0, 0, 499, 109], fill=(20, 22, 26, 225), outline=(110, 120, 120, 255), width=3)
    save(row, "panel_row.png")
    save(panel(), "panel.png")
    print("placeholders written to", os.path.relpath(OUT, ROOT))


if __name__ == "__main__":
    main()
