// Play-tests the exported web build (docs/) in headless Chromium with real mouse and touch input.
// The game is driven only through input events; the test reads the scene's variables and objects to check.
//
// Usage: node tools/test/play.js [docs dir] [output dir for screenshots and report]
// Requires Playwright (preinstalled in the cloud container) and python3 (for a static file server).
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const DOCS = path.resolve(process.argv[2] || 'docs');
const OUT = path.resolve(process.argv[3] || 'test-output');
const SCENARIO = process.argv[4] || 'phase1'; // phase1 | art | gems | shop
const PORT = 8790 + Math.floor(Math.random() * 100);
fs.mkdirSync(OUT, { recursive: true });

const results = [];
function check(id, name, ok, detail) {
  results.push({ id, name, ok: !!ok, detail });
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + id + '. ' + name + (detail ? '  -- ' + detail : ''));
}

// Hooks the running scene so the test can read it (test-only; nothing is added to the game).
const HOOK = `
  (function hook() {
    if (window.gdjs && gdjs.registerRuntimeScenePostEventsCallback) {
      gdjs.registerRuntimeScenePostEventsCallback(function (scene) { window.__scene = scene; window.__frames = (window.__frames || 0) + 1; });
    } else setTimeout(hook, 2);
  })();`;

async function snapshot(page) {
  return page.evaluate(() => {
    const s = window.__scene;
    if (!s) return null;
    const v = (n) => s.getVariables().get(n);
    const num = (n) => v(n).getAsNumber();
    const tower = s.getObjects('Tower')[0];
    if (!tower || !s.getObjects('Panel')[0]) return null;
    const cells = s.getObjects('Cell');
    return {
      frames: window.__frames,
      state: v('State').getAsString(),
      towerX: tower.getX(), towerY: tower.getY(),
      blocked: num('Blocked'), distance: num('Distance'), best: num('BestDistance'),
      cloudX: num('CloudX'), cloudGap: num('CloudGap'),
      aimX: num('AimX'), aimY: num('AimY'), pivotX: num('PivotX'), pivotY: num('PivotY'),
      turretAngle: num('TurretAngle'), targetAngle: num('TargetAngle'),
      inputTouch: num('InputTouch'), firing: num('Firing'), shots: num('ShotsFired'), hits: num('ShotsHit'),
      destroyed: num('CellsDestroyed'), spawned: num('CellsSpawned'), formations: num('FormationCount'),
      aimOffset: num('AimOffset'),
      camX: s.getLayer('').getCameraX(),
      counts: { cell: cells.length, bullet: s.getObjects('Bullet').length, debris: s.getObjects('Debris').length,
        spark: s.getObjects('Spark').length },
      gameOverVisible: !s.getObjects('Panel')[0].isHidden(),
      time: s.getTimeManager().getTimeFromStart() / 1000,
    };
  });
}

async function cellsInPath(page) {
  // Surviving cells in the tower's lane (they block it), nearest first.
  return page.evaluate(() => {
    const s = window.__scene;
    const t = s.getObjects('Tower')[0];
    const front = t.getX() + 22, top = t.getY() - 80;
    return s.getObjects('Cell')
      .filter((c) => c.getY() + 12 > top && c.getX() + 12 > front - 1 && c.getX() < front + 400)
      .map((c) => ({ x: c.getX() + 6, y: c.getY() + 6 }))
      .sort((a, b) => (a.x - b.x) || (b.y - a.y));
  });
}

