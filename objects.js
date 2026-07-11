/* DELATRAP roadside scenery builders — auto-generated from workflow wf_6b36ad7e-b51.
   Each build_<key>(THREE, P) returns a THREE.Group. Pure functions; attached to window.__BUILDERS. */
function build_grapes(THREE, P) {
  const g = new THREE.Group();
  const prof = [[0.12,0],[1.5,0],[1.78,0.9],[1.56,0.84],[1.22,0.2],[0.12,0.15]]
    .map(p => new THREE.Vector2(p[0], p[1]));
  const bowl = new THREE.Mesh(new THREE.LatheGeometry(prof, 12), P.metal(P.COL.gold));
  bowl.material.side = THREE.DoubleSide;
  g.add(bowl);
  g.add(P.edges(bowl, P.COL.goldDeep));
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.66, 0.08, 6, 14), P.neon(P.COL.cyan));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.88; g.add(rim);
  const rim2 = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.04, 6, 14), P.neon(P.COL.gold));
  rim2.rotation.x = Math.PI / 2; rim2.position.y = 0.86; g.add(rim2);
  const cols = [P.COL.purple, P.COL.pink, P.COL.crimson, P.COL.purple, P.COL.pinkHi];
  function grape(x, y, z, r, ci) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), P.emis(cols[ci % cols.length], 0.9));
    m.position.set(x, y, z); m.rotation.y = ci; g.add(m);
    const e = P.edges(m, P.COL.pinkHi); e.position.copy(m.position); e.rotation.copy(m.rotation); g.add(e);
    const s = new THREE.Mesh(new THREE.SphereGeometry(r * 0.28, 6, 6), P.neon(P.COL.ice));
    s.position.set(x - r * 0.4, y + r * 0.45, z + r * 0.45); g.add(s);
  }
  const base = 7;
  for (let i = 0; i < base; i++) {
    const a = (i / base) * Math.PI * 2;
    const spill = (i % 3 === 0);
    const rad = spill ? 1.48 : 1.08;
    const yy = spill ? 0.62 : 0.72;
    grape(Math.cos(a) * rad, yy, Math.sin(a) * rad, 0.42, i);
  }
  const mid = 5;
  for (let i = 0; i < mid; i++) {
    const a = (i / mid) * Math.PI * 2 + 0.4;
    grape(Math.cos(a) * 0.52, 1.18, Math.sin(a) * 0.52, 0.4, i + 2);
  }
  grape(-0.18, 1.62, 0.12, 0.38, 1);
  grape(0.22, 1.66, -0.14, 0.38, 3);
  grape(0.02, 1.98, 0.0, 0.36, 0);
  const leafMat = P.neon(P.COL.green);
  for (let i = 0; i < 2; i++) {
    const lf = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.5, 4), leafMat);
    lf.scale.z = 0.28;
    lf.position.set(i ? 0.32 : -0.3, 2.12, i ? -0.18 : 0.18);
    lf.rotation.set(0.5, i, i ? -0.6 : 0.6); g.add(lf);
  }
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.4, 6), P.matte(P.COL.wood));
  stem.position.set(0.02, 2.2, 0.0); g.add(stem);
  return g;
}

function build_pyramid(THREE, P) {
  const g = new THREE.Group();
  const C = P.COL;

  const slab = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.35, 3.0), P.matte(C.dark2));
  slab.position.y = 0.175;
  g.add(slab);
  const slabEdge = P.edges(slab, C.cyan);
  slabEdge.position.copy(slab.position);
  g.add(slabEdge);

  const trim = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.06, 3.1), P.neon(C.cyan));
  trim.position.y = 0.36;
  g.add(trim);

  const H = 3.2, R = 1.55;
  const pyGeo = new THREE.ConeGeometry(R, H, 4);
  const pyra = new THREE.Mesh(pyGeo, P.emis(C.purple, 0.35));
  pyra.rotation.y = Math.PI / 4;
  pyra.position.y = 0.35 + H / 2;
  g.add(pyra);

  const outline = P.edges(pyra, C.pink);
  outline.rotation.y = pyra.rotation.y;
  outline.position.copy(pyra.position);
  g.add(outline);

  const goldGeo = new THREE.ConeGeometry(R * 1.008, H * 1.006, 4);
  const goldOut = new THREE.LineSegments(new THREE.EdgesGeometry(goldGeo), P.neon(C.gold));
  goldOut.rotation.y = pyra.rotation.y;
  goldOut.position.copy(pyra.position);
  g.add(goldOut);

  const capY = 0.35 + H;
  const cap = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), P.neon(C.gold));
  cap.position.y = capY + 0.12;
  g.add(cap);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.05, 6, 12), P.neon(C.pinkHi));
  halo.rotation.x = Math.PI / 2;
  halo.position.y = capY + 0.12;
  g.add(halo);

  const bandY = 0.35 + H * 0.42;
  const bandR = R * (1 - 0.42) * Math.SQRT2 * 0.5 + 0.02;
  const band = new THREE.Mesh(new THREE.TorusGeometry(bandR + 0.55, 0.035, 6, 4), P.neon(C.cyan));
  band.rotation.x = Math.PI / 2;
  band.rotation.z = Math.PI / 4;
  band.position.y = bandY;
  g.add(band);

  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), P.neon(C.green));
    post.position.set(Math.cos(a) * 1.35, 0.62, Math.sin(a) * 1.35);
    g.add(post);
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), P.neon(C.gold));
    orb.position.set(Math.cos(a) * 1.35, 0.95, Math.sin(a) * 1.35);
    g.add(orb);
  }

  return g;
}

function build_goldchain(THREE, P) {
  const g = new THREE.Group();
  const gold = P.metal(P.COL.gold);

  const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), P.matte(P.COL.dark2));
  rock.scale.set(1.4, 0.55, 1.2);
  rock.position.set(0, 0.64, -0.15);
  g.add(rock);
  const re = P.edges(rock, P.COL.purple);
  re.scale.copy(rock.scale); re.position.copy(rock.position);
  g.add(re);

  const N = 10, span = 3.2, R = 0.24, tube = 0.075, frontZ = 0.46, yC = 1.32, yE = 1.98;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const x = (t - 0.5) * span;
    const y = yC + (yE - yC) * (1 - Math.sin(t * Math.PI));
    const link = new THREE.Mesh(new THREE.TorusGeometry(R, tube, 6, 12), gold);
    link.position.set(x, y, frontZ);
    if (i % 2 === 1) link.rotation.x = Math.PI / 2;
    g.add(link);
    const le = P.edges(link, i % 2 === 0 ? P.COL.gold : P.COL.goldDeep);
    le.position.copy(link.position); le.rotation.copy(link.rotation);
    g.add(le);
  }

  const bail = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.05, 6, 10), gold);
  bail.position.set(0, yC - 0.2, frontZ + 0.05);
  g.add(bail);

  const medY = 0.66, medZ = 0.5;
  const med = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.12, 12), P.emis(P.COL.goldDeep, 0.85));
  med.rotation.x = Math.PI / 2;
  med.position.set(0, medY, medZ);
  g.add(med);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.06, 6, 16), gold);
  ring.position.set(0, medY, medZ + 0.02);
  g.add(ring);
  const rge = P.edges(ring, P.COL.gold);
  rge.position.copy(ring.position);
  g.add(rge);
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.44, 16), P.neon(P.COL.gold));
  face.position.set(0, medY, medZ + 0.075);
  g.add(face);

  const nemes = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.36, 8), P.neon(P.COL.cyan));
  nemes.position.set(0, medY + 0.14, medZ + 0.11);
  g.add(nemes);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.12, 10, 1, true), P.neon(P.COL.cyan));
  band.position.set(0, medY + 0.02, medZ + 0.11);
  g.add(band);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), P.matte(P.COL.dark2));
  head.scale.set(1, 1.2, 0.55);
  head.position.set(0, medY - 0.02, medZ + 0.16);
  g.add(head);
  const beard = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 6), P.neon(P.COL.gold));
  beard.position.set(0, medY - 0.26, medZ + 0.14);
  g.add(beard);
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), P.neon(P.COL.pink));
  eyeL.position.set(-0.07, medY + 0.02, medZ + 0.26);
  const eyeR = eyeL.clone(); eyeR.position.set(0.07, medY + 0.02, medZ + 0.26);
  g.add(eyeL); g.add(eyeR);

  return g;
}

