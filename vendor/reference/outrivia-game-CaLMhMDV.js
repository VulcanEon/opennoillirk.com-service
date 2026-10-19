const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/v2/result-popup-CyQEZrMk.js",
      "assets/v2/compiler-runtime-BybR60WX.js",
      "assets/v2/audio-BdxWxAxT.js",
      "assets/v2/storage-Cd9DMQud.js",
      "assets/v2/rules-DxwvjuIt.js",
      "assets/v2/main-BXKF3zmu.js",
      "assets/v2/preload-helper-qlgyTAkD.js",
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
      "assets/v2/jsx-runtime-D_h4s5mO.js",
      "assets/v2/lazyRouteComponent-C02Cd2Zo.js",
      "assets/v2/icons-DDwzIPdf.js",
      "assets/v2/copy-CMIldnKw.js",
      "assets/v2/poster-icons-C6vhkpTx.js",
      "assets/v2/result-popup-Cz69gUZm.css",
    ]),
) => i.map((i) => d[i]);
import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./jsx-runtime-D_h4s5mO.js";
import { t as i } from "./preload-helper-qlgyTAkD.js";
import {
  G as a,
  L as o,
  b as s,
  l as c,
  s as l,
  x as u,
} from "./rules-DxwvjuIt.js";
import { t as d } from "./storage-Cd9DMQud.js";
import "./stage-choice-DO9JGjKK.js";
import {
  b as f,
  c as p,
  l as m,
  m as h,
  s as g,
  u as ee,
} from "./main-BXKF3zmu.js";
import { t as _ } from "./audio-BdxWxAxT.js";
import "./runs-DrM9YA6U.js";
import {
  a as v,
  c as te,
  d as ne,
  f as y,
  i as re,
  l as ie,
  n as ae,
  o as oe,
  p as b,
  r as se,
  s as ce,
  t as le,
  u as ue,
} from "./use-share-run-hxjVU6AS.js";
import { o as x } from "./icons-DDwzIPdf.js";
import {
  a as de,
  i as fe,
  n as pe,
  o as S,
  r as me,
  s as C,
  t as he,
} from "./game-ui-DEL71d58.js";
import { t as ge } from "./stage-toggle-LI6FLr3n.js";
var w = n(),
  T = e(t(), 1),
  E = /swiftshader|llvmpipe|softpipe|software|basic render driver/i,
  D = (e) => E.test(e);
function O(e) {
  let t = null;
  try {
    t = e.getContext(`webgl`, {
      failIfMajorPerformanceCaveat: !0,
      powerPreference: `low-power`,
      alpha: !1,
      antialias: !1,
      depth: !1,
      stencil: !1,
    });
  } catch {
    return !0;
  }
  if (!t) return !0;
  try {
    let e = t.getExtension(`WEBGL_debug_renderer_info`),
      n = t.getParameter(e ? e.UNMASKED_RENDERER_WEBGL : t.RENDERER);
    return D(typeof n == `string` ? n : ``);
  } finally {
    t.getExtension(`WEBGL_lose_context`)?.loseContext();
  }
}
var k = null;
function _e() {
  return (k === null && (k = O(document.createElement(`canvas`))), k);
}
var A = r(),
  j = () => i(() => import(`./src-CT_bkS5Q.js`), []),
  ve = () => void 0,
  ye = [`pointermove`, `pointerdown`, `keydown`, `wheel`, `touchstart`],
  be = `(hover: hover) and (pointer: fine)`;
function xe(e) {
  return e.software && !e.desktop && !e.needed ? `poster` : `stage`;
}
var Se = {
    you: `#D9360D`,
    f1: `#3A5FD0`,
    f2: `#D33860`,
    f3: `#A36815`,
    f4: `#8E4B8F`,
    f5: `#4E6A7A`,
  },
  Ce = [`#6A7588`, `#198276`, `#3F6FE0`, `#7B4FE8`, `#D9360D`],
  M = `#697588`,
  N = 4;
