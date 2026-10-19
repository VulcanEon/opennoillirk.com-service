import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./jsx-runtime-D_h4s5mO.js";
import {
  B as i,
  G as a,
  N as o,
  U as s,
  V as c,
  a as l,
  o as u,
  q as d,
  s as f,
  z as p,
} from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import { b as m, l as h } from "./main-BXKF3zmu.js";
import { t as g } from "./audio-BdxWxAxT.js";
import { r as _ } from "./icons-DDwzIPdf.js";
import {
  _ as v,
  a as y,
  b,
  c as x,
  d as S,
  g as C,
  h as ee,
  i as te,
  m as ne,
  n as re,
  p as ie,
  r as w,
  s as T,
  u as E,
  w as ae,
  y as oe,
} from "./copy-CMIldnKw.js";
import {
  a as se,
  c as ce,
  d as le,
  i as ue,
  l as de,
  n as fe,
  o as pe,
  s as me,
  u as he,
} from "./poster-icons-C6vhkpTx.js";
var D = n(),
  O = e(t(), 1),
  k = r(),
  ge = [`#A36815`, `#D33860`, `#8E4B8F`, `#4E6A7A`],
  _e = (e) => String(e.people);
function ve(e, t) {
  if (e.you) return `#D9360D`;
  if (e.id === t) return `#3A5FD0`;
  let n = 0;
  for (let t of e.id) n = (n * 31 + t.charCodeAt(0)) % 997;
  return ge[n % ge.length] ?? `#4E6A7A`;
}
function ye(e) {
  let t = (0, D.c)(26),
    { title: n, count: r, rows: i, inviterId: a, fresh: o, score: s } = e,
    c = s === void 0 ? _e : s,
    l;
  t[0] === r ? (l = t[1]) : ((l = v(r)), (t[0] = r), (t[1] = l));
  let d = `${n}, ${l} played`,
    f;
  t[2] === n
    ? (f = t[3])
    : ((f = (0, k.jsx)(`span`, { children: n })), (t[2] = n), (t[3] = f));
  let p;
  t[4] === r ? (p = t[5]) : ((p = v(r)), (t[4] = r), (t[5] = p));
  let m;
  t[6] === p
    ? (m = t[7])
    : ((m = (0, k.jsxs)(`span`, { children: [p, ` played`] })),
      (t[6] = p),
      (t[7] = m));
  let h;
  t[8] !== f || t[9] !== m
    ? ((h = (0, k.jsxs)(`p`, {
        className: `og-lb-hd`,
        "aria-hidden": `true`,
        children: [f, m],
      })),
      (t[8] = f),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g;
  if (t[11] !== o || t[12] !== a || t[13] !== i || t[14] !== c) {
    let e;
    (t[16] !== o || t[17] !== a || t[18] !== c
      ? ((e = (e) => {
          let { row: t, rank: n } = e;
          return (0, k.jsxs)(
            `li`,
            {
              className: t.you ? `me` : void 0,
              children: [
                (0, k.jsx)(`span`, { className: `rk`, children: n }),
                (0, k.jsx)(`span`, {
                  className: `og-av`,
                  style: { background: ve(t, a) },
                  "aria-hidden": `true`,
                  children: (t.you ? `Y` : t.name.charAt(0)).toUpperCase(),
                }),
                (0, k.jsxs)(`span`, {
                  className: `nm`,
                  children: [
                    (0, k.jsxs)(`b`, {
                      children: [
                        t.you ? `You` : t.name,
                        t.you &&
                          o &&
                          (0, k.jsx)(`span`, {
                            className: `new`,
                            children: `NEW`,
                          }),
                      ],
                    }),
                    (0, k.jsx)(`small`, { children: u[t.title]?.title ?? `` }),
                  ],
                }),
                (0, k.jsx)(`span`, { className: `ppl`, children: c(t) }),
              ],
            },
            t.id,
          );
        }),
        (t[16] = o),
        (t[17] = a),
        (t[18] = c),
        (t[19] = e))
      : (e = t[19]),
      (g = i.map(e)),
      (t[11] = o),
      (t[12] = a),
      (t[13] = i),
      (t[14] = c),
      (t[15] = g));
  } else g = t[15];
  let _;
  t[20] === g
    ? (_ = t[21])
    : ((_ = (0, k.jsx)(`ol`, { children: g })), (t[20] = g), (t[21] = _));
  let y;
  return (
    t[22] !== d || t[23] !== h || t[24] !== _
      ? ((y = (0, k.jsxs)(`section`, {
          className: `og-lb`,
          "aria-label": d,
          children: [h, _],
        })),
        (t[22] = d),
        (t[23] = h),
        (t[24] = _),
        (t[25] = y))
      : (y = t[25]),
    y
  );
}
var be = (e) => [...e];
function xe(e) {
  let t = (0, D.c)(20),
    {
      title: n,
      board: r,
      me: i,
      inviterId: a,
      fresh: o,
      loading: s,
      onBack: c,
      score: l,
      order: u,
    } = e,
    d = u === void 0 ? be : u,
    f;
  t[0] === c
    ? (f = t[1])
    : ((f = (0, k.jsx)(`div`, {
        className: `og-boardview-hd`,
        children: (0, k.jsx)(`button`, {
          type: `button`,
          className: `og-back`,
          onClick: c,
          children: `Back`,
        }),
      })),
      (t[0] = c),
      (t[1] = f));
  let p;
  t[2] === n
    ? (p = t[3])
    : ((p = (0, k.jsx)(`h2`, {
        id: `og-pop-title`,
        className: `og-pop-title`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = p));
  let m;
  t[4] !== r ||
  t[5] !== o ||
  t[6] !== a ||
  t[7] !== i ||
  t[8] !== d ||
  t[9] !== l ||
  t[10] !== n
    ? ((m =
        r &&
        (0, k.jsx)(`div`, {
          className: `og-lb-more`,
          children: (0, k.jsx)(ye, {
            title: n,
            count: r.count,
            rows: te(d(r.top), i, r.rank, 20),
            inviterId: a,
            fresh: o,
            score: l,
          }),
        })),
      (t[4] = r),
      (t[5] = o),
      (t[6] = a),
      (t[7] = i),
      (t[8] = d),
      (t[9] = l),
      (t[10] = n),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== r || t[13] !== s
    ? ((h =
        !r &&
        s &&
        (0, k.jsx)(`p`, {
          className: `og-lb-empty`,
          children: `Loading the board…`,
        })),
      (t[12] = r),
      (t[13] = s),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== f || t[16] !== p || t[17] !== m || t[18] !== h
      ? ((g = (0, k.jsxs)(k.Fragment, { children: [f, p, m, h] })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
var A = { ArrowLeft: -1, ArrowRight: 1 };
function Se(e, t, n, r) {
  let i = A[e.key];
  i !== void 0 && (e.preventDefault(), r(Math.min(n - 1, Math.max(0, t + i))));
}
function Ce(e) {
  let t = (0, D.c)(3),
    n = (0, O.useRef)(null),
    r,
    i;
  return (
    t[0] === e
      ? ((r = t[1]), (i = t[2]))
      : ((r = () => {
          let t = n.current;
          t?.contains(document.activeElement) &&
            t.querySelector(`[data-index="${e}"]`)?.focus();
        }),
        (i = [e]),
        (t[0] = e),
        (t[1] = r),
        (t[2] = i)),
    (0, O.useEffect)(r, i),
    n
  );
}
function we(e) {
  let t = (0, D.c)(9),
    { url: n, alt: r } = e,
    [i, a] = (0, O.useState)(n),
    o;
  t[0] !== r || t[1] !== i
    ? ((o = (0, k.jsx)(`img`, {
        src: i,
        alt: r,
        width: 1080,
        height: 1350,
        draggable: !1,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== i || t[4] !== n
    ? ((s =
        n !== i &&
        (0, k.jsx)(
          `img`,
          {
            src: n,
            alt: ``,
            "aria-hidden": `true`,
            className: `fresh`,
            width: 1080,
            height: 1350,
            draggable: !1,
            onAnimationEnd: () => a(n),
          },
          n,
        )),
      (t[3] = i),
      (t[4] = n),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, k.jsxs)(`span`, { className: `og-cimg`, children: [o, s] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Te(e) {
  let t = (0, D.c)(15),
    { cards: n, pick: r, onPick: i } = e,
    a = Ce(r),
    o = (0, O.useRef)(null),
    s = (0, O.useRef)(!1),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e) => {
        ((o.current = e.clientX), (s.current = !1));
      }),
      (t[0] = c))
    : (c = t[0]);
  let l = c,
    u;
  t[1] !== n.length || t[2] !== i || t[3] !== r
    ? ((u = (e) => {
        if (o.current === null) return;
        let t = e.clientX - o.current;
        ((o.current = null),
          !(Math.abs(t) < 36) &&
            ((s.current = !0),
            i(Math.min(n.length - 1, Math.max(0, r + (t < 0 ? 1 : -1))))));
      }),
      (t[1] = n.length),
      (t[2] = i),
      (t[3] = r),
      (t[4] = u))
    : (u = t[4]);
  let d = u;
  if (n.length === 0) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(`div`, {
            className: `og-fan`,
            "aria-hidden": `true`,
            children: (0, k.jsx)(`span`, {
              className: `og-fan-card og-skel`,
              "data-offset": `0`,
            }),
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, k.jsx)(`legend`, {
        className: `visually-hidden`,
        children: `Share cards`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== n || t[8] !== i || t[9] !== r || t[10] !== d
    ? ((p = n.map((e, t) =>
        (0, k.jsx)(
          `button`,
          {
            type: `button`,
            className: `og-fan-card`,
            "data-index": t,
            "data-offset": Math.max(-2, Math.min(2, t - r)),
            "aria-pressed": t === r,
            "aria-label": e.name,
            tabIndex: t === r ? 0 : -1,
            onPointerDown: l,
            onPointerUp: d,
            onPointerCancel: () => {
              o.current = null;
            },
            onClick: () => {
              if (s.current) {
                s.current = !1;
                return;
              }
              i(t);
            },
            onKeyDown: (e) => Se(e, r, n.length, i),
            children: (0, k.jsx)(we, { url: e.url, alt: `${e.name} card` }),
          },
          e.kind,
        ),
      )),
      (t[7] = n),
      (t[8] = i),
      (t[9] = r),
      (t[10] = d),
      (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== a || t[13] !== p
      ? ((m = (0, k.jsxs)(`fieldset`, {
          className: `og-fan`,
          ref: a,
          children: [f, p],
        })),
        (t[12] = a),
        (t[13] = p),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
function Ee(e) {
  let t = (0, D.c)(15),
    { cards: n, pick: r, onPick: i, className: a, size: o } = e,
    s = Ce(r),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, k.jsx)(`legend`, {
        className: `visually-hidden`,
        children: `Choose a card`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  if (t[1] !== n || t[2] !== i || t[3] !== r || t[4] !== o) {
    let e;
    (t[6] !== n.length || t[7] !== i || t[8] !== r || t[9] !== o
      ? ((e = (e, t) =>
          (0, k.jsx)(
            `button`,
            {
              type: `button`,
              "data-index": t,
              "aria-pressed": t === r,
              "aria-label": e.name,
              tabIndex: t === r ? 0 : -1,
              onClick: () => i(t),
              onKeyDown: (e) => Se(e, r, n.length, i),
              children: (0, k.jsx)(`img`, {
                src: e.url,
                alt: ``,
                width: o[0],
                height: o[1],
              }),
            },
            e.kind,
          )),
        (t[6] = n.length),
        (t[7] = i),
        (t[8] = r),
        (t[9] = o),
        (t[10] = e))
      : (e = t[10]),
      (l = n.map(e)),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o),
      (t[5] = l));
  } else l = t[5];
  let u;
  return (
    t[11] !== s || t[12] !== a || t[13] !== l
      ? ((u = (0, k.jsxs)(`fieldset`, {
          className: a,
          ref: s,
          children: [c, l],
        })),
        (t[11] = s),
        (t[12] = a),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function De(e) {
  let t = (0, D.c)(13),
    { cards: n, pick: r, onPick: i } = e,
    a = n[r],
    o = a ? `og-hero-card` : `og-hero-card og-skel`,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a && (0, k.jsx)(we, { url: a.url, alt: `${a.name} card` })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] !== o || t[3] !== s
    ? ((c = (0, k.jsx)(`span`, { className: o, children: s })),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [54, 68]), (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] !== n || t[7] !== i || t[8] !== r
    ? ((u = (0, k.jsx)(Ee, {
        cards: n,
        pick: r,
        onPick: i,
        className: `og-thumbs`,
        size: l,
      })),
      (t[6] = n),
      (t[7] = i),
      (t[8] = r),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== c || t[11] !== u
      ? ((d = (0, k.jsxs)(k.Fragment, { children: [c, u] })),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Oe(e) {
  let t = (0, D.c)(10),
    { cards: n, pick: r, onPick: i, note: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = [82, 103]), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== n || t[2] !== i || t[3] !== r
    ? ((s = (0, k.jsx)(Ee, {
        cards: n,
        pick: r,
        onPick: i,
        className: `og-minis`,
        size: o,
      })),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === a
    ? (c = t[6])
    : ((c = (0, k.jsx)(`p`, { className: `og-cardstrip-note`, children: a })),
      (t[5] = a),
      (t[6] = c));
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, k.jsxs)(`div`, {
          className: `og-cardstrip`,
          children: [s, c],
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function ke() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `share` }),
            (0, k.jsx)(`path`, {
              d: `M10 13V3M6 7l4-4 4 4M4 11v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function j() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `copy` }),
            (0, k.jsx)(`rect`, {
              x: `7`,
              y: `7`,
              width: `10`,
              height: `10`,
              rx: `2`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
            }),
            (0, k.jsx)(`path`, {
              d: `M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              strokeLinecap: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ae() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `save` }),
            (0, k.jsx)(`path`, {
              d: `M10 3v10M6 9l4 4 4-4M4 15v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function je() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 16 16`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `trend` }),
            (0, k.jsx)(`path`, {
              d: `M2 12l4-4 3 3 5-6M10 5h4v4`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Me() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `done` }),
            (0, k.jsx)(`path`, {
              d: `M4.5 10.5 8 14l7.5-8`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ne() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `WhatsApp` }),
            (0, k.jsx)(`path`, {
              fill: `currentColor`,
              d: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `X` }),
            (0, k.jsx)(`path`, {
              fill: `currentColor`,
              d: `M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fe() {
  let e = (0, D.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": `true`,
          children: [
            (0, k.jsx)(`title`, { children: `Reddit` }),
            (0, k.jsx)(`path`, {
              fill: `currentColor`,
              d: `M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ie(e) {
  let t = (0, D.c)(40),
    { name: n, onRename: r } = e,
    [a, o] = (0, O.useState)(!1),
    [s, l] = (0, O.useState)(n),
    u = (0, O.useRef)(null),
    d = (0, O.useRef)(null),
    f = (0, O.useRef)(!1),
    m,
    h;
  (t[0] === a
    ? ((m = t[1]), (h = t[2]))
    : ((m = () => {
        a
          ? (u.current?.focus(), u.current?.select())
          : f.current &&
            ((f.current = !1), d.current?.focus({ preventScroll: !0 }));
      }),
      (h = [a]),
      (t[0] = a),
      (t[1] = m),
      (t[2] = h)),
    (0, O.useEffect)(m, h));
  let g;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        ((f.current = !0), o(!1));
      }),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    v,
    y;
  t[4] === s
    ? ((v = t[5]), (y = t[6]))
    : ((y = c(s)),
      (v = y.length > 0 && p(y)),
      (t[4] = s),
      (t[5] = v),
      (t[6] = y));
  let b = v,
    x;
  t[7] !== b || t[8] !== r || t[9] !== y
    ? ((x = (e) => {
        (e.preventDefault(), b && (r(i(y)), _()));
      }),
      (t[7] = b),
      (t[8] = r),
      (t[9] = y),
      (t[10] = x))
    : (x = t[10]);
  let S = x,
    C;
  t[11] === n
    ? (C = t[12])
    : ((C = (e) => {
        e.key === `Escape` &&
          (e.stopPropagation(),
          e.nativeEvent.stopImmediatePropagation(),
          l(n),
          _());
      }),
      (t[11] = n),
      (t[12] = C));
  let ee = C;
  if (!a) {
    let e;
    t[13] === n
      ? (e = t[14])
      : ((e = n.charAt(0).toUpperCase()), (t[13] = n), (t[14] = e));
    let r;
    t[15] === e
      ? (r = t[16])
      : ((r = (0, k.jsx)(`span`, {
          className: `og-av`,
          "aria-hidden": `true`,
          children: e,
        })),
        (t[15] = e),
        (t[16] = r));
    let i;
    t[17] === n
      ? (i = t[18])
      : ((i = (0, k.jsxs)(`span`, { children: [`Sending as `, n, ` ·`] })),
        (t[17] = n),
        (t[18] = i));
    let a;
    t[19] === n
      ? (a = t[20])
      : ((a = (0, k.jsx)(`button`, {
          ref: d,
          type: `button`,
          className: `og-name-edit`,
          onClick: () => {
            (l(n), o(!0));
          },
          children: `Edit`,
        })),
        (t[19] = n),
        (t[20] = a));
    let s;
    return (
      t[21] !== a || t[22] !== r || t[23] !== i
        ? ((s = (0, k.jsxs)(`p`, {
            className: `og-name`,
            children: [r, i, a],
          })),
          (t[21] = a),
          (t[22] = r),
          (t[23] = i),
          (t[24] = s))
        : (s = t[24]),
      s
    );
  }
  let te;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, k.jsx)(`label`, {
        htmlFor: `og-name-input`,
        className: `visually-hidden`,
        children: `Your name on the board`,
      })),
      (t[25] = te))
    : (te = t[25]);
  let ne;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (e) => l(e.target.value)), (t[26] = ne))
    : (ne = t[26]);
  let re;
  t[27] !== ee || t[28] !== s
    ? ((re = (0, k.jsx)(`input`, {
        id: `og-name-input`,
        ref: u,
        value: s,
        maxLength: 16,
        autoComplete: `nickname`,
        enterKeyHint: `done`,
        onChange: ne,
        onKeyDown: ee,
      })),
      (t[27] = ee),
      (t[28] = s),
      (t[29] = re))
    : (re = t[29]);
  let ie = !b,
    w;
  t[30] === ie
    ? (w = t[31])
    : ((w = (0, k.jsx)(`button`, {
        type: `submit`,
        disabled: ie,
        children: `Done`,
      })),
      (t[30] = ie),
      (t[31] = w));
  let T;
  t[32] !== b || t[33] !== y
    ? ((T =
        !b &&
        y.length > 0 &&
        (0, k.jsx)(`p`, {
          className: `og-name-hint`,
          children: `Letters, numbers, spaces and . - _ only.`,
        })),
      (t[32] = b),
      (t[33] = y),
      (t[34] = T))
    : (T = t[34]);
  let E;
  return (
    t[35] !== S || t[36] !== w || t[37] !== T || t[38] !== re
      ? ((E = (0, k.jsxs)(`form`, {
          className: `og-name-form`,
          onSubmit: S,
          children: [te, re, w, T],
        })),
        (t[35] = S),
        (t[36] = w),
        (t[37] = T),
        (t[38] = re),
        (t[39] = E))
      : (E = t[39]),
    E
  );
}
var M = ((e) => (
    (e[(e.Border = -1)] = `Border`),
    (e[(e.Data = 0)] = `Data`),
    (e[(e.Function = 1)] = `Function`),
    (e[(e.Position = 2)] = `Position`),
    (e[(e.Timing = 3)] = `Timing`),
    (e[(e.Alignment = 4)] = `Alignment`),
    e
  ))(M || {}),
  N = [0, 1],
  P = [1, 0],
  Le = [2, 3],
  F = [3, 2],
  Re = { L: N, M: P, Q: Le, H: F },
  ze = /^\d*$/,
  I = /^[A-Z0-9 $%*+./:-]*$/,
  Be = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,
  L = 1,
  R = 40,
  Ve = 3,
  He = 3,
  z = 40,
  B = 10,
  V = [
    [
      -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30,
      28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30,
    ],
    [
      -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
      26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
      28, 28, 28, 28, 28,
    ],
    [
      -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
      28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30,
    ],
    [
      -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
      28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30,
    ],
  ],
  H = [
    [
      -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
      10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
    ],
    [
      -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17,
      17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47,
      49,
    ],
    [
      -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
      23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
      65, 68,
    ],
    [
      -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25,
      25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74,
      77, 81,
    ],
  ],
  Ue = class {
    constructor(e, t, n, r) {
      if (((this.version = e), (this.ecc = t), e < L || e > R))
        throw RangeError(`Version value out of range`);
      if (r < -1 || r > 7) throw RangeError(`Mask value out of range`);
      this.size = e * 4 + 17;
      let i = Array.from({ length: this.size }).fill(!1);
      for (let e = 0; e < this.size; e++)
        (this.modules.push(i.slice()), this.types.push(i.map(() => 0)));
      this.drawFunctionPatterns();
      let a = this.addEccAndInterleave(n);
      if ((this.drawCodewords(a), r === -1)) {
        let e = 1e9;
        for (let t = 0; t < 8; t++) {
          (this.applyMask(t), this.drawFormatBits(t));
          let n = this.getPenaltyScore();
          (n < e && ((r = t), (e = n)), this.applyMask(t));
        }
      }
      ((this.mask = r), this.applyMask(r), this.drawFormatBits(r));
    }
    size;
    mask;
    modules = [];
    types = [];
    getModule(e, t) {
      return (
        e >= 0 && e < this.size && t >= 0 && t < this.size && this.modules[t][e]
      );
    }
    drawFunctionPatterns() {
      for (let e = 0; e < this.size; e++)
        (this.setFunctionModule(6, e, e % 2 == 0, M.Timing),
          this.setFunctionModule(e, 6, e % 2 == 0, M.Timing));
      (this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4));
      let e = this.getAlignmentPatternPositions(),
        t = e.length;
      for (let n = 0; n < t; n++)
        for (let r = 0; r < t; r++)
          (n === 0 && r === 0) ||
            (n === 0 && r === t - 1) ||
            (n === t - 1 && r === 0) ||
            this.drawAlignmentPattern(e[n], e[r]);
      (this.drawFormatBits(0), this.drawVersion());
    }
    drawFormatBits(e) {
      let t = (this.ecc[1] << 3) | e,
        n = t;
      for (let e = 0; e < 10; e++) n = (n << 1) ^ ((n >>> 9) * 1335);
      let r = ((t << 10) | n) ^ 21522;
      for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, W(r, e));
      (this.setFunctionModule(8, 7, W(r, 6)),
        this.setFunctionModule(8, 8, W(r, 7)),
        this.setFunctionModule(7, 8, W(r, 8)));
      for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, W(r, e));
      for (let e = 0; e < 8; e++)
        this.setFunctionModule(this.size - 1 - e, 8, W(r, e));
      for (let e = 8; e < 15; e++)
        this.setFunctionModule(8, this.size - 15 + e, W(r, e));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let e = this.version;
      for (let t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973);
      let t = (this.version << 12) | e;
      for (let e = 0; e < 18; e++) {
        let n = W(t, e),
          r = this.size - 11 + (e % 3),
          i = Math.floor(e / 3);
        (this.setFunctionModule(r, i, n), this.setFunctionModule(i, r, n));
      }
    }
    drawFinderPattern(e, t) {
      for (let n = -4; n <= 4; n++)
        for (let r = -4; r <= 4; r++) {
          let i = Math.max(Math.abs(r), Math.abs(n)),
            a = e + r,
            o = t + n;
          a >= 0 &&
            a < this.size &&
            o >= 0 &&
            o < this.size &&
            this.setFunctionModule(a, o, i !== 2 && i !== 4, M.Position);
        }
    }
    drawAlignmentPattern(e, t) {
      for (let n = -2; n <= 2; n++)
        for (let r = -2; r <= 2; r++)
          this.setFunctionModule(
            e + r,
            t + n,
            Math.max(Math.abs(r), Math.abs(n)) !== 1,
            M.Alignment,
          );
    }
    setFunctionModule(e, t, n, r = M.Function) {
      ((this.modules[t][e] = n), (this.types[t][e] = r));
    }
    addEccAndInterleave(e) {
      let t = this.version,
        n = this.ecc;
      if (e.length !== q(t, n)) throw RangeError(`Invalid argument`);
      let r = H[n[0]][t],
        i = V[n[0]][t],
        a = Math.floor(K(t) / 8),
        o = r - (a % r),
        s = Math.floor(a / r),
        c = [],
        l = nt(i);
      for (let t = 0, n = 0; t < r; t++) {
        let r = e.slice(n, n + s - i + (t < o ? 0 : 1));
        n += r.length;
        let a = rt(r, l);
        (t < o && r.push(0), c.push(r.concat(a)));
      }
      let u = [];
      for (let e = 0; e < c[0].length; e++)
        c.forEach((t, n) => {
          (e !== s - i || n >= o) && u.push(t[e]);
        });
      return u;
    }
    drawCodewords(e) {
      if (e.length !== Math.floor(K(this.version) / 8))
        throw RangeError(`Invalid argument`);
      let t = 0;
      for (let n = this.size - 1; n >= 1; n -= 2) {
        n === 6 && (n = 5);
        for (let r = 0; r < this.size; r++)
          for (let i = 0; i < 2; i++) {
            let a = n - i,
              o = (n + 1) & 2 ? r : this.size - 1 - r;
            !this.types[o][a] &&
              t < e.length * 8 &&
              ((this.modules[o][a] = W(e[t >>> 3], 7 - (t & 7))), t++);
          }
      }
    }
    applyMask(e) {
      if (e < 0 || e > 7) throw RangeError(`Mask value out of range`);
      for (let t = 0; t < this.size; t++)
        for (let n = 0; n < this.size; n++) {
          let r;
          switch (e) {
            case 0:
              r = (n + t) % 2 == 0;
              break;
            case 1:
              r = t % 2 == 0;
              break;
            case 2:
              r = n % 3 == 0;
              break;
            case 3:
              r = (n + t) % 3 == 0;
              break;
            case 4:
              r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
              break;
            case 5:
              r = ((n * t) % 2) + ((n * t) % 3) == 0;
              break;
            case 6:
              r = (((n * t) % 2) + ((n * t) % 3)) % 2 == 0;
              break;
            case 7:
              r = (((n + t) % 2) + ((n * t) % 3)) % 2 == 0;
              break;
            default:
              throw Error(`Unreachable`);
          }
          !this.types[t][n] && r && (this.modules[t][n] = !this.modules[t][n]);
        }
    }
    getPenaltyScore() {
      let e = 0;
      for (let t = 0; t < this.size; t++) {
        let n = !1,
          r = 0,
          i = [0, 0, 0, 0, 0, 0, 0];
        for (let a = 0; a < this.size; a++)
          this.modules[t][a] === n
            ? (r++, r === 5 ? (e += Ve) : r > 5 && e++)
            : (this.finderPenaltyAddHistory(r, i),
              n || (e += this.finderPenaltyCountPatterns(i) * z),
              (n = this.modules[t][a]),
              (r = 1));
        e += this.finderPenaltyTerminateAndCount(n, r, i) * z;
      }
      for (let t = 0; t < this.size; t++) {
        let n = !1,
          r = 0,
          i = [0, 0, 0, 0, 0, 0, 0];
        for (let a = 0; a < this.size; a++)
          this.modules[a][t] === n
            ? (r++, r === 5 ? (e += Ve) : r > 5 && e++)
            : (this.finderPenaltyAddHistory(r, i),
              n || (e += this.finderPenaltyCountPatterns(i) * z),
              (n = this.modules[a][t]),
              (r = 1));
        e += this.finderPenaltyTerminateAndCount(n, r, i) * z;
      }
      for (let t = 0; t < this.size - 1; t++)
        for (let n = 0; n < this.size - 1; n++) {
          let r = this.modules[t][n];
          r === this.modules[t][n + 1] &&
            r === this.modules[t + 1][n] &&
            r === this.modules[t + 1][n + 1] &&
            (e += He);
        }
      let t = 0;
      for (let e of this.modules) t = e.reduce((e, t) => e + (t ? 1 : 0), t);
      let n = this.size * this.size,
        r = Math.ceil(Math.abs(t * 20 - n * 10) / n) - 1;
      return ((e += r * B), e);
    }
    getAlignmentPatternPositions() {
      if (this.version === 1) return [];
      {
        let e = Math.floor(this.version / 7) + 2,
          t =
            this.version === 32
              ? 26
              : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2,
          n = [6];
        for (let r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
        return n;
      }
    }
    finderPenaltyCountPatterns(e) {
      let t = e[1],
        n = t > 0 && e[2] === t && e[3] === t * 3 && e[4] === t && e[5] === t;
      return (
        (n && e[0] >= t * 4 && e[6] >= t ? 1 : 0) +
        (n && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
      );
    }
    finderPenaltyTerminateAndCount(e, t, n) {
      return (
        e && (this.finderPenaltyAddHistory(t, n), (t = 0)),
        (t += this.size),
        this.finderPenaltyAddHistory(t, n),
        this.finderPenaltyCountPatterns(n)
      );
    }
    finderPenaltyAddHistory(e, t) {
      (t[0] === 0 && (e += this.size), t.pop(), t.unshift(e));
    }
  };
function U(e, t, n) {
  if (t < 0 || t > 31 || e >>> t) throw RangeError(`Value out of range`);
  for (let r = t - 1; r >= 0; r--) n.push((e >>> r) & 1);
}
function W(e, t) {
  return ((e >>> t) & 1) != 0;
}
var We = class {
    constructor(e, t, n) {
      if (((this.mode = e), (this.numChars = t), (this.bitData = n), t < 0))
        throw RangeError(`Invalid argument`);
      this.bitData = n.slice();
    }
    getData() {
      return this.bitData.slice();
    }
  },
  Ge = [1, 10, 12, 14],
  Ke = [2, 9, 11, 13],
  qe = [4, 8, 16, 16];
function Je(e, t) {
  return e[Math.floor((t + 7) / 17) + 1];
}
function Ye(e) {
  let t = [];
  for (let n of e) U(n, 8, t);
  return new We(qe, e.length, t);
}
function Xe(e) {
  if (!Qe(e)) throw RangeError(`String contains non-numeric characters`);
  let t = [];
  for (let n = 0; n < e.length;) {
    let r = Math.min(e.length - n, 3);
    (U(Number.parseInt(e.substring(n, n + r), 10), r * 3 + 1, t), (n += r));
  }
  return new We(Ge, e.length, t);
}
function Ze(e) {
  if (!$e(e))
    throw RangeError(
      `String contains unencodable characters in alphanumeric mode`,
    );
  let t = [],
    n;
  for (n = 0; n + 2 <= e.length; n += 2) {
    let r = Be.indexOf(e.charAt(n)) * 45;
    ((r += Be.indexOf(e.charAt(n + 1))), U(r, 11, t));
  }
  return (
    n < e.length && U(Be.indexOf(e.charAt(n)), 6, t),
    new We(Ke, e.length, t)
  );
}
function G(e) {
  return e === `` ? [] : Qe(e) ? [Xe(e)] : $e(e) ? [Ze(e)] : [Ye(tt(e))];
}
function Qe(e) {
  return ze.test(e);
}
function $e(e) {
  return I.test(e);
}
function et(e, t) {
  let n = 0;
  for (let r of e) {
    let e = Je(r.mode, t);
    if (r.numChars >= 1 << e) return 1 / 0;
    n += 4 + e + r.bitData.length;
  }
  return n;
}
function tt(e) {
  e = encodeURI(e);
  let t = [];
  for (let n = 0; n < e.length; n++)
    e.charAt(n) === `%`
      ? (t.push(Number.parseInt(e.substring(n + 1, n + 3), 16)), (n += 2))
      : t.push(e.charCodeAt(n));
  return t;
}
function K(e) {
  if (e < L || e > R) throw RangeError(`Version number out of range`);
  let t = (16 * e + 128) * e + 64;
  if (e >= 2) {
    let n = Math.floor(e / 7) + 2;
    ((t -= (25 * n - 10) * n - 55), e >= 7 && (t -= 36));
  }
  return t;
}
function q(e, t) {
  return Math.floor(K(e) / 8) - V[t[0]][e] * H[t[0]][e];
}
function nt(e) {
  if (e < 1 || e > 255) throw RangeError(`Degree out of range`);
  let t = [];
  for (let n = 0; n < e - 1; n++) t.push(0);
  t.push(1);
  let n = 1;
  for (let r = 0; r < e; r++) {
    for (let e = 0; e < t.length; e++)
      ((t[e] = it(t[e], n)), e + 1 < t.length && (t[e] ^= t[e + 1]));
    n = it(n, 2);
  }
  return t;
}
function rt(e, t) {
  let n = t.map((e) => 0);
  for (let r of e) {
    let e = r ^ n.shift();
    (n.push(0), t.forEach((t, r) => (n[r] ^= it(t, e))));
  }
  return n;
}
function it(e, t) {
  if (e >>> 8 || t >>> 8) throw RangeError(`Byte out of range`);
  let n = 0;
  for (let r = 7; r >= 0; r--)
    ((n = (n << 1) ^ ((n >>> 7) * 285)), (n ^= ((t >>> r) & 1) * e));
  return n;
}
function at(e, t, n = 1, r = 40, i = -1, a = !0) {
  if (!(L <= n && n <= r && r <= R) || i < -1 || i > 7)
    throw RangeError(`Invalid value`);
  let o, s;
  for (o = n; ; o++) {
    let n = q(o, t) * 8,
      i = et(e, o);
    if (i <= n) {
      s = i;
      break;
    }
    if (o >= r) throw RangeError(`Data too long`);
  }
  for (let e of [P, Le, F]) a && s <= q(o, e) * 8 && (t = e);
  let c = [];
  for (let t of e) {
    (U(t.mode[0], 4, c), U(t.numChars, Je(t.mode, o), c));
    for (let e of t.getData()) c.push(e);
  }
  let l = q(o, t) * 8;
  (U(0, Math.min(4, l - c.length), c), U(0, (8 - (c.length % 8)) % 8, c));
  for (let e = 236; c.length < l; e ^= 253) U(e, 8, c);
  let u = Array.from({ length: Math.ceil(c.length / 8) }, () => 0);
  return (
    c.forEach((e, t) => (u[t >>> 3] |= e << (7 - (t & 7)))),
    new Ue(o, t, u, i)
  );
}
function ot(e, t) {
  let {
      ecc: n = `L`,
      boostEcc: r = !1,
      minVersion: i = 1,
      maxVersion: a = 40,
      maskPattern: o = -1,
      border: s = 1,
    } = t || {},
    c = typeof e == `string` ? G(e) : Array.isArray(e) ? [Ye(e)] : void 0;
  if (!c)
    throw Error(
      `uqr only supports encoding string and binary data, but got: ${typeof e}`,
    );
  let l = at(c, Re[n], i, a, o, r),
    u = st(
      {
        version: l.version,
        maskPattern: l.mask,
        size: l.size,
        data: l.modules,
        types: l.types,
      },
      s,
    );
  return (
    t?.invert && (u.data = u.data.map((e) => e.map((e) => !e))),
    t?.onEncoded?.(u),
    u
  );
}
function st(e, t = 1) {
  if (!t) return e;
  let { size: n } = e,
    r = n + t * 2;
  ((e.size = r),
    e.data.forEach((e) => {
      for (let n = 0; n < t; n++) (e.unshift(!1), e.push(!1));
    }));
  for (let n = 0; n < t; n++)
    (e.data.unshift(Array.from({ length: r }, (e) => !1)),
      e.data.push(Array.from({ length: r }, (e) => !1)));
  let i = M.Border;
  e.types.forEach((e) => {
    for (let n = 0; n < t; n++) (e.unshift(i), e.push(i));
  });
  for (let n = 0; n < t; n++)
    (e.types.unshift(Array.from({ length: r }, (e) => i)),
      e.types.push(Array.from({ length: r }, (e) => i)));
  return e;
}
function ct(e) {
  let t = (0, D.c)(18),
    { text: n, label: r } = e,
    i,
    a;
  if (t[0] !== n) {
    ((a = ot(n, { ecc: `M`, border: 2 })), (i = ``));
    for (let [e, t] of a.data.entries())
      for (let [n, r] of t.entries()) r && (i += `M${n} ${e}h1v1h-1z`);
    ((t[0] = n), (t[1] = i), (t[2] = a));
  } else ((i = t[1]), (a = t[2]));
  let o;
  t[3] !== i || t[4] !== a.size
    ? ((o = { size: a.size, d: i }), (t[3] = i), (t[4] = a.size), (t[5] = o))
    : (o = t[5]);
  let { size: s, d: c } = o,
    l = `0 0 ${s} ${s}`,
    u;
  t[6] === r
    ? (u = t[7])
    : ((u = (0, k.jsx)(`title`, { children: r })), (t[6] = r), (t[7] = u));
  let d;
  t[8] === s
    ? (d = t[9])
    : ((d = (0, k.jsx)(`rect`, { width: s, height: s, fill: `#fff` })),
      (t[8] = s),
      (t[9] = d));
  let f;
  t[10] === c
    ? (f = t[11])
    : ((f = (0, k.jsx)(`path`, { d: c, fill: `#1d1a17` })),
      (t[10] = c),
      (t[11] = f));
  let p;
  return (
    t[12] !== r || t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
      ? ((p = (0, k.jsxs)(`svg`, {
          viewBox: l,
          role: `img`,
          "aria-label": r,
          shapeRendering: `crispEdges`,
          children: [u, d, f],
        })),
        (t[12] = r),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function lt(e) {
  let t = (0, D.c)(5),
    { url: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (0, k.jsx)(`span`, {
        className: `og-qr`,
        children: (0, k.jsx)(ct, {
          text: n,
          label: `QR code for this challenge`,
        }),
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, k.jsxs)(`p`, {
        children: [
          (0, k.jsx)(`b`, { children: `Friends in the room?` }),
          `Scan to open this challenge on a phone, then send it from any app.`,
        ],
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, k.jsxs)(`div`, {
          className: `og-qrblock`,
          children: [r, i],
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function ut(e) {
  let t = (0, D.c)(5),
    { action: n } = e;
  switch (n) {
    case `copy`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(j, {})), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `save`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(Ae, {})), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `whatsapp`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(Ne, {})), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `x`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(Pe, {})), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    default: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, k.jsx)(Fe, {})), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var dt = [
  [`copy`, `Copy link`],
  [`save`, `Save`],
  [`whatsapp`, `WhatsApp`],
  [`x`, `X`],
  [`reddit`, `Reddit`],
];
function ft(e) {
  let t = (0, D.c)(11),
    { onAction: n, canSave: r, withSave: i } = e,
    a = i === void 0 ? !0 : i,
    o;
  if (t[0] !== r || t[1] !== n || t[2] !== a) {
    let e;
    t[4] === a
      ? (e = t[5])
      : ((e = (e) => {
          let [t] = e;
          return a || t !== `save`;
        }),
        (t[4] = a),
        (t[5] = e));
    let i;
    (t[6] !== r || t[7] !== n
      ? ((i = (e) => {
          let [t, i] = e;
          return (0, k.jsxs)(
            `button`,
            {
              type: `button`,
              className: `og-q`,
              "data-target": t,
              disabled: t === `save` && !r,
              onClick: () => n(t),
              children: [
                (0, k.jsx)(`span`, {
                  className: `og-q-i`,
                  children: (0, k.jsx)(ut, { action: t }),
                }),
                i,
              ],
            },
            t,
          );
        }),
        (t[6] = r),
        (t[7] = n),
        (t[8] = i))
      : (i = t[8]),
      (o = dt.filter(e).map(i)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o));
  } else o = t[3];
  let s;
  return (
    t[9] === o
      ? (s = t[10])
      : ((s = (0, k.jsx)(`div`, { className: `og-quick`, children: o })),
        (t[9] = o),
        (t[10] = s)),
    s
  );
}
function pt(e) {
  let t = (0, D.c)(21),
    { link: n, onCopy: r } = e,
    [i, a] = (0, O.useState)(!1),
    o,
    s;
  (t[0] === i
    ? ((o = t[1]), (s = t[2]))
    : ((o = () => {
        if (!i) return;
        let e = setTimeout(() => a(!1), 1600);
        return () => clearTimeout(e);
      }),
      (s = [i]),
      (t[0] = i),
      (t[1] = o),
      (t[2] = s)),
    (0, O.useEffect)(o, s));
  let c = i || void 0,
    l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, k.jsx)(fe, {})), (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] === n
    ? (u = t[5])
    : ((u = (0, k.jsx)(`span`, {
        className: `og-linkfield-url`,
        title: n,
        children: n,
      })),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] === r
    ? (d = t[7])
    : ((d = () => {
        r()
          .then((e) => a(e))
          .catch(mt);
      }),
      (t[6] = r),
      (t[7] = d));
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = i ? (0, k.jsx)(Me, {}) : (0, k.jsx)(j, {})),
      (t[8] = i),
      (t[9] = f));
  let p = i ? `Copied` : `Copy link`,
    m;
  t[10] !== d || t[11] !== f || t[12] !== p
    ? ((m = (0, k.jsxs)(`button`, {
        type: `button`,
        className: `og-copy`,
        onClick: d,
        children: [f, p],
      })),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h = i ? `Link copied` : ``,
    g;
  t[14] === h
    ? (g = t[15])
    : ((g = (0, k.jsx)(`span`, {
        className: `visually-hidden`,
        "aria-live": `polite`,
        children: h,
      })),
      (t[14] = h),
      (t[15] = g));
  let _;
  return (
    t[16] !== g || t[17] !== c || t[18] !== u || t[19] !== m
      ? ((_ = (0, k.jsxs)(`div`, {
          className: `og-linkfield`,
          "data-copied": c,
          children: [l, u, m, g],
        })),
        (t[16] = g),
        (t[17] = c),
        (t[18] = u),
        (t[19] = m),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function mt() {}
var ht = [
  [`whatsapp`, `WhatsApp`],
  [`x`, `Post`],
  [`reddit`, `Reddit`],
  [`save`, `Save`],
];
function gt(e) {
  let t = (0, D.c)(11),
    { onAction: n, canSave: r, withSave: i } = e,
    a = i === void 0 ? !0 : i,
    o;
  if (t[0] !== r || t[1] !== n || t[2] !== a) {
    let e;
    t[4] === a
      ? (e = t[5])
      : ((e = (e) => {
          let [t] = e;
          return a || t !== `save`;
        }),
        (t[4] = a),
        (t[5] = e));
    let i;
    (t[6] !== r || t[7] !== n
      ? ((i = (e) => {
          let [t, i] = e;
          return (0, k.jsxs)(
            `button`,
            {
              type: `button`,
              className: `og-target`,
              "data-target": t,
              disabled: t === `save` && !r,
              onClick: () => n(t),
              children: [(0, k.jsx)(ut, { action: t }), i],
            },
            t,
          );
        }),
        (t[6] = r),
        (t[7] = n),
        (t[8] = i))
      : (i = t[8]),
      (o = ht.filter(e).map(i)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o));
  } else o = t[3];
  let s;
  return (
    t[9] === o
      ? (s = t[10])
      : ((s = (0, k.jsx)(`div`, { className: `og-targets`, children: o })),
        (t[9] = o),
        (t[10] = s)),
    s
  );
}
var J = `#F5F7FF`,
  _t = `#CDD2EE`,
  Y = `#FFC83D`,
  vt = `#3FE0C5`,
  yt = `#3FE0C5`,
  bt = `#3FE0C5`,
  X = `14,19,48`,
  xt = `#14183A`,
  St = `#0E1330`,
  Ct = [
    [0, `#FFDA6B`],
    [1, `#FFC83D`],
  ],
  Z = {
    y: 1080,
    fill: `#1A2250`,
    notch: `#0E1330`,
    tear: `#3D4A8C`,
    scan: `#A9AFD2`,
  },
  wt = { x: 811, y: 1112, size: 205 };
function Q(e, t) {
  `letterSpacing` in e && (e.letterSpacing = t);
}
function $(e, t, n, r) {
  let i = n;
  for (let [n, a] of t)
    ((e.fillStyle = a), e.fillText(n, i, r), (i += e.measureText(n).width));
  return i;
}
function Tt(e, t, n, r) {
  let i = n;
  for (e.font = `800 ${i}px 'Baloo 2'`; e.measureText(t).width > r && i > 40;)
    ((i -= 4), (e.font = `800 ${i}px 'Baloo 2'`));
}
function Et(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t.length;
  for (; r > 1 && e.measureText(`${t.slice(0, r)}…`).width > n;) --r;
  return `${t.slice(0, r)}…`;
}
function Dt(e, t, n, r, i, a = `#fff`) {
  e.font = `800 30px 'DM Sans'`;
  let o = e.measureText(t).width + 44,
    s = e.createLinearGradient(n, 0, n + o, 0);
  for (let [e, t] of i) s.addColorStop(e, t);
  return (
    (e.fillStyle = s),
    e.beginPath(),
    e.roundRect(n, r - 58 / 2, o, 58, 58 / 2),
    e.fill(),
    (e.fillStyle = a),
    (e.textBaseline = `middle`),
    e.fillText(t, n + 22, r + 2),
    (e.textBaseline = `alphabetic`),
    n + o
  );
}
function Ot(e, t, n, r) {
  let i = r / 16;
  ((e.strokeStyle = yt),
    (e.lineWidth = 2 * i),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    e.beginPath(),
    e.moveTo(t + 2 * i, n + 12 * i),
    e.lineTo(t + 6 * i, n + 8 * i),
    e.lineTo(t + 9 * i, n + 11 * i),
    e.lineTo(t + 14 * i, n + 5 * i),
    e.moveTo(t + 10 * i, n + 5 * i),
    e.lineTo(t + 14 * i, n + 5 * i),
    e.lineTo(t + 14 * i, n + 9 * i),
    e.stroke());
}
function kt(e, t, n, r) {
  e.font = `700 38px 'DM Sans'`;
  let i = 70 + e.measureText(t).width + 24;
  ((e.fillStyle = `rgba(26,34,80,.94)`),
    e.beginPath(),
    e.roundRect(n, r - 66 / 2, i, 66, 66 / 2),
    e.fill(),
    Ot(e, n + 24, r - 34 / 2, 34),
    (e.fillStyle = yt),
    (e.textBaseline = `middle`),
    e.fillText(t, n + 24 + 34 + 12, r + 2),
    (e.textBaseline = `alphabetic`));
}
function At(e, t, n, r) {
  for (let [i, o] of t.entries()) {
    let t = n + 17 + i * 46;
    (e.beginPath(),
      e.arc(t, r, 17, 0, Math.PI * 2),
      o === void 0
        ? ((e.strokeStyle = `rgba(245,247,255,.25)`),
          (e.lineWidth = 3),
          e.stroke())
        : ((e.fillStyle = o < 0 ? `#05081A` : (a[o]?.color ?? d.color)),
          e.fill()));
  }
}
function jt(e, t, n, r, i) {
  ((e.fillStyle = `#fff`),
    e.beginPath(),
    e.roundRect(n, r, i, i, 14),
    e.fill());
  let a = (e) => Math.round((e * i) / t.length);
  e.fillStyle = St;
  for (let [i, o] of t.entries())
    for (let [t, s] of o.entries())
      s && e.fillRect(n + a(t), r + a(i), a(t + 1) - a(t), a(i + 1) - a(i));
}
function Mt(e, t) {
  return e === `versus` && t.friend
    ? [[(t.rivals ?? 1) > 1 ? `Beat us all` : `Beat us both`, J]]
    : [
        [`Beat my `, J],
        [String(t.people), Y],
      ];
}
function Nt(e, t, n) {
  ((e.fillStyle = Z.fill),
    e.fillRect(0, Z.y, 1080, 1350 - Z.y),
    (e.fillStyle = Z.notch));
  for (let t of [0, 1080])
    (e.beginPath(), e.arc(t, Z.y, 32, 0, Math.PI * 2), e.fill());
  ((e.strokeStyle = Z.tear),
    (e.lineWidth = 4),
    e.setLineDash([14, 10]),
    e.beginPath(),
    e.moveTo(48, Z.y),
    e.lineTo(1032, Z.y),
    e.stroke(),
    e.setLineDash([]),
    (e.textBaseline = `alphabetic`),
    (e.font = `800 58px 'Baloo 2'`),
    $(e, Mt(t, n), 64, 1152));
  let r = wt.x - 64 - 28;
  ((e.font = `700 38px 'DM Sans'`),
    (e.fillStyle = J),
    e.fillText(Et(e, n.link, r), 64, 1206),
    (e.font = `600 30px 'DM Sans'`),
    (e.fillStyle = Z.scan),
    e.fillText(Et(e, n.scan, r), 64, 1250),
    n.qr && jt(e, n.qr, wt.x, wt.y, wt.size));
}
var Pt = {
  3: [
    [0, `#FF9A7F`],
    [1, `#FF7A59`],
  ],
  4: [
    [0, `#FFDA6B`],
    [1, `#FFC83D`],
  ],
};
async function Ft() {
  typeof document > `u` ||
    !document.fonts ||
    (await Promise.all(
      [`800 120px 'Baloo 2'`, `800 40px 'DM Sans'`, `700 40px 'DM Sans'`].map(
        (e) => document.fonts.load(e).catch(() => []),
      ),
    ));
}
function It(e, t, n, r) {
  e.drawImage(t, 0, 0, 1080, 1350);
  let i = e.createLinearGradient(0, 0, 0, 640);
  (i.addColorStop(0, `rgba(${X},.97)`),
    i.addColorStop(0.58, `rgba(${X},.86)`),
    i.addColorStop(1, `rgba(${X},0)`),
    (e.fillStyle = i),
    e.fillRect(0, 0, 1080, 640));
  let o = e.createLinearGradient(0, 930, 0, Z.y);
  (o.addColorStop(0, `rgba(${X},0)`),
    o.addColorStop(0.55, `rgba(${X},.9)`),
    o.addColorStop(1, `rgba(${X},.97)`),
    (e.fillStyle = o),
    e.fillRect(0, 930, 1080, Z.y - 930),
    (e.fillStyle = Y),
    e.beginPath(),
    e.arc(82, 96, 17, 0, Math.PI * 2),
    e.fill(),
    (e.textBaseline = `middle`),
    (e.fillStyle = J),
    (e.font = `800 40px 'Baloo 2'`),
    e.fillText(`OpenNoillirk`, 112, 98),
    (e.font = `700 25px 'DM Sans'`),
    (e.fillStyle = bt),
    (e.textAlign = `right`),
    Q(e, `3px`),
    e.fillText(r.label, 1016, 98),
    Q(e, `0px`),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`));
  let s = r.friend;
  if (n === `moment` && r.moment) {
    let t = r.moment,
      n = a[t.band];
    ((e.font = `700 25px 'DM Sans'`),
      (e.fillStyle = bt),
      Q(e, `2px`),
      e.fillText(`Q${t.round} · ${t.prompt.toUpperCase()}`, 64, 196, 952),
      Q(e, `-4px`),
      Tt(e, `${t.answer}.`, 156, 960),
      (e.fillStyle = J),
      e.fillText(`${t.answer}.`, 56, 348),
      Q(e, `0px`));
    let i = t.band >= 4 ? Pt[4] : Pt[3],
      o = Dt(
        e,
        `${n?.name.toUpperCase() ?? ``} · +${t.points}`,
        64,
        428,
        i,
        xt,
      );
    ((e.font = `700 34px 'DM Sans'`),
      (e.fillStyle = _t),
      (e.textBaseline = `middle`),
      e.fillText(n?.line ?? ``, o + 20, 430, 1016 - o - 20),
      (e.textBaseline = `alphabetic`));
  } else
    n === `versus` && s
      ? ((e.font = `800 176px 'Baloo 2'`),
        Q(e, `-5px`),
        $(
          e,
          [
            [String(r.people), Y],
            [` vs `, J],
            [String(s.people), vt],
          ],
          54,
          330,
        ),
        Q(e, `0px`),
        (e.font = `700 42px 'DM Sans'`),
        (e.fillStyle = _t),
        e.fillText(
          r.people >= s.people
            ? `I beat ${s.name} at today's OpenNoillirk.`
            : `${s.name} beat me at today's OpenNoillirk.`,
          62,
          412,
          956,
        ),
        Dt(e, `✦ ${r.title}`, 64, 488, Ct, xt))
      : ((e.font = `800 132px 'Baloo 2'`),
        Q(e, `-3px`),
        $(
          e,
          [
            [`I pulled `, J],
            [String(r.people), Y],
          ],
          58,
          292,
        ),
        $(e, [[r.outOf === null ? `people.` : `of ${r.outOf}.`, J]], 58, 420),
        Q(e, `0px`),
        Dt(e, `✦ ${r.title}`, 64, 500, Ct, xt),
        r.percentile && kt(e, r.percentile, 64, 588));
  ((e.textBaseline = `alphabetic`),
    n === `moment`
      ? ((e.font = `800 38px 'DM Sans'`),
        $(
          e,
          [
            [`I pulled `, J],
            [String(r.people), Y],
            [r.outOf === null ? ` people today.` : ` of ${r.outOf} today.`, J],
          ],
          64,
          1040,
        ))
      : (At(e, r.bands, 64, 1027),
        (e.font = `800 34px 'DM Sans'`),
        (e.fillStyle = J),
        (e.textAlign = `right`),
        e.fillText(`${zt(r.points)} pts`, 1016, 1040),
        (e.textAlign = `left`)),
    Nt(e, n, r));
}
function Lt(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = 1080), (r.height = 1350));
  let i = r.getContext(`2d`);
  return (i && It(i, e, t, n), r);
}
var Rt = /\B(?=(\d{3})+(?!\d))/g;
function zt(e) {
  return String(Math.round(e)).replace(Rt, `,`);
}
function Bt(e) {
  return new Promise((t) => e.toBlob((e) => t(e), `image/jpeg`, 0.9));
}
var Vt = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`,
];
function Ht(e) {
  return e.kind === `daily` ? 10 : Number.isFinite(e.length) ? e.length : null;
}
function Ut(e) {
  if (e.kind !== `daily`) return `UNLIMITED`;
  let [, t, n] = e.date.split(`-`).map(Number);
  return `DAILY #${e.number} · ${Vt[(t ?? 1) - 1] ?? ``} ${n ?? ``}`;
}
async function Wt(e, t) {
  await Ft();
  let n = Ht(t.kind),
    r = t.friends[0],
    i = {
      label: Ut(t.kind),
      people: t.people,
      outOf: n === null ? null : o(n),
      points: t.points,
      title: t.title,
      bands: Array.from(
        { length: Math.min(n ?? t.results.length, 20) },
        (e, n) => {
          let r = t.results[n];
          return r ? (r.band ?? -1) : void 0;
        },
      ),
      link: se(t.code),
      scan: b(n),
      qr: ot(me(t.code, `image`), { ecc: `M`, border: 2 }).data,
      ...(t.percentile ? { percentile: t.percentile } : {}),
      ...(r ? { friend: r, rivals: t.friends.length } : {}),
    },
    a = e.moment(),
    s = a ? t.results[a.round - 1] : void 0;
  a &&
    s &&
    s.band !== null &&
    (i.moment = {
      round: a.round,
      prompt: t.prompts[a.round - 1]?.text ?? ``,
      answer: s.canonical ?? s.typed,
      band: s.band,
      points: s.points,
    });
  let c = [`home`];
  (i.moment && c.push(`moment`),
    r && c.push(`versus`),
    await Promise.all(c.map((t) => e.captureReady(t))));
  let l = {
      home: y(`home`),
      moment: y(`moment`),
      versus: y(`versus`, r?.name),
    },
    u = c.flatMap((t) => {
      let n = e.captureCanvas(t);
      return n ? [{ kind: t, canvas: Lt(n, t, i) }] : [];
    }),
    d = await Promise.all(u.map((e) => Bt(e.canvas)));
  return u.flatMap((e, t) => {
    let n = d[t];
    return n
      ? [
          {
            kind: e.kind,
            name: l[e.kind],
            blob: n,
            url: URL.createObjectURL(n),
          },
        ]
      : [];
  });
}
var Gt = (e) => {
  for (let t of e) URL.revokeObjectURL(t.url);
};
function Kt(e, t, n, r, i, a) {
  let o = (0, D.c)(21),
    s = a === void 0 ? Wt : a,
    c;
  o[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = []), (o[0] = c))
    : (c = o[0]);
  let [l, u] = (0, O.useState)(c),
    [d, f] = (0, O.useState)(0),
    [p, m] = (0, O.useState)(`drawing`),
    h;
  o[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = []), (o[1] = h))
    : (h = o[1]);
  let g = (0, O.useRef)(h),
    _ = (0, O.useRef)(null),
    v = (0, O.useEffectEvent)(i),
    y;
  o[2] !== s ||
  o[3] !== v ||
  o[4] !== e ||
  o[5] !== r ||
  o[6] !== n ||
  o[7] !== t
    ? ((y = () => {
        if (!e || r === _.current) return;
        let i = n ? t.current : null;
        if (!i) {
          g.current.length === 0 && m(`none`);
          return;
        }
        _.current = r;
        let a = () => {
          _.current === r && g.current.length === 0 && m(`none`);
        };
        s(i, r)
          .then((e) => {
            if (_.current !== r || e.length === 0) {
              (Gt(e), a());
              return;
            }
            let t = g.current,
              n = t.length === 0 ? v(e.map(qt)) : null;
            ((g.current = e),
              u(e),
              f((r) => {
                if (n !== null) return n;
                let i = e.findIndex((e) => e.kind === t[r]?.kind);
                return i >= 0 ? i : 0;
              }),
              m(`ready`),
              setTimeout(() => Gt(t), 2e3));
          })
          .catch(a);
      }),
      (o[2] = s),
      (o[3] = v),
      (o[4] = e),
      (o[5] = r),
      (o[6] = n),
      (o[7] = t),
      (o[8] = y))
    : (y = o[8]);
  let b;
  (o[9] !== s || o[10] !== e || o[11] !== r || o[12] !== n || o[13] !== t
    ? ((b = [e, t, n, r, s]),
      (o[9] = s),
      (o[10] = e),
      (o[11] = r),
      (o[12] = n),
      (o[13] = t),
      (o[14] = b))
    : (b = o[14]),
    (0, O.useEffect)(y, b));
  let x, S;
  (o[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => {
        ((_.current = null), Gt(g.current));
      }),
      (S = []),
      (o[15] = x),
      (o[16] = S))
    : ((x = o[15]), (S = o[16])),
    (0, O.useEffect)(x, S));
  let C;
  return (
    o[17] !== l || o[18] !== d || o[19] !== p
      ? ((C = { cards: l, pick: d, setPick: f, status: p }),
        (o[17] = l),
        (o[18] = d),
        (o[19] = p),
        (o[20] = C))
      : (C = o[20]),
    C
  );
}
function qt(e) {
  return e.kind;
}
var Jt = {
    score: (e) => {
      let t = 0;
      for (let n of e) t += n.people;
      return t;
    },
    inviterScore: (e) => e.people,
    headline: (e, t, n) =>
      S(e, h(t), n ? { name: n.name, people: n.score } : void 0),
    lossLine: ne,
    groupNote: E,
    beat: (e) => String(e),
    shareText: l,
    boardScore: (e) => String(e.people),
    boardOrder: (e) => [...e],
    draw: Wt,
  },
  Yt = `(min-width: 900px) and (min-height: 620px)`,
  Xt = `(min-width: 601px)`,
  Zt = 10,
  Qt = `button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])`,
  $t = [`#f2542d`, `#ffb020`, `#3a5fd0`, `#1e9e8f`, `#7b4fe8`, `#fffbf5`],
  en = Array.from({ length: 18 }, (e, t) => ({
    id: `c${t}`,
    left: `${(t * 37 + 11) % 100}%`,
    delay: `${0.2 + (t % 6) * 0.12}s`,
    duration: `${2.2 + (t % 4) * 0.35}s`,
    color: $t[t % $t.length],
  })),
  tn = () => void 0;
function nn(e) {
  let t = (0, D.c)(5),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = () => matchMedia(e).matches), (t[0] = e), (t[1] = n));
  let [r, i] = (0, O.useState)(n),
    a,
    o;
  return (
    t[2] === e
      ? ((a = t[3]), (o = t[4]))
      : ((a = () => {
          let t = matchMedia(e),
            n = () => i(t.matches);
          return (
            n(),
            t.addEventListener(`change`, n),
            () => t.removeEventListener(`change`, n)
          );
        }),
        (o = [e]),
        (t[2] = e),
        (t[3] = a),
        (t[4] = o)),
    (0, O.useEffect)(a, o),
    r
  );
}
function rn(e) {
  let t = (0, D.c)(3),
    [n, r] = (0, O.useState)(0),
    i,
    a;
  return (
    t[0] === e
      ? ((i = t[1]), (a = t[2]))
      : ((i = () => {
          if (matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
            r(e);
            return;
          }
          let t = 0,
            n = performance.now(),
            i = (a) => {
              let o = Math.min(1, (a - n) / 700);
              (r(Math.round(e * (1 - (1 - o) ** 3))),
                o < 1 && (t = requestAnimationFrame(i)));
            };
          return (
            (t = requestAnimationFrame(i)),
            () => cancelAnimationFrame(t)
          );
        }),
        (a = [e]),
        (t[0] = e),
        (t[1] = i),
        (t[2] = a)),
    (0, O.useEffect)(i, a),
    n
  );
}
function an(e) {
  let t = (0, D.c)(10),
    { loading: n, percentile: r, short: i } = e,
    a = rn(r?.kind === `better` ? r.value : 0);
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(`span`, {
            className: `og-pct`,
            "data-loading": !0,
            "aria-hidden": `true`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  t[1] !== r || t[2] !== a
    ? ((o = r?.kind === `better` ? { kind: `better`, value: a } : r),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== i || t[5] !== o
    ? ((s = C(o, i)), (t[4] = i), (t[5] = o), (t[6] = s))
    : (s = t[6]);
  let c = s;
  if (!c) return null;
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, k.jsx)(je, {})), (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] === c
      ? (u = t[9])
      : ((u = (0, k.jsxs)(`span`, { className: `og-pct`, children: [l, c] })),
        (t[8] = c),
        (t[9] = u)),
    u
  );
}
function on() {
  try {
    navigator.vibrate?.(24);
  } catch {}
}
function sn(e, t) {
  if (t === null) return { kind: `endless` };
  let n = ue(me(t, `native`));
  return e.kind === `daily`
    ? { kind: `daily`, number: e.number, link: n }
    : { kind: `unlimited`, length: e.length === 20 ? 20 : 10, link: n };
}
function cn(e) {
  let t = 0,
    n = 0;
  for (let r of e) ((t += r.people), (n += r.points));
  return { people: t, points: n };
}
function ln(e) {
  if (e.record === null) return null;
  let t = e.board
    ? { count: e.board.count, rank: e.board.rank, top: e.board.top }
    : (e.reply?.board ?? null);
  return t && t.top.length > 0 ? t : null;
}
function un(e) {
  let t = e.reply;
  return t
    ? {
        id: t.id,
        name: e.nickname,
        people: t.people,
        points: t.points,
        title: t.title,
        you: !0,
      }
    : (e.board?.top.find((e) => e.you) ?? null);
}
function dn(e) {
  let t = (0, D.c)(156),
    {
      open: n,
      onClose: r,
      stageRef: i,
      stageReady: a,
      kind: o,
      results: c,
      prompts: l,
      friends: u,
      share: d,
      flash: p,
    } = e,
    h = e.challenge ?? null,
    v = e.words ?? Jt,
    y = nn(Yt),
    b = nn(Xt),
    S = (0, O.useRef)(null),
    ne = (0, O.useRef)(null),
    E = (0, O.useRef)(null),
    [ue, fe] = (0, O.useState)(!1),
    [ge, _e] = (0, O.useState)(!1),
    [ve, be] = (0, O.useState)(!0),
    [A, Se] = (0, O.useState)(0),
    [Ce, we] = (0, O.useState)(`share`),
    Ee = (0, O.useRef)(null),
    j = o.kind === `daily` ? o : null,
    Ae;
  t[0] === c ? (Ae = t[1]) : ((Ae = cn(c)), (t[0] = c), (t[1] = Ae));
  let { people: je, points: Me } = Ae,
    Ne = v.score(c),
    Pe = h ? v.inviterScore(h.inviter) : 0,
    Fe;
  t[2] === c ? (Fe = t[3]) : ((Fe = f(c)), (t[2] = c), (t[3] = Fe));
  let M = Fe,
    N = d.code,
    P = h ? ee(Ne, Pe) : null,
    Le;
  t[4] === j
    ? (Le = t[5])
    : ((Le = j !== null && j.date === s()), (t[4] = j), (t[5] = Le));
  let F = Le,
    Re;
  t[6] !== d.record?.percentile || t[7] !== F
    ? ((Re = F ? (C(d.record?.percentile, !0) ?? void 0) : void 0),
      (t[6] = d.record?.percentile),
      (t[7] = F),
      (t[8] = Re))
    : (Re = t[8]);
  let ze = Re,
    I;
  t[9] === ze
    ? (I = t[10])
    : ((I = ze ? { percentile: ze } : {}), (t[9] = ze), (t[10] = I));
  let Be;
  t[11] !== N ||
  t[12] !== u ||
  t[13] !== o ||
  t[14] !== je ||
  t[15] !== Me ||
  t[16] !== l ||
  t[17] !== c ||
  t[18] !== I ||
  t[19] !== M.title
    ? ((Be = {
        kind: o,
        results: c,
        prompts: l,
        people: je,
        points: Me,
        title: M.title,
        friends: u,
        code: N,
        ...I,
      }),
      (t[11] = N),
      (t[12] = u),
      (t[13] = o),
      (t[14] = je),
      (t[15] = Me),
      (t[16] = l),
      (t[17] = c),
      (t[18] = I),
      (t[19] = M.title),
      (t[20] = Be))
    : (Be = t[20]);
  let {
      cards: L,
      pick: R,
      setPick: Ve,
      status: He,
    } = Kt(n, i, a, Be, (e) => x(e, P), v.draw),
    z = L[R],
    B = He === `none`,
    V = h?.kind !== `long`,
    H = V ? ln(d) : null,
    Ue = un(d),
    U = h !== null && d.reply?.created === !0,
    [W, We] = (0, O.useState)(!1),
    Ge,
    Ke;
  (t[21] === n
    ? ((Ge = t[22]), (Ke = t[23]))
    : ((Ge = () => {
        if (!n) return;
        (be(!0), we(`share`), (Ee.current = null));
        let e = setTimeout(() => be(!1), 1300);
        return () => clearTimeout(e);
      }),
      (Ke = [n]),
      (t[21] = n),
      (t[22] = Ge),
      (t[23] = Ke)),
    (0, O.useEffect)(Ge, Ke));
  let [qe, Je] = (0, O.useState)(!1),
    Ye;
  (t[24] !== n || t[25] !== P
    ? ((Ye = [n, P]), (t[24] = n), (t[25] = P), (t[26] = Ye))
    : (Ye = t[26]),
    (0, O.useEffect)(() => {
      if (!n || P !== `win`) return;
      Je(!0);
      let e = setTimeout(() => Je(!1), 4200);
      return () => {
        (clearTimeout(e), Je(!1));
      };
    }, Ye));
  let Xe;
  t[27] === d
    ? (Xe = t[28])
    : ((Xe = () => d.refreshBoard()), (t[27] = d), (t[28] = Xe));
  let Ze = (0, O.useEffectEvent)(Xe),
    G = d.record?.id ?? null,
    Qe;
  t[29] !== V || t[30] !== n || t[31] !== Ze || t[32] !== G
    ? ((Qe = () => {
        n && G && V && Ze().catch(tn);
      }),
      (t[29] = V),
      (t[30] = n),
      (t[31] = Ze),
      (t[32] = G),
      (t[33] = Qe))
    : (Qe = t[33]);
  let $e;
  (t[34] !== V || t[35] !== n || t[36] !== G
    ? (($e = [n, G, V]), (t[34] = V), (t[35] = n), (t[36] = G), (t[37] = $e))
    : ($e = t[37]),
    (0, O.useEffect)(Qe, $e));
  let et, tt;
  (t[38] !== n || t[39] !== Ce
    ? ((et = () => {
        if (!n) return;
        let e = `#og-pop-title`;
        (Ce === `board`
          ? (e = `.og-back`)
          : (Ee.current &&= ((e = Ee.current), null)),
          S.current?.querySelector(e)?.focus({ preventScroll: !0 }));
      }),
      (tt = [n, Ce]),
      (t[38] = n),
      (t[39] = Ce),
      (t[40] = et),
      (t[41] = tt))
    : ((et = t[40]), (tt = t[41])),
    (0, O.useEffect)(et, tt));
  let K, q;
  (t[42] !== r || t[43] !== n
    ? ((K = () => {
        if (!n) return;
        let e = (e) => {
          if (e.key === `Escape`) {
            (e.preventDefault(), r());
            return;
          }
          if (e.key !== `Tab`) return;
          let t = S.current,
            n = t ? Array.from(t.querySelectorAll(Qt)) : [],
            i = n[0],
            a = n.at(-1);
          if (!t || !i || !a) return;
          let o = document.activeElement;
          t.contains(o)
            ? e.shiftKey && o === i
              ? (e.preventDefault(), a.focus())
              : !e.shiftKey && o === a && (e.preventDefault(), i.focus())
            : (e.preventDefault(), i.focus());
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }),
      (q = [n, r]),
      (t[42] = r),
      (t[43] = n),
      (t[44] = K),
      (t[45] = q))
    : ((K = t[44]), (q = t[45])),
    (0, O.useEffect)(K, q));
  let nt, rt;
  (t[46] !== r || t[47] !== n || t[48] !== y
    ? ((nt = () => {
        let e = ne.current;
        if (!(!n || !y || !e))
          return (
            e.addEventListener(`click`, r),
            () => e.removeEventListener(`click`, r)
          );
      }),
      (rt = [n, y, r]),
      (t[46] = r),
      (t[47] = n),
      (t[48] = y),
      (t[49] = nt),
      (t[50] = rt))
    : ((nt = t[49]), (rt = t[50])),
    (0, O.useEffect)(nt, rt));
  let it = y || b,
    at,
    ot;
  (t[51] !== it || t[52] !== n || t[53] !== i
    ? ((at = () => {
        let e = i.current;
        if (!(!n || !it || !e)) return (e.pause(), () => e.resume());
      }),
      (ot = [n, it, i]),
      (t[51] = it),
      (t[52] = n),
      (t[53] = i),
      (t[54] = at),
      (t[55] = ot))
    : ((at = t[54]), (ot = t[55])),
    (0, O.useEffect)(at, ot));
  let st;
  t[56] !== N || t[57] !== u[0] || t[58] !== o || t[59] !== c || t[60] !== v
    ? ((st = v.shareText(sn(o, N), c, u[0])),
      (t[56] = N),
      (t[57] = u[0]),
      (t[58] = o),
      (t[59] = c),
      (t[60] = v),
      (t[61] = st))
    : (st = t[61]);
  let ct = st,
    ut;
  t[62] !== p || t[63] !== z?.kind || t[64] !== v.stage
    ? ((ut = (e, t) => {
        (g.play(`copied`),
          on(),
          m(`share_action`, {
            card: z?.kind ?? `home`,
            method: e,
            ...(v.stage ? { stage: v.stage } : {}),
          }),
          t && p(t));
      }),
      (t[62] = p),
      (t[63] = z?.kind),
      (t[64] = v.stage),
      (t[65] = ut))
    : (ut = t[65]);
  let dt = ut,
    mt;
  t[66] === dt
    ? (mt = t[67])
    : ((mt = (e, t) => {
        (dt(e, t), fe(!0));
      }),
      (t[66] = dt),
      (t[67] = mt));
  let ht = mt,
    J;
  t[68] !== ht || t[69] !== p || t[70] !== z?.blob || t[71] !== ct
    ? ((J = () => {
        le(ct, z?.blob ?? null)
          .then((e) => {
            e === `shared`
              ? ht(`native`, `Challenge sent`)
              : e === `copied`
                ? ht(`fallback`, `Text copied · paste it anywhere`)
                : e === `manual` &&
                  (_e(!0),
                  p(`Sharing isn't available here · copy the link below`));
          })
          .catch(tn);
      }),
      (t[68] = ht),
      (t[69] = p),
      (t[70] = z?.blob),
      (t[71] = ct),
      (t[72] = J))
    : (J = t[72]);
  let _t = J,
    Y = async () => {
      let e = await de(pe(v.beat(Ne), me(N, `copy`)));
      return (
        e
          ? ht(`copy`, y ? void 0 : `Link copied`)
          : (_e(!0), p(`Copying didn't work here · select the link below`)),
        e
      );
    },
    vt;
  t[73] !== dt || t[74] !== z || t[75] !== y
    ? ((vt = async () => {
        z &&
          (await he(z.blob, `noillirk.jpg`, !y)) !== `cancelled` &&
          dt(`save`, `Card saved`);
      }),
      (t[73] = dt),
      (t[74] = z),
      (t[75] = y),
      (t[76] = vt))
    : (vt = t[76]);
  let yt = vt,
    bt = (e) => {
      e === `copy`
        ? Y().catch(tn)
        : e === `save`
          ? yt().catch(tn)
          : (window.open(ce(e, v.beat(Ne), N), `_blank`, `noopener`), ht(e));
    },
    X = (e) => {
      if (((Ee.current = e), we(`board`), H)) {
        d.refreshBoard().catch(tn);
        return;
      }
      (We(!0),
        d
          .refreshBoard()
          .finally(() => We(!1))
          .catch(tn));
    },
    xt;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xt = () => we(`share`)), (t[77] = xt))
    : (xt = t[77]);
  let St = xt;
  if (!n) return null;
  let Ct = `you`;
  h
    ? (Ct = h.owner)
    : d.board &&
      !d.board.own &&
      (Ct = d.board.owner === null ? `unknown` : { name: d.board.owner });
  let Z = w(Ct),
    wt = H?.count ?? 1,
    Q = !h && H !== null && (ue || wt >= 2),
    $;
  t[78] !== d.nickname || t[79] !== d.rename
    ? (($ = (0, k.jsx)(Ie, { name: d.nickname, onRename: d.rename })),
      (t[78] = d.nickname),
      (t[79] = d.rename),
      (t[80] = $))
    : ($ = t[80]);
  let Tt = $,
    Et = () =>
      !h || !H
        ? null
        : (0, k.jsx)(ye, {
            title: Z,
            count: wt,
            rows: te(v.boardOrder(H.top), Ue, H.rank, 3),
            inviterId: h.inviter.id,
            fresh: U,
            score: v.boardScore,
          }),
    Dt = () =>
      h === null
        ? null
        : H && P !== `loss`
          ? (0, k.jsx)(`button`, {
              type: `button`,
              className: `og-pop-alt`,
              onClick: () => X(`button.og-pop-alt`),
              children: `See the full board`,
            })
          : (0, k.jsx)(`a`, {
              className: `og-pop-alt`,
              href: `/unlimited`,
              children:
                P === `loss` ? `Try Unlimited to sharpen up` : `Play Unlimited`,
            }),
    Ot = () => {
      if (B) return null;
      if (h) {
        let e = He !== `ready` || L.some(hn);
        return (0, k.jsx)(Oe, {
          cards: L,
          pick: R,
          onPick: Ve,
          note: v.groupNote(P ?? `win`, h.inviter.name, e),
        });
      }
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(Te, { cards: L, pick: R, onPick: Ve }),
          L.length > 1 &&
            (0, k.jsx)(`p`, {
              className: `og-dots`,
              "aria-hidden": `true`,
              children: L.map((e, t) =>
                (0, k.jsx)(`i`, { className: t === R ? `on` : void 0 }, e.kind),
              ),
            }),
          L.length > 0 &&
            (0, k.jsx)(`p`, {
              className: `og-deck-cap`,
              children: T(L.map(mn), R),
            }),
        ],
      });
    },
    kt = Et(),
    At;
  t[81] === Dt ? (At = t[82]) : ((At = Dt()), (t[81] = Dt), (t[82] = At));
  let jt = At,
    Mt;
  t[83] === j
    ? (Mt = t[84])
    : ((Mt = j
        ? (0, k.jsx)(`a`, {
            className: `og-pop-alt`,
            href: `/leaderboard?date=${j.date}`,
            children: `See the daily leaderboard`,
          })
        : null),
      (t[83] = j),
      (t[84] = Mt));
  let Nt = Mt,
    Pt;
  t[85] === Ot ? (Pt = t[86]) : ((Pt = Ot()), (t[85] = Ot), (t[86] = Pt));
  let Ft = Pt,
    It = ``;
  if (h && P === `loss`) It = v.lossLine(Ne, Pe);
  else if (h) {
    let e;
    if (
      t[87] !== d.record?.percentile ||
      t[88] !== F ||
      t[89] !== M.title ||
      t[90] !== y
    ) {
      let n = F ? C(d.record?.percentile, !y) : null;
      ((e = ae(M.title, n)),
        (t[87] = d.record?.percentile),
        (t[88] = F),
        (t[89] = M.title),
        (t[90] = y),
        (t[91] = e));
    } else e = t[91];
    It = e;
  }
  let Lt = j?.number ?? null,
    Rt = h?.inviter.name,
    zt;
  t[92] !== c.length || t[93] !== Lt || t[94] !== Rt
    ? ((zt = ie(Lt, c.length, Rt)),
      (t[92] = c.length),
      (t[93] = Lt),
      (t[94] = Rt),
      (t[95] = zt))
    : (zt = t[95]);
  let Bt;
  t[96] === zt
    ? (Bt = t[97])
    : ((Bt = (0, k.jsx)(`p`, { className: `og-pop-kick`, children: zt })),
      (t[96] = zt),
      (t[97] = Bt));
  let Vt;
  t[98] !== h ||
  t[99] !== N ||
  t[100] !== Y ||
  t[101] !== Nt ||
  t[102] !== kt ||
  t[103] !== ge ||
  t[104] !== Tt ||
  t[105] !== B ||
  t[106] !== bt ||
  t[107] !== _t ||
  t[108] !== Ft ||
  t[109] !== z ||
  t[110] !== jt ||
  t[111] !== ue ||
  t[112] !== y
    ? ((Vt = y
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(pt, { link: se(N), onCopy: Y }),
              Tt,
              (0, k.jsx)(gt, {
                onAction: bt,
                canSave: z !== void 0,
                withSave: !B,
              }),
              h
                ? (0, k.jsxs)(k.Fragment, { children: [kt, jt] })
                : (0, k.jsx)(lt, { url: me(N, `qr`) }),
              Nt,
            ],
          })
        : (0, k.jsxs)(k.Fragment, {
            children: [
              Ft,
              (0, k.jsxs)(`button`, {
                type: `button`,
                className: `og-cta`,
                onClick: _t,
                children: [(0, k.jsx)(ke, {}), oe(h !== null, ue)],
              }),
              Tt,
              (0, k.jsx)(ft, {
                onAction: bt,
                canSave: z !== void 0,
                withSave: !B,
              }),
              ge && (0, k.jsx)(pt, { link: se(N), onCopy: Y }),
              jt,
              Nt,
            ],
          })),
      (t[98] = h),
      (t[99] = N),
      (t[100] = Y),
      (t[101] = Nt),
      (t[102] = kt),
      (t[103] = ge),
      (t[104] = Tt),
      (t[105] = B),
      (t[106] = bt),
      (t[107] = _t),
      (t[108] = Ft),
      (t[109] = z),
      (t[110] = jt),
      (t[111] = ue),
      (t[112] = y),
      (t[113] = Vt))
    : (Vt = t[113]);
  let Ht = (0, k.jsxs)(k.Fragment, {
      children: [
        Bt,
        (0, k.jsx)(`h2`, {
          id: `og-pop-title`,
          className: `og-pop-title`,
          tabIndex: -1,
          children: v
            .headline(Ne, o, h ? { name: h.inviter.name, score: Pe } : void 0)
            .map(pn),
        }),
        h
          ? (0, k.jsx)(`p`, { className: `og-pop-line`, children: It })
          : (0, k.jsxs)(`div`, {
              className: `og-pop-meta`,
              children: [
                (0, k.jsxs)(`span`, {
                  className: `og-pop-badge`,
                  children: [`✦ `, M.title],
                }),
                F &&
                  (0, k.jsx)(an, {
                    loading: d.status === `posting` || d.status === `idle`,
                    percentile: d.record?.percentile,
                    short: !y,
                  }),
                Q &&
                  (0, k.jsx)(`button`, {
                    type: `button`,
                    className: `og-boardchip`,
                    onClick: () => X(`.og-boardchip`),
                    children: re(Ct, wt),
                  }),
              ],
            }),
        !y && kt,
        Vt,
      ],
    }),
    Ut = h?.inviter.id ?? null,
    Wt;
  t[114] !== H ||
  t[115] !== W ||
  t[116] !== Z ||
  t[117] !== St ||
  t[118] !== U ||
  t[119] !== Ue ||
  t[120] !== Ut ||
  t[121] !== v.boardOrder ||
  t[122] !== v.boardScore
    ? ((Wt = (0, k.jsx)(xe, {
        title: Z,
        board: H,
        me: Ue,
        inviterId: Ut,
        fresh: U,
        loading: W,
        onBack: St,
        score: v.boardScore,
        order: v.boardOrder,
      })),
      (t[114] = H),
      (t[115] = W),
      (t[116] = Z),
      (t[117] = St),
      (t[118] = U),
      (t[119] = Ue),
      (t[120] = Ut),
      (t[121] = v.boardOrder),
      (t[122] = v.boardScore),
      (t[123] = Wt))
    : (Wt = t[123]);
  let Gt = Wt,
    qt = y ? `dialog` : `sheet`,
    $t = B ? `none` : void 0,
    rn = ve || void 0,
    dn;
  t[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dn = (0, k.jsx)(`div`, {
        ref: ne,
        className: `og-pop-scrim`,
        "aria-hidden": `true`,
      })),
      (t[124] = dn))
    : (dn = t[124]);
  let gn;
  t[125] === A
    ? (gn = t[126])
    : ((gn = A > 0 ? { transform: `translateY(${A}px)` } : void 0),
      (t[125] = A),
      (t[126] = gn));
  let _n;
  t[127] !== A || t[128] !== r || t[129] !== y
    ? ((_n =
        !y &&
        (0, k.jsx)(`div`, {
          className: `og-pop-grab`,
          "aria-hidden": `true`,
          onPointerDown: (e) => {
            ((E.current = e.clientY),
              e.currentTarget.setPointerCapture(e.pointerId));
          },
          onPointerMove: (e) => {
            E.current !== null && Se(Math.max(0, e.clientY - E.current));
          },
          onPointerUp: (e) => {
            if (E.current === null) return;
            let t = Math.abs(e.clientY - E.current);
            ((E.current = null), (t < Zt || A > 80) && r(), Se(0));
          },
          onPointerCancel: () => {
            ((E.current = null), Se(0));
          },
        })),
      (t[127] = A),
      (t[128] = r),
      (t[129] = y),
      (t[130] = _n))
    : (_n = t[130]);
  let vn;
  t[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vn = (0, k.jsx)(_, {})), (t[131] = vn))
    : (vn = t[131]);
  let yn;
  t[132] === r
    ? (yn = t[133])
    : ((yn = (0, k.jsx)(`button`, {
        type: `button`,
        className: `og-pop-x`,
        "aria-label": `Close`,
        onClick: r,
        children: vn,
      })),
      (t[132] = r),
      (t[133] = yn));
  let bn;
  t[134] !== L || t[135] !== B || t[136] !== R || t[137] !== Ve || t[138] !== y
    ? ((bn =
        y &&
        !B &&
        (0, k.jsx)(`div`, {
          className: `og-pop-cards`,
          children: (0, k.jsx)(De, { cards: L, pick: R, onPick: Ve }),
        })),
      (t[134] = L),
      (t[135] = B),
      (t[136] = R),
      (t[137] = Ve),
      (t[138] = y),
      (t[139] = bn))
    : (bn = t[139]);
  let xn = Ce === `board` ? Gt : Ht,
    Sn;
  t[140] === xn
    ? (Sn = t[141])
    : ((Sn = (0, k.jsx)(`div`, { className: `og-pop-body`, children: xn })),
      (t[140] = xn),
      (t[141] = Sn));
  let Cn;
  t[142] !== gn ||
  t[143] !== _n ||
  t[144] !== yn ||
  t[145] !== bn ||
  t[146] !== Sn
    ? ((Cn = (0, k.jsxs)(`section`, {
        ref: S,
        className: `og-pop-panel`,
        role: `dialog`,
        "aria-modal": `true`,
        "aria-labelledby": `og-pop-title`,
        style: gn,
        children: [_n, yn, bn, Sn],
      })),
      (t[142] = gn),
      (t[143] = _n),
      (t[144] = yn),
      (t[145] = bn),
      (t[146] = Sn),
      (t[147] = Cn))
    : (Cn = t[147]);
  let wn;
  t[148] === qe
    ? (wn = t[149])
    : ((wn =
        qe &&
        (0, k.jsx)(`div`, {
          className: `og-confetti`,
          "aria-hidden": `true`,
          children: en.map(fn),
        })),
      (t[148] = qe),
      (t[149] = wn));
  let Tn;
  return (
    t[150] !== qt ||
    t[151] !== $t ||
    t[152] !== rn ||
    t[153] !== Cn ||
    t[154] !== wn
      ? ((Tn = (0, k.jsxs)(`div`, {
          className: `og-pop`,
          "data-layout": qt,
          "data-cards": $t,
          "data-enter": rn,
          children: [dn, Cn, wn],
        })),
        (t[150] = qt),
        (t[151] = $t),
        (t[152] = rn),
        (t[153] = Cn),
        (t[154] = wn),
        (t[155] = Tn))
      : (Tn = t[155]),
    Tn
  );
}
function fn(e) {
  return (0, k.jsx)(
    `i`,
    {
      style: {
        left: e.left,
        background: e.color,
        animationDelay: e.delay,
        animationDuration: e.duration,
      },
    },
    e.id,
  );
}
function pn(e) {
  let [t, n] = e;
  return n === `ink` ? t : (0, k.jsx)(`span`, { className: n, children: t }, n);
}
function mn(e) {
  return e.name;
}
function hn(e) {
  return e.kind === `moment`;
}
export { jt as a, dn as default, Et as i, Ht as n, ot as o, Bt as r, Ut as t };
