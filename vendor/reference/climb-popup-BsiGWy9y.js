import { t as e } from "./compiler-runtime-BybR60WX.js";
import { t } from "./jsx-runtime-D_h4s5mO.js";
import { G as n, r } from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import { n as i } from "./format-Cc5GoqRm.js";
import { a, n as o, o as s } from "./map-BaINi0Kr.js";
import "./audio-BdxWxAxT.js";
import "./icons-DDwzIPdf.js";
import { a as c, b as l, h as u } from "./copy-CMIldnKw.js";
import { t as d } from "./height-CWSuyi2y.js";
import { a as f, s as p } from "./poster-icons-C6vhkpTx.js";
import m, {
  a as h,
  i as g,
  n as ee,
  o as te,
  r as _,
  t as v,
} from "./result-popup-CyQEZrMk.js";
var ne = e(),
  y = 1080,
  b = 1350,
  x = `#F5F7FF`,
  S = `#CDD2EE`,
  C = `#FFC83D`,
  w = `#3FE0C5`,
  T = `#1A2250`,
  E = `#0E1330`,
  D = `rgba(14,19,48,.92)`,
  O = `rgba(26,34,80,.94)`,
  k = `rgba(205,210,238,.45)`,
  A = `'Pixelify Sans'`,
  j = 64,
  M = 1016,
  N = 952,
  P = 560,
  F = 8,
  I = [
    (e) => e % 4 != 1,
    (e) => e % 2 == 0,
    (e) => e % 2 == 1,
    (e) => e % 4 == 3,
  ],
  L = 6,
  R = { y: 1012, h: 48, cell: 30, gap: 10, pad: 12 },
  z = { h: 56, cell: 20, gap: 6, per: 10 },
  B = 1080,
  V = { x: 811, y: 1112, size: 205 },
  H = [16, 24, 32, 32, 32, 32, 24, 16],
  U = {
    w: 21,
    h: 21,
    blocks: [
      [9, 0, 3, 21],
      [0, 9, 21, 3],
      [6, 6, 9, 9],
    ],
  },
  W = {
    w: 24,
    h: 24,
    blocks: [
      [8, 0, 16, 4],
      [20, 4, 4, 12],
      [16, 4, 4, 4],
      [12, 8, 4, 4],
      [8, 12, 4, 4],
      [4, 16, 4, 4],
      [0, 20, 4, 4],
    ],
  },
  G = (e, t) => `${e} ${t}px ${A}`;
