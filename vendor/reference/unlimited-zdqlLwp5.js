import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import { n as a, t as o, u as s } from "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./seo-content-BRJA07rn.js";
import "./climb-head-B90-o7R9.js";
import { n as c, t as l } from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import "./stage-choice-DO9JGjKK.js";
import "./main-BXKF3zmu.js";
import "./icons-DDwzIPdf.js";
import "./game-ui-DEL71d58.js";
import { i as u, o as d, s as f } from "./stage-toggle-LI6FLr3n.js";
import { n as p, t as m } from "./home-sections-CGYgZ4JZ.js";
import { n as h } from "./intro-CCqPM7kD.js";
var g = n(),
  _ = e(t()),
  v = [
    [`Name a combat sport or martial art`, 2],
    [`Name a national park in the United States`, 2],
    [`Name a book of the Bible`, 2],
    [`Name a Beyoncé song`, 2],
    [`Name a kind of nut`, 2],
    [`Name a breakfast cereal`, 3],
    [`Name a sport or event contested at the Winter Olympics`, 3],
    [`Name a country that has hosted the men's FIFA World Cup`, 3],
    [`Name a variety of apple`, 3],
    [`Name a country whose name ends in the letters “ia”`, 3],
  ],
  y = [
    {
      question: `Is OpenNoillirk Unlimited free?`,
      answer: `Yes. OpenNoillirk Unlimited has no paywall, no account and no limit on how many runs you play.`,
    },
    {
      question: `Does OpenNoillirk Unlimited affect my Daily streak?`,
      answer: `No. Streaks count finished Dailies only. Unlimited runs are for practice and for fun and never touch your streak; a finished 10- or 20-prompt run is kept so its challenge link and board work.`,
    },
    {
      question: `Can I pause a run and come back later?`,
      answer: `Not yet. An OpenNoillirk Unlimited run lives in the page, so closing or reloading it ends the run. The length you chose is remembered for next time.`,
    },
    {
      question: `How long does an OpenNoillirk Unlimited run take?`,
      answer: `Each prompt gives you up to 30 seconds, so a 10-prompt run is at most five minutes of answering and a 20-prompt run at most ten, plus a few seconds of reveal after each answer. Endless lasts until you stop.`,
    },
    {
      question: `Are OpenNoillirk Unlimited prompts different from the Daily?`,
      answer: `They come from the same question bank, in a new order for every run, so you may meet a prompt you have seen in a Daily. It scores the same either way.`,
    },
    {
      question: `Can I play OpenNoillirk Unlimited with friends?`,
      answer: `Yes. Finish a 10- or 20-prompt run and share its challenge link. Your friend plays the same prompts in the same order and sees your answers as they go.`,
    },
    {
      question: `Can I play OpenNoillirk Unlimited on my phone?`,
      answer: `Yes. It runs in a phone browser, and the answer box stays above the on-screen keyboard for the whole run.`,
    },
    {
      question: `Is there really no limit?`,
      answer: `Only the question bank. An endless run plays every prompt once before any of them comes round again, then shuffles the bank and keeps going.`,
    },
  ],
  b = i();