function build_throne(THREE, P) {
  const g = new THREE.Group();
  const gold = P.metal(P.COL.gold);
  const goldDeep = P.metal(P.COL.goldDeep);
  const dark = P.matte(P.COL.dark2);
  const add = (geo, mat, x, y, z, ry) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); if (ry) m.rotation.y = ry; g.add(m); return m; };
  const outline = (m, hex) => { const e = P.edges(m, hex); e.position.copy(m.position); e.rotation.copy(m.rotation); g.add(e); };
  const d0 = add(new THREE.BoxGeometry(3.2, 0.3, 3.0), dark, 0, 0.15, 0); outline(d0, P.COL.pink);
  const d1 = add(new THREE.BoxGeometry(2.6, 0.28, 2.4), goldDeep, 0, 0.44, 0); outline(d1, P.COL.gold);
  const seat = add(new THREE.BoxGeometry(1.8, 0.32, 1.6), gold, 0, 0.9, 0.05); outline(seat, P.COL.cyan);
  add(new THREE.BoxGeometry(1.5, 0.14, 1.3), P.emis(P.COL.crimson, 0.9), 0, 1.1, 0.05);
  const back = add(new THREE.BoxGeometry(1.9, 2.4, 0.28), gold, 0, 2.25, -0.72); outline(back, P.COL.cyan);
  add(new THREE.BoxGeometry(1.3, 1.8, 0.12), P.emis(P.COL.purple, 0.6), 0, 2.15, -0.6);
  for (const sx of [-1, 1]) {
    const p = add(new THREE.CylinderGeometry(0.16, 0.18, 2.9, 8), goldDeep, sx * 0.95, 2.35, -0.72); outline(p, P.COL.gold);
    const o = add(new THREE.IcosahedronGeometry(0.26, 0), gold, sx * 0.95, 3.95, -0.72); outline(o, P.COL.pink);
    add(new THREE.IcosahedronGeometry(0.15, 0), P.neon(P.COL.gold), sx * 0.95, 3.95, -0.72);
  }
  for (const sx of [-1, 1]) {
    const a = add(new THREE.BoxGeometry(0.34, 0.3, 1.5), gold, sx * 1.0, 1.35, 0.15); outline(a, P.COL.cyan);
    const post = add(new THREE.CylinderGeometry(0.14, 0.16, 0.9, 8), goldDeep, sx * 1.0, 0.75, 0.75); outline(post, P.COL.gold);
    add(new THREE.SphereGeometry(0.2, 8, 6), P.neon(P.COL.cyan), sx * 1.0, 1.6, 0.9);
  }
  for (let i = -1; i <= 1; i++) {
    const c = add(new THREE.ConeGeometry(0.24, 0.7, 8), gold, i * 0.55, 3.75, -0.72); outline(c, P.COL.pinkHi);
  }
  const jewel = add(new THREE.OctahedronGeometry(0.42, 0), P.emis(P.COL.cyan, 1.4), 0, 2.4, -0.5);
  jewel.rotation.z = Math.PI / 4;
  add(new THREE.TorusGeometry(0.55, 0.07, 6, 12), P.neon(P.COL.gold), 0, 2.4, -0.48);
  add(new THREE.RingGeometry(0.62, 0.72, 16), P.neon(P.COL.pink), 0, 2.4, -0.44);
  add(new THREE.BoxGeometry(2.6, 0.06, 0.06), P.neon(P.COL.cyan), 0, 0.32, 1.51);
  return g;
}

function build_bricks(THREE, P) {
  const g = new THREE.Group();
  const brickMat = P.matte(0x9e3b1f);
  const woodMat = P.matte(P.COL.wood);
  function brick(sx, sy, sz, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), brickMat);
    m.position.set(x, y, z);
    g.add(m);
    const e = P.edges(m, P.COL.pink);
    e.position.set(x, y, z);
    g.add(e);
  }
  for (const z of [-0.8, 0, 0.8]) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.14, 0.18), woodMat);
    r.position.set(0, 0.07, z);
    g.add(r);
  }
  for (const z of [-0.8, -0.4, 0, 0.4, 0.8]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.26), woodMat);
    s.position.set(0, 0.17, z);
    g.add(s);
    const e = P.edges(s, P.COL.goldDeep);
    e.position.copy(s.position);
    g.add(e);
  }
  const slots = [-0.6, -0.2, 0.2, 0.6];
  const bh = 0.5, base = 0.2;
  for (let L = 0; L < 3; L++) {
    const y = base + 0.25 + L * bh;
    if (L % 2 === 0) {
      for (const z of slots) brick(1.55, 0.44, 0.37, 0, y, z);
    } else {
      for (const x of slots) brick(0.37, 0.44, 1.55, x, y, 0);
    }
  }
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.24, 0.5), brickMat);
  cap.position.set(0, base + 0.25 + 3 * bh - 0.13, 0);
  g.add(cap);
  const ce = P.edges(cap, P.COL.pinkHi);
  ce.position.copy(cap.position);
  g.add(ce);
  return g;
}

