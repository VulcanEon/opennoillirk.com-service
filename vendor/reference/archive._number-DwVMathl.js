import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { o as i } from "./lazyRouteComponent-C02Cd2Zo.js";
import { t as a } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./community-BLCPdEpd.js";
import "./climb-head-B90-o7R9.js";
import { U as o, w as s } from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import "./stage-choice-DO9JGjKK.js";
import { n as c } from "./archive-Div16WxI.js";
import { x as l } from "./main-BXKF3zmu.js";
import { n as u, t as d } from "./home-sections-CGYgZ4JZ.js";
var f = n(),
  p = e(t()),
  m = a();
function h() {
  let e = (0, f.c)(18),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { strict: !1 }), (e[0] = t))
    : (t = e[0]);
  let { number: n } = i(t),
    a = n === void 0 ? `` : n,
    [h, g] = (0, p.useState)(null),
    _,
    v;
  (e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        (g(s(o())), l(window.location.pathname));
      }),
      (v = []),
      (e[1] = _),
      (e[2] = v))
    : ((_ = e[1]), (v = e[2])),
    (0, p.useEffect)(_, v));
  let y;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, m.jsx)(u, {})), (e[3] = y))
    : (y = e[3]);
  let b;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, m.jsx)(`p`, { className: `ar-kicker`, children: `Archive` })),
      (e[4] = b))
    : (b = e[4]);
  let x;
  e[5] === a
    ? (x = e[6])
    : ((x = c.test(a)
        ? `No. ${a} isn't out yet.`
        : `That day isn't in the archive.`),
      (e[5] = a),
      (e[6] = x));
  let S;
  e[7] === x
    ? (S = e[8])
    : ((S = (0, m.jsx)(`h1`, { children: x })), (e[7] = x), (e[8] = S));
  let C = h ? `The newest Daily is No. ${h}.` : ` `,
    w;
  e[9] === C
    ? (w = e[10])
    : ((w = (0, m.jsx)(`p`, { className: `hr-dek`, children: C })),
      (e[9] = C),
      (e[10] = w));
  let T;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, m.jsx)(r, {
        to: `/archive`,
        className: `home-button`,
        children: `Browse the archive`,
      })),
      (e[11] = T))
    : (T = e[11]);
  let E;
  e[12] !== S || e[13] !== w
    ? ((E = (0, m.jsx)(`main`, {
        className: `home-reading ar-page`,
        children: (0, m.jsx)(`div`, {
          className: `home-content-shell`,
          children: (0, m.jsxs)(`header`, {
            className: `ar-head ar-missing`,
            children: [b, S, w, T],
          }),
        }),
      })),
      (e[12] = S),
      (e[13] = w),
      (e[14] = E))
    : (E = e[14]);
  let D;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, m.jsx)(d, {})), (e[15] = D))
    : (D = e[15]);
  let O;
  return (
    e[16] === E
      ? (O = e[17])
      : ((O = (0, m.jsxs)(`div`, {
          className: `rarely-home`,
          children: [y, E, D],
        })),
        (e[16] = E),
        (e[17] = O)),
    O
  );
}
var g = h;
export { g as notFoundComponent };
