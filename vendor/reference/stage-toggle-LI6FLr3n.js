const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/v2/climb-game-C6Fltmeq.js",
      "assets/v2/compiler-runtime-BybR60WX.js",
      "assets/v2/preload-helper-qlgyTAkD.js",
      "assets/v2/audio-BdxWxAxT.js",
      "assets/v2/storage-Cd9DMQud.js",
      "assets/v2/rules-DxwvjuIt.js",
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
      "assets/v2/jsx-runtime-D_h4s5mO.js",
      "assets/v2/lazyRouteComponent-C02Cd2Zo.js",
      "assets/v2/height-CWSuyi2y.js",
      "assets/v2/format-Cc5GoqRm.js",
      "assets/v2/map-BaINi0Kr.js",
      "assets/v2/use-share-run-hxjVU6AS.js",
      "assets/v2/game-ui-DEL71d58.js",
      "assets/v2/icons-DDwzIPdf.js",
      "assets/v2/clean-text-C3rG4fQV.js",
      "assets/v2/rules-2q26py_F.js",
      "assets/v2/runs-DrM9YA6U.js",
      "assets/v2/use-share-run-CJ-_-DLB.css",
      "assets/v2/copy-CMIldnKw.js",
      "assets/v2/camera-Bx1BB7pZ.js",
      "assets/v2/climb-game-Bu_vUJ9T.css",
      "assets/v2/outrivia-game-CaLMhMDV.js",
    ]),
) => i.map((i) => d[i]);
import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import { t as a } from "./preload-helper-qlgyTAkD.js";
import { a as o, i as s, r as c } from "./stage-choice-DO9JGjKK.js";
import { b as l } from "./main-BXKF3zmu.js";
async function u(e) {
  try {
    let t = await fetch(e);
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
async function d(e) {
  let t = await u(`/game/daily/v2/${e}.json`);
  if (t) return { file: t, fallback: !1 };
  let n = await u(`/game/schedule.json`),
    r = Object.keys(n?.days ?? {}).sort(),
    i = r.filter((t) => t <= e).at(-1) ?? r[0];
  if (!i) throw Error(`no daily files available`);
  let a = await u(`/game/daily/v2/${i}.json`);
  if (!a) throw Error(`daily ${i} missing`);
  return { file: a, fallback: !0 };
}
async function f() {
  let e = await u(`/game/packs/index.v2.json`);
  if (!e) throw Error(`prompt index missing`);
  return e;
}
var p = new Map();
function m(e) {
  let t = p.get(e);
  if (t) return t;
  let n = u(`/game/prompt/v2/${e}.json`).then((t) => {
    if (!t) throw (p.delete(e), Error(`prompt ${e} missing`));
    return t;
  });
  return (p.set(e, n), n);
}
var h = n(),
  g = e(t()),
  _ = i(),
  v = [
    `Failed to fetch dynamically imported module`,
    `error loading dynamically imported module`,
    `Importing a module script failed`,
  ];
function y(e) {
  try {
    return sessionStorage.getItem(e)
      ? !1
      : (sessionStorage.setItem(e, `1`), !0);
  } catch {
    return !1;
  }
}
function b(e) {
  return () =>
    e().catch((e) => {
      let t = e instanceof Error ? e.message : ``;
      if (!v.some((e) => t.startsWith(e)) || !y(`tanstack_router_reload:${t}`))
        throw e;
      return (window.location.reload(), new Promise(() => void 0));
    });
}
var x = (0, g.lazy)(
    b(() =>
      a(
        () =>
          import(`./climb-game-C6Fltmeq.js`).then((e) => ({
            default: e.ClimbGame,
          })),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        ]),
      ),
    ),
  ),
  S = (0, g.lazy)(
    b(() =>
      a(
        () =>
          import(`./outrivia-game-CaLMhMDV.js`).then((e) => ({
            default: e.OutriviaGame,
          })),
        __vite__mapDeps([
          37, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 27, 28, 29, 30, 31, 32, 33,
        ]),
      ),
    ),
  ),
  C = (0, g.createContext)(null);
