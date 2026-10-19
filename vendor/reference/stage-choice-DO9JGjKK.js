import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./storage-Cd9DMQud.js";
var i = n(),
  a = e(t()),
  o = `data-stage`,
  s = /[?&]stage=(climb|table)(?:&|$)/;
function c(e, t, n) {
  let r = s.exec(n)?.[1];
  return r === `climb` || r === `table` ? r : (t ?? `climb`);
}
function l(e) {
  return e !== `challenge` || !0;
}
var u = !1,
  d = null,
  f = ``,
  p = new Set();
function m() {
  u || ((u = !0), (d = r.stage()), (f = window.location.search));
}
function h(e) {
  return (p.add(e), () => p.delete(e));
}
function g(e) {
  let t = (0, i.c)(3),
    n,
    r;
  return (
    t[0] === e
      ? ((n = t[1]), (r = t[2]))
      : ((n = () => (m(), c(e, d, f))),
        (r = () => c(e, null, ``)),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r)),
    (0, a.useSyncExternalStore)(h, n, r)
  );
}
function _(e) {
  (r.setStage(e),
    (u = !0),
    (d = e),
    (f = ``),
    e === `table`
      ? document.documentElement.setAttribute(o, `table`)
      : document.documentElement.removeAttribute(o));
  for (let e of p) e();
}
var v = `try{var m=/[?&]stage=(climb|table)(?:&|$)/.exec(location.search),s=m?m[1]:JSON.parse(localStorage.getItem("opennoillirk:stage")||"null");if(s==="table")document.documentElement.setAttribute("${o}","table")}catch(e){}`;
export { g as a, l as i, v as n, _ as r, o as t };