function P(e, t) {
  let n = e.el;
  ((n.textContent = ``), (e.num = null));
  let r = document.createElement(`div`),
    i = t.team ? (Se[t.team] ?? Se.f1) : void 0;
  if (t.kind === `count`) {
    ((r.className = `og-count`), i && (r.style.color = i));
    let n = document.createElement(`span`);
    n.innerHTML = x;
    let a = document.createElement(`span`);
    ((a.textContent = t.text), r.append(n.firstChild ?? n, a), (e.num = a));
  } else if (t.kind === `who`)
    ((r.className = `og-who`),
      (r.textContent = t.text),
      i && ((r.style.background = i), r.style.setProperty(`--who`, i)));
  else if (t.kind === `others`)
    ((r.className = `og-pill other`), (r.textContent = t.text));
  else {
    let e = t.team === `you`;
    ((r.className = `og-pill${e ? ` mine` : ``}${t.team && !e ? ` friend` : ``}`),
      (r.textContent = t.text),
      e
        ? (r.style.background = t.band === void 0 ? M : (Ce[t.band] ?? M))
        : i && (r.style.background = i));
  }
  n.append(r);
}
function we(e, t) {
  let n = (0, w.c)(4),
    r,
    i;
  (n[0] !== t || n[1] !== e
    ? ((r = () => {
        let n = t.current;
        if (!e || !n) return;
        let r = new Map(),
          i = n.clientWidth,
          a = new ResizeObserver((e) => {
            let t = e.at(-1)?.contentRect;
            t && (i = t.width);
          });
        a.observe(n);
        let o = e.onFrame((t) => {
          let a = new Set();
          for (let o of t) {
            a.add(o.id);
            let t = r.get(o.id);
            if (!t) {
              let e = document.createElement(`div`);
              ((e.className = `og-lbl`),
                n.append(e),
                (t = {
                  el: e,
                  key: ``,
                  num: null,
                  count: ``,
                  w: 0,
                  opacity: ``,
                  transform: ``,
                }),
                r.set(o.id, t));
            }
            let s = `${o.kind}|${o.team ?? ``}|${o.band ?? ``}|${o.kind === `count` ? `` : o.text}`;
            if (t.key !== s) {
              (P(t, o), (t.key = s), (t.count = o.text));
              let n =
                t.el.firstElementChild?.getBoundingClientRect().width ?? 0;
              ((t.w = n), n && e.setLabelWidth(o.id, n + 6));
            } else
              o.kind === `count` &&
                t.count !== o.text &&
                t.num &&
                ((t.num.textContent = o.text),
                t.num.classList.remove(`bump`),
                t.num.getBoundingClientRect(),
                t.num.classList.add(`bump`),
                (t.count = o.text));
            let c = o.visible ? `1` : `0`;
            t.opacity !== c && ((t.el.style.opacity = c), (t.opacity = c));
            let l = t.w / 2,
              u = `translate(${(l > 0 && i > t.w + 2 * N ? Math.min(Math.max(o.x, l + N), i - l - N) : o.x).toFixed(1)}px, ${o.y.toFixed(1)}px)`;
            t.transform !== u &&
              ((t.el.style.transform = u), (t.transform = u));
          }
          for (let [e, t] of r) a.has(e) || (t.el.remove(), r.delete(e));
        });
        return () => {
          (o(), a.disconnect());
          for (let e of r.values()) e.el.remove();
        };
      }),
      (i = [e, t]),
      (n[0] = t),
      (n[1] = e),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, T.useEffect)(r, i));
}
var F = {
  phone: `/images/home/board-phone.webp`,
  desktop: `/images/home/board-desktop.webp`,
  alt: ``,
};
function Te(e) {
  let t = (0, w.c)(37),
    { onStage: n, handlers: r, poster: i, needed: a } = e,
    o = i === void 0 ? F : i,
    s = (0, T.useRef)(null),
    c = (0, T.useRef)(null),
    l = (0, T.useRef)(null),
    [u, f] = (0, T.useState)(null),
    [p, m] = (0, T.useState)(!1),
    [h, g] = (0, T.useState)(null),
    [ee, _] = (0, T.useState)(!1),
    [v, te] = (0, T.useState)(!1),
    ne = (0, T.useRef)(n),
    y;
  (t[0] === n
    ? (y = t[1])
    : ((y = () => {
        ne.current = n;
      }),
      (t[0] = n),
      (t[1] = y)),
    (0, T.useEffect)(y));
  let re, ie;
  (t[2] !== v || t[3] !== a || t[4] !== h
    ? ((re = () => {
        if (h === `stage`) return;
        let e =
            a || v || document.documentElement.hasAttribute(`data-daily-done`),
          t = xe({
            software: _e(),
            desktop: matchMedia(be).matches,
            needed: e,
          });
        (t === `poster` && _(!0), g(t));
      }),
      (ie = [a, v, h]),
      (t[2] = v),
      (t[3] = a),
      (t[4] = h),
      (t[5] = re),
      (t[6] = ie))
    : ((re = t[5]), (ie = t[6])),
    (0, T.useEffect)(re, ie));
  let ae, b;
  (t[7] === h
    ? ((ae = t[8]), (b = t[9]))
    : ((ae = () => {
        if (h !== `poster`) return;
        let e = () => te(!0);
        for (let t of ye) window.addEventListener(t, e, { passive: !0 });
        return () => {
          for (let t of ye) window.removeEventListener(t, e);
        };
      }),
      (b = [h]),
      (t[7] = h),
      (t[8] = ae),
      (t[9] = b)),
    (0, T.useEffect)(ae, b));
  let se, ce;
  (t[10] === h
    ? ((se = t[11]), (ce = t[12]))
    : ((se = () => {
        if (h === `poster`) return oe(De);
      }),
      (ce = [h]),
      (t[10] = h),
      (t[11] = se),
      (t[12] = ce)),
    (0, T.useEffect)(se, ce));
  let le, ue;
  (t[13] !== r || t[14] !== h
    ? ((ue = () => {
        let e = c.current,
          t = s.current;
        if (h !== `stage` || !e || !t) return;
        let n = !1,
          i = null,
          a = [],
          o = matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        return (
          j()
            .then(async (s) => {
              let { createStage: c, stageDebug: l } = s;
              if (n) return;
              let u = t.getBoundingClientRect(),
                p = c({
                  canvas: e,
                  width: Math.max(1, u.width),
                  height: Math.max(1, u.height),
                  pixelRatio: window.devicePixelRatio || 1,
                  quality: d.quality() ?? `auto`,
                  reducedMotion: o,
                });
              i = p;
              let m = (e) =>
                p.on(e, (t) => {
                  let n = r.current[e];
                  n?.(t);
                });
              if (
                (a.push(
                  m(`landed`),
                  m(`card`),
                  m(`follower`),
                  m(`friend`),
                  m(`done`),
                  m(`sound`),
                  m(`haptic`),
                  m(`quality`),
                ),
                ne.current(p),
                await p.ready,
                !n)
              ) {
                if (
                  (performance.mark(`stage:first-frame`),
                  new URLSearchParams(window.location.search).has(`qa`))
                ) {
                  let e = window;
                  ((e.__outriviaStage = p), (e.__outriviaDebug = l(p)));
                }
                f(p);
              }
            })
            .catch(() => {
              n || m(!0);
            }),
          () => {
            n = !0;
            for (let e of a) e();
            (i?.dispose(), ne.current(null));
          }
        );
      }),
      (le = [r, h]),
      (t[13] = r),
      (t[14] = h),
      (t[15] = le),
      (t[16] = ue))
    : ((le = t[15]), (ue = t[16])),
    (0, T.useEffect)(ue, le));
  let x, de;
  (t[17] === u
    ? ((x = t[18]), (de = t[19]))
    : ((x = () => {
        let e = s.current;
        if (!u || !e) return;
        let t = new ResizeObserver(() => {
          let t = e.getBoundingClientRect();
          t.width > 0 &&
            t.height > 0 &&
            u.resize(t.width, t.height, window.devicePixelRatio || 1);
        });
        t.observe(e);
        let n = !0,
          r = () => {
            n && !document.hidden ? u.resume() : u.pause();
          },
          i = new IntersectionObserver((e) => {
            ((n = e.some(Ee)), r());
          });
        return (
          i.observe(e),
          document.addEventListener(`visibilitychange`, r),
          () => {
            (t.disconnect(),
              i.disconnect(),
              document.removeEventListener(`visibilitychange`, r));
          }
        );
      }),
      (de = [u]),
      (t[17] = u),
      (t[18] = x),
      (t[19] = de)),
    (0, T.useEffect)(x, de),
    we(u, l));
  let fe = Oe(),
    pe = u ? `true` : void 0,
    S;
  t[20] !== p || t[21] !== o || t[22] !== ee
    ? ((S =
        (p || ee) &&
        (0, A.jsxs)(`picture`, {
          children: [
            (0, A.jsx)(`source`, {
              media: `(min-width: 900px)`,
              srcSet: o.desktop,
            }),
            (0, A.jsx)(`img`, {
              className: `og-poster`,
              src: o.phone,
              alt: ``,
              decoding: `async`,
            }),
          ],
        })),
      (t[20] = p),
      (t[21] = o),
      (t[22] = ee),
      (t[23] = S))
    : (S = t[23]);
  let me = p || void 0,
    C;
  t[24] === me
    ? (C = t[25])
    : ((C = (0, A.jsx)(`canvas`, {
        ref: c,
        className: `og-canvas`,
        "data-failed": me,
      })),
      (t[24] = me),
      (t[25] = C));
  let he, ge, E, D;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, A.jsx)(`div`, { className: `og-ts top` })),
      (ge = (0, A.jsx)(`div`, { className: `og-ts bot` })),
      (E = (0, A.jsx)(`div`, { className: `og-vig` })),
      (D = (0, A.jsx)(`div`, { ref: l, className: `og-labels` })),
      (t[26] = he),
      (t[27] = ge),
      (t[28] = E),
      (t[29] = D))
    : ((he = t[26]), (ge = t[27]), (E = t[28]), (D = t[29]));
  let O;
  t[30] === fe
    ? (O = t[31])
    : ((O = fe && (0, A.jsx)(`p`, { className: `og-fps`, children: fe })),
      (t[30] = fe),
      (t[31] = O));
  let k;
  return (
    t[32] !== pe || t[33] !== S || t[34] !== C || t[35] !== O
      ? ((k = (0, A.jsxs)(`div`, {
          ref: s,
          className: `og-board`,
          "aria-hidden": `true`,
          "data-live": pe,
          children: [S, C, he, ge, E, D, O],
        })),
        (t[32] = pe),
        (t[33] = S),
        (t[34] = C),
        (t[35] = O),
        (t[36] = k))
      : (k = t[36]),
    k
  );
}
function Ee(e) {
  return e.isIntersecting;
}
function De() {
  j().catch(ve);
}
function Oe() {
  let e = (0, w.c)(2),
    [t, n] = (0, T.useState)(null),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {
          if (!new URLSearchParams(window.location.search).has(`debug`)) return;
          let e = [],
            t = performance.now(),
            r = 0,
            i = 0,
            a = (o) => {
              for (e.push(o - t), t = o; e.length > 120;) e.shift();
              if (o - i > 500 && e.length > 10) {
                let t = [...e].sort(I),
                  r = t[Math.floor(t.length / 2)] ?? 16.7,
                  a = t.at(-1) ?? 16.7;
                (n(`${Math.round(1e3 / r)} fps · worst ${Math.round(a)} ms`),
                  (i = o));
              }
              r = requestAnimationFrame(a);
            };
          return (
            (r = requestAnimationFrame(a)),
            () => cancelAnimationFrame(r)
          );
        }),
        (i = []),
        (e[0] = r),
        (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, T.useEffect)(r, i),
    t
  );
}
function I(e, t) {
  return e - t;
}
function ke(e) {
  let t = (0, w.c)(36),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]))
    : (({ shareRef: i, ...r } = e),
      (n = S),
      (a = `Your result`),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, A.jsx)(`p`, {
            className: `og-kicker`,
            children: `Run complete`,
          })),
          (t[11] = o))
        : (o = t[11]),
      (s = (0, A.jsxs)(`h2`, {
        children: [
          `You pulled `,
          (0, A.jsx)(`em`, { children: r.people }),
          r.outOf === null ? ` people` : ` of ${r.outOf}`,
        ],
      })),
      (c = (0, A.jsxs)(`span`, {
        className: `og-title-pill`,
        children: [`✦ `, r.title.title],
      })),
      (l = (0, A.jsx)(`p`, {
        className: `og-title-line`,
        children: r.title.line,
      })),
      (u = (0, A.jsxs)(`p`, {
        className: `og-stats`,
        children: [
          r.points.toLocaleString(`en-US`),
          ` points · `,
          r.outliers,
          ` `,
          r.outliers === 1 ? `#1 answer` : `#1 answers`,
        ],
      })),
      (d =
        r.versus.length > 1 &&
        (0, A.jsx)(`ol`, {
          className: `og-versus`,
          "aria-label": `Challenge standings`,
          children: [...r.versus]
            .sort(Ae)
            .map((e) =>
              (0, A.jsxs)(
                `li`,
                {
                  children: [
                    (0, A.jsx)(`span`, {
                      className: `dot`,
                      style: { background: e.color },
                      "aria-hidden": `true`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `name`,
                      children: e.you ? `You` : e.name,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `num`,
                      children:
                        r.outOf === null
                          ? e.people
                          : `${e.people} of ${r.outOf}`,
                    }),
                  ],
                },
                e.key,
              ),
            ),
        })),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d));
  let f;
  t[12] !== r.length || t[13] !== r.results
    ? ((f = (0, A.jsx)(pe, { results: r.results, length: r.length })),
      (t[12] = r.length),
      (t[13] = r.results),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] !== r.onShare || t[16] !== i
    ? ((p = (0, A.jsx)(`button`, {
        type: `button`,
        className: `og-play`,
        ref: i,
        onClick: r.onShare,
        children: `Share & challenge`,
      })),
      (t[15] = r.onShare),
      (t[16] = i),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] === r.onAnswers
    ? (m = t[19])
    : ((m = (0, A.jsx)(`button`, {
        type: `button`,
        className: `og-play secondary`,
        onClick: r.onAnswers,
        children: `Answers`,
      })),
      (t[18] = r.onAnswers),
      (t[19] = m));
  let h;
  t[20] !== m || t[21] !== p
    ? ((h = (0, A.jsxs)(`div`, {
        className: `og-sheet-actions`,
        children: [p, m],
      })),
      (t[20] = m),
      (t[21] = p),
      (t[22] = h))
    : (h = t[22]);
  let g;
  return (
    t[23] !== n ||
    t[24] !== r.footer ||
    t[25] !== r.rating ||
    t[26] !== a ||
    t[27] !== h ||
    t[28] !== o ||
    t[29] !== s ||
    t[30] !== c ||
    t[31] !== l ||
    t[32] !== u ||
    t[33] !== d ||
    t[34] !== f
      ? ((g = (0, A.jsxs)(n, {
          label: a,
          children: [o, s, c, l, u, d, f, h, r.rating, r.footer],
        })),
        (t[23] = n),
        (t[24] = r.footer),
        (t[25] = r.rating),
        (t[26] = a),
        (t[27] = h),
        (t[28] = o),
        (t[29] = s),
        (t[30] = c),
        (t[31] = l),
        (t[32] = u),
        (t[33] = d),
        (t[34] = f),
        (t[35] = g))
      : (g = t[35]),
    g
  );
}
function Ae(e, t) {
  return t.people - e.people;
}
var je = (e) => (e.reason === `timeout` ? `Out of time` : `Passed`);
function Me(e) {
  let t = (0, w.c)(13),
    { results: n, prompts: r, friends: i, onClose: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, A.jsx)(`p`, { className: `og-kicker`, children: `Answers` })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  if (t[1] !== i || t[2] !== r || t[3] !== n) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e, t) => {
          let n = r[t];
          if (!n) return null;
          let o = h(n),
            s = e.band === null ? null : a[e.band];
          return (0, A.jsxs)(
            `li`,
            {
              children: [
                (0, A.jsxs)(`p`, {
                  className: `q`,
                  children: [`Q`, t + 1, e.weight > 1 ? ` · ×${e.weight}` : ``],
                }),
                (0, A.jsx)(`p`, { className: `p`, children: n.text }),
                (0, A.jsxs)(`p`, {
                  className: `mine`,
                  children: [
                    (0, A.jsx)(`span`, {
                      className: `og-hp`,
                      style: {
                        background: C(e.band),
                        color: e.band === null ? `#fff` : `var(--lamp-ink)`,
                      },
                      children: s ? s.name : je(e),
                    }),
                    (0, A.jsx)(`span`, {
                      children: e.canonical ?? (e.typed || `—`),
                    }),
                    (0, A.jsxs)(`span`, {
                      className: `pts`,
                      children: [`+`, e.points],
                    }),
                  ],
                }),
                i(t).map(L),
                o.length > 0 &&
                  (0, A.jsxs)(`p`, {
                    className: `most`,
                    children: [
                      `Our board`,
                      ` `,
                      o.map((t) =>
                        (0, A.jsx)(
                          `b`,
                          {
                            className: t.aid === e.aid ? `is-you` : void 0,
                            children: t.name,
                          },
                          t.aid,
                        ),
                      ),
                      ` `,
                      `(est.)`,
                    ],
                  }),
              ],
            },
            `${n.id}-${String(t)}`,
          );
        }),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (c = n.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n),
      (t[4] = c));
  } else c = t[4];
  let l;
  t[8] === c
    ? (l = t[9])
    : ((l = (0, A.jsx)(`ol`, { className: `og-answers`, children: c })),
      (t[8] = c),
      (t[9] = l));
  let u;
  return (
    t[10] !== o || t[11] !== l
      ? ((u = (0, A.jsxs)(S, {
          label: `Answers`,
          onClose: o,
          children: [s, l],
        })),
        (t[10] = o),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function L(e) {
  return (0, A.jsxs)(
    `p`,
    {
      className: `theirs`,
      children: [
        (0, A.jsxs)(`span`, { children: [e.name, `:`] }),
        (0, A.jsx)(`span`, { children: e.canonical ?? `—` }),
        (0, A.jsxs)(`span`, { className: `pts`, children: [`+`, e.points] }),
      ],
    },
    e.key,
  );
}
var R = {
    f1: `#3A5FD0`,
    f2: `#D6456A`,
    f3: `#D98A1C`,
    f4: `#8E4B8F`,
    f5: `#4E6A7A`,
  },
  Ne = [],
  Pe = [],
  Fe = [],
  Ie = 4,
  Le = v(() =>
    i(
      () => import(`./result-popup-CyQEZrMk.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27,
      ]),
    ),
  );
function Re(e) {
  return !e || e.kind.kind === `daily` ? 10 : e.kind.length;
}
function ze(e) {
  if (e) return e.card ? `card` : `on`;
}
var Be = (e, t) => b(e, t, !0);
function z(e) {
  let t = (0, w.c)(175),
    {
      setup: n,
      intro: r,
      homeMode: i,
      poster: a,
      lockPage: d,
      onPlayAgain: v,
      onScreen: oe,
      challenge: b,
      popupOnRestore: x,
    } = e,
    pe = i === void 0 ? `home` : i,
    S = d === void 0 ? !1 : d,
    C = b === void 0 ? null : b,
    E = x === void 0 ? !1 : x,
    D = se(n, pe),
    O,
    k;
  (t[0] !== D.screen || t[1] !== oe
    ? ((O = () => {
        oe?.(D.screen);
      }),
      (k = [D.screen, oe]),
      (t[0] = D.screen),
      (t[1] = oe),
      (t[2] = O),
      (t[3] = k))
    : ((O = t[2]), (k = t[3])),
    (0, T.useEffect)(O, k));
  let _e, j;
  (t[4] === D.screen
    ? ((_e = t[5]), (j = t[6]))
    : ((_e = () => {
        D.screen === `run`
          ? _.setBeds(!0)
          : _.setBeds(!1, D.screen === `end` ? Ie : 0);
      }),
      (j = [D.screen]),
      (t[4] = D.screen),
      (t[5] = _e),
      (t[6] = j)),
    (0, T.useEffect)(_e, j));
  let ve;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = []), (t[7] = ve))
    : (ve = t[7]),
    (0, T.useEffect)(Ke, ve));
  let ye = (0, T.useRef)(null),
    [be, xe] = (0, T.useState)(!1),
    [Se, Ce] = (0, T.useState)(!1),
    M,
    N;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        (xe(_.isMuted()), Ce(!_.isMusicOn()));
      }),
      (N = []),
      (t[8] = M),
      (t[9] = N))
    : ((M = t[8]), (N = t[9])),
    (0, T.useEffect)(M, N));
  let [P, we] = (0, T.useState)(null),
    [F, Ee] = (0, T.useState)(`none`),
    [De, Oe] = (0, T.useState)(null),
    [I, Ae] = (0, T.useState)(null),
    je = (0, T.useRef)(null),
    L = D.run,
    R = D.setup ?? n,
    z = D.reveal !== null,
    qe = D.screen === `run` || F === `open`,
    Je;
  (t[10] !== D.inputRef ||
  t[11] !== D.skip ||
  t[12] !== S ||
  t[13] !== z ||
  t[14] !== qe
    ? ((Je = {
        rootRef: ye,
        inputRef: D.inputRef,
        active: qe,
        revealing: z,
        lockPage: S,
        onSkip: D.skip,
      }),
      (t[10] = D.inputRef),
      (t[11] = D.skip),
      (t[12] = S),
      (t[13] = z),
      (t[14] = qe),
      (t[15] = Je))
    : (Je = t[15]),
    ae(Je));
  let Ye;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (e) => Ae({ id: Date.now(), text: e })), (t[16] = Ye))
    : (Ye = t[16]);
  let Xe = Ye,
    Ze = D.reveal?.index ?? -1,
    Qe = D.reveal?.card ?? !1,
    $e = (0, T.useRef)(null),
    et;
  t[17] !== D.screen || t[18] !== D.stageReady || t[19] !== D.stageRef
    ? ((et = () => {
        let e = ye.current;
        if (!e) return;
        let t = () => {
          let t = D.stageRef.current;
          if (!t) return;
          let n = { width: e.clientWidth, height: e.clientHeight },
            r = (t) => {
              let n = e.querySelector(t);
              if (!n) return null;
              let r = 0,
                i = 0,
                a = n;
              for (; a && a !== e;)
                ((r += a.offsetTop),
                  (i += a.offsetLeft),
                  (a =
                    a.offsetParent instanceof HTMLElement
                      ? a.offsetParent
                      : null));
              return {
                top: r,
                bottom: r + n.offsetHeight,
                right: i + n.offsetWidth,
              };
            },
            i = n.width >= 900,
            a = { top: 0, bottom: 0, left: 0, right: 0 },
            o;
          if (D.screen === `intro`) {
            let e = r(`.og-hero, .og-duel`);
            e && i ? (a.left = e.right + 16) : e && (a.top = e.bottom + 6);
          } else if (D.screen === `run`) {
            let t = r(`.og-qcard`),
              i = r(`.og-dock`);
            ((a.top = (t?.bottom ?? 0) + 6),
              (a.bottom = i ? n.height - i.top + 8 : 0));
            let s = r(`.og-chip`);
            (s && e.style.setProperty(`--chip-bottom`, `${s.bottom}px`),
              (o = {
                ...a,
                top: Math.min(n.height * 0.42, (s?.bottom ?? a.top) + 6),
              }));
          } else {
            let e = r(`.og-sheet`);
            e && i
              ? (a.left = e.right + 16)
              : e && (a.bottom = n.height - e.top + 8);
          }
          t.setInsets(a, o);
        };
        if ((($e.current = t), !D.stageReady)) return;
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
      }),
      (t[17] = D.screen),
      (t[18] = D.stageReady),
      (t[19] = D.stageRef),
      (t[20] = et))
    : (et = t[20]);
  let tt;
  (t[21] !== D.screen ||
  t[22] !== D.stageReady ||
  t[23] !== D.stageRef ||
  t[24] !== P ||
  t[25] !== Qe ||
  t[26] !== Ze
    ? ((tt = [D.screen, D.stageReady, D.stageRef, P, Ze, Qe]),
      (t[21] = D.screen),
      (t[22] = D.stageReady),
      (t[23] = D.stageRef),
      (t[24] = P),
      (t[25] = Qe),
      (t[26] = Ze),
      (t[27] = tt))
    : (tt = t[27]),
    (0, T.useLayoutEffect)(et, tt));
  let nt = D.onStage,
    rt;
  t[28] === nt
    ? (rt = t[29])
    : ((rt = (e) => {
        (nt(e), e && $e.current?.());
      }),
      (t[28] = nt),
      (t[29] = rt));
  let it = rt,
    B = L ? Math.min(L.index, L.prompts.length - 1) : 0,
    at = L?.prompts[B] ?? null,
    ot = Re(R),
    st = Number.isFinite(ot) ? `Q ${B + 1} / ${ot}` : `Q ${B + 1}`,
    ct = D.remaining / (L?.limitMs ?? 3e4),
    lt = D.remaining <= c[0],
    V = D.finalResults ?? L?.results ?? Fe,
    H = L?.prompts ?? R?.prompts ?? Pe,
    U = R?.challengers ?? Ne,
    W;
  if (t[30] !== V) {
    W = 0;
    for (let e of V) W += e.people;
    ((t[30] = V), (t[31] = W));
  } else W = t[31];
  let ut;
  t[32] === V
    ? (ut = t[33])
    : ((ut = V.reduce(Ge, 0)), (t[32] = V), (t[33] = ut));
  let dt = ut,
    ft;
  t[34] !== U || t[35] !== W || t[36] !== H || t[37] !== V.length
    ? ((ft =
        U.length > 0
          ? [
              { key: `you`, name: `You`, people: W, you: !0, color: `#F2542D` },
              ...g(U, H.slice(0, V.length)).map(We),
            ]
          : []),
      (t[34] = U),
      (t[35] = W),
      (t[36] = H),
      (t[37] = V.length),
      (t[38] = ft))
    : (ft = t[38]);
  let pt = ft,
    mt;
  t[39] === pt
    ? (mt = t[40])
    : ((mt = pt.filter(Ue).sort(He).map(Ve)), (t[39] = pt), (t[40] = mt));
  let ht = mt,
    gt = R?.kind ?? null,
    _t = C?.kind === `short` ? C.via : null,
    vt = C?.reposted ?? !1,
    yt = C?.kind === `long`,
    bt = C?.runId ?? null,
    xt = R?.saves ?? !1,
    St;
  t[41] !== U ||
  t[42] !== V ||
  t[43] !== gt ||
  t[44] !== _t ||
  t[45] !== vt ||
  t[46] !== yt ||
  t[47] !== bt ||
  t[48] !== xt
    ? ((St = {
        kind: gt,
        results: V,
        challengers: U,
        via: _t,
        reposted: vt,
        keepLong: yt,
        id: bt,
        saves: xt,
        stage: `table`,
      }),
      (t[41] = U),
      (t[42] = V),
      (t[43] = gt),
      (t[44] = _t),
      (t[45] = vt),
      (t[46] = yt),
      (t[47] = bt),
      (t[48] = xt),
      (t[49] = St))
    : (St = t[49]);
  let G = le(St),
    Ct = R?.kind ?? null,
    wt = D.reveal?.card ? D.reveal : null,
    Tt;
  t[50] !== D.inputRef || t[51] !== Ct || t[52] !== wt
    ? ((Tt = { kind: Ct, reveal: wt, stage: `table`, returnFocus: D.inputRef }),
      (t[50] = D.inputRef),
      (t[51] = Ct),
      (t[52] = wt),
      (t[53] = Tt))
    : (Tt = t[53]);
  let K = ie(Tt),
    Et = R?.kind ?? null,
    Dt = D.screen === `end`,
    Ot;
  t[54] !== Et || t[55] !== Dt
    ? ((Ot = { kind: Et, stage: `table`, active: Dt, returnFocus: je }),
      (t[54] = Et),
      (t[55] = Dt),
      (t[56] = Ot))
    : (Ot = t[56]);
  let kt = ue(Ot),
    At = D.holdReveal,
    jt = K?.open === !0,
    Mt,
    Nt;
  (t[57] !== At || t[58] !== jt
    ? ((Mt = () => {
        At(jt);
      }),
      (Nt = [jt, At]),
      (t[57] = At),
      (t[58] = jt),
      (t[59] = Mt),
      (t[60] = Nt))
    : ((Mt = t[59]), (Nt = t[60])),
    (0, T.useEffect)(Mt, Nt));
  let Pt;
  t[61] !== G || t[62] !== R
    ? ((Pt = () => {
        if (!R) return;
        (_.unlock(), f(`share_open`, { mode: R.kind.kind }), G.ensure());
        let e = Le.get();
        (Oe(() => e), Ee(`open`));
      }),
      (t[61] = G),
      (t[62] = R),
      (t[63] = Pt))
    : (Pt = t[63]);
  let Ft = Pt,
    It;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = () => {
        (Ee(`closed`),
          requestAnimationFrame(() =>
            je.current?.focus({ preventScroll: !0 }),
          ));
      }),
      (t[64] = It))
    : (It = t[64]);
  let Lt = It,
    Rt;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rt = () => {
        (Ee(`none`),
          Xe(`Sharing couldn't load · reload the page to try again`));
      }),
      (t[65] = Rt))
    : (Rt = t[65]);
  let zt = Rt,
    Bt;
  t[66] === G
    ? (Bt = t[67])
    : ((Bt = () => G.ensure()), (t[66] = G), (t[67] = Bt));
  let Vt = (0, T.useEffectEvent)(Bt),
    Ht;
  t[68] !== D.screen || t[69] !== Ft || t[70] !== P || t[71] !== F
    ? ((Ht = () => {
        D.screen === `end` && F === `none` && P === null && Ft();
      }),
      (t[68] = D.screen),
      (t[69] = Ft),
      (t[70] = P),
      (t[71] = F),
      (t[72] = Ht))
    : (Ht = t[72]);
  let q = (0, T.useEffectEvent)(Ht),
    Ut;
  t[73] !== D.liveEnd || t[74] !== Vt || t[75] !== q
    ? ((Ut = () => {
        if (D.liveEnd === null) return;
        Vt();
        let e = setTimeout(() => q(), 1e3);
        return () => clearTimeout(e);
      }),
      (t[73] = D.liveEnd),
      (t[74] = Vt),
      (t[75] = q),
      (t[76] = Ut))
    : (Ut = t[76]);
  let Wt;
  (t[77] === D.liveEnd
    ? (Wt = t[78])
    : ((Wt = [D.liveEnd]), (t[77] = D.liveEnd), (t[78] = Wt)),
    (0, T.useEffect)(Ut, Wt));
  let Gt;
  t[79] !== D.screen || t[80] !== q || t[81] !== E || t[82] !== n?.finished
    ? ((Gt = () => {
        if (!E || !n?.finished || D.screen !== `end`) return;
        let e = setTimeout(() => q(), 400);
        return () => clearTimeout(e);
      }),
      (t[79] = D.screen),
      (t[80] = q),
      (t[81] = E),
      (t[82] = n?.finished),
      (t[83] = Gt))
    : (Gt = t[83]);
  let Kt;
  (t[84] !== D.screen || t[85] !== E || t[86] !== n
    ? ((Kt = [E, n, D.screen]),
      (t[84] = D.screen),
      (t[85] = E),
      (t[86] = n),
      (t[87] = Kt))
    : (Kt = t[87]),
    (0, T.useEffect)(Gt, Kt));
  let qt = (0, T.useRef)(null),
    Jt;
  t[88] === G
    ? (Jt = t[89])
    : ((Jt = () => {
        (G.reset(),
          Ee(`none`),
          we(null),
          (qt.current ||= Le.preloadWhenIdle()));
      }),
      (t[88] = G),
      (t[89] = Jt));
  let Yt = (0, T.useEffectEvent)(Jt),
    Xt;
  t[90] !== D.screen || t[91] !== Yt
    ? ((Xt = () => {
        D.screen === `run` && Yt();
      }),
      (t[90] = D.screen),
      (t[91] = Yt),
      (t[92] = Xt))
    : (Xt = t[92]);
  let Zt;
  (t[93] === D.screen
    ? (Zt = t[94])
    : ((Zt = [D.screen]), (t[93] = D.screen), (t[94] = Zt)),
    (0, T.useEffect)(Xt, Zt));
  let Qt, $t;
  (t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = () => () => qt.current?.()), ($t = []), (t[95] = Qt), (t[96] = $t))
    : ((Qt = t[95]), ($t = t[96])),
    (0, T.useEffect)(Qt, $t));
  let J = D.reveal,
    en;
  t[97] === J ? (en = t[98]) : ((en = ze(J)), (t[97] = J), (t[98] = en));
  let tn = en,
    nn = J?.result ?? null,
    rn = R?.kind.kind === `daily`,
    an = D.screen !== `intro`,
    Y;
  t[99] !== D.handlers || t[100] !== it || t[101] !== a || t[102] !== an
    ? ((Y = (0, A.jsx)(Te, {
        onStage: it,
        handlers: D.handlers,
        poster: a,
        needed: an,
      })),
      (t[99] = D.handlers),
      (t[100] = it),
      (t[101] = a),
      (t[102] = an),
      (t[103] = Y))
    : (Y = t[103]);
  let X;
  t[104] !== D.screen ||
  t[105] !== D.start ||
  t[106] !== D.waiting ||
  t[107] !== r ||
  t[108] !== R
    ? ((X =
        D.screen === `intro` &&
        r({ start: D.start, waiting: D.waiting, setup: R })),
      (t[104] = D.screen),
      (t[105] = D.start),
      (t[106] = D.waiting),
      (t[107] = r),
      (t[108] = R),
      (t[109] = X))
    : (X = t[109]);
  let Z;
  t[110] !== D.inputRef ||
  t[111] !== D.onType ||
  t[112] !== D.pass ||
  t[113] !== D.people ||
  t[114] !== D.points ||
  t[115] !== D.quit ||
  t[116] !== D.refused ||
  t[117] !== D.screen ||
  t[118] !== D.skip ||
  t[119] !== D.submit ||
  t[120] !== D.waiting ||
  t[121] !== rn ||
  t[122] !== B ||
  t[123] !== nn ||
  t[124] !== ct ||
  t[125] !== Se ||
  t[126] !== be ||
  t[127] !== at ||
  t[128] !== K ||
  t[129] !== J ||
  t[130] !== z ||
  t[131] !== st ||
  t[132] !== L ||
  t[133] !== lt
    ? ((Z =
        D.screen === `run` &&
        (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(fe, {
              round: st,
              weight: o(B),
              people: D.people,
              points: D.points,
              text: D.waiting || !at ? `Loading the next question…` : at.text,
              left: ct,
              warn: lt && !z,
              muted: be,
              musicOff: Se,
              onMute: () => xe(_.toggleMute()),
              onMusic: () => Ce(!_.toggleMusic()),
              onQuit: D.quit,
              quitLabel: rn ? `Leave and resume later` : `End this run`,
            }),
            (0, A.jsx)(de, {
              result: nn,
              visible: J?.card ?? !1,
              top: J ? h(J.prompt) : [],
              onReport: Be,
              feedback:
                K &&
                (0, A.jsx)(y, {
                  fb: K,
                  panelId: `table-fb`,
                  ask: `Good question?`,
                }),
            }),
            K?.open &&
              (0, A.jsx)(ne, {
                fb: K,
                id: `table-fb`,
                title: `Good question?`,
                overlay: !0,
              }),
            J &&
              (0, A.jsx)(me, { friends: J.friends, shown: J.shown, you: nn }),
            D.refused &&
              !z &&
              (0, A.jsx)(`p`, {
                className: `og-msg`,
                children: `Not on our list — try another.`,
              }),
            (0, A.jsx)(`button`, {
              type: `button`,
              className: `og-skip`,
              onClick: D.skip,
              children: `Tap to skip ››`,
            }),
            (0, A.jsx)(he, {
              inputRef: D.inputRef,
              onSubmit: D.submit,
              onPass: D.pass,
              onType: D.onType,
              disabled: D.waiting || !L,
            }),
          ],
        })),
      (t[110] = D.inputRef),
      (t[111] = D.onType),
      (t[112] = D.pass),
      (t[113] = D.people),
      (t[114] = D.points),
      (t[115] = D.quit),
      (t[116] = D.refused),
      (t[117] = D.screen),
      (t[118] = D.skip),
      (t[119] = D.submit),
      (t[120] = D.waiting),
      (t[121] = rn),
      (t[122] = B),
      (t[123] = nn),
      (t[124] = ct),
      (t[125] = Se),
      (t[126] = be),
      (t[127] = at),
      (t[128] = K),
      (t[129] = J),
      (t[130] = z),
      (t[131] = st),
      (t[132] = L),
      (t[133] = lt),
      (t[134] = Z))
    : (Z = t[134]);
  let on =
      D.screen === `end` &&
      P === null &&
      R &&
      (0, A.jsx)(ke, {
        people: W,
        outOf: m(R.kind),
        points: dt,
        outliers: ee(V),
        title: l(V),
        results: V,
        length: Number.isFinite(ot) ? ot : V.length,
        versus: pt,
        onShare: Ft,
        shareRef: je,
        onAnswers: () => {
          (f(`answers_open`, {}), we(`answers`));
        },
        rating:
          kt &&
          (0, A.jsxs)(`div`, {
            className: `og-rate`,
            children: [
              (0, A.jsx)(y, {
                fb: kt,
                panelId: `table-rate`,
                ask: `Enjoying the tabletop?`,
              }),
              kt.open &&
                (0, A.jsx)(ne, {
                  fb: kt,
                  id: `table-rate`,
                  title: `Enjoying the tabletop?`,
                  overlay: !1,
                }),
            ],
          }),
        footer: (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(ge, { end: !0 }),
            R.kind.kind === `daily`
              ? (0, A.jsx)(ce, { date: R.kind.date, archive: R.archive === !0 })
              : (0, A.jsx)(te, { onAgain: v ?? D.backToIntro }),
          ],
        }),
      }),
    Q;
  t[135] !== U || t[136] !== P || t[137] !== H || t[138] !== V
    ? ((Q =
        P === `answers` &&
        (0, A.jsx)(Me, {
          results: V,
          prompts: H,
          friends: (e) => {
            let t = H[e];
            return t ? p(U, t, e) : [];
          },
          onClose: () => we(null),
        })),
      (t[135] = U),
      (t[136] = P),
      (t[137] = H),
      (t[138] = V),
      (t[139] = Q))
    : (Q = t[139]);
  let sn;
  t[140] !== De ||
  t[141] !== C ||
  t[142] !== Lt ||
  t[143] !== D.screen ||
  t[144] !== D.stageReady ||
  t[145] !== D.stageRef ||
  t[146] !== ht ||
  t[147] !== zt ||
  t[148] !== F ||
  t[149] !== H ||
  t[150] !== V ||
  t[151] !== G ||
  t[152] !== R
    ? ((sn =
        F !== `none` &&
        D.screen === `end` &&
        R &&
        De &&
        (0, A.jsx)(re, {
          onError: zt,
          children: (0, A.jsx)(T.Suspense, {
            fallback: null,
            children: (0, A.jsx)(De, {
              open: F === `open`,
              onClose: Lt,
              stageRef: D.stageRef,
              stageReady: D.stageReady,
              kind: R.kind,
              results: V,
              prompts: H,
              friends: ht,
              share: G,
              flash: Xe,
              challenge: C,
            }),
          }),
        })),
      (t[140] = De),
      (t[141] = C),
      (t[142] = Lt),
      (t[143] = D.screen),
      (t[144] = D.stageReady),
      (t[145] = D.stageRef),
      (t[146] = ht),
      (t[147] = zt),
      (t[148] = F),
      (t[149] = H),
      (t[150] = V),
      (t[151] = G),
      (t[152] = R),
      (t[153] = sn))
    : (sn = t[153]);
  let cn;
  t[154] === I
    ? (cn = t[155])
    : ((cn =
        I &&
        (0, A.jsx)(
          `p`,
          { className: `og-toast`, role: `status`, children: I.text },
          I.id,
        )),
      (t[154] = I),
      (t[155] = cn));
  let ln;
  t[156] === D.announceText
    ? (ln = t[157])
    : ((ln = (0, A.jsx)(`p`, {
        className: `visually-hidden`,
        "aria-live": `polite`,
        children: D.announceText,
      })),
      (t[156] = D.announceText),
      (t[157] = ln));
  let un;
  t[158] !== X ||
  t[159] !== Z ||
  t[160] !== on ||
  t[161] !== Q ||
  t[162] !== sn ||
  t[163] !== cn ||
  t[164] !== ln
    ? ((un = (0, A.jsxs)(`div`, {
        className: `og-ui`,
        children: [X, Z, on, Q, sn, cn, ln],
      })),
      (t[158] = X),
      (t[159] = Z),
      (t[160] = on),
      (t[161] = Q),
      (t[162] = sn),
      (t[163] = cn),
      (t[164] = ln),
      (t[165] = un))
    : (un = t[165]);
  let $;
  t[166] !== D.screen || t[167] !== L
    ? (($ =
        L &&
        D.screen === `run` &&
        (0, A.jsxs)(`span`, {
          className: `visually-hidden`,
          children: [u(L), ` points, `, s(L), ` people so far.`],
        })),
      (t[166] = D.screen),
      (t[167] = L),
      (t[168] = $))
    : ($ = t[168]);
  let dn;
  return (
    t[169] !== D.screen ||
    t[170] !== tn ||
    t[171] !== Y ||
    t[172] !== un ||
    t[173] !== $
      ? ((dn = (0, A.jsxs)(`div`, {
          ref: ye,
          className: `og-game`,
          "data-screen": D.screen,
          "data-reveal": tn,
          children: [Y, un, $],
        })),
        (t[169] = D.screen),
        (t[170] = tn),
        (t[171] = Y),
        (t[172] = un),
        (t[173] = $),
        (t[174] = dn))
      : (dn = t[174]),
    dn
  );
}
function Ve(e) {
  return { name: e.name, people: e.people };
}
function He(e, t) {
  return t.people - e.people;
}
function Ue(e) {
  return !e.you;
}
function We(e) {
  return {
    key: e.key,
    name: e.name,
    people: e.people,
    color: R[e.key] ?? `#3A5FD0`,
  };
}
function Ge(e, t) {
  return e + t.points;
}
function Ke() {
  return qe;
}
function qe() {
  return _.setBeds(!1);
}
export { z as OutriviaGame };