function w(e) {
  let t = (0, h.c)(18),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ route: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = o(r),
    a = i === `climb` ? x : S,
    s = r !== `challenge` || n.setup?.saves !== !1,
    c;
  t[3] !== s || t[4] !== r || t[5] !== i
    ? ((c = { route: r, stage: i, keepsResult: s }),
      (t[3] = s),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l = i === `climb` ? `og-game climb-stage` : `og-game`,
    u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, _.jsx)(`div`, {
        className: l,
        "data-screen": `intro`,
        "aria-busy": `true`,
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  t[9] !== a || t[10] !== n
    ? ((d = (0, _.jsx)(a, { ...n })), (t[9] = a), (t[10] = n), (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] !== u || t[13] !== d
    ? ((f = (0, _.jsx)(g.Suspense, { fallback: u, children: d })),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== c || t[16] !== f
      ? ((p = (0, _.jsx)(C.Provider, { value: c, children: f })),
        (t[15] = c),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function T(e) {
  let t = (0, h.c)(4),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { route: `daily`, stage: `climb`, fixed: !0 }), (t[0] = n))
    : (n = t[0]);
  let r;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, _.jsx)(`div`, {
        className: `og-game climb-stage`,
        "data-screen": `intro`,
        "aria-busy": `true`,
      })),
      (t[1] = r))
    : (r = t[1]);
  let i;
  return (
    t[2] === e
      ? (i = t[3])
      : ((i = (0, _.jsx)(C.Provider, {
          value: n,
          children: (0, _.jsx)(g.Suspense, {
            fallback: r,
            children: (0, _.jsx)(x, { ...e }),
          }),
        })),
        (t[2] = e),
        (t[3] = i)),
    i
  );
}
var E = [
    { stage: `climb`, label: `Sky climb` },
    { stage: `table`, label: `Tabletop` },
  ],
  D = null,
  O = () => {
    D = null;
  };
function k() {
  let e = (0, h.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, _.jsxs)(`p`, {
          className: `og-small og-stage-home`,
          children: [
            `Prefer the tabletop?`,
            ` `,
            (0, _.jsx)(r, {
              to: `/`,
              className: `og-link`,
              children: `Play it on the home page`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function A(e) {
  let t = (0, h.c)(11),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { end: r } = n,
    i = r === void 0 ? !1 : r,
    a = (0, g.useContext)(C),
    o = (0, g.useRef)(null),
    u = a?.stage,
    d,
    f;
  if (
    (t[2] === u
      ? ((d = t[3]), (f = t[4]))
      : ((d = () => {
          D === u && o.current?.focus();
        }),
        (f = [u]),
        (t[2] = u),
        (t[3] = d),
        (t[4] = f)),
    (0, g.useEffect)(d, f),
    a?.fixed)
  ) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, _.jsx)(k, {})), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (!a || !s(a.route) || (i && a.keepsResult === !1)) return null;
  let p;
  t[6] !== a || t[7] !== i
    ? ((p = E.map((e) => {
        let t = e.stage === a.stage;
        return (0, _.jsx)(
          `button`,
          {
            type: `button`,
            "aria-pressed": t,
            ref: t ? o : void 0,
            onClick: () => {
              t ||
                ((D = e.stage),
                document.addEventListener(`keydown`, O, {
                  capture: !0,
                  once: !0,
                }),
                document.addEventListener(`pointerdown`, O, {
                  capture: !0,
                  once: !0,
                }),
                l(`stage_switch`, { to: e.stage, screen: i ? `end` : `start` }),
                c(e.stage));
            },
            children: e.label,
          },
          e.stage,
        );
      })),
      (t[6] = a),
      (t[7] = i),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] === p
      ? (m = t[10])
      : ((m = (0, _.jsx)(`div`, {
          className: `og-stage-toggle`,
          role: `group`,
          "aria-label": `Game style`,
          children: p,
        })),
        (t[9] = p),
        (t[10] = m)),
    m
  );
}
export { d as a, w as i, T as n, f as o, C as r, m as s, A as t };
