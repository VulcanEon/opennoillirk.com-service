var e = [`en`, `zh`, `jp`],
  t = `locale`,
  n = { en: `en_US`, zh: `zh_CN`, jp: `ja_JP` };
function r(t) {
  return e.includes(t);
}
var i = `en`,
  a = t,
  o = /^\/(?:_serverFn|admin|api|rpc|dashboard|users)(?:\/|$)/;
function s(e) {
  return o.test(e);
}
function c(e) {
  let t = /^\/([a-z]{2})(?:\/|$)/.exec(e)?.[1];
  return t && r(t) && t !== i ? t : null;
}
var l = `__locale_switching`,
  u = 5e3;
function d(e) {
  let t = `/${i}`;
  return e === t || e.startsWith(`${t}/`);
}
function f(e, t) {
  return c(e) || (d(e) ? i : (p(t) ?? i));
}
function p(e) {
  if (!e) return null;
  let t = RegExp(`${a}=([^;]+)`).exec(e)?.[1];
  return t && r(t) ? t : null;
}
var m = () =>
  s(window.location.pathname)
    ? (p(document.cookie) ?? i)
    : f(window.location.pathname, document.cookie);
function h(e) {
  if (s(e.pathname)) return e;
  let t = c(e.pathname);
  if (t) {
    let n = new URL(e);
    return ((n.pathname = e.pathname.replace(`/${t}`, ``) || `/`), n);
  }
  let n = `/${i}`;
  if (e.pathname === n || e.pathname.startsWith(`${n}/`)) {
    let t = new URL(e);
    return ((t.pathname = e.pathname.replace(n, ``) || `/`), t);
  }
  return e;
}
function g(e) {
  if (s(e.pathname) || c(e.pathname)) return e;
  let t;
  if (typeof window > `u`) t = m();
  else {
    let e = p(document.cookie),
      n = null;
    try {
      let e = sessionStorage.getItem(l);
      if (e) {
        let t = JSON.parse(e);
        t?.locale && t?.ts && Date.now() - t.ts < u && r(t.locale)
          ? (n = t.locale)
          : sessionStorage.removeItem(l);
      }
    } catch {}
    t = n && e === n ? n : m();
  }
  if (t === i) return e;
  let n = new URL(e);
  return ((n.pathname = `/${t}${e.pathname === `/` ? `` : e.pathname}`), n);
}
export { c as a, i, m as n, n as o, g as r, e as s, h as t };
