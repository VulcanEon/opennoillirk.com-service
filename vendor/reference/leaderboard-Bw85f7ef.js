import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { a as i } from "./lazyRouteComponent-C02Cd2Zo.js";
import { t as a } from "./jsx-runtime-D_h4s5mO.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./community-BLCPdEpd.js";
import {
  H as o,
  U as ee,
  i as te,
  o as ne,
  s,
  w as c,
} from "./rules-DxwvjuIt.js";
import { t as l } from "./storage-Cd9DMQud.js";
import { _ as u, v as d, y as f } from "./main-BXKF3zmu.js";
import { t as p } from "./height-CWSuyi2y.js";
var m = e(t(), 1),
  h = n(),
  g = a(),
  _ = {
    climb: {
      title: `Sky Climb`,
      colours: {
        o: `var(--cobalt)`,
        d: `var(--team-f2)`,
        h: `var(--ink)`,
        s: `var(--ink-3)`,
      },
      rows: [
        `...oooooo...`,
        `..ohhooood..`,
        `.ohoooooood.`,
        `.ohoooooood.`,
        `.oooooooood.`,
        `.oooooooood.`,
        `..oooooodd..`,
        `...oooodd...`,
        `....oodd....`,
        `.....dd.....`,
        `.....s......`,
        `......s.....`,
      ],
    },
    table: {
      title: `Tabletop`,
      colours: {
        f: `var(--team-f2)`,
        g: `var(--team-f4)`,
        t: `var(--wood-2)`,
        w: `var(--wood)`,
      },
      rows: [
        `.....ff.....`,
        `....fffg....`,
        `....fffg....`,
        `.....fg.....`,
        `....fffg....`,
        `...ffffgg...`,
        `.ttffffggtt.`,
        `tttffffggttt`,
        `tttttttttttt`,
        `tttttttttttt`,
        `wwwwwwwwwwww`,
        `.wwwwwwwwww.`,
      ],
    },
  };
