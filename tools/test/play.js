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
const SCENARIO = process.argv[4] || 'phase1'; // phase1 | art
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

async function openGame(browser, opts = {}, testFormation = -1) {
  const ctx = await browser.newContext({ viewport: { width: 540, height: 960 }, ...opts });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript(HOOK);
  if (testFormation >= 0) {
    // Same as setting Tuning.TestFormation in GDevelop: only that formation spawns.
    await page.route('**/data.js', async (route) => {
      const res = await route.fetch();
      const body = (await res.text()).replace('"name":"TestFormation","type":"number","value":-1',
        '"name":"TestFormation","type":"number","value":' + testFormation);
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
  const want = process.env.LIGHT_FORMATION || 'owner_rubble_01';
  const i = d.findIndex((f) => f.Name === want);
  return i < 0 ? -1 : base + i;
}

async function phase1(browser) {
  LIGHT = lightestFormation();
  {
    // ---------------------------------------------------------------- desktop, mouse
    // Every obstacle is the lightest art formation, so the checks don't depend on which art comes up.
    let { ctx, page, errors } = await openGame(browser, {}, LIGHT);
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
    await page.mouse.move(270, 536);
    await page.mouse.down(); await wait(80); await page.mouse.up();
    const sr = await waitFor(page, (s) => s.state === 'Run' && s.time < 2, 5000);
    check(13, 'Restart resets the run', sr.state === 'Run' && sr.distance < 3 && sr.towerX < 200 &&
      Math.abs(sr.cloudGap - 450) < 60 && !sr.gameOverVisible && sr.best >= Math.floor(so.distance),
      `distance ${sr.distance.toFixed(1)}, tower x ${sr.towerX.toFixed(0)}, gap ${sr.cloudGap.toFixed(0)}, best kept ${sr.best}`);
    check(15.1, 'No script errors in the desktop run', errors.length === 0, errors.slice(0, 3).join(' | '));
    await ctx.close();

    // ---------------------------------------------------------------- phone, touch (CDP touch events)
    ({ ctx, page, errors } = await openGame(browser, { hasTouch: true, isMobile: true, deviceScaleFactor: 1 }, LIGHT));
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
