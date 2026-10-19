const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/v2/draw-C1_6vmHt.js",
      "assets/v2/camera-Bx1BB7pZ.js",
      "assets/v2/colour-BEuTumU6.js",
      "assets/v2/map-BaINi0Kr.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-qlgyTAkD.js";
import { K as t } from "./rules-DxwvjuIt.js";
import { a as n, o as r, s as i, t as a } from "./camera-Bx1BB7pZ.js";
import "./format-Cc5GoqRm.js";
import { a as o, i as s, n as c, r as l } from "./map-BaINi0Kr.js";
import { a as u, i as d, n as f, r as p, t as m } from "./colour-BEuTumU6.js";
var h = 180,
  g = 240,
  _ = (e, t) => Math.max(1, Math.round(e * t)),
  v = (e, t, n, r, i) => ({
    dpr: n,
    devicePx: e,
    cssPx: e / n,
    krillDevicePx: t,
    krillCssPx: t / n,
    w: Math.ceil((r * n) / e),
    h: Math.ceil((i * n) / e),
  }),
  y = (e, t, n, r = 1) => {
    if (n) {
      let n = _(1.5, r),
        i = _(2, r);
      for (; i > n && v(i, 1, r, e, t).w < h;) --i;
      return v(i, _(3, r), r, e, t);
    }
    let i = _(4, r),
      a = v(i, i, r, e, t).w < g ? _(3, r) : i;
    return v(a, a, r, e, t);
  },
  b = 0.18,
  x = 0.42,
  S = 0.66,
  C = (e) => {
    if (!(e > 0 && e < 1)) return null;
    let t = Math.round(6 * Math.sin(Math.PI * e)),
      n = t === 0 ? 0 : -t;
    return e < b
      ? { pose: `idle0`, dy: n, flip: !1 }
      : e < x
        ? { pose: `upside`, dy: n, flip: !1 }
        : e < S
          ? { pose: `upside`, dy: n, flip: !0 }
          : { pose: `idle0`, dy: n, flip: !0 };
  },
  w = (e) => [...e].reverse(),
  T = [2e3, 8e3, 15e3, 1e5],
  E = (e) => {
    let t = 0;
    for (let n of T) n <= e && (t += 1);
    return t;
  },
  D = 0.1,
  O = 3,
  k = (e, n) => (e === null ? 0 : t[e] * n),
  A = (e) => {
    let t = new Map(),
      a = new Map(),
      u = 0,
      d = `idle`,
      f = 0,
      p = 0,
      m = null,
      h = 0,
      g = null,
      _ = null,
      v = 0,
      y = null,
      b = [],
      x = [],
      S = null,
      C = null,
      w = 0,
      T = (e, n) => {
        for (let r of t.get(e) ?? []) r(n);
      },
      A = () => a.get(`you`) ?? 0,
      j = (e) => a.get(e) ?? 0,
      M = () => {
        for (let e of b) e.y = e.y1;
      },
      N = () => {
        for (let e of b) ((e.y = s(j(e.key))), (e.y0 = e.y), (e.y1 = e.y));
      },
      P = () => {
        ((C = null), (w = 0));
      },
      F = () => {
        let e = d === `rising`,
          t = (t) => (e ? l(t.y) : j(t.key));
        return (
          (x.length === b.length &&
            b.every((e, n) => {
              let r = x[n];
              return (
                r !== void 0 &&
                r.key === e.key &&
                r.name === e.name &&
                r.team === e.team &&
                r.y === e.y &&
                r.points === t(e)
              );
            })) ||
            (x = b.map((e) => ({
              key: e.key,
              name: e.name,
              team: e.team,
              y: e.y,
              points: t(e),
            }))),
          x
        );
      },
      I = (e, t) => {
        let n = E(e);
        n <= v ||
          ((v = n),
          !(y !== null && t - y < 1500) &&
            ((y = t), T(`cue`, { cue: `gear`, tier: n })));
      },
      ee = (t, n) => {
        (I(c(A()), n),
          (u = t.y1),
          M(),
          (f = 0),
          (p = 0),
          (h = 0),
          (d = `held`),
          t.band !== null &&
            t.band >= O &&
            !e.reducedMotion &&
            ((C = n), (w = 0)),
          T(`landed`, { band: t.band }),
          T(`card`, { band: t.band }),
          T(`cue`, { cue: `land`, band: t.band }));
      },
      L = () => {
        P();
        let e = _;
        e &&
          ((_ = null),
          (u = e.y1),
          M(),
          (f = 0),
          (p = 0),
          (h = 0),
          (d = `idle`),
          T(`done`, { band: e.band }),
          e.resolve());
      };
    return {
      setMode(e, t) {
        (L(),
          (y = null),
          (e === `home` || e === `landing`) &&
            ((a = new Map()), (u = 0), (m = null), (S = null)),
          (b = t
            .filter((e) => e.key !== `you`)
            .map((e) => ({
              key: e.key,
              name: e.name,
              team: e.team,
              y: 0,
              y0: 0,
              y1: 0,
            }))),
          N());
      },
      setScores(e) {
        ((a = new Map(Object.entries(e))), _ || ((u = s(A())), N()));
      },
      reveal(t) {
        (L(), (v = E(c(A()))));
        let n = t.you.band,
          r = A(),
          o = k(n, t.weight),
          l = r + o,
          g = s(r),
          y = s(l);
        a.set(`you`, l);
        for (let e of b) e.y0 = s(j(e.key));
        for (let e of t.friends)
          a.set(e.key, (a.get(e.key) ?? 0) + k(e.band, t.weight));
        for (let e of b) ((e.y = e.y0), (e.y1 = s(j(e.key))));
        n !== null &&
          n >= O &&
          (S === null || o >= S.gain) &&
          (S = { moment: { round: t.round, band: n, y0: g, y1: y }, gain: o });
        let x = n === null,
          C = x ? 600 : i(y - g);
        (e.reducedMotion && (C = 0),
          (u = g),
          (f = 0),
          (p = 0),
          (h = 0),
          (d = `rising`),
          (m = n));
        let w = new Promise((t) => {
          _ = {
            band: n,
            y0: g,
            y1: y,
            t0: e.now(),
            ms: C,
            hop: !x && y - g < 0.3,
            miss: x,
            skip: !1,
            resolve: t,
          };
        });
        return (
          T(
            `cue`,
            n === null
              ? { cue: `miss`, reason: t.you.reason ?? `timeout` }
              : { cue: `rise`, band: n, ms: C },
          ),
          w
        );
      },
      fastForward() {
        _ && d === `rising` && (_.skip = !0);
      },
      next() {
        d === `held` && L();
      },
      tick(t) {
        if (C !== null) {
          let e = (t - C) / 720;
          e >= 1 ? P() : (w = Math.max(0, e));
        }
        let i = _,
          a = g;
        if (((g = t), !i || d !== `rising`)) return;
        let o = i.ms > 0 ? Math.max(0, t - i.t0) / i.ms : 1;
        if (i.skip || o >= 1) {
          ee(i, t);
          return;
        }
        let s = u,
          m = r(o);
        u = i.y0 + (i.y1 - i.y0) * m;
        for (let e of b) e.y = e.y0 + (e.y1 - e.y0) * m;
        I(c(l(u)), t);
        let v = a === null ? 0 : t - a;
        ((h =
          v > 0 && !e.reducedMotion
            ? Math.min(1, Math.abs(u - s) / (v / 1e3) / (n * 2))
            : 0),
          (f = i.hop ? D * Math.sin(Math.PI * o) : 0),
          (p = i.miss ? Math.sin(Math.PI * o) : 0));
      },
      view() {
        let e = d === `rising` ? l(u) : A();
        return {
          y: u,
          points: e,
          altitude: c(e),
          zone: o(e),
          phase: d,
          hop: f,
          slump: p,
          band: m,
          speed: h,
          friends: F(),
          cheer: w,
        };
      },
      moment: () => S?.moment ?? null,
      on(e, n) {
        let r = t.get(e) ?? new Set();
        t.set(e, r);
        let i = n;
        return (
          r.add(i),
          () => {
            r.delete(i);
          }
        );
      },
    };
  },
  j = {
    N: u(`#0E1330`),
    S: u(`#2B3670`),
    G: u(`#FFC83D`),
    Y: u(`#FFE7A3`),
    g: u(`#F2A900`),
    W: u(`#F5F7FF`),
    M: u(`#3FE0C5`),
    m: u(`#20A890`),
    C: u(`#FF7A59`),
    c: u(`#D6533A`),
    V: u(`#9C7BFF`),
    v: u(`#6F55D6`),
  },
  M = [
    `.NNN...........`,
    `NWMMN.....NNN..`,
    `NMMMNNNN.NWVVN.`,
    `NMMmNWCCNNVVVN.`,
    `.NmNNCCCNNVVvN.`,
    `..N.NCCcN.NvN..`,
    `..S..NcN...N...`,
    `...S..N....S...`,
    `....S.S...S....`,
  ],
  N = [
    `....NNNNNNNNNN.`,
    `...NYYYGGGGGGGN`,
    `..NYGGgGGgGWNGN`,
    `.NGgGGgGGgGNNGN`,
    `NGgNNNNNNNGGGN.`,
  ],
  P = {
    b: {
      idle: [
        [
          ...M,
          `.....SS..S..N.N`,
          `......SSS...NN.`,
          `.......S...NN..`,
          ...N,
          `NGN...M.M.MNN..`,
          `NgN............`,
          `.NCN...........`,
          `..NCCN.........`,
          `...NN..........`,
        ],
        [
          ...M,
          `.....SS..S...N.`,
          `......SSS...N.N`,
          `.......S...NN..`,
          ...N,
          `NGN..M.M.M.NN..`,
          `NgN............`,
          `.NCN...........`,
          `..NCCN.........`,
          `..NNN..........`,
        ],
      ],
      lean: [
        `....NNN.NNN....`,
        `.NNNWCCNWVVN...`,
        `NWMNCCCNVVVN...`,
        `NMMNCCcNVVvN...`,
        `NMMmNcN.NvN....`,
        `.NmN.N...N.....`,
        `..N..S...S.....`,
        `..S...S..S.....`,
        `...SS.S.S......`,
        `.....SSSS......`,
        `......SSS......`,
        `.......S...NNNN`,
        ...N,
        `NGN..M.M.M.NN..`,
        `NgN............`,
        `.NCN...........`,
        `..NCCN.........`,
        `...NN..........`,
      ],
      slump: [
        `...............`,
        `...............`,
        `...............`,
        `..NNN.....NNN..`,
        `.NMmMNNNNNVvVN.`,
        `.NMMmNCcCNVVvN.`,
        `..NmNNCCcNNvN..`,
        `...N..NcN..N...`,
        `...S...N...S...`,
        `....SS.S.SS....`,
        `......SSS......`,
        `.......S.NNNN..`,
        `....NNNNNNNNNN.`,
        `...NYYYGGGGGGGN`,
        `..NYGGgGGgGGGGN`,
        `.NGgGGgGGgGNNGN`,
        `NGgNNNNNNNGGGN.`,
        `NGN...M.M.MNN..`,
        `NgN............`,
        `.NCN...........`,
        `..NCCN.........`,
        `...NN..........`,
      ],
      palette: j,
    },
  },
  F = P.b.idle[0] ?? [],
  I = j,
  ee = 5e3,
  L = 2,
  te = 8400,
  ne = 2,
  re = 450,
  ie = 0.3,
  ae = 2,
  R = [2, -2, 2, -2, 1, -1],
  z = 400,
  oe = { pose: `idle0`, dx: 0, dy: 0, flip: !1 },
  B = (e) => {
    let t = Math.round(e);
    return t === 0 ? 0 : t;
  },
  se = (e, t) => {
    if (t === null) return 0;
    let n = e - t;
    return n < 0 || n >= z ? 0 : (R[Math.floor((n / z) * R.length)] ?? 0);
  },
  V = (e, t, n, r) => {
    if (n) return oe;
    let i = (2 * Math.PI * t) / te,
      a = Math.cos(i) < 0,
      o = B(ne * Math.sin(i)) + se(t, r);
    if (e.slump > 0)
      return { pose: `slump`, dx: o, dy: B(ae * e.slump), flip: a };
    if (e.speed > ie || e.hop > 0)
      return { pose: `lean`, dx: o, dy: 0, flip: a };
    let s = (1 - Math.cos((2 * Math.PI * t) / ee)) / 2;
    return {
      pose: Math.floor(t / re) % 2 == 0 ? `idle0` : `idle1`,
      dx: o,
      dy: B(-L * s),
      flip: a,
    };
  },
  ce = 0.5,
  le = 0.25,
  ue = (e, t) => {
    let [n = 0, r = 0, i = 0] = new Uint8Array(
      new Uint32Array([e[t] ?? 0]).buffer,
    );
    return m([n, r, i]);
  },
  de = (e, t) => {
    let n = p(t);
    return {
      ...e,
      G: u(t),
      Y: u(m(f(n, p(ue(e, `W`)), ce))),
      g: u(m(f(n, p(ue(e, `N`)), le))),
    };
  },
  H = [0.22, 0.78, 0.08, 0.36, 0.64],
  fe = [`f1`, `f2`, `f3`, `f4`, `f5`],
  pe = 1300,
  me = -0.05,
  he = 1.05,
  ge = 96,
  _e = 4,
  ve = 3,
  ye = (() => {
    let e = [...H, 0.5].sort((e, t) => e - t);
    return Math.min(...e.slice(1).map((t, n) => t - (e[n] ?? 0)));
  })(),
  be = { speed: 0, slump: 0, hop: 0 },
  U = P.b,
  W = F[0]?.length ?? 0,
  G = F.length,
  K = { idle0: F, idle1: U.idle[1] ?? F, lean: U.lean, slump: U.slump },
  xe = (e) => [...e].reverse().join(``),
  Se = (e, t, n, r) => {
    let i = e.getContext(`2d`);
    if (!i) return;
    let a = n ? K[t].map(xe) : K[t],
      o = new d(W, G);
    (o.sprite(0, 0, a, r),
      i.putImageData(
        new ImageData(new Uint8ClampedArray(o.data.buffer), o.w, o.h),
        0,
        0,
      ));
  },
  Ce = (e, t, n) => {
    let r = new Map(),
      i = new Map(),
      o = null,
      s = 0,
      c = [],
      l = (t) => {
        let n = i.get(t);
        if (n) return n;
        let r = getComputedStyle(e).getPropertyValue(`--team-${t}`).trim(),
          a = { hex: r, palette: r ? de(I, r) : I };
        return (i.set(t, a), a);
      },
      u = (e) => {
        o &&
          ((e.krill.style.width = `${(W * o.devicePx) / o.dpr}px`),
          (e.krill.style.height = `${(G * o.devicePx) / o.dpr}px`),
          (e.tag.style.maxWidth = `${Math.min(ge, Math.floor(ye * s) - _e)}px`));
      },
      d = (n) => {
        let i = e.ownerDocument,
          a = i.createElement(`canvas`);
        ((a.className = `climb-friend`),
          (a.dataset.key = n.key),
          (a.width = W),
          (a.height = G));
        let o = i.createElement(`span`);
        ((o.className = `climb-friend-tag`),
          e.insertBefore(a, t),
          e.insertBefore(o, t));
        let s = {
          krill: a,
          tag: o,
          painted: ``,
          colour: ``,
          at: ``,
          tagAt: ``,
        };
        return (r.set(n.key, s), u(s), s);
      },
      f = (e) => {
        (e.krill.remove(), e.tag.remove());
      },
      p = (e, t, r, i, a) => {
        let o = Math.max(0, fe.indexOf(t.team)),
          c = V(be, a + o * pe, n.reducedMotion, null),
          u = l(t.team),
          d = `${c.pose}${c.flip ? `<` : `>`}${u.hex}`;
        (d !== e.painted &&
          ((e.painted = d), Se(e.krill, c.pose, c.flip, u.palette)),
          u.hex !== e.colour &&
            ((e.colour = u.hex),
            e.tag.style.setProperty(`--friend-colour`, u.hex)));
        let f = r.devicePx,
          p = Math.round((H[o] ?? H[0]) * s * r.dpr - (W * f) / 2),
          m = Math.round(i * r.dpr - (G * f) / 2),
          h = `translate(${(p + c.dx * f) / r.dpr}px, ${(m + c.dy * f) / r.dpr}px)`;
        h !== e.at && ((e.at = h), (e.krill.style.transform = h));
        let g = `translate(${(p + (W * f) / 2) / r.dpr}px, ${(m - ve * f) / r.dpr}px) translate(-50%, -100%)`;
        g !== e.tagAt && ((e.tagAt = g), (e.tag.style.transform = g));
      };
    return {
      place(e, t, n) {
        for (let i of e.friends) {
          let s = r.get(i.key) ?? d(i);
          s.tag.textContent !== i.name && (s.tag.textContent = i.name);
          let c = a + e.y - i.y,
            l = c < me || c > he;
          (s.krill.hidden !== l && ((s.krill.hidden = l), (s.tag.hidden = l)),
            !l && o && p(s, i, o, c * t, n));
        }
        if (e.friends !== c) {
          c = e.friends;
          for (let [e, t] of r)
            c.some((t) => t.key === e) || (f(t), r.delete(e));
        }
      },
      fit(e, t) {
        ((o = e), (s = t));
        for (let e of r.values()) u(e);
      },
      palette: (e) => l(e).palette,
      dispose() {
        for (let e of r.values()) f(e);
        (r.clear(), (c = []));
      },
    };
  },
  q = { w: 180, h: 225, px: 6, krillPx: 9 },
  J = 0.56,
  we = 0.8,
  Y = 0.61,
  X = 0.52,
  Te = 0.7,
  Ee = 5,
  De = P.b,
  Oe = { idle0: F, lean: De.lean },
  ke = F[0]?.length ?? 0,
  Ae = F.length,
  je = (e, t, n) => ({
    y: e + J - a,
    speed: t,
    krill: [{ key: `you`, team: `you`, row: J, x: 0.5, pose: n }],
  }),
  Me = (e) => {
    let t = e.friends.slice(0, Ee);
    if (t.length === 0) return null;
    let n = [
        ...t.map((e, t) => ({
          key: e.key,
          team: e.team,
          y: e.y,
          x: H[t] ?? 0.5,
        })),
        { key: `you`, team: `you`, y: e.y, x: 0.5 },
      ],
      r = n.map((e) => e.y),
      i = Math.max(...r),
      o = Math.min(...r),
      s = o + (i - o) / 2,
      c = Te - X,
      l = (e) => (i - o <= c ? Y + s - e : X + ((i - e) / (i - o)) * c);
    return {
      y: s + Y - a,
      speed: 0,
      krill: n.map((e) => ({
        key: e.key,
        team: e.team,
        row: l(e.y),
        x: e.x,
        pose: `idle0`,
      })),
    };
  },
  Ne = (e, t, n) => {
    switch (e) {
      case `home`:
        return je(t.y, 0, `idle0`);
      case `moment`:
        return n ? je(n.y0 + (n.y1 - n.y0) / 2, we, `lean`) : null;
      case `versus`:
        return Me(t);
      default:
        return null;
    }
  },
  Pe = (e, t, n, r, i) => {
    let a = Math.max(0, r.x),
      o = Math.min(t, r.x + r.k);
    if (!(o <= a))
      for (let s = Math.max(0, r.y); s < Math.min(n, r.y + r.k); s += 1)
        e.fill(i, s * t + a, s * t + o);
  },
  Fe = (e, t, n) => {
    let { px: r } = q,
      i = q.w * r,
      a = q.h * r,
      o = document.createElement(`canvas`);
    ((o.width = i), (o.height = a));
    let s = o.getContext(`2d`);
    if (!s) return null;
    let c = s.createImageData(i, a),
      l = new Uint32Array(c.data.buffer, c.data.byteOffset, i * a);
    for (let t = 0; t < q.h; t += 1) {
      let n = t * r * i;
      for (let i = 0; i < q.w; i += 1)
        l.fill(e[t * q.w + i] ?? 0, n + i * r, n + (i + 1) * r);
      for (let e = 1; e < r; e += 1) l.copyWithin(n + e * i, n, n + i);
    }
    for (let e of t.krill) {
      let t = e.team === `you`,
        o = t ? q.krillPx : r,
        s = t ? De.palette : n(e.team),
        c = Math.round(e.x * i - (ke * o) / 2),
        u = Math.round(e.row * a - (Ae * o) / 2);
      for (let [t, n] of Oe[e.pose].entries())
        for (let [e, r] of [...n].entries()) {
          let n = r === `.` ? void 0 : s[r];
          n !== void 0 && Pe(l, i, a, { x: c + e * o, y: u + t * o, k: o }, n);
        }
    }
    return (s.putImageData(c, 0, 0), o);
  },
  Ie = () => {
    let e = () => {};
    return {
      promise: new Promise((t) => {
        e = t;
      }),
      resolve: e,
    };
  },
  Le = (e) =>
    typeof Worker < `u` &&
    typeof OffscreenCanvas < `u` &&
    typeof e.transferControlToOffscreen == `function`,
  Re = (e, t, n) => {
    let r = new Worker(
        new URL(`/assets/v2/worker-DqovWpcf.js`, `` + import.meta.url),
        { type: `module` },
      ),
      i = (e, t = []) => {
        r.postMessage(e, t);
      },
      a;
    try {
      a = e.transferControlToOffscreen();
    } catch (e) {
      throw (r.terminate(), e);
    }
    let o = new Map(),
      s = 0,
      c = (e) => {
        for (let t of o.values())
          t.reject(Error(`@repo/climb: capture dropped, ${e}`));
        o.clear();
      },
      l = !1,
      u = (e) => {
        l ||
          ((l = !0),
          c(`the worker failed`),
          n(Error(`@repo/climb: the scene's worker failed (${e.type})`)));
      };
    (r.addEventListener(`error`, u), r.addEventListener(`messageerror`, u));
    let d = Ie();
    return (
      r.addEventListener(`message`, (e) => {
        let t = e.data;
        if (t.type === `drawn`) {
          d.resolve();
          return;
        }
        let n = o.get(t.id);
        (o.delete(t.id),
          t.type === `captured`
            ? n?.resolve(new Uint32Array(t.pixels))
            : n?.reject(Error(`@repo/climb: capture not drawn, ${t.reason}`)));
      }),
      i({ type: `attach`, canvas: a, grid: t }, [a]),
      {
        firstFrame: d.promise,
        frame: (e) => i({ type: `frame`, view: e }),
        resize: (e) => i({ type: `resize`, grid: e }),
        dispose: () => {
          (i({ type: `detach` }),
            r.terminate(),
            c(`the renderer was disposed`));
        },
        capture: (e, t, n) =>
          new Promise((r, a) => {
            if (l) {
              a(Error(`@repo/climb: capture dropped, the worker failed`));
              return;
            }
            ((s += 1),
              o.set(s, { resolve: r, reject: a }),
              i({ type: `capture`, id: s, view: e, w: t, h: n }));
          }),
      }
    );
  },
  ze = async (t, n) => {
    let { createPainter: r, drawFrame: i } = await e(
        async () => {
          let { createPainter: e, drawFrame: t } = await import(
            `./draw-C1_6vmHt.js`
          );
          return { createPainter: e, drawFrame: t };
        },
        __vite__mapDeps([0, 1, 2, 3]),
      ),
      a = r(t, n),
      o = Ie();
    return {
      firstFrame: o.promise,
      frame: (e) => {
        (a?.frame(e), o.resolve());
      },
      resize: (e) => a?.resize(e),
      dispose: () => {},
      capture: (e, t, n) =>
        new Promise((r) => {
          let a = new d(t, n);
          (i(a, e), r(a.data));
        }),
    };
  },
  Be = async (e, t, n) => {
    if (Le(e))
      try {
        return Re(e, t, n);
      } catch {}
    return ze(e, t);
  },
  Z = P.b,
  Q = F[0]?.length ?? 0,
  $ = F.length,
  Ve = /[^.]/,
  He = (() => {
    let e = $;
    for (; e > 0 && !Ve.test(F[e - 1] ?? ``);) --e;
    return e;
  })(),
  Ue = V({ speed: 0, slump: 1, hop: 0 }, 0, !1, null).dy,
  We = {
    idle0: F,
    idle1: Z.idle[1] ?? F,
    lean: Z.lean,
    slump: Z.slump,
    upside: w(F),
  },
  Ge = (e) => [...e].reverse().join(``),
  Ke = (e, t, n) => {
    let r = e.getContext(`2d`);
    if (!r) return;
    let i = n ? We[t].map(Ge) : We[t],
      a = new d(Q, $);
    (a.sprite(0, 0, i, Z.palette),
      r.putImageData(
        new ImageData(new Uint8ClampedArray(a.data.buffer), a.w, a.h),
        0,
        0,
      ));
  },
  qe = (e) => {
    let { canvas: t, krill: n, coarse: r } = e;
    if (!(e.width > 0 && e.height > 0))
      throw Error(
        `@repo/climb: the stage needs a positive size, got ${e.width}x${e.height}`,
      );
    let i = e.width,
      o = e.height,
      s = y(i, o, r, e.pixelRatio),
      c = A({ now: () => performance.now(), reducedMotion: e.reducedMotion }),
      l = new Set(),
      u = null,
      d = 0,
      f = !1,
      p = !1,
      m = null,
      h = `idle0>`,
      g = ``,
      _ = 0,
      v = n.closest(`.climb-stage`) ?? n.parentElement,
      b = n.parentElement
        ? Ce(n.parentElement, n, { reducedMotion: e.reducedMotion })
        : null,
      x = (e) => b?.palette(e) ?? Z.palette,
      S = new Map(),
      w = 0,
      T = (e) => {
        let t = Q * s.krillDevicePx,
          r = `${(_ + e * s.krillDevicePx + t / 2) / s.dpr}px`;
        r !== g && ((g = r), (n.style.left = r));
      },
      E = () => {
        ((t.style.width = `${s.w * s.cssPx}px`),
          (t.style.height = `${s.h * s.cssPx}px`),
          (t.style.imageRendering = `pixelated`));
        let e = s.krillDevicePx;
        ((n.style.width = `${(Q * e) / s.dpr}px`),
          (n.style.height = `${($ * e) / s.dpr}px`),
          (n.style.imageRendering = `pixelated`),
          (n.style.position = `absolute`),
          (n.style.top = `0`),
          (_ = Math.round((i * s.dpr - Q * e) / 2)),
          T(0));
        let r = Math.round(a * o * s.dpr - ($ * e) / 2);
        (v?.style.setProperty(
          `--climb-krill-foot`,
          `${(r + (He + Ue) * e) / s.dpr}px`,
        ),
          b?.fit(s, i));
      };
    ((n.width = Q), (n.height = $), E(), Ke(n, `idle0`, !1));
    let D = (t, r) => {
        let i = C(t.cheer),
          c = i ? { ...i, dx: 0 } : V(t, r, e.reducedMotion, m),
          l = `${c.pose}${c.flip ? `<` : `>`}`;
        (l !== h && ((h = l), Ke(n, c.pose, c.flip)), T(c.dx));
        let u = s.krillDevicePx,
          d = (a - t.hop) * o * s.dpr,
          f = Math.round(d - ($ * u) / 2) + c.dy * u;
        n.style.transform = `translate(-50%, ${f / s.dpr}px)`;
      },
      O = (t) => ({
        y: t.y,
        t: performance.now(),
        speed: t.speed,
        reduced: e.reducedMotion,
      }),
      k = () => {
        let e = performance.now();
        c.tick(e);
        let t = c.view();
        (u?.frame(O(t)), D(t, e), b?.place(t, o, e));
        for (let e of l) e(t);
      },
      j = () => {
        f && (k(), (d = requestAnimationFrame(j)));
      },
      M = () => {
        f || p || ((f = !0), (d = requestAnimationFrame(j)));
      },
      N = () => {
        ((f = !1), cancelAnimationFrame(d));
      },
      P = s,
      F = new Promise((n, r) => {
        let i = !1;
        Be(t, P, (t) => {
          p || (i ? e.onFail?.(`worker`) : r(t));
        })
          .then((e) => {
            if (p) {
              e.dispose();
              return;
            }
            return (
              (u = e),
              s !== P && e.resize(s),
              e.frame(O(c.view())),
              e.firstFrame
            );
          })
          .then(() => {
            ((i = !0), n());
          }, r);
      });
    return (
      M(),
      {
        ready: F,
        setMode: (e, t, n) => c.setMode(e, t, n),
        setScores: (e) => c.setScores(e),
        reveal: (e) => c.reveal(e),
        fastForward: () => c.fastForward(),
        next: () => c.next(),
        refused: () => {
          m = performance.now();
        },
        setInsets: () => {},
        async captureReady(e) {
          w += 1;
          let t = w;
          (S.delete(e), await F.catch(() => {}));
          let n = Ne(e, c.view(), c.moment()),
            r = u;
          if (!n || !r) return;
          let i = { y: n.y, t: performance.now(), speed: n.speed, reduced: !1 },
            a = await r.capture(i, q.w, q.h).catch(() => null),
            o = S.get(e);
          a && (!o || o.ask < t) && S.set(e, { ask: t, plan: n, scene: a });
        },
        captureCanvas(e) {
          let t = S.get(e);
          return t ? Fe(t.scene, t.plan, x) : null;
        },
        moment() {
          let e = c.moment();
          return e ? { round: e.round, band: e.band } : null;
        },
        resize(e, t, n) {
          ((i = e), (o = t), (s = y(e, t, r, n)), E(), u?.resize(s));
        },
        pause: N,
        resume: M,
        dispose() {
          p ||
            ((p = !0), N(), u?.dispose(), (u = null), b?.dispose(), l.clear());
        },
        on: (e, t) => c.on(e, t),
        onView(e) {
          return (
            l.add(e),
            () => {
              l.delete(e);
            }
          );
        },
      }
    );
  };
export { qe as createClimbStage };
