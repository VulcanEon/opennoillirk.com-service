import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import { c as a, t as o } from "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import { c as s } from "./seo-content-BRJA07rn.js";
import "./climb-head-B90-o7R9.js";
import { t as c } from "./daily-done-DgUyDuk2.js";
import { A as l, G as u, O as d, i as f, r as p } from "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import { t as m } from "./stage-choice-DO9JGjKK.js";
import "./main-BXKF3zmu.js";
import { n as h } from "./format-Cc5GoqRm.js";
import { a as g, n as _, o as v } from "./map-BaINi0Kr.js";
import "./icons-DDwzIPdf.js";
import "./game-ui-DEL71d58.js";
import { n as y } from "./stage-toggle-LI6FLr3n.js";
import { n as b, t as x } from "./home-sections-CGYgZ4JZ.js";
import { t as S } from "./intro-CCqPM7kD.js";
import { t as C } from "./use-daily-setup-ZCxngFu3.js";
import { n as w, t as T } from "./rules-example-BI2v3vrf.js";
var E = n(),
  D = e(t()),
  O = i(),
  k = 499,
  A = 1080,
  j = {
    start: {
      file: `start.webp`,
      alt: `Question 1 on the card while the krill waits on its three balloons above a pond and a dirt path on the forest floor, mushrooms and flowers around them.`,
      caption: `Question 1, at the pond.`,
    },
    question: {
      file: `question.webp`,
      alt: `A prompt on the question card at the Snowline, a sharp white peak and snowfields behind the krill and the height ruler down the right side.`,
      caption: `Question 7, above the snowline.`,
    },
    storm: {
      file: `storm.webp`,
      alt: `The krill rising through black storm clouds and slanting rain past a great snowy peak, the ruler counting up past 7,200 metres.`,
      caption: `Through the storm.`,
    },
    result: {
      file: `result.webp`,
      alt: `The result panel over fields, a river and a village: #1 Answer in large letters over a bar in its colour, 200 points and the board's top five.`,
      caption: `After each rise: your band, your points and the board's top five.`,
    },
    orbit: {
      file: `orbit.webp`,
      alt: `The krill 257 km up among green curtains of aurora, glowing over the night side of the Earth far below.`,
      caption: `Past the aurora, in an endless run.`,
    },
  };
