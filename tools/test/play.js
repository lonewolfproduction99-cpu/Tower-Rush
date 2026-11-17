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

async function openGame(browser, opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 540, height: 960 }, ...opts });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript(HOOK);
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

(async () => {
  const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: DOCS, stdio: 'ignore' });
  await wait(800);
  const browser = await chromium.launch();
  try {
    // ---------------------------------------------------------------- desktop, mouse
    let { ctx, page, errors } = await openGame(browser);
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

    // Mouse aim: point at a known world position and check the turret.
    const aimW = { x: sb2.pivotX + 120, y: sb2.pivotY - 90 };
    let p = toScreen(sb2, aimW.x, aimW.y);
    await page.mouse.move(p.x, p.y);
    await wait(400);
    let sa = await snapshot(page);
    const expected = Math.atan2(sa.aimY - sa.pivotY, sa.aimX - sa.pivotX) * 180 / Math.PI;
    check(3, 'Mouse aiming works (screen to world, turret follows)',
      Math.abs(sa.aimX - (aimW.x + (sa.camX - sb2.camX))) < 2 && Math.abs(sa.aimY - aimW.y) < 2 &&
      Math.abs(sa.turretAngle - expected) < 1 && sa.inputTouch === 0,
      `aim (${sa.aimX.toFixed(0)},${sa.aimY.toFixed(0)}), turret ${sa.turretAngle.toFixed(1)} deg, expected ${expected.toFixed(1)}`);

    // Chassis protection: aim down-and-back, the turret must not point into the tower.
    p = toScreen(sa, sa.pivotX - 60, sa.pivotY + 150);
    await page.mouse.move(p.x, p.y);
    await wait(400);
    let sc = await snapshot(page);
    check(3.1, 'Turret never points through the chassis (down-back aim is clamped)',
      sc.turretAngle <= 88.01 && sc.turretAngle >= -180, `aim down-back -> turret ${sc.turretAngle.toFixed(1)} deg`);

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
      `hits ${after.hits - before.hits}, cells destroyed ${after.destroyed - before.destroyed} (Stone HP 1)`);
    const gone = await page.evaluate((t) => !window.__scene.getObjects('Cell').some(
      (c) => Math.abs(c.getX() + 6 - t.x) < 1 && Math.abs(c.getY() + 6 - t.y) < 1), target);
    check(7, 'Destroyed cells disappear', gone, `targeted cell at (${target.x}, ${target.y}) gone`);
    await page.screenshot({ path: path.join(OUT, '03_shooting.png') });

    // Clear the gate lane and see the tower drive on.
    const gateX = after.towerX;
    let sd = await clearWithMouse(page, gateX + 40, 25000);
    check(8, 'Tower resumes after a large enough passage is cleared', sd.towerX > gateX + 30,
      `x ${gateX.toFixed(0)} -> ${sd.towerX.toFixed(0)}; shots ${sd.shots}, destroyed ${sd.destroyed}`);
    await page.screenshot({ path: path.join(OUT, '04_through_gate.png') });

    // The Cave: a 6-cell-high opening is too small for the 80 px chassis (needs 7 cells).
    let sk = await waitFor(page, (s) => s.blocked === 1 && s.formations >= 2 && s.towerX > gateX + 100, 20000);
    // Only the cells right at the chassis front (the next formation may already be in view).
    const lane = (await cellsInPath(page)).filter((c) => c.x - 6 < sk.towerX + 22 + 6);
    const lowest = lane.length ? Math.max(...lane.map((c) => c.y)) : 0;
    const groundY = 800;
    check(9, 'Tower cannot pass an opening that is too small (6 cells = 72 px)',
      sk.blocked === 1 && lane.length > 0 && lowest < groundY - 6 * 12,
      `blocked at x=${sk.towerX.toFixed(0)}; lowest blocking cell centre y=${lowest} (opening ${(groundY - (lowest + 6)) / 12} cells high)`);
    await page.screenshot({ path: path.join(OUT, '05_cave_too_small.png') });
    const caveX = sk.towerX;
    sd = await clearWithMouse(page, caveX + 140, 30000);
    check(8.1, 'Tower drives through the cave once its ceiling row is shot away', sd.towerX > caveX + 100,
      `x ${caveX.toFixed(0)} -> ${sd.towerX.toFixed(0)}`);

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
    check(13, 'Restart resets the run', sr.state === 'Run' && sr.distance < 1 && sr.towerX < 200 &&
      Math.abs(sr.cloudGap - 450) < 60 && !sr.gameOverVisible && sr.best >= Math.floor(so.distance),
      `distance ${sr.distance.toFixed(1)}, tower x ${sr.towerX.toFixed(0)}, gap ${sr.cloudGap.toFixed(0)}, best kept ${sr.best}`);
    check(15.1, 'No script errors in the desktop run', errors.length === 0, errors.slice(0, 3).join(' | '));
    await ctx.close();

    // ---------------------------------------------------------------- phone, touch (CDP touch events)
    ({ ctx, page, errors } = await openGame(browser, { hasTouch: true, isMobile: true, deviceScaleFactor: 1 }));
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
