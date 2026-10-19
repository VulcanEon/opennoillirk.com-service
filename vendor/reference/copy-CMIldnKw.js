import { n as e } from "./storage-Cd9DMQud.js";
function t(e, t) {
  return e > t ? `win` : e < t ? `loss` : `tie`;
}
function n(e, t, n) {
  let r = e === null ? `Unlimited` : `Daily #${e}`;
  return n
    ? `${n}'s challenge · ${r}`
    : e === null
      ? `Unlimited · ${t} prompts`
      : `${r} · Run complete`;
}
function r(e, n, r) {
  if (!r)
    return [
      [`You pulled `, `ink`],
      [String(e), `you`],
      [n === null ? ` people` : ` of ${n}`, `ink`],
    ];
  let i = r.people;
  switch (t(e, i)) {
    case `win`:
      return [
        [`You beat `, `ink`],
        [r.name, `friend`],
        [` `, `ink`],
        [String(e), `you`],
        [`–${i}`, `ink`],
      ];
    case `loss`:
      return [
        [r.name, `friend`],
        [` takes it, ${i}–`, `ink`],
        [String(e), `you`],
      ];
    default:
      return [
        [`Dead heat with `, `ink`],
        [r.name, `friend`],
        [`, ${i}–${e}`, `ink`],
      ];
  }
}
function i(e, t) {
  let n = t - e + 1;
  return `${n} more ${n === 1 ? `person` : `people`} and you'd have taken it.`;
}
function a(e, t) {
  return e
    ? e.kind === `first`
      ? `First to finish today`
      : e.kind === `early`
        ? `One of the first 10 players today`
        : t
          ? `Better than ${e.value}% today`
          : `Better than ${e.value}% of today's players`
    : null;
}
function o(e, t) {
  return e === `home`
    ? `Your crowd`
    : e === `moment`
      ? `Best moment`
      : `You vs ${t ?? `friends`}`;
}
function s(e, t) {
  let n = e[t] ?? ``,
    r = e
      .filter((e, n) => n !== t)
      .map((e) => `${e.charAt(0).toLowerCase()}${e.slice(1)}`);
  return r.length === 0 ? n : `${n} · swipe for ${r.join(`, `)}`;
}
function c(e, t, n) {
  return e === `loss`
    ? n
      ? `Losing? Send your best moment instead.`
      : `Losing? Send your crowd instead.`
    : `Your card for the group: you vs ${t}.`;
}
function l(e, t) {
  return t ? `✦ ${e} · ${t}` : `✦ ${e}`;
}
function u(e, t) {
  return t
    ? `Send to another friend`
    : e
      ? `Send to your group`
      : `Challenge friends`;
}
function d(e) {
  return e === `you`
    ? `Your board`
    : e === `unknown`
      ? `The board`
      : `${e.name}'s board`;
}
function f(e) {
  return e === `you`
    ? `See your board`
    : e === `unknown`
      ? `See the board`
      : `See ${e.name}'s board`;
}
function p(e, t) {
  return e === `you`
    ? `${t} played your challenge.`
    : e === `unknown`
      ? `Your score joins the board.`
      : `Your score joins ${e.name}'s board.`;
}
function m(t) {
  return t > 1e3 ? `${e.toLocaleString(`en-US`)}+` : t.toLocaleString(`en-US`);
}
function h(e, t) {
  let n = d(e);
  return t <= 1 ? `${n} · waiting for friends` : `${n} · ${m(t)} played`;
}
function g(e) {
  return e === null
    ? `Scan to play OpenNoillirk Unlimited`
    : `Scan to play the same ${e} questions`;
}
function _(e, t) {
  let n = `home`;
  t === `loss` ? (n = `moment`) : t !== null && (n = `versus`);
  let r = e.indexOf(n);
  return r >= 0 ? r : 0;
}
function v(e, t, n, r) {
  let i = e.slice(0, r).map((e, t) => ({ row: e, rank: t + 1 }));
  return t === null || n === void 0 || i.some((e) => e.row.you)
    ? i
    : [...i, { row: t, rank: n }];
}
function y(e, t) {
  return t ? `${e} passed you ${t}'s challenge` : `A challenge from ${e}`;
}
function b(e, t) {
  return t ? `Take the challenge` : `Take ${e}'s challenge`;
}
function x(e, t) {
  return `Same ${t} questions. See what ${e} said after each answer.`;
}
function S(e, t) {
  return `${e.you ? `You lead` : `${e.name} leads`} with ${e.people} · ${m(t)} have played`;
}
function C(e, t) {
  return e
    ? `${e.you ? `You lead` : `${e.name} leads`} · ${m(t)} have played`
    : `${m(t)} have played`;
}
function w(e, t) {
  return e === `win`
    ? `You already played today's questions. You win!`
    : e === `loss`
      ? `You already played today's questions. ${t} takes it.`
      : `You already played today's questions. Dead heat.`;
}
export {
  b as C,
  S,
  m as _,
  o as a,
  g as b,
  _ as c,
  r as d,
  p as f,
  a as g,
  t as h,
  v as i,
  y as l,
  i as m,
  h as n,
  C as o,
  n as p,
  d as r,
  s,
  w as t,
  c as u,
  x as v,
  l as w,
  f as x,
  u as y,
};
