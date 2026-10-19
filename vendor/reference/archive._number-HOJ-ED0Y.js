import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./community-BLCPdEpd.js";
import "./climb-head-B90-o7R9.js";
import { U as a, w as o } from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import { a as s } from "./stage-choice-DO9JGjKK.js";
import { a as c, o as l } from "./archive-Div16WxI.js";
import { t as u } from "./main-BXKF3zmu.js";
import { a as d, i as f, t as p } from "./stage-toggle-LI6FLr3n.js";
import { n as m, t as h } from "./home-sections-CGYgZ4JZ.js";
import { t as g } from "./challenge-switch-BjAL4Z8M.js";
var _ = e(t(), 1),
  v = n(),
  y = i();
function b(e) {
  let t = (0, v.c)(34),
    {
      number: n,
      date: i,
      resumeAt: a,
      ready: o,
      waiting: s,
      header: u,
      onPlay: d,
    } = e,
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = u && (0, y.jsx)(`div`, { className: `og-intro-top`, children: u })),
      (t[0] = u),
      (t[1] = f));
  let m;
  t[2] === i ? (m = t[3]) : ((m = l(i)), (t[2] = i), (t[3] = m));
  let h;
  t[4] !== n || t[5] !== m
    ? ((h = (0, y.jsxs)(`p`, {
        className: `og-kicker`,
        children: [`Daily #`, n, ` · `, m, ` · From the archive`],
      })),
      (t[4] = n),
      (t[5] = m),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] === n
    ? (g = t[8])
    : ((g = (0, y.jsxs)(`span`, {
        className: `og-h1-brand`,
        children: [`OpenNoillirk #`, n],
      })),
      (t[7] = n),
      (t[8] = g));
  let _;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, y.jsx)(`span`, {
        className: `visually-hidden`,
        children: `: `,
      })),
      (t[9] = _))
    : (_ = t[9]);
  let b;
  t[10] === i ? (b = t[11]) : ((b = c(i)), (t[10] = i), (t[11] = b));
  let x;
  t[12] === b
    ? (x = t[13])
    : ((x = (0, y.jsx)(`span`, { className: `og-h1-tag`, children: b })),
      (t[12] = b),
      (t[13] = x));
  let S;
  t[14] !== g || t[15] !== x
    ? ((S = (0, y.jsxs)(`h1`, { children: [g, _, x] })),
      (t[14] = g),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, y.jsx)(`p`, {
        className: `og-line`,
        children: `The same ten questions everyone had that day. A replay counts toward that day's percentile, not your streak.`,
      })),
      (t[17] = C))
    : (C = t[17]);
  let w = !o,
    T = a ? `Resume at question ${a}` : `Play No. ${n}`,
    E;
  t[18] !== d || t[19] !== w || t[20] !== T || t[21] !== s
    ? ((E = (0, y.jsx)(`button`, {
        type: `button`,
        className: `og-play`,
        onClick: d,
        disabled: s,
        "aria-busy": w,
        children: T,
      })),
      (t[18] = d),
      (t[19] = w),
      (t[20] = T),
      (t[21] = s),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, y.jsx)(r, {
        to: `/archive`,
        className: `og-link`,
        children: `Back to the archive`,
      })),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] === E
    ? (O = t[25])
    : ((O = (0, y.jsxs)(`div`, { className: `og-actions`, children: [E, D] })),
      (t[24] = E),
      (t[25] = O));
  let k;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, y.jsx)(p, {})), (t[26] = k))
    : (k = t[26]);
  let A;
  t[27] !== O || t[28] !== h || t[29] !== S
    ? ((A = (0, y.jsxs)(`div`, {
        className: `og-hero`,
        children: [h, S, C, O, k],
      })),
      (t[27] = O),
      (t[28] = h),
      (t[29] = S),
      (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== f || t[32] !== A
      ? ((j = (0, y.jsxs)(y.Fragment, { children: [f, A] })),
        (t[31] = f),
        (t[32] = A),
        (t[33] = j))
      : (j = t[33]),
    j
  );
}
var x = { status: `loading` },
  S = (e, t) =>
    g({
      kind: { kind: `daily`, date: e, number: o(e) },
      prompts: t,
      challengers: [],
      saves: !0,
      archive: !0,
    });
