import { t as e } from "./compiler-runtime-BybR60WX.js";
import { t } from "./jsx-runtime-D_h4s5mO.js";
async function n(e) {
  try {
    return (await navigator.clipboard.writeText(e), !0);
  } catch {
    return !1;
  }
}
function r(e, t) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    document.body.append(r),
    r.click(),
    r.remove(),
    setTimeout(() => URL.revokeObjectURL(n), 1e4));
}
var i = (e) => e instanceof DOMException && e.name === `AbortError`;
async function a(e, t, r = `noillirk.jpg`) {
  let a = t ? new File([t], r, { type: t.type || `image/jpeg` }) : null,
    o = a ? { files: [a], text: e } : null;
  if (o && navigator.canShare?.(o))
    try {
      return (await navigator.share(o), `shared`);
    } catch (e) {
      if (i(e)) return `cancelled`;
    }
  if (typeof navigator.share == `function`)
    try {
      return (await navigator.share({ text: e }), `shared`);
    } catch (e) {
      if (i(e)) return `cancelled`;
    }
  return (await n(e)) ? `copied` : `manual`;
}
async function o(e, t = `noillirk.jpg`, n = !0) {
  let a = new File([e], t, { type: e.type || `image/jpeg` });
  if (n && navigator.canShare?.({ files: [a] }))
    try {
      return (await navigator.share({ files: [a] }), `shared`);
    } catch (e) {
      if (i(e)) return `cancelled`;
    }
  return (r(e, t), `downloaded`);
}
var s = `https://opennoillirk.com`,
  c = /^https?:\/\//,
  l = (e, t) =>
    `${s}${e ? `/c/${e}` : `/unlimited`}?utm_source=share&utm_medium=${t}`,
  u = (e) => e.replace(c, ``),
  d = (e) => (e ? `opennoillirk.com/c/${e}` : `opennoillirk.com/unlimited`),
  f = (e) => `Beat my ${e} on OpenNoillirk`,
  p = (e, t) => `${f(e)}: ${t}`;
function m(e, t, n) {
  let r = l(n, e),
    i = encodeURIComponent(f(t));
  return e === `whatsapp`
    ? `https://wa.me/?text=${encodeURIComponent(p(t, r))}`
    : e === `x`
      ? `https://x.com/intent/post?text=${i}&url=${encodeURIComponent(r)}`
      : `https://www.reddit.com/submit?url=${encodeURIComponent(r)}&title=${i}`;
}
var h = e(),
  g = t();
function _() {
  let e = (0, h.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, g.jsx)(`title`, { children: `link` }),
            (0, g.jsx)(`path`, {
              d: `M8.6 11.4a3 3 0 0 0 4.2.2l2.7-2.7a3 3 0 0 0-4.2-4.2l-1.1 1.1M11.4 8.6a3 3 0 0 0-4.2-.2l-2.7 2.7a3 3 0 0 0 4.2 4.2l1.1-1.1`,
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
function v() {
  let e = (0, h.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, g.jsx)(`title`, { children: `play` }),
            (0, g.jsx)(`path`, {
              d: `M6.5 4.8v10.4a.6.6 0 0 0 .9.5l8.3-5.2a.6.6 0 0 0 0-1L7.4 4.3a.6.6 0 0 0-.9.5z`,
              fill: `currentColor`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function y() {
  let e = (0, h.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsxs)(`svg`, {
          viewBox: `0 0 20 20`,
          "aria-hidden": `true`,
          children: [
            (0, g.jsx)(`title`, { children: `board` }),
            (0, g.jsx)(`path`, {
              d: `M5 16v-6M10 16V5M15 16v-4`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinecap: `round`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export {
  d as a,
  m as c,
  a as d,
  u as i,
  n as l,
  _ as n,
  p as o,
  v as r,
  l as s,
  y as t,
  o as u,
};
