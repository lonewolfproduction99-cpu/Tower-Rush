"""
Guide images for drawing art (e.g. in ibisPaint X): import one as a layer, draw on layers above it,
and hide or delete the guide layer before exporting your PNG.

Run: python3 tools/make_templates.py   -> art/templates/
"""
import os
from PIL import Image, ImageDraw

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "art", "templates")
CELL = 12
CLEAR = 84  # the tower needs this much free height above the ground


def obstacle(w, h):
    im = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    for x in range(0, w, CELL):
        d.line([(x, 0), (x, h - 1)], fill=(200, 210, 230, 255))
    for y in range(h - CELL, -1, -CELL):  # grid counted from the bottom (the ground): top pixel of each cell
        d.line([(0, y), (w - 1, y)], fill=(200, 210, 230, 255))
    # tower lane: everything below this line blocks the tower until shot away
    for x in range(0, w, 4):
        d.point((x, h - CLEAR), fill=(230, 40, 40, 255))
    d.line([(0, h - 1), (w - 1, h - 1)], fill=(120, 80, 40, 255))  # ground
    return im


def tower():
    im = Image.new("RGBA", (60, 96), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([8, 16, 52, 95], outline=(230, 40, 40, 255))        # collision box (chassis)
    d.rectangle([16, 8, 20, 12], fill=(40, 120, 230, 255))          # turret mount point (18, 10), movable
    d.line([(20, 10), (52, 10)], fill=(180, 180, 180, 255))         # barrel reach when level: ends at the front
    d.line([(30, 90), (30, 95)], fill=(40, 160, 60, 255))           # origin: bottom centre
    return im


def turret():
    im = Image.new("RGBA", (44, 16), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([6, 6, 10, 10], fill=(40, 120, 230, 255))           # pivot (8, 8)
    d.rectangle([40, 6, 43, 10], fill=(230, 40, 40, 255))           # muzzle (42, 8)
    d.line([(10, 8), (40, 8)], fill=(180, 180, 180, 255))
    return im


def dotted_h(d, y, w, col):
    for x in range(0, w, 4):
        d.point((x, y), fill=col)


def ground():
    """128 x 160: the strip the tower drives on. Its top edge is the ground line. Repeats sideways."""
    im = Image.new("RGBA", (128, 160), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 127, 5], fill=(255, 225, 200, 255))      # top ~6 px: the surface the tracks touch
    d.line([(0, 0), (127, 0)], fill=(230, 40, 40, 255))         # ground line (tracks sit on it)
    d.rectangle([0, 0, 2, 159], fill=(40, 120, 230, 255))       # left and right edges must join up
    d.rectangle([125, 0, 127, 159], fill=(40, 120, 230, 255))
    return im


def far():
    """540 x 300: far skyline, scrolls slowly, repeats sideways. Bottom 20 px are hidden behind the ground."""
    im = Image.new("RGBA", (540, 300), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 280, 539, 299], fill=(220, 200, 180, 255))   # hidden behind the ground strip
    dotted_h(d, 280, 540, (230, 40, 40, 255))                    # ground line
    d.rectangle([0, 0, 2, 299], fill=(40, 120, 230, 255))
    d.rectangle([537, 0, 539, 299], fill=(40, 120, 230, 255))
    return im


def sky():
    """540 x 960: the whole screen, does not move."""
    im = Image.new("RGBA", (540, 960), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 539, 129], fill=(225, 235, 250, 255))     # score and buttons sit here
    d.rectangle([0, 520, 539, 799], fill=(235, 235, 235, 255))   # usually covered by the far skyline
    d.rectangle([0, 800, 539, 959], fill=(215, 200, 185, 255))   # covered by the ground strip
    dotted_h(d, 800, 540, (230, 40, 40, 255))                    # ground line
    dotted_h(d, 520, 540, (40, 120, 230, 255))                   # top of a 300 px far layer
    return im


os.makedirs(OUT, exist_ok=True)
ground().save(os.path.join(OUT, "ground_guide_128x160.png"))
far().save(os.path.join(OUT, "far_skyline_guide_540x300.png"))
sky().save(os.path.join(OUT, "sky_guide_540x960.png"))
for w, h in ((72, 48), (120, 252), (240, 360)):
    obstacle(w, h).save(os.path.join(OUT, "obstacle_grid_%dx%d.png" % (w, h)))
tower().save(os.path.join(OUT, "tower_guide_60x96.png"))
turret().save(os.path.join(OUT, "turret_guide_44x16.png"))
print("templates written to art/templates/")
