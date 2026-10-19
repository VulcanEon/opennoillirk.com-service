const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/v2/src-3ENMOZ2A.js",
      "assets/v2/preload-helper-qlgyTAkD.js",
      "assets/v2/camera-Bx1BB7pZ.js",
      "assets/v2/colour-BEuTumU6.js",
      "assets/v2/format-Cc5GoqRm.js",
      "assets/v2/rules-DxwvjuIt.js",
      "assets/v2/map-BaINi0Kr.js",
      "assets/v2/climb-popup-BsiGWy9y.js",
      "assets/v2/compiler-runtime-BybR60WX.js",
      "assets/v2/audio-BdxWxAxT.js",
      "assets/v2/storage-Cd9DMQud.js",
      "assets/v2/height-CWSuyi2y.js",
      "assets/v2/icons-DDwzIPdf.js",
      "assets/v2/jsx-runtime-D_h4s5mO.js",
      "assets/v2/result-popup-CyQEZrMk.js",
      "assets/v2/main-BXKF3zmu.js",
      "assets/v2/archive-Div16WxI.js",
      "assets/v2/climb-head-B90-o7R9.js",
      "assets/v2/outrivia-tokens-CCCe3fRj.js",
      "assets/v2/seo-content-BRJA07rn.js",
      "assets/v2/web-config-CJDEWP5_.js",
      "assets/v2/src-eercGixD.js",
      "assets/v2/client-CdvhFRyp.js",
      "assets/v2/daily-done-DgUyDuk2.js",
      "assets/v2/stage-choice-DO9JGjKK.js",
      "assets/v2/community-BLCPdEpd.js",
      "assets/v2/styles-D4p6vDLt.js",
      "assets/v2/seo-DEwHsI0l.js",
      "assets/v2/link-CFi9sgXA.js",
      "assets/v2/useStore-CO7AIjx_.js",
      "assets/v2/react-dom-D0hKRYVm.js",
      "assets/v2/lazyRouteComponent-C02Cd2Zo.js",
      "assets/v2/copy-CMIldnKw.js",
      "assets/v2/poster-icons-C6vhkpTx.js",
      "assets/v2/result-popup-Cz69gUZm.css",
      "assets/v2/climb-popup-Cg7K9bos.css",
    ]),
) => i.map((i) => d[i]);
import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import { t as a } from "./preload-helper-qlgyTAkD.js";
import {
  F as o,
  G as s,
  U as c,
  i as l,
  q as u,
  s as d,
} from "./rules-DxwvjuIt.js";
import { t as f } from "./storage-Cd9DMQud.js";
import "./stage-choice-DO9JGjKK.js";
import {
  a as p,
  b as m,
  c as h,
  f as g,
  m as _,
  s as v,
  u as y,
} from "./main-BXKF3zmu.js";
import { t as b } from "./camera-Bx1BB7pZ.js";
import { n as x, t as S } from "./format-Cc5GoqRm.js";
import { a as C, n as w, o as T, r as E } from "./map-BaINi0Kr.js";
import { t as D } from "./audio-BdxWxAxT.js";
import "./runs-DrM9YA6U.js";
import {
  a as O,
  c as k,
  d as A,
  f as j,
  i as M,
  l as ee,
  n as N,
  p as P,
  r as F,
  s as I,
  t as L,
  u as te,
} from "./use-share-run-hxjVU6AS.js";
import "./icons-DDwzIPdf.js";
import { t as R } from "./game-ui-DEL71d58.js";
import { r as ne, t as z } from "./stage-toggle-LI6FLr3n.js";
import { g as B, p as re } from "./copy-CMIldnKw.js";
import { t as V } from "./height-CWSuyi2y.js";
var H = 40,
  U = 10,
  ie = 1e8,
  W = 20,
  G = [1, 2, 5, 10];
for (let e = U; e < ie; e *= U) G.push(2.5 * e, 5 * e, U * e);
var ae = (e) => w(E(e)),
  oe = (e, t, n) => {
    let r = t,
      i = n;
    for (let t = 0; t < H; t += 1) {
      let t = (r + i) / 2;
      ae(t) < e ? (r = t) : (i = t);
    }
    return (r + i) / 2;
  },
  K = (e, t, n) => {
    let r = e + b,
      i = Math.max(0, e - (1 - b)),
      a = ae(r),
      o = ae(i),
      s = (e, t, n) => ({ alt: e, label: t, y: r - oe(e, i, r), landmark: n }),
      c = t / n,
      l = S(a),
      u = (() => {
        for (let e of G) {
          if (e % l !== 0) continue;
          let r = Math.ceil(o / e),
            i = Math.floor(a / e);
          if (i - r <= c) {
            let a = [];
            for (let t = i; t >= r; --t) a.push(s(t * e, x(t * e), !1));
            if (!a.some((e, r) => r > 0 && (a[r].y - a[r - 1].y) * t < n))
              return a;
          }
        }
        return [];
      })(),
      d = [];
    for (let e of T)
      for (let t of e.markers)
        t.alt >= o && t.alt <= a && d.push(s(t.alt, t.text, !0));
    d.sort((e, t) => e.y - t.y);
    let f = (e, r) =>
        Math.abs(e.y - r.y) * t >= n + (e.landmark || r.landmark ? W : 0),
      p = [];
    for (let e of d) p.every((t) => f(t, e)) && p.push(e);
    return [...u.filter((e) => p.every((t) => f(t, e))), ...p].sort(
      (e, t) => e.y - t.y,
    );
  },
  q = n(),
  J = e(t(), 1),
  Y = ` km`;
function X(e) {
  let t = x(e);
  if (t.endsWith(Y)) return `${t.slice(0, -3)} kilometers`;
  let n = t.slice(0, -1);
  return `${n} ${n === `1` ? `meter` : `meters`}`;
}
function Z(e, t) {
  let n = X(w(t));
  if (e.band === null)
    return `${e.reason === `timeout` ? `Out of time.` : `Passed.`} No points. Still at ${n}.`;
  let r = s[e.band]?.name ?? ``;
  return `${e.canonical ?? e.typed} — ${r}, plus ${l(e.points)} points. Now at ${n}.`;
}
function se(e) {
  let {
    result: t,
    points: n,
    round: r,
    length: i,
    question: a,
    ended: o,
    zoneName: s,
  } = e;
  return o
    ? `Run complete. Now at ${X(w(n))}, ${s}. ${l(n)} points.`
    : t
      ? Z(t, n)
      : a === null
        ? ``
        : i === null
          ? `Question ${r}. ${a}`
          : `Question ${r} of ${i}. ${a}`;
}
var ce = new WeakMap();
function le(e) {
  let t = ce.get(e);
  if (t) return t;
  let n = new Set(),
    r = null,
    i = {
      last: null,
      subscribe(t) {
        return (
          n.add(t),
          (r ??= e.onView((e) => {
            i.last = e;
            for (let e of n) e();
          })),
          () => {
            (n.delete(t), !(n.size > 0) && (r?.(), (r = null)));
          }
        );
      },
    };
  return (ce.set(e, i), i);
}
var ue = () => void 0;
function de(e, t, n) {
  let r = (0, q.c)(8),
    i;
  r[0] === e
    ? (i = r[1])
    : ((i = (t) => (e ? le(e).subscribe(t) : ue)), (r[0] = e), (r[1] = i));
  let a = i,
    o;
  r[2] !== e || r[3] !== n || r[4] !== t
    ? ((o = () => {
        let r = e ? ce.get(e)?.last : null;
        return r ? t(r) : n;
      }),
      (r[2] = e),
      (r[3] = n),
      (r[4] = t),
      (r[5] = o))
    : (o = r[5]);
  let s = o,
    c;
  return (
    r[6] === n ? (c = r[7]) : ((c = () => n), (r[6] = n), (r[7] = c)),
    (0, J.useSyncExternalStore)(a, s, c)
  );
}
var Q = i(),
  fe = 4e3,
  pe = 500;
