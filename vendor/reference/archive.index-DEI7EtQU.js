import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./community-BLCPdEpd.js";
import { U as a, i as o, s } from "./rules-DxwvjuIt.js";
import { t as c } from "./storage-Cd9DMQud.js";
import { a as l, i as u, o as d, r as f } from "./archive-Div16WxI.js";
import { g as p, h as m } from "./main-BXKF3zmu.js";
import { n as h, t as g } from "./home-sections-CGYgZ4JZ.js";
var _ = n(),
  v = e(t(), 1),
  y = new Map();
function b(e) {
  let t = c.getDaily(e);
  return t?.done
    ? { kind: `done`, points: t.total, title: s(t.results).title }
    : t && t.results.length > 0
      ? { kind: `started`, at: t.results.length + 1 }
      : { kind: `new` };
}
function x(e) {
  let t = (0, _.c)(3),
    [n, r] = (0, v.useState)(y),
    i,
    a;
  return (
    t[0] === e
      ? ((i = t[1]), (a = t[2]))
      : ((i = () => {
          let t = new Map();
          for (let n of e) t.set(n.date, b(n.date));
          r(t);
        }),
        (a = [e]),
        (t[0] = e),
        (t[1] = i),
        (t[2] = a)),
    (0, v.useEffect)(i, a),
    n
  );
}
var S = i();
function C(e) {
  let t = (0, _.c)(12),
    { progress: n } = e;
  if (n?.kind === `done`) {
    let e;
    t[0] === n.points
      ? (e = t[1])
      : ((e = o(n.points)), (t[0] = n.points), (t[1] = e));
    let r;
    t[2] === e
      ? (r = t[3])
      : ((r = (0, S.jsxs)(`span`, {
          className: `ar-points`,
          children: [e, ` pts`],
        })),
        (t[2] = e),
        (t[3] = r));
    let i;
    t[4] === n.title
      ? (i = t[5])
      : ((i = (0, S.jsx)(`span`, { className: `ar-title`, children: n.title })),
        (t[4] = n.title),
        (t[5] = i));
    let a;
    return (
      t[6] !== r || t[7] !== i
        ? ((a = (0, S.jsxs)(S.Fragment, { children: [r, i] })),
          (t[6] = r),
          (t[7] = i),
          (t[8] = a))
        : (a = t[8]),
      a
    );
  }
  if (n?.kind === `started`) {
    let e;
    return (
      t[9] === n.at
        ? (e = t[10])
        : ((e = (0, S.jsxs)(`span`, {
            className: `ar-go`,
            children: [`Resume · Q`, n.at],
          })),
          (t[9] = n.at),
          (t[10] = e)),
      e
    );
  }
  if (n?.kind === `new`) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, S.jsx)(`span`, { className: `ar-go`, children: `Play` })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  return null;
}
function w(e) {
  let t = (0, _.c)(32),
    { day: n, today: i, progress: a } = e,
    o = (0, v.useId)(),
    s;
  t[0] === n.number
    ? (s = t[1])
    : ((s = (0, S.jsxs)(`span`, {
        className: `ar-number`,
        children: [`#`, n.number],
      })),
      (t[0] = n.number),
      (t[1] = s));
  let c;
  t[2] === i
    ? (c = t[3])
    : ((c =
        i && (0, S.jsx)(`span`, { className: `ar-today`, children: `Today` })),
      (t[2] = i),
      (t[3] = c));
  let u;
  t[4] !== s || t[5] !== c
    ? ((u = (0, S.jsxs)(`span`, {
        className: `ar-cell-top`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let f;
  t[7] === n.date ? (f = t[8]) : ((f = d(n.date)), (t[7] = n.date), (t[8] = f));
  let p;
  t[9] === f
    ? (p = t[10])
    : ((p = (0, S.jsx)(`span`, { className: `ar-date`, children: f })),
      (t[9] = f),
      (t[10] = p));
  let m;
  t[11] === a
    ? (m = t[12])
    : ((m = (0, S.jsx)(C, { progress: a })), (t[11] = a), (t[12] = m));
  let h;
  t[13] !== o || t[14] !== m
    ? ((h = (0, S.jsx)(`span`, {
        className: `ar-progress`,
        id: o,
        children: m,
      })),
      (t[13] = o),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== u || t[17] !== p || t[18] !== h
    ? ((g = (0, S.jsxs)(S.Fragment, { children: [u, p, h] })),
      (t[16] = u),
      (t[17] = p),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let y = g,
    b = n.number,
    x;
  t[20] === n.date
    ? (x = t[21])
    : ((x = l(n.date)), (t[20] = n.date), (t[21] = x));
  let w = `No. ${b}, ${x}`,
    T = a ? o : void 0,
    E = a?.kind,
    D = i || void 0,
    O;
  t[22] !== w || t[23] !== T || t[24] !== E || t[25] !== D
    ? ((O = {
        className: `ar-cell`,
        "aria-label": w,
        "aria-describedby": T,
        "data-progress": E,
        "data-today": D,
      }),
      (t[22] = w),
      (t[23] = T),
      (t[24] = E),
      (t[25] = D),
      (t[26] = O))
    : (O = t[26]);
  let k = O,
    A;
  return (
    t[27] !== y || t[28] !== k || t[29] !== n.number || t[30] !== i
      ? ((A = i
          ? (0, S.jsx)(r, { to: `/`, ...k, children: y })
          : (0, S.jsx)(r, {
              to: `/archive/$number`,
              params: { number: `${n.number}` },
              ...k,
              children: y,
            })),
        (t[27] = y),
        (t[28] = k),
        (t[29] = n.number),
        (t[30] = i),
        (t[31] = A))
      : (A = t[31]),
    A
  );
}
function T(e) {
  let t = (0, _.c)(13),
    { today: n } = e,
    [r, i] = (0, v.useState)(n),
    o,
    s;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        i(a());
      }),
      (s = []),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1])),
    (0, v.useEffect)(o, s));
  let c;
  t[2] === r ? (c = t[3]) : ((c = f(r)), (t[2] = r), (t[3] = c));
  let l = c,
    d = x(l),
    p;
  if (t[4] !== r || t[5] !== l || t[6] !== d) {
    let e;
    (t[8] !== r || t[9] !== d
      ? ((e = (e) =>
          (0, S.jsxs)(
            `section`,
            {
              className: `ar-month`,
              "aria-label": e.label,
              children: [
                (0, S.jsx)(`h2`, { className: `cm-pixel`, children: e.label }),
                (0, S.jsx)(`ul`, {
                  className: `ar-grid`,
                  children: e.days.map((e) =>
                    (0, S.jsx)(
                      `li`,
                      {
                        children: (0, S.jsx)(w, {
                          day: e,
                          today: e.date === r,
                          progress: d.get(e.date),
                        }),
                      },
                      e.number,
                    ),
                  ),
                }),
              ],
            },
            e.label,
          )),
        (t[8] = r),
        (t[9] = d),
        (t[10] = e))
      : (e = t[10]),
      (p = u(l).map(e)),
      (t[4] = r),
      (t[5] = l),
      (t[6] = d),
      (t[7] = p));
  } else p = t[7];
  let m;
  return (
    t[11] === p
      ? (m = t[12])
      : ((m = (0, S.jsx)(`div`, { className: `ar-list`, children: p })),
        (t[11] = p),
        (t[12] = m)),
    m
  );
}
function E() {
  let e = (0, _.c)(10),
    { today: t } = m.useLoaderData(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, S.jsx)(h, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, S.jsxs)(`header`, {
        className: `ar-head`,
        children: [
          (0, S.jsx)(`p`, {
            className: `ar-kicker`,
            children: `Every Daily, any day`,
          }),
          (0, S.jsx)(`h1`, {
            className: `cm-pixel`,
            children: `The OpenNoillirk archive`,
          }),
          (0, S.jsx)(`p`, {
            className: `hr-dek`,
            children: `Missed a day? Every Daily is here: the same ten questions everyone had. A replay counts toward that day's percentile, never your streak.`,
          }),
        ],
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === t
    ? (i = e[3])
    : ((i = (0, S.jsx)(T, { today: t })), (e[2] = t), (e[3] = i));
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = p.map(D)), (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === i
    ? (o = e[6])
    : ((o = (0, S.jsx)(`main`, {
        className: `home-reading ar-page`,
        children: (0, S.jsxs)(`div`, {
          className: `home-content-shell`,
          children: [r, i, a],
        }),
      })),
      (e[5] = i),
      (e[6] = o));
  let s;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, S.jsx)(g, {})), (e[7] = s))
    : (s = e[7]);
  let c;
  return (
    e[8] === o
      ? (c = e[9])
      : ((c = (0, S.jsxs)(`div`, {
          className: `rarely-home`,
          children: [n, o, s],
        })),
        (e[8] = o),
        (e[9] = c)),
    c
  );
}
function D(e) {
  return (0, S.jsxs)(
    `section`,
    {
      className: `ar-section`,
      children: [
        (0, S.jsx)(`h2`, { className: `cm-pixel`, children: e.h2 }),
        (0, S.jsx)(`div`, { className: `hr-prose`, children: e.p.map(O) }),
      ],
    },
    e.h2,
  );
}
function O(e) {
  return (0, S.jsx)(`p`, { children: e }, e);
}
export { E as component };