function C(e) {
  let t = (0, v.c)(8),
    [n, r] = (0, _.useState)(x),
    [i, o] = (0, _.useState)(0),
    c;
  t[0] === e
    ? (c = t[1])
    : ((c = () => {
        let t = (e) => (0, _.startTransition)(() => r(e)),
          n = a();
        if (e > n) {
          t({ status: `ahead` });
          return;
        }
        if (e === n) {
          t({ status: `today` });
          return;
        }
        let i = !0;
        return (
          r(T),
          d(e)
            .then((n) => {
              let { file: r, fallback: a } = n;
              i &&
                t(
                  a || r.date !== e
                    ? { status: `error` }
                    : { status: `ready`, setup: S(e, r.prompts) },
                );
            })
            .catch(() => {
              i && t({ status: `error` });
            }),
          () => {
            i = !1;
          }
        );
      }),
      (t[0] = e),
      (t[1] = c));
  let l;
  (t[2] !== i || t[3] !== e
    ? ((l = [e, i]), (t[2] = i), (t[3] = e), (t[4] = l))
    : (l = t[4]),
    (0, _.useEffect)(c, l));
  let u = s(`daily`),
    [f, p] = (0, _.useState)(u);
  f !== u &&
    (p(u), n.status === `ready` && r({ status: `ready`, setup: g(n.setup) }));
  let m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => o(w)), (t[5] = m))
    : (m = t[5]);
  let h = m,
    y;
  return (
    t[6] === n
      ? (y = t[7])
      : ((y = { state: n, retry: h }), (t[6] = n), (t[7] = y)),
    y
  );
}
function w(e) {
  return e + 1;
}
function T(e) {
  return e.status === `loading` ? e : x;
}
function E(e) {
  let t = (0, v.c)(36),
    { day: n, focused: i } = e,
    a = (0, _.useId)(),
    o = n.number,
    s;
  t[0] === n.date ? (s = t[1]) : ((s = c(n.date)), (t[0] = n.date), (t[1] = s));
  let l;
  t[2] !== a || t[3] !== o || t[4] !== s
    ? ((l = (0, y.jsxs)(`h2`, { id: a, children: [`No. `, o, ` · `, s] })),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, y.jsx)(`summary`, {
        children: `The ten questions (no answers)`,
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === n.prompts
    ? (d = t[8])
    : ((d = n.prompts.map(D)), (t[7] = n.prompts), (t[8] = d));
  let f;
  t[9] === d
    ? (f = t[10])
    : ((f = (0, y.jsxs)(`details`, {
        className: `ar-questions`,
        children: [u, (0, y.jsx)(`ol`, { children: d })],
      })),
      (t[9] = d),
      (t[10] = f));
  let p;
  t[11] === n.date
    ? (p = t[12])
    : ((p = { date: n.date }), (t[11] = n.date), (t[12] = p));
  let m;
  t[13] !== o || t[14] !== p
    ? ((m = (0, y.jsxs)(r, {
        to: `/leaderboard`,
        search: p,
        className: `ar-day-board`,
        children: [`No. `, o, `'s leaderboard`],
      })),
      (t[13] = o),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === o
    ? (h = t[17])
    : ((h =
        o > 1 &&
        (0, y.jsxs)(r, {
          to: `/archive/$number`,
          params: { number: `${o - 1}` },
          className: `ar-day-step`,
          children: [`← No. `, o - 1],
        })),
      (t[16] = o),
      (t[17] = h));
  let g;
  t[18] !== n.latest || t[19] !== o
    ? ((g =
        o + 1 <= n.latest &&
        (0, y.jsxs)(r, {
          to: `/archive/$number`,
          params: { number: `${o + 1}` },
          className: `ar-day-step`,
          children: [`No. `, o + 1, ` →`],
        })),
      (t[18] = n.latest),
      (t[19] = o),
      (t[20] = g))
    : (g = t[20]);
  let b;
  t[21] !== h || t[22] !== g
    ? ((b = (0, y.jsxs)(`span`, {
        className: `ar-day-steps`,
        children: [h, g],
      })),
      (t[21] = h),
      (t[22] = g),
      (t[23] = b))
    : (b = t[23]);
  let x;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, y.jsx)(r, {
        to: `/archive`,
        className: `ar-day-back`,
        children: `Back to the archive`,
      })),
      (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] !== b || t[26] !== m
    ? ((S = (0, y.jsxs)(`nav`, {
        className: `ar-day-nav`,
        "aria-label": `More days`,
        children: [m, b, x],
      })),
      (t[25] = b),
      (t[26] = m),
      (t[27] = S))
    : (S = t[27]);
  let C;
  t[28] !== a || t[29] !== S || t[30] !== l || t[31] !== f
    ? ((C = (0, y.jsx)(`div`, {
        className: `home-content-shell`,
        children: (0, y.jsxs)(`section`, {
          className: `ar-day-section`,
          "aria-labelledby": a,
          children: [l, f, S],
        }),
      })),
      (t[28] = a),
      (t[29] = S),
      (t[30] = l),
      (t[31] = f),
      (t[32] = C))
    : (C = t[32]);
  let w;
  return (
    t[33] !== i || t[34] !== C
      ? ((w = (0, y.jsx)(`div`, {
          className: `home-reading ar-day`,
          inert: i,
          children: C,
        })),
        (t[33] = i),
        (t[34] = C),
        (t[35] = w))
      : (w = t[35]),
    w
  );
}
function D(e) {
  return (0, y.jsx)(`li`, { children: e.text }, e.id);
}
function O(e) {
  let t = (0, v.c)(25),
    { day: n, today: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, y.jsx)(`div`, {
        className: `og-intro-top`,
        children: (0, y.jsx)(m, { inStage: !0 }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o = n.number,
    s;
  t[1] === n.date ? (s = t[2]) : ((s = l(n.date)), (t[1] = n.date), (t[2] = s));
  let u;
  t[3] !== n.number || t[4] !== s
    ? ((u = (0, y.jsxs)(`p`, {
        className: `og-kicker`,
        children: [`Daily #`, o, ` · `, s, ` · From the archive`],
      })),
      (t[3] = n.number),
      (t[4] = s),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === n.number
    ? (d = t[7])
    : ((d = (0, y.jsxs)(`span`, {
        className: `og-h1-brand`,
        children: [`OpenNoillirk #`, n.number],
      })),
      (t[6] = n.number),
      (t[7] = d));
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, y.jsx)(`span`, {
        className: `visually-hidden`,
        children: `: `,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === n.date
    ? (p = t[10])
    : ((p = c(n.date)), (t[9] = n.date), (t[10] = p));
  let h;
  t[11] === p
    ? (h = t[12])
    : ((h = (0, y.jsx)(`span`, { className: `og-h1-tag`, children: p })),
      (t[11] = p),
      (t[12] = h));
  let g;
  t[13] !== d || t[14] !== h
    ? ((g = (0, y.jsxs)(`h1`, { children: [d, f, h] })),
      (t[13] = d),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _ = i
      ? `No. ${n.number} is today's Daily.`
      : `No. ${n.number} isn't out yet where you are.`,
    b;
  t[16] === _
    ? (b = t[17])
    : ((b = (0, y.jsx)(`p`, { className: `og-line`, children: _ })),
      (t[16] = _),
      (t[17] = b));
  let x;
  t[18] === i
    ? (x = t[19])
    : ((x = (0, y.jsx)(`div`, {
        className: `og-actions`,
        children: i
          ? (0, y.jsx)(r, {
              to: `/`,
              className: `og-play`,
              children: `Play it on the home page`,
            })
          : (0, y.jsx)(r, {
              to: `/archive`,
              className: `og-play`,
              children: `Browse the archive`,
            }),
      })),
      (t[18] = i),
      (t[19] = x));
  let S;
  return (
    t[20] !== b || t[21] !== x || t[22] !== u || t[23] !== g
      ? ((S = (0, y.jsxs)(y.Fragment, {
          children: [
            a,
            (0, y.jsxs)(`div`, {
              className: `og-hero`,
              children: [u, g, b, x],
            }),
          ],
        })),
        (t[20] = b),
        (t[21] = x),
        (t[22] = u),
        (t[23] = g),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
function k(e) {
  let t = (0, v.c)(25),
    { day: n } = e,
    { state: r, retry: i } = C(n.date),
    [a, o] = (0, _.useState)(`intro`),
    s = a === `run`,
    c = r.status === `ready` ? r.setup : null,
    l;
  t[0] !== n || t[1] !== c || t[2] !== r.status
    ? ((l = (e) => {
        let { start: t, waiting: i, setup: a } = e;
        return r.status === `today` || r.status === `ahead`
          ? (0, y.jsx)(O, { day: n, today: r.status === `today` })
          : (0, y.jsx)(b, {
              number: n.number,
              date: n.date,
              resumeAt: a?.resume ? a.resume.index + 1 : null,
              ready: c !== null,
              waiting: i || c === null,
              header: (0, y.jsx)(m, { inStage: !0 }),
              onPlay: () => t(),
            });
      }),
      (t[0] = n),
      (t[1] = c),
      (t[2] = r.status),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== c || t[5] !== l
    ? ((u = (0, y.jsx)(f, {
        route: `daily`,
        setup: c,
        lockPage: !0,
        onScreen: o,
        intro: l,
      })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== i || t[8] !== r.status
    ? ((d =
        r.status === `error` &&
        (0, y.jsxs)(`p`, {
          className: `rarely-error`,
          role: `alert`,
          children: [
            `This day's questions could not be loaded.`,
            ` `,
            (0, y.jsx)(`button`, {
              type: `button`,
              className: `og-link`,
              onClick: i,
              children: `Try again`,
            }),
          ],
        })),
      (t[7] = i),
      (t[8] = r.status),
      (t[9] = d))
    : (d = t[9]);
  let p;
  t[10] !== u || t[11] !== d
    ? ((p = (0, y.jsxs)(`div`, {
        id: `play`,
        className: `home-game`,
        children: [u, d],
      })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = p))
    : (p = t[12]);
  let g;
  t[13] !== n || t[14] !== s
    ? ((g = (0, y.jsx)(E, { day: n, focused: s })),
      (t[13] = n),
      (t[14] = s),
      (t[15] = g))
    : (g = t[15]);
  let x;
  t[16] !== p || t[17] !== g
    ? ((x = (0, y.jsxs)(`main`, { children: [p, g] })),
      (t[16] = p),
      (t[17] = g),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === s
    ? (S = t[20])
    : ((S = (0, y.jsx)(h, { focused: s })), (t[19] = s), (t[20] = S));
  let w;
  return (
    t[21] !== s || t[22] !== x || t[23] !== S
      ? ((w = (0, y.jsxs)(`div`, {
          className: `rarely-home`,
          "data-focused": s,
          children: [x, S],
        })),
        (t[21] = s),
        (t[22] = x),
        (t[23] = S),
        (t[24] = w))
      : (w = t[24]),
    w
  );
}
function A() {
  let e = (0, v.c)(2),
    { day: t } = u.useLoaderData(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (0, y.jsx)(k, { day: t }, t.number)), (e[0] = t), (e[1] = n)),
    n
  );
}
export { A as component };