function x(e) {
  let t = (0, g.c)(10),
    { file: n, width: r, height: i, small: a, sizes: o, alt: s } = e,
    c;
  t[0] !== n || t[1] !== a
    ? ((c = n.replace(`.webp`, `-${a}.webp`)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u = `/images/unlimited/${n}`,
    d = `/images/unlimited/${l} ${a}w, /images/unlimited/${n} ${r}w`,
    f;
  return (
    t[3] !== s ||
    t[4] !== i ||
    t[5] !== o ||
    t[6] !== u ||
    t[7] !== d ||
    t[8] !== r
      ? ((f = (0, b.jsx)(`img`, {
          src: u,
          srcSet: d,
          sizes: o,
          width: r,
          height: i,
          alt: s,
          loading: `lazy`,
          decoding: `async`,
        })),
        (t[3] = s),
        (t[4] = i),
        (t[5] = o),
        (t[6] = u),
        (t[7] = d),
        (t[8] = r),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var S = [
  {
    mark: `10`,
    title: `A full run`,
    text: `Shaped like the Daily: questions 1 and 2 count once, 3 to 5 twice, 6 to 8 three times and 9 and 10 four times. About five minutes, with a challenge link at the end.`,
  },
  {
    mark: `20`,
    title: `Two laps`,
    text: `The weights start again at question 11, so the second half is a fresh climb. The longest run you can send as a challenge.`,
  },
  {
    mark: `∞`,
    title: `Endless`,
    text: `Keeps going until you stop. The ×1 to ×4 pattern repeats every ten questions, and your points and people keep adding up.`,
  },
];
function C() {
  let e = (0, g.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, b.jsx)(`p`, {
          className: `ur-note`,
          children: `On the sky climb there is no crowd to run out of: your points lift our krill on its balloons instead. A #1 Answer in question 1 is 100 points and takes it to 30m, the 2,500 points of a perfect first ten reach 14.0 km, and an endless run keeps climbing from there.`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var w = [1, 2, 3],
  T = { 1: `easy`, 2: `medium`, 3: `hard` };
function E(e) {
  let t = (0, g.c)(26),
    { focused: n } = e,
    i,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, b.jsx)(`h2`, {
        id: `unlimited-trivia-title`,
        children: `Unlimited play with no daily cap`,
      })),
      (c = (0, b.jsx)(`p`, {
        className: `hr-lede-big`,
        children: `OpenNoillirk Unlimited is the same guess-the-crowd game with the cap taken off.`,
      })),
      (t[0] = i),
      (t[1] = c))
    : ((i = t[0]), (c = t[1]));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, b.jsxs)(`div`, {
        children: [
          i,
          c,
          (0, b.jsxs)(`div`, {
            className: `hr-prose`,
            children: [
              (0, b.jsx)(`p`, {
                children: `The OpenNoillirk Daily is scarce on purpose: ten prompts, then you wait for midnight. That scarcity is what makes a streak mean something, but it is a slow way to learn how the crowd thinks. OpenNoillirk Unlimited is the practice room, and the place to go when ten prompts are over far too soon.`,
              }),
              (0, b.jsx)(`p`, {
                children: `It is free, with no paywall and no account. Pick a length, press Play and keep going for as long as you like. Nothing you do in Unlimited touches your Daily streak.`,
              }),
            ],
          }),
        ],
      })),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, b.jsxs)(`section`, {
        id: `unlimited-trivia`,
        className: `hr-section ur-lede`,
        "aria-labelledby": `unlimited-trivia-title`,
        children: [
          l,
          (0, b.jsxs)(`figure`, {
            className: `ur-figure`,
            children: [
              (0, b.jsx)(x, {
                file: `play-again.webp`,
                width: 1e3,
                height: 800,
                small: 500,
                sizes: `(max-width: 767px) calc(100vw - 32px), 460px`,
                alt: `A fresh stack of round paper tiles and a row of wooden figurines lined up to start again, a raspberry one in front.`,
              }),
              (0, b.jsx)(`figcaption`, {
                children: `Every run ends the same way: count who joined you, then Play again.`,
              }),
            ],
          }),
        ],
      })),
      (t[3] = u))
    : (u = t[3]);
  let d, f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, b.jsx)(`h2`, {
        id: `run-lengths-title`,
        children: `Choose 10, 20 or endless`,
      })),
      (f = (0, b.jsx)(`p`, {
        className: `hr-dek`,
        children: `Every OpenNoillirk Unlimited run keeps the Daily's rules: 30 seconds a prompt, five bands from Off the Board to #1 Answer, and questions that count more as the run goes on.`,
      })),
      (t[4] = d),
      (t[5] = f))
    : ((d = t[4]), (f = t[5]));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, b.jsxs)(`figure`, {
        className: `ur-figure`,
        children: [
          (0, b.jsx)(x, {
            file: `endless-run.webp`,
            width: 1200,
            height: 900,
            small: 600,
            sizes: `(max-width: 767px) calc(100vw - 32px), 640px`,
            alt: `A raspberry figurine hops along a line of round tiles that curves away across a wooden table.`,
          }),
          (0, b.jsx)(`figcaption`, {
            children: `An endless run keeps going, prompt after prompt, until you stop.`,
          }),
        ],
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, b.jsxs)(`section`, {
        id: `run-lengths`,
        className: `hr-section`,
        "aria-labelledby": `run-lengths-title`,
        children: [
          d,
          f,
          (0, b.jsxs)(`div`, {
            className: `ur-lengths`,
            children: [
              p,
              (0, b.jsxs)(`div`, {
                children: [
                  (0, b.jsx)(`ul`, {
                    className: `ur-length-list`,
                    children: S.map(O),
                  }),
                  (0, b.jsx)(`p`, {
                    className: `ur-note`,
                    children: `In a long run the table can run short of people. When it does, a fresh 100 sit down and your count keeps rising.`,
                  }),
                  (0, b.jsx)(C, {}),
                ],
              }),
            ],
          }),
        ],
      })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, b.jsx)(`h2`, {
        id: `prompts-title`,
        children: `How OpenNoillirk Unlimited picks its prompts`,
      })),
      (t[8] = h))
    : (h = t[8]);
  let _;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, b.jsxs)(`div`, {
        children: [
          h,
          (0, b.jsxs)(`div`, {
            className: `hr-prose`,
            children: [
              (0, b.jsx)(`p`, {
                children: `Each run shuffles the whole question bank with its own random seed. The first ten prompts are put in order from easy to hard, so a run warms up before it gets difficult; after that the order is the shuffle. A prompt is easy when lots of people would give its #1 answer, and hard when the crowd splits.`,
              }),
              (0, b.jsx)(`p`, {
                children: `An endless run plays every prompt in the bank once before any of them comes round again. Then it shuffles the bank again and carries on.`,
              }),
              (0, b.jsx)(`p`, {
                children: `The prompts come from the same bank as the Daily and score the same way, so a #1 Answer in OpenNoillirk Unlimited is a #1 Answer in the Daily too. Because the seed is kept with the run, a 10- or 20-prompt run can be replayed exactly: its challenge link gives a friend the same prompts in the same order.`,
              }),
            ],
          }),
        ],
      })),
      (t[9] = _))
    : (_ = t[9]);
  let w;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, b.jsxs)(`section`, {
        id: `prompts`,
        className: `hr-section ur-picks`,
        "aria-labelledby": `prompts-title`,
        children: [
          _,
          (0, b.jsxs)(`figure`, {
            className: `hr-notebook ur-sheet`,
            children: [
              (0, b.jsx)(`p`, {
                className: `hr-notebook-prompt`,
                children: `One endless run, the first ten`,
              }),
              (0, b.jsx)(`ol`, { children: v.map(D) }),
              (0, b.jsx)(`figcaption`, {
                children: `Easier prompts first, then harder ones, then the rest of the bank.`,
              }),
            ],
          }),
        ],
      })),
      (t[10] = w))
    : (w = t[10]);
  let T, E;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, b.jsxs)(`figure`, {
        className: `ur-figure`,
        children: [
          (0, b.jsx)(x, {
            file: `answers-review.webp`,
            width: 800,
            height: 1056,
            small: 400,
            sizes: `(max-width: 767px) calc(100vw - 32px), 400px`,
            alt: `A handmade paper scorecard with ten blank lines, each starting with a coloured dot, beside a pencil and two wooden figurines.`,
          }),
          (0, b.jsx)(`figcaption`, {
            children: `The answers review shows the top five of each board beside your answer.`,
          }),
        ],
      })),
      (E = (0, b.jsx)(`h2`, {
        id: `practice-title`,
        children: `Practise for the Daily`,
      })),
      (t[11] = T),
      (t[12] = E))
    : ((T = t[11]), (E = t[12]));
  let k, A;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, b.jsx)(`p`, {
        children: `Every OpenNoillirk Unlimited run ends with the answers review. For each prompt it shows your answer, its band and points, and the top five of our board, with yours marked when it is one of them.`,
      })),
      (A = (0, b.jsx)(`p`, {
        children: `Play a few runs and you start to see how the crowd thinks in a category: the famous answer everyone reaches for first, the few close behind it, and the right answers that never make the board. That is the skill the Daily tests, with no second try.`,
      })),
      (t[13] = k),
      (t[14] = A))
    : ((k = t[13]), (A = t[14]));
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, b.jsxs)(`section`, {
        id: `practice`,
        className: `hr-section ur-practice`,
        "aria-labelledby": `practice-title`,
        children: [
          T,
          (0, b.jsxs)(`div`, {
            children: [
              E,
              (0, b.jsxs)(`div`, {
                className: `hr-prose`,
                children: [
                  k,
                  A,
                  (0, b.jsxs)(`p`, {
                    children: [
                      `Go with the first answer that comes to mind, pick the best-known member of the category, and let the review show you what most people said.`,
                      ` `,
                      (0, b.jsx)(r, {
                        to: `/how-to-play`,
                        children: `How to play OpenNoillirk`,
                      }),
                      ` has more tips.`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (t[15] = j))
    : (j = t[15]);
  let M, N;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, b.jsx)(`h2`, {
        id: `challenge-title`,
        children: `Challenge a friend on the same run`,
      })),
      (N = (0, b.jsx)(`p`, {
        className: `hr-dek`,
        children: `OpenNoillirk Unlimited runs of 10 or 20 prompts end with a challenge link.`,
      })),
      (t[16] = M),
      (t[17] = N))
    : ((M = t[16]), (N = t[17]));
  let P;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, b.jsxs)(`figure`, {
        className: `hr-shot ur-wide`,
        children: [
          (0, b.jsx)(x, {
            file: `challenge-versus.webp`,
            width: 2200,
            height: 874,
            small: 1100,
            sizes: `(max-width: 1184px) calc(100vw - 64px), 1120px`,
            alt: `Two teams of wooden figurines, raspberry and blue, gather on two large tiles facing each other, while a few plain ones in between decide which side to join.`,
          }),
          (0, b.jsx)(`figcaption`, {
            className: `ur-shot-caption`,
            children: `In a challenge both crowds stand side by side, and whoever pulled more people wins.`,
          }),
        ],
      })),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, b.jsxs)(`div`, {
        className: `hr-prose`,
        children: [
          (0, b.jsx)(`p`, {
            children: `Finish a 10- or 20-prompt run and the result panel makes share cards, a short text and a link. Your friend plays the same prompts in the same order, and after each answer they see your figurine on the tile you chose.`,
          }),
          (0, b.jsx)(`p`, {
            children: `At the end your friend sees the board of everyone who played that link, and when they share it, new players join the same board. Endless runs share their text with a link to OpenNoillirk Unlimited instead, since nobody can replay a run with no end.`,
          }),
        ],
      })),
      (t[19] = F))
    : (F = t[19]);
  let I;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = [
        `OpenNoillirk Unlimited · 🧍38/100`,
        `🟣⚪🔵🟠⚪🔵🟣🔵⚫🟡`,
        `Close Call · beat Mia 38–25`,
        `opennoillirk.com/c/…`,
      ]),
      (t[20] = I))
    : (I = t[20]);
  let L, R;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, b.jsxs)(`section`, {
        id: `challenge`,
        className: `hr-section`,
        "aria-labelledby": `challenge-title`,
        children: [
          M,
          N,
          P,
          (0, b.jsxs)(`div`, {
            className: `hr-crowd-text`,
            children: [
              F,
              (0, b.jsxs)(`figure`, {
                className: `hr-bubble`,
                children: [
                  (0, b.jsx)(`pre`, {
                    children: I.join(`
`),
                  }),
                  (0, b.jsx)(`figcaption`, {
                    children: `The text from that run.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (R = (0, b.jsx)(o, {
        id: `unlimited-faq`,
        title: `Questions about OpenNoillirk Unlimited`,
        dek: `Short answers about the endless mode.`,
        items: y,
      })),
      (t[21] = L),
      (t[22] = R))
    : ((L = t[21]), (R = t[22]));
  let z;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, b.jsxs)(`div`, {
        className: `home-content-shell`,
        children: [
          u,
          m,
          w,
          j,
          L,
          R,
          (0, b.jsxs)(a, {
            title: `Ten more. Twenty more. Or all of them.`,
            children: [
              (0, b.jsx)(`p`, {
                children: `Pick a length and play OpenNoillirk Unlimited, free. Or come back to the Daily for today's ten.`,
              }),
              (0, b.jsx)(s, {}),
            ],
          }),
        ],
      })),
      (t[23] = z))
    : (z = t[23]);
  let B;
  return (
    t[24] === n
      ? (B = t[25])
      : ((B = (0, b.jsx)(`div`, {
          className: `home-reading`,
          inert: n,
          children: z,
        })),
        (t[24] = n),
        (t[25] = B)),
    B
  );
}
function D(e, t) {
  let [n, r] = e;
  return (0, b.jsxs)(
    `li`,
    {
      children: [
        (0, b.jsx)(`span`, {
          className: `ur-q`,
          "aria-hidden": `true`,
          children: t + 1,
        }),
        (0, b.jsx)(`span`, { className: `ur-prompt`, children: n }),
        (0, b.jsx)(`span`, {
          className: `ur-pips`,
          role: `img`,
          "aria-label": T[r],
          children: w.map((e) =>
            (0, b.jsx)(`i`, { className: e <= r ? `on` : void 0 }, e),
          ),
        }),
      ],
    },
    n,
  );
}
function O(e) {
  return (0, b.jsxs)(
    `li`,
    {
      children: [
        (0, b.jsx)(`span`, {
          className: `ur-mark`,
          "aria-hidden": `true`,
          children: e.mark,
        }),
        (0, b.jsxs)(`div`, {
          children: [
            (0, b.jsxs)(`h3`, {
              children: [
                (0, b.jsxs)(`span`, {
                  className: `visually-hidden`,
                  children: [e.mark, `: `],
                }),
                e.title,
              ],
            }),
            (0, b.jsx)(`p`, { children: e.text }),
          ],
        }),
      ],
    },
    e.mark,
  );
}
var k = 3;
function A() {
  let e = (0, g.c)(27),
    [t, n] = (0, _.useState)(null),
    [r, i] = (0, _.useState)(!1),
    [a, o] = (0, _.useState)(0),
    [s, f] = (0, _.useState)(`intro`),
    v,
    y;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        d()
          .then((e) => (0, _.startTransition)(() => n(e)))
          .catch(() => i(!0));
      }),
      (y = []),
      (e[0] = v),
      (e[1] = y))
    : ((v = e[0]), (y = e[1])),
    (0, _.useEffect)(v, y));
  let x;
  e[2] === t
    ? (x = e[3])
    : ((x = (e) => {
        if (!t) return Promise.reject(Error(`index not loaded`));
        let n = l(),
          r = Number.isFinite(e) ? e : k,
          i = Array.from({ length: r }, (e, r) => c(t.prompts, n, r));
        return Promise.all(i.map(M)).then((r) => ({
          kind: { kind: `unlimited`, length: e, seed: n, bank: t.bank },
          prompts: r,
          index: t.prompts,
          challengers: [],
          saves: !1,
        }));
      }),
      (e[2] = t),
      (e[3] = x));
  let S = x,
    C = s === `run`,
    w;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => o(j)), (e[4] = w))
    : (w = e[4]);
  let T;
  e[5] !== t || e[6] !== S
    ? ((T = (e) => {
        let { start: n, waiting: r } = e;
        return (0, b.jsx)(h, {
          waiting: r || t === null,
          header: (0, b.jsx)(p, { inStage: !0 }),
          onPlay: (e) => n(S(e)),
        });
      }),
      (e[5] = t),
      (e[6] = S),
      (e[7] = T))
    : (T = e[7]);
  let D;
  e[8] !== a || e[9] !== T
    ? ((D = (0, b.jsx)(
        u,
        {
          route: `unlimited`,
          setup: null,
          lockPage: !0,
          onScreen: f,
          onPlayAgain: w,
          intro: T,
        },
        a,
      )),
      (e[8] = a),
      (e[9] = T),
      (e[10] = D))
    : (D = e[10]);
  let O;
  e[11] === r
    ? (O = e[12])
    : ((O =
        r &&
        (0, b.jsx)(`p`, {
          className: `rarely-error`,
          role: `alert`,
          children: `The question bank could not be loaded. Please reload the page.`,
        })),
      (e[11] = r),
      (e[12] = O));
  let A;
  e[13] !== D || e[14] !== O
    ? ((A = (0, b.jsxs)(`div`, {
        id: `play`,
        className: `home-game`,
        children: [D, O],
      })),
      (e[13] = D),
      (e[14] = O),
      (e[15] = A))
    : (A = e[15]);
  let N;
  e[16] === C
    ? (N = e[17])
    : ((N = (0, b.jsx)(E, { focused: C })), (e[16] = C), (e[17] = N));
  let P;
  e[18] !== A || e[19] !== N
    ? ((P = (0, b.jsxs)(`main`, { children: [A, N] })),
      (e[18] = A),
      (e[19] = N),
      (e[20] = P))
    : (P = e[20]);
  let F;
  e[21] === C
    ? (F = e[22])
    : ((F = (0, b.jsx)(m, { focused: C })), (e[21] = C), (e[22] = F));
  let I;
  return (
    e[23] !== C || e[24] !== F || e[25] !== P
      ? ((I = (0, b.jsxs)(`div`, {
          className: `rarely-home`,
          "data-focused": C,
          children: [P, F],
        })),
        (e[23] = C),
        (e[24] = F),
        (e[25] = P),
        (e[26] = I))
      : (I = e[26]),
    I
  );
}
function j(e) {
  return e + 1;
}
function M(e) {
  return f(e.id);
}
export { A as component };
