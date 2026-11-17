"""
Package the HTML5 export (docs/) for a claude.ai artifact link.

The artifact page wraps the export's index.html body; the game starts once the document body
exists (the host may run scripts earlier).

Usage: python3 tools/publish/make_link_build.py <out dir>
Writes <out dir>/build/ (files to publish) and <out dir>/tower-rush.html (the page).
"""
import os
import re
import shutil
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
out = os.path.abspath(sys.argv[1])
build = os.path.join(out, "build")
shutil.rmtree(build, ignore_errors=True)
shutil.copytree(os.path.join(ROOT, "docs"), build, ignore=shutil.ignore_patterns(".nojekyll", "index.html"))
src = open(os.path.join(ROOT, "docs", "index.html")).read()
scripts = re.findall(r'<script src="[^"]+" crossorigin="anonymous"></script>', src)
inline = src[src.index("<body>") + 6:src.index("</body>")]
a = inline.index("(function() {")
b = inline.index("})();", a) + len("})();")
inline = (inline[:a] + "function trStart() {\n" + inline[a:b] +
          "\n}\nif (document.body) trStart();\nelse document.addEventListener('DOMContentLoaded', trStart);" + inline[b:])
page = """<title>Tower Rush</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<style>
  :root { --bg: #000000; color-scheme: dark; }
  html, body { height: 100%; }
  body { margin: 0; padding: 0; background: var(--bg); overflow: hidden; }
  #canvasArea { margin-left: auto; margin-right: auto; overflow: hidden; }
</style>
""" + "\n".join(scripts) + "\n" + inline
open(os.path.join(out, "tower-rush.html"), "w").write(page)
print("Wrote", os.path.join(out, "tower-rush.html"), "and", build)