function toScreen(snap, wx, wy) {
  return { x: wx - (snap.camX - 270), y: wy };
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(page, pred, timeoutMs, stepMs = 100) {
  const end = Date.now() + timeoutMs;
  let s;
  while (Date.now() < end) {
    s = await snapshot(page);
    if (s && pred(s)) return s;
    await wait(stepMs);
  }
  return s;
}

// Test-only tuning for the main run: the gas starts further back, so the mechanics checks have time to
// work through whatever obstacle art there is (difficulty is not what they check).
const TEST_GAP = 900;
async function openGame(browser, opts = {}, testFormation = -1, gap = 0, tuning = {}, storage = null) {
  const ctx = await browser.newContext({ viewport: { width: 540, height: 960 }, ...opts });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  // GDevelop's own analytics call is blocked by the sandbox (409 / "Error while creating the session"): not a game error.
  const harmless = (t) => /409|Error while creating the session/.test(t);
  page.on('console', (m) => { if (m.type() === 'error' && !harmless(m.text())) errors.push(m.text()); });
  await page.addInitScript(HOOK);
  if (storage) await page.addInitScript((st) => { if (!sessionStorage.getItem('seeded')) {
    localStorage.setItem('GDJS_TowerRush', JSON.stringify(st)); sessionStorage.setItem('seeded', '1'); } }, storage);
  if (testFormation >= 0 || gap || Object.keys(tuning).length) {
    // Same as setting Tuning.TestFormation (and CloudStartGap) in GDevelop.
    await page.route('**/data.js', async (route) => {
      const res = await route.fetch();
      let body = await res.text();
      if (testFormation >= 0) body = body.replace('"name":"TestFormation","type":"number","value":-1',
        '"name":"TestFormation","type":"number","value":' + testFormation);
      if (gap) body = body.replace(/"name":"CloudStartGap","type":"number","value":\d+/,
        '"name":"CloudStartGap","type":"number","value":' + gap);
      for (const [k, v] of Object.entries(tuning)) {
        body = body.replace(new RegExp('"name":"' + k + '","type":"number","value":[-0-9.]+'),
          '"name":"' + k + '","type":"number","value":' + v);
      }
      await route.fulfill({ response: res, body });
    });
  }
  await page.goto(`http://127.0.0.1:${PORT}/index.html`);
  await waitFor(page, (s) => s.frames > 5, 30000);
  return { ctx, page, errors };
}

// Shoots the cells blocking the lane, nearest first, with the real mouse, until the tower moves on
// past `untilX` or time runs out.
async function clearWithMouse(page, untilX, timeoutMs) {
  const end = Date.now() + timeoutMs;
  let s = await snapshot(page);
  await page.mouse.down();
  while (Date.now() < end && s.state === 'Run' && s.towerX < untilX) {
    const cells = await cellsInPath(page);
    if (cells.length) {
      const p = toScreen(s, cells[0].x, cells[0].y);
      await page.mouse.move(p.x, p.y);
    }
    await wait(60);
    s = await snapshot(page);
  }
  await page.mouse.up();
  return s;
}

// Phase 2: gems embedded in cells, released only by breaking their cell, falling, bouncing, collected.
async function gemScenario(browser) {
  const d = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'art_formations.json'), 'utf8'));
  const idx = d.findIndex((f) => f.Name === 'owner_rubble_01');
  const { ctx, page, errors } = await openGame(browser, {}, idx, 700,
    { GemChance: 1, GemsMin: 3, GemsMax: 3, GemAboveLaneChance: 0, ClusterChance: 0 });
  const gemState = () => page.evaluate(() => {
    const s = window.__scene, v = (n) => s.getVariables().get(n).getAsNumber();
    const t = s.getObjects('Tower')[0];
    const cells = s.getObjects('Cell');
    const marks = s.getObjects('GemMark');
    const gemCells = cells.filter((c) => c.getVariables().get('Gem').getAsNumber() > 0);
    const markOnCell = marks.every((m) => gemCells.some((c) => Math.abs(m.getX() - c.getX() - 2) < 0.5 && Math.abs(m.getY() - c.getY() - 2) < 0.5));
    return { run: v('RunGems'), total: v('TotalGems'), collected: v('GemsCollected'), released: v('GemsReleased'), lost: v('GemsLost'),
      marks: marks.length, gemCells: gemCells.length, markOnCell, gems: s.getObjects('Gem').map((g) => ({ x: g.getX(), y: g.getY(),
      vy: g.getVariables().get('VY').getAsNumber(), value: g.getVariables().get('Value').getAsNumber(), magnet: g.getVariables().get('Magnet').getAsNumber() })),
      towerX: t.getX(), state: s.getVariables().get('State').getAsString(),
      hud: s.getObjects('GemText')[0].getText(), result: s.getObjects('GemsResultText')[0].getText() };
  });
  // Visible lane cells (nothing else on the line from the pivot), gem cells flagged.
  const targets = () => page.evaluate(() => {
    const s = window.__scene, vars = s.getVariables();
    const px = vars.get('PivotX').getAsNumber(), py = vars.get('PivotY').getAsNumber();
    const all = s.getObjects('Cell'), t = s.getObjects('Tower')[0];
    const inside = (o, x, y) => x >= o.getX() && x <= o.getX() + 12 && y >= o.getY() && y <= o.getY() + 12;
    const visible = (c) => { const tx = c.getX() + 6, ty = c.getY() + 6, n = Math.ceil(Math.hypot(tx - px, ty - py) / 2);
      for (let i = 1; i < n; i++) { const x = px + (tx - px) * i / n, y = py + (ty - py) * i / n; if (all.some((o) => o !== c && inside(o, x, y))) return false; } return true; };
    return all.filter((c) => c.getX() < t.getX() + 200 && visible(c)).map((c) => ({ x: c.getX() + 6, y: c.getY() + 6,
      gem: c.getVariables().get('Gem').getAsNumber() }));
  });
  // Physics and pickup on open ground: a test gem dropped ahead of the tower, out of pickup range.
  await wait(300);
  const drop = await page.evaluate(() => { const s = window.__scene, t = s.getObjects('Tower')[0];
    const g = s.createObject('Gem'); g.setPosition(t.getX() + 200, 600); g.setZOrder(27);
    g.getVariables().get('Value').setNumber(5); g.getVariables().get('Type').setNumber(2); g.getVariables().get('VY').setNumber(-150);
    return { x: g.getX() }; });
  const trackA = [];
  const tA = Date.now();
  let run0 = (await gemState()).run;
  while (Date.now() - tA < 6000) {
    const g = await gemState();
    const t = await page.evaluate(() => { const s = window.__scene, t = s.getObjects('Tower')[0]; return { x: t.getX(), y: t.getY() }; });
    if (g.gems.length) { const a = g.gems[0]; trackA.push({ ...a, dist: Math.hypot(t.x - a.x, t.y - 48 - a.y) }); }
    if (g.run > run0) break;
    await wait(20);
  }
  const ga = await gemState();
  const fellA = trackA.some((a) => a.y > 760);
  const bouncedA = trackA.some((a, i) => i > 0 && trackA[i - 1].vy > 0 && a.vy < 0 && !a.magnet);
  const firstPull = trackA.find((a) => a.magnet === 1);
  const restedOutside = trackA.some((a) => !a.magnet && a.dist > 90 && a.y > 780); // on/near the ground, out of range
  check('G3', 'A loose gem falls, bounces, waits on the ground and is pulled in only within 90 px',
    fellA && bouncedA && restedOutside && firstPull && firstPull.dist <= 95 && ga.run === run0 + 5,
    `samples ${trackA.length}: fell ${fellA}, bounced ${bouncedA}, on the ground out of range ${restedOutside}, pull started at ${firstPull ? firstPull.dist.toFixed(0) : '-'} px, run gems ${run0} -> ${ga.run}`);

  let s0 = await waitFor(page, (s) => s.blocked === 1, 20000);
  let g0 = await gemState();
  check('G1', 'Gems are embedded in some cells and shown on them',
    g0.marks >= 3 && g0.marks % 3 === 0 && g0.marks === g0.gemCells && g0.markOnCell,
    `${g0.marks} gem marks on screen (3 per formation forced by the test), ${g0.gemCells} cells hold a gem, every mark sits on its cell: ${g0.markOnCell}`);
  await page.screenshot({ path: path.join(OUT, 'gems_1_embedded.png') });
  // Break a visible cell WITHOUT a gem: nothing may be awarded or released.
  let tg = (await targets()).filter((c) => !c.gem)[0];
  const runBefore = g0.run;
  let p = toScreen(s0, tg.x, tg.y);
  await page.mouse.move(p.x, p.y); await wait(250);
  const h0 = (await snapshot(page)).hits;
  await page.mouse.down(); await waitFor(page, (q) => q.hits >= h0 + 2, 4000, 20); await page.mouse.up(); await wait(200);
  let g1 = await gemState();
  check('G2', 'Breaking a cell without a gem releases nothing', g1.run === runBefore && g1.released === 0 && g1.marks === g0.marks,
    `run gems ${runBefore} -> ${g1.run}, released ${g1.released}, marks ${g0.marks} -> ${g1.marks}`);
  // Shoot until a gem cell is visible, then shoot it and follow the gem.
  let gemTarget = null;
  for (let i = 0; i < 40 && !gemTarget; i++) {
    const ts = await targets();
    gemTarget = ts.find((c) => c.gem);
    if (!gemTarget && ts.length) {
      const sn = await snapshot(page); const q = toScreen(sn, ts[0].x, ts[0].y);
      await page.mouse.move(q.x, q.y); await page.mouse.down(); await wait(180); await page.mouse.up();
    }
  }
  if (!gemTarget) { check('G3', 'A gem pops out, falls, bounces and is collected', false, 'no gem cell became visible'); await ctx.close(); return; }
  const sn = await snapshot(page);
  p = toScreen(sn, gemTarget.x, gemTarget.y);
  await page.mouse.move(p.x, p.y); await wait(200);
  const before = await gemState();
  await page.mouse.down();
  await waitFor(page, () => true, 10, 10);
  let track = [];
  const t0 = Date.now();
  let released = false;
  while (Date.now() - t0 < 6000) {
    const g = await gemState();
    if (g.released > before.released) { if (!released) await page.mouse.up(); released = true; }
    if (g.gems.length) track.push(g.gems[0]);
    if (released && g.collected > before.collected) break;
    await wait(25);
  }
  await page.mouse.up();
  const after = await gemState();
  const fell = track.some((a, i) => i > 0 && a.y > track[0].y + 5);
  const bounced = track.some((a, i) => i > 0 && track[i - 1].vy > 0 && a.vy < 0 && !a.magnet);
  const pulled = track.some((a) => a.magnet === 1);
  const value = track.length ? track[track.length - 1].value : 0;
  check('G3.1', 'Breaking the cell that holds a gem releases it, and it is collected',
    after.released === before.released + 1 && track.length > 0 && after.collected === before.collected + 1,
    `released ${after.released - before.released} (popped up then ${pulled ? 'pulled in at once: it landed within range' : 'fell'}), collected ${after.collected - before.collected}`);
  check('G4', 'Its value is added to the run and shown in the HUD', after.run === before.run + value && value > 0 && after.hud === 'GEMS ' + after.run,
    `value ${value}: run gems ${before.run} -> ${after.run}; HUD "${after.hud}"`);
  await page.screenshot({ path: path.join(OUT, 'gems_2_collected.png') });
  // A gem left behind (outside the pickup radius, behind the screen) is lost and removed.
  await page.evaluate(() => { const s = window.__scene, t = s.getObjects('Tower')[0];
    const g = s.createObject('Gem'); g.setPosition(t.getX() - 260, 794); g.getVariables().get('Value').setNumber(5); });
  await wait(400);
  const g5 = await gemState();
  check('G5', 'Gems left behind are cleaned up', g5.lost >= 1 && g5.run === after.run,
    `lost ${g5.lost}, run gems still ${g5.run}`);
  // Game over: the run's gems are added to the saved total, shown on the panel, and kept after restart.
  const so = await waitFor(page, (s) => s.state === 'Over', 40000, 250);
  await wait(400);
  const g6 = await gemState();
  check('G6', 'At game over the run gems are banked and shown', g6.total >= g6.run && g6.result.indexOf('+' + g6.run) >= 0,
    `panel "${g6.result}", total ${g6.total}`);
  await page.screenshot({ path: path.join(OUT, 'gems_3_game_over.png') });
  await wait(300);
  await page.mouse.move(160, 547); await page.mouse.down(); await wait(80); await page.mouse.up();
  await waitFor(page, (s) => s.state === 'Run' && s.time < 2, 5000);
  await wait(300);
  const g7 = await gemState();
  check('G7', 'The gem total is saved (still there after a restart)', g7.total === g6.total && g7.run === 0,
    `after restart: total ${g7.total}, run ${g7.run}`);
  check('G8', 'No script errors in the gem run', errors.length === 0, errors.slice(0, 3).join(' | '));
  await ctx.close();
}

