import { t as e } from "./compiler-runtime-BybR60WX.js";
import { t } from "./jsx-runtime-D_h4s5mO.js";
var n = e(),
  r = t();
function i(e) {
  let t = (0, n.c)(10),
    { title: i, updated: a, children: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, r.jsx)(`p`, {
        className: `home-kicker`,
        children: `OpenNoillirk`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === i
    ? (c = t[2])
    : ((c = (0, r.jsx)(`h1`, { children: i })), (t[1] = i), (t[2] = c));
  let l;
  t[3] === a
    ? (l = t[4])
    : ((l = (0, r.jsxs)(`p`, {
        className: `home-legal-date`,
        children: [`Updated `, a],
      })),
      (t[3] = a),
      (t[4] = l));
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, r.jsx)(`a`, {
        className: `home-button`,
        href: `/`,
        children: `Back to the game`,
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== o || t[7] !== c || t[8] !== l
      ? ((d = (0, r.jsxs)(`main`, {
          className: `home-legal`,
          children: [s, c, l, o, u],
        })),
        (t[6] = o),
        (t[7] = c),
        (t[8] = l),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
export { i as t };
