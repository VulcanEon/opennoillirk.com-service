import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { n as r, t as i, v as a } from "./useStore-CO7AIjx_.js";
import { t as o } from "./link-CFi9sgXA.js";
import { t as s } from "./jsx-runtime-D_h4s5mO.js";
import { t as c } from "./disclaimer-DWou9UTv.js";
var l = e(t(), 1);
function u(e) {
  let t = r(),
    n = (0, l.useRef)(void 0);
  return i(t.stores.location, (r) => {
    let i = e?.select ? e.select(r) : r;
    if (e?.structuralSharing ?? t.options.defaultStructuralSharing) {
      let e = a(n.current, i);
      return ((n.current = e), e);
    }
    return i;
  });
}
var d = n(),
  f = s();
function p(e) {
  let t = (0, d.c)(8),
    { to: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = { select: (e) => e.pathname === n }), (t[0] = n), (t[1] = i));
  let a = u(i),
    s;
  t[2] === a
    ? (s = t[3])
    : ((s = (e) => {
        if (
          !a ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        )
          return;
        let t = document.getElementById(`play`);
        t &&
          (e.preventDefault(),
          t.scrollIntoView({ block: `start` }),
          t.querySelector(`.og-play`)?.focus({ preventScroll: !0 }));
      }),
      (t[2] = a),
      (t[3] = s));
  let c = s,
    l;
  return (
    t[4] !== r || t[5] !== n || t[6] !== c
      ? ((l = (0, f.jsx)(o, {
          className: `home-button`,
          to: n,
          onClick: c,
          children: r,
        })),
        (t[4] = r),
        (t[5] = n),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function m() {
  let e = (0, d.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, f.jsxs)(`div`, {
          className: `home-play-actions`,
          children: [
            (0, f.jsxs)(p, {
              to: `/unlimited`,
              children: [
                `Play Unlimited `,
                (0, f.jsx)(`span`, { "aria-hidden": `true`, children: `↑` }),
              ],
            }),
            (0, f.jsx)(o, {
              className: `home-button secondary`,
              to: `/`,
              children: `Play today's 10`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function h() {
  let e = (0, d.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, f.jsxs)(p, {
        to: `/`,
        children: [
          `Play today's 10 `,
          (0, f.jsx)(`span`, { "aria-hidden": `true`, children: `↑` }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, f.jsxs)(`div`, {
          className: `home-play-actions`,
          children: [
            t,
            (0, f.jsxs)(o, {
              className: `home-button secondary`,
              to: `/unlimited`,
              children: [
                `Play Unlimited `,
                (0, f.jsx)(`span`, { "aria-hidden": `true`, children: `↗` }),
              ],
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
var g = `/assets/s6-p-beret-0-CwHzuyCp.webp`,
  ee = `/assets/s6-p-beret-1-a0vcJAkP.webp`,
  te = `/assets/s6-p-beret-2-iCZMcvXr.webp`,
  ne = `/assets/s6-p-binoc-0-Dmw_EoOn.webp`,
  re = `/assets/s6-p-binoc-1-_l3lH98T.webp`,
  ie = `/assets/s6-p-binoc-2-SLEWoxm-.webp`,
  ae = `/assets/s6-p-cap-0-C3CCdrPB.webp`,
  _ = `/assets/s6-p-cap-1-DkevnHLe.webp`,
  oe = `/assets/s6-p-cap-2-D8kIvfNx.webp`,
  se = `/assets/s6-p-freckles-0-DcTc0g6a.webp`,
  ce = `/assets/s6-p-freckles-1-Bj828cnM.webp`,
  v = `/assets/s6-p-freckles-2-CQxW25Jg.webp`,
  y = `/assets/s6-p-glasses-0-DTwf_pBx.webp`,
  b = `/assets/s6-p-glasses-1-rJhFq1yC.webp`,
  x = `/assets/s6-p-glasses-2-B8qebgVW.webp`,
  S = `/assets/s6-p-hero-0-B8pv90bb.webp`,
  C = `/assets/s6-p-hero-1-D0yyYuZ8.webp`,
  w = `/assets/s6-p-hero-2-DjY87Ltz.webp`,
  T = `/assets/s6-p-hero-3-DfLRPPlw.webp`,
  E = `/assets/s6-p-mia-0-DXyU8Rix.webp`,
  D = `/assets/s6-p-mia-1-CnrFr628.webp`,
  O = `/assets/s6-p-mia-2-Ca0p1Dz-.webp`,
  k = `/assets/s6-p-ponytail-0-CJkDLbp5.webp`,
  A = `/assets/s6-p-ponytail-1-CveJzGXV.webp`,
  j = `/assets/s6-p-ponytail-2-tA7SaJHV.webp`,
  M = `/assets/s6-p-silver-0-CiFfkDga.webp`,
  N = `/assets/s6-p-silver-1-CADrDPFI.webp`,
  P = `/assets/s6-p-silver-2-CbPjkHgu.webp`,
  F = `/assets/s6-p-sunhat-0-CndLR2Q6.webp`,
  I = `/assets/s6-p-sunhat-1-DGdrbfE2.webp`,
  L = `/assets/s6-p-sunhat-2-1eLBspbY.webp`,
  R = `/assets/s6-table-phone-ceCMbXEF.webp`,
  z = `/assets/s6-table-CBvgrZPP.webp`,
  B = `/assets/s6-tile-cream-Bue2DRJW.webp`,
  V = `/assets/s6-tile-gold-D9hIB79E.webp`,
  H = `/assets/s6-tile-lavender-CpOcXGJW.webp`,
  U = `/assets/s6-tile-mint-Ic54ZhyF.webp`,
  W = `/assets/s6-tile-peach-DB8pCj2W.webp`,
  G = `/assets/s6-tile-sky-BQ0utNI5.webp`,
  le = Object.assign({
    "../../../../../packages/stage/art/s6-p-beret-0.webp": g,
    "../../../../../packages/stage/art/s6-p-beret-1.webp": ee,
    "../../../../../packages/stage/art/s6-p-beret-2.webp": te,
    "../../../../../packages/stage/art/s6-p-binoc-0.webp": ne,
    "../../../../../packages/stage/art/s6-p-binoc-1.webp": re,
    "../../../../../packages/stage/art/s6-p-binoc-2.webp": ie,
    "../../../../../packages/stage/art/s6-p-cap-0.webp": ae,
    "../../../../../packages/stage/art/s6-p-cap-1.webp": _,
    "../../../../../packages/stage/art/s6-p-cap-2.webp": oe,
    "../../../../../packages/stage/art/s6-p-freckles-0.webp": se,
    "../../../../../packages/stage/art/s6-p-freckles-1.webp": ce,
    "../../../../../packages/stage/art/s6-p-freckles-2.webp": v,
    "../../../../../packages/stage/art/s6-p-glasses-0.webp": y,
    "../../../../../packages/stage/art/s6-p-glasses-1.webp": b,
    "../../../../../packages/stage/art/s6-p-glasses-2.webp": x,
    "../../../../../packages/stage/art/s6-p-hero-0.webp": S,
    "../../../../../packages/stage/art/s6-p-hero-1.webp": C,
    "../../../../../packages/stage/art/s6-p-hero-2.webp": w,
    "../../../../../packages/stage/art/s6-p-hero-3.webp": T,
    "../../../../../packages/stage/art/s6-p-mia-0.webp": E,
    "../../../../../packages/stage/art/s6-p-mia-1.webp": D,
    "../../../../../packages/stage/art/s6-p-mia-2.webp": O,
    "../../../../../packages/stage/art/s6-p-ponytail-0.webp": k,
    "../../../../../packages/stage/art/s6-p-ponytail-1.webp": A,
    "../../../../../packages/stage/art/s6-p-ponytail-2.webp": j,
    "../../../../../packages/stage/art/s6-p-silver-0.webp": M,
    "../../../../../packages/stage/art/s6-p-silver-1.webp": N,
    "../../../../../packages/stage/art/s6-p-silver-2.webp": P,
    "../../../../../packages/stage/art/s6-p-sunhat-0.webp": F,
    "../../../../../packages/stage/art/s6-p-sunhat-1.webp": I,
    "../../../../../packages/stage/art/s6-p-sunhat-2.webp": L,
    "../../../../../packages/stage/art/s6-table-phone.webp": R,
    "../../../../../packages/stage/art/s6-table.webp": z,
    "../../../../../packages/stage/art/s6-tile-cream.webp": B,
    "../../../../../packages/stage/art/s6-tile-gold.webp": V,
    "../../../../../packages/stage/art/s6-tile-lavender.webp": H,
    "../../../../../packages/stage/art/s6-tile-mint.webp": U,
    "../../../../../packages/stage/art/s6-tile-peach.webp": W,
    "../../../../../packages/stage/art/s6-tile-sky.webp": G,
  }),
  ue = new Map(
    Object.entries(le).map(([e, t]) => [
      e.slice(e.lastIndexOf(`/`) + 1, -5),
      t,
    ]),
  ),
  de = {
    "s6-table": [3838, 2048],
    "s6-table-phone": [1405, 2048],
    "s6-tile-cream": [256, 238],
    "s6-tile-mint": [256, 238],
    "s6-tile-lavender": [256, 238],
    "s6-tile-peach": [256, 239],
    "s6-tile-sky": [256, 239],
    "s6-tile-gold": [256, 239],
    "s6-p-hero-0": [285, 440],
    "s6-p-hero-1": [308, 400],
    "s6-p-hero-2": [275, 484],
    "s6-p-hero-3": [267, 432],
    "s6-p-mia-0": [150, 300],
    "s6-p-mia-1": [180, 296],
    "s6-p-mia-2": [148, 294],
    "s6-p-sunhat-0": [115, 200],
    "s6-p-sunhat-1": [119, 199],
    "s6-p-sunhat-2": [127, 199],
    "s6-p-cap-0": [106, 200],
    "s6-p-cap-1": [101, 198],
    "s6-p-cap-2": [117, 199],
    "s6-p-glasses-0": [110, 200],
    "s6-p-glasses-1": [109, 198],
    "s6-p-glasses-2": [127, 199],
    "s6-p-beret-0": [105, 200],
    "s6-p-beret-1": [105, 194],
    "s6-p-beret-2": [127, 195],
    "s6-p-ponytail-0": [115, 200],
    "s6-p-ponytail-1": [104, 198],
    "s6-p-ponytail-2": [131, 195],
    "s6-p-binoc-0": [109, 200],
    "s6-p-binoc-1": [107, 199],
    "s6-p-binoc-2": [124, 198],
    "s6-p-silver-0": [93, 200],
    "s6-p-silver-1": [94, 196],
    "s6-p-silver-2": [114, 201],
    "s6-p-freckles-0": [109, 200],
    "s6-p-freckles-1": [111, 197],
    "s6-p-freckles-2": [115, 197],
  };
function K(e) {
  let [t, n] = de[e];
  return { url: ue.get(e) ?? ``, w: t, h: n };
}
var q = (e) => e,
  J = q({
    "--table": `url(${K(`s6-table`).url})`,
    "--table-phone": `url(${K(`s6-table-phone`).url})`,
  });
function Y(e) {
  let t = (0, d.c)(8),
    { name: n, className: r, style: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = K(n)), (t[0] = n), (t[1] = a));
  let { url: o, w: s, h: c } = a,
    l;
  return (
    t[2] !== r || t[3] !== c || t[4] !== i || t[5] !== o || t[6] !== s
      ? ((l = (0, f.jsx)(`img`, {
          className: r,
          style: i,
          src: o,
          width: s,
          height: c,
          alt: ``,
          loading: `lazy`,
          decoding: `async`,
        })),
        (t[2] = r),
        (t[3] = c),
        (t[4] = i),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function X(e) {
  let t = (0, d.c)(4),
    { who: n, pose: r, className: i, style: a } = e,
    o = `s6-p-${n}-${r === void 0 ? 0 : r}`,
    s;
  return (
    t[0] !== i || t[1] !== a || t[2] !== o
      ? ((s = (0, f.jsx)(Y, { name: o, className: i, style: a })),
        (t[0] = i),
        (t[1] = a),
        (t[2] = o),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function Z(e) {
  let t = (0, d.c)(2),
    { color: n } = e,
    r = `s6-tile-${n}`,
    i;
  return (
    t[0] === r
      ? (i = t[1])
      : ((i = (0, f.jsx)(Y, { name: r })), (t[0] = r), (t[1] = i)),
    i
  );
}
function Q(e) {
  let t = (0, d.c)(4),
    { people: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(fe)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, f.jsx)(`span`, { className: `hr-people`, children: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function fe(e) {
  let [t, n] = e;
  return (0, f.jsx)(
    X,
    { who: t, pose: n, className: t === `hero` ? `hr-hero` : void 0 },
    `${t}-${n}`,
  );
}
function $(e) {
  let t = (0, d.c)(13),
    { color: n, people: r, label: i, you: a, className: o, style: s } = e,
    c = a === void 0 ? !1 : a,
    l = `hr-disc ${o === void 0 ? `` : o}`,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = (0, f.jsx)(Z, { color: n })), (t[0] = n), (t[1] = u));
  let p;
  t[2] === r
    ? (p = t[3])
    : ((p = (0, f.jsx)(Q, { people: r })), (t[2] = r), (t[3] = p));
  let m;
  t[4] !== i || t[5] !== c
    ? ((m =
        i &&
        (0, f.jsx)(`span`, {
          className: c ? `hr-tag you` : `hr-tag`,
          children: i,
        })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = m))
    : (m = t[6]);
  let h;
  return (
    t[7] !== s || t[8] !== l || t[9] !== u || t[10] !== p || t[11] !== m
      ? ((h = (0, f.jsxs)(`div`, {
          className: l,
          style: s,
          children: [u, p, m],
        })),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var pe = [
  {
    question: `Is OpenNoillirk free?`,
    answer: `Yes. OpenNoillirk is a free daily game with no account and no paywall, and Unlimited is free too. Start from the game at the top of this page.`,
  },
  {
    question: `Can I play OpenNoillirk on my phone?`,
    answer: `Yes. OpenNoillirk runs in a phone browser, and the answer box stays above the on-screen keyboard for the whole run. Press Go, or your keyboard's Go key, to submit.`,
  },
  {
    question: `How long does a OpenNoillirk Daily take?`,
    answer: `Ten prompts with up to 30 seconds each is at most five minutes of play, plus a few seconds of reveal after each guess. Go faster to finish sooner, or tap the table to speed up a reveal.`,
  },
  {
    question: `How is OpenNoillirk different from trivia games?`,
    answer: `Most trivia games have one right answer and reward whoever finds it first. OpenNoillirk accepts many right answers and rewards the one most people would give. Knowing a lot helps, but thinking like everyone else wins.`,
  },
  {
    question: `What kind of prompts does OpenNoillirk ask?`,
    answer: `Prompts come from everyday categories: places, food, music, books, sport and the human body. Each one names a category, such as a capital city in Europe or a Pixar film, and accepts many answers. Your job is to guess the one most people would say first.`,
  },
  {
    question: `How does OpenNoillirk decide which answer is #1?`,
    answer: `Every prompt has a board: our estimate, made in advance, of how 100 people would respond, from the most common answer down to the tenth. Where your guess sits on that board decides its band. The board isn't a live count of other players, which is why it is marked (est.).`,
  },
  {
    question: `Why didn't OpenNoillirk accept my guess?`,
    answer: `Each prompt has a prepared list of accepted answers. Common variants, plurals and small typos are recognised, but no list is complete, so try another while the clock runs. If you pass or run out of time, the result card has a “Should this count? Tell us” button for answers you think we missed, and every guess OpenNoillirk turns down is counted anonymously so we can add the ones that should count.`,
  },
  {
    question: `How do challenge links work?`,
    answer: `Every share carries a short link like opennoillirk.com/c/k7Qm2x9A. Your friend plays the same prompts and sees your pick after each of theirs, and everyone who plays that link lands on one board. To make the board and today's percentile work we keep each finished run: your nickname, answers and scores, and a random id created in your browser. There is no account and no email.`,
  },
  {
    question: `Does OpenNoillirk save my progress?`,
    answer: `Your Daily progress, streak and settings are saved in this browser when storage is available. They don't follow you to another device or a private window, and clearing this site's data removes them.`,
  },
  {
    question: `Can I see the whole OpenNoillirk board?`,
    answer: `After each guess you see the top five of that prompt's board. The rest stays hidden so a prompt is still worth playing when it comes round again.`,
  },
  {
    question: `Is OpenNoillirk affiliated with Daily Games?`,
    answer: `No. ${c} The game uses authorized reference assets and independently hosted services.`,
  },
];
function me({
  id: e = `faq`,
  title: t = `OpenNoillirk FAQ`,
  dek: n = `Short answers to what people ask before their first OpenNoillirk run.`,
  items: r = pe,
  art: i = (0, f.jsx)($, { color: `cream`, people: [[`hero`, 3]] }),
}) {
  return (0, f.jsxs)(`section`, {
    id: e,
    className: `hr-section hr-faq`,
    "aria-labelledby": `${e}-title`,
    children: [
      (0, f.jsxs)(`div`, {
        className: `hr-faq-head`,
        children: [
          (0, f.jsx)(`h2`, { id: `${e}-title`, children: t }),
          (0, f.jsx)(`p`, { className: `hr-dek`, children: n }),
          (0, f.jsx)(`div`, {
            className: `hr-faq-art`,
            "aria-hidden": `true`,
            children: i,
          }),
        ],
      }),
      (0, f.jsx)(`div`, {
        className: `hr-faq-list`,
        children: r.map(({ question: t, answer: n }, r) =>
          (0, f.jsxs)(
            `details`,
            {
              name: e,
              open: r === 0,
              children: [
                (0, f.jsxs)(`summary`, {
                  children: [
                    (0, f.jsx)(`h3`, { children: t }),
                    (0, f.jsx)(`span`, {
                      className: `hr-faq-icon`,
                      "aria-hidden": `true`,
                    }),
                  ],
                }),
                (0, f.jsx)(`p`, { children: n }),
              ],
            },
            t,
          ),
        ),
      }),
    ],
  });
}
function he(e) {
  let t = (0, d.c)(14),
    { title: n, children: r } = e,
    i = n === void 0 ? `Ten prompts. One crowd. How many will you pull?` : n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, f.jsx)(`h2`, { id: `last-call-title`, children: i })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o =
        r ??
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(`p`, {
              children: `Play today's ten prompts, or warm up in Unlimited. The answers most people would give win the most.`,
            }),
            (0, f.jsx)(h, {}),
          ],
        })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, f.jsxs)(`div`, {
        className: `hr-last-card`,
        children: [a, o],
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, f.jsx)(X, {
        who: `sunhat`,
        pose: 1,
        className: `hr-looker`,
        style: q({ "--l": `8%`, "--b": `22%` }),
      })),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, f.jsx)(X, {
        who: `cap`,
        pose: 2,
        className: `hr-looker`,
        style: q({ "--l": `20%`, "--b": `8%` }),
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, f.jsx)(X, {
        who: `glasses`,
        pose: 1,
        className: `hr-looker`,
        style: q({ "--l": `30%`, "--b": `30%` }),
      })),
      (t[9] = u))
    : (u = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, f.jsx)(X, {
        who: `beret`,
        pose: 2,
        className: `hr-looker`,
        style: q({ "--l": `76%`, "--b": `10%` }),
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, f.jsxs)(`div`, {
        className: `hr-last-scene`,
        "aria-hidden": `true`,
        children: [
          c,
          l,
          u,
          p,
          (0, f.jsx)($, {
            color: `gold`,
            className: `hr-last-you`,
            people: [[`hero`, 2]],
          }),
        ],
      })),
      (t[11] = m))
    : (m = t[11]);
  let g;
  return (
    t[12] === s
      ? (g = t[13])
      : ((g = (0, f.jsxs)(`section`, {
          className: `hr-last`,
          style: J,
          "aria-labelledby": `last-call-title`,
          children: [s, m],
        })),
        (t[12] = s),
        (t[13] = g)),
    g
  );
}
export {
  Q as a,
  q as c,
  X as i,
  h as l,
  he as n,
  J as o,
  $ as r,
  Z as s,
  me as t,
  m as u,
};
