import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./react-dom-D0hKRYVm.js";
import { t as i } from "./link-CFi9sgXA.js";
import { t as a } from "./jsx-runtime-D_h4s5mO.js";
import {
  F as o,
  R as s,
  U as c,
  W as l,
  _ as u,
  b as d,
  c as f,
  d as p,
  f as m,
  g as h,
  h as g,
  m as _,
  n as v,
  p as y,
  s as b,
  u as x,
  v as S,
  w as C,
  x as w,
  y as T,
} from "./rules-DxwvjuIt.js";
import { t as E } from "./storage-Cd9DMQud.js";
import {
  a as D,
  b as O,
  c as ee,
  d as te,
  i as k,
  o as ne,
  p as re,
  s as ie,
  u as ae,
} from "./main-BXKF3zmu.js";
import { t as A } from "./audio-BdxWxAxT.js";
import {
  a as oe,
  i as se,
  n as ce,
  o as le,
  r as j,
  s as ue,
  t as M,
} from "./runs-DrM9YA6U.js";
import {
  a as de,
  i as N,
  n as fe,
  r as pe,
  t as me,
} from "./rules-2q26py_F.js";
import { t as P } from "./clean-text-C3rG4fQV.js";
import { i as he, n as F, t as ge } from "./icons-DDwzIPdf.js";
import { c as _e } from "./game-ui-DEL71d58.js";
import { s as ve } from "./stage-toggle-LI6FLr3n.js";
function ye(e, t, n = !1) {
  !t.trim() ||
    M() ||
    fetch(`/api/refused`, {
      method: `POST`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify(n ? { p: e, t, r: !0 } : { p: e, t }),
      keepalive: !0,
    }).catch(() => void 0);
}
var I = n(),
  L = e(t(), 1),
  R = a(),
  be = `Couldn't send. Try again.`;