function me(e) {
  let t = (0, q.c)(14),
    { climb: n, reducedMotion: r } = e,
    i = de(n, ge, null),
    a = de(n, he, !1),
    o = (0, J.useRef)(null),
    [s, c] = (0, J.useState)(null),
    l,
    u;
  (t[0] !== a || t[1] !== i
    ? ((l = () => {
        if (i === null || o.current === i) return;
        let e = o.current === null || !a;
        ((o.current = i), e || c(i));
      }),
      (u = [i, a]),
      (t[0] = a),
      (t[1] = i),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3])),
    (0, J.useEffect)(l, u));
  let d, f;
  (t[4] !== r || t[5] !== s
    ? ((d = () => {
        if (s === null) return;
        let e = setTimeout(() => c(null), r ? fe : fe + pe);
        return () => clearTimeout(e);
      }),
      (f = [s, r]),
      (t[4] = r),
      (t[5] = s),
      (t[6] = d),
      (t[7] = f))
    : ((d = t[6]), (f = t[7])),
    (0, J.useEffect)(d, f));
  let p = s === null ? void 0 : T[s],
    m;
  t[8] !== p || t[9] !== r || t[10] !== s
    ? ((m =
        p &&
        (0, Q.jsxs)(
          `div`,
          {
            className: r ? `climb-banner` : `climb-banner is-animated`,
            children: [
              (0, Q.jsx)(`p`, {
                className: `climb-banner-name`,
                children: p.name,
              }),
              p.blurb &&
                (0, Q.jsx)(`p`, {
                  className: `climb-banner-blurb`,
                  children: p.blurb,
                }),
            ],
          },
          s,
        )),
      (t[8] = p),
      (t[9] = r),
      (t[10] = s),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] === m
      ? (h = t[13])
      : ((h = (0, Q.jsx)(`div`, {
          "aria-live": `polite`,
          className: `climb-banner-slot`,
          children: m,
        })),
        (t[12] = m),
        (t[13] = h)),
    h
  );
}
function he(e) {
  return e.phase !== `idle`;
}
function ge(e) {
  return e.zone;
}
var _e = () =>
    a(
      async () => {
        let { createClimbStage: e } = await import(`./src-3ENMOZ2A.js`);
        return { createClimbStage: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    ).then(({ createClimbStage: e }) => e),
  ve = !1,
  ye = (e) => {
    ve || ((ve = !0), m(`stage_error`, { stage: `climb`, at: e }));
  };
function be(e) {
  let t = (0, q.c)(13),
    { onStage: n, onClimb: r, handlers: i, onTap: a } = e,
    o = (0, J.useRef)(null),
    s = (0, J.useRef)(null),
    c = (0, J.useRef)(null),
    [l, u] = (0, J.useState)(!1),
    [d, f] = (0, J.useState)(!1),
    p = (0, J.useRef)(n),
    m = (0, J.useRef)(r),
    h;
  (t[0] !== r || t[1] !== n
    ? ((h = () => {
        ((p.current = n), (m.current = r));
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = h))
    : (h = t[2]),
    (0, J.useEffect)(h));
  let g, _;
  (t[3] === i
    ? ((g = t[4]), (_ = t[5]))
    : ((g = () => {
        let e = o.current,
          t = s.current,
          n = c.current;
        if (!e || !t || !n) return;
        let r = !1,
          a = null,
          l = [],
          d = (e) => {
            r || (u(!0), a && f(!0), ye(e));
          },
          h = !1;
        return (
          _e()
            .then(async (o) => {
              if (((h = !0), r)) return;
              let s = e.getBoundingClientRect(),
                c = o({
                  canvas: t,
                  krill: n,
                  width: Math.max(1, s.width),
                  height: Math.max(1, s.height),
                  pixelRatio: window.devicePixelRatio || 1,
                  reducedMotion: matchMedia(`(prefers-reduced-motion: reduce)`)
                    .matches,
                  coarse: matchMedia(`(pointer: coarse)`).matches,
                  onFail: d,
                });
              a = c;
              let u = (e) =>
                c.on(e, (t) => {
                  let n = i.current[e];
                  n?.(t);
                });
              (l.push(
                u(`landed`),
                u(`card`),
                u(`done`),
                u(`sound`),
                u(`haptic`),
              ),
                p.current(c),
                m.current(c));
              let g = () => {
                  let t = e.getBoundingClientRect();
                  t.width > 0 &&
                    t.height > 0 &&
                    c.resize(t.width, t.height, window.devicePixelRatio || 1);
                },
                _ = new ResizeObserver(g);
              _.observe(e);
              let v = Se,
                y = v(),
                b = () => {
                  (g(),
                    y.removeEventListener(`change`, b),
                    (y = v()),
                    y.addEventListener(`change`, b));
                };
              y.addEventListener(`change`, b);
              let x = !0,
                S = () => {
                  x && !document.hidden ? c.resume() : c.pause();
                },
                C = new IntersectionObserver((e) => {
                  ((x = e.some(xe)), S());
                });
              (C.observe(e),
                document.addEventListener(`visibilitychange`, S),
                l.push(() => {
                  (_.disconnect(),
                    y.removeEventListener(`change`, b),
                    C.disconnect(),
                    document.removeEventListener(`visibilitychange`, S));
                }),
                await c.ready,
                r || f(!0));
            })
            .catch(() => d(h ? `worker` : `chunk`)),
          () => {
            r = !0;
            for (let e of l) e();
            (a?.dispose(), p.current(null), m.current(null));
          }
        );
      }),
      (_ = [i]),
      (t[3] = i),
      (t[4] = g),
      (t[5] = _)),
    (0, J.useEffect)(g, _));
  let v = l ? `true` : void 0,
    y = d ? `true` : void 0,
    b,
    x,
    S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsxs)(`picture`, {
        className: `climb-poster`,
        children: [
          (0, Q.jsx)(`source`, {
            media: `(orientation: landscape)`,
            srcSet: `/images/climb/start-landscape.webp`,
            width: 360,
            height: 225,
          }),
          (0, Q.jsx)(`img`, {
            src: `/images/climb/start-portrait.webp`,
            width: 195,
            height: 422,
            alt: ``,
            fetchPriority: `low`,
            decoding: `async`,
          }),
        ],
      })),
      (x = (0, Q.jsx)(`canvas`, { ref: s, className: `climb-scene` })),
      (S = (0, Q.jsx)(`canvas`, { ref: c, className: `climb-krill` })),
      (t[6] = b),
      (t[7] = x),
      (t[8] = S))
    : ((b = t[6]), (x = t[7]), (S = t[8]));
  let C;
  return (
    t[9] !== a || t[10] !== v || t[11] !== y
      ? ((C = (0, Q.jsxs)(`div`, {
          ref: o,
          className: `climb-board`,
          "aria-hidden": `true`,
          "data-failed": v,
          "data-ready": y,
          onPointerDown: a,
          children: [b, x, S],
        })),
        (t[9] = a),
        (t[10] = v),
        (t[11] = y),
        (t[12] = C))
      : (C = t[12]),
    C
  );
}
function xe(e) {
  return e.isIntersecting;
}
function Se() {
  return matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
}
var Ce = `The more people say it, the higher you go.`,
  we = (e) =>
    e
      .split(/[\s_-]+/)
      .filter(Boolean)
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(` `);
function Te(e) {
  let t = (0, q.c)(10),
    { category: n, text: r, loading: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = we(n)), (t[0] = n), (t[1] = a));
  let o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, Q.jsx)(`p`, { className: `climb-card-category`, children: a })),
      (t[2] = a),
      (t[3] = o));
  let s = i ? `Loading the next question…` : r,
    c;
  t[4] === s
    ? (c = t[5])
    : ((c = (0, Q.jsx)(`p`, {
        id: `climb-question`,
        className: `climb-card-text`,
        children: s,
      })),
      (t[4] = s),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(`p`, { className: `climb-card-hint`, children: Ce })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== o || t[8] !== c
      ? ((u = (0, Q.jsxs)(`div`, {
          className: `climb-card`,
          children: [o, c, l],
        })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Ee = 18,
  De = 2 * Math.PI * Ee,
  Oe = 5;
function ke(e) {
  let t = (0, q.c)(13),
    { remaining: n, limit: r } = e,
    i = Math.max(0, Math.ceil(n / 1e3)),
    a = r > 0 ? Math.min(1, Math.max(0, n / r)) : 0,
    o = i <= Oe ? `climb-clock is-warn` : `climb-clock`,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`title`, { children: `Time left` })),
      (c = (0, Q.jsx)(`circle`, {
        className: `climb-clock-track`,
        cx: `22`,
        cy: `22`,
        r: Ee,
        fill: `none`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l = De * (1 - a),
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = (0, Q.jsxs)(`svg`, {
        viewBox: `0 0 44 44`,
        className: `climb-clock-ring`,
        "aria-hidden": `true`,
        focusable: `false`,
        children: [
          s,
          c,
          (0, Q.jsx)(`circle`, {
            className: `climb-clock-arc`,
            cx: `22`,
            cy: `22`,
            r: Ee,
            fill: `none`,
            transform: `rotate(-90 22 22)`,
            strokeDasharray: De,
            strokeDashoffset: l,
          }),
        ],
      })),
      (t[2] = l),
      (t[3] = u));
  let d;
  t[4] === i
    ? (d = t[5])
    : ((d = (0, Q.jsx)(`span`, {
        className: `climb-clock-seconds`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = d));
  let f = i === Oe ? `5 seconds left` : ``,
    p;
  t[6] === f
    ? (p = t[7])
    : ((p = (0, Q.jsx)(`span`, {
        className: `visually-hidden`,
        "aria-live": `polite`,
        children: f,
      })),
      (t[6] = f),
      (t[7] = p));
  let m;
  return (
    t[8] !== o || t[9] !== u || t[10] !== d || t[11] !== p
      ? ((m = (0, Q.jsxs)(`div`, {
          className: o,
          role: `timer`,
          children: [u, d, p],
        })),
        (t[8] = o),
        (t[9] = u),
        (t[10] = d),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var Ae = 20,
  je = Array.from({ length: Ae }, (e, t) => `c${t}`),
  Me = (e) =>
    e.you
      ? `var(--tomato)`
      : e.team
        ? `var(--team-${e.team})`
        : `var(--edge-2)`,
  Ne = (e, t) => (e <= 0 || t <= 0 ? 0 : Math.max(1, Math.round((e / t) * Ae)));
function Pe(e) {
  let t = (0, q.c)(13),
    { percentile: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = B(n, !1)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] !== n.kind || t[3] !== n.value
    ? ((a = n.kind === `better` ? Math.round(n.value / 5) : 0),
      (t[2] = n.kind),
      (t[3] = n.value),
      (t[4] = a))
    : (a = t[4]);
  let o = a,
    s;
  t[5] !== o || t[6] !== n.kind
    ? ((s =
        n.kind === `better` &&
        (0, Q.jsx)(`ol`, {
          className: `climb-pct-bar`,
          "aria-hidden": `true`,
          children: je.map((e, t) =>
            (0, Q.jsx)(
              `li`,
              {
                "data-on": t < o || void 0,
                "data-you": (o > 0 && t === o - 1) || void 0,
              },
              e,
            ),
          ),
        })),
      (t[5] = o),
      (t[6] = n.kind),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] === i
    ? (c = t[9])
    : ((c = (0, Q.jsx)(`p`, { className: `climb-pct-text`, children: i })),
      (t[8] = i),
      (t[9] = c));
  let l;
  return (
    t[10] !== s || t[11] !== c
      ? ((l = (0, Q.jsxs)(`div`, { className: `climb-pct`, children: [s, c] })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function Fe(e) {
  let t = (0, q.c)(15),
    { rows: n, percentile: r, loading: i } = e,
    a = n.length >= 2;
  if (!a && !r && !i) return null;
  let o;
  t[0] === n
    ? (o = t[1])
    : ((o = Math.max(0, ...n.map(Ie))), (t[0] = n), (t[1] = o));
  let s = o,
    c;
  t[2] === r
    ? (c = t[3])
    : ((c = r && (0, Q.jsx)(Pe, { percentile: r })), (t[2] = r), (t[3] = c));
  let l;
  t[4] !== i || t[5] !== r
    ? ((l =
        !r &&
        i &&
        (0, Q.jsx)(`div`, {
          className: `climb-pct`,
          "data-loading": !0,
          "aria-hidden": `true`,
        })),
      (t[4] = i),
      (t[5] = r),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== a || t[8] !== s || t[9] !== n
    ? ((u =
        a &&
        (0, Q.jsxs)(`section`, {
          className: `climb-compare-board`,
          "aria-labelledby": `climb-compare-title`,
          children: [
            (0, Q.jsx)(`h3`, {
              id: `climb-compare-title`,
              className: `climb-compare-title`,
              children: `How high everyone got`,
            }),
            (0, Q.jsx)(`ol`, {
              className: `climb-compare-list`,
              children: n.map((e) =>
                (0, Q.jsxs)(
                  `li`,
                  {
                    className: e.you
                      ? `climb-compare-row is-you`
                      : `climb-compare-row`,
                    "aria-current": e.you ? `true` : void 0,
                    style: { "--climb-row": Me(e) },
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `climb-compare-place`,
                        children: e.place,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `climb-compare-dot`,
                        "aria-hidden": `true`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `climb-compare-name`,
                        children: e.name,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `climb-compare-height`,
                        children: V(e.points),
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `climb-compare-bar`,
                        "aria-hidden": `true`,
                        children: (0, Q.jsx)(`span`, {
                          className: `climb-compare-fill`,
                          style: { width: `${(Ne(e.points, s) * 100) / Ae}%` },
                        }),
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
            }),
          ],
        })),
      (t[7] = a),
      (t[8] = s),
      (t[9] = n),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, Q.jsxs)(`div`, {
          className: `climb-compare`,
          children: [c, l, u],
        })),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function Ie(e) {
  return e.points;
}
var Le = 6,
  Re = [`f1`, `f2`, `f3`, `f4`, `f5`],
  ze = (e) => Re.find((t) => t === e) ?? null;
function Be(e) {
  let { you: t, friends: n, board: r } = e,
    i =
      n.length > 0
        ? n.map((e) => ({
            key: e.key,
            name: e.name,
            points: e.points,
            you: !1,
            team: ze(e.key),
          }))
        : (r ?? [])
            .filter((e) => !e.you)
            .map((e) => ({
              key: e.id,
              name: e.name,
              points: e.points,
              you: !1,
              team: null,
            }));
  if (i.length === 0) return [];
  let a = { key: `you`, name: `You`, points: t, you: !0, team: null },
    o = [a, ...i].sort((e, t) => t.points - e.points),
    s = o.slice(0, Le);
  return (s.includes(a) ? s : [...s.slice(0, Le - 1), a]).map((e) => ({
    ...e,
    place: o.filter((t) => t.points > e.points).length + 1,
  }));
}
function Ve(e) {
  let { kind: t, today: n, live: r, status: i } = e;
  return (
    t.kind === `daily` && t.date === n && r && (i === `idle` || i === `posting`)
  );
}
var He = [4, 3, 2, 1];
function Ue(e, t) {
  let n = g(e),
    r = new Map(e.crowd.map(([e], t) => [e, t])),
    i = (e) => r.get(e) ?? r.size,
    a = [];
  for (let e of He) {
    let r = [];
    for (let [i, a] of n.entries())
      a && a[1] === e && r.push({ aid: i, name: a[0], you: i === t });
    (r.sort((e, t) => i(e.aid) - i(t.aid) || e.aid - t.aid),
      r.length > 0 && a.push({ band: e, answers: r }));
  }
  return a;
}
function We(e, t, n) {
  return t !== null && t > 0 && e > t
    ? { kind: `new` }
    : n > 0
      ? { kind: `best`, points: n }
      : null;
}
var Ge = (e) => (e === null ? u.color : s[e].color),
  $ = (e) =>
    e.band === null
      ? e.reason === `timeout`
        ? `Out of time`
        : `Passed`
      : (e.canonical ?? e.typed);
function Ke(e) {
  let t = (0, q.c)(50),
    { index: n, result: r, prompt: i, challengers: a } = e,
    o,
    c,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== a || t[1] !== n || t[2] !== i || t[3] !== r) {
    let e = Ue(i, r.aid),
      g = a.length > 0 ? h(a, i, n) : [],
      _ = r.weight > 1 ? ` ×${r.weight}` : ``;
    p = `climb-recap-q`;
    let v = `Q${n + 1}${_}`,
      y;
    t[11] === v
      ? (y = t[12])
      : ((y = (0, Q.jsx)(`span`, {
          className: `climb-recap-num`,
          children: v,
        })),
        (t[11] = v),
        (t[12] = y));
    let b;
    t[13] === r.band
      ? (b = t[14])
      : ((b = Ge(r.band)), (t[13] = r.band), (t[14] = b));
    let x;
    t[15] === b
      ? (x = t[16])
      : ((x = { background: b }), (t[15] = b), (t[16] = x));
    let S = r.band === null ? `Missed` : s[r.band].name,
      C;
    t[17] !== x || t[18] !== S
      ? ((C = (0, Q.jsx)(`span`, {
          className: `climb-recap-square`,
          style: x,
          role: `img`,
          "aria-label": S,
        })),
        (t[17] = x),
        (t[18] = S),
        (t[19] = C))
      : (C = t[19]);
    let w;
    t[20] === i.text
      ? (w = t[21])
      : ((w = (0, Q.jsx)(`span`, {
          className: `climb-recap-text`,
          children: i.text,
        })),
        (t[20] = i.text),
        (t[21] = w));
    let T = r.band === null ? `climb-recap-mine is-miss` : `climb-recap-mine`,
      E;
    t[22] === r ? (E = t[23]) : ((E = $(r)), (t[22] = r), (t[23] = E));
    let D;
    t[24] !== T || t[25] !== E
      ? ((D = (0, Q.jsx)(`span`, { className: T, children: E })),
        (t[24] = T),
        (t[25] = E),
        (t[26] = D))
      : (D = t[26]);
    let O;
    t[27] === r.points
      ? (O = t[28])
      : ((O = l(r.points)), (t[27] = r.points), (t[28] = O));
    let k = `+${O}`,
      A;
    (t[29] === k
      ? (A = t[30])
      : ((A = (0, Q.jsx)(`span`, {
          className: `climb-recap-points`,
          children: k,
        })),
        (t[29] = k),
        (t[30] = A)),
      t[31] !== C || t[32] !== w || t[33] !== D || t[34] !== A || t[35] !== y
        ? ((m = (0, Q.jsx)(`summary`, {
            children: (0, Q.jsxs)(`span`, {
              className: `climb-recap-row`,
              children: [y, C, w, D, A],
            }),
          })),
          (t[31] = C),
          (t[32] = w),
          (t[33] = D),
          (t[34] = A),
          (t[35] = y),
          (t[36] = m))
        : (m = t[36]),
      (o = `climb-recap-body`),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((c = (0, Q.jsx)(`p`, {
            className: `climb-recap-board`,
            children: `Our board (est.)`,
          })),
          (t[37] = c))
        : (c = t[37]),
      (u = e.map(Je)),
      t[38] === r
        ? (d = t[39])
        : ((d =
            r.band === 0 &&
            (0, Q.jsx)(`p`, {
              className: `climb-recap-off`,
              children: `Your answer: ${$(r)} · Off the Board`,
            })),
          (t[38] = r),
          (t[39] = d)),
      (f =
        g.length > 0 &&
        (0, Q.jsx)(`ul`, {
          className: `climb-recap-friends`,
          "aria-label": `Friends`,
          children: g.map(qe),
        })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m));
  } else
    ((o = t[4]),
      (c = t[5]),
      (u = t[6]),
      (d = t[7]),
      (f = t[8]),
      (p = t[9]),
      (m = t[10]));
  let g;
  t[40] !== o || t[41] !== c || t[42] !== u || t[43] !== d || t[44] !== f
    ? ((g = (0, Q.jsxs)(`div`, { className: o, children: [c, u, d, f] })),
      (t[40] = o),
      (t[41] = c),
      (t[42] = u),
      (t[43] = d),
      (t[44] = f),
      (t[45] = g))
    : (g = t[45]);
  let _;
  return (
    t[46] !== p || t[47] !== m || t[48] !== g
      ? ((_ = (0, Q.jsxs)(`details`, { className: p, children: [m, g] })),
        (t[46] = p),
        (t[47] = m),
        (t[48] = g),
        (t[49] = _))
      : (_ = t[49]),
    _
  );
}
function qe(e) {
  return (0, Q.jsxs)(
    `li`,
    {
      children: [
        (0, Q.jsx)(`span`, {
          className: `climb-recap-dot`,
          style: { background: `var(--team-${e.team})` },
          "aria-hidden": `true`,
        }),
        `${e.name}: ${e.canonical ?? `No answer`} +${l(e.points)}`,
      ],
    },
    e.key,
  );
}
function Je(e) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `climb-recap-group`,
      children: [
        (0, Q.jsx)(`p`, {
          className: `climb-recap-band`,
          style: { color: s[e.band].color },
          children: s[e.band].name,
        }),
        (0, Q.jsx)(`ul`, { children: e.answers.map(Ye) }),
      ],
    },
    e.band,
  );
}
function Ye(e) {
  return (0, Q.jsxs)(
    `li`,
    {
      className: e.you ? `is-you` : void 0,
      "aria-current": e.you ? `true` : void 0,
      children: [
        e.name,
        e.you &&
          (0, Q.jsx)(`span`, { className: `climb-recap-you`, children: `You` }),
      ],
    },
    e.aid,
  );
}
function Xe(e) {
  let t = (0, q.c)(10),
    { results: n, prompts: r, challengers: i } = e;
  if (n.length === 0) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`h3`, {
        id: `climb-recap-title`,
        className: `climb-recap-title`,
        children: `Question by question`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== r || t[3] !== n) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e, t) => {
          let n = r[t];
          return n
            ? (0, Q.jsx)(
                Ke,
                { index: t, result: e, prompt: n, challengers: i },
                `${n.id}-${String(t)}`,
              )
            : null;
        }),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, Q.jsxs)(`section`, {
          className: `climb-recap`,
          "aria-labelledby": `climb-recap-title`,
          children: [a, o],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function Ze(e) {
  let t = (0, q.c)(57),
    {
      kind: n,
      points: i,
      results: a,
      prompts: o,
      challengers: s,
      best: c,
      compare: u,
      onShare: f,
      shareRef: p,
      onMenu: m,
      footer: h,
      toggle: g,
      rating: _,
    } = e,
    v;
  t[0] === a ? (v = t[1]) : ((v = y(a)), (t[0] = a), (t[1] = v));
  let b = v,
    x = (0, J.useContext)(ne),
    S = x?.route === `daily` && !x.fixed,
    w = n.kind === `daily` ? n.number : null,
    E;
  t[2] !== a.length || t[3] !== w
    ? ((E = re(w, a.length)), (t[2] = a.length), (t[3] = w), (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === E
    ? (D = t[6])
    : ((D = (0, Q.jsx)(`p`, { className: `climb-end-kicker`, children: E })),
      (t[5] = E),
      (t[6] = D));
  let O;
  t[7] === i ? (O = t[8]) : ((O = V(i)), (t[7] = i), (t[8] = O));
  let k;
  t[9] === O
    ? (k = t[10])
    : ((k = (0, Q.jsx)(`h2`, {
        id: `climb-end-title`,
        className: `climb-end-altitude`,
        tabIndex: -1,
        children: O,
      })),
      (t[9] = O),
      (t[10] = k));
  let A = T[C(i)],
    j;
  t[11] === A.name
    ? (j = t[12])
    : ((j = (0, Q.jsx)(`p`, { className: `climb-end-zone`, children: A.name })),
      (t[11] = A.name),
      (t[12] = j));
  let M;
  t[13] === i ? (M = t[14]) : ((M = l(i)), (t[13] = i), (t[14] = M));
  let ee = `${M} points · ${b} #1 ${b === 1 ? `answer` : `answers`}`,
    N;
  t[15] === ee
    ? (N = t[16])
    : ((N = (0, Q.jsx)(`p`, { className: `climb-end-points`, children: ee })),
      (t[15] = ee),
      (t[16] = N));
  let P;
  t[17] === c
    ? (P = t[18])
    : ((P =
        c &&
        (0, Q.jsx)(`p`, {
          className: `climb-end-best`,
          "data-new": c.kind === `new` || void 0,
          children: c.kind === `new` ? `New best!` : `Best ${V(c.points)}`,
        })),
      (t[17] = c),
      (t[18] = P));
  let F;
  t[19] === a ? (F = t[20]) : ((F = d(a)), (t[19] = a), (t[20] = F));
  let I = `✦ ${F.title}`,
    L;
  t[21] === I
    ? (L = t[22])
    : ((L = (0, Q.jsx)(`p`, { className: `climb-end-title`, children: I })),
      (t[21] = I),
      (t[22] = L));
  let te;
  t[23] !== N ||
  t[24] !== P ||
  t[25] !== L ||
  t[26] !== D ||
  t[27] !== k ||
  t[28] !== j
    ? ((te = (0, Q.jsxs)(`div`, {
        className: `climb-end-head`,
        children: [D, k, j, N, P, L],
      })),
      (t[23] = N),
      (t[24] = P),
      (t[25] = L),
      (t[26] = D),
      (t[27] = k),
      (t[28] = j),
      (t[29] = te))
    : (te = t[29]);
  let R;
  t[30] !== f || t[31] !== p
    ? ((R = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `og-play climb-end-share`,
        ref: p,
        onClick: f,
        children: `Share & challenge`,
      })),
      (t[30] = f),
      (t[31] = p),
      (t[32] = R))
    : (R = t[32]);
  let z;
  t[33] === m
    ? (z = t[34])
    : ((z =
        m &&
        (0, Q.jsx)(`button`, {
          type: `button`,
          className: `climb-end-menu`,
          onClick: m,
          children: `Back to start`,
        })),
      (t[33] = m),
      (t[34] = z));
  let B;
  t[35] === S
    ? (B = t[36])
    : ((B =
        S &&
        (0, Q.jsx)(`p`, {
          className: `climb-end-about`,
          children: (0, Q.jsx)(r, {
            to: `/sky-climb`,
            children: `How Sky Climb works, and all ${T.length} zones`,
          }),
        })),
      (t[35] = S),
      (t[36] = B));
  let H;
  t[37] !== R || t[38] !== z || t[39] !== B || t[40] !== g
    ? ((H = (0, Q.jsxs)(`div`, {
        className: `climb-end-actions`,
        children: [R, z, g, B],
      })),
      (t[37] = R),
      (t[38] = z),
      (t[39] = B),
      (t[40] = g),
      (t[41] = H))
    : (H = t[41]);
  let U;
  t[42] === _
    ? (U = t[43])
    : ((U =
        _ && (0, Q.jsx)(`div`, { className: `climb-end-rating`, children: _ })),
      (t[42] = _),
      (t[43] = U));
  let ie;
  t[44] === u
    ? (ie = t[45])
    : ((ie = (0, Q.jsx)(Fe, { ...u })), (t[44] = u), (t[45] = ie));
  let W;
  t[46] !== s || t[47] !== o || t[48] !== a
    ? ((W = (0, Q.jsx)(Xe, { results: a, prompts: o, challengers: s })),
      (t[46] = s),
      (t[47] = o),
      (t[48] = a),
      (t[49] = W))
    : (W = t[49]);
  let G;
  return (
    t[50] !== h ||
    t[51] !== te ||
    t[52] !== H ||
    t[53] !== U ||
    t[54] !== ie ||
    t[55] !== W
      ? ((G = (0, Q.jsx)(`section`, {
          className: `climb-end`,
          "aria-label": `Your climb`,
          children: (0, Q.jsxs)(`div`, {
            className: `climb-end-col`,
            children: [te, H, U, ie, h, W],
          }),
        })),
        (t[50] = h),
        (t[51] = te),
        (t[52] = H),
        (t[53] = U),
        (t[54] = ie),
        (t[55] = W),
        (t[56] = G))
      : (G = t[56]),
    G
  );
}
function Qe(e) {
  let t = (0, q.c)(26),
    { rows: n, title: r } = e,
    i = n.length,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== n || t[1] !== i || t[2] !== r) {
    let e = n.flatMap(et);
    ((a = `climb-icon`),
      (s = `0 0 ${i} ${i}`),
      (c = `20`),
      (l = `20`),
      (u = `currentColor`),
      (d = `crispEdges`),
      (f = r ? void 0 : !0),
      (p = r ? `img` : void 0),
      t[13] === r
        ? (m = t[14])
        : ((m = r && (0, Q.jsx)(`title`, { children: r })),
          (t[13] = r),
          (t[14] = m)),
      (o = e.map($e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else
    ((a = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]),
      (p = t[11]),
      (m = t[12]));
  let h;
  return (
    t[15] !== a ||
    t[16] !== o ||
    t[17] !== s ||
    t[18] !== c ||
    t[19] !== l ||
    t[20] !== u ||
    t[21] !== d ||
    t[22] !== f ||
    t[23] !== p ||
    t[24] !== m
      ? ((h = (0, Q.jsxs)(`svg`, {
          className: a,
          viewBox: s,
          width: c,
          height: l,
          fill: u,
          shapeRendering: d,
          "aria-hidden": f,
          role: p,
          children: [m, o],
        })),
        (t[15] = a),
        (t[16] = o),
        (t[17] = s),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d),
        (t[22] = f),
        (t[23] = p),
        (t[24] = m),
        (t[25] = h))
      : (h = t[25]),
    h
  );
}
function $e(e) {
  return (0, Q.jsx)(
    `rect`,
    { x: e.x, y: e.y, width: `1`, height: `1` },
    `${e.x}-${e.y}`,
  );
}
function et(e, t) {
  return Array.from(e, (e, n) => ({ ch: e, x: n, y: t })).filter(tt);
}
function tt(e) {
  return e.ch === `#`;
}
var nt = [
    `........`,
    `...#....`,
    `..##..#.`,
    `###..#..`,
    `###..#..`,
    `..##..#.`,
    `...#....`,
    `........`,
  ],
  rt = [
    `....####`,
    `....#..#`,
    `....#..#`,
    `....#..#`,
    `..###.##`,
    `.####.##`,
    `..##....`,
    `........`,
  ],
  it = [
    `..####..`,
    `..#.....`,
    `..#..#..`,
    `..#...#.`,
    `#######.`,
    `..#...#.`,
    `..#..#..`,
    `..####..`,
  ],
  at = [
    [
      `........`,
      `........`,
      `...##...`,
      `...##...`,
      `........`,
      `........`,
      `........`,
      `........`,
    ],
    [
      `........`,
      `...#....`,
      `..###...`,
      `...#....`,
      `........`,
      `........`,
      `........`,
      `........`,
    ],
    [
      `...#....`,
      `..###...`,
      `.#####..`,
      `..###...`,
      `...#....`,
      `........`,
      `........`,
      `........`,
    ],
    [
      `...##...`,
      `..####..`,
      `.######.`,
      `.######.`,
      `..####..`,
      `...##...`,
      `........`,
      `........`,
    ],
    [
      `...##...`,
      `...##...`,
      `.######.`,
      `..####..`,
      `..####..`,
      `.##..##.`,
      `........`,
      `........`,
    ],
  ],
  ot = [
    `........`,
    `.#....#.`,
    `..#..#..`,
    `...##...`,
    `...##...`,
    `..#..#..`,
    `.#....#.`,
    `........`,
  ],
  st = () => {
    let e = (0, q.c)(1),
      t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(Qe, { rows: nt })), (e[0] = t))
        : (t = e[0]),
      t
    );
  },
  ct = () => {
    let e = (0, q.c)(1),
      t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(Qe, { rows: rt })), (e[0] = t))
        : (t = e[0]),
      t
    );
  },
  lt = () => {
    let e = (0, q.c)(1),
      t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(Qe, { rows: it })), (e[0] = t))
        : (t = e[0]),
      t
    );
  },
  ut = (e) => {
    let t = (0, q.c)(2),
      { band: n } = e,
      r = n === null ? ot : at[n],
      i;
    return (
      t[0] === r
        ? (i = t[1])
        : ((i = (0, Q.jsx)(Qe, { rows: r })), (t[0] = r), (t[1] = i)),
      i
    );
  },
  dt = 10,
  ft = 10,
  pt = (e) => {
    if (e) return e.band === null ? u.color : s[e.band].color;
  };
function mt(e) {
  let t = (0, q.c)(52),
    {
      climb: n,
      best: r,
      round: i,
      length: a,
      results: o,
      muted: s,
      musicOff: c,
      onMute: u,
      onMusic: d,
      onQuit: f,
      quitLabel: p,
    } = e,
    m = de(n, gt, 0),
    h = de(n, ht, 0),
    g = !Number.isFinite(a),
    _ = g ? Math.max(0, i - dt) : 0,
    v = g ? Math.min(dt, i) : a,
    y;
  if (t[0] !== v || t[1] !== _) {
    let e;
    (t[3] === _ ? (e = t[4]) : ((e = (e, t) => _ + t), (t[3] = _), (t[4] = e)),
      (y = Array.from({ length: v }, e)),
      (t[0] = v),
      (t[1] = _),
      (t[2] = y));
  } else y = t[2];
  let b = y,
    S;
  t[5] === m ? (S = t[6]) : ((S = x(m)), (t[5] = m), (t[6] = S));
  let C;
  t[7] === S
    ? (C = t[8])
    : ((C = (0, Q.jsx)(`div`, { className: `climb-altitude`, children: S })),
      (t[7] = S),
      (t[8] = C));
  let T;
  t[9] === h ? (T = t[10]) : ((T = l(h)), (t[9] = h), (t[10] = T));
  let E = `${T} pts`,
    D;
  t[11] === E
    ? (D = t[12])
    : ((D = (0, Q.jsx)(`div`, { className: `climb-points`, children: E })),
      (t[11] = E),
      (t[12] = D));
  let O;
  t[13] !== r || t[14] !== h
    ? ((O =
        r > 0 &&
        (0, Q.jsx)(`div`, {
          className: h > r ? `climb-best is-best` : `climb-best`,
          children: `Best ${x(w(r))}`,
        })),
      (t[13] = r),
      (t[14] = h),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] !== C || t[17] !== D || t[18] !== O
    ? ((k = (0, Q.jsxs)(`div`, {
        className: `climb-score`,
        children: [C, D, O],
      })),
      (t[16] = C),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k))
    : (k = t[19]);
  let A = v > ft ? `climb-squares is-wrapped` : `climb-squares`,
    j;
  t[20] !== b || t[21] !== o || t[22] !== i
    ? ((j = b.map((e) =>
        (0, Q.jsx)(
          `li`,
          {
            className: `climb-square`,
            style: { background: pt(o[e]) },
            "aria-current": e === i - 1 ? `step` : void 0,
          },
          e,
        ),
      )),
      (t[20] = b),
      (t[21] = o),
      (t[22] = i),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] !== j || t[25] !== A
    ? ((M = (0, Q.jsx)(`ol`, {
        className: A,
        "aria-label": `Progress`,
        children: j,
      })),
      (t[24] = j),
      (t[25] = A),
      (t[26] = M))
    : (M = t[26]);
  let ee = g ? `Q ${i}` : `Q ${i} / ${a}`,
    N;
  t[27] === ee
    ? (N = t[28])
    : ((N = (0, Q.jsx)(`div`, { className: `climb-round`, children: ee })),
      (t[27] = ee),
      (t[28] = N));
  let P;
  t[29] !== M || t[30] !== N
    ? ((P = (0, Q.jsxs)(`div`, {
        className: `climb-progress`,
        children: [M, N],
      })),
      (t[29] = M),
      (t[30] = N),
      (t[31] = P))
    : (P = t[31]);
  let F = !s,
    I;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(st, {})), (t[32] = I))
    : (I = t[32]);
  let L;
  t[33] !== u || t[34] !== F
    ? ((L = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `climb-switch`,
        "aria-label": `Sound`,
        "aria-pressed": F,
        onClick: u,
        children: I,
      })),
      (t[33] = u),
      (t[34] = F),
      (t[35] = L))
    : (L = t[35]);
  let te = !c,
    R;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(ct, {})), (t[36] = R))
    : (R = t[36]);
  let ne;
  t[37] !== d || t[38] !== te
    ? ((ne = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `climb-switch`,
        "aria-label": `Music`,
        "aria-pressed": te,
        onClick: d,
        children: R,
      })),
      (t[37] = d),
      (t[38] = te),
      (t[39] = ne))
    : (ne = t[39]);
  let z;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(lt, {})), (t[40] = z))
    : (z = t[40]);
  let B;
  t[41] !== f || t[42] !== p
    ? ((B = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `climb-switch`,
        "aria-label": p,
        onClick: f,
        children: z,
      })),
      (t[41] = f),
      (t[42] = p),
      (t[43] = B))
    : (B = t[43]);
  let re;
  t[44] !== L || t[45] !== ne || t[46] !== B
    ? ((re = (0, Q.jsxs)(`div`, {
        className: `climb-switches`,
        children: [L, ne, B],
      })),
      (t[44] = L),
      (t[45] = ne),
      (t[46] = B),
      (t[47] = re))
    : (re = t[47]);
  let V;
  return (
    t[48] !== P || t[49] !== re || t[50] !== k
      ? ((V = (0, Q.jsxs)(`div`, {
          className: `climb-hud`,
          children: [k, P, re],
        })),
        (t[48] = P),
        (t[49] = re),
        (t[50] = k),
        (t[51] = V))
      : (V = t[51]),
    V
  );
}
function ht(e) {
  return e.points;
}
function gt(e) {
  return e.altitude;
}
var _t = `Good question?`,
  vt = `climb-fb`,
  yt = 5,
  bt = `a[href], button, input, select, textarea, summary, [contenteditable], [role='button'], [role='link']`,
  xt = (e) =>
    !(e instanceof Element) ||
    (e instanceof HTMLInputElement && e.name === `answer`)
      ? !0
      : e.closest(bt) === null,
  St = (e) =>
    e.band === null
      ? e.reason === `timeout`
        ? u.timeout
        : u.passed
      : s[e.band].name,
  Ct = [],
  wt = (e) => (e === null ? u.color : s[e].color),
  Tt = 3;