function build_crown(THREE, P) {
  const g = new THREE.Group();
  const C = P.COL;
  const R = 1.15;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 1.03, 1.4, 12, 1, true), P.metal(C.gold));
  band.position.y = 0.7; g.add(band);
  const be = P.edges(band, C.goldDeep); be.position.y = 0.7; g.add(be);
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.97, R * 0.97, 1.38, 12, 1, true), P.matte(C.dark));
  inner.position.y = 0.7; g.add(inner);
  const topRim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.07, 6, 16), P.neon(C.gold));
  topRim.rotation.x = Math.PI / 2; topRim.position.y = 1.4; g.add(topRim);
  const botRim = new THREE.Mesh(new THREE.TorusGeometry(R * 1.03, 0.08, 6, 16), P.neon(C.goldDeep));
  botRim.rotation.x = Math.PI / 2; botRim.position.y = 0.1; g.add(botRim);
  const midRim = new THREE.Mesh(new THREE.TorusGeometry(R * 1.01, 0.035, 6, 16), P.neon(C.pink));
  midRim.rotation.x = Math.PI / 2; midRim.position.y = 0.48; g.add(midRim);
  const jcols = [C.cyan, C.pink, C.cyan, C.pink, C.ice];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const px = Math.cos(a) * R, pz = Math.sin(a) * R;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.78, 6), P.metal(C.gold));
    cone.position.set(px, 1.4 + 0.39, pz); g.add(cone);
    const ce = P.edges(cone, C.goldDeep); ce.position.copy(cone.position); g.add(ce);
    const jew = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 0), P.neon(jcols[i]));
    jew.position.set(px, 1.4 + 0.82, pz); g.add(jew);
    const je = P.edges(jew, C.white); je.position.copy(jew.position); g.add(je);
    const glow = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), P.emis(jcols[i], 1.4));
    glow.position.copy(jew.position); g.add(glow);
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + Math.PI / 5;
    const px = Math.cos(a) * R * 1.03, pz = Math.sin(a) * R * 1.03;
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), P.neon(i % 2 ? C.pink : C.cyan));
    gem.position.set(px, 0.72, pz); gem.lookAt(px * 2, 0.72, pz * 2); g.add(gem);
  }
  return g;
}

function build_clown(THREE, P) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.0, 8), P.matte(P.COL.dark2));
  pole.position.y = 1.0; g.add(pole);
  const poleEdge = P.edges(pole, P.COL.cyan); poleEdge.position.y = 1.0; g.add(poleEdge);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.35, 0.12, 8), P.matte(P.COL.dark));
  base.position.y = 0.06; g.add(base);
  const faceMat = P.matte(P.COL.marble);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 10), faceMat);
  face.scale.set(1.0, 1.05, 0.45); face.position.y = 2.7; g.add(face);
  const rim = P.edges(face, P.COL.pink); rim.scale.copy(face.scale); rim.position.copy(face.position); g.add(rim);
  const eyeWhite = (x) => {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), P.neon(P.COL.ice));
    e.scale.set(1, 1, 0.4); e.position.set(x, 2.92, 0.38); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), P.neon(P.COL.purple));
    p.position.set(x, 2.92, 0.5); g.add(p);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.03, 6, 14), P.neon(P.COL.cyan));
    ring.position.set(x, 2.92, 0.4); g.add(ring);
  };
  eyeWhite(-0.32); eyeWhite(0.32);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), P.neon(P.COL.crimson));
  nose.position.set(0, 2.58, 0.55); g.add(nose);
  const noseGlow = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), P.emis(P.COL.crimson, 1.4));
  noseGlow.position.copy(nose.position); noseGlow.material.transparent = true; noseGlow.material.opacity = 0.35; g.add(noseGlow);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.06, 8, 20, Math.PI), P.neon(P.COL.gold));
  smile.rotation.z = Math.PI; smile.position.set(0, 2.4, 0.42); g.add(smile);
  const cheek = (x) => {
    const c = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), P.neon(P.COL.pinkHi));
    c.scale.set(1, 0.7, 0.4); c.position.set(x, 2.42, 0.44); g.add(c);
  };
  cheek(-0.55); cheek(0.55);
  const hairMat = P.neon(P.COL.green);
  for (let i = 0; i < 7; i++) {
    const a = (i / 6 - 0.5) * Math.PI * 1.15;
    const t = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5 + 0.2 * Math.cos(a * 2), 6), i % 2 ? P.neon(P.COL.pink) : hairMat);
    t.position.set(Math.sin(a) * 0.75, 3.35 + Math.cos(a) * 0.18, 0.1);
    t.rotation.z = -a; g.add(t);
  }
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.08, 6, 14), P.neon(P.COL.purple));
  collar.rotation.x = Math.PI / 2; collar.scale.set(1, 1, 0.5); collar.position.set(0, 2.05, 0.15); g.add(collar);
  return g;
}

function build_icegold(THREE, P) {
  const g = new THREE.Group();
  const C = P.COL;
  const goldMat = P.metal(C.gold);
  const bw = 0.62, bh = 0.24, bd = 0.32;
  const gold = new THREE.Group(); gold.position.x = -1.05;
  const barGeo = new THREE.BoxGeometry(bw, bh, bd);
  function bar(y, z) {
    const m = new THREE.Mesh(barGeo, goldMat);
    m.position.set(0, y, z); gold.add(m);
    const e = P.edges(m, C.goldDeep); e.position.copy(m.position); gold.add(e);
  }
  [[0.12,-0.34],[0.12,0],[0.12,0.34],[0.36,-0.17],[0.36,0.17],[0.60,0]].forEach(p => bar(p[0], p[1]));
  const goldGlow = new THREE.Mesh(new THREE.BoxGeometry(bw*1.04, 0.03, 1.18), P.neon(C.gold));
  goldGlow.position.set(0, 0.006, 0); gold.add(goldGlow);
  g.add(gold);

  const ice = new THREE.Group(); ice.position.x = 1.1;
  const gems = [
    ['o', 0.60, 0.02, 0.62, 0.00],
    ['o', 0.50, -0.22, 0.50, 0.12],
    ['i', 0.40, 0.26, 0.40, -0.08],
    ['i', 0.32, 0.26, 0.32, 0.32],
    ['o', 0.34, -0.30, 0.34, -0.26],
    ['o', 0.28, 0.34, 0.28, 0.28]
  ];
  gems.forEach((d, i) => {
    const s = d[1];
    const geo = d[0] === 'o' ? new THREE.OctahedronGeometry(s) : new THREE.IcosahedronGeometry(s, 0);
    const mat = (i % 2) ? P.neon(C.cyan) : P.emis(C.ice, 0.9);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(d[2], d[3], d[4]); m.rotation.y = i * 0.7;
    ice.add(m);
    const e = P.edges(m, C.ice); e.position.copy(m.position); e.rotation.copy(m.rotation); ice.add(e);
  });
  const iceGlow = new THREE.Mesh(new THREE.CircleGeometry(0.92, 10), P.neon(C.cyan));
  iceGlow.rotation.x = -Math.PI/2; iceGlow.position.y = 0.012; ice.add(iceGlow);
  g.add(ice);

  const spark = new THREE.OctahedronGeometry(0.07);
  const sparks = [
    [-1.05, 1.02, 0.10, C.gold], [1.10, 1.52, 0.05, C.ice],
    [0.80, 0.98, -0.22, C.pink], [1.30, 1.18, 0.24, C.white],
    [-0.70, 0.86, 0.40, C.goldDeep], [-1.38, 0.72, -0.20, C.pinkHi],
    [0.55, 1.25, 0.10, C.cyan]
  ];
  sparks.forEach(s => {
    const m = new THREE.Mesh(spark, P.neon(s[3]));
    m.position.set(s[0], s[1], s[2]); m.rotation.set(0.5, s[0], 0.3); g.add(m);
  });
  return g;
}

