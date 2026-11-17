// Dumps every GDevelop instruction (conditions/actions) with its parameter list to
// instructions.json, so tools/build_project.py can check and pad the events it writes.
// Usage: node tools/gd/dump_metadata.js <dir containing libGD.js from the GDevelop app>
const path = require('path');
const dir = path.resolve(process.argv[2]) + '/';
require(dir + 'libGD.js')({ locateFile: (f) => dir + f }).then((gd) => {
  const out = {};
  const exts = gd.JsPlatform.get().getAllPlatformExtensions();
  const add = (kind, map) => {
    const keys = map.keys();
    for (let k = 0; k < keys.size(); k++) {
      const n = keys.get(k), m = map.get(n), ps = [];
      for (let p = 0; p < m.getParametersCount(); p++) {
        const pm = m.getParameter(p);
        ps.push({ type: pm.getType(), codeOnly: pm.isCodeOnly(), extra: pm.getExtraInfo() });
      }
      out[kind + ':' + n] = ps;
    }
  };
  for (let i = 0; i < exts.size(); i++) {
    const e = exts.at(i);
    add('C', e.getAllConditions()); add('A', e.getAllActions());
    const objs = e.getExtensionObjectsTypes();
    for (let o = 0; o < objs.size(); o++) {
      add('C', e.getAllConditionsForObject(objs.get(o))); add('A', e.getAllActionsForObject(objs.get(o)));
    }
    add('C', e.getAllConditionsForObject('')); add('A', e.getAllActionsForObject(''));
    const bs = e.getBehaviorsTypes();
    for (let b = 0; b < bs.size(); b++) {
      add('C', e.getAllConditionsForBehavior(bs.get(b))); add('A', e.getAllActionsForBehavior(bs.get(b)));
    }
  }
  require('fs').writeFileSync(path.join(__dirname, 'instructions.json'), JSON.stringify(out));
  console.log(Object.keys(out).length, 'instructions');
});
