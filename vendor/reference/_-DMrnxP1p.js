import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./web-config-CJDEWP5_.js";
import "./outrivia-tokens-CCCe3fRj.js";
import "./styles-D4p6vDLt.js";
import "./seo-DEwHsI0l.js";
import "./rules-DxwvjuIt.js";
import { x as a } from "./main-BXKF3zmu.js";
import { n as o, t as s } from "./home-sections-CGYgZ4JZ.js";
var c = n(),
  l = e(t()),
  u = i();
function d() {
  let e = (0, c.c)(3),
    t;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = []), (e[0] = t))
    : (t = e[0]),
    (0, l.useEffect)(f, t));
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, u.jsx)(o, {})), (e[1] = n))
    : (n = e[1]);
  let i;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, u.jsxs)(`div`, {
          className: `rarely rarely-home`,
          children: [
            n,
            (0, u.jsxs)(`main`, {
              className: `home-legal`,
              children: [
                (0, u.jsx)(`p`, {
                  className: `home-kicker`,
                  children: `Page not found`,
                }),
                (0, u.jsx)(`h1`, { children: `This page isn't on the board.` }),
                (0, u.jsx)(`p`, {
                  children: `The link may be mistyped or out of date. Today's ten questions are still on the table.`,
                }),
                (0, u.jsx)(r, {
                  className: `home-button`,
                  to: `/`,
                  children: `Play today's 10`,
                }),
              ],
            }),
            (0, u.jsx)(s, {}),
          ],
        })),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
function f() {
  a(window.location.pathname);
}
export { d as notFoundComponent };