function build_whip(THREE, P) {
  const g = new THREE.Group();
  const COL = P.COL;
  const add = (geo, mat, x, y, z, edgeHex) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    g.add(m);
    if (edgeHex) { const e = P.edges(m, edgeHex); e.position.copy(m.position); e.rotation.copy(m.rotation); g.add(e); }
    return m;
  };
  const bodyMat = P.metal(COL.dark2);
  add(new THREE.BoxGeometry(3.9, 0.45, 1.55), bodyMat, 0, 0.55, 0, COL.pink);
  add(new THREE.BoxGeometry(3.5, 0.35, 1.45), bodyMat, 0.05, 0.85, 0, COL.cyan);
  const nose = add(new THREE.BoxGeometry(1.1, 0.3, 1.4), bodyMat, 1.65, 0.72, 0, COL.pink);
  nose.rotation.z = 0.16;
  const cabin = add(new THREE.BoxGeometry(1.7, 0.42, 1.2), P.matte(COL.dark), -0.35, 1.08, 0, COL.cyan);
  add(new THREE.BoxGeometry(0.9, 0.3, 1.15), P.emis(COL.cyan, 0.5), 0.35, 1.06, 0);
  add(new THREE.BoxGeometry(0.12, 0.28, 1.5), P.neon(COL.pink), -1.95, 0.95, 0);
  add(new THREE.BoxGeometry(0.9, 0.06, 1.5), P.neon(COL.cyan), -1.55, 1.34, 0);
  const wheel = (x, z) => {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.28, 10), P.matte(COL.dark2));
    t.rotation.x = Math.PI / 2; t.position.set(x, 0.36, z); g.add(t);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 6, 10), P.neon(z > 0 ? COL.cyan : COL.pink));
    rim.position.set(x, 0.36, z + (z > 0 ? 0.16 : -0.16)); g.add(rim);
    const hub = new THREE.Mesh(new THREE.OctahedronGeometry(0.1), P.neon(COL.pinkHi));
    hub.position.copy(rim.position); g.add(hub);
  };
  wheel(1.3, 0.82); wheel(1.3, -0.82); wheel(-1.3, 0.82); wheel(-1.3, -0.82);
  const head = (z) => {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.2, 0.32), P.neon(COL.ice));
    h.position.set(2.02, 0.75, z); g.add(h);
  };
  head(0.45); head(-0.45);
  const tail = (z) => {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.3), P.neon(COL.crimson));
    t.position.set(-2.0, 0.82, z); g.add(t);
  };
  tail(0.5); tail(-0.5);
  const glow = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.05, 1.4), P.neon(COL.pink));
  glow.position.set(0, 0.14, 0); g.add(glow);
  const glow2 = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.04, 1.2), P.neon(COL.cyan));
  glow2.position.set(0, 0.1, 0); g.add(glow2);
  return g;
}

function build_gates(THREE, P) {
  const g = new THREE.Group();
  const marble = P.matte(P.COL.marble);
  const dark = P.matte(P.COL.dark);
  const add = (par, m, ehex) => { par.add(m); if (ehex){ const e = P.edges(m, ehex); e.position.copy(m.position); e.rotation.copy(m.rotation); par.add(e); } return m; };

  function pillar(z, hex) {
    const p = new THREE.Group();
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.35, 1.0), marble); b.position.y = 0.175; add(p, b, P.COL.cyan);
    const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.2, 0.72), marble); b2.position.y = 0.45; add(p, b2, P.COL.cyan);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.04, 6, 14), P.neon(hex)); ringB.position.y = 0.62; ringB.rotation.x = Math.PI / 2; p.add(ringB);
    const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.31, 2.0, 8), marble); sh.position.y = 1.6; add(p, sh, hex);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.3, 0.24, 8), marble); cap.position.y = 2.72; add(p, cap, P.COL.gold);
    const cap2 = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.18, 0.74), marble); cap2.position.y = 2.9; add(p, cap2, P.COL.gold);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.045, 6, 14), P.neon(hex)); ring.position.y = 2.99; ring.rotation.x = Math.PI / 2; p.add(ring);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), P.neon(hex)); orb.position.y = 3.25; p.add(orb);
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.34, 8), P.neon(hex)); spike.position.y = 3.6; p.add(spike);
    p.position.z = z; return p;
  }
  g.add(pillar(-1.4, P.COL.pink));
  g.add(pillar(1.4, P.COL.cyan));

  function leaf(z, roty, hex) {
    const l = new THREE.Group();
    const railT = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.06), dark); railT.position.set(0.55, 1.35, 0); add(l, railT, hex);
    const railB = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.06), dark); railB.position.set(0.55, 0.2, 0); add(l, railB, hex);
    for (let i = 0; i < 6; i++) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.2, 6), P.neon(hex));
      bar.position.set(0.12 + i * 0.16, 0.775, 0); l.add(bar);
    }
    const scroll = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 12), P.neon(hex)); scroll.position.set(0.55, 0.775, 0); l.add(scroll);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 6), P.neon(hex)); tip.position.set(0.9, 1.45, 0); l.add(tip);
    l.position.set(0, 0, z); l.rotation.y = roty; return l;
  }
  g.add(leaf(-1.4, 5 * Math.PI / 6, P.COL.pink));
  g.add(leaf(1.4, -5 * Math.PI / 6, P.COL.cyan));

  return g;
}

function build_velvetrope(THREE, P) {
  const g = new THREE.Group();
  const goldM = P.metal(P.COL.gold);
  const darkM = P.matte(P.COL.dark2);
  const postX = 1.15, topY = 1.35, sag = 0.5;

  function post(px) {
    const p = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.14, 10), darkM);
    base.position.y = 0.07; p.add(base);
    const baseRing = P.edges(base, P.COL.gold); baseRing.position.copy(base.position); p.add(baseRing);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 1.05, 10), goldM);
    col.position.y = 0.14 + 0.525; p.add(col);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.09, 10), goldM);
    collar.position.y = 0.55; p.add(collar);
    const glowRing = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.035, 6, 12), P.neon(P.COL.gold));
    glowRing.rotation.x = Math.PI / 2; glowRing.position.y = 1.02; p.add(glowRing);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 0.12, 10), goldM);
    cap.position.y = topY - 0.09; p.add(cap);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8), goldM);
    ball.position.y = topY + 0.12; p.add(ball);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.205, 10, 8), P.emis(P.COL.gold, 0.9));
    halo.position.y = topY + 0.12; halo.material.wireframe = true; p.add(halo);
    p.position.x = px;
    return p;
  }
  g.add(post(-postX), post(postX));

  const ropeMat = P.neon(P.COL.crimson);
  const glowMat = P.emis(P.COL.crimson, 1.1);
  const N = 14, r0 = 0.075;
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, x = -postX + 2 * postX * t;
    const y = topY + 0.05 - sag * Math.sin(Math.PI * t);
    pts.push(new THREE.Vector3(x, y, 0));
  }
  for (let i = 0; i < N; i++) {
    const a = pts[i], b = pts[i + 1];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const dir = b.clone().sub(a), len = dir.length();
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(r0, r0, len * 1.04, 8), glowMat);
    seg.position.copy(mid);
    seg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    g.add(seg);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(r0 * 1.25, 8, 6), ropeMat);
    glow.position.copy(a); g.add(glow);
  }
  const endGlow = new THREE.Mesh(new THREE.SphereGeometry(r0 * 1.25, 8, 6), ropeMat);
  endGlow.position.copy(pts[N]); g.add(endGlow);

  const hook1 = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.03, 6, 10), P.neon(P.COL.gold));
  hook1.position.set(-postX, topY + 0.05, 0); hook1.rotation.y = Math.PI / 2; g.add(hook1);
  const hook2 = hook1.clone(); hook2.position.x = postX; g.add(hook2);
  return g;
}