function Et({
  result: e,
  top: t,
  last: n,
  altitude: r,
  friends: i = Ct,
  onNext: a,
  onReport: o,
  feedback: c = null,
}) {
  let [u, d] = (0, J.useState)(null),
    f = (0, J.useRef)(a);
  ((f.current = a),
    (0, J.useEffect)(() => {
      let e = Date.now() + 600,
        t = (t) => {
          Date.now() < e ||
            t.repeat ||
            (t.key !== `Enter` && t.key !== ` `) ||
            (xt(t.target) && (t.preventDefault(), f.current()));
        };
      return (
        window.addEventListener(`keydown`, t),
        () => window.removeEventListener(`keydown`, t)
      );
    }, []));
  let p = (0, J.useRef)(null),
    m = c?.open === !0;
  (0, J.useLayoutEffect)(() => {
    m && p.current && (p.current.scrollTop = 0);
  }, [m]);
  let h = (0, J.useRef)(null);
  (0, J.useLayoutEffect)(() => {
    let e = p.current,
      t = h.current;
    if (!m || !e || !t) return;
    let n = () => e.style.setProperty(`--climb-fb-row`, `${t.offsetHeight}px`);
    if ((n(), typeof ResizeObserver > `u`)) return;
    let r = new ResizeObserver(n);
    return (r.observe(t), () => r.disconnect());
  }, [m]);
  let g = e.canonical ?? e.typed,
    _ = e.typed.trim(),
    v = u === e,
    y = () => {
      v || (d(e), o(e.promptId, _));
    };
  return (0, Q.jsxs)(`section`, {
    ref: p,
    className: `climb-result`,
    "aria-label": `Result`,
    "data-reasons": m || void 0,
    children: [
      (0, Q.jsxs)(`h2`, {
        className: `climb-result-band`,
        style: { color: wt(e.band) },
        children: [
          (0, Q.jsx)(ut, { band: e.band }),
          e.band !== null &&
            e.band >= Tt &&
            (0, Q.jsx)(`span`, {
              className: `climb-burst`,
              "data-band": e.band,
              "aria-hidden": `true`,
            }),
          St(e),
        ],
      }),
      (0, Q.jsx)(`ol`, {
        className: `climb-bandbar`,
        "aria-hidden": `true`,
        children: s.map((t) =>
          (0, Q.jsx)(
            `li`,
            {
              className: t.id === e.band ? `is-on` : void 0,
              style: { background: t.color },
            },
            t.id,
          ),
        ),
      }),
      g !== `` &&
        (0, Q.jsx)(`p`, { className: `climb-result-answer`, children: g }),
      (0, Q.jsx)(`p`, {
        className: `climb-result-points`,
        children: `+${l(e.points)}`,
      }),
      (0, Q.jsx)(`p`, {
        className: `climb-result-altitude`,
        children: `Now at ${x(r)}`,
      }),
      (0, Q.jsx)(`ol`, {
        className: `climb-result-top`,
        children: t
          .slice(0, yt)
          .map((t) =>
            (0, Q.jsxs)(
              `li`,
              {
                className: t.aid === e.aid ? `is-you` : void 0,
                "aria-current": t.aid === e.aid ? `true` : void 0,
                children: [
                  t.aid === e.aid && (0, Q.jsx)(ut, { band: e.band }),
                  t.name,
                ],
              },
              t.aid,
            ),
          ),
      }),
      i.length > 0 &&
        (0, Q.jsx)(`ul`, {
          className: `climb-result-friends`,
          "aria-label": `Friends`,
          children: i.map((e) =>
            (0, Q.jsxs)(
              `li`,
              {
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `climb-friend-dot`,
                    style: { background: `var(--team-${e.team})` },
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `climb-friend-name`,
                    children: e.name,
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `climb-friend-answer`,
                    children: e.canonical ?? `No answer`,
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `climb-friend-band`,
                    style: { background: wt(e.band) },
                    role: `img`,
                    "aria-label": e.band === null ? `Missed` : s[e.band].name,
                  }),
                ],
              },
              e.key,
            ),
          ),
        }),
      c?.open && (0, Q.jsx)(A, { fb: c, id: vt, title: _t, overlay: !0 }),
      (0, Q.jsxs)(`div`, {
        ref: h,
        className: `climb-result-actions`,
        children: [
          c && (0, Q.jsx)(j, { fb: c, panelId: vt, ask: _t }),
          e.band === null &&
            _ !== `` &&
            (0, Q.jsx)(`button`, {
              type: `button`,
              className: `climb-report`,
              onPointerDown: (e) => e.preventDefault(),
              onClick: y,
              disabled: v,
              children: v
                ? `Thanks, we'll check it`
                : `Should this count? Tell us →`,
            }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            className: `climb-next`,
            onPointerDown: (e) => e.preventDefault(),
            onClick: a,
            children: n ? `See results` : `Next`,
          }),
        ],
      }),
    ],
  });
}
var Dt = 24,
  Ot = 600,
  kt = 64,
  At = 90,
  jt = ` · `,
  Mt = /(?<=\d)m$/,
  Nt = 22,
  Pt = 20,
  Ft = 54,
  It = 24,
  Lt = [],
  Rt = (e, t) => Math.abs(e.y - t.y) < (e.h + t.h) / 2;
