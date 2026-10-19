import { K as e, L as t, M as n, P as r, s as i } from "./rules-DxwvjuIt.js";
var a = [1, 0, 2, 1, 3, 0, 2, null, 4, 1].map((i, a) => {
    let o = t(a),
      s = i === null ? 0 : r(i, o);
    return {
      promptId: `example-${a + 1}`,
      aid: i === null ? null : a,
      band: i,
      canonical: null,
      typed: ``,
      base: i === null ? 0 : e[i],
      weight: o,
      points: s,
      people: n(s),
      ...(i === null ? { reason: `passed` } : {}),
      corrected: !1,
      key: null,
    };
  }),
  o = (() => {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    for (let i of a)
      ((e += i.points),
        (t += i.people),
        i.band === 4 && (n += 1),
        (r += i.band ?? 0));
    return {
      points: e,
      people: t,
      outliers: n,
      mean: r / a.length,
      title: i(a),
    };
  })();
export { o as n, a as t };
