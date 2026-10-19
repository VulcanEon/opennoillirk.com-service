import { r as e, t } from "./storage-Cd9DMQud.js";
var n = 2e3,
  r = 1e4,
  i = 5e3,
  a = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
function o(e) {
  let t = ``,
    n = new Uint8Array(e * 2);
  for (; t.length < e;) {
    crypto.getRandomValues(n);
    for (let r of n) r < 248 && t.length < e && (t += a.charAt(r % 62));
  }
  return t;
}
var s = null;
function c() {
  if (s !== null) return s;
  let e = t.device();
  if (e) return ((s = e), e);
  let n = o(16);
  return (t.setDevice(n), (s = n), n);
}
var l = (e) => e instanceof DOMException && e.name === `AbortError`,
  u = /^(localhost|127\.0\.0\.1|\[::1\])$/;
function d(e = navigator.webdriver, t = location.hostname) {
  return e === !0 && !u.test(t) && !window.OPENNOILLIRK_AUDIT;
}
async function f(e, t, n) {
  let r = new AbortController(),
    i = setTimeout(() => r.abort(), n);
  try {
    return await fetch(e, { ...t, signal: r.signal });
  } finally {
    clearTimeout(i);
  }
}
async function p(e, t) {
  try {
    let n = await f(
      `/api/runs`,
      {
        method: `POST`,
        headers: { "content-type": `application/json` },
        body: JSON.stringify(e),
      },
      t,
    );
    return n.status === 409
      ? { clash: !0 }
      : n.ok
        ? { reply: await n.json() }
        : { failed: !0 };
  } catch (e) {
    return l(e) ? { timeout: !0 } : { failed: !0 };
  }
}
async function m(e, t) {
  if (d()) return null;
  let i = { ...e, device: c() },
    a = await p(i, n);
  `clash` in a && ((i = { ...i, id: o(8) }), (a = await p(i, n)));
  let s = (e) => ({ ...e, created: e.id === i.id });
  return `reply` in a
    ? s(a.reply)
    : (`timeout` in a &&
        p(i, r)
          .then((e) => {
            `reply` in e && t(s(e.reply));
          })
          .catch(() => void 0),
      null);
}
async function h(e, t) {
  try {
    return (
      (
        await f(
          `/api/runs/${e}`,
          {
            method: `PATCH`,
            headers: { "content-type": `application/json` },
            body: JSON.stringify({ device: c(), name: t }),
          },
          i,
        )
      ).status === 204
    );
  } catch {
    return !1;
  }
}
async function g(t) {
  try {
    let n = await f(
      `/api/runs/${t}/board`,
      { method: `GET`, headers: { [e]: c() } },
      i,
    );
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
function _(e, t) {
  let n = t.map((e) => ({ p: e.promptId, a: e.aid, b: e.band }));
  if (e.kind === `daily`)
    return t.length === 10 ? { mode: `daily`, date: e.date, rounds: n } : null;
  let { length: r } = e;
  return (r !== 10 && r !== 20) || t.length !== r
    ? null
    : { mode: `unlimited`, seed: e.seed, bank: e.bank, length: r, rounds: n };
}
export { o as a, m as i, c as n, h as o, g as r, _ as s, d as t };