function zt(e) {
  let t = (0, q.c)(7),
    { text: n } = e;
  if (!Mt.test(n)) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Q.jsx)(Q.Fragment, { children: n })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  let r;
  t[2] === n ? (r = t[3]) : ((r = n.replace(Mt, ``)), (t[2] = n), (t[3] = r));
  let i;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`span`, {
        className: `climb-tick-unit`,
        children: `m`,
      })),
      (t[4] = i))
    : (i = t[4]);
  let a;
  return (
    t[5] === r
      ? (a = t[6])
      : ((a = (0, Q.jsxs)(Q.Fragment, { children: [r, i] })),
        (t[5] = r),
        (t[6] = a)),
    a
  );
}
function Bt(e) {
  let t = (0, q.c)(16),
    { text: n } = e,
    r,
    i,
    a,
    o;
  if (t[0] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((r = n.lastIndexOf(jt)), r < 0)) {
        o = (0, Q.jsx)(Q.Fragment, { children: n });
        break bb0;
      }
      ((i = `climb-landmark-name`), (a = n.slice(0, r)));
    }
    ((t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), (t[4] = o));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s;
  t[5] !== i || t[6] !== a
    ? ((s = (0, Q.jsx)(`span`, { className: i, children: a })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] !== r || t[9] !== n
    ? ((c = n.slice(r + 3)), (t[8] = r), (t[9] = n), (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] === c
    ? (l = t[12])
    : ((l = (0, Q.jsx)(`span`, {
        className: `climb-landmark-alt`,
        children: c,
      })),
      (t[11] = c),
      (t[12] = l));
  let u;
  return (
    t[13] !== s || t[14] !== l
      ? ((u = (0, Q.jsxs)(Q.Fragment, { children: [s, l] })),
        (t[13] = s),
        (t[14] = l),
        (t[15] = u))
      : (u = t[15]),
    u
  );
}
function Vt(e, t, n) {
  let r = (t) => b + e - t.y,
    i = t.filter((e) => r(e) < 0).sort((e, t) => t.y - e.y),
    a = t.filter((e) => r(e) > 1).sort((e, t) => e.y - t.y);
  return [
    ...i.map((e, t) => ({ friend: e, up: !0, y: kt + (t + 0.5) * It })),
    ...a.map((e, t) => ({ friend: e, up: !1, y: n - At - (t + 0.5) * It })),
  ];
}
function Ht(e) {
  let t = (0, q.c)(14),
    { climb: n } = e,
    r = de(n, qt, 0),
    i = de(n, Kt, 0),
    a = de(n, Gt, Lt),
    o = (0, J.useRef)(null),
    [s, c] = (0, J.useState)(Ot),
    l,
    u;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = () => {
        let e = o.current;
        if (!e) return;
        let t = () => c(e.clientHeight || Ot);
        if ((t(), typeof ResizeObserver != `function`)) return;
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
      }),
      (u = []),
      (t[0] = l),
      (t[1] = u))
    : ((l = t[0]), (u = t[1])),
    (0, J.useEffect)(l, u));
  let d;
  if (t[2] !== i || t[3] !== r || t[4] !== a || t[5] !== s) {
    let e;
    t[7] === s
      ? (e = t[8])
      : ((e = (e) => e.y * s >= kt && e.y * s <= s - At),
        (t[7] = s),
        (t[8] = e));
    let n = K(r, s, Dt).filter(e),
      c = { y: b * s, h: Nt },
      l;
    t[9] === i ? (l = t[10]) : ((l = x(i)), (t[9] = i), (t[10] = l));
    let u = l,
      f = Vt(r, a, s),
      p = [c, ...f.map(Wt)],
      m;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = { top: `${b * 100}%` }), (t[11] = m))
      : (m = t[11]);
    let h;
    (t[12] === u
      ? (h = t[13])
      : ((h = (0, Q.jsx)(`div`, {
          className: `climb-pointer`,
          style: m,
          children: (0, Q.jsx)(`span`, {
            className: `climb-pointer-label`,
            children: u,
          }),
        })),
        (t[12] = u),
        (t[13] = h)),
      (d = (0, Q.jsxs)(`div`, {
        ref: o,
        className: `climb-ruler`,
        "aria-hidden": `true`,
        children: [
          n.map((e) => {
            let t = { y: e.y * s, h: e.landmark ? Ft : Pt },
              n = e.label === u || p.some((e) => Rt(e, t)),
              r = [e.landmark ? `climb-tick is-landmark` : `climb-tick`];
            return (
              n && r.push(`is-yielding`),
              (0, Q.jsx)(
                `div`,
                {
                  className: r.join(` `),
                  style: { top: `${e.y * 100}%` },
                  children: (0, Q.jsx)(`span`, {
                    className: `climb-tick-label`,
                    children: e.landmark
                      ? (0, Q.jsx)(Bt, { text: e.label })
                      : (0, Q.jsx)(zt, { text: e.label }),
                  }),
                },
                `${e.landmark ? `m` : `t`}${e.alt}`,
              )
            );
          }),
          h,
          f.map(Ut),
        ],
      })),
      (t[2] = i),
      (t[3] = r),
      (t[4] = a),
      (t[5] = s),
      (t[6] = d));
  } else d = t[6];
  return d;
}
function Ut(e) {
  let { friend: t, up: n, y: r } = e;
  return (0, Q.jsxs)(
    `div`,
    {
      className: n ? `climb-friend-arrow is-up` : `climb-friend-arrow is-down`,
      style: { top: `${r}px`, "--friend-colour": `var(--team-${t.team})` },
      children: [
        (0, Q.jsx)(`span`, {
          className: `climb-friend-arrow-name`,
          children: t.name,
        }),
        (0, Q.jsx)(`span`, {
          className: `climb-friend-arrow-alt`,
          children: V(t.points),
        }),
      ],
    },
    t.key,
  );
}
function Wt(e) {
  return { y: e.y, h: It };
}
function Gt(e) {
  return e.friends;
}
function Kt(e) {
  return e.altitude;
}
function qt(e) {
  return e.y;
}
var Jt = [],
  Yt = () => void 0,
  Xt = O(() =>
    a(
      () => import(`./climb-popup-BsiGWy9y.js`),
      __vite__mapDeps([
        7, 8, 9, 10, 5, 11, 4, 6, 12, 13, 14, 15, 1, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      ]),
    ),
  );
