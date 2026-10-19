import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import { I as a, k as o } from "./rules-DxwvjuIt.js";
import { t as s } from "./storage-Cd9DMQud.js";
import { l as c } from "./game-ui-DEL71d58.js";
import { t as l } from "./stage-toggle-LI6FLr3n.js";
var u = n(),
  d = e(t()),
  f = i();
function p() {
  let e = (0, u.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, f.jsxs)(`nav`, {
          className: `og-guide`,
          "aria-label": `About the game`,
          children: [
            (0, f.jsx)(r, { to: `/how-to-play`, children: `How to play` }),
            (0, f.jsx)(r, { to: `/scoring`, children: `Scoring` }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var m = {
    brand: `OpenNoillirk`,
    tag: `The Noillirk game — guess the answer most people give`,
  },
  h = (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(`b`, { children: `Think like everyone.` }),
      ` Name what most people would say and pull the crowd your way.`,
    ],
  });
function g(e) {
  let t = (0, u.c)(35),
    {
      number: n,
      resumeAt: i,
      ready: a,
      waiting: o,
      onPlay: s,
      header: d,
      heading: g,
      line: _,
    } = e,
    v = g === void 0 ? m : g,
    y = _ === void 0 ? h : _,
    b = c(),
    x;
  t[0] === d
    ? (x = t[1])
    : ((x = d && (0, f.jsx)(`div`, { className: `og-intro-top`, children: d })),
      (t[0] = d),
      (t[1] = x));
  let S = n === null ? `Daily` : `Daily #${n}`,
    C;
  t[2] === S
    ? (C = t[3])
    : ((C = (0, f.jsxs)(`p`, {
        className: `og-kicker`,
        children: [S, ` · 10 questions · Free`],
      })),
      (t[2] = S),
      (t[3] = C));
  let w;
  t[4] === v.brand
    ? (w = t[5])
    : ((w = (0, f.jsx)(`span`, {
        className: `og-h1-brand`,
        children: v.brand,
      })),
      (t[4] = v.brand),
      (t[5] = w));
  let T;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, f.jsx)(`span`, {
        className: `visually-hidden`,
        children: `: `,
      })),
      (t[6] = T))
    : (T = t[6]);
  let E;
  t[7] === v.tag
    ? (E = t[8])
    : ((E = (0, f.jsx)(`span`, { className: `og-h1-tag`, children: v.tag })),
      (t[7] = v.tag),
      (t[8] = E));
  let D;
  t[9] !== w || t[10] !== E
    ? ((D = (0, f.jsxs)(`h1`, { children: [w, T, E] })),
      (t[9] = w),
      (t[10] = E),
      (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === y
    ? (O = t[13])
    : ((O = (0, f.jsx)(`p`, { className: `og-line`, children: y })),
      (t[12] = y),
      (t[13] = O));
  let k = !a,
    A = i ? `Resume at question ${i}` : `Play today's 10`,
    j;
  t[14] !== s || t[15] !== k || t[16] !== A || t[17] !== o
    ? ((j = (0, f.jsx)(`button`, {
        type: `button`,
        className: `og-play`,
        onClick: s,
        disabled: o,
        "aria-busy": k,
        children: A,
      })),
      (t[14] = s),
      (t[15] = k),
      (t[16] = A),
      (t[17] = o),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, f.jsx)(r, {
        to: `/unlimited`,
        className: `og-link`,
        children: `Unlimited · free`,
      })),
      (t[19] = M))
    : (M = t[19]);
  let N;
  t[20] === j
    ? (N = t[21])
    : ((N = (0, f.jsxs)(`div`, { className: `og-actions`, children: [j, M] })),
      (t[20] = j),
      (t[21] = N));
  let P;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, f.jsx)(l, {})), (t[22] = P))
    : (P = t[22]);
  let F = b ?? `--:--:--`,
    I;
  t[23] === F
    ? (I = t[24])
    : ((I = (0, f.jsxs)(`p`, {
        className: `og-small`,
        children: [`New questions at midnight · `, F],
      })),
      (t[23] = F),
      (t[24] = I));
  let L;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, f.jsx)(p, {})), (t[25] = L))
    : (L = t[25]);
  let R;
  t[26] !== O || t[27] !== N || t[28] !== I || t[29] !== C || t[30] !== D
    ? ((R = (0, f.jsxs)(`div`, {
        className: `og-hero`,
        children: [C, D, O, N, P, I, L],
      })),
      (t[26] = O),
      (t[27] = N),
      (t[28] = I),
      (t[29] = C),
      (t[30] = D),
      (t[31] = R))
    : (R = t[31]);
  let z;
  return (
    t[32] !== R || t[33] !== x
      ? ((z = (0, f.jsxs)(f.Fragment, { children: [x, R] })),
        (t[32] = R),
        (t[33] = x),
        (t[34] = z))
      : (z = t[34]),
    z
  );
}
var _ = { 10: `10`, 20: `20`, endless: `∞` };
function v(e) {
  let t = (0, u.c)(28),
    { waiting: n, onPlay: i, header: c } = e,
    [m, h] = (0, d.useState)(10),
    g,
    v;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        h(s.runLength());
      }),
      (v = []),
      (t[0] = g),
      (t[1] = v))
    : ((g = t[0]), (v = t[1])),
    (0, d.useEffect)(g, v));
  let y;
  t[2] === c
    ? (y = t[3])
    : ((y = c && (0, f.jsx)(`div`, { className: `og-intro-top`, children: c })),
      (t[2] = c),
      (t[3] = y));
  let b, x;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, f.jsx)(`p`, {
        className: `og-kicker`,
        children: `Unlimited · free practice`,
      })),
      (x = (0, f.jsxs)(`h1`, {
        children: [
          (0, f.jsx)(`span`, {
            className: `og-h1-brand`,
            children: `OpenNoillirk Unlimited`,
          }),
          (0, f.jsx)(`span`, { className: `visually-hidden`, children: `: ` }),
          (0, f.jsx)(`span`, {
            className: `og-h1-tag`,
            children: `Free, no daily limit`,
          }),
        ],
      })),
      (t[4] = b),
      (t[5] = x))
    : ((b = t[4]), (x = t[5]));
  let S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, f.jsxs)(`p`, {
        className: `og-line`,
        children: [
          (0, f.jsx)(`b`, { children: `Play as long as you like.` }),
          ` Ten, twenty or endless questions from the whole bank. Same rules: the more people would give your answer, the more people join you.`,
        ],
      })),
      (t[6] = S))
    : (S = t[6]);
  let C;
  t[7] === m
    ? (C = t[8])
    : ((C = o.map((e) => {
        let t = a(e);
        return (0, f.jsx)(
          `button`,
          {
            type: `button`,
            "aria-pressed": e === m,
            "aria-label": e === 1 / 0 ? `Endless` : `${t} questions`,
            onClick: () => {
              (h(e), s.setRunLength(e));
            },
            children: _[t],
          },
          t,
        );
      })),
      (t[7] = m),
      (t[8] = C));
  let w;
  t[9] === C
    ? (w = t[10])
    : ((w = (0, f.jsx)(`div`, {
        className: `og-seg`,
        role: `group`,
        "aria-label": `Run length`,
        children: C,
      })),
      (t[9] = C),
      (t[10] = w));
  let T;
  t[11] !== m || t[12] !== i
    ? ((T = () => i(m)), (t[11] = m), (t[12] = i), (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== T || t[15] !== n
    ? ((E = (0, f.jsx)(`button`, {
        type: `button`,
        className: `og-play`,
        disabled: n,
        onClick: T,
        children: `Play`,
      })),
      (t[14] = T),
      (t[15] = n),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== E || t[18] !== w
    ? ((D = (0, f.jsxs)(`div`, { className: `og-actions`, children: [w, E] })),
      (t[17] = E),
      (t[18] = w),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, f.jsx)(l, {})), (t[20] = O))
    : (O = t[20]);
  let k, A;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, f.jsx)(`p`, {
        className: `og-small`,
        children: (0, f.jsx)(r, {
          to: `/`,
          className: `og-link`,
          children: `Today's daily`,
        }),
      })),
      (A = (0, f.jsx)(p, {})),
      (t[21] = k),
      (t[22] = A))
    : ((k = t[21]), (A = t[22]));
  let j;
  t[23] === D
    ? (j = t[24])
    : ((j = (0, f.jsxs)(`div`, {
        className: `og-hero`,
        children: [b, x, S, D, O, k, A],
      })),
      (t[23] = D),
      (t[24] = j));
  let M;
  return (
    t[25] !== j || t[26] !== y
      ? ((M = (0, f.jsxs)(f.Fragment, { children: [y, j] })),
        (t[25] = j),
        (t[26] = y),
        (t[27] = M))
      : (M = t[27]),
    M
  );
}
export { v as n, g as t };
