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
    d.rectangle([50, 8, 54, 12], fill=(40, 120, 230, 255))          # turret mount point (52, 10)
    d.line([(30, 90), (30, 95)], fill=(40, 160, 60, 255))           # origin: bottom centre
    return im


def turret():
    im = Image.new("RGBA", (44, 16), (255, 255, 255, 255))
    d = ImageDraw.Draw(im)
    d.rectangle([6, 6, 10, 10], fill=(40, 120, 230, 255))           # pivot (8, 8)
    d.rectangle([40, 6, 43, 10], fill=(230, 40, 40, 255))           # muzzle (42, 8)
    d.line([(10, 8), (40, 8)], fill=(180, 180, 180, 255))
    return im


os.makedirs(OUT, exist_ok=True)
for w, h in ((72, 48), (120, 252), (240, 360)):
    obstacle(w, h).save(os.path.join(OUT, "obstacle_grid_%dx%d.png" % (w, h)))
tower().save(os.path.join(OUT, "tower_guide_60x96.png"))
turret().save(os.path.join(OUT, "turret_guide_44x16.png"))
print("templates written to art/templates/")