function build_soldier(THREE, P) {
  const g = new THREE.Group();
  const body = P.metal(P.COL.dark);
  const dark = P.matte(P.COL.dark2);
  const add = (geo, mat, x, y, z, edgeHex, rz) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    if (rz) m.rotation.z = rz;
    g.add(m);
    if (edgeHex) { const e = P.edges(m, edgeHex); e.position.copy(m.position); e.rotation.copy(m.rotation); g.add(e); }
    return m;
  };
  add(new THREE.BoxGeometry(2, 0.4, 2), dark, 0, 0.2, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(1.7, 0.12, 1.7), P.neon(P.COL.pink), 0, 0.46, 0);
  add(new THREE.BoxGeometry(1.4, 0.06, 1.4), P.neon(P.COL.cyan), 0, 0.02, 0);
  add(new THREE.BoxGeometry(0.34, 1.1, 0.38), body, -0.26, 1.07, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.34, 1.1, 0.38), body, 0.26, 1.07, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.16, 0.05, 0.2), P.neon(P.COL.green), -0.26, 1.15, 0.2);
  add(new THREE.BoxGeometry(0.16, 0.05, 0.2), P.neon(P.COL.green), 0.26, 1.15, 0.2);
  add(new THREE.BoxGeometry(0.9, 1.0, 0.52), body, 0, 2.12, 0, P.COL.pink);
  add(new THREE.BoxGeometry(0.94, 0.12, 0.56), P.neon(P.COL.gold), 0, 1.66, 0);
  add(new THREE.BoxGeometry(0.28, 0.28, 0.06), P.neon(P.COL.green), 0, 2.28, 0.28);
  add(new THREE.BoxGeometry(0.5, 0.24, 0.5), body, 0, 2.74, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.26, 0.95, 0.32), body, -0.62, 2.05, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.26, 0.95, 0.32), body, 0.62, 2.05, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.28, 0.14, 0.34), P.neon(P.COL.pink), -0.62, 2.5, 0);
  add(new THREE.BoxGeometry(0.28, 0.14, 0.34), P.neon(P.COL.pink), 0.62, 2.5, 0);
  add(new THREE.BoxGeometry(0.5, 0.5, 0.5), body, 0, 3.1, 0, P.COL.cyan);
  add(new THREE.BoxGeometry(0.44, 0.16, 0.06), P.neon(P.COL.cyan), 0, 3.12, 0.26);
  add(new THREE.BoxGeometry(0.1, 0.4, 0.44), P.neon(P.COL.pink), 0, 3.5, 0);
  add(new THREE.BoxGeometry(0.14, 1.7, 0.16), body, 0.66, 2.2, 0.42, P.COL.crimson);
  add(new THREE.BoxGeometry(0.16, 0.06, 0.18), P.neon(P.COL.gold), 0.66, 2.2, 0.42);
  add(new THREE.BoxGeometry(0.12, 0.32, 0.16), body, 0.5, 1.8, 0.5, P.COL.cyan, 0.4);
  add(new THREE.ConeGeometry(0.08, 0.24, 6), P.neon(P.COL.cyan), 0.66, 3.15, 0.42);
  add(new THREE.OctahedronGeometry(0.09, 0), P.neon(P.COL.green), 0.66, 1.35, 0.42);
  return g;
}

function build_pinkyring(THREE, P) {
  const g = new THREE.Group();
  const gold = P.metal(P.COL.gold);
  const goldD = P.metal(P.COL.goldDeep);

  const mound = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.5, 0.24, 10), P.matte(P.COL.dark2));
  mound.position.y = 0.12; g.add(mound);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.28, 0.04, 6, 16), P.neon(P.COL.purple));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.24; g.add(rim);

  const ring = new THREE.Group();
  const R = 1.05, tube = 0.3;
  const band = new THREE.Mesh(new THREE.TorusGeometry(R, tube, 8, 22), gold);
  ring.add(band); ring.add(P.edges(band, P.COL.goldDeep));
  for (const z of [tube * 0.92, -tube * 0.92]) {
    const inlay = new THREE.Mesh(new THREE.TorusGeometry(R, 0.05, 6, 22), P.neon(P.COL.pink));
    inlay.position.z = z; ring.add(inlay);
  }

  const headY = R + tube;
  const setting = new THREE.Group();
  setting.position.y = headY;
  const basket = new THREE.Mesh(new THREE.ConeGeometry(0.44, 0.5, 8), goldD);
  basket.rotation.x = Math.PI; basket.position.y = 0.02;
  setting.add(basket); setting.add(P.edges(basket, P.COL.gold));

  const diam = new THREE.Mesh(new THREE.IcosahedronGeometry(0.58, 0), P.emis(P.COL.ice, 0.9));
  diam.position.y = 0.58; setting.add(diam);
  const de = P.edges(diam, P.COL.cyan); de.position.y = 0.58; setting.add(de);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 0), P.neon(P.COL.white));
  core.position.y = 0.58; setting.add(core);
  const spark = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), P.neon(P.COL.cyan));
  spark.position.set(0.18, 0.78, 0.4); setting.add(spark);

  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4;
    const claw = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.03, 0.62, 6), gold);
    claw.position.set(Math.cos(a) * 0.36, 0.42, Math.sin(a) * 0.36);
    claw.rotation.z = -Math.cos(a) * 0.5; claw.rotation.x = Math.sin(a) * 0.5;
    setting.add(claw);
  }
  ring.add(setting);

  ring.rotation.x = -0.4; ring.rotation.z = 0.1;
  ring.position.y = 1.32;
  g.add(ring);
  return g;
}