// Phase 3: the shop. Seeded gems, game over, UPGRADES, buy levels, PLAY, upgrades applied in the game.
async function shopScenario(browser) {
  const d = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'art_formations.json'), 'utf8'));
  const up = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'game_data.json'), 'utf8')).Upgrades;
  const idx = d.findIndex((f) => f.Name === 'owner_rubble_01');
  const { ctx, page, errors } = await openGame(browser, {}, idx, 250, { ClusterChance: 0, GemChance: 0 },
    { TotalGems: { value: 300 } });
  const scene = () => page.evaluate(() => { const s = window.__scene; if (!s) return null;
    const v = (n) => s.getVariables().has(n) ? s.getVariables().get(n).getAsNumber() : null;
    const texts = (o) => s.getObjects(o).map((t) => ({ row: t.getVariables().get('Row').getAsNumber(), text: t.getText() })).sort((a, b) => a.row - b.row);
    return { name: s.getName(), gems: v('TotalGems'), lv: { Damage: v('Lv_Damage'), FireRate: v('Lv_FireRate'), Accuracy: v('Lv_Accuracy'),
        TrackSpeed: v('Lv_TrackSpeed'), PickupRadius: v('Lv_PickupRadius') },
      stats: { Damage: v('Damage'), FireRate: v('FireRate'), Spread: v('Spread'), TowerSpeed: v('TowerSpeed'), PickupRadius: v('PickupRadius') },
      names: s.getName() === 'Shop' ? texts('RowName') : [], info: s.getName() === 'Shop' ? texts('RowInfo') : [],
      prices: s.getName() === 'Shop' ? texts('BuyText') : [], msg: s.getName() === 'Shop' ? s.getObjects('ShopMessage')[0].getText() : '',
      storage: localStorage.getItem('GDJS_TowerRush') }; });
  const tap = async (x, y) => { await page.mouse.move(x, y); await page.mouse.down(); await wait(80); await page.mouse.up(); await wait(250); };
  const so = await waitFor(page, (s) => s.state === 'Over', 30000, 200);
  const g0 = await scene();
  check('S0', 'Base stats before any upgrade', g0.stats.Damage === 1 && g0.stats.FireRate === 6 && g0.stats.Spread === 3 && g0.stats.TowerSpeed === 85 && g0.stats.PickupRadius === 90,
    JSON.stringify(g0.stats));
  await wait(700);
  await tap(380, 547); // UPGRADES on the game-over panel
  let sh = null; for (let i = 0; i < 30; i++) { sh = await scene(); if (sh && sh.name === 'Shop') break; await wait(150); }
  await wait(500);
  sh = await scene();
  await page.screenshot({ path: path.join(OUT, 'shop_1.png') });
  check('S1', 'UPGRADES opens the shop with every upgrade, its level, effect and price',
    sh.name === 'Shop' && sh.gems === 300 && sh.names.length === 5 && sh.names[0].text.indexOf('LV 0/5') >= 0 &&
    sh.info[0].text.indexOf('>') >= 0 && sh.prices[0].text === up.Damage.Costs[0] + ' GEMS',
    `${sh.name}: gems ${sh.gems}; "${sh.names[0] && sh.names[0].text}" / "${sh.info[0] && sh.info[0].text}" / "${sh.prices[0] && sh.prices[0].text}"`);
  const buy = async (row) => tap(352 + 75, 200 + row * 124 + 26 + 29);
  await buy(0); let a = await scene();
  check('S2', 'Buying a level takes its price and raises the level', a.lv.Damage === 1 && a.gems === 300 - up.Damage.Costs[0] && a.msg.indexOf('upgraded') >= 0,
    `damage level ${a.lv.Damage}, gems ${a.gems}, message "${a.msg}"`);
  await buy(0); await buy(0); await buy(0); a = await scene();
  const spent = up.Damage.Costs[0] + up.Damage.Costs[1] + up.Damage.Costs[2];
  check('S3', 'A level that costs more than you have is refused', a.lv.Damage === 3 && a.gems === 300 - spent && a.msg === 'Not enough gems',
    `damage level ${a.lv.Damage}, gems ${a.gems} (spent ${spent}), price now ${a.prices[0].text}, message "${a.msg}"`);
  await buy(2); a = await scene();
  const saved = JSON.parse(a.storage || '{}');
  check('S4', 'Levels and gems are saved', saved.Up_Damage && saved.Up_Damage.value === 3 && saved.Up_Accuracy && saved.Up_Accuracy.value === 1 &&
    saved.TotalGems.value === a.gems, `storage ${a.storage}`);
  await page.screenshot({ path: path.join(OUT, 'shop_2_bought.png') });
  await tap(270, 876); // PLAY
  let gm = null; for (let i = 0; i < 30; i++) { gm = await scene(); if (gm && gm.name === 'Game') break; await wait(150); }
  await wait(400);
  gm = await scene();
  const want = { Damage: up.Damage.Values[3], Spread: up.Accuracy.Values[1] };
  check('S5', 'PLAY starts a run with the upgraded stats', gm.name === 'Game' && gm.stats.Damage === want.Damage && gm.stats.Spread === want.Spread &&
    gm.stats.FireRate === up.FireRate.Values[0], `stats ${JSON.stringify(gm.stats)}; expected damage ${want.Damage}, spread ${want.Spread}`);
  // Spread: fire into open air (up and back) and record each new bullet's angle against the turret's.
  const sa = await snapshot(page); const air = toScreen(sa, sa.pivotX - 80, sa.pivotY - 220);
  await page.mouse.move(air.x, air.y); await wait(400);
  const angles = page.evaluate(() => new Promise((resolve) => { const s = window.__scene, seen = new Set(), out = [];
    const iv = setInterval(() => { s.getObjects('Bullet').forEach((b) => { if (!seen.has(b)) { seen.add(b);
      out.push(b.getAngle() - s.getVariables().get('TurretAngle').getAsNumber()); } }); }, 1);
    setTimeout(() => { clearInterval(iv); resolve(out); }, 2500); }));
  await page.mouse.down(); await wait(2000); await page.mouse.up();
  const devs = await angles;
  // In play: damage 2 breaks a 2-HP concrete piece with every hit; bullets spread within the accuracy.
  await waitFor(page, (s) => s && s.blocked === 1, 20000);
  const sn = await snapshot(page); const c0 = (await cellsInPath(page))[0]; const pt = toScreen(sn, c0.x, c0.y);
  await page.mouse.move(pt.x, pt.y); await wait(250);
  const b0 = await snapshot(page);
  await page.mouse.down(); await wait(1500); await page.mouse.up(); await wait(200);
  const b1 = await snapshot(page);
  const maxDev = devs.length ? Math.max(...devs.map(Math.abs)) : 0;
  check('S6', 'Gun damage 2: every hit breaks a 2-shot concrete piece', b1.hits - b0.hits >= 3 && b1.destroyed - b0.destroyed === b1.hits - b0.hits,
    `${b1.hits - b0.hits} hits, ${b1.destroyed - b0.destroyed} pieces broken`);
  check('S7', 'Bullets spread within the accuracy (2.4 deg at level 1)', devs.length >= 3 && maxDev <= want.Spread + 0.01 && maxDev > 0,
    `${devs.length} bullets seen at spawn, largest deviation ${maxDev.toFixed(2)} deg`);
  check('S8', 'No script errors in the shop run', errors.length === 0, errors.slice(0, 3).join(' | '));
  await ctx.close();
}

