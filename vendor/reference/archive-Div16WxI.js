import { C as e, H as t, w as n } from "./rules-DxwvjuIt.js";
var r = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  i = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  a = (e) => {
    let t = new Date(`${e}T00:00:00Z`);
    return {
      weekday: r[t.getUTCDay()] ?? ``,
      month: i[t.getUTCMonth()] ?? ``,
      day: t.getUTCDate(),
      year: t.getUTCFullYear(),
    };
  },
  o = /^[1-9]\d{0,4}$/,
  s = (n) => t(e, n - 1);
function c(e) {
  if (e < `2026-10-15`) return [];
  let t = [];
  for (let r = n(e); r >= 1; --r) t.push({ number: r, date: s(r) });
  return t;
}
function l(e) {
  let t = [];
  for (let n of e) {
    let { month: e, year: r } = a(n.date),
      i = `${e} ${r}`,
      o = t.at(-1);
    o?.label === i ? o.days.push(n) : t.push({ label: i, days: [n] });
  }
  return t;
}
var u = (e) => {
    let t = a(e);
    return `${t.weekday}, ${t.month} ${t.day}, ${t.year}`;
  },
  d = (e) => {
    let t = a(e);
    return `${t.weekday.slice(0, 3)}, ${t.month.slice(0, 3)} ${t.day}`;
  },
  f = `/assets/v2/archive-BUULBs18.css`;
export { u as a, l as i, o as n, d as o, c as r, f as t };