function build_jet(THREE, P) {
  const g = new THREE.Group();
  const body = P.metal(P.COL.dark);
  const chrome = P.metal(P.COL.marble);
  const cyan = P.neon(P.COL.cyan);
  const ice = P.neon(P.COL.ice);

  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.9, 8), body);
  stand.position.set(0, 0.45, 0); g.add(stand);
  const strut2 = stand.clone(); strut2.scale.set(0.7,0.7,0.7); strut2.position.set(-1.6,0.32,0.2); g.add(strut2);
  const strut3 = strut2.clone(); strut3.position.set(1.6,0.32,-0.2); g.add(strut3);

  const yB = 1.15;
  const fus = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3.4, 10), chrome);
  fus.rotation.z = Math.PI/2; fus.position.set(0, yB, 0); g.add(fus);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.3, 10), chrome);
  nose.rotation.z = -Math.PI/2; nose.position.set(2.35, yB, 0); g.add(nose);

  const tailCone = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.0, 10), chrome);
  tailCone.rotation.z = Math.PI/2; tailCone.position.set(-2.2, yB, 0); g.add(tailCone);

  const winStrip = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.14, 0.02), cyan);
  winStrip.position.set(0.2, yB + 0.18, 0.4); g.add(winStrip);
  const winStrip2 = winStrip.clone(); winStrip2.position.z = -0.4; g.add(winStrip2);

  const wingGeo = new THREE.BoxGeometry(1.5, 0.06, 2.4);
  const wingL = new THREE.Mesh(wingGeo, body);
  wingL.position.set(-0.1, yB - 0.15, 1.35); wingL.rotation.y = -0.5; g.add(wingL);
  const eL = P.edges(wingL, P.COL.cyan); eL.position.copy(wingL.position); eL.rotation.copy(wingL.rotation); g.add(eL);
  const wingR = wingL.clone(); wingR.position.z = -1.35; wingR.rotation.y = 0.5; g.add(wingR);
  const eR = P.edges(wingR, P.COL.cyan); eR.position.copy(wingR.position); eR.rotation.copy(wingR.rotation); g.add(eR);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.06), body);
  fin.position.set(-1.9, yB + 0.55, 0); fin.rotation.z = 0.4; g.add(fin);
  const eF = P.edges(fin, P.COL.ice); eF.position.copy(fin.position); eF.rotation.copy(fin.rotation); g.add(eF);
  const stabL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.9), body);
  stabL.position.set(-2.0, yB + 0.1, 0.4); stabL.rotation.y = -0.4; g.add(stabL);
  const stabR = stabL.clone(); stabR.position.z = -0.4; stabR.rotation.y = 0.4; g.add(stabR);

  const engineL = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.8, 10), body);
  engineL.rotation.z = Math.PI/2; engineL.position.set(-1.2, yB - 0.35, 0.75); g.add(engineL);
  const engineR = engineL.clone(); engineR.position.z = -0.75; g.add(engineR);
  const glowL = new THREE.Mesh(new THREE.CircleGeometry(0.2, 10), cyan);
  glowL.rotation.y = -Math.PI/2; glowL.position.set(-1.6, yB - 0.35, 0.75); g.add(glowL);
  const glowR = glowL.clone(); glowR.position.z = -0.75; g.add(glowR);

  const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), ice);
  noseTip.position.set(3.0, yB, 0); g.add(noseTip);
  return g;
}

function build_flask(THREE, P) {
  const g = new THREE.Group();
  const C = P.COL;
  const addEdges = (mesh, hex) => { const e = P.edges(mesh, hex); e.position.copy(mesh.position); e.rotation.copy(mesh.rotation); g.add(e); };
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.18, 0.9), P.metal(C.goldDeep));
  base.position.y = 0.09; g.add(base); addEdges(base, C.gold);
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.2, 0.7), P.metal(C.gold));
  body.position.y = 1.32; g.add(body); addEdges(body, C.ice);
  [-1, 1].forEach(s => {
    const ch = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.18, 0.5), P.metal(C.goldDeep));
    ch.position.set(s * 0.9, 1.32, 0); g.add(ch);
  });
  const shoulder = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 1.0, 0.35, 8), P.metal(C.gold));
  shoulder.position.y = 2.6; g.add(shoulder); addEdges(shoulder, C.ice);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.3, 8), P.metal(C.goldDeep));
  neck.position.y = 2.9; g.add(neck);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.05, 6, 10), P.neon(C.gold));
  collar.rotation.x = Math.PI / 2; collar.position.y = 2.98; g.add(collar);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.42, 0.3, 8), P.metal(C.gold));
  cap.position.y = 3.2; g.add(cap); addEdges(cap, C.ice);
  const capTop = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), P.neon(C.pinkHi));
  capTop.position.y = 3.4; g.add(capTop);
  const fz = 0.36;
  const drank = new THREE.Mesh(new THREE.BoxGeometry(1.84, 0.16, 0.74), P.neon(C.purple));
  drank.position.y = 0.95; g.add(drank);
  [-1, 1].forEach(s => {
    const liq = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 0.02), P.emis(C.purple, 0.9));
    liq.position.set(0, 0.58, s * fz); g.add(liq);
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.055, 6, 14), P.neon(C.pink));
  ring.position.set(0, 1.75, fz + 0.02); g.add(ring);
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.19, 0), P.neon(C.cyan));
  gem.position.set(0, 1.75, fz + 0.06); g.add(gem);
  [0.6, -0.55].forEach((yy, i) => {
    const line = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.05, 0.02), P.neon(i ? C.cyan : C.gold));
    line.position.set(0, 1.75 + yy, fz + 0.02); g.add(line);
  });
  const backGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.17, 0), P.neon(C.cyan));
  backGem.position.set(0, 1.75, -fz - 0.06); g.add(backGem);
  return g;
}

function build_akcrate(THREE, P) {
  const g = new THREE.Group();
  const mk = (grp, geo, mat, pos, rot, edge) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(pos[0], pos[1], pos[2]);
    if (rot) m.rotation.set(rot[0] || 0, rot[1] || 0, rot[2] || 0);
    grp.add(m);
    if (edge) { const e = P.edges(m, edge); e.position.copy(m.position); e.rotation.copy(m.rotation); grp.add(e); }
    return m;
  };
  const gold = () => P.metal(P.COL.gold);

  mk(g, new THREE.BoxGeometry(1.9, 1.4, 1.6), P.matte(P.COL.wood), [0, 0.7, 0], null, P.COL.goldDeep);
  mk(g, new THREE.BoxGeometry(2.0, 0.12, 1.72), P.matte(P.COL.wood), [0, 1.46, 0], null, P.COL.gold);
  [[-0.9, 0.75], [0.9, 0.75], [-0.9, -0.75], [0.9, -0.75]].forEach(c =>
    mk(g, new THREE.BoxGeometry(0.1, 1.42, 0.1), P.metal(P.COL.goldDeep), [c[0], 0.7, c[1]], null, P.COL.gold));
  [-0.55, 0, 0.55].forEach(x => {
    mk(g, new THREE.BoxGeometry(0.07, 1.24, 0.03), P.neon(P.COL.cyan), [x, 0.7, 0.81]);
    mk(g, new THREE.BoxGeometry(0.07, 1.24, 0.03), P.neon(P.COL.cyan), [x, 0.7, -0.81]);
  });
  [0.34, 1.06].forEach(y => {
    mk(g, new THREE.BoxGeometry(1.72, 0.06, 0.03), P.neon(P.COL.pink), [0, y, 0.81]);
    mk(g, new THREE.BoxGeometry(1.72, 0.06, 0.03), P.neon(P.COL.pink), [0, y, -0.81]);
  });

  const rg = new THREE.Group();
  mk(rg, new THREE.BoxGeometry(0.78, 0.1, 0.17), gold(), [0, 0, 0], null, P.COL.cyan);
  mk(rg, new THREE.CylinderGeometry(0.04, 0.04, 1.0, 8), gold(), [0.85, 0.01, -0.02], [0, 0, Math.PI / 2]);
  mk(rg, new THREE.CylinderGeometry(0.065, 0.065, 0.13, 8), gold(), [1.35, 0.01, -0.02], [0, 0, Math.PI / 2]);
  mk(rg, new THREE.BoxGeometry(0.5, 0.06, 0.07), gold(), [0.52, 0.03, -0.02]);
  mk(rg, new THREE.BoxGeometry(0.05, 0.08, 0.11), gold(), [0.56, 0.02, -0.13]);
  mk(rg, new THREE.BoxGeometry(0.05, 0.07, 0.09), P.neon(P.COL.cyan), [0.28, 0.06, -0.11]);
  mk(rg, new THREE.BoxGeometry(0.5, 0.09, 0.14), gold(), [-0.62, 0, 0.02]);
  mk(rg, new THREE.BoxGeometry(0.22, 0.08, 0.13), gold(), [-0.34, -0.005, 0.02], [0, 0.18, 0]);
  mk(rg, new THREE.BoxGeometry(0.1, 0.09, 0.24), gold(), [-0.12, 0, 0.15], [0, 0.4, 0]);
  mk(rg, new THREE.TorusGeometry(0.06, 0.02, 6, 10), P.neon(P.COL.gold), [-0.02, 0, 0.11], [Math.PI / 2, 0, 0]);
  mk(rg, new THREE.BoxGeometry(0.15, 0.09, 0.24), gold(), [0.05, 0, 0.16], [0, 0.35, 0], P.COL.cyan);
  mk(rg, new THREE.BoxGeometry(0.15, 0.09, 0.24), gold(), [-0.03, 0, 0.34], [0, 0.75, 0], P.COL.cyan);
  mk(rg, new THREE.BoxGeometry(0.05, 0.09, 0.05), P.neon(P.COL.pink), [-0.34, 0.06, -0.02]);
  mk(rg, new THREE.SphereGeometry(0.06, 8, 6), P.neon(P.COL.gold), [1.45, 0.01, -0.02]);
  rg.position.set(-0.05, 1.58, 0.02);
  rg.rotation.y = -0.06;
  g.add(rg);

  return g;
}

