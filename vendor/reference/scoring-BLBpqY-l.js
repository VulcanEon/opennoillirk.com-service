import { t as e } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t } from "./link-CFi9sgXA.js";
import { t as n } from "./jsx-runtime-D_h4s5mO.js";
import { c as r, n as i } from "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./seo-content-BRJA07rn.js";
import {
  A as a,
  G as o,
  L as s,
  M as c,
  P as l,
  i as u,
  o as ee,
} from "./rules-DxwvjuIt.js";
import "./main-BXKF3zmu.js";
import { n as d, t as te } from "./rules-example-BI2v3vrf.js";
import { n as ne, t as re } from "./rules-page-CVd_SAlj.js";
var f = e(),
  p = n(),
  m = [1, 2, 3, 4],
  h = 3,
  g = new Set([2, 5, 8, 10]),
  ie = a.reduce((e, t) => e + c(l(4, t)), 0),
  _ = s(3),
  ae = [
    [`Paris`, 4],
    [`London`, 3],
    [`Berlin`, 2],
    [`Amsterdam`, 1],
    [`Skopje`, 0],
  ],
  v = {
    outlier: `Three or more #1 answers.`,
    wildcard: `Two or more #1 answers and three or more Off the Board.`,
    "free-thinker": `An average band of 1.8 or more.`,
    "side-stepper": `An average band of 1.2 or more.`,
    "trend-spotter": `An average band of 0.6 or more.`,
    "crowd-pleaser": `Anything lower.`,
  },
  y = { 4: `#1`, 3: `#2–#3`, 2: `#4–#5`, 1: `#6–#10`, 0: `Off the board` };