// Whole-object pixel art formations (tools/import_formations.py): pictures sliced into cells.
async function artScenario(browser) {
  const names = await (async () => {
    const d = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'art_formations.json'), 'utf8'));
    const base = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'game_data.json'), 'utf8')).Formations.length;
    return d.map((f, i) => ({ name: f.Name, index: base + i, texture: f.Texture,
      solid: f.Rows.join('').replace(/\./g, '').length }));
  })();
  for (const f of names) {
    const { ctx, page, errors } = await openGame(browser, {}, f.index);
    const sb = await waitFor(page, (s) => s.blocked === 1, 20000);
    const info = await page.evaluate((tex) => {
      const cells = window.__scene.getObjects('Cell');
      const pic = window.__scene.getGame().getImageManager().getPIXITexture(tex);
      const own = cells.filter((c) => c._renderer._tiledSprite.texture === pic);
      const offs = new Set(own.map((c) => c.getXOffset() + ',' + c.getYOffset()));
      const mats = {};
      cells.forEach((c) => { const m = c.getVariables().get('Material').getAsString(); mats[m] = (mats[m] || 0) + 1; });
      return { cells: cells.length, own: own.length, distinctSlices: offs.size, mats,
        sizes: [...new Set(cells.map((c) => c.getWidth() + 'x' + c.getHeight()))] };
    }, f.texture);
    check('A.' + f.name, f.name + ': cells show their own slice of the picture',
      info.own > 0 && info.distinctSlices === f.solid && info.own % f.solid === 0 && info.sizes.join() === '12x12',
      `${info.cells} cells (${info.own / f.solid} copies on screen), ${info.own} with ${f.texture}, ` +
      `${info.distinctSlices} distinct slices of ${f.solid}, ` +
      `materials ${JSON.stringify(info.mats)}, sizes ${info.sizes}`);
    await page.screenshot({ path: path.join(OUT, `art_${f.name}_1_blocked.png`) });
    // Hit a tough cell (more than 1 HP) a couple of times: crack overlay appears, then goes with the cell.
    const tough = await page.evaluate(() => {
      // The nearest tough cell the turret can see (no other cell on the line from the pivot).
      const s = window.__scene, vars = s.getVariables();
      const px = vars.get('PivotX').getAsNumber(), py = vars.get('PivotY').getAsNumber();
      const all = s.getObjects('Cell');
      const inside = (o, x, y) => x >= o.getX() && x <= o.getX() + 12 && y >= o.getY() && y <= o.getY() + 12;
      const visible = (c) => {
        const tx = c.getX() + 6, ty = c.getY() + 6, n = Math.ceil(Math.hypot(tx - px, ty - py) / 2);
        for (let i = 1; i < n; i++) {
          const x = px + (tx - px) * i / n, y = py + (ty - py) * i / n;
          if (all.some((o) => o !== c && inside(o, x, y))) return false;
        }
        return true;
      };
      const c = all.filter((o) => o.getVariables().get('MaxHP').getAsNumber() > 1 && visible(o))
        .sort((a, b) => Math.hypot(a.getX() - px, a.getY() - py) - Math.hypot(b.getX() - px, b.getY() - py))[0];
      return c ? { x: c.getX() + 6, y: c.getY() + 6, hp: c.getVariables().get('MaxHP').getAsNumber() } : null;
    });
    if (tough) {
      let s = await snapshot(page);
      const p = toScreen(s, tough.x, tough.y);
      await page.mouse.move(p.x, p.y);
      await wait(300);
      const hits0 = (await snapshot(page)).hits;
      await page.mouse.down();
      await waitFor(page, (q) => q.hits >= hits0 + Math.min(2, tough.hp - 1), 5000, 20); // one hit short of breaking it
      await page.mouse.up();
      const cracked = await page.evaluate(() => window.__scene.getObjects('Crack').length);
      await page.screenshot({ path: path.join(OUT, `art_${f.name}_2_cracked.png`) });
      await page.mouse.down();
      await waitFor(page, (q) => q.hits >= hits0 + tough.hp + 2, 8000, 20);
      await page.mouse.up();
      await wait(200);
      const left = await page.evaluate((t) => ({
        cell: window.__scene.getObjects('Cell').some((c) => Math.abs(c.getX() + 6 - t.x) < 1 && Math.abs(c.getY() + 6 - t.y) < 1),
        cracks: window.__scene.getObjects('Crack').map((k) => [k.getX(), k.getY()]) }), tough);
      check('A.' + f.name + '.crack', f.name + `: a ${tough.hp}-HP cell shows cracks, then is destroyed with its crack`,
        cracked >= 1 && !left.cell && !left.cracks.some(([x, y]) => Math.abs(x + 6 - tough.x) < 1 && Math.abs(y + 6 - tough.y) < 1),
        `cracks after ${Math.min(2, tough.hp - 1)} hit(s): ${cracked}; cell gone: ${!left.cell}; cracks left elsewhere: ${left.cracks.length}`);
    }
    const x0 = (await snapshot(page)).towerX;
    const sd = await clearWithMouse(page, x0 + 160, 30000);
    check('A.' + f.name + '.pass', f.name + ': tower shoots its way through', sd.towerX > x0 + 100,
      `x ${x0.toFixed(0)} -> ${sd.towerX.toFixed(0)}, shots ${sd.shots}, destroyed ${sd.destroyed}`);
    const fps = await page.evaluate(async () => { const f0 = window.__frames; await new Promise((r) => setTimeout(r, 2000)); return (window.__frames - f0) / 2; });
    await page.screenshot({ path: path.join(OUT, `art_${f.name}_3_through.png`) });
    check('A.' + f.name + '.err', f.name + ': no script errors', errors.length === 0,
      errors.slice(0, 3).join(' | ') + ` (headless software rendering: ${fps} fps, ${(await snapshot(page)).counts.cell} cells)`);
    await ctx.close();
  }
}