function build_sneaker(THREE, P) {
  const g = new THREE.Group();
  const add = (geo, mat, x, y, z, rx, ry, rz) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx || 0, ry || 0, rz || 0);
    g.add(m);
    return m;
  };
  const outline = (mesh, hex) => {
    const e = P.edges(mesh, hex);
    e.position.copy(mesh.position);
    e.rotation.copy(mesh.rotation);
    g.add(e);
  };
  add(new THREE.CylinderGeometry(1.45, 1.62, 0.6, 12), P.matte(P.COL.dark2), 0, 0.3, 0);
  add(new THREE.CylinderGeometry(1.5, 1.5, 0.08, 12), P.emis(P.COL.purple, 0.55), 0, 0.62, 0);
  add(new THREE.TorusGeometry(1.5, 0.06, 8, 24), P.neon(P.COL.pink), 0, 0.6, 0, Math.PI / 2);
  add(new THREE.TorusGeometry(1.2, 0.04, 8, 24), P.neon(P.COL.cyan), 0, 0.12, 0, Math.PI / 2);
  const sole = add(new THREE.BoxGeometry(2.8, 0.34, 1.0), P.matte(P.COL.dark), 0, 0.83, 0);
  outline(sole, P.COL.cyan);
  add(new THREE.BoxGeometry(2.86, 0.09, 1.05), P.neon(P.COL.cyan), 0, 0.9, 0);
  const toe = add(new THREE.BoxGeometry(1.05, 0.44, 0.86), P.matte(P.COL.dark), 0.86, 1.19, 0);
  outline(toe, P.COL.cyan);
  const upper = add(new THREE.BoxGeometry(1.95, 0.64, 0.86), P.matte(P.COL.dark2), -0.15, 1.32, 0);
  outline(upper, P.COL.pink);
  const ankle = add(new THREE.BoxGeometry(0.9, 0.95, 0.82), P.matte(P.COL.dark2), -0.78, 1.66, 0);
  outline(ankle, P.COL.pink);
  add(new THREE.TorusGeometry(0.36, 0.06, 8, 16), P.neon(P.COL.gold), -0.58, 2.06, 0, Math.PI / 2, 0, 0.22);
  const tongue = add(new THREE.BoxGeometry(0.58, 0.14, 0.66), P.matte(P.COL.dark), -0.16, 1.74, 0, 0, 0, -0.55);
  outline(tongue, P.COL.gold);
  for (let i = 0; i < 4; i++) {
    add(new THREE.CylinderGeometry(0.032, 0.032, 0.72, 6), P.neon(P.COL.pinkHi),
      0.24 - i * 0.29, 1.52 + i * 0.085, 0, Math.PI / 2, 0, (i % 2 ? 0.16 : -0.16));
  }
  [0.45, -0.45].forEach((z) => {
    add(new THREE.BoxGeometry(1.55, 0.17, 0.06), P.neon(P.COL.green), -0.1, 1.18, z, 0, 0, -0.22);
    add(new THREE.OctahedronGeometry(0.13), P.neon(P.COL.gold), -0.76, 1.8, z);
  });
  return g;
}

function build_petals(THREE, P) {
  const g = new THREE.Group();
  const R = 1.35, hH = 0.62, cy = hH;
  const mound = new THREE.Mesh(new THREE.SphereGeometry(R, 12, 8), P.matte(P.COL.dark2));
  mound.scale.set(1, hH / R, 1);
  mound.position.y = cy;
  g.add(mound);
  const rim = P.edges(mound, P.COL.pink);
  rim.scale.copy(mound.scale); rim.position.y = cy; g.add(rim);
  const glow = new THREE.Mesh(new THREE.SphereGeometry(R * 0.8, 10, 7), P.emis(P.COL.pink, 0.55));
  glow.scale.set(1, hH / R, 1); glow.position.y = cy; g.add(glow);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.95, R * 1.45, 24), P.neon(P.COL.pink));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; g.add(ring);
  const pink = P.neon(P.COL.pink); pink.side = THREE.DoubleSide;
  const pinkHi = P.neon(P.COL.pinkHi); pinkHi.side = THREE.DoubleSide;
  const crim = P.neon(P.COL.crimson); crim.side = THREE.DoubleSide;
  const petGeo = new THREE.PlaneGeometry(0.28, 0.44);
  petGeo.translate(0, 0.16, 0);
  const pick = () => { const r = Math.random(); return r < 0.55 ? pink : r < 0.85 ? pinkHi : crim; };
  function petal(x, y, z, tilt) {
    const m = new THREE.Mesh(petGeo, pick());
    m.position.set(x, y, z);
    m.rotation.x = -Math.PI / 2 + (Math.random() - 0.5) * tilt;
    m.rotation.z = Math.random() * Math.PI * 2;
    m.rotation.y = (Math.random() - 0.5) * 0.7;
    m.scale.setScalar(0.65 + Math.random() * 0.7);
    return m;
  }
  for (let i = 0; i < 68; i++) {
    const phi = Math.acos(Math.random());
    const th = Math.random() * Math.PI * 2;
    const nx = Math.sin(phi) * Math.cos(th), ny = Math.cos(phi), nz = Math.sin(phi) * Math.sin(th);
    g.add(petal(R * nx * 0.98, cy + hH * ny * 0.98 + 0.03, R * nz * 0.98, 1.1));
  }
  for (let i = 0; i < 5; i++) {
    const a = Math.random() * Math.PI * 2, r = R * (0.4 + Math.random() * 0.7);
    g.add(petal(Math.cos(a) * r, 0.05 + Math.random() * 0.1, Math.sin(a) * r, 0.5));
  }
  for (let i = 0; i < 10; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.3 + Math.random() * 1.3;
    g.add(petal(Math.cos(a) * r, 1.15 + Math.random() * 1.15, Math.sin(a) * r, 2.4));
  }
  return g;
}