function v(e) {
  let t = new Map();
  for (let [n, r] of e.rows.entries()) {
    let e = 0;
    for (; e < r.length;) {
      let i = r.charAt(e),
        a = e + 1;
      for (; r.charAt(a) === i;) a += 1;
      (i !== `.` &&
        t.set(i, [...(t.get(i) ?? []), `M${e} ${n}h${a - e}v1h${e - a}z`]),
        (e = a));
    }
  }
  return [...t].map(([t, n]) => ({
    fill: e.colours[t] ?? `var(--ink)`,
    d: n.join(``),
  }));
}
var re = new Map(
  Object.entries(_).map(([e, t]) => [e, { title: t.title, paths: v(t) }]),
);
function ie(e) {
  let t = (0, h.c)(3),
    { stage: n } = e,
    r,
    i;
  if (t[0] !== n) {
    i = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n === null ? void 0 : re.get(n);
      if (!e) {
        i = null;
        break bb0;
      }
      r = (0, g.jsxs)(`svg`, {
        className: `stage-icon`,
        role: `img`,
        viewBox: `0 0 12 12`,
        width: `12`,
        height: `12`,
        shapeRendering: `crispEdges`,
        children: [(0, g.jsx)(`title`, { children: e.title }), e.paths.map(ae)],
      });
    }
    ((t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  return i === Symbol.for(`react.early_return_sentinel`) ? r : i;
}
function ae(e) {
  return (0, g.jsx)(`path`, { d: e.d, style: { fill: e.fill } }, e.fill);
}
var y = 2400;
async function b(e) {
  let t = await crypto.subtle.digest(
    `SHA-256`,
    new TextEncoder().encode(`board|${e}`),
  );
  return Array.from(new Uint8Array(t, 0, 6), (e) =>
    e.toString(16).padStart(2, `0`),
  ).join(``);
}
var x = { tags: new Set(), points: null, title: null, percentile: null };
function oe(e) {
  let t = (0, h.c)(3),
    [n, r] = (0, m.useState)(x),
    i,
    a;
  return (
    t[0] === e
      ? ((i = t[1]), (a = t[2]))
      : ((i = () => {
          if (!e) {
            r(x);
            return;
          }
          let t = !0,
            n = l.getRun(e),
            i = l.getDaily(e),
            a = i?.done ? i : null,
            o = {
              points: a ? a.total : null,
              title: a ? s(a.results).id : null,
              percentile: n?.percentile ?? null,
            };
          r({ ...o, tags: x.tags });
          let ee = new Set([...(n ? [n.id] : []), ...l.ownRuns()]);
          return (
            Promise.all([...ee].map(C))
              .then((e) => {
                t && r({ ...o, tags: new Set(e) });
              })
              .catch(S),
            () => {
              t = !1;
            }
          );
        }),
        (a = [e]),
        (t[0] = e),
        (t[1] = i),
        (t[2] = a)),
    (0, m.useEffect)(i, a),
    n
  );
}
function S() {}
function C(e) {
  return b(e);
}
function se(e) {
  let t = (0, h.c)(29),
    { board: n, mine: i, today: a } = e,
    o;
  if (t[0] !== n.rows || t[1] !== i) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e = (e) => i.tags.has(e.tag)), (t[3] = i), (t[4] = e)),
      (o = n.rows.find(e)),
      (t[0] = n.rows),
      (t[1] = i),
      (t[2] = o));
  } else o = t[2];
  let ee = o;
  if (ee) {
    let e = `You're #${ee.rank} on this board.`,
      n;
    return (
      t[5] === e
        ? (n = t[6])
        : ((n = (0, g.jsx)(`p`, {
            className: `lb-you`,
            "data-on": ``,
            children: e,
          })),
          (t[5] = e),
          (t[6] = n)),
      n
    );
  }
  if (i.points !== null) {
    let e;
    t[7] === i.points
      ? (e = t[8])
      : ((e = te(i.points)), (t[7] = i.points), (t[8] = e));
    let n = `Your run: ${e} points`;
    if (i.points >= 2400) {
      let e;
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = te(y)), (t[9] = e))
        : (e = t[9]);
      let r = `${n}. Scores of ${e} or more join the board once we've checked them.`,
        i;
      return (
        t[10] === r
          ? (i = t[11])
          : ((i = (0, g.jsx)(`p`, { className: `lb-you`, children: r })),
            (t[10] = r),
            (t[11] = i)),
        i
      );
    }
    let r;
    t[12] !== i.percentile || t[13] !== i.title || t[14] !== n
      ? ((r = [n]),
        i.title && r.push(ne[i.title].title),
        i.percentile?.kind === `better` &&
          r.push(`better than ${i.percentile.value}% of players`),
        (t[12] = i.percentile),
        (t[13] = i.title),
        (t[14] = n),
        (t[15] = r))
      : (r = t[15]);
    let a = `${r.join(` · `)}. The board shows the top 100.`,
      o;
    return (
      t[16] === a
        ? (o = t[17])
        : ((o = (0, g.jsx)(`p`, { className: `lb-you`, children: a })),
          (t[16] = a),
          (t[17] = o)),
      o
    );
  }
  if (n.date === a) {
    let e;
    return (
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, g.jsxs)(`p`, {
            className: `lb-you`,
            children: [
              `Not on the board yet. `,
              (0, g.jsx)(r, { to: `/`, children: `Play today's Daily` }),
              ` and your first run is ranked.`,
            ],
          })),
          (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  let s;
  t[19] === n.date
    ? (s = t[20])
    : ((s = c(n.date)), (t[19] = n.date), (t[20] = s));
  let l = s,
    u = `You didn't play No. ${l} on this device.`,
    d;
  t[21] === u
    ? (d = t[22])
    : ((d = (0, g.jsx)(`span`, { children: u })), (t[21] = u), (t[22] = d));
  let f = `${l}`,
    p;
  t[23] === f
    ? (p = t[24])
    : ((p = (0, g.jsx)(r, {
        to: `/archive/$number`,
        params: { number: f },
        children: `Play it from the archive`,
      })),
      (t[23] = f),
      (t[24] = p));
  let m;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, g.jsx)(`span`, {
        className: `lb-you-aside`,
        children: `(a replay after the board closes isn't ranked)`,
      })),
      (t[25] = m))
    : (m = t[25]);
  let _;
  return (
    t[26] !== d || t[27] !== p
      ? ((_ = (0, g.jsxs)(`p`, {
          className: `lb-you`,
          children: [d, ` `, p, ` `, m],
        })),
        (t[26] = d),
        (t[27] = p),
        (t[28] = _))
      : (_ = t[28]),
    _
  );
}
var ce = (e) =>
  new Date(`${e}T00:00:00Z`).toLocaleDateString(`en-US`, {
    weekday: `short`,
    month: `short`,
    day: `numeric`,
    timeZone: `UTC`,
  });