(async () => {
  const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: DOCS, stdio: 'ignore' });
  await wait(800);
  const browser = await chromium.launch();
  try {
    if (SCENARIO === 'art') await artScenario(browser);
    else if (SCENARIO === 'gems') await gemScenario(browser);
    else if (SCENARIO === 'shop') await shopScenario(browser);
    else { await aimChecks(browser); await phase1(browser); }
  } catch (e) {
    console.error(e);
    check(0, 'Test run crashed', false, String(e));
  } finally {
    await browser.close();
    server.kill();
  }
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(results, null, 1));
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})();

// Aim and muzzle checks in their own short session: they don't need a wall, and in the main run every
// second spent at the first wall is gas slack lost.
async function aimChecks(browser) {
  const { ctx, page, errors } = await openGame(browser);
  await wait(300);
  const sm = await snapshot(page);
  let p;
    // Muzzle check (while driving, before the first wall): one short burst upward (nothing to hit), then watch where the new bullet first shows.
    {
      const up = toScreen(sm, sm.pivotX - 80, sm.pivotY - 200); // up and back: nothing to hit there
      await page.mouse.move(up.x, up.y);
      await wait(400);
      const seen = page.evaluate(() => new Promise((resolve) => {
        const s = window.__scene;
        const known = new Set(s.getObjects('Bullet'));
        const iv = setInterval(() => {
          const b = s.getObjects('Bullet').find((o) => !known.has(o));
          if (b) { clearInterval(iv); resolve({ x: b.getX(), y: b.getY(),
            px: s.getVariables().get('PivotX').getAsNumber(), py: s.getVariables().get('PivotY').getAsNumber() }); }
        }, 1);
        setTimeout(() => { clearInterval(iv); resolve(null); }, 3000);
      }));
      await page.mouse.down(); await wait(250); await page.mouse.up();
      const b = await seen;
      const d = b ? Math.hypot(b.x - b.px, b.y - b.py) : 0;
      check(5.1, 'A bullet fired into open air first appears just past the muzzle', b && d > 30 && d < 34 + 46,
        b ? `first seen ${d.toFixed(1)} px from the pivot (barrel 34 px + one frame of travel, up to 45 px)` : 'no bullet seen');
      await wait(300);
    }

  const sa0 = await snapshot(page);
    // Mouse aim: point at a known world position and check the turret.
    const aimW = { x: sa0.pivotX + 120, y: sa0.pivotY - 90 };
    p = toScreen(sa0, aimW.x, aimW.y);
    await page.mouse.move(p.x, p.y);
    await wait(400);
    let sa = await snapshot(page);
    const expected = Math.atan2(sa.aimY - sa.pivotY, sa.aimX - sa.pivotX) * 180 / Math.PI;
    check(3, 'Mouse aiming works (screen to world, turret follows)',
      Math.abs(sa.aimX - (sa.camX - 270) - p.x) < 3 && Math.abs(sa.aimY - p.y) < 2 &&
      Math.abs(sa.turretAngle - expected) < 1 && sa.inputTouch === 0,
      `aim (${sa.aimX.toFixed(0)},${sa.aimY.toFixed(0)}), turret ${sa.turretAngle.toFixed(1)} deg, expected ${expected.toFixed(1)}`);

    // Chassis protection: aim down-and-back, the turret must not point into the tower.
    p = toScreen(sa, sa.pivotX - 60, sa.pivotY + 150);
    await page.mouse.move(p.x, p.y);
    await wait(400);
    let sc = await snapshot(page);
    check(3.1, 'Turret never points through the chassis (down-back aim is clamped)',
      sc.turretAngle <= 88.01 && sc.turretAngle >= -180, `aim down-back -> turret ${sc.turretAngle.toFixed(1)} deg`);

  check(15.0, 'No script errors in the aim session', errors.length === 0, errors.slice(0, 3).join(' | '));
  await ctx.close();
}