function Zt(e) {
  let t = (0, q.c)(67),
    {
      setup: n,
      results: r,
      prompts: i,
      screen: a,
      liveEnd: o,
      challenge: s,
      popupOnRestore: c,
      restored: l,
    } = e,
    u = n?.challengers ?? Jt,
    d = n?.kind ?? null,
    p = s?.kind === `short` ? s.via : null,
    h = s?.reposted ?? !1,
    g = s?.kind === `long`,
    _ = s?.runId ?? null,
    y = n?.saves ?? !1,
    b;
  t[0] !== u ||
  t[1] !== r ||
  t[2] !== d ||
  t[3] !== p ||
  t[4] !== h ||
  t[5] !== g ||
  t[6] !== _ ||
  t[7] !== y
    ? ((b = {
        kind: d,
        results: r,
        challengers: u,
        via: p,
        reposted: h,
        keepLong: g,
        id: _,
        saves: y,
        stage: `climb`,
      }),
      (t[0] = u),
      (t[1] = r),
      (t[2] = d),
      (t[3] = p),
      (t[4] = h),
      (t[5] = g),
      (t[6] = _),
      (t[7] = y),
      (t[8] = b))
    : (b = t[8]);
  let x = L(b),
    [S, C] = (0, J.useState)(`none`),
    [w, T] = (0, J.useState)(null),
    [E, O] = (0, J.useState)(null),
    k = (0, J.useRef)(null),
    A;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => O({ id: Date.now(), text: e })), (t[9] = A))
    : (A = t[9]);
  let j = A,
    M;
  t[10] !== u || t[11] !== i || t[12] !== r.length
    ? ((M = v(u, i.slice(0, r.length)).map($t).sort(Qt)),
      (t[10] = u),
      (t[11] = i),
      (t[12] = r.length),
      (t[13] = M))
    : (M = t[13]);
  let ee = M,
    N = n?.kind.kind ?? null,
    P;
  t[14] !== N || t[15] !== x
    ? ((P = () => {
        if (!N) return;
        (D.unlock(), m(`share_open`, { mode: N, stage: `climb` }), x.ensure());
        let e = Xt.get();
        (T(() => e), C(`open`));
      }),
      (t[14] = N),
      (t[15] = x),
      (t[16] = P))
    : (P = t[16]);
  let F = P,
    I;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        (C(`closed`),
          requestAnimationFrame(() => {
            let e = k.current;
            e &&
              (e.focus({ preventScroll: !0 }),
              e.scrollIntoView({ block: `nearest` }));
          }));
      }),
      (t[17] = I))
    : (I = t[17]);
  let te = I,
    R;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => {
        (C(`none`), j(`Sharing couldn't load · reload the page to try again`));
      }),
      (t[18] = R))
    : (R = t[18]);
  let ne = R,
    z;
  t[19] === x
    ? (z = t[20])
    : ((z = () => x.ensure()), (t[19] = x), (t[20] = z));
  let B = (0, J.useEffectEvent)(z),
    re;
  t[21] !== F || t[22] !== S || t[23] !== a
    ? ((re = () => {
        a === `end` && S === `none` && F();
      }),
      (t[21] = F),
      (t[22] = S),
      (t[23] = a),
      (t[24] = re))
    : (re = t[24]);
  let V = (0, J.useEffectEvent)(re),
    H;
  t[25] !== o || t[26] !== B || t[27] !== V
    ? ((H = () => {
        if (o === null) return;
        B();
        let e = setTimeout(() => V(), 1e3);
        return () => clearTimeout(e);
      }),
      (t[25] = o),
      (t[26] = B),
      (t[27] = V),
      (t[28] = H))
    : (H = t[28]);
  let U;
  (t[29] === o ? (U = t[30]) : ((U = [o]), (t[29] = o), (t[30] = U)),
    (0, J.useEffect)(H, U));
  let ie;
  t[31] !== V || t[32] !== c || t[33] !== l || t[34] !== a
    ? ((ie = () => {
        if (!c || !l || a !== `end`) return;
        let e = setTimeout(() => V(), 400);
        return () => clearTimeout(e);
      }),
      (t[31] = V),
      (t[32] = c),
      (t[33] = l),
      (t[34] = a),
      (t[35] = ie))
    : (ie = t[35]);
  let W;
  (t[36] !== c || t[37] !== l || t[38] !== a
    ? ((W = [c, l, a]), (t[36] = c), (t[37] = l), (t[38] = a), (t[39] = W))
    : (W = t[39]),
    (0, J.useEffect)(ie, W));
  let G;
  t[40] === x
    ? (G = t[41])
    : ((G = (e) => x.refreshBoard(e)), (t[40] = x), (t[41] = G));
  let ae = (0, J.useEffectEvent)(G),
    oe = x.record?.id ?? null,
    K = s?.kind !== `long`,
    Y = l && !s && n?.saves && n.kind.kind === `daily` ? n.kind.date : null,
    X = (0, J.useRef)(null),
    Z;
  t[42] !== K || t[43] !== ae || t[44] !== Y || t[45] !== oe
    ? ((Z = () => {
        let e = oe ?? (Y ? (f.getRun(Y)?.id ?? null) : null);
        !e || !K || e === X.current || ((X.current = e), ae(e).catch(Yt));
      }),
      (t[42] = K),
      (t[43] = ae),
      (t[44] = Y),
      (t[45] = oe),
      (t[46] = Z))
    : (Z = t[46]);
  let se;
  (t[47] !== K || t[48] !== Y || t[49] !== oe
    ? ((se = [oe, Y, K]), (t[47] = K), (t[48] = Y), (t[49] = oe), (t[50] = se))
    : (se = t[50]),
    (0, J.useEffect)(Z, se));
  let ce = (0, J.useRef)(null),
    le;
  t[51] === x
    ? (le = t[52])
    : ((le = () => {
        (x.reset(), C(`none`), (ce.current ||= Xt.preloadWhenIdle()));
      }),
      (t[51] = x),
      (t[52] = le));
  let ue = (0, J.useEffectEvent)(le),
    de;
  t[53] !== ue || t[54] !== a
    ? ((de = () => {
        a === `run` && ue();
      }),
      (t[53] = ue),
      (t[54] = a),
      (t[55] = de))
    : (de = t[55]);
  let Q;
  (t[56] === a ? (Q = t[57]) : ((Q = [a]), (t[56] = a), (t[57] = Q)),
    (0, J.useEffect)(de, Q));
  let fe, pe;
  (t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = () => () => ce.current?.()), (pe = []), (t[58] = fe), (t[59] = pe))
    : ((fe = t[58]), (pe = t[59])),
    (0, J.useEffect)(fe, pe));
  let me;
  return (
    t[60] !== w ||
    t[61] !== ee ||
    t[62] !== F ||
    t[63] !== S ||
    t[64] !== x ||
    t[65] !== E
      ? ((me = {
          share: x,
          friends: ee,
          popup: S,
          Popup: w,
          openPopup: F,
          closePopup: te,
          onPopupError: ne,
          toast: E,
          flash: j,
          shareButton: k,
        }),
        (t[60] = w),
        (t[61] = ee),
        (t[62] = F),
        (t[63] = S),
        (t[64] = x),
        (t[65] = E),
        (t[66] = me))
      : (me = t[66]),
    me
  );
}
function Qt(e, t) {
  return t.points - e.points;
}
function $t(e) {
  return { name: e.name, people: e.people, points: e.points };
}
var en = `/assets/climb-amb-forest-BwewCqmh.mp3`,
  tn = `/assets/climb-amb-space-BvoiZiES.mp3`,
  nn = `/assets/climb-amb-stratosphere-CEU78Hp4.mp3`,
  rn = `/assets/climb-amb-wind-DECZXMUA.mp3`,
  an = `/assets/climb-click-C6LNcS4t.mp3`,
  on = `/assets/climb-copy-DX1B1hkv.mp3`,
  sn = `/assets/climb-end-Dnf4wnZE.mp3`,
  cn = `/assets/climb-gear-B40q8FVZ.mp3`,
  ln = `/assets/climb-question-W84qw9VD.mp3`,
  un = `/assets/climb-record-Ii3-KPtN.mp3`,
  dn = `/assets/climb-refused-Day8Co36.mp3`,
  fn = `/assets/climb-result-0-BcLKXiE5.mp3`,
  pn = `/assets/climb-result-1-W_jtQEfD.mp3`,
  mn = `/assets/climb-result-2-DWjwG3bs.mp3`,
  hn = `/assets/climb-result-3-Cy39elRp.mp3`,
  gn = `/assets/climb-result-4-Cju20NV3.mp3`,
  _n = `/assets/climb-rise-Dg43uyZT.mp3`,
  vn = `/assets/climb-skip-BnMdgd4j.mp3`,
  yn = `/assets/climb-start-maqXQucP.mp3`,
  bn = `/assets/climb-submit-DXT0iN1F.mp3`,
  xn = `/assets/climb-tick-H0_xCBrW.mp3`,
  Sn = `/assets/climb-timeout-BVAH5H8R.mp3`,
  Cn = `/assets/climb-zone-JVMFYdkp.mp3`,
  wn = [
    `start`,
    `question`,
    `submit`,
    `rise`,
    `result-0`,
    `result-1`,
    `result-2`,
    `result-3`,
    `result-4`,
    `timeout`,
    `skip`,
    `refused`,
    `tick`,
    `zone`,
    `gear`,
    `record`,
    `end`,
    `click`,
    `copy`,
  ],
  Tn = [`amb-forest`, `amb-wind`, `amb-stratosphere`, `amb-space`],
  En = [...wn, ...Tn],
  Dn = 0.05,
  On = { start: Dn, end: Dn + 10 },
  kn = {
    start: 0.4,
    question: 0.35,
    submit: 0.42,
    rise: 0.45,
    "result-0": 0.3,
    "result-1": 0.35,
    "result-2": 0.45,
    "result-3": 0.55,
    "result-4": 0.7,
    timeout: 0.3,
    skip: 0.42,
    refused: 0.4,
    tick: 0.26,
    zone: 0.3,
    gear: 0.4,
    record: 0.45,
    end: 0.45,
    click: 0.25,
    copy: 0.3,
    "amb-forest": 0.2,
    "amb-wind": 0.17,
    "amb-stratosphere": 0.13,
    "amb-space": 0.1,
  },
  An = [0.5, 0.65, 0.78, 0.9, 1],
  jn = {
    start: `start`,
    "question-in": `question`,
    clock: `tick`,
    submit: `submit`,
    timeout: `timeout`,
    reject: `refused`,
    copied: `copy`,
  },
  Mn = [`start`, `question`, `submit`, `rise`, `amb-forest`],
  Nn = [`tick`, `rise`, ...Tn],
  Pn = (e) => `result-${e}`,
  Fn = [1e3, 16e3, 1e5],
  In = 0.2,
  Ln = (e) => Math.min(1, Math.max(0, e));