async function le(e) {
  try {
    let t = await fetch(`/api/leaderboard/${e}`);
    return t.ok ? await t.json() : null;
  } catch {
    return null;
  }
}
function w(e) {
  let t = (0, h.c)(82),
    { initial: n, requested: a } = e,
    s = i(),
    [l, u] = (0, m.useState)(null),
    _ = n?.date ?? null,
    v;
  t[0] !== n || t[1] !== _
    ? ((v = { date: _, board: n }), (t[0] = n), (t[1] = _), (t[2] = v))
    : (v = t[2]);
  let [re, ae] = (0, m.useState)(v),
    y =
      (a && l && a >= `2026-10-15` && a <= l ? a : null) ??
      l ??
      n?.date ??
      null,
    b;
  t[3] !== y || t[4] !== n || t[5] !== re
    ? ((b = n && n.date === y ? { date: y, board: n } : re),
      (t[3] = y),
      (t[4] = n),
      (t[5] = re),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S = y !== null && x.date !== y,
    C = S ? null : x.board,
    w = oe(y),
    T,
    E;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => u(ee())), (E = []), (t[7] = T), (t[8] = E))
    : ((T = t[7]), (E = t[8])),
    (0, m.useEffect)(T, E));
  let D, O;
  (t[9] !== y || t[10] !== x.date
    ? ((D = () => {
        if (!y || x.date === y) return;
        let e = !0;
        return (
          le(y)
            .then((t) => {
              e && ae({ date: y, board: t });
            })
            .catch(pe),
          () => {
            e = !1;
          }
        );
      }),
      (O = [y, x.date]),
      (t[9] = y),
      (t[10] = x.date),
      (t[11] = D),
      (t[12] = O))
    : ((D = t[11]), (O = t[12])),
    (0, m.useEffect)(D, O));
  let k;
  t[13] !== s || t[14] !== l
    ? ((k = (e) => {
        s({
          to: `/leaderboard`,
          search: e === l ? {} : { date: e },
          replace: !0,
          resetScroll: !1,
        }).catch(fe);
      }),
      (t[13] = s),
      (t[14] = l),
      (t[15] = k))
    : (k = t[15]);
  let A = k,
    me = l ? o(l, -1) : null,
    j = ``;
  if (y === l) j = `Today`;
  else if (y === me) j = `Yesterday`;
  else if (y) {
    let e;
    (t[16] === y ? (e = t[17]) : ((e = ce(y)), (t[16] = y), (t[17] = e)),
      (j = e));
  }
  let M = C !== null && Date.now() / 1e3 < C.closes,
    N = `No runs on this board yet. Be the first.`;
  S
    ? (N = `Reading the board…`)
    : C === null && (N = `The board is resting. Try again in a minute.`);
  let P;
  t[18] === y
    ? (P = t[19])
    : ((P = y ? `OpenNoillirk #${c(y)}` : `OpenNoillirk`),
      (t[18] = y),
      (t[19] = P));
  let F;
  t[20] === P
    ? (F = t[21])
    : ((F = (0, g.jsx)(`p`, { className: `cm-kicker`, children: P })),
      (t[20] = P),
      (t[21] = F));
  let I, L;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, g.jsx)(`h1`, {
        className: `cm-pixel`,
        children: `Daily leaderboard`,
      })),
      (L = (0, g.jsx)(`p`, {
        className: `cm-lede`,
        children: `Today's top 100, live. Everyone plays the same ten questions, so every score here compares directly.`,
      })),
      (t[22] = I),
      (t[23] = L))
    : ((I = t[22]), (L = t[23]));
  let R;
  t[24] === F
    ? (R = t[25])
    : ((R = (0, g.jsxs)(`header`, {
        className: `cm-head`,
        children: [F, I, L],
      })),
      (t[24] = F),
      (t[25] = R));
  let he = !l || !y || y <= `2026-10-15`,
    z;
  t[26] !== y || t[27] !== A
    ? ((z = () => y && A(o(y, -1))), (t[26] = y), (t[27] = A), (t[28] = z))
    : (z = t[28]);
  let B;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, g.jsx)(`span`, { "aria-hidden": `true`, children: `‹` })),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== he || t[31] !== z
    ? ((V = (0, g.jsx)(`button`, {
        type: `button`,
        className: `lb-step`,
        "aria-label": `Previous day`,
        disabled: he,
        onClick: z,
        children: B,
      })),
      (t[30] = he),
      (t[31] = z),
      (t[32] = V))
    : (V = t[32]);
  let H;
  t[33] === y
    ? (H = t[34])
    : ((H =
        y &&
        (0, g.jsx)(`span`, {
          className: `lb-day-no`,
          children: `No. ${c(y)}`,
        })),
      (t[33] = y),
      (t[34] = H));
  let U;
  t[35] !== j || t[36] !== H
    ? ((U = (0, g.jsxs)(`p`, {
        className: `lb-day-label`,
        "aria-live": `polite`,
        children: [j, H],
      })),
      (t[35] = j),
      (t[36] = H),
      (t[37] = U))
    : (U = t[37]);
  let ge = !l || !y || y >= l,
    W;
  t[38] !== y || t[39] !== A
    ? ((W = () => y && A(o(y, 1))), (t[38] = y), (t[39] = A), (t[40] = W))
    : (W = t[40]);
  let _e;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, g.jsx)(`span`, { "aria-hidden": `true`, children: `›` })),
      (t[41] = _e))
    : (_e = t[41]);
  let G;
  t[42] !== ge || t[43] !== W
    ? ((G = (0, g.jsx)(`button`, {
        type: `button`,
        className: `lb-step`,
        "aria-label": `Next day`,
        disabled: ge,
        onClick: W,
        children: _e,
      })),
      (t[42] = ge),
      (t[43] = W),
      (t[44] = G))
    : (G = t[44]);
  let K;
  t[45] !== V || t[46] !== U || t[47] !== G
    ? ((K = (0, g.jsxs)(`div`, { className: `lb-day`, children: [V, U, G] })),
      (t[45] = V),
      (t[46] = U),
      (t[47] = G),
      (t[48] = K))
    : (K = t[48]);
  let q;
  t[49] !== y || t[50] !== A || t[51] !== l
    ? ((q =
        l &&
        y !== l &&
        (0, g.jsx)(`button`, {
          type: `button`,
          className: `lb-today`,
          onClick: () => A(l),
          children: `Today`,
        })),
      (t[49] = y),
      (t[50] = A),
      (t[51] = l),
      (t[52] = q))
    : (q = t[52]);
  let J;
  t[53] !== C || t[54] !== M
    ? ((J =
        C &&
        (0, g.jsx)(`p`, {
          className: `lb-count`,
          "data-live": M || void 0,
          children: `${te(C.players)} ${C.players === 1 ? `player` : `players`} · ${M ? `live` : `final`}`,
        })),
      (t[53] = C),
      (t[54] = M),
      (t[55] = J))
    : (J = t[55]);
  let Y;
  t[56] !== K || t[57] !== q || t[58] !== J
    ? ((Y = (0, g.jsxs)(`div`, { className: `lb-bar`, children: [K, q, J] })),
      (t[56] = K),
      (t[57] = q),
      (t[58] = J),
      (t[59] = Y))
    : (Y = t[59]);
  let X;
  t[60] !== C || t[61] !== w || t[62] !== l
    ? ((X = C && l && (0, g.jsx)(se, { board: C, mine: w, today: l })),
      (t[60] = C),
      (t[61] = w),
      (t[62] = l),
      (t[63] = X))
    : (X = t[63]);
  let Z;
  t[64] !== C || t[65] !== N || t[66] !== w
    ? ((Z =
        C && C.rows.length > 0
          ? (0, g.jsxs)(`div`, {
              className: `lb-table`,
              children: [
                (0, g.jsxs)(`div`, {
                  className: `lb-row lb-cols`,
                  children: [
                    (0, g.jsx)(`span`, { className: `lb-rank`, children: `#` }),
                    (0, g.jsx)(`span`, {
                      className: `lb-who`,
                      children: `Name`,
                    }),
                    (0, g.jsx)(`span`, {
                      className: `lb-title`,
                      children: `Title`,
                    }),
                    (0, g.jsx)(`span`, {
                      className: `lb-points`,
                      children: `Points`,
                    }),
                    (0, g.jsx)(`span`, {
                      className: `lb-height`,
                      children: `Height`,
                    }),
                  ],
                }),
                (0, g.jsx)(`ol`, {
                  className: `lb-rows`,
                  children: C.rows.map((e) => {
                    let t = w.tags.has(e.tag);
                    return (0, g.jsxs)(
                      `li`,
                      {
                        className: `lb-row`,
                        "data-top": e.rank <= 3 ? e.rank : void 0,
                        "data-me": t || void 0,
                        children: [
                          (0, g.jsx)(`span`, {
                            className: `lb-rank`,
                            children: e.rank,
                          }),
                          (0, g.jsxs)(`span`, {
                            className: `lb-who`,
                            children: [
                              (0, g.jsx)(`span`, {
                                className: `lb-name`,
                                children: e.name,
                              }),
                              (0, g.jsx)(ie, { stage: e.stage }),
                              t &&
                                (0, g.jsx)(`span`, {
                                  className: `lb-me`,
                                  children: `you`,
                                }),
                            ],
                          }),
                          (0, g.jsx)(`span`, {
                            className: `lb-title`,
                            children: ne[e.title].title,
                          }),
                          (0, g.jsx)(`span`, {
                            className: `lb-points`,
                            children: te(e.points),
                          }),
                          (0, g.jsx)(`span`, {
                            className: `lb-height`,
                            children: p(e.points),
                          }),
                        ],
                      },
                      `${e.rank}-${e.tag}`,
                    );
                  }),
                }),
              ],
            })
          : (0, g.jsx)(`p`, { className: `lb-empty`, children: N })),
      (t[64] = C),
      (t[65] = N),
      (t[66] = w),
      (t[67] = Z))
    : (Z = t[67]);
  let Q;
  t[68] !== y || t[69] !== l
    ? ((Q =
        l &&
        y &&
        y < l &&
        (0, g.jsx)(`p`, {
          className: `lb-replay`,
          children: (0, g.jsx)(r, {
            to: `/archive/$number`,
            params: { number: `${c(y)}` },
            children: `Play No. ${c(y)} from the archive`,
          }),
        })),
      (t[68] = y),
      (t[69] = l),
      (t[70] = Q))
    : (Q = t[70]);
  let $;
  t[71] !== S || t[72] !== Y || t[73] !== X || t[74] !== Z || t[75] !== Q
    ? (($ = (0, g.jsxs)(`section`, {
        className: `lb`,
        "aria-label": `Leaderboard`,
        "aria-busy": S,
        children: [Y, X, Z, Q],
      })),
      (t[71] = S),
      (t[72] = Y),
      (t[73] = X),
      (t[74] = Z),
      (t[75] = Q),
      (t[76] = $))
    : ($ = t[76]);
  let ve;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = f.map(de)), (t[77] = ve))
    : (ve = t[77]);
  let ye;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, g.jsxs)(`div`, {
        className: `cm-prose`,
        children: [
          ve,
          (0, g.jsxs)(`section`, {
            className: `cm-faq`,
            children: [
              (0, g.jsx)(`h2`, {
                className: `cm-pixel`,
                children: `Leaderboard questions`,
              }),
              d.map(ue),
            ],
          }),
        ],
      })),
      (t[78] = ye))
    : (ye = t[78]);
  let be;
  return (
    t[79] !== R || t[80] !== $
      ? ((be = (0, g.jsxs)(`main`, {
          className: `cm-page lb-page`,
          children: [R, $, ye],
        })),
        (t[79] = R),
        (t[80] = $),
        (t[81] = be))
      : (be = t[81]),
    be
  );
}
function ue(e) {
  return (0, g.jsxs)(
    `details`,
    {
      children: [
        (0, g.jsx)(`summary`, { children: e.question }),
        (0, g.jsx)(`p`, { children: e.answer }),
      ],
    },
    e.question,
  );
}
function de(e) {
  return (0, g.jsxs)(
    `section`,
    {
      children: [
        (0, g.jsx)(`h2`, { className: `cm-pixel`, children: e.h2 }),
        e.p.map(T),
      ],
    },
    e.h2,
  );
}
function T(e) {
  return (0, g.jsx)(`p`, { children: e }, e);
}
function fe() {}
function pe() {}
function E() {
  let e = (0, h.c)(3),
    t = u.useLoaderData(),
    { date: n } = u.useSearch(),
    r = n ?? null,
    i;
  return (
    e[0] !== t || e[1] !== r
      ? ((i = (0, g.jsx)(w, { initial: t, requested: r })),
        (e[0] = t),
        (e[1] = r),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
export { E as component };
