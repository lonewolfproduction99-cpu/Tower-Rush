#!/usr/bin/env bash
# Export game/TowerRush.json to an HTML5 build with the official GDevelop CLI (headless).
# Usage: tools/export.sh <path to the extracted GDevelop Linux zip> [output dir, default docs]
#   (GDevelop-5-<version>-linux.zip from https://github.com/4ian/GDevelop/releases; 5.6.285 is tested)
set -euo pipefail
GD_APP="${1:?path to the extracted GDevelop app}"
OUT="${2:-docs}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$(mktemp -d)"
cp -r "$ROOT/game/." "$WORK/"
NODE_OPTIONS= timeout 600 xvfb-run -a "$GD_APP/gdevelop" --no-sandbox --disable-update-check --disable-gpu \
  --run-command EXPORT_HTML5_EXTERNAL "$WORK/TowerRush.json" 2>&1 | grep -iE "error|fail|export" | grep -viE "dbus|gpu|bus.cc" || true
test -f "$WORK/build/index.html" || { echo "Export failed: no index.html"; exit 1; }
rm -rf "$ROOT/$OUT"
mkdir -p "$ROOT/$OUT"
cp -r "$WORK/build/." "$ROOT/$OUT/"
touch "$ROOT/$OUT/.nojekyll"
rm -rf "$WORK"
echo "Exported to $OUT ($(du -sh "$ROOT/$OUT" | cut -f1))"