function b(e) {
  let t = (0, f.c)(5),
    { band: n } = e,
    i = `var(--band-${n})`,
    a;
  t[0] === i ? (a = t[1]) : ((a = r({ "--c": i })), (t[0] = i), (t[1] = a));
  let s = o[n],
    c;
  return (
    t[2] !== a || t[3] !== s.name
      ? ((c = (0, p.jsx)(`span`, {
          className: `rules-band`,
          style: a,
          children: s.name,
        })),
        (t[2] = a),
        (t[3] = s.name),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function oe() {
  let e = (0, f.c)(2),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, p.jsx)(`h2`, {
        id: `climb-title`,
        children: `On the sky climb, points become height`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, p.jsxs)(`section`, {
          className: `hr-section`,
          "aria-labelledby": `climb-title`,
          children: [
            n,
            (0, p.jsxs)(`div`, {
              className: `hr-prose`,
              children: [
                (0, p.jsxs)(`p`, {
                  children: [
                    `The sky climb, the stage OpenNoillirk starts you on, scores every answer exactly as above. There the points lift our krill instead of pulling people: the more a run has scored, the higher it is, so a run only ever goes up. `,
                    (0, p.jsx)(t, { to: `/sky-climb`, children: `Sky Climb` }),
                    ` names the 18 zones on the way, from a forest pond up to orbit.`,
                  ],
                }),
                (0, p.jsx)(`p`, {
                  children: `A #1 Answer in question 1 is worth 100 points and reaches 30m. A perfect Daily of 2,500 points reaches 14.0 km. The result panel and the end screen show the height beside the points, and a challenge played on the sky climb compares heights, so the run with more points wins.`,
                }),
              ],
            }),
          ],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function x() {
  let e = (0, f.c)(35),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, p.jsx)(`h2`, {
        id: `bands-title`,
        children: `Five bands, from Off the Board to #1 Answer`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r, s;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, p.jsx)(`p`, {
        children: `Every prompt has a board: our estimate, made in advance, of how 100 people would answer it, from the most common answer (#1) down to #10. An answer's place on the board puts it in one of five bands, and the band sets its base points. Any other accepted answer is Off the Board: still right, but worth the least.`,
      })),
      (s = (0, p.jsx)(`p`, {
        children: `For “Name a capital city in Europe”, Paris is the #1 Answer, London a Runner-up, Berlin in the Top 5, Amsterdam in the Top 10 and Skopje Off the Board.`,
      })),
      (e[1] = r),
      (e[2] = s))
    : ((r = e[1]), (s = e[2]));
  let h;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, p.jsxs)(`div`, {
        className: `hr-prose`,
        children: [
          r,
          s,
          (0, p.jsxs)(`p`, {
            children: [
              `The board describes answers, not players. It isn't a live count of what people typed today, which is why the “Our board” list on the result card is marked (est.).`,
              ` `,
              (0, p.jsx)(t, {
                to: `/how-to-play`,
                children: `How to play OpenNoillirk`,
              }),
              ` walks through that card.`,
            ],
          }),
        ],
      })),
      (e[3] = h))
    : (h = e[3]);
  let g;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `bands-title`,
        children: [
          n,
          (0, p.jsxs)(`div`, {
            className: `rules-split`,
            children: [
              h,
              (0, p.jsxs)(`table`, {
                className: `rules-table`,
                children: [
                  (0, p.jsx)(`caption`, { children: `The five bands` }),
                  (0, p.jsx)(`thead`, {
                    children: (0, p.jsxs)(`tr`, {
                      children: [
                        (0, p.jsx)(`th`, { scope: `col`, children: `Band` }),
                        (0, p.jsx)(`th`, {
                          scope: `col`,
                          children: `Place on the board`,
                        }),
                        (0, p.jsx)(`th`, {
                          scope: `col`,
                          children: `Base points`,
                        }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(`tbody`, { children: o.map(ce) }),
                ],
              }),
            ],
          }),
        ],
      })),
      (e[4] = g))
    : (g = e[4]);
  let v;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, p.jsx)(`h2`, {
        id: `weights-title`,
        children: `Later questions count more`,
      })),
      (e[5] = v))
    : (v = e[5]);
  let y;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, p.jsx)(`div`, { className: `hr-qrow`, children: a.map(D) })),
      (e[6] = y))
    : (y = e[6]);
  let b;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, p.jsxs)(`div`, {
        "aria-hidden": `true`,
        children: [
          y,
          (0, p.jsx)(`div`, { className: `hr-wkey`, children: m.map(E) }),
        ],
      })),
      (e[7] = b))
    : (b = e[7]);
  let x;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `weights-title`,
        children: [
          v,
          (0, p.jsxs)(`div`, {
            className: `hr-weigh`,
            children: [
              b,
              (0, p.jsxs)(`div`, {
                className: `hr-prose`,
                children: [
                  (0, p.jsxs)(`p`, {
                    children: [
                      `In a Daily, questions 1 and 2 count once, 3 to 5 twice, 6 to 8 three times and 9 and 10 four times, and the question card shows ×2, ×3 or ×4. A round scores its band's base points times the question's weight, so a Runner-up is worth 75 points in question 2, 150 in question 5, 225 in question 8 and 300 in question 10. Ten #1 Answers make a perfect Daily of `,
                      (0, p.jsx)(`strong`, { children: `2,500 points` }),
                      `.`,
                    ],
                  }),
                  (0, p.jsx)(`p`, {
                    children: `Unlimited uses the same pattern and starts it again every ten questions, so question 11 counts once and question 17 three times.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (e[8] = x))
    : (x = e[8]);
  let O;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, p.jsx)(`h2`, {
        id: `people-title`,
        children: `One person for every 25 points`,
      })),
      (e[9] = O))
    : (O = e[9]);
  let k;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, p.jsx)(`p`, {
        children: `The crowd is 100 people. After each answer, one of them joins you for every 25 points you scored, rounded down: they walk over to your home tile and stay there for the rest of the run.`,
      })),
      (e[10] = k))
    : (k = e[10]);
  let A;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, p.jsxs)(`div`, {
        className: `hr-prose`,
        children: [
          k,
          (0, p.jsxs)(`p`, {
            children: [
              `An Off the Board answer pulls nobody until the ×3 questions, where its 30 points are worth one person. Ten #1 Answers pull the whole crowd: a perfect Daily ends with all`,
              ` `,
              (0, p.jsx)(`strong`, { children: ie }),
              ` on your home tile.`,
            ],
          }),
          (0, p.jsx)(`p`, {
            children: `In Unlimited a fresh 100 sit down whenever the table runs short, so a long run can pull more than 100.`,
          }),
        ],
      })),
      (e[11] = A))
    : (A = e[11]);
  let j, M;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `people-title`,
        children: [
          O,
          (0, p.jsxs)(`div`, {
            className: `rules-split`,
            children: [
              A,
              (0, p.jsxs)(`table`, {
                className: `rules-table`,
                children: [
                  (0, p.jsx)(`caption`, {
                    children: `People who join you for one answer`,
                  }),
                  (0, p.jsx)(`thead`, {
                    children: (0, p.jsxs)(`tr`, {
                      children: [
                        (0, p.jsx)(`th`, { scope: `col`, children: `Band` }),
                        m.map(T),
                      ],
                    }),
                  }),
                  (0, p.jsx)(`tbody`, { children: o.map(w) }),
                ],
              }),
            ],
          }),
        ],
      })),
      (M = (0, p.jsx)(oe, {})),
      (e[12] = j),
      (e[13] = M))
    : ((j = e[12]), (M = e[13]));
  let N, P;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, p.jsx)(`h2`, {
        id: `round-title`,
        children: `One round, worked out`,
      })),
      (P = (0, p.jsx)(`p`, {
        className: `hr-dek`,
        children: `Take question 4 of a Daily, which counts twice, and the prompt “Name a capital city in Europe”. Here is what five different answers score.`,
      })),
      (e[14] = N),
      (e[15] = P))
    : ((N = e[14]), (P = e[15]));
  let F;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, p.jsxs)(`table`, {
        className: `rules-table rules-table-wide`,
        children: [
          (0, p.jsxs)(`caption`, { children: [`Question 4, ×`, _] }),
          (0, p.jsx)(`thead`, {
            children: (0, p.jsxs)(`tr`, {
              children: [
                (0, p.jsx)(`th`, { scope: `col`, children: `Answer` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `Band` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `Points` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `People` }),
              ],
            }),
          }),
          (0, p.jsx)(`tbody`, { children: ae.map(C) }),
        ],
      })),
      (e[16] = F))
    : (F = e[16]);
  let I;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = l(4, _)), (e[17] = I))
    : (I = e[17]);
  let L;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = c(l(4, _))), (e[18] = L))
    : (L = e[18]);
  let R;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = l(0, _)), (e[19] = R))
    : (R = e[19]);
  let z;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `round-title`,
        children: [
          N,
          P,
          F,
          (0, p.jsx)(`div`, {
            className: `hr-prose rules-after`,
            children: (0, p.jsxs)(`p`, {
              children: [
                `Answer Paris and the result card reads #1 Answer, +`,
                I,
                `, as`,
                ` `,
                L,
                ` people walk over to your home tile. Answer Skopje and you still get `,
                R,
                ` points, but nobody joins you, because `,
                l(0, _),
                ` is less than 25.`,
              ],
            }),
          }),
        ],
      })),
      (e[20] = z))
    : (z = e[20]);
  let B, V;
  e[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, p.jsx)(`h2`, {
        id: `run-title`,
        children: `A whole Daily, added up`,
      })),
      (V = (0, p.jsx)(`p`, {
        className: `hr-dek`,
        children: `A run adds its rounds together. Here is a Daily with a bit of everything, including a pass at question 8.`,
      })),
      (e[21] = B),
      (e[22] = V))
    : ((B = e[21]), (V = e[22]));
  let H;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, p.jsxs)(`table`, {
        className: `rules-table rules-table-wide`,
        children: [
          (0, p.jsx)(`caption`, {
            children: `One Daily, question by question`,
          }),
          (0, p.jsx)(`thead`, {
            children: (0, p.jsxs)(`tr`, {
              children: [
                (0, p.jsx)(`th`, { scope: `col`, children: `Question` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `Weight` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `Band` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `Points` }),
                (0, p.jsx)(`th`, { scope: `col`, children: `People` }),
              ],
            }),
          }),
          (0, p.jsx)(`tbody`, { children: te.map(S) }),
          (0, p.jsx)(`tfoot`, {
            children: (0, p.jsxs)(`tr`, {
              children: [
                (0, p.jsx)(`th`, {
                  scope: `row`,
                  colSpan: 3,
                  children: `Total`,
                }),
                (0, p.jsx)(`td`, { children: u(d.points) }),
                (0, p.jsx)(`td`, { children: d.people }),
              ],
            }),
          }),
        ],
      })),
      (e[23] = H))
    : (H = e[23]);
  let U;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = u(d.points)), (e[24] = U))
    : (U = e[24]);
  let W;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `run-title`,
        children: [
          B,
          V,
          H,
          (0, p.jsx)(`div`, {
            className: `hr-prose rules-after`,
            children: (0, p.jsxs)(`p`, {
              children: [
                `The end card reads “You pulled `,
                d.people,
                ` of 100”, with `,
                U,
                ` `,
                `points and `,
                d.outliers,
                ` `,
                d.outliers === 1 ? `#1 answer` : `#1 answers`,
                `. Its title is `,
                d.title.title,
                `, for the reason in the next section.`,
              ],
            }),
          }),
        ],
      })),
      (e[25] = W))
    : (W = e[25]);
  let G, K;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, p.jsx)(`h2`, {
        id: `titles-title`,
        children: `How you earn a title`,
      })),
      (K = (0, p.jsx)(`p`, {
        className: `hr-dek`,
        children: `Every run ends with a title. The game checks these rules in order and gives you the first one that fits.`,
      })),
      (e[26] = G),
      (e[27] = K))
    : ((G = e[26]), (K = e[27]));
  let q;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, p.jsx)(`ol`, {
        className: `rules-titles`,
        children: Object.values(ee).map(se),
      })),
      (e[28] = q))
    : (q = e[28]);
  let J;
  e[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `titles-title`,
        children: [
          G,
          K,
          q,
          (0, p.jsx)(`div`, {
            className: `hr-prose rules-after`,
            children: (0, p.jsxs)(`p`, {
              children: [
                `For the average, each answer counts as Off the Board 0, Top 10 1, Top 5 2, Runner-up 3 or #1 Answer 4, and a pass or a timeout as 0. A miss pulls the average down, but it never counts as an Off the Board answer for Hit or Miss. The Daily above has`,
                ` `,
                d.outliers,
                ` `,
                d.outliers === 1 ? `#1 answer` : `#1 answers`,
                ` and averages`,
                ` `,
                d.mean.toFixed(1),
                `, so its title is `,
                d.title.title,
                `.`,
              ],
            }),
          }),
        ],
      })),
      (e[29] = J))
    : (J = e[29]);
  let Y;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, p.jsx)(`h2`, {
        id: `percentile-title`,
        children: `How you compare with today's players`,
      })),
      (e[30] = Y))
    : (Y = e[30]);
  let X;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `percentile-title`,
        children: [
          Y,
          (0, p.jsxs)(`div`, {
            className: `hr-prose`,
            children: [
              (0, p.jsx)(`p`, {
                children: `After a Daily, the result panel can tell you how your run compares with everyone else's that day. It counts the people you pulled against every finished run of the same Daily that reached us, yours included. “Better than 72% of today's players” means 72% of those runs pulled fewer people than yours; on a phone and on the share card it reads “Better than 72% today”.`,
              }),
              (0, p.jsx)(`p`, {
                children: `The first player of the day sees “First to finish today”, and while ten or fewer runs are in, the line reads “One of the first 10 players today”. Below 10% it stays hidden. It shows for today's Daily only, not for Unlimited or an older Daily.`,
              }),
            ],
          }),
        ],
      })),
      (e[31] = X))
    : (X = e[31]);
  let Z;
  e[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, p.jsx)(`h2`, {
        id: `challenge-title`,
        children: `What a challenge compares`,
      })),
      (e[32] = Z))
    : (Z = e[32]);
  let Q;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, p.jsxs)(`section`, {
        className: `hr-section`,
        "aria-labelledby": `challenge-title`,
        children: [
          Z,
          (0, p.jsxs)(`div`, {
            className: `hr-prose`,
            children: [
              (0, p.jsx)(`p`, {
                children: `A challenge compares people pulled, not points. When you play a friend's challenge, the end reads “You beat Mia 38–25”, “Mia takes it, 38–25” or “Dead heat with Mia, 25–25”. After a loss it tells you how close you came: “14 more people and you'd have taken it.”`,
              }),
              (0, p.jsx)(`p`, {
                children: `The challenge board lists everyone who played that link, most people first. Equal counts are split by points, then by who played first. Everyone gets the same prompts in the same order, so the weights line up too: question 9 counts four times for all of you.`,
              }),
            ],
          }),
        ],
      })),
      (e[33] = Q))
    : (Q = e[33]);
  let $;
  return (
    e[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? (($ = (0, p.jsxs)(re, {
          title: `How OpenNoillirk scoring works`,
          dek: `Every accepted answer scores points, and most pull people from the crowd. How many depends on two things: where the answer sits on our board, and which question you are on. Here is the whole system, with the real numbers.`,
          children: [
            g,
            x,
            j,
            M,
            z,
            W,
            J,
            X,
            Q,
            (0, p.jsxs)(i, {
              title: `See how many you can pull`,
              children: [
                (0, p.jsxs)(`p`, {
                  children: [
                    `New to OpenNoillirk? Start with `,
                    (0, p.jsx)(t, {
                      to: `/how-to-play`,
                      children: `how to play`,
                    }),
                    `, or go straight to today's ten.`,
                  ],
                }),
                (0, p.jsx)(ne, {}),
              ],
            }),
          ],
        })),
        (e[34] = $))
      : ($ = e[34]),
    $
  );
}
function se(e) {
  return (0, p.jsxs)(
    `li`,
    {
      children: [
        (0, p.jsx)(`span`, {
          className: `rules-title-name`,
          children: e.title,
        }),
        (0, p.jsx)(`span`, { children: v[e.id] }),
        (0, p.jsxs)(`span`, {
          className: `rules-title-line`,
          children: [`“`, e.line, `”`],
        }),
      ],
    },
    e.id,
  );
}
function S(e, t) {
  return (0, p.jsxs)(
    `tr`,
    {
      children: [
        (0, p.jsx)(`th`, { scope: `row`, children: t + 1 }),
        (0, p.jsxs)(`td`, { children: [`×`, e.weight] }),
        (0, p.jsx)(`td`, {
          children:
            e.band === null ? `Passed` : (0, p.jsx)(b, { band: e.band }),
        }),
        (0, p.jsx)(`td`, { children: e.points }),
        (0, p.jsx)(`td`, { children: e.people }),
      ],
    },
    e.promptId,
  );
}
function C(e) {
  let [t, n] = e,
    r = l(n, _);
  return (0, p.jsxs)(
    `tr`,
    {
      children: [
        (0, p.jsx)(`th`, { scope: `row`, children: t }),
        (0, p.jsx)(`td`, { children: (0, p.jsx)(b, { band: n }) }),
        (0, p.jsxs)(`td`, { children: [o[n].points, ` × `, _, ` = `, r] }),
        (0, p.jsx)(`td`, { children: c(r) }),
      ],
    },
    t,
  );
}
function w(e) {
  return (0, p.jsxs)(
    `tr`,
    {
      children: [
        (0, p.jsx)(`th`, {
          scope: `row`,
          children: (0, p.jsx)(b, { band: e.id }),
        }),
        m.map((t) => (0, p.jsx)(`td`, { children: c(l(e.id, t)) }, t)),
      ],
    },
    e.id,
  );
}
function T(e) {
  return (0, p.jsxs)(
    `th`,
    { scope: `col`, children: [`×`, e, ` question`] },
    e,
  );
}
function E(e) {
  return (0, p.jsxs)(`span`, { children: [`×`, e] }, e);
}
function D(e, t) {
  let n = t + 1,
    r = g.has(n);
  return (0, p.jsxs)(
    `div`,
    {
      className: r ? `hr-q hit` : `hr-q`,
      "data-w": e,
      children: [
        (0, p.jsx)(`em`, { children: r ? l(h, e) : `` }),
        (0, p.jsx)(`i`, {}),
        (0, p.jsx)(`span`, { "data-n": n }),
      ],
    },
    n,
  );
}
function ce(e) {
  return (0, p.jsxs)(
    `tr`,
    {
      children: [
        (0, p.jsx)(`th`, {
          scope: `row`,
          children: (0, p.jsx)(b, { band: e.id }),
        }),
        (0, p.jsx)(`td`, { children: y[e.id] }),
        (0, p.jsx)(`td`, { children: e.points }),
      ],
    },
    e.id,
  );
}
var O = x;
export { O as component };