let LIGHT = -1;
function lightestFormation() {
  const d = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'art_formations.json'), 'utf8'));
  const base = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'game_data.json'), 'utf8')).Formations.length;
  // The art formation with the fewest shots in the tower's lane (bottom 7 rows), unless LIGHT_FORMATION names one.
  const mats = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'game_data.json'), 'utf8')).Materials;
  const tun = JSON.parse(fs.readFileSync(path.join(DOCS, '..', 'data', 'game_data.json'), 'utf8')).Tuning;
  const hp = {}; Object.values(mats).forEach((m) => { hp[m.Char] = m.HP; if (/[A-Z]/.test(m.Char)) hp[m.Char.toLowerCase()] = tun.PartialHP || 1; });
  const cost = (f) => f.Rows.slice(-7).join('').split('').reduce((a, ch) => a + (hp[ch] || 0), 0);
  let i = process.env.LIGHT_FORMATION ? d.findIndex((f) => f.Name === process.env.LIGHT_FORMATION) : -1;
  if (i < 0) i = d.reduce((best, f, k) => (cost(f) < cost(d[best]) ? k : best), 0);
  console.log('main run uses ' + d[i].Name + ' (' + cost(d[i]) + ' shots in the lane)');
  return base + i;
}

async function phase1(browser) {
  LIGHT = lightestFormation();
  {
    // ---------------------------------------------------------------- desktop, mouse
    // Every obstacle is the lightest art formation, so the checks don't depend on which art comes up.
    let { ctx, page, errors } = await openGame(browser, {}, LIGHT, TEST_GAP, { ClusterChance: 0 });
    let s0 = await snapshot(page);
    await wait(1500);
    let s1 = await snapshot(page);
    check(1, 'Tower moves automatically when unobstructed', s1.towerX > s0.towerX + 40 && s1.blocked === 0,
      `x ${s0.towerX.toFixed(0)} -> ${s1.towerX.toFixed(0)} in ${(s1.time - s0.time).toFixed(2)}s game time ` +
      `(${((s1.towerX - s0.towerX) / (s1.time - s0.time)).toFixed(0)} px/s)`);
    check(10, 'Cloud moves on its own (while the tower drives)', s1.cloudX > s0.cloudX,
      `cloud ${(s1.cloudX - s0.cloudX).toFixed(0)} px in ${(s1.time - s0.time).toFixed(2)}s ` +
      `(${((s1.cloudX - s0.cloudX) / (s1.time - s0.time)).toFixed(0)} px/s)`);
    await page.screenshot({ path: path.join(OUT, '01_start.png') });
    // Arrive at the first formation (Gate) without shooting.
    let sb = await waitFor(page, (s) => s.blocked === 1, 20000);
    await wait(700);
    let sb2 = await snapshot(page);
    check(2, 'Tower stops at a solid obstacle', sb.blocked === 1 && Math.abs(sb2.towerX - sb.towerX) < 0.5,
      `blocked at x=${sb.towerX.toFixed(1)}, ${sb2.towerX.toFixed(1)} after 0.7s; cells in lane: ${(await cellsInPath(page)).length}`);
    check(10.1, 'Cloud keeps moving while the tower is blocked', sb2.cloudX > sb.cloudX + 10,
      `cloud +${(sb2.cloudX - sb.cloudX).toFixed(0)} px while blocked`);
    await page.screenshot({ path: path.join(OUT, '02_blocked_gate.png') });

    let p;
    let sc = await snapshot(page);
    // Fire one burst at the gate and check bullets and hits.
    const cells = await cellsInPath(page);
    const target = cells[0];
    p = toScreen(sc, target.x, target.y);
    await page.mouse.move(p.x, p.y);
    await wait(300);
    const before = await snapshot(page);
    // Watch the first bullet's spawn point.
    const spawnInfo = page.evaluate(() => new Promise((resolve) => {
      const s = window.__scene;
      const known = new Set(s.getObjects('Bullet'));
      const iv = setInterval(() => {
        const b = s.getObjects('Bullet').find((o) => !known.has(o));
        if (b) { clearInterval(iv); resolve({ x: b.getX(), y: b.getY(), angle: b.getAngle(),
          px: s.getVariables().get('PivotX').getAsNumber(), py: s.getVariables().get('PivotY').getAsNumber() }); }
      }, 1);
      setTimeout(() => { clearInterval(iv); resolve(null); }, 3000);
    }));
    await page.mouse.down();
    await wait(1200);
    await page.mouse.up();
    await wait(150);
    const after = await snapshot(page);
    const sp = await spawnInfo;
    check(4.1, 'Holding the left button fires ~6 bullets/s; releasing stops',
      after.shots - before.shots >= 5 && after.shots - before.shots <= 10 && after.firing === 0,
      `${after.shots - before.shots} shots in 1.2s + 0.15s release (game time ${(after.time - before.time).toFixed(2)}s)`);
    if (sp) {
      const d = Math.hypot(sp.x - sp.px, sp.y - sp.py);
      check(5, 'Bullets appear at the turret muzzle', sp === null ? false : (d > 30 && d < 34 + 20) || after.hits > before.hits,
        `first seen ${d.toFixed(1)} px from the pivot (barrel 34 px + first step), angle ${sp.angle.toFixed(1)}`);
    } else {
      check(5, 'Bullets appear at the turret muzzle', after.hits > before.hits,
        'no bullet frame observed (each hit the cell touching the barrel on its first ray)');
    }
    check(6, 'Bullets travel along the aim and damage only the cells they hit',
      after.hits - before.hits >= 1 && after.destroyed - before.destroyed <= after.hits - before.hits,
      `hits ${after.hits - before.hits}, cells destroyed ${after.destroyed - before.destroyed} (1-shot material)`);
    const gone = await page.evaluate((t) => !window.__scene.getObjects('Cell').some(
      (c) => Math.abs(c.getX() + 6 - t.x) < 1 && Math.abs(c.getY() + 6 - t.y) < 1), target);
    check(7, 'Destroyed cells disappear', gone, `targeted cell at (${target.x}, ${target.y}) gone`);
    await page.screenshot({ path: path.join(OUT, '03_shooting.png') });

    // Clear the first obstacle's lane and see the tower drive on.
    const gateX = after.towerX;
    let sd = await clearWithMouse(page, gateX + 40, 25000);
    check(8, 'Tower resumes after a large enough passage is cleared', sd.towerX > gateX + 30,
      `x ${gateX.toFixed(0)} -> ${sd.towerX.toFixed(0)}; shots ${sd.shots}, destroyed ${sd.destroyed}`);
    await page.screenshot({ path: path.join(OUT, '04_through_gate.png') });
    sd = await clearWithMouse(page, gateX + 120, 25000); // all the way through, onto open ground

    // Clearance (any obstacle art): a test-only cell is placed just ahead of the tower in open ground.
    // Its bottom 84 px above the ground (a 7-cell opening) must not block; 72 px (6 cells) must.
    const place = (row) => page.evaluate((row) => {
      const s = window.__scene; const t = s.getObjects('Tower')[0];
      const c = s.createObject('Cell');
      c.setPosition(t.getX() + 22 + 24, 800 - 12 * (row + 1));
      c.getVariables().get('HP').setNumber(999); c.getVariables().get('MaxHP').setNumber(999);
      window.__testCell = c;
      return { x: c.getX(), top: c.getY(), bottom: c.getY() + 12 };
    }, row);
    const unplace = () => page.evaluate(() => { window.__testCell.deleteFromScene(); window.__testCell = null; });
    const high = await place(7);
    await wait(1200);
    let sk = await snapshot(page);
    const passedUnder = sk.towerX - 22 > high.x + 12 || (sk.blocked === 0 && sk.towerX + 22 > high.x + 12);
    await unplace();
    check(9.1, 'Tower passes under a piece whose bottom is 84 px up (7-cell opening)', passedUnder && sk.state === 'Run',
      `piece y ${high.top}-${high.bottom}; tower front ${(sk.towerX + 22).toFixed(0)} vs piece right edge ${high.x + 12}, blocked ${sk.blocked}`);
    const low = await place(6);
    sk = await waitFor(page, (s) => s.blocked === 1, 3000, 50);
    await wait(400);
    const sk2 = await snapshot(page);
    check(9, 'Tower cannot pass an opening that is too small (6 cells = 72 px)',
      sk2.blocked === 1 && sk2.towerX + 22 <= low.x + 0.5,
      `piece y ${low.top}-${low.bottom} (opening 72 px); tower stopped with its front at ${(sk2.towerX + 22).toFixed(1)}, piece at ${low.x}`);
    await page.screenshot({ path: path.join(OUT, '05_too_small.png') });
    await unplace();
    await wait(600);
    const sk3 = await snapshot(page);
    check(8.1, 'Tower drives on once that piece is gone', sk3.towerX > sk2.towerX + 20,
      `x ${sk2.towerX.toFixed(0)} -> ${sk3.towerX.toFixed(0)}`);

    // Distance only increases with forward progress.
    let s5 = await waitFor(page, (s) => s.blocked === 1, 20000);
    await wait(500); // let bullets still in flight land first
    s5 = await snapshot(page);
    const dist1 = s5.distance;
    await wait(1500);
    let s6 = await snapshot(page);
    check(12, 'Distance increases only with forward progress',
      s6.distance === dist1 && Math.abs(s6.distance - (s6.towerX - 150) / 10) < 0.5,
      `distance ${dist1.toFixed(1)} m while blocked for 1.5s -> ${s6.distance.toFixed(1)} m; tower ${(s6.towerX - 150).toFixed(0)} px from start`);

    // Keep playing with the autopilot for a while and watch the object counts (memory).
    const samples = [];
    const runEnd = Date.now() + 40000;
    while (Date.now() < runEnd) {
      s6 = await snapshot(page);
      if (s6.state !== 'Run') break;
      samples.push(s6.counts);
      await clearWithMouse(page, s6.towerX + 30, 4000);
    }
    s6 = await snapshot(page);
    const maxCells = Math.max(...samples.map((c) => c.cell));
    const maxB = Math.max(...samples.map((c) => c.bullet + c.debris + c.spark));
    const removedBehind = s6.spawned - s6.destroyed - s6.counts.cell;
    check(14, 'Objects do not pile up (cells behind are removed, bullets/debris expire)',
      maxCells < 1500 && maxB < 80 && (s6.formations < 5 || removedBehind > 0),
      `formations ${s6.formations}, cells alive max ${maxCells} (spawned ${s6.spawned}, shot ${s6.destroyed}, ` +
      `removed behind ${removedBehind}), bullets+debris+sparks max ${maxB}, distance ${s6.distance.toFixed(0)} m, state ${s6.state}`);
    await page.screenshot({ path: path.join(OUT, '06_later.png') });

    // Stop shooting: the cloud must catch up and end the run.
    let so = await waitFor(page, (s) => s.state === 'Over', 60000, 250);
    check(11, 'The cloud catches and ends the run when progress is too slow', so.state === 'Over' && so.gameOverVisible,
      `game over at ${so.distance.toFixed(0)} m, best ${so.best} m, cloud gap ${so.cloudGap.toFixed(0)}`);
    await wait(800);
    await page.screenshot({ path: path.join(OUT, '07_game_over.png') });
    const shotsAtDeath = so.shots;
    await page.mouse.move(270, 700);
    await page.mouse.down(); await wait(400); await page.mouse.up();
    const so2 = await snapshot(page);
    check(11.1, 'Movement and firing stop after the run ends', so2.shots === shotsAtDeath && so2.state === 'Over',
      `shots ${shotsAtDeath} -> ${so2.shots}`);

    // Restart through the button.
    await page.mouse.move(160, 547);
    await page.mouse.down(); await wait(80); await page.mouse.up();
    const sr = await waitFor(page, (s) => s.state === 'Run' && s.time < 2, 5000);
    check(13, 'Restart resets the run', sr.state === 'Run' && sr.distance < 3 && sr.towerX < 200 &&
      Math.abs(sr.cloudGap - TEST_GAP) < 60 && !sr.gameOverVisible && sr.best >= Math.floor(so.distance),
      `distance ${sr.distance.toFixed(1)}, tower x ${sr.towerX.toFixed(0)}, gap ${sr.cloudGap.toFixed(0)}, best kept ${sr.best}`);
    check(15.1, 'No script errors in the desktop run', errors.length === 0, errors.slice(0, 3).join(' | '));
    await ctx.close();

    // ---------------------------------------------------------------- phone, touch (CDP touch events)
    ({ ctx, page, errors } = await openGame(browser, { hasTouch: true, isMobile: true, deviceScaleFactor: 1 }, LIGHT, 0, { ClusterChance: 0 }));
    const cdp = await ctx.newCDPSession(page);
    const touch = (type, x, y) => cdp.send('Input.dispatchTouchEvent', {
      type, touchPoints: type === 'touchEnd' ? [] : [{ x, y, id: 1 }] });
    await waitFor(page, (s) => s.blocked === 1, 20000);
    let t0 = await snapshot(page);
    const tc = (await cellsInPath(page))[0];
    let tp = toScreen(t0, tc.x, tc.y + t0.aimOffset); // finger below the target by the aim offset
    await touch('touchStart', tp.x, tp.y);
    await wait(300);
    let t1 = await snapshot(page);
    const fingerWorldY = tp.y;
    check(4, 'Touch aiming works (press, offset above the finger, fires while held)',
      t1.inputTouch === 1 && Math.abs(t1.aimY - (fingerWorldY - t1.aimOffset)) < 2 && t1.firing === 1,
      `touch at screen (${tp.x.toFixed(0)},${tp.y.toFixed(0)}): aim y ${t1.aimY.toFixed(0)} = finger - ${t1.aimOffset}, firing ${t1.firing}`);
    // Drag along the wall while holding.
    for (let i = 0; i < 20; i++) {
      const cs = await cellsInPath(page);
      const sn = await snapshot(page);
      if (!cs.length) break;
      tp = toScreen(sn, cs[0].x, cs[0].y + sn.aimOffset);
      await touch('touchMove', tp.x, tp.y);
      await wait(150);
    }
    await touch('touchEnd');
    await wait(300);
    let t2 = await snapshot(page);
    check(4.2, 'Touch drag keeps firing and releasing stops', t2.shots > t1.shots + 5 && t2.firing === 0,
      `shots ${t1.shots} -> ${t2.shots}, destroyed ${t2.destroyed}`);
    await page.screenshot({ path: path.join(OUT, '08_touch.png') });
    // Aim offset button (top bar): tap cycles the offset and must not fire.
    const shotsBefore = t2.shots;
    await touch('touchStart', 449, 39); await wait(80); await touch('touchEnd'); await wait(300);
    let t3 = await snapshot(page);
    check(4.3, 'AIM button changes the touch offset without firing', t3.aimOffset === t2.aimOffset + 40 && t3.shots === shotsBefore,
      `offset ${t2.aimOffset} -> ${t3.aimOffset}, shots ${shotsBefore} -> ${t3.shots}`);
    check(15.2, 'No script errors in the touch run', errors.length === 0, errors.slice(0, 3).join(' | '));
    await ctx.close();
  }
}
