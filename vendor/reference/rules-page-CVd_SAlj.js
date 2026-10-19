import { t as e } from "./compiler-runtime-BybR60WX.js";
import { t } from "./link-CFi9sgXA.js";
import { t as n } from "./jsx-runtime-D_h4s5mO.js";
var r = e(),
  i = n();
function a(e) {
  let t = (0, r.c)(11),
    { title: n, dek: a, children: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, i.jsx)(`p`, { className: `rules-kicker`, children: `Rules` })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === n
    ? (c = t[2])
    : ((c = (0, i.jsx)(`h1`, { children: n })), (t[1] = n), (t[2] = c));
  let l;
  t[3] === a
    ? (l = t[4])
    : ((l = (0, i.jsx)(`p`, { className: `hr-dek`, children: a })),
      (t[3] = a),
      (t[4] = l));
  let u;
  t[5] !== c || t[6] !== l
    ? ((u = (0, i.jsxs)(`header`, {
        className: `rules-head`,
        children: [s, c, l],
      })),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== u
      ? ((d = (0, i.jsx)(`main`, {
          className: `home-reading rules-page`,
          children: (0, i.jsxs)(`div`, {
            className: `home-content-shell`,
            children: [u, o],
          }),
        })),
        (t[8] = o),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function o() {
  let e = (0, r.c)(2),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, i.jsx)(t, {
        className: `home-button`,
        to: `/`,
        children: `Play today's 10`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let a;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, i.jsxs)(`div`, {
          className: `home-play-actions`,
          children: [
            n,
            (0, i.jsxs)(t, {
              className: `home-button secondary`,
              to: `/unlimited`,
              children: [
                `Play Unlimited `,
                (0, i.jsx)(`span`, { "aria-hidden": `true`, children: `↗` }),
              ],
            }),
          ],
        })),
        (e[1] = a))
      : (a = e[1]),
    a
  );
}
export { o as n, a as t };