function Rn(e) {
  let t = Math.log10(Math.max(e, 1)),
    [n, r, i] = Fn.map((e) => {
      let n = Ln((t - (Math.log10(e) - In)) / (2 * In));
      return {
        fall: Math.cos((n * Math.PI) / 2),
        rise: Math.sin((n * Math.PI) / 2),
      };
    });
  if (!(n && r && i)) throw Error(`ambience crossings are missing`);
  return {
    "amb-forest": n.fall,
    "amb-wind": n.rise * r.fall,
    "amb-stratosphere": r.rise * i.fall,
    "amb-space": i.rise,
  };
}
var zn = Object.assign({
    "../../assets/audio/climb/climb-amb-forest.mp3": en,
    "../../assets/audio/climb/climb-amb-space.mp3": tn,
    "../../assets/audio/climb/climb-amb-stratosphere.mp3": nn,
    "../../assets/audio/climb/climb-amb-wind.mp3": rn,
    "../../assets/audio/climb/climb-click.mp3": an,
    "../../assets/audio/climb/climb-copy.mp3": on,
    "../../assets/audio/climb/climb-end.mp3": sn,
    "../../assets/audio/climb/climb-gear.mp3": cn,
    "../../assets/audio/climb/climb-question.mp3": ln,
    "../../assets/audio/climb/climb-record.mp3": un,
    "../../assets/audio/climb/climb-refused.mp3": dn,
    "../../assets/audio/climb/climb-result-0.mp3": fn,
    "../../assets/audio/climb/climb-result-1.mp3": pn,
    "../../assets/audio/climb/climb-result-2.mp3": mn,
    "../../assets/audio/climb/climb-result-3.mp3": hn,
    "../../assets/audio/climb/climb-result-4.mp3": gn,
    "../../assets/audio/climb/climb-rise.mp3": _n,
    "../../assets/audio/climb/climb-skip.mp3": vn,
    "../../assets/audio/climb/climb-start.mp3": yn,
    "../../assets/audio/climb/climb-submit.mp3": bn,
    "../../assets/audio/climb/climb-tick.mp3": xn,
    "../../assets/audio/climb/climb-timeout.mp3": Sn,
    "../../assets/audio/climb/climb-zone.mp3": Cn,
  }),
  Bn = /climb-([\w-]+)\.mp3$/,
  Vn = (e, t) => {
    let n = new Map();
    for (let [r, i] of Object.entries(e)) {
      let e = t.exec(r)?.[1];
      e && n.set(e, i);
    }
    return n;
  };
