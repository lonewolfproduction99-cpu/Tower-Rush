# Code-drawn reference background (not for shipping: the owner redraws it by hand in Pixilart).
import random, sys, os
from PIL import Image, ImageDraw
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "art", "templates")
P = {  # name: hex
 "sky_top": "#6F7C99", "sky_2": "#8390AA", "sky_3": "#98A3BA", "sky_4": "#ADB5C8", "sky_horizon": "#C2C6D3",
 "haze_glow": "#D6D3DC", "smog_streak": "#B4BACB",
 "far_city": "#A6ACC1", "mid_city": "#9198B0", "near_ruins": "#7C829C", "near_ruins_shadow": "#6E7490",
 "window_dark": "#858BA5", "window_lit": "#CFC9B8", "rubble_line": "#747A94",
}
rgb = lambda h: tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))
W, H, GROUND = 540, 960, 800
im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(im)
# sky: hard bands with a 2-px checker dither between them (pixel-art gradient)
bands = [(0, "sky_top"), (170, "sky_2"), (330, "sky_3"), (470, "sky_4"), (580, "sky_horizon")]
for i, (y0, name) in enumerate(bands):
    y1 = bands[i + 1][0] if i + 1 < len(bands) else GROUND
    d.rectangle([0, y0, W - 1, y1 - 1], fill=rgb(P[name]))
    if i + 1 < len(bands):
        nxt = rgb(P[bands[i + 1][1]])
        for y in range(y1 - 8, y1):
            for x in range((y % 2) * 2, W, 4):
                d.rectangle([x, y, x + 1, y], fill=nxt)
# soft glow low on the horizon
d.ellipse([140, 520, 420, 700], fill=rgb(P["haze_glow"]))
d.rectangle([0, 620, W - 1, GROUND], fill=rgb(P["sky_horizon"]))
# smog streaks
rnd = random.Random(5)
for _ in range(9):
    y = rnd.randint(140, 520); x = rnd.randint(-60, 480); w = rnd.randint(60, 180)
    d.rectangle([x, y, x + w, y + 2], fill=rgb(P["smog_streak"]))
def skyline(color, base, hmin, hmax, wmin, wmax, seed, windows=None, lit=0.0):
    r = random.Random(seed); x = -10
    while x < W + 10:
        w = r.randint(wmin, wmax); h = r.randint(hmin, hmax); top = base - h
        d.rectangle([x, top, x + w, base], fill=rgb(P[color]))
        for k in range(r.randint(1, 3)):  # broken top
            bx = x + r.randint(0, max(1, w - 8)); d.rectangle([bx, top - r.randint(2, 10), bx + r.randint(3, 8), top], fill=rgb(P[color]))
        if r.random() < 0.35:  # bite taken out of the corner
            cw = r.randint(4, max(5, w // 3)); d.polygon([(x + w - cw, top), (x + w + 1, top), (x + w + 1, top + cw * 2)], fill=rgb(P["sky_horizon"]) if base < 760 else rgb(P["far_city"]))
        if windows:
            for wy in range(top + 6, base - 6, 9):
                for wx in range(x + 4, x + w - 4, 7):
                    if r.random() < 0.7:
                        d.rectangle([wx, wy, wx + 2, wy + 3], fill=rgb(P["window_lit"] if r.random() < lit else P[windows]))
        x += w + r.randint(0, 14)
skyline("far_city", 760, 90, 230, 24, 56, 1)
skyline("mid_city", 785, 60, 170, 30, 70, 2, windows="window_dark", lit=0.04)
skyline("near_ruins", 800, 20, 90, 40, 110, 3, windows="near_ruins_shadow")
# rubble / horizon line and two leaning poles
for x in range(0, W, 3):
    h = 4 + (x * 7 % 9); d.rectangle([x, GROUND - h, x + 2, GROUND], fill=rgb(P["rubble_line"]))
for px, lean in ((150, 6), (395, -5)):
    d.line([(px, GROUND), (px + lean, GROUND - 95)], fill=rgb(P["near_ruins_shadow"]), width=3)
    d.line([(px + lean - 14, GROUND - 88), (px + lean + 14, GROUND - 92)], fill=rgb(P["near_ruins_shadow"]), width=2)
im.save(os.path.join(OUT, "background_reference_540x960.png"))
# palette sheet
from PIL import ImageFont
try: font = ImageFont.load_default(size=16)
except TypeError: font = ImageFont.load_default()
sw = Image.new("RGB", (560, 40 + 34 * len(P)), (28, 28, 30)); sd = ImageDraw.Draw(sw)
sd.text((10, 10), "Background palette (lighter + cooler than every obstacle)", fill=(240, 240, 240), font=font)
for i, (n, h) in enumerate(P.items()):
    y = 40 + i * 34
    sd.rectangle([10, y, 70, y + 26], fill=rgb(h), outline=(0, 0, 0))
    sd.text((84, y + 4), "%-20s %s" % (n.replace("_", " "), h), fill=(235, 235, 235), font=font)
sw.save(os.path.join(OUT, "background_palette.png"))
print("ok")