function K(e, t) {
  `letterSpacing` in e && (e.letterSpacing = t);
}
function q(e, t, n, r) {
  let i = n;
  for (let [n, a] of t)
    ((e.fillStyle = a), e.fillText(n, i, r), (i += e.measureText(n).width));
}
function J(e, t, n, r) {
  let i = n;
  for (e.font = G(600, i); e.measureText(t).width > r && i > 48;)
    ((i -= 4), (e.font = G(600, i)));
}
function Y(e, t, n) {
  if (e.measureText(t).width <= n) return [t];
  let r = t.split(` `),
    i = r.length - 1;
  for (; i > 1 && e.measureText(r.slice(0, i).join(` `)).width > n;) --i;
  return [r.slice(0, i).join(` `), g(e, r.slice(i).join(` `), n)];
}
function X(e, t, n, r, i, a) {
  ((e.fillStyle = a),
    e.fillRect(t + L, n, r - 2 * L, L),
    e.fillRect(t, n + L, r, i - 2 * L),
    e.fillRect(t + L, n + i - L, r - 2 * L, L));
}
function Z(e, t, n, r, i, a, o) {
  let s = o ? o.w + 12 : 0;
  e.font = G(600, 30);
  let c = Math.round(e.measureText(t).width) + 44 + s;
  if ((X(e, n, r - 58 / 2, c, 58, i), (e.fillStyle = a), o)) {
    let t = Math.round(r - o.h / 2);
    for (let [r, i, a, s] of o.blocks) e.fillRect(n + 22 + r, t + i, a, s);
  }
  ((e.textBaseline = `middle`),
    e.fillText(t, n + 22 + s, r + 2),
    (e.textBaseline = `alphabetic`));
}
function re(e) {
  ((e.fillStyle = D), e.fillRect(0, 0, y, P));
  for (let [t, n] of I.entries())
    for (let r = 0; r < y / F; r += 1)
      n(r) && e.fillRect(r * F, P + t * F, F, F);
}
function ie(e, t) {
  ((e.fillStyle = C),
    e.fillRect(j, 80, 32, 32),
    (e.textBaseline = `middle`),
    (e.font = G(600, 44)),
    (e.fillStyle = x),
    e.fillText(`OpenNoillirk`, 112, 98),
    (e.font = G(500, 26)),
    (e.fillStyle = w),
    (e.textAlign = `right`),
    K(e, `3px`),
    e.fillText(t, M, 98),
    K(e, `0px`),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`));
}
function ae(e, t) {
  (J(e, t.altitude, 168, N),
    (e.fillStyle = C),
    e.fillText(t.altitude, 58, 300),
    (e.font = G(500, 46)),
    (e.fillStyle = w),
    e.fillText(g(e, t.zone, N), j, 372),
    Z(e, t.title, j, 446, C, E, U),
    t.percentile && Z(e, t.percentile, j, 516, T, w, W));
}
function oe(e, t) {
  ((e.font = G(500, 26)), (e.fillStyle = w));
  for (let [n, r] of Y(
    e,
    `Q${t.round} · ${t.prompt.toUpperCase()}`,
    N,
  ).entries())
    e.fillText(r, j, 176 + n * 34);
  (J(e, t.answer, 156, 960),
    (e.fillStyle = x),
    e.fillText(g(e, t.answer, 960), 58, 356));
  let r = n[t.band];
  (Z(
    e,
    `${r?.name.toUpperCase() ?? ``} · +${t.points}`,
    j,
    440,
    r?.color ?? C,
    E,
  ),
    (e.font = G(500, 40)),
    q(
      e,
      [
        [`Took me to `, S],
        [t.altitude, C],
      ],
      j,
      528,
    ));
}
function se(e, t, n) {
  let r = n ? `today's OpenNoillirk` : `OpenNoillirk Unlimited`,
    [i, a] = {
      win: [`I climbed past `, ` on ${r}.`],
      loss: [``, ` climbed higher on ${r}.`],
      tie: [`Level with `, ` on ${r}.`],
    }[t.outcome],
    o = g(e, t.name, N - e.measureText(`${i}${a}`).width);
  return [
    [i, S],
    [o, w],
    [a, S],
  ].filter(([e]) => e !== ``);
}
function ce(e, t, n) {
  let r = [
    [t.altitude, C],
    [` vs `, x],
    [n.altitude, w],
  ];
  (J(e, r.map(([e]) => e).join(``), 168, N),
    q(e, r, 58, 300),
    (e.font = G(500, 42)),
    q(e, se(e, n, t.daily), j, 380),
    Z(e, t.title, j, 456, C, E, U));
}
function le(e, t, n, r) {
  ((e.fillStyle = k),
    e.fillRect(t, n, r, 3),
    e.fillRect(t, n + r - 3, r, 3),
    e.fillRect(t, n + 3, 3, r - 6),
    e.fillRect(t + r - 3, n + 3, 3, r - 6));
}
function ue(e, t, r, i, a) {
  if (t === void 0) {
    le(e, r, i, a);
    return;
  }
  ((e.fillStyle = t < 0 ? E : (n[t]?.color ?? S)), e.fillRect(r, i, a, a));
}
function de(e, t, n) {
  if (t.length === 0) return;
  let r = t.length > z.per,
    i = r ? z.cell : R.cell,
    a = r ? z.gap : R.gap,
    o = Math.min(t.length, z.per),
    s = Math.ceil(t.length / o),
    c = i + a;
  X(e, j - R.pad, R.y, o * c - a + 2 * R.pad, n, O);
  let l = R.y + Math.round((n - s * c + a) / 2);
  for (let [n, r] of t.entries())
    ue(e, r, j + (n % o) * c, l + Math.floor(n / o) * c, i);
}
function fe(e, t) {
  let n = t.bands.length > z.per ? z.h : R.h,
    r = `${Math.round(t.points).toLocaleString(`en-US`)} pts`;
  e.font = G(600, 34);
  let i = Math.round(e.measureText(r).width);
  (X(e, M - i - R.pad - 4, R.y, i + 2 * R.pad + 8, n, O),
    (e.fillStyle = x),
    (e.textAlign = `right`),
    (e.textBaseline = `middle`),
    e.fillText(r, M, R.y + n / 2 + 2),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    de(e, t.bands, n));
}
function pe(e, t) {
  return e === `versus` && t.friend
    ? [[(t.rivals ?? 1) > 1 ? `Beat us all` : `Beat us both`, x]]
    : [
        [`Beat my `, x],
        [t.altitude, C],
      ];
}
function me(e, t, n) {
  ((e.fillStyle = T), e.fillRect(0, B, y, b - B), (e.fillStyle = E));
  for (let t = 48; t < y - 48; t += 16) e.fillRect(t, B - 4, 8, 8);
  for (let [t, n] of H.entries()) {
    let r = B - 32 + t * 8;
    (e.fillRect(0, r, n, 8), e.fillRect(y - n, r, n, 8));
  }
  ((e.font = G(600, 58)), q(e, pe(t, n), j, 1152));
  let r = V.x - j - 28;
  ((e.font = G(500, 38)),
    (e.fillStyle = x),
    e.fillText(g(e, n.link, r), j, 1206),
    (e.font = G(500, 30)),
    (e.fillStyle = S),
    e.fillText(g(e, n.scan, r), j, 1250),
    n.qr && h(e, n.qr, V.x, V.y, V.size));
}
async function he() {
  typeof document > `u` ||
    !document.fonts ||
    (await document.fonts.load(G(600, 168)).catch(() => []));
}
function ge(e, t, n, r) {
  ((e.imageSmoothingEnabled = !1),
    e.drawImage(t, 0, 0, y, b),
    re(e),
    ie(e, r.label),
    n === `moment` && r.moment
      ? oe(e, r.moment)
      : n === `versus` && r.friend
        ? ce(e, r, r.friend)
        : ae(e, r),
    fe(e, r),
    me(e, n, r));
}
var _e = (e, t) => {
  let n = 0;
  for (let r of e.slice(0, t)) n += r.points;
  return n;
};
function Q(e, t) {
  let n = ee(t.kind),
    r = t.friends[0],
    i = {
      label: v(t.kind),
      daily: t.kind.kind === `daily`,
      altitude: d(t.points),
      zone: s[a(t.points)].name,
      points: t.points,
      title: t.title,
      bands: Array.from(
        { length: Math.min(n ?? t.results.length, 20) },
        (e, n) => {
          let r = t.results[n];
          return r ? (r.band ?? -1) : void 0;
        },
      ),
      link: f(t.code),
      scan: l(n),
      qr: te(p(t.code, `image`), { ecc: `M`, border: 2 }).data,
      ...(t.percentile ? { percentile: t.percentile } : {}),
    };
  if (r) {
    let e = r.points ?? 0;
    ((i.friend = { name: r.name, altitude: d(e), outcome: u(t.points, e) }),
      (i.rivals = t.friends.length));
  }
  let o = e.moment(),
    c = o ? t.results[o.round - 1] : void 0;
  return (
    o &&
      c &&
      c.band !== null &&
      (i.moment = {
        round: o.round,
        prompt: t.prompts[o.round - 1]?.text ?? ``,
        answer: c.canonical ?? c.typed,
        band: c.band,
        points: c.points,
        altitude: d(_e(t.results, o.round)),
      }),
    i
  );
}
function ve(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = y), (r.height = b));
  let i = r.getContext(`2d`);
  return (i && ge(i, e, t, n), r);
}
async function ye(e, t) {
  await he();
  let n = Q(e, t),
    r = [`home`];
  (n.moment && r.push(`moment`),
    n.friend && r.push(`versus`),
    await Promise.all(r.map((t) => e.captureReady(t))));
  let i = {
      home: `Your climb`,
      moment: c(`moment`),
      versus: c(`versus`, n.friend?.name),
    },
    a = r.flatMap((t) => {
      let r = e.captureCanvas(t);
      return r ? [{ kind: t, canvas: ve(r, t, n) }] : [];
    }),
    o = await Promise.all(a.map((e) => _(e.canvas)));
  for (let e of a) e.canvas.width = 0;
  return a.flatMap((e, t) => {
    let n = o[t];
    return n
      ? [
          {
            kind: e.kind,
            name: i[e.kind],
            blob: n,
            url: URL.createObjectURL(n),
          },
        ]
      : [];
  });
}
var $ = (e) => {
    let t = 0;
    for (let n of e) t += n.points;
    return t;
  },
  be = {
    stage: `climb`,
    score: $,
    inviterScore: (e) => e.points,
    headline: (e, t, n) => {
      let r = d(e);
      if (!n)
        return [
          [`You reached `, `ink`],
          [r, `you`],
        ];
      let i = d(n.score);
      switch (u(e, n.score)) {
        case `win`:
          return [
            [`You beat `, `ink`],
            [n.name, `friend`],
            [` · `, `ink`],
            [r, `you`],
            [` to ${i}`, `ink`],
          ];
        case `loss`:
          return [
            [n.name, `friend`],
            [` climbed higher · ${i} to `, `ink`],
            [r, `you`],
          ];
        default:
          return [
            [`Level with `, `ink`],
            [n.name, `friend`],
            [` at `, `ink`],
            [r, `you`],
          ];
      }
    },
    lossLine: (e, t) =>
      `${i(Math.max(1, o(t) - o(e)))} higher and you'd have taken it.`,
    groupNote: (e, t, n) =>
      e === `loss`
        ? n
          ? `Losing? Send your best moment instead.`
          : `Losing? Send your climb instead.`
        : `Your card for the group: you vs ${t}.`,
    beat: d,
    shareText: (e, t, n) => {
      let i = $(t);
      return r(
        e,
        t,
        { altitude: d(i), zone: s[a(i)].name },
        n && { name: n.name, points: n.points ?? 0 },
      );
    },
    boardScore: (e) => d(e.points),
    boardOrder: (e) => [...e].sort((e, t) => t.points - e.points),
    draw: ye,
  },
  xe = t();
function Se(e) {
  let t = (0, ne.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, xe.jsx)(m, { ...e, words: be })), (t[0] = e), (t[1] = n)),
    n
  );
}
export { Se as default };