function Hn(e) {
  let t = Vn(e, Bn),
    n = {};
  for (let e of En) {
    let r = t.get(e);
    r && (n[e] = r);
  }
  return n;
}
var Un = {
    files: Hn(zn),
    gains: kn,
    first: Mn,
    steady: Nn,
    alias: jn,
    beds: Object.fromEntries(Tn.map((e) => [e, On])),
  },
  Wn = 0.25,
  Gn = 0.02,
  Kn = () => ({ zone: null, zoneAt: -1 / 0, recorded: !1, mix: null }),
  qn = (e, t) =>
    t
      ? Object.entries(e).some(([e, n]) => Math.abs(n - (t[e] ?? 0)) >= Gn)
      : !0;
function Jn({ climb: e, screen: t, best: n, rootRef: r }) {
  let i = (0, J.useRef)(null),
    a = (0, J.useRef)(Kn()),
    o = (0, J.useRef)(t),
    s = (0, J.useRef)(n);
  ((s.current = n),
    (0, J.useLayoutEffect)(() => (D.setBank(Un), () => D.setBank(null)), []),
    (0, J.useEffect)(() => {
      let e = o.current;
      ((o.current = t),
        t === `run` && (a.current = Kn()),
        e === `run` && t === `end` && D.playClip(`end`));
    }, [t]),
    (0, J.useEffect)(() => {
      if (e)
        return e.on(`cue`, (e) => {
          switch (e.cue) {
            case `rise`:
              (D.playClip(`submit`),
                (i.current =
                  e.ms > 0
                    ? D.playClip(`rise`, {
                        gain: An[e.band],
                        endIn: e.ms / 1e3,
                      })
                    : null));
              break;
            case `miss`:
              D.playClip(e.reason === `timeout` ? `timeout` : `skip`);
              break;
            case `land`:
              (i.current?.fade(Wn),
                (i.current = null),
                e.band !== null && D.playClip(Pn(e.band)));
              break;
            case `gear`:
              break;
            default:
              break;
          }
        });
    }, [e]),
    (0, J.useEffect)(() => {
      if (e)
        return e.onView((e) => {
          if (o.current !== `run`) return;
          let t = a.current,
            n = e.phase !== `idle`,
            r = Date.now();
          (n &&
            t.zone !== null &&
            e.zone !== t.zone &&
            r - t.zoneAt >= 1200 &&
            (D.playClip(`zone`), (t.zoneAt = r)),
            (t.zone = e.zone),
            s.current > 0 &&
              !t.recorded &&
              e.points > s.current &&
              ((t.recorded = !0), n && D.playClip(`record`)));
          let i = Rn(e.altitude);
          qn(i, t.mix) && ((t.mix = i), D.mixBeds(i));
        });
    }, [e]),
    (0, J.useEffect)(() => {
      let e = r.current;
      if (!e) return;
      let t = (t) => {
        if (!(t.target instanceof Element)) return;
        let n = t.target.closest(`button, a`);
        !n ||
          !e.contains(n) ||
          (o.current === `end` && D.unlock(),
          n instanceof HTMLButtonElement &&
            !n.matches(
              `.og-dock button, .og-play, .climb-next, [data-sound='own']`,
            ) &&
            D.playClip(`click`));
      };
      return (
        e.addEventListener(`click`, t),
        () => e.removeEventListener(`click`, t)
      );
    }, [r]));
}
var Yn = new Set([`Shift`, `Control`, `Alt`, `Meta`, `Tab`]),
  Xn = 4,
  Zn = [],
  Qn = [],
  $n = 600;
function er() {
  let e = (0, q.c)(2),
    [t, n] = (0, J.useState)(!1),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {
          let e = window.visualViewport,
            t = () => n((e?.height ?? window.innerHeight) <= $n);
          return (
            t(),
            e?.addEventListener(`resize`, t),
            window.addEventListener(`resize`, t),
            () => {
              (e?.removeEventListener(`resize`, t),
                window.removeEventListener(`resize`, t));
            }
          );
        }),
        (i = []),
        (e[0] = r),
        (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, J.useLayoutEffect)(r, i),
    t
  );
}
var tr = () =>
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  nr = [0, -4, 4, -4, 4, -2, 0].map((e) => ({
    transform: `translateX(${e}px)`,
  })),
  rr = { duration: 300, easing: `steps(6, start)` },
  ir = (e, t) => P(e, t, !0),
  ar = (e, t) => {
    if (!(e.kind !== `daily` || e.date !== c()))
      return t?.percentile ?? f.getRun(e.date)?.percentile;
  },
  or = (e) => (!e || e.kind === `daily` ? 10 : (e.length ?? 10));
