import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./jsx-runtime-D_h4s5mO.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import "./main-BXKF3zmu.js";
import { t as i } from "./runs-DrM9YA6U.js";
import { t as a } from "./clean-text-C3rG4fQV.js";
var o = n(),
  s = e(t()),
  c = 1e3,
  l = /^name an? /i;
function u(e) {
  return a(e).replace(l, ``);
}
var d = 4e3;
async function f(e) {
  if (i()) return !1;
  let t = new AbortController(),
    n = setTimeout(() => t.abort(), d);
  try {
    return (
      (
        await fetch(`/api/suggestions`, {
          method: `POST`,
          headers: { "content-type": `application/json` },
          body: JSON.stringify(e),
          signal: t.signal,
        })
      ).status === 204
    );
  } catch {
    return !1;
  } finally {
    clearTimeout(n);
  }
}
var p = r(),
  m = {
    idle: ``,
    sending: `Sending…`,
    sent: `Thanks, it's in. We read every one.`,
    failed: `Couldn't send. Try again.`,
  },
  h = 88;
function g() {
  let e = (0, o.c)(8),
    [t, n] = (0, s.useState)(`idle`),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = (e, r) => {
        t !== `sending` &&
          (n(`sending`),
          f(e)
            .then((e) => {
              (e && r(), n(e ? `sent` : `failed`));
            })
            .catch(() => n(`failed`)));
      }),
      (e[0] = t),
      (e[1] = r));
  let i = r,
    a;
  e[2] === t
    ? (a = e[3])
    : ((a = () => {
        t !== `sending` && n(`idle`);
      }),
      (e[2] = t),
      (e[3] = a));
  let c = a,
    l;
  return (
    e[4] !== c || e[5] !== i || e[6] !== t
      ? ((l = { status: t, send: i, edited: c }),
        (e[4] = c),
        (e[5] = i),
        (e[6] = t),
        (e[7] = l))
      : (l = e[7]),
    l
  );
}
function _(e) {
  let t = (0, o.c)(14),
    { title: n, status: r, onSubmit: i, children: a } = e,
    c = (0, s.useId)(),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = (e) => {
        (e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = l));
  let u = l,
    d;
  t[2] !== n || t[3] !== c
    ? ((d = (0, p.jsx)(`h2`, { id: c, children: n })),
      (t[2] = n),
      (t[3] = c),
      (t[4] = d))
    : (d = t[4]);
  let f = m[r],
    h;
  t[5] !== r || t[6] !== f
    ? ((h = (0, p.jsx)(`p`, {
        className: `suggest-status`,
        role: `status`,
        "data-status": r,
        children: f,
      })),
      (t[5] = r),
      (t[6] = f),
      (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== a || t[9] !== u || t[10] !== d || t[11] !== h || t[12] !== c
      ? ((g = (0, p.jsxs)(`form`, {
          className: `suggest-card`,
          "aria-labelledby": c,
          onSubmit: u,
          noValidate: !0,
          children: [d, a, h],
        })),
        (t[8] = a),
        (t[9] = u),
        (t[10] = d),
        (t[11] = h),
        (t[12] = c),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function v(e) {
  let t = (0, o.c)(4),
    { label: n, ready: r, status: i } = e,
    a = !r,
    s = i === `sending`,
    c;
  return (
    t[0] !== n || t[1] !== a || t[2] !== s
      ? ((c = (0, p.jsx)(`button`, {
          type: `submit`,
          className: `home-button suggest-send`,
          disabled: a,
          "aria-busy": s,
          children: n,
        })),
        (t[0] = n),
        (t[1] = a),
        (t[2] = s),
        (t[3] = c))
      : (c = t[3]),
    c
  );
}
function y() {
  let e = (0, o.c)(58),
    t = (0, s.useId)(),
    n = (0, s.useId)(),
    r = (0, s.useId)(),
    i;
  e[0] !== t || e[1] !== n || e[2] !== r
    ? ((i = { blank: t, category: n, examples: r }),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = i))
    : (i = e[3]);
  let c = i,
    [l, d] = (0, s.useState)(``),
    [f, m] = (0, s.useState)(``),
    [y, b] = (0, s.useState)(``),
    { status: x, send: S, edited: C } = g(),
    w;
  e[4] === l ? (w = e[5]) : ((w = u(l)), (e[4] = l), (e[5] = w));
  let T = w,
    E;
  e[6] !== f || e[7] !== y || e[8] !== S || e[9] !== T
    ? ((E = () => {
        if (T.length < 3) return;
        let e = a(f),
          t = a(y);
        S(
          {
            kind: `question`,
            text: T,
            ...(e ? { category: e } : {}),
            ...(t ? { examples: t } : {}),
          },
          () => {
            (d(``), m(``), b(``));
          },
        );
      }),
      (e[6] = f),
      (e[7] = y),
      (e[8] = S),
      (e[9] = T),
      (e[10] = E))
    : (E = e[10]);
  let D = E,
    O;
  e[11] === C
    ? (O = e[12])
    : ((O = (e) => (t) => {
        (e(t.currentTarget.value), C());
      }),
      (e[11] = C),
      (e[12] = O));
  let k = O,
    A;
  e[13] === c.blank
    ? (A = e[14])
    : ((A = (0, p.jsx)(`label`, { htmlFor: c.blank, children: `Name a…` })),
      (e[13] = c.blank),
      (e[14] = A));
  let j = c.blank,
    M;
  e[15] === k ? (M = e[16]) : ((M = k(d)), (e[15] = k), (e[16] = M));
  let N;
  e[17] !== l || e[18] !== c.blank || e[19] !== M
    ? ((N = (0, p.jsx)(`input`, {
        id: j,
        className: `suggest-input suggest-blank`,
        type: `text`,
        value: l,
        onChange: M,
        placeholder: `type of cheese`,
        maxLength: h,
        autoComplete: `off`,
        autoCapitalize: `off`,
        enterKeyHint: `send`,
      })),
      (e[17] = l),
      (e[18] = c.blank),
      (e[19] = M),
      (e[20] = N))
    : (N = e[20]);
  let P;
  e[21] !== N || e[22] !== A
    ? ((P = (0, p.jsxs)(`div`, {
        className: `suggest-field`,
        children: [A, N],
      })),
      (e[21] = N),
      (e[22] = A),
      (e[23] = P))
    : (P = e[23]);
  let F;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, p.jsx)(`span`, {
        className: `suggest-optional`,
        children: `(optional)`,
      })),
      (e[24] = F))
    : (F = e[24]);
  let I;
  e[25] === c.category
    ? (I = e[26])
    : ((I = (0, p.jsxs)(`label`, {
        htmlFor: c.category,
        children: [`Category `, F],
      })),
      (e[25] = c.category),
      (e[26] = I));
  let L = c.category,
    R;
  e[27] === k ? (R = e[28]) : ((R = k(m)), (e[27] = k), (e[28] = R));
  let z;
  e[29] !== f || e[30] !== c.category || e[31] !== R
    ? ((z = (0, p.jsx)(`input`, {
        id: L,
        className: `suggest-input`,
        type: `text`,
        value: f,
        onChange: R,
        placeholder: `food, music, sport…`,
        maxLength: 40,
        autoComplete: `off`,
        autoCapitalize: `off`,
        enterKeyHint: `send`,
      })),
      (e[29] = f),
      (e[30] = c.category),
      (e[31] = R),
      (e[32] = z))
    : (z = e[32]);
  let B;
  e[33] !== I || e[34] !== z
    ? ((B = (0, p.jsxs)(`div`, {
        className: `suggest-field`,
        children: [I, z],
      })),
      (e[33] = I),
      (e[34] = z),
      (e[35] = B))
    : (B = e[35]);
  let V;
  e[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, p.jsx)(`span`, {
        className: `suggest-optional`,
        children: `(optional)`,
      })),
      (e[36] = V))
    : (V = e[36]);
  let H;
  e[37] === c.examples
    ? (H = e[38])
    : ((H = (0, p.jsxs)(`label`, {
        htmlFor: c.examples,
        children: [`A few answers you'd expect `, V],
      })),
      (e[37] = c.examples),
      (e[38] = H));
  let U = c.examples,
    W;
  e[39] === k ? (W = e[40]) : ((W = k(b)), (e[39] = k), (e[40] = W));
  let G;
  e[41] !== y || e[42] !== c.examples || e[43] !== W
    ? ((G = (0, p.jsx)(`input`, {
        id: U,
        className: `suggest-input`,
        type: `text`,
        value: y,
        onChange: W,
        placeholder: `brie, cheddar, gouda`,
        maxLength: 200,
        autoComplete: `off`,
        autoCapitalize: `off`,
        enterKeyHint: `send`,
      })),
      (e[41] = y),
      (e[42] = c.examples),
      (e[43] = W),
      (e[44] = G))
    : (G = e[44]);
  let K;
  e[45] !== H || e[46] !== G
    ? ((K = (0, p.jsxs)(`div`, {
        className: `suggest-field`,
        children: [H, G],
      })),
      (e[45] = H),
      (e[46] = G),
      (e[47] = K))
    : (K = e[47]);
  let q = T.length >= 3,
    J;
  e[48] !== x || e[49] !== q
    ? ((J = (0, p.jsx)(v, { label: `Send question`, ready: q, status: x })),
      (e[48] = x),
      (e[49] = q),
      (e[50] = J))
    : (J = e[50]);
  let Y;
  return (
    e[51] !== x ||
    e[52] !== D ||
    e[53] !== P ||
    e[54] !== B ||
    e[55] !== K ||
    e[56] !== J
      ? ((Y = (0, p.jsxs)(_, {
          title: `Suggest a question`,
          status: x,
          onSubmit: D,
          children: [P, B, K, J],
        })),
        (e[51] = x),
        (e[52] = D),
        (e[53] = P),
        (e[54] = B),
        (e[55] = K),
        (e[56] = J),
        (e[57] = Y))
      : (Y = e[57]),
    Y
  );
}
function b() {
  let e = (0, o.c)(28),
    t = (0, s.useId)(),
    n = (0, s.useId)(),
    [r, i] = (0, s.useState)(``),
    { status: l, send: u, edited: d } = g(),
    f;
  e[0] === r ? (f = e[1]) : ((f = a(r)), (e[0] = r), (e[1] = f));
  let m = f,
    h;
  e[2] !== u || e[3] !== m
    ? ((h = () => {
        m && u({ kind: `idea`, text: m }, () => i(``));
      }),
      (e[2] = u),
      (e[3] = m),
      (e[4] = h))
    : (h = e[4]);
  let y = h,
    b;
  e[5] === t
    ? (b = e[6])
    : ((b = (0, p.jsx)(`label`, {
        htmlFor: t,
        children: `Ideas, bugs, anything`,
      })),
      (e[5] = t),
      (e[6] = b));
  let x;
  e[7] === d
    ? (x = e[8])
    : ((x = (e) => {
        (i(e.currentTarget.value), d());
      }),
      (e[7] = d),
      (e[8] = x));
  let S;
  e[9] !== t || e[10] !== r || e[11] !== n || e[12] !== x
    ? ((S = (0, p.jsx)(`textarea`, {
        id: t,
        className: `suggest-input suggest-idea`,
        value: r,
        onChange: x,
        "aria-describedby": n,
        maxLength: c,
        rows: 5,
      })),
      (e[9] = t),
      (e[10] = r),
      (e[11] = n),
      (e[12] = x),
      (e[13] = S))
    : (S = e[13]);
  let C;
  e[14] !== b || e[15] !== S
    ? ((C = (0, p.jsxs)(`div`, {
        className: `suggest-field`,
        children: [b, S],
      })),
      (e[14] = b),
      (e[15] = S),
      (e[16] = C))
    : (C = e[16]);
  let w;
  e[17] === n
    ? (w = e[18])
    : ((w = (0, p.jsx)(`p`, {
        className: `suggest-note`,
        id: n,
        children: `To ask for an answer to count, tap "Should this count?" on its result.`,
      })),
      (e[17] = n),
      (e[18] = w));
  let T = m.length > 0,
    E;
  e[19] !== l || e[20] !== T
    ? ((E = (0, p.jsx)(v, { label: `Send`, ready: T, status: l })),
      (e[19] = l),
      (e[20] = T),
      (e[21] = E))
    : (E = e[21]);
  let D;
  return (
    e[22] !== l || e[23] !== y || e[24] !== C || e[25] !== w || e[26] !== E
      ? ((D = (0, p.jsxs)(_, {
          title: `Anything else?`,
          status: l,
          onSubmit: y,
          children: [C, w, E],
        })),
        (e[22] = l),
        (e[23] = y),
        (e[24] = C),
        (e[25] = w),
        (e[26] = E),
        (e[27] = D))
      : (D = e[27]),
    D
  );
}
function x() {
  let e = (0, o.c)(4),
    t,
    n,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, p.jsx)(`p`, { className: `home-kicker`, children: `Suggest` })),
      (n = (0, p.jsx)(`h1`, { children: `Suggest a question` })),
      (r = (0, p.jsx)(`p`, {
        className: `suggest-lede`,
        children: `Got a question for the crowd? Send it and we'll look at it for the Daily. We read every one.`,
      })),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r))
    : ((t = e[0]), (n = e[1]), (r = e[2]));
  let i;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, p.jsxs)(`main`, {
          className: `home-legal suggest-page`,
          children: [
            t,
            n,
            r,
            (0, p.jsxs)(`div`, {
              className: `suggest-cards`,
              children: [(0, p.jsx)(y, {}), (0, p.jsx)(b, {})],
            }),
          ],
        })),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
var S = x;
export { S as component };
