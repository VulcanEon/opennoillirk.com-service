import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { U as r, w as i } from "./rules-DxwvjuIt.js";
import { t as a } from "./storage-Cd9DMQud.js";
import { a as o } from "./stage-choice-DO9JGjKK.js";
import { a as s } from "./stage-toggle-LI6FLr3n.js";
var c = n(),
  l = e(t());
function u(e, t) {
  let n = a.getDaily(e),
    r = t.map((e) => e.id),
    o = n !== null && n.results.every((e, t) => e.promptId === r[t]),
    s = o ? n.results : [];
  return {
    kind: { kind: `daily`, date: e, number: i(e) },
    prompts: t,
    challengers: [],
    resume:
      o && !n.done && s.length > 0 ? { results: s, index: s.length } : null,
    finished: o && n.done ? s : null,
    saves: !0,
  };
}
function d() {
  let e = (0, c.c)(7),
    [t, n] = (0, l.useState)(null),
    [i, a] = (0, l.useState)(!1),
    [d, p] = (0, l.useState)(0),
    m;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        let e = !0;
        return (
          a(!1),
          s(r())
            .then((t) => {
              let { file: r } = t;
              e && (0, l.startTransition)(() => n(u(r.date, r.prompts)));
            })
            .catch(() => {
              e && a(!0);
            }),
          () => {
            e = !1;
          }
        );
      }),
      (e[0] = m))
    : (m = e[0]);
  let h;
  (e[1] === d ? (h = e[2]) : ((h = [d]), (e[1] = d), (e[2] = h)),
    (0, l.useEffect)(m, h));
  let g = o(`daily`),
    [_, v] = (0, l.useState)(g);
  _ !== g && (v(g), t?.kind.kind === `daily` && n(u(t.kind.date, t.prompts)));
  let y;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => p(f)), (e[3] = y))
    : (y = e[3]);
  let b = y,
    x;
  return (
    e[4] !== i || e[5] !== t
      ? ((x = { setup: t, error: i, retry: b }),
        (e[4] = i),
        (e[5] = t),
        (e[6] = x))
      : (x = e[6]),
    x
  );
}
function f(e) {
  return e + 1;
}
export { d as t };