function build_billboard(THREE, P) {
  const g = new THREE.Group();
  const add = (m, x, y, z, rx, ry, rz) => { m.position.set(x, y, z); if (rx || ry || rz) m.rotation.set(rx || 0, ry || 0, rz || 0); g.add(m); return m; };
  const legGeo = new THREE.CylinderGeometry(0.12, 0.16, 1.5, 8);
  const legMat = P.matte(P.COL.dark2);
  [-1.4, 1.4].forEach(x => { const l = add(new THREE.Mesh(legGeo, legMat), x, 0.75, 0); g.add(P.edges(l, P.COL.purple)).position.set(x, 0.75, 0); });
  const brace = add(new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.12, 0.12), legMat), 0, 1.1, 0);
  g.add(P.edges(brace, P.COL.purple)).position.set(0, 1.1, 0);
  const panel = add(new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.9, 0.18), P.matte(P.COL.dark)), 0, 2.55, 0);
  g.add(P.edges(panel, P.COL.cyan)).position.set(0, 2.55, 0);
  const back = add(new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.7, 0.12), P.emis(P.COL.dark2, 0.4)), 0, 2.55, -0.11);
  const fz = 0.11;
  const stripe = (col, y, w, ang) => { const s = add(new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, 0.05), P.neon(col)), -0.2, 2.55 + y, fz, 0, 0, ang); return s; };
  stripe(P.COL.pink, 0.55, 2.4, 0.12);
  stripe(P.COL.cyan, -0.5, 2.2, -0.15);
  const ring = add(new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 6, 14), P.neon(P.COL.purple)), -1.05, 2.75, fz);
  const ring2 = add(new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.05, 6, 12), P.neon(P.COL.green)), 1.15, 2.35, fz);
  const tri = add(new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.7, 3), P.emis(P.COL.pink, 0.9)), 0.7, 2.8, fz - 0.02, Math.PI / 2, 0, 0.3);
  g.add(P.edges(tri, P.COL.pinkHi)).position.set(0.7, 2.8, fz);
  const boltMat = P.neon(P.COL.gold);
  const seg = [[0.05, 0.55, 0.32, 0.28, 0.5], [-0.15, 0.2, 0.3, 0.28, -0.5], [0.1, -0.15, 0.34, 0.3, 0.55], [-0.1, -0.55, 0.28, 0.26, -0.5]];
  seg.forEach(s => { const b = add(new THREE.Mesh(new THREE.BoxGeometry(0.16, s[3], 0.06), boltMat), s[0], 2.55 + s[1], fz + 0.01, 0, 0, s[4]); });
  const glowBolt = add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.02), P.emis(P.COL.goldDeep, 0.5)), 0, 2.55, fz - 0.03);
  const drip = (col, x, y, h) => { add(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, h, 6), P.neon(col)), x, 2.55 + y, fz); add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), P.neon(col)), x, 2.55 + y - h / 2, fz); };
  drip(P.COL.cyan, -1.3, -0.2, 0.5);
  drip(P.COL.pink, 1.35, 0.1, 0.6);
  drip(P.COL.green, -0.55, -0.35, 0.35);
  const dot = (col, x, y, r) => add(new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), P.neon(col)), x, 2.55 + y, fz);
  dot(P.COL.ice, 1.5, 0.7, 0.13);
  dot(P.COL.pinkHi, -1.5, 0.6, 0.11);
  dot(P.COL.gold, 0.4, -0.6, 0.12);
  const splat = add(new THREE.Mesh(new THREE.OctahedronGeometry(0.3, 0), P.emis(P.COL.crimson, 0.85)), -0.9, 2.15, fz - 0.02);
  return g;
}

function build_dinoeggs(THREE, P) {
  const g = new THREE.Group();
  const C = P.COL;
  const add = (m) => { g.add(m); return m; };
  const ring = add(new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.5, 8, 16), P.matte(0x3a2412)));
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.5;
  const re = P.edges(ring, C.goldDeep); re.position.copy(ring.position); re.rotation.copy(ring.rotation); add(re);
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * Math.PI * 2;
    const tw = add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.15, 6), P.matte(i % 3 ? 0x5a3416 : 0x6b421d)));
    tw.position.set(Math.cos(a) * 1.5, 0.55 + (i % 2) * 0.12, Math.sin(a) * 1.5);
    tw.rotation.x = Math.PI / 2; tw.rotation.y = a; tw.rotation.z = 0.6;
  }
  const gr = add(new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.055, 6, 22), P.neon(C.cyan)));
  gr.rotation.x = Math.PI / 2; gr.position.y = 0.82;
  const cols = [C.cyan, C.purple, C.gold, C.cyan, C.purple];
  const spots = [[0, 0], [0.78, 0.12], [-0.72, 0.28], [0.22, -0.78], [-0.32, -0.72]];
  for (let n = 0; n < 5; n++) {
    const e = add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), P.emis(cols[n], 0.9)));
    e.scale.set(1, 1.5, 1); e.position.set(spots[n][0], 0.98, spots[n][1]);
    e.rotation.z = (Math.random() - 0.5) * 0.5; e.rotation.x = (Math.random() - 0.5) * 0.4;
    const eo = P.edges(e, C.white); eo.position.copy(e.position); eo.rotation.copy(e.rotation); eo.scale.copy(e.scale); add(eo);
    for (let k = 0; k < 8; k++) {
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06, 0), P.neon(k % 2 ? C.gold : C.ice));
      const ph = Math.acos(1 - 2 * Math.random()), th = Math.random() * Math.PI * 2;
      s.position.set(0.5 * Math.sin(ph) * Math.cos(th), 0.5 * Math.cos(ph), 0.5 * Math.sin(ph) * Math.sin(th));
      e.add(s);
    }
  }
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2 + 0.3;
    const sh = add(new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.7, 6), P.neon(C.ice)));
    sh.position.set(Math.cos(a) * 1.35, 0.95, Math.sin(a) * 1.35);
    sh.rotation.z = Math.cos(a) * 0.3; sh.rotation.x = -Math.sin(a) * 0.3;
  }
  return g;
}

window.__BUILDERS = {
  grapes: build_grapes,
  pyramid: build_pyramid,
  goldchain: build_goldchain,
  throne: build_throne,
  bricks: build_bricks,
  crown: build_crown,
  clown: build_clown,
  icegold: build_icegold,
  whip: build_whip,
  gates: build_gates,
  velvetrope: build_velvetrope,
  soldier: build_soldier,
  pinkyring: build_pinkyring,
  jet: build_jet,
  flask: build_flask,
  akcrate: build_akcrate,
  sneaker: build_sneaker,
  petals: build_petals,
  billboard: build_billboard,
  dinoeggs: build_dinoeggs,
};
