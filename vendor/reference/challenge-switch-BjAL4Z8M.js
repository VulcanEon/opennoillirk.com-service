import { t as e } from "./storage-Cd9DMQud.js";
function t(t) {
  if (t.kind.kind !== `daily` || !t.saves) return t;
  let n = e.getDaily(t.kind.date),
    r = t.prompts.map((e) => e.id),
    i = n !== null && n.results.every((e, t) => e.promptId === r[t]),
    a = i ? n.results : [];
  return {
    ...t,
    resume:
      i && !n.done && a.length > 0 ? { results: a, index: a.length } : null,
    finished: i && n.done ? a : null,
  };
}
export { t };