function sr(e) {
  let t = (0, q.c)(106),
    {
      setup: n,
      intro: r,
      homeMode: i,
      lockPage: a,
      onPlayAgain: s,
      onScreen: l,
      challenge: u,
      popupOnRestore: d,
    } = e,
    m = i === void 0 ? `home` : i,
    h = a === void 0 ? !1 : a,
    g = u === void 0 ? null : u,
    y = d === void 0 ? !1 : d,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { stage: `climb` }), (t[0] = b))
    : (b = t[0]);
  let x = F(n, m, b),
    S,
    w;
  (t[1] !== x.screen || t[2] !== l
    ? ((S = () => {
        l?.(x.screen);
      }),
      (w = [x.screen, l]),
      (t[1] = x.screen),
      (t[2] = l),
      (t[3] = S),
      (t[4] = w))
    : ((S = t[3]), (w = t[4])),
    (0, J.useEffect)(S, w));
  let E, O;
  (t[5] === x.screen
    ? ((E = t[6]), (O = t[7]))
    : ((E = () => {
        x.screen === `run`
          ? D.setBeds(!0)
          : D.setBeds(!1, x.screen === `end` ? Xn : 0);
      }),
      (O = [x.screen]),
      (t[5] = x.screen),
      (t[6] = E),
      (t[7] = O)),
    (0, J.useEffect)(E, O));
  let P;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = []), (t[8] = P))
    : (P = t[8]),
    (0, J.useEffect)(ur, P));
  let L = (0, J.useRef)(null),
    [ne, B] = (0, J.useState)(!1),
    [re, V] = (0, J.useState)(!1),
    H,
    U;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        (B(D.isMuted()), V(!D.isMusicOn()));
      }),
      (U = []),
      (t[9] = H),
      (t[10] = U))
    : ((H = t[9]), (U = t[10])),
    (0, J.useEffect)(H, U));
  let ie = er(),
    [W] = (0, J.useState)(tr),
    [G, ae] = (0, J.useState)(null),
    oe = de(G, lr, null),
    K = x.setup ?? n,
    Y = x.run,
    X = x.reveal,
    Z = X !== null && !X.card,
    ce;
  t[11] !== x || t[12] !== Z
    ? ((ce = () => {
        Z && x.skip();
      }),
      (t[11] = x),
      (t[12] = Z),
      (t[13] = ce))
    : (ce = t[13]);
  let le = ce,
    ue;
  t[14] !== x || t[15] !== Z
    ? ((ue = () => {
        if (!Z) return;
        let e = (e) => {
          Yn.has(e.key) || e.metaKey || e.ctrlKey || e.altKey || x.skip();
        };
        return (
          window.addEventListener(`keydown`, e),
          () => window.removeEventListener(`keydown`, e)
        );
      }),
      (t[14] = x),
      (t[15] = Z),
      (t[16] = ue))
    : (ue = t[16]);
  let fe;
  (t[17] !== x.skip || t[18] !== Z
    ? ((fe = [Z, x.skip]), (t[17] = x.skip), (t[18] = Z), (t[19] = fe))
    : (fe = t[19]),
    (0, J.useEffect)(ue, fe));
  let pe = !!X?.card,
    { inputRef: he } = x,
    ge,
    _e;
  (t[20] !== pe || t[21] !== he
    ? ((ge = () => {
        pe && he.current && (he.current.value = ``);
      }),
      (_e = [pe, he]),
      (t[20] = pe),
      (t[21] = he),
      (t[22] = ge),
      (t[23] = _e))
    : ((ge = t[22]), (_e = t[23])),
    (0, J.useEffect)(ge, _e));
  let { refusals: ve } = x,
    ye = (0, J.useRef)(0),
    xe,
    Se;
  (t[24] !== G || t[25] !== he || t[26] !== W || t[27] !== ve
    ? ((xe = () => {
        ve !== ye.current &&
          ((ye.current = ve),
          G?.refused(),
          W || he.current?.closest(`.og-field`)?.animate(nr, rr));
      }),
      (Se = [ve, G, W, he]),
      (t[24] = G),
      (t[25] = he),
      (t[26] = W),
      (t[27] = ve),
      (t[28] = xe),
      (t[29] = Se))
    : ((xe = t[28]), (Se = t[29])),
    (0, J.useEffect)(xe, Se));
  let [Ce, we] = (0, J.useState)(null),
    Ee = K?.kind,
    De,
    Oe;
  (t[30] !== x.screen || t[31] !== Ee
    ? ((De = () => {
        x.screen === `run` && Ee && we(f.best(p(Ee)));
      }),
      (Oe = [x.screen, Ee]),
      (t[30] = x.screen),
      (t[31] = Ee),
      (t[32] = De),
      (t[33] = Oe))
    : ((De = t[32]), (Oe = t[33])),
    (0, J.useEffect)(De, Oe));
  let Ae = Ce ?? 0,
    je;
  (t[34] !== G || t[35] !== x.screen || t[36] !== Ae
    ? ((je = { climb: G, screen: x.screen, best: Ae, rootRef: L }),
      (t[34] = G),
      (t[35] = x.screen),
      (t[36] = Ae),
      (t[37] = je))
    : (je = t[37]),
    Jn(je));
  let Me = Y ? Math.min(Y.index, Y.prompts.length - 1) : 0,
    Ne = Y?.prompts[Me] ?? null,
    Pe = or(Ee),
    Fe = x.finalResults ?? Y?.results ?? Zn,
    Ie = Fe.reduce(cr, 0),
    Le = Ee?.kind === `daily`,
    Re = Y?.prompts ?? K?.prompts ?? Qn,
    ze = x.screen,
    He = x.liveEnd,
    Ue = !!n?.finished,
    Ge;
  t[38] !== g ||
  t[39] !== x.liveEnd ||
  t[40] !== x.screen ||
  t[41] !== y ||
  t[42] !== Re ||
  t[43] !== Fe ||
  t[44] !== K ||
  t[45] !== Ue
    ? ((Ge = {
        setup: K,
        results: Fe,
        prompts: Re,
        screen: ze,
        liveEnd: He,
        challenge: g,
        popupOnRestore: y,
        restored: Ue,
      }),
      (t[38] = g),
      (t[39] = x.liveEnd),
      (t[40] = x.screen),
      (t[41] = y),
      (t[42] = Re),
      (t[43] = Fe),
      (t[44] = K),
      (t[45] = Ue),
      (t[46] = Ge))
    : (Ge = t[46]);
  let $ = Zt(Ge),
    Ke = x.screen === `run` || $.popup === `open`,
    qe;
  (t[47] !== x.inputRef ||
  t[48] !== h ||
  t[49] !== Z ||
  t[50] !== le ||
  t[51] !== Ke
    ? ((qe = {
        rootRef: L,
        inputRef: x.inputRef,
        active: Ke,
        revealing: Z,
        lockPage: h,
        onSkip: le,
      }),
      (t[47] = x.inputRef),
      (t[48] = h),
      (t[49] = Z),
      (t[50] = le),
      (t[51] = Ke),
      (t[52] = qe))
    : (qe = t[52]),
    N(qe));
  let Je = $.Popup,
    Ye = K?.kind ?? null,
    Xe = x.reveal?.card ? x.reveal : null,
    Qe;
  t[53] !== x.inputRef || t[54] !== Ye || t[55] !== Xe
    ? ((Qe = { kind: Ye, reveal: Xe, stage: `climb`, returnFocus: x.inputRef }),
      (t[53] = x.inputRef),
      (t[54] = Ye),
      (t[55] = Xe),
      (t[56] = Qe))
    : (Qe = t[56]);
  let $e = ee(Qe),
    et = K?.kind ?? null,
    tt = x.screen === `end`,
    nt;
  t[57] !== $.shareButton || t[58] !== et || t[59] !== tt
    ? ((nt = {
        kind: et,
        stage: `climb`,
        active: tt,
        returnFocus: $.shareButton,
      }),
      (t[57] = $.shareButton),
      (t[58] = et),
      (t[59] = tt),
      (t[60] = nt))
    : (nt = t[60]);
  let rt = te(nt),
    [it, at] = (0, J.useState)(!1),
    ot = se({
      result: X?.card ? X.result : null,
      points: Ie,
      round: Me + 1,
      length: Number.isFinite(Pe) ? Pe : null,
      question: x.screen === `run` && !x.waiting && Ne ? Ne.text : null,
      ended: x.screen === `end` && it,
      zoneName: T[C(Ie)].name,
    }),
    st = (0, J.useRef)(x.screen),
    ct,
    lt;
  (t[61] === x.screen
    ? ((ct = t[62]), (lt = t[63]))
    : ((ct = () => {
        let e = st.current;
        st.current = x.screen;
        let t = x.screen === `end` && e === `run`;
        if ((at(t), !t)) return;
        let n = L.current;
        (
          n?.querySelector(`#climb-end-title`) ??
          n?.querySelector(`.climb-end h2`)
        )?.focus({ preventScroll: !0 });
      }),
      (lt = [x.screen]),
      (t[61] = x.screen),
      (t[62] = ct),
      (t[63] = lt)),
    (0, J.useEffect)(ct, lt));
  let ut = ie ? `true` : void 0,
    dt = pe || void 0,
    ft;
  t[64] !== x.handlers || t[65] !== x.onStage || t[66] !== le
    ? ((ft = (0, Q.jsx)(be, {
        onStage: x.onStage,
        onClimb: ae,
        handlers: x.handlers,
        onTap: le,
      })),
      (t[64] = x.handlers),
      (t[65] = x.onStage),
      (t[66] = le),
      (t[67] = ft))
    : (ft = t[67]);
  let pt;
  t[68] !== x.screen ||
  t[69] !== x.start ||
  t[70] !== x.waiting ||
  t[71] !== r ||
  t[72] !== K
    ? ((pt =
        x.screen === `intro` &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`p`, {
              className: `climb-title`,
              "aria-hidden": `true`,
              children: `OpenNoillirk`,
            }),
            r({ start: x.start, waiting: x.waiting, setup: K, stage: `climb` }),
          ],
        })),
      (t[68] = x.screen),
      (t[69] = x.start),
      (t[70] = x.waiting),
      (t[71] = r),
      (t[72] = K),
      (t[73] = pt))
    : (pt = t[73]);
  let ht =
      x.screen === `run` &&
      (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(mt, {
            climb: G,
            best: Ce ?? 0,
            round: Me + 1,
            length: Pe,
            results: Fe,
            muted: ne,
            musicOff: re,
            onMute: () => B(D.toggleMute()),
            onMusic: () => V(!D.toggleMusic()),
            onQuit: x.quit,
            quitLabel: Le ? `Leave and resume later` : `End this run`,
          }),
          (0, Q.jsx)(Ht, { climb: G }),
          (0, Q.jsx)(me, { climb: G, reducedMotion: W }),
          (0, Q.jsxs)(`div`, {
            className: `climb-lower`,
            children: [
              X?.card && G
                ? (0, Q.jsx)(Et, {
                    result: X.result,
                    top: _(X.prompt),
                    last: o(Me, Pe),
                    altitude: oe ?? 0,
                    friends: X.friends,
                    onNext: () => G.next(),
                    onReport: ir,
                    feedback: $e,
                  })
                : (0, Q.jsx)(Te, {
                    category: Ne?.category ?? ``,
                    text: Ne?.text ?? ``,
                    loading: x.waiting || !Ne,
                  }),
              (0, Q.jsxs)(`div`, {
                className: pe ? `climb-answer-bar is-dim` : `climb-answer-bar`,
                children: [
                  x.refused &&
                    !X &&
                    (0, Q.jsx)(`p`, {
                      className: `og-msg climb-refused`,
                      children: `Not on our list — try another.`,
                    }),
                  (0, Q.jsx)(R, {
                    inputRef: x.inputRef,
                    onSubmit: x.submit,
                    onPass: x.pass,
                    onType: x.onType,
                    disabled: x.waiting || !Y || X !== null,
                    describedBy: `climb-question`,
                    lead: (0, Q.jsx)(ke, {
                      remaining: x.remaining,
                      limit: Y?.limitMs ?? x.remaining,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    gt =
      x.screen === `end` &&
      K &&
      (0, Q.jsx)(Ze, {
        kind: K.kind,
        points: Ie,
        results: Fe,
        prompts: Re,
        challengers: K.challengers,
        best: We(Ie, Ce, f.best(p(K.kind))),
        compare: {
          rows: Be({
            you: Ie,
            friends: v(K.challengers, Re.slice(0, Fe.length)),
            board:
              g?.kind === `long`
                ? null
                : ($.share.board?.top ?? $.share.reply?.board.top ?? null),
          }),
          percentile: ar(K.kind, $.share.record),
          loading: Ve({
            kind: K.kind,
            today: c(),
            live: x.liveEnd !== null,
            status: $.share.status,
          }),
        },
        onShare: $.openPopup,
        shareRef: $.shareButton,
        onMenu: K.kind.kind === `daily` ? null : x.backToIntro,
        footer:
          K.kind.kind === `daily`
            ? (0, Q.jsx)(I, { date: K.kind.date, archive: K.archive === !0 })
            : (0, Q.jsx)(k, { onAgain: s ?? x.backToIntro }),
        toggle: (0, Q.jsx)(z, { end: !0 }),
        rating:
          rt &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(j, {
                fb: rt,
                panelId: `climb-rate`,
                ask: `Enjoying Sky Climb?`,
              }),
              rt.open &&
                (0, Q.jsx)(A, {
                  fb: rt,
                  id: `climb-rate`,
                  title: `Enjoying Sky Climb?`,
                  overlay: !1,
                }),
            ],
          }),
      }),
    _t;
  t[74] !== Je ||
  t[75] !== g ||
  t[76] !== x.screen ||
  t[77] !== x.stageReady ||
  t[78] !== x.stageRef ||
  t[79] !== Re ||
  t[80] !== Fe ||
  t[81] !== $.closePopup ||
  t[82] !== $.flash ||
  t[83] !== $.friends ||
  t[84] !== $.onPopupError ||
  t[85] !== $.popup ||
  t[86] !== $.share ||
  t[87] !== K
    ? ((_t =
        $.popup !== `none` &&
        x.screen === `end` &&
        K &&
        Je &&
        (0, Q.jsx)(M, {
          onError: $.onPopupError,
          children: (0, Q.jsx)(J.Suspense, {
            fallback: null,
            children: (0, Q.jsx)(Je, {
              open: $.popup === `open`,
              onClose: $.closePopup,
              stageRef: x.stageRef,
              stageReady: x.stageReady,
              kind: K.kind,
              results: Fe,
              prompts: Re,
              friends: $.friends,
              share: $.share,
              flash: $.flash,
              challenge: g,
            }),
          }),
        })),
      (t[74] = Je),
      (t[75] = g),
      (t[76] = x.screen),
      (t[77] = x.stageReady),
      (t[78] = x.stageRef),
      (t[79] = Re),
      (t[80] = Fe),
      (t[81] = $.closePopup),
      (t[82] = $.flash),
      (t[83] = $.friends),
      (t[84] = $.onPopupError),
      (t[85] = $.popup),
      (t[86] = $.share),
      (t[87] = K),
      (t[88] = _t))
    : (_t = t[88]);
  let vt;
  t[89] === $.toast
    ? (vt = t[90])
    : ((vt =
        $.toast &&
        (0, Q.jsx)(
          `p`,
          { className: `og-toast`, role: `status`, children: $.toast.text },
          $.toast.id,
        )),
      (t[89] = $.toast),
      (t[90] = vt));
  let yt;
  t[91] === ot
    ? (yt = t[92])
    : ((yt = (0, Q.jsx)(`p`, {
        className: `visually-hidden`,
        "aria-live": `polite`,
        children: ot,
      })),
      (t[91] = ot),
      (t[92] = yt));
  let bt;
  t[93] !== pt ||
  t[94] !== ht ||
  t[95] !== gt ||
  t[96] !== _t ||
  t[97] !== vt ||
  t[98] !== yt
    ? ((bt = (0, Q.jsxs)(`div`, {
        className: `og-ui`,
        children: [pt, ht, gt, _t, vt, yt],
      })),
      (t[93] = pt),
      (t[94] = ht),
      (t[95] = gt),
      (t[96] = _t),
      (t[97] = vt),
      (t[98] = yt),
      (t[99] = bt))
    : (bt = t[99]);
  let xt;
  return (
    t[100] !== x.screen ||
    t[101] !== ut ||
    t[102] !== dt ||
    t[103] !== ft ||
    t[104] !== bt
      ? ((xt = (0, Q.jsxs)(`div`, {
          ref: L,
          className: `og-game climb-stage`,
          "data-screen": x.screen,
          "data-compact": ut,
          "data-card": dt,
          children: [ft, bt],
        })),
        (t[100] = x.screen),
        (t[101] = ut),
        (t[102] = dt),
        (t[103] = ft),
        (t[104] = bt),
        (t[105] = xt))
      : (xt = t[105]),
    xt
  );
}
function cr(e, t) {
  return e + t.points;
}
function lr(e) {
  return e.phase === `rising` ? null : e.altitude;
}
function ur() {
  return dr;
}
function dr() {
  return D.setBeds(!1);
}
export { sr as ClimbGame };