function M(e) {
  let t = (0, E.c)(8),
    { shot: n } = e,
    r = `/images/sky-climb/${n.file}`,
    i;
  t[0] !== n.alt || t[1] !== r
    ? ((i = (0, O.jsx)(`span`, {
        className: `sc-shot-frame`,
        children: (0, O.jsx)(`img`, {
          src: r,
          width: k,
          height: A,
          alt: n.alt,
          loading: `lazy`,
          decoding: `async`,
        }),
      })),
      (t[0] = n.alt),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === n.caption
    ? (a = t[4])
    : ((a = (0, O.jsx)(`figcaption`, { children: n.caption })),
      (t[3] = n.caption),
      (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, O.jsxs)(`figure`, {
          className: `sc-shot`,
          children: [i, a],
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var N = l.flatMap((e, t) => (t > 0 && e !== l[t - 1] ? [[e, t + 1]] : [])),
  P = h(_(100)),
  F = h(_(d)),
  I = g(d),
  L = p(
    { kind: `daily`, number: 12, link: `opennoillirk.com/c/…` },
    T,
    { altitude: h(_(w.points)), zone: v[g(w.points)]?.name ?? `` },
    { name: `Mia`, points: w.points - 240 },
  );
function R(e) {
  let t = (0, E.c)(27),
    { focused: n } = e,
    [i, a] = (0, D.useState)(!1),
    c,
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => a(!0)), (l = []), (t[0] = c), (t[1] = l))
    : ((c = t[0]), (l = t[1])),
    (0, D.useEffect)(c, l));
  let p = i || void 0,
    m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, O.jsx)(`h2`, {
        id: `what-is-sky-climb-title`,
        children: `What is Sky Climb?`,
      })),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, O.jsxs)(`section`, {
        id: `what-is-sky-climb`,
        className: `hr-section sc-lede`,
        "aria-labelledby": `what-is-sky-climb-title`,
        children: [
          m,
          (0, O.jsx)(`div`, {
            className: `hr-prose`,
            children: (0, O.jsx)(`p`, {
              className: `sc-lede-text`,
              children: `Sky Climb is OpenNoillirk played as a balloon ride. You get the same ten daily prompts as everyone else, 30 seconds for each, while a small krill waits by a forest pond with three balloons tied on. Every answer the game accepts lifts it, and the more common your answer, the higher your krill floats: the board's #1 answer sends it furthest of all. A Daily you play here counts on the home page too.`,
            }),
          }),
        ],
      })),
      (t[3] = h))
    : (h = t[3]);
  let g, _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, O.jsx)(`h2`, {
        id: `how-it-works-title`,
        children: `How the climb works`,
      })),
      (_ = (0, O.jsx)(`p`, {
        className: `hr-dek`,
        children: `Points become altitude. Your running total is your height, and nothing ever pulls the krill back down.`,
      })),
      (t[4] = g),
      (t[5] = _))
    : ((g = t[4]), (_ = t[5]));
  let y, b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, O.jsxs)(`li`, {
        children: [
          (0, O.jsx)(`h3`, { children: `30 seconds a prompt` }),
          (0, O.jsx)(`p`, {
            children: `Each prompt names a category. Type the answer you think most people would give before the ring around the clock closes. A pass or a timeout scores nothing, and the krill holds its height.`,
          }),
        ],
      })),
      (b = (0, O.jsx)(`h3`, { children: `Five bands` })),
      (t[6] = y),
      (t[7] = b))
    : ((y = t[6]), (b = t[7]));
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, O.jsxs)(`p`, {
        children: [
          `Where your answer sits on our board puts it in one of five bands. Later questions count more: `,
          N.map(V).join(`, `),
          `.`,
        ],
      })),
      (t[8] = x))
    : (x = t[8]);
  let S, C;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, O.jsxs)(`li`, {
        children: [
          b,
          x,
          (0, O.jsx)(`ul`, { className: `sc-bands`, children: u.map(B) }),
        ],
      })),
      (C = (0, O.jsx)(`h3`, { children: `Points become height` })),
      (t[9] = S),
      (t[10] = C))
    : ((S = t[9]), (C = t[10]));
  let w;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, O.jsxs)(`ol`, {
        className: `sc-steps`,
        children: [
          y,
          S,
          (0, O.jsxs)(`li`, {
            children: [
              C,
              (0, O.jsxs)(`p`, {
                children: [
                  `Every point lifts the krill: 100 points take it to ${P}, and a perfect Daily of ${f(d)} points ends at ${F}.`,
                  ` `,
                  `The ruler on the right counts the height and marks what you pass, from the Eiffel Tower to the top of Everest.`,
                ],
              }),
            ],
          }),
          (0, O.jsxs)(`li`, {
            children: [
              (0, O.jsx)(`h3`, { children: `NEXT when you're ready` }),
              (0, O.jsx)(`p`, {
                children: `Tap the sky to skip the rise. Then the result panel shows your band, your points and the board's top five, and waits: press NEXT, or Enter, for the next prompt.`,
              }),
            ],
          }),
        ],
      })),
      (t[11] = w))
    : (w = t[11]);
  let T;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, O.jsxs)(`section`, {
        id: `how-it-works`,
        className: `hr-section`,
        "aria-labelledby": `how-it-works-title`,
        children: [
          g,
          _,
          (0, O.jsxs)(`div`, {
            className: `sc-how`,
            children: [
              w,
              (0, O.jsxs)(`div`, {
                className: `sc-pair`,
                children: [
                  (0, O.jsx)(M, { shot: j.question }),
                  (0, O.jsx)(M, { shot: j.result }),
                ],
              }),
            ],
          }),
        ],
      })),
      (t[12] = T))
    : (T = t[12]);
  let k;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, O.jsx)(`h2`, {
        id: `zones-title`,
        children: `${v.length} zones, from a forest pond to orbit`,
      })),
      (t[13] = k))
    : (k = t[13]);
  let A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, O.jsx)(`p`, {
        className: `hr-dek`,
        children: `Each zone has its own sky, scenery and creatures, and a banner names it as the krill climbs in. A perfect Daily ends in zone ${I + 1}, ${v[I]?.name ?? ``}; Unlimited runs climb on from there.`,
      })),
      (t[14] = A))
    : (A = t[14]);
  let R;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, O.jsxs)(`div`, {
        className: `sc-trio`,
        children: [
          (0, O.jsx)(M, { shot: j.start }),
          (0, O.jsx)(M, { shot: j.storm }),
          (0, O.jsx)(M, { shot: j.orbit }),
        ],
      })),
      (t[15] = R))
    : (R = t[15]);
  let H;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, O.jsxs)(`section`, {
        id: `zones`,
        className: `hr-section`,
        "aria-labelledby": `zones-title`,
        children: [
          k,
          A,
          R,
          (0, O.jsx)(`ol`, { className: `sc-zones`, children: v.map(z) }),
        ],
      })),
      (t[16] = H))
    : (H = t[16]);
  let U;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, O.jsx)(`h2`, {
        id: `challenge-title`,
        children: `Challenge a friend to out-climb you`,
      })),
      (t[17] = U))
    : (U = t[17]);
  let W, G;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, O.jsx)(`p`, {
        children: `Every Daily ends with Share & challenge. It makes share cards with your height and zone, a short text and a challenge link. The text shows your height, your zone, a coloured circle for each answer and your title, but never the answers themselves.`,
      })),
      (G = (0, O.jsx)(`p`, {
        children: `A friend who opens the link plays the same ten prompts on the climb, with your krill rising beside theirs in its own colour and your name over its head. When yours is out of view, an arrow on their ruler shows your name and height, so they always know how far there is to go. The higher krill wins.`,
      })),
      (t[18] = W),
      (t[19] = G))
    : ((W = t[18]), (G = t[19]));
  let K;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, O.jsx)(r, { to: `/how-to-play`, children: `how to play` })),
      (t[20] = K))
    : (K = t[20]);
  let q;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, O.jsxs)(`div`, {
        className: `hr-prose`,
        children: [
          W,
          G,
          (0, O.jsxs)(`p`, {
            children: [
              `Unlimited runs of 10 or 20 prompts come with a link too. The full rules are on`,
              ` `,
              K,
              ` and `,
              (0, O.jsx)(r, { to: `/scoring`, children: `scoring` }),
              `.`,
            ],
          }),
        ],
      })),
      (t[21] = q))
    : (q = t[21]);
  let J;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, O.jsxs)(`section`, {
        id: `challenge`,
        className: `hr-section`,
        "aria-labelledby": `challenge-title`,
        children: [
          U,
          (0, O.jsxs)(`div`, {
            className: `hr-crowd-text`,
            children: [
              q,
              (0, O.jsxs)(`figure`, {
                className: `hr-bubble`,
                children: [
                  (0, O.jsx)(`pre`, { children: L }),
                  (0, O.jsx)(`figcaption`, {
                    children: `The share text of one Daily, as the climb writes it.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (t[22] = J))
    : (J = t[22]);
  let Y;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, O.jsxs)(`div`, {
        className: `home-content-shell`,
        children: [
          h,
          T,
          H,
          J,
          (0, O.jsx)(o, {
            id: `sky-climb-faq`,
            title: `Sky Climb FAQ`,
            dek: `Short answers about the balloon stage.`,
            items: s,
            art: (0, O.jsx)(`img`, {
              className: `sc-faq-krill`,
              src: `/images/climb/krill-you.png`,
              width: 15,
              height: 22,
              alt: ``,
              loading: `lazy`,
              decoding: `async`,
            }),
          }),
        ],
      })),
      (t[23] = Y))
    : (Y = t[23]);
  let X;
  return (
    t[24] !== n || t[25] !== p
      ? ((X = (0, O.jsx)(`div`, {
          className: `home-reading sc-reading`,
          inert: n,
          "data-shots": p,
          children: Y,
        })),
        (t[24] = n),
        (t[25] = p),
        (t[26] = X))
      : (X = t[26]),
    X
  );
}
function z(e, t) {
  return (0, O.jsxs)(
    `li`,
    {
      style: a({ "--sky-top": e.sky[0], "--sky-low": e.sky[1] }),
      children: [
        (0, O.jsx)(`span`, {
          className: `sc-zone-n`,
          "aria-hidden": `true`,
          children: String(t + 1).padStart(2, `0`),
        }),
        (0, O.jsx)(`h3`, { children: e.name }),
        (0, O.jsx)(`p`, {
          className: `sc-zone-alt`,
          children: `${h(e.alt[0])} – ${h(e.alt[1])}`,
        }),
        (0, O.jsx)(`p`, { className: `sc-zone-blurb`, children: e.blurb }),
      ],
    },
    e.id,
  );
}
function B(e) {
  return (0, O.jsxs)(
    `li`,
    {
      style: a({ "--c": e.color }),
      children: [
        (0, O.jsx)(`b`, { children: e.name }),
        (0, O.jsx)(`span`, { children: `${e.points} points` }),
      ],
    },
    e.id,
  );
}
function V(e) {
  let [t, n] = e;
  return `×${t} from question ${n}`;
}
var H = { brand: `Sky Climb`, tag: `OpenNoillirk's balloon trivia game` };
function U() {
  let e = (0, E.c)(29),
    { setup: t, error: n, retry: r } = C(),
    [i, a] = (0, D.useState)(`intro`),
    o;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = []), (e[0] = o))
    : (o = e[0]),
    (0, D.useLayoutEffect)(W, o));
  let s, l;
  (e[1] !== n || e[2] !== i || e[3] !== t
    ? ((s = () => {
        (n || (t && (i !== `intro` || !t.finished))) &&
          document.documentElement.removeAttribute(c);
      }),
      (l = [n, t, i]),
      (e[1] = n),
      (e[2] = i),
      (e[3] = t),
      (e[4] = s),
      (e[5] = l))
    : ((s = e[4]), (l = e[5])),
    (0, D.useEffect)(s, l));
  let u = i === `run`,
    d = t?.kind.kind === `daily` ? t.kind.number : null,
    f;
  e[6] !== d || e[7] !== t
    ? ((f = (e) => {
        let { start: n, waiting: r, setup: i } = e;
        return (0, O.jsx)(S, {
          number: d,
          resumeAt: i?.resume ? i.resume.index + 1 : null,
          ready: t !== null,
          waiting: r || t === null,
          header: (0, O.jsx)(b, { inStage: !0 }),
          heading: H,
          line: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(`b`, { children: `Float with the crowd.` }),
              ` Give the answer most people would, and your krill rises higher.`,
            ],
          }),
          onPlay: () => n(),
        });
      }),
      (e[6] = d),
      (e[7] = t),
      (e[8] = f))
    : (f = e[8]);
  let p;
  e[9] !== t || e[10] !== f
    ? ((p = (0, O.jsx)(y, { setup: t, lockPage: !0, onScreen: a, intro: f })),
      (e[9] = t),
      (e[10] = f),
      (e[11] = p))
    : (p = e[11]);
  let m;
  e[12] !== n || e[13] !== r
    ? ((m =
        n &&
        (0, O.jsxs)(`p`, {
          className: `rarely-error`,
          role: `alert`,
          children: [
            `Today's questions could not be loaded.`,
            ` `,
            (0, O.jsx)(`button`, {
              type: `button`,
              className: `og-link`,
              onClick: r,
              children: `Try again`,
            }),
          ],
        })),
      (e[12] = n),
      (e[13] = r),
      (e[14] = m))
    : (m = e[14]);
  let h;
  e[15] !== p || e[16] !== m
    ? ((h = (0, O.jsxs)(`div`, {
        id: `play`,
        className: `home-game`,
        children: [p, m],
      })),
      (e[15] = p),
      (e[16] = m),
      (e[17] = h))
    : (h = e[17]);
  let g;
  e[18] === u
    ? (g = e[19])
    : ((g = (0, O.jsx)(R, { focused: u })), (e[18] = u), (e[19] = g));
  let _;
  e[20] !== h || e[21] !== g
    ? ((_ = (0, O.jsxs)(`main`, { children: [h, g] })),
      (e[20] = h),
      (e[21] = g),
      (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] === u
    ? (v = e[24])
    : ((v = (0, O.jsx)(x, { focused: u })), (e[23] = u), (e[24] = v));
  let w;
  return (
    e[25] !== u || e[26] !== _ || e[27] !== v
      ? ((w = (0, O.jsxs)(`div`, {
          className: `rarely-home`,
          "data-focused": u,
          children: [_, v],
        })),
        (e[25] = u),
        (e[26] = _),
        (e[27] = v),
        (e[28] = w))
      : (w = e[28]),
    w
  );
}
function W() {
  document.documentElement.removeAttribute(m);
}
export { U as component };