function xe(e, t) {
  return e.failed && !e.open
    ? be
    : e.saved === `up`
      ? `Thanks`
      : e.saved === `down`
        ? `Thanks, this helps us fix it.`
        : t;
}
var z = (e) => e.preventDefault();
function B(e) {
  let t = (0, I.c)(30),
    { fb: n, panelId: r, ask: i } = e,
    a = (0, L.useId)(),
    o = n.sending !== null || void 0,
    s = n.saved ?? void 0,
    c = (n.failed && !n.open) || void 0,
    l;
  t[0] !== i || t[1] !== n
    ? ((l = xe(n, i)), (t[0] = i), (t[1] = n), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== a || t[4] !== l
    ? ((u = (0, R.jsx)(`p`, {
        className: `fb-ask`,
        id: a,
        "aria-live": `polite`,
        children: l,
      })),
      (t[3] = a),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === n
    ? (d = t[7])
    : ((d = () => n.dispatch({ type: `up` })), (t[6] = n), (t[7] = d));
  let f = n.saved === `up`,
    p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, R.jsx)(`span`, { "aria-hidden": `true`, children: `👍` })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== o || t[10] !== d || t[11] !== f
    ? ((m = (0, R.jsx)(`button`, {
        type: `button`,
        className: `fb-thumb`,
        onPointerDown: z,
        onClick: d,
        "aria-disabled": o,
        "aria-pressed": f,
        "aria-label": `Thumbs up`,
        children: p,
      })),
      (t[9] = o),
      (t[10] = d),
      (t[11] = f),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === n
    ? (h = t[14])
    : ((h = () => n.dispatch({ type: `down` })), (t[13] = n), (t[14] = h));
  let g = n.saved === `down`,
    _ = n.open ? r : void 0,
    v = n.open || void 0,
    y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, R.jsx)(`span`, { "aria-hidden": `true`, children: `👎` })),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== o ||
  t[17] !== n.open ||
  t[18] !== g ||
  t[19] !== _ ||
  t[20] !== v ||
  t[21] !== h
    ? ((b = (0, R.jsx)(`button`, {
        type: `button`,
        className: `fb-thumb`,
        onPointerDown: z,
        onClick: h,
        "aria-disabled": o,
        "aria-pressed": g,
        "aria-label": `Thumbs down`,
        "aria-expanded": n.open,
        "aria-controls": _,
        "data-active": v,
        children: y,
      })),
      (t[16] = o),
      (t[17] = n.open),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v),
      (t[21] = h),
      (t[22] = b))
    : (b = t[22]);
  let x;
  return (
    t[23] !== a ||
    t[24] !== s ||
    t[25] !== b ||
    t[26] !== c ||
    t[27] !== u ||
    t[28] !== m
      ? ((x = (0, R.jsxs)(`div`, {
          className: `fb`,
          role: `group`,
          "aria-labelledby": a,
          "data-saved": s,
          "data-failed": c,
          children: [u, m, b],
        })),
        (t[23] = a),
        (t[24] = s),
        (t[25] = b),
        (t[26] = c),
        (t[27] = u),
        (t[28] = m),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function V(e) {
  let t = (0, I.c)(40),
    { fb: n, id: r, title: i, overlay: a } = e,
    o = (0, L.useRef)(null),
    s = (0, L.useId)(),
    c,
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        o.current?.focus();
      }),
      (l = []),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1])),
    (0, L.useEffect)(c, l));
  let u = a ? `dialog` : `group`,
    d = a || void 0,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, R.jsx)(`span`, { "aria-hidden": `true`, children: `👎` })),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== i || t[4] !== s
    ? ((p = (0, R.jsxs)(`p`, {
        className: `fb-panel-title`,
        id: s,
        children: [i, ` `, f],
      })),
      (t[3] = i),
      (t[4] = s),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, R.jsx)(`span`, { "aria-hidden": `true`, children: `×` })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === n.close
    ? (h = t[8])
    : ((h = (0, R.jsx)(`button`, {
        type: `button`,
        className: `fb-close`,
        onClick: n.close,
        "aria-label": `Close`,
        children: m,
      })),
      (t[7] = n.close),
      (t[8] = h));
  let g;
  t[9] !== p || t[10] !== h
    ? ((g = (0, R.jsxs)(`div`, {
        className: `fb-panel-head`,
        children: [p, h],
      })),
      (t[9] = p),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] === n
    ? (_ = t[13])
    : ((_ = n.reasonsList.map((e, t) =>
        (0, R.jsxs)(
          `label`,
          {
            className: `fb-reason`,
            children: [
              (0, R.jsx)(`input`, {
                ref: t === 0 ? o : void 0,
                type: `checkbox`,
                checked: n.reasons.includes(e.id),
                onChange: () => n.dispatch({ type: `toggle`, reason: e.id }),
              }),
              (0, R.jsx)(`span`, { children: e.label }),
            ],
          },
          e.id,
        ),
      )),
      (t[12] = n),
      (t[13] = _));
  let v;
  t[14] === _
    ? (v = t[15])
    : ((v = (0, R.jsx)(`div`, { className: `fb-reasons`, children: _ })),
      (t[14] = _),
      (t[15] = v));
  let y;
  t[16] === n
    ? (y = t[17])
    : ((y = (e) => n.dispatch({ type: `note`, note: e.target.value })),
      (t[16] = n),
      (t[17] = y));
  let b;
  t[18] !== n.note || t[19] !== y
    ? ((b = (0, R.jsx)(`textarea`, {
        className: `fb-note`,
        value: n.note,
        maxLength: 300,
        rows: 2,
        placeholder: `Optional note`,
        "aria-label": `Optional note`,
        onChange: y,
      })),
      (t[18] = n.note),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x = n.failed ? be : ``,
    S;
  t[21] === x
    ? (S = t[22])
    : ((S = (0, R.jsx)(`p`, {
        className: `fb-error`,
        role: `status`,
        children: x,
      })),
      (t[21] = x),
      (t[22] = S));
  let C;
  t[23] === n
    ? (C = t[24])
    : ((C = () => n.dispatch({ type: `send` })), (t[23] = n), (t[24] = C));
  let w = n.sending !== null || void 0,
    T;
  t[25] !== C || t[26] !== w
    ? ((T = (0, R.jsx)(`button`, {
        type: `button`,
        className: `fb-send`,
        onClick: C,
        "aria-disabled": w,
        children: `Send`,
      })),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] !== S || t[29] !== T
    ? ((E = (0, R.jsxs)(`div`, {
        className: `fb-panel-foot`,
        children: [S, T],
      })),
      (t[28] = S),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D;
  return (
    t[31] !== r ||
    t[32] !== v ||
    t[33] !== b ||
    t[34] !== E ||
    t[35] !== u ||
    t[36] !== d ||
    t[37] !== g ||
    t[38] !== s
      ? ((D = (0, R.jsxs)(`div`, {
          className: `fb-panel`,
          id: r,
          role: u,
          "aria-labelledby": s,
          "data-overlay": d,
          children: [g, v, b, E],
        })),
        (t[31] = r),
        (t[32] = v),
        (t[33] = b),
        (t[34] = E),
        (t[35] = u),
        (t[36] = d),
        (t[37] = g),
        (t[38] = s),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
var Se = 4e3;
async function Ce(e) {
  if (M()) return !1;
  let t = new AbortController(),
    n = setTimeout(() => t.abort(), Se);
  try {
    return (
      (
        await fetch(`/api/feedback`, {
          method: `POST`,
          headers: { "content-type": `application/json` },
          body: JSON.stringify({ ...e, device: ce() }),
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
var H = () => void 0;
function we(e, t, n, r, i) {
  let a = (0, L.useRef)({ key: e, ui: me });
  a.current.key !== e && (a.current = { key: e, ui: me });
  let [, o] = (0, L.useReducer)((e) => e + 1, 0),
    s = (0, L.useRef)({ list: t, build: n, onSaved: i });
  s.current = { list: t, build: n, onSaved: i };
  let c = (0, L.useCallback)(() => {
      requestAnimationFrame(() => r.current?.focus());
    }, [r]),
    l = (0, L.useCallback)((e, t) => {
      if (a.current.key !== e) return null;
      let n = de(
        a.current.ui,
        t,
        s.current.list.map((e) => e.id),
      );
      return ((a.current = { key: e, ui: n.ui }), o(), n);
    }, []),
    u = (0, L.useCallback)(
      (e) => {
        let t = a.current.key,
          n = a.current.ui.open,
          r = l(t, e);
        if (!r) return;
        e.type === `up` && !r.send && n && !r.ui.open && c();
        let i = r.send;
        if (!i) return;
        let o = s.current,
          u = o.build?.(i, r.ui.reasons, r.ui.note) ?? null;
        (u ? Ce(u) : Promise.resolve(!1))
          .then((e) => {
            e && o.onSaved?.(i);
            let n = l(t, { type: `done`, rating: i, ok: e });
            e && n && c();
          })
          .catch(H);
      },
      [l, c],
    ),
    d = (0, L.useCallback)(() => {
      (l(a.current.key, { type: `close` }), c());
    }, [l, c]);
  return { ...a.current.ui, reasonsList: t, dispatch: u, close: d };
}
var U = (e) =>
  e.kind === `daily`
    ? { mode: `daily`, date: e.date }
    : { mode: `unlimited`, seed: e.seed };
function W(e, t, n) {
  if (e === `up`) return {};
  let r = P(n);
  return r ? { reasons: [...t], note: r } : { reasons: [...t] };
}
var Te = { device: ``, rating: `up` };
function Ee(e) {
  let t = (0, I.c)(10),
    { kind: n, reveal: r, stage: i, returnFocus: a } = e,
    o = r !== null && n !== null && (n.kind === `daily` || r.index <= 999),
    s,
    c,
    l;
  t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== i
    ? ((s = o
        ? {
            kind: `prompt`,
            stage: i,
            slot: r.index,
            promptId: r.result.promptId,
            answer: r.result.typed.trim(),
            ...U(n),
          }
        : null),
      (c = s && ((e, t, n) => ({ ...s, rating: e, ...W(e, t, n) }))),
      (l = s && N({ ...s, ...Te })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : ((s = t[4]), (c = t[5]), (l = t[6]));
  let u = l,
    d;
  t[7] !== s || t[8] !== i
    ? ((d = (e) => {
        s && O(`prompt_feedback`, { mode: s.mode, rating: e, stage: i });
      }),
      (t[7] = s),
      (t[8] = i),
      (t[9] = d))
    : (d = t[9]);
  let f = we(u, fe, c, a, d);
  return u === null ? null : f;
}
function De(e) {
  let t = (0, I.c)(7),
    { kind: n, stage: r, active: i, returnFocus: a } = e,
    o,
    s;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e = i && n ? { kind: `stage`, stage: r, ...U(n) } : null;
    ((o = e && ((t, n, r) => ({ ...e, rating: t, ...W(t, n, r) }))),
      (s = e && N({ ...e, ...Te })),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s));
  } else ((o = t[3]), (s = t[4]));
  let c = s,
    l;
  t[5] === r
    ? (l = t[6])
    : ((l = (e) => O(`stage_feedback`, { stage: r, rating: e })),
      (t[5] = r),
      (t[6] = l));
  let u = we(c, pe, o, a, l);
  return c === null ? null : u;
}
var G = (e, t) => `${e} ${t}${e === 1 ? `` : `s`}`;
function K(e) {
  let t = Math.floor(e / 6e4),
    n = Math.floor(t / 60),
    r = t % 60;
  return n > 0
    ? `${G(n, `hour`)} ${G(r, `minute`)}`
    : r > 0
      ? G(r, `minute`)
      : `less than a minute`;
}
function q(e, t, n) {
  return e.last !== t || e.n < 1
    ? null
    : n
      ? e.n === 1
        ? `Make it a 2-day streak`
        : `Keep your ${e.n}-day streak`
      : e.n === 1
        ? `Streak started`
        : `${e.n}-day streak`;
}
function J(e, t, n) {
  let r = l(e),
    i = c(e) !== t;
  return { ready: i, left: _e(r), spoken: K(r), streak: q(n, t, i) };
}
function Y() {
  let e = (0, I.c)(2),
    [t, n] = (0, L.useState)(Oe),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {
          let e = 0,
            t = () => {
              (n(new Date()),
                (e = window.setTimeout(t, 1e3 - (Date.now() % 1e3) + 5)));
            };
          return (t(), () => window.clearTimeout(e));
        }),
        (i = []),
        (e[0] = r),
        (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, L.useEffect)(r, i),
    t
  );
}
function Oe() {
  return new Date();
}
var ke = [`h0`, `h1`, `c0`, `m0`, `m1`, `c1`, `s0`, `s1`];
function X(e) {
  let t = (0, I.c)(13),
    { left: n, spoken: r } = e,
    i,
    a,
    o;
  if (t[0] !== n) {
    let e = ke.map((e, t) => ({ slot: e, ch: n.charAt(t) }));
    ((o = `og-stub-time`),
      (i = `true`),
      (a = e.map(Ae)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o));
  } else ((i = t[1]), (a = t[2]), (o = t[3]));
  let s;
  t[4] !== i || t[5] !== a
    ? ((s = (0, R.jsx)(`span`, { "aria-hidden": i, children: a })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, R.jsx)(`span`, { className: `visually-hidden`, children: r })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== o || t[10] !== s || t[11] !== c
      ? ((l = (0, R.jsxs)(`p`, { className: o, children: [s, c] })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function Ae(e) {
  return e.ch === `:`
    ? (0, R.jsx)(`span`, { className: `colon`, children: `:` }, e.slot)
    : (0, R.jsx)(
        `span`,
        { className: `digit`, children: e.ch },
        `${e.slot}${e.ch}`,
      );
}
function Z(e) {
  let t = (0, I.c)(3),
    { text: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(he, {})), (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsxs)(`p`, {
          className: `og-stub-note`,
          children: [r, n],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Q(e) {
  let t = (0, I.c)(24),
    n = e.action,
    r;
  t[0] === n.title
    ? (r = t[1])
    : ((r = (0, R.jsx)(`span`, { className: `t`, children: n.title })),
      (t[0] = n.title),
      (t[1] = r));
  let a;
  t[2] === n.sub
    ? (a = t[3])
    : ((a = (0, R.jsx)(`span`, { className: `s`, children: n.sub })),
      (t[2] = n.sub),
      (t[3] = a));
  let o;
  t[4] === n.icon
    ? (o = t[5])
    : ((o = (0, R.jsx)(`span`, {
        className: `i`,
        children: n.icon === `again` ? (0, R.jsx)(ge, {}) : (0, R.jsx)(F, {}),
      })),
      (t[4] = n.icon),
      (t[5] = o));
  let s;
  t[6] !== r || t[7] !== a || t[8] !== o
    ? ((s = (0, R.jsxs)(R.Fragment, { children: [r, a, o] })),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = s))
    : (s = t[9]);
  let c = s,
    l = e.hot || void 0,
    u;
  t[10] === e.kicker
    ? (u = t[11])
    : ((u = (0, R.jsx)(`p`, {
        className: `og-stub-kicker`,
        children: e.kicker,
      })),
      (t[10] = e.kicker),
      (t[11] = u));
  let d;
  t[12] !== e.main || t[13] !== e.note || t[14] !== u
    ? ((d = (0, R.jsxs)(`div`, {
        className: `og-stub-info`,
        children: [u, e.main, e.note],
      })),
      (t[12] = e.main),
      (t[13] = e.note),
      (t[14] = u),
      (t[15] = d))
    : (d = t[15]);
  let f;
  t[16] !== n.onClick || t[17] !== n.to || t[18] !== c
    ? ((f = n.to
        ? (0, R.jsx)(i, {
            to: n.to,
            className: `og-stub-go`,
            onClick: n.onClick,
            children: c,
          })
        : (0, R.jsx)(`button`, {
            type: `button`,
            className: `og-stub-go`,
            onClick: n.onClick,
            children: c,
          })),
      (t[16] = n.onClick),
      (t[17] = n.to),
      (t[18] = c),
      (t[19] = f))
    : (f = t[19]);
  let p;
  return (
    t[20] !== l || t[21] !== d || t[22] !== f
      ? ((p = (0, R.jsxs)(`div`, {
          className: `og-stub`,
          "data-hot": l,
          children: [d, f],
        })),
        (t[20] = l),
        (t[21] = d),
        (t[22] = f),
        (t[23] = p))
      : (p = t[23]),
    p
  );
}
function je(e) {
  let t = (0, I.c)(11),
    { date: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { date: n }), (t[0] = n), (t[1] = r));
  let a;
  t[2] === n ? (a = t[3]) : ((a = C(n)), (t[2] = n), (t[3] = a));
  let o;
  t[4] !== r || t[5] !== a
    ? ((o = (0, R.jsxs)(i, {
        to: `/leaderboard`,
        search: r,
        className: `og-stub-link`,
        children: [`No. `, a, `'s leaderboard`],
      })),
      (t[4] = r),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s, c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, R.jsx)(`p`, {
        className: `og-stub-note`,
        children: `Replays don't count toward your streak`,
      })),
      (c = {
        title: `More days`,
        sub: `The archive`,
        icon: `arrow`,
        to: `/archive`,
        onClick: Me,
      }),
      (t[7] = s),
      (t[8] = c))
    : ((s = t[7]), (c = t[8]));
  let l;
  return (
    t[9] === o
      ? (l = t[10])
      : ((l = (0, R.jsx)(Q, {
          kicker: `From the archive`,
          main: o,
          note: s,
          action: c,
        })),
        (t[9] = o),
        (t[10] = l)),
    l
  );
}
function Me() {}
function Ne(e) {
  let t = (0, I.c)(3),
    { date: n, archive: r } = e,
    i = r === void 0 ? !1 : r,
    a;
  return (
    t[0] !== i || t[1] !== n
      ? ((a = i ? (0, R.jsx)(je, { date: n }) : (0, R.jsx)(Pe, { date: n })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function Pe(e) {
  let t = (0, I.c)(21),
    { date: n } = e,
    r = Y(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = J(r, n, E.streak())), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === o.streak
    ? (s = t[4])
    : ((s = o.streak ? (0, R.jsx)(Z, { text: o.streak }) : null),
      (t[3] = o.streak),
      (t[4] = s));
  let c;
  t[5] === n
    ? (c = t[6])
    : ((c = (0, R.jsx)(`p`, {
        className: `og-stub-note`,
        children: (0, R.jsx)(i, {
          to: `/leaderboard`,
          search: { date: n },
          className: `og-stub-link`,
          children: `See today's top 100`,
        }),
      })),
      (t[5] = n),
      (t[6] = c));
  let l;
  t[7] !== s || t[8] !== c
    ? ((l = (0, R.jsxs)(R.Fragment, { children: [s, c] })),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u = l;
  if (o.ready) {
    let e;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, R.jsx)(`p`, {
          className: `og-stub-big`,
          children: `Ready now`,
        })),
        (t[10] = e))
      : (e = t[10]);
    let n;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          title: `Play today's 10`,
          sub: `10 new questions`,
          icon: `arrow`,
          onClick: Ie,
        }),
        (t[11] = n))
      : (n = t[11]);
    let r;
    return (
      t[12] === u
        ? (r = t[13])
        : ((r = (0, R.jsx)(Q, {
            hot: !0,
            kicker: `New daily`,
            main: e,
            note: u,
            action: n,
          })),
          (t[12] = u),
          (t[13] = r)),
      r
    );
  }
  let d = `Next daily in ${o.spoken}`,
    f;
  t[14] !== o.left || t[15] !== d
    ? ((f = (0, R.jsx)(X, { left: o.left, spoken: d })),
      (t[14] = o.left),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = {
        title: `Play Unlimited`,
        sub: `Free · endless`,
        icon: `arrow`,
        to: `/unlimited`,
        onClick: Fe,
      }),
      (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== u || t[19] !== f
      ? ((m = (0, R.jsx)(Q, {
          kicker: `Next daily`,
          main: f,
          note: u,
          action: p,
        })),
        (t[18] = u),
        (t[19] = f),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function Fe() {
  return O(`next_open`, { mode: `daily`, target: `unlimited` });
}
function Ie() {
  (O(`next_open`, { mode: `daily`, target: `daily` }),
    window.location.reload());
}
function Le(e) {
  let t = (0, I.c)(20),
    { onAgain: n } = e,
    r = Y(),
    a,
    o,
    s;
  if (t[0] !== r || t[1] !== n) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = c(r),
        l = E.getDaily(e)?.done === !0,
        u;
      if (
        (t[5] === n
          ? (u = t[6])
          : ((u = {
              title: `Play again`,
              sub: `Unlimited · free`,
              icon: `again`,
              onClick: () => {
                (O(`next_open`, { mode: `unlimited`, target: `again` }), n());
              },
            }),
            (t[5] = n),
            (t[6] = u)),
        (a = u),
        !l)
      ) {
        let e, n;
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsxs)(i, {
              to: `/`,
              className: `og-stub-link`,
              onClick: Re,
              children: [`Play today's 10`, (0, R.jsx)(F, {})],
            })),
            (n = (0, R.jsx)(`p`, {
              className: `og-stub-note`,
              children: `Ten new questions, every day`,
            })),
            (t[7] = e),
            (t[8] = n))
          : ((e = t[7]), (n = t[8]));
        let r;
        (t[9] === a
          ? (r = t[10])
          : ((r = (0, R.jsx)(Q, {
              kicker: `Today's daily`,
              main: e,
              note: n,
              action: a,
            })),
            (t[9] = a),
            (t[10] = r)),
          (s = r));
        break bb0;
      }
      o = J(r, e, E.streak());
    }
    ((t[0] = r), (t[1] = n), (t[2] = a), (t[3] = o), (t[4] = s));
  } else ((a = t[2]), (o = t[3]), (s = t[4]));
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let l = o,
    u = `Next daily in ${l.spoken}`,
    d;
  t[11] !== l.left || t[12] !== u
    ? ((d = (0, R.jsx)(X, { left: l.left, spoken: u })),
      (t[11] = l.left),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === l.streak
    ? (f = t[15])
    : ((f = l.streak ? (0, R.jsx)(Z, { text: l.streak }) : null),
      (t[14] = l.streak),
      (t[15] = f));
  let p;
  return (
    t[16] !== a || t[17] !== d || t[18] !== f
      ? ((p = (0, R.jsx)(Q, {
          kicker: `Next daily`,
          main: d,
          note: f,
          action: a,
        })),
        (t[16] = a),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function Re() {
  return O(`next_open`, { mode: `unlimited`, target: `daily` });
}
var ze = () => void 0;
function Be(e) {
  if (typeof requestIdleCallback == `function`) {
    let t = requestIdleCallback(e, { timeout: 2e3 });
    return () => cancelIdleCallback(t);
  }
  let t = setTimeout(e, 0);
  return () => clearTimeout(t);
}
function Ve(e) {
  let t = null,
    n = null,
    r = () => (
      (t ??= e().catch((e) => {
        throw ((t = null), (n = null), e);
      })),
      t
    );
  return {
    preload: r,
    preloadWhenIdle: () =>
      Be(() => {
        r().catch(ze);
      }),
    get: () => ((n ??= (0, L.lazy)(r)), n),
  };
}
var He = class extends L.Component {
    state = { failed: !1 };
    static getDerivedStateFromError() {
      return { failed: !0 };
    }
    componentDidCatch(e) {
      this.props.onError(e);
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  },
  Ue = e(r(), 1),
  We = { stage: `climb` },
  $ = () => performance.now() + (window.__openClockOffset || 0),
  Ge = (e) => Math.round(e / 100) * 100;
function Ke(e) {
  return e.kind === `daily`
    ? 10
    : Number.isFinite(e.length)
      ? e.length === 20
        ? 20
        : 10
      : `endless`;
}
function qe(e, t = `home`, n = {}) {
  let r = n.stage === `climb`,
    [i, a] = (0, L.useState)(`intro`),
    [s, c] = (0, L.useState)(null),
    [l, C] = (0, L.useState)(f),
    [ne, oe] = (0, L.useState)(null),
    [se, ce] = (0, L.useState)(0),
    [le, j] = (0, L.useState)(null),
    [ue, M] = (0, L.useState)(0),
    [de, N] = (0, L.useState)(0),
    [fe, pe] = (0, L.useState)(``),
    [me, P] = (0, L.useState)(!1),
    [he, F] = (0, L.useState)(null),
    [ge, _e] = (0, L.useState)(null),
    [I, R] = (0, L.useState)(e),
    [be, xe] = (0, L.useState)(!1),
    z = (0, L.useRef)(null),
    B = (0, L.useRef)(e),
    V = (0, L.useRef)(null),
    Se = (0, L.useRef)(null),
    Ce = (0, L.useRef)(`intro`),
    H = (0, L.useRef)(!1),
    we = (0, L.useRef)(!1),
    U = (0, L.useRef)(0),
    W = (0, L.useRef)({ held: !1, pending: null }),
    Te = (0, L.useRef)(null),
    Ee = (0, L.useRef)(new Map()),
    De = (0, L.useRef)({}),
    G = (0, L.useCallback)((e) => {
      ((z.current = e), c(e));
    }, []),
    K = (0, L.useCallback)((e) => {
      ((Ce.current = e), a(e));
    }, []),
    q = (0, L.useCallback)(() => {
      let e = B.current,
        t = z.current?.prompts ?? e?.prompts ?? [];
      return re(e?.challengers ?? [], t);
    }, []),
    J = (0, L.useCallback)((e) => {
      let t = B.current,
        n = {},
        r = 0;
      for (let t of e) r += t.people;
      n.you = r;
      let i = z.current?.prompts ?? t?.prompts ?? [];
      for (let r of ie(t?.challengers ?? [], i.slice(0, e.length)))
        n[r.key] = r.people;
      return n;
    }, []),
    Y = (0, L.useCallback)((e) => {
      let t = B.current,
        n = {},
        r = 0;
      for (let t of e) r += t.points;
      n.you = r;
      let i = z.current?.prompts ?? t?.prompts ?? [];
      for (let r of ie(t?.challengers ?? [], i.slice(0, e.length)))
        n[r.key] = r.points;
      return n;
    }, []);
  (0, L.useEffect)(() => {
    if (((B.current = e), R(e), e)) {
      for (let t of e.prompts) Ee.current.set(t.id, t);
      if (e.finished && e.finished.length > 0 && Ce.current === `intro`) {
        F(e.finished);
        let t = 0;
        for (let n of e.finished) t += n.people;
        (M(t),
          K(`end`),
          V.current?.setMode(`end`, q(), J(e.finished)),
          V.current?.setScores?.(Y(e.finished)));
      }
    }
  }, [e, K, q, J, Y]);
  let Oe = (0, L.useCallback)(() => {
      let e = V.current;
      if (!e) return;
      let n = Ce.current,
        r = z.current?.results ?? he ?? B.current?.finished ?? [];
      n === `intro`
        ? e.setMode(t, q())
        : (e.setMode(n, q(), J(r)), e.setScores?.(Y(r)));
    }, [q, J, Y, t, he]),
    ke = (0, L.useCallback)(
      (e) => {
        ((V.current = e), xe(e !== null), e && Oe());
      },
      [Oe],
    ),
    X = (0, L.useCallback)((e, t) => {
      let n = B.current;
      !n?.saves ||
        n.kind.kind !== `daily` ||
        E.setDaily(n.kind.date, {
          v: 2,
          date: n.kind.date,
          results: e.results,
          index: t ? e.results.length : e.index + 1,
          done: t,
          total: w(e),
          people: d(e),
        });
    }, []),
    Ae = (0, L.useCallback)((e) => {
      let t = B.current;
      if (!t?.index || t.kind.kind !== `unlimited`) return null;
      let n = v(t.index, t.kind.seed, e),
        r = Ee.current.get(n.id);
      return r
        ? Promise.resolve(r)
        : ve(n.id).then((e) => (Ee.current.set(e.id, e), e));
    }, []),
    Z = (0, L.useCallback)(
      (e, t = !1) => {
        let n = B.current,
          i = u(e);
        (G(i),
          X(i, !0),
          F(i.results),
          j(null),
          (H.current = !1),
          K(`end`),
          t && _e(Date.now()),
          n?.saves &&
            n.kind.kind === `daily` &&
            !n.archive &&
            E.bumpStreak(n.kind.date),
          V.current?.setMode(`end`, q(), J(i.results)),
          V.current?.setScores?.(Y(i.results)),
          A.play(`sparkle`, { delay: 1.4 }),
          A.duck(0.2, 3.1),
          n &&
            (E.bumpBest(D(n.kind), w(i)),
            O(`run_complete`, {
              mode: n.kind.kind,
              points: w(i),
              people: d(i),
              outliers: ae(i.results),
              title: b(i.results).id,
              ...(r ? We : {}),
            })));
      },
      [G, X, K, q, J, Y, r],
    ),
    Q = (0, L.useCallback)(
      async (e) => {
        if (e !== U.current) return;
        if (W.current.held) {
          W.current.pending = () => {
            Q(e).catch(() => void 0);
          };
          return;
        }
        if ((A.setFastForward(!1), Ce.current !== `run`)) return;
        let t = z.current;
        if (!t || t.phase !== `reveal`) return;
        if (o(t.index, t.length)) {
          Z(t, !0);
          return;
        }
        let n = B.current,
          r = t;
        if (n?.kind.kind === `unlimited` && t.index + 1 >= t.prompts.length) {
          let n = Ae(t.index + 1);
          if (n) {
            P(!0);
            try {
              await n;
            } catch {
              (P(!1), e === U.current && Z(t));
              return;
            }
            if ((P(!1), e !== U.current)) return;
          }
          ((r = z.current ?? t),
            Ae(t.index + 2)?.catch(() => void 0),
            Ae(t.index + 3)?.catch(() => void 0));
        }
        let i = x(r, $());
        if (
          (G(i),
          (H.current = !1),
          j(null),
          oe(null),
          C(i.limitMs),
          M(d(i)),
          N(w(i)),
          Se.current && (Se.current.value = ``),
          i.phase === `done`)
        ) {
          Z(i, !0);
          return;
        }
        (Se.current?.focus({ preventScroll: !0 }), A.play(`question-in`));
      },
      [G, Z, Ae],
    ),
    je = (0, L.useCallback)(
      (e) => {
        let t = B.current,
          n = e.index,
          i = e.prompts[n],
          a = e.results.at(-1);
        if (!i || !a || !t) return;
        U.current += 1;
        let s = U.current;
        ((H.current = !0), (we.current = !1));
        let c = ee(t.challengers, i, n);
        (j({ index: n, result: a, prompt: i, card: !1, friends: c, shown: [] }),
          pe(``),
          oe(null),
          X(e, !1),
          O(`answer`, {
            mode: t.kind.kind,
            round: n + 1,
            weight: a.weight,
            band: a.band ?? -1,
            ...(a.band === null && a.reason ? { reason: a.reason } : {}),
            ...(r ? We : {}),
          }));
        let l = V.current,
          u = () => {
            s === U.current &&
              ((we.current = !0),
              r && A.setFastForward(!1),
              j((e) => (e && e.index === n ? { ...e, card: !0 } : e)),
              pe(k(a)),
              N(w(e)));
          };
        ((De.current.card = u),
          l
            ? l
                .reveal(te(i, n, a, c, o(n, e.length)))
                .then(() => Q(s))
                .catch(() => {
                  Q(s).catch(() => void 0);
                })
            : (A.play(a.band === null ? `timeout` : `submit`),
              setTimeout(u, 250),
              setTimeout(() => {
                s === U.current && M(d(e));
              }, 900),
              setTimeout(() => {
                Q(s).catch(() => void 0);
              }, 2600)));
      },
      [Q, X, r],
    );
  ((0, L.useEffect)(() => {
    let e = De.current;
    ((e.sound = (e) =>
      A.play(e.event, { rate: e.rate, gain: e.gain, delay: e.delay })),
      (e.landed = (e) => {
        e.band === 4 ? A.duck(0.15, 4.2) : e.band === 3 && A.duck(0.45, 3);
      }),
      (e.follower = (e) => {
        e.key === `you` && M(e.count);
      }),
      (e.friend = (e) => {
        j((t) =>
          t && !t.shown.includes(e.key)
            ? { ...t, shown: [...t.shown, e.key] }
            : t,
        );
      }),
      (e.haptic = (e) => {
        if (typeof navigator.vibrate != `function`) return;
        let t = { light: 8, medium: 14, success: 24, selection: 5 }[e.kind];
        try {
          navigator.vibrate(t);
        } catch {}
      }),
      (e.quality = (e) => {
        (Ce.current === `run` && E.setQuality(e.tier),
          O(`quality_tier`, { tier: e.tier }));
      }));
  }, []),
    (0, L.useEffect)(() => {
      if (i !== `run`) return;
      let e = 0,
        t = -1,
        n = 0,
        r = () => {
          let i = z.current;
          if (i && i.phase === `playing` && i.pausedAt === null && !H.current) {
            let e = $(),
              r = g(i, e);
            e - n > 90 && (C(r), (n = e));
            let a = Math.ceil(r / 1e3);
            a !== t &&
              (a >= 1 &&
                a <= 5 &&
                A.play(`clock`, { rate: a === 1 ? 1.12 : 1 }),
              (t = a));
            let o = T(i, e);
            o !== i && (G(o), o.phase === `reveal` && je(o));
          }
          e = requestAnimationFrame(r);
        };
      return ((e = requestAnimationFrame(r)), () => cancelAnimationFrame(e));
    }, [i, G, je]),
    (0, L.useEffect)(() => {
      let e = () => {
        let e = z.current;
        !e ||
          e.phase !== `playing` ||
          G(document.hidden ? _(e, $()) : h(e, $()));
      };
      return (
        document.addEventListener(`visibilitychange`, e),
        () => document.removeEventListener(`visibilitychange`, e)
      );
    }, [G]));
  let Me = (0, L.useCallback)(
      (e) => {
        let t = $();
        ((U.current += 1),
          (W.current = { held: !1, pending: null }),
          A.unlock(),
          A.play(`start`),
          (0, Ue.flushSync)(() => {
            (K(`run`), F(null), j(null), oe(null), _e(null));
          }),
          Se.current?.focus({ preventScroll: !0 }));
        let n = (e) => {
          ((B.current = e), R(e));
          for (let t of e.prompts) Ee.current.set(t.id, t);
          let n =
              e.kind.kind === `unlimited` && !Number.isFinite(e.kind.length),
            i = m({
              prompts: e.prompts,
              length: e.kind.kind === `daily` ? 10 : e.kind.length,
              next: n
                ? (t) => {
                    let n = v(
                        e.index ?? [],
                        e.kind.kind === `unlimited` ? e.kind.seed : 0,
                        t,
                      ),
                      r = Ee.current.get(n.id);
                    if (!r) throw Error(`prompt ${n.id} not loaded`);
                    return r;
                  }
                : void 0,
            }),
            a = e.resume && e.resume.index > 0 ? e.resume : null;
          (a && (i = { ...i, results: a.results, index: a.index }),
            (i = p(i, $())),
            G(i),
            C(i.limitMs),
            M(d(i)),
            N(w(i)),
            V.current?.setMode(`run`, q(), J(i.results)),
            V.current?.setScores?.(Y(i.results)),
            A.play(`question-in`, { delay: 0.15 }),
            O(`run_start`, {
              mode: e.kind.kind,
              length: Ke(e.kind),
              challenge: e.challengers.length > 0,
              players: e.challengers.length,
              resumed: a !== null,
              ...(r ? We : {}),
            }),
            (Te.current = a ? null : $()),
            a ||
              O(`first_prompt`, { mode: e.kind.kind, wait_ms: Ge($() - t) }));
        };
        e
          ? (P(!0),
            e
              .then((e) => {
                (P(!1), n(e));
              })
              .catch(() => {
                (P(!1), K(`intro`));
              }))
          : B.current && n(B.current);
      },
      [K, G, q, J, Y, r],
    ),
    Ne = (0, L.useCallback)(
      (e) => {
        let t = z.current;
        if (!t || t.phase !== `playing` || H.current) return;
        let n = S(t, e, $());
        if (n !== t) {
          if ((G(n), n.phase === `reveal`)) je(n);
          else if (n.refused) {
            (oe(n.refused),
              ce((e) => e + 1),
              A.play(`reject`),
              Se.current?.select());
            let e = n.prompts[n.index];
            e && ye(e.id, n.refused);
          }
        }
      },
      [G, je],
    ),
    Pe = (0, L.useCallback)(() => {
      let e = z.current;
      if (!e || e.phase !== `playing` || H.current) return;
      let t = y(e, $());
      (G(t), t.phase === `reveal` && je(t));
    }, [G, je]),
    Fe = (0, L.useCallback)(() => {
      H.current &&
        ((r && we.current) || (A.setFastForward(!0), V.current?.fastForward()));
    }, [r]),
    Ie = (0, L.useCallback)(() => {
      let e = z.current,
        n = B.current;
      if (!(!e || !n)) {
        if (H.current) {
          if (!r || !we.current) return;
          if (
            ((U.current += 1), (H.current = !1), j(null), o(e.index, e.length))
          ) {
            Z(e, !0);
            return;
          }
        }
        if (
          ((W.current = { held: !1, pending: null }),
          _e(null),
          n.kind.kind === `daily`)
        ) {
          (G(_(e, $())),
            K(`intro`),
            V.current?.setMode(t, q()),
            n.saves &&
              e.results.length > 0 &&
              X({ ...e, index: e.results.length - 1 }, !1),
            (B.current = {
              ...n,
              resume: { results: e.results, index: e.results.length },
            }),
            R(B.current));
          return;
        }
        if (e.results.length === 0) {
          (G(null), K(`intro`), V.current?.setMode(t, q()));
          return;
        }
        Z(e);
      }
    }, [G, K, Z, X, q, t, r]),
    Le = (0, L.useCallback)(() => {
      ((U.current += 1),
        (W.current = { held: !1, pending: null }),
        G(null),
        F(null),
        _e(null),
        K(`intro`),
        V.current?.setMode(t, q()));
    }, [G, K, q, t]),
    Re = (0, L.useCallback)((e) => {
      let t = e ? null : W.current.pending;
      ((W.current = { held: e, pending: e ? W.current.pending : null }), t?.());
    }, []);
  window.__openGame = {
    snapshot: () => ({
      screen: Ce.current,
      run: z.current,
      remaining: l,
      refused: ne,
      reveal: le,
      people: ue,
      points: de,
      setup: B.current,
      ready: be,
    }),
    skip: Fe,
    pass: Pe,
    quit: Ie,
    advance: (ms) => {
      window.__openClockOffset = (window.__openClockOffset || 0) + ms;
      if (ms >= 500 && H.current) V.current?.fastForward();
    },
  };
  return {
    screen: i,
    run: s,
    remaining: l,
    refused: ne,
    refusals: se,
    reveal: le,
    people: ue,
    points: de,
    announceText: fe,
    waiting: me,
    finalResults: he,
    liveEnd: ge,
    inputRef: Se,
    handlers: De,
    stageRef: V,
    onStage: ke,
    start: Me,
    submit: Ne,
    pass: Pe,
    skip: Fe,
    onType: (0, L.useCallback)(() => {
      let e = Te.current,
        t = B.current,
        n = z.current;
      e === null ||
        !t ||
        !n ||
        ((Te.current = null),
        O(`first_type`, {
          mode: t.kind.kind,
          round: n.index + 1,
          ms: Ge($() - e),
        }));
    }, []),
    quit: Ie,
    backToIntro: Le,
    holdReveal: Re,
    setupRef: B,
    setup: I,
    stageReady: be,
  };
}
function Je(e) {
  let t = (0, I.c)(15),
    {
      rootRef: n,
      inputRef: r,
      active: i,
      revealing: a,
      lockPage: o,
      onSkip: s,
    } = e,
    c,
    l;
  (t[0] !== i || t[1] !== o
    ? ((c = () => {
        if (!o || !i) return;
        window.scrollTo({ top: 0, behavior: `instant` });
        let e = document.body,
          t = {
            position: e.style.position,
            top: e.style.top,
            width: e.style.width,
          };
        return (
          (e.style.position = `fixed`),
          (e.style.top = `0`),
          (e.style.width = `100%`),
          () => {
            (Object.assign(e.style, t),
              window.scrollTo({ top: 0, behavior: `instant` }));
          }
        );
      }),
      (l = [o, i]),
      (t[0] = i),
      (t[1] = o),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3])),
    (0, L.useLayoutEffect)(c, l));
  let u, d;
  (t[4] !== i || t[5] !== n
    ? ((u = () => {
        let e = n.current;
        if (!e) return;
        if (!i) {
          e.style.removeProperty(`--vvh`);
          return;
        }
        let t = window.visualViewport,
          r = () => {
            let n = t?.height ?? window.innerHeight;
            (e.style.setProperty(`--vvh`, `${Math.round(n)}px`),
              t?.offsetTop && window.scrollTo({ top: 0, behavior: `instant` }));
          };
        return (
          t?.addEventListener(`resize`, r),
          t?.addEventListener(`scroll`, r),
          window.addEventListener(`resize`, r),
          r(),
          () => {
            (t?.removeEventListener(`resize`, r),
              t?.removeEventListener(`scroll`, r),
              window.removeEventListener(`resize`, r));
          }
        );
      }),
      (d = [n, i]),
      (t[4] = i),
      (t[5] = n),
      (t[6] = u),
      (t[7] = d))
    : ((u = t[6]), (d = t[7])),
    (0, L.useLayoutEffect)(u, d));
  let f, p;
  (t[8] !== i || t[9] !== r || t[10] !== s || t[11] !== a || t[12] !== n
    ? ((f = () => {
        let e = n.current;
        if (!e || !i) return;
        let t = (e) => {
          let t = e.target instanceof Element ? e.target : null;
          !t ||
            t.closest(
              `button, input, textarea, a, label, .og-sheet, .og-pop, .fb-panel`,
            ) ||
            (e.preventDefault(),
            a && s(),
            r.current?.focus({ preventScroll: !0 }));
        };
        return (
          e.addEventListener(`pointerdown`, t),
          () => e.removeEventListener(`pointerdown`, t)
        );
      }),
      (p = [n, r, i, a, s]),
      (t[8] = i),
      (t[9] = r),
      (t[10] = s),
      (t[11] = a),
      (t[12] = n),
      (t[13] = f),
      (t[14] = p))
    : ((f = t[13]), (p = t[14])),
    (0, L.useEffect)(f, p));
}
var Ye = () => void 0;
function Xe(e) {
  let t = (0, I.c)(36),
    {
      kind: n,
      results: r,
      challengers: i,
      via: a,
      reposted: o,
      keepLong: c,
      id: l,
      saves: u,
      stage: d,
    } = e,
    [f, p] = (0, L.useState)(``),
    [m, h] = (0, L.useState)(`idle`),
    [g, _] = (0, L.useState)(null),
    [v, y] = (0, L.useState)(null),
    [b, x] = (0, L.useState)(null),
    S = (0, L.useRef)(``),
    C = (0, L.useRef)(null),
    w = (0, L.useRef)(null),
    T = (0, L.useRef)(!1),
    D = (0, L.useRef)(0),
    O = (0, L.useRef)(0),
    ee,
    te;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = () => {
        let e = E.nickname() ?? s();
        ((S.current = e), p(e));
      }),
      (te = []),
      (t[0] = ee),
      (t[1] = te))
    : ((ee = t[0]), (te = t[1])),
    (0, L.useEffect)(ee, te));
  let k = n?.kind === `daily` ? n.date : null,
    re = k !== null && u && !o,
    ie;
  t[2] !== k || t[3] !== re
    ? ((ie = (e, t) => {
        if (t !== D.current) return;
        let n = {
          id: e.id,
          root: e.root,
          ...(e.percentile ? { percentile: e.percentile } : {}),
        };
        (_(n),
          y(e),
          h(`done`),
          E.addOwnRun(e.id),
          re && k && E.setRun(k, n),
          S.current !== C.current &&
            ((C.current = S.current), le(e.id, S.current).catch(Ye)));
      }),
      (t[2] = k),
      (t[3] = re),
      (t[4] = ie))
    : (ie = t[4]);
  let ae = ie,
    A;
  t[5] !== ae ||
  t[6] !== k ||
  t[7] !== l ||
  t[8] !== re ||
  t[9] !== n ||
  t[10] !== o ||
  t[11] !== r ||
  t[12] !== d ||
  t[13] !== m ||
  t[14] !== a
    ? ((A = () => {
        if (!n || T.current || m === `done`) return;
        let e = ue(n, r);
        if (!e) return;
        if (re && k) {
          let e = E.getRun(k);
          if (e) {
            ((C.current = E.nickname()), _(e), h(`done`));
            return;
          }
        }
        let t = S.current || s();
        ((S.current = t),
          p(t),
          E.setNickname(t),
          (C.current = t),
          w.current === null && (w.current = l ?? oe(8)),
          (T.current = !0),
          h(`posting`));
        let i = D.current;
        se(
          {
            id: w.current,
            name: t,
            run: e,
            ...(a ? { via: a } : {}),
            ...(o ? { reposted: !0 } : {}),
            ...(d ? { stage: d } : {}),
          },
          (e) => ae(e, i),
        )
          .then((e) => {
            e ? ae(e, i) : i === D.current && h(`failed`);
          })
          .catch(() => {
            i === D.current && h(`failed`);
          })
          .finally(() => {
            i === D.current && (T.current = !1);
          });
      }),
      (t[5] = ae),
      (t[6] = k),
      (t[7] = l),
      (t[8] = re),
      (t[9] = n),
      (t[10] = o),
      (t[11] = r),
      (t[12] = d),
      (t[13] = m),
      (t[14] = a),
      (t[15] = A))
    : (A = t[15]);
  let ce = A,
    M;
  t[16] === g
    ? (M = t[17])
    : ((M = (e) => {
        ((S.current = e),
          p(e),
          E.setNickname(e),
          g && C.current !== e && ((C.current = e), le(g.id, e).catch(Ye)));
      }),
      (t[16] = g),
      (t[17] = M));
  let de = M,
    N;
  t[18] === g?.id
    ? (N = t[19])
    : ((N = (e) => {
        let t = e ?? g?.id;
        if (!t) return Promise.resolve();
        let n = D.current;
        O.current += 1;
        let r = O.current;
        return j(t)
          .then((e) => {
            e && n === D.current && r === O.current && x(e);
          })
          .catch(Ye);
      }),
      (t[18] = g?.id),
      (t[19] = N));
  let fe = N,
    pe;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = () => {
        ((D.current += 1),
          (w.current = null),
          (T.current = !1),
          (C.current = null),
          h(`idle`),
          _(null),
          y(null),
          x(null));
      }),
      (t[20] = pe))
    : (pe = t[20]);
  let me = pe,
    P;
  t[21] !== i || t[22] !== n || t[23] !== f || t[24] !== r
    ? ((P = n && f ? ne(n, i, f, r) : null),
      (t[21] = i),
      (t[22] = n),
      (t[23] = f),
      (t[24] = r),
      (t[25] = P))
    : (P = t[25]);
  let he = P,
    F = c ? he : (g?.id ?? he),
    ge;
  return (
    t[26] !== b ||
    t[27] !== F ||
    t[28] !== ce ||
    t[29] !== f ||
    t[30] !== g ||
    t[31] !== fe ||
    t[32] !== de ||
    t[33] !== v ||
    t[34] !== m
      ? ((ge = {
          nickname: f,
          status: m,
          record: g,
          reply: v,
          board: b,
          code: F,
          ensure: ce,
          rename: de,
          refreshBoard: fe,
          reset: me,
        }),
        (t[26] = b),
        (t[27] = F),
        (t[28] = ce),
        (t[29] = f),
        (t[30] = g),
        (t[31] = fe),
        (t[32] = de),
        (t[33] = v),
        (t[34] = m),
        (t[35] = ge))
      : (ge = t[35]),
    ge
  );
}
export {
  Ve as a,
  Le as c,
  V as d,
  B as f,
  He as i,
  Ee as l,
  Je as n,
  Be as o,
  ye as p,
  qe as r,
  Ne as s,
  Xe as t,
  De as u,
};
