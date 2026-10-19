import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import {
  a,
  c as o,
  i as s,
  l as c,
  n as l,
  o as u,
  r as d,
  s as f,
  t as p,
} from "./home-faq-BKaFOKKy.js";
import { G as m, M as h, P as g, o as _ } from "./rules-DxwvjuIt.js";
import { b as v, j as y } from "./main-BXKF3zmu.js";
import { t as b } from "./disclaimer-DWou9UTv.js";
var x = { name: `OpenNoillirk`, origin: `https://opennoillirk.com` },
  S = { llms: `/llms.txt`, llmsFull: `/llms-full.txt`, index: `/index.md` },
  C = [`/unlimited`, `/sky-climb`, `/how-to-play`, `/scoring`],
  w = /\/+$/,
  T = (e) => (e.length > 1 ? e.replace(w, ``) : e);
function E(e) {
  let t = T(e);
  return t === `/` ? S.index : C.includes(t) ? `${t}.md` : null;
}
var D = [
  { id: `chatgpt`, label: `ChatGPT`, url: `https://chatgpt.com/?q=` },
  { id: `claude`, label: `Claude`, url: `https://claude.ai/new?q=` },
  {
    id: `perplexity`,
    label: `Perplexity`,
    url: `https://www.perplexity.ai/search?q=`,
  },
  {
    id: `google`,
    label: `Google AI Mode`,
    url: `https://www.google.com/search?udm=50&q=`,
  },
  { id: `grok`, label: `Grok`, url: `https://grok.com/?q=` },
];
function O(e) {
  let { name: t, origin: n } = x,
    r = T(e),
    i = E(r),
    a = `Use ${n}${i ?? S.index} and ${n}${S.llms} as sources, cite the pages you use, and say plainly if something isn't covered.`;
  return i === S.index || !i
    ? `Is ${t} (${n}) a good free game for guessing the answer most people would give? Explain how a round works, how answers are scored, how long a game takes and whether it is free. ${a}`
    : `I'm looking at ${n}${r} on ${t}. What does it offer, how does a round work, how are answers scored and is it free? ${a}`;
}
function k(e) {
  let t = encodeURIComponent(O(e));
  return D.map((e) => ({ id: e.id, label: e.label, href: e.url + t }));
}
var A = n(),
  j = e(t(), 1),
  M = i();
function N(e) {
  let t = (0, A.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, M.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          className: n,
          "aria-hidden": `true`,
          fill: `currentColor`,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function P(e) {
  let t = (0, A.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`path`, {
        d: `m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, M.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          className: n,
          "aria-hidden": `true`,
          fill: `#D97757`,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function F(e) {
  let t = (0, A.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`path`, {
        d: `M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, M.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          className: n,
          "aria-hidden": `true`,
          fill: `#1FB8CD`,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function I(e) {
  let t = (0, A.c)(11),
    { className: n } = e,
    r = (0, j.useId)(),
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`stop`, { offset: `0`, stopColor: `#4285F4` })),
      (a = (0, M.jsx)(`stop`, { offset: `0.55`, stopColor: `#9B72CB` })),
      (o = (0, M.jsx)(`stop`, { offset: `1`, stopColor: `#D96570` })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, M.jsx)(`defs`, {
        children: (0, M.jsxs)(`linearGradient`, {
          id: r,
          x1: `0`,
          y1: `24`,
          x2: `24`,
          y2: `0`,
          gradientUnits: `userSpaceOnUse`,
          children: [i, a, o],
        }),
      })),
      (t[3] = r),
      (t[4] = s));
  let c = `url(#${r})`,
    l;
  t[5] === c
    ? (l = t[6])
    : ((l = (0, M.jsx)(`path`, {
        fill: c,
        d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81`,
      })),
      (t[5] = c),
      (t[6] = l));
  let u;
  return (
    t[7] !== n || t[8] !== s || t[9] !== l
      ? ((u = (0, M.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          className: n,
          "aria-hidden": `true`,
          children: [s, l],
        })),
        (t[7] = n),
        (t[8] = s),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function L(e) {
  let t = (0, A.c)(4),
    { className: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`circle`, { cx: `12`, cy: `12`, r: `7.5` })),
      (i = (0, M.jsx)(`path`, { d: `M19.5 4.5 4.5 19.5` })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, M.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          className: n,
          "aria-hidden": `true`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2.2`,
          strokeLinecap: `round`,
          children: [r, i],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var R = { chatgpt: N, claude: P, perplexity: F, google: I, grok: L };
function z() {
  let e = (0, A.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsxs)(`div`, {
        children: [
          (0, M.jsx)(`h2`, {
            id: `browser-play-title`,
            children: `Guess the most common answer, right in your browser`,
          }),
          (0, M.jsx)(`p`, {
            className: `hr-lede-big`,
            children: `OpenNoillirk is a free daily game where the answer most people would give wins.`,
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, M.jsx)(`p`, {
        children: `Every day OpenNoillirk brings ten prompts with 30 seconds each. Name anything that fits: the more people would give your answer, the more points you score and the more of the table's 100 people join you.`,
      })),
      (e[1] = n))
    : (n = e[1]);
  let i;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, M.jsxs)(`section`, {
          id: `browser-play`,
          className: `hr-section hr-lede`,
          "aria-labelledby": `browser-play-title`,
          children: [
            t,
            (0, M.jsxs)(`div`, {
              className: `hr-prose`,
              children: [
                n,
                (0, M.jsxs)(`p`, {
                  children: [
                    `There is nothing to install and no account to make. Press Play above for today's ten, or open `,
                    (0, M.jsx)(r, { to: `/unlimited`, children: `Unlimited` }),
                    ` for another run whenever you like. It works with a mouse and keyboard, and on a phone with the on-screen keyboard open.`,
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
function B() {
  let e = (0, A.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, M.jsx)(`p`, {
          className: `hr-more`,
          children: `OpenNoillirk starts you on the sky climb, where the same points lift our krill on three balloons instead of pulling a crowd. A #1 Answer in question 1 is 100 points and takes it to 30m; a perfect Daily of 2,500 points ends at 14.0 km. Rather play on the table? The start screen switches between the two.`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function V() {
  let e = (0, A.c)(19),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `how-to-play-title`,
        children: `How to play OpenNoillirk`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `One prompt, thirty seconds, and a crowd of a hundred people who join you when you guess what most of them would say.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`svg`, {
        className: `hr-arc`,
        viewBox: `0 0 100 100`,
        preserveAspectRatio: `none`,
        "aria-hidden": `true`,
        children: (0, M.jsx)(`path`, {
          d: `M 16 58 C 30 -6, 66 -10, 82 48`,
          vectorEffect: `non-scaling-stroke`,
        }),
      })),
      (e[2] = i))
    : (i = e[2]);
  let a, c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsxs)(`div`, {
        className: `hr-qmeta`,
        children: [`Q 4 / 10 `, (0, M.jsx)(`span`, { children: `×2` })],
      })),
      (c = (0, M.jsx)(`div`, {
        className: `hr-qtext`,
        children: `Name a capital city in Europe`,
      })),
      (e[3] = a),
      (e[4] = c))
    : ((a = e[3]), (c = e[4]));
  let l;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, M.jsx)(`div`, {
        className: `hr-qbar`,
        children: (0, M.jsx)(`i`, {}),
      })),
      (e[5] = l))
    : (l = e[5]);
  let f;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, M.jsxs)(`figure`, {
        className: `hr-beat hr-beat-a`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `hr-scene`,
            "aria-hidden": `true`,
            children: [
              (0, M.jsxs)(`div`, {
                className: `hr-qcard`,
                children: [
                  a,
                  c,
                  l,
                  (0, M.jsxs)(`div`, {
                    className: `hr-qinput`,
                    children: [
                      (0, M.jsx)(`span`, { children: `Paris` }),
                      (0, M.jsx)(`b`, { children: `→` }),
                    ],
                  }),
                ],
              }),
              (0, M.jsx)(s, { who: `hero`, className: `hr-me` }),
            ],
          }),
          (0, M.jsxs)(`figcaption`, {
            children: [
              (0, M.jsx)(`b`, { children: `Type anything that fits.` }),
              (0, M.jsx)(`p`, {
                children: `Each prompt names a category, such as “Name a capital city in Europe”, and OpenNoillirk gives you 30 seconds to type an answer of your own.`,
              }),
            ],
          }),
        ],
      })),
      (e[6] = f))
    : (f = e[6]);
  let p;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, M.jsx)(d, {
        color: `mint`,
        label: `LONDON`,
        people: [
          [`cap`, 0],
          [`glasses`, 0],
        ],
        style: o({ "--x": `25%`, "--y": `30%` }),
      })),
      (e[7] = p))
    : (p = e[7]);
  let m;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, M.jsx)(d, {
        color: `lavender`,
        label: `ROME`,
        people: [
          [`silver`, 0],
          [`binoc`, 0],
        ],
        style: o({ "--x": `75%`, "--y": `30%` }),
      })),
      (e[8] = m))
    : (m = e[8]);
  let h;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, M.jsx)(d, {
        color: `cream`,
        label: `PARIS`,
        people: [
          [`beret`, 0],
          [`sunhat`, 0],
          [`ponytail`, 0],
        ],
        style: o({ "--x": `50%`, "--y": `51%`, "--w": `124px` }),
      })),
      (e[9] = h))
    : (h = e[9]);
  let g;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, M.jsx)(d, {
        color: `peach`,
        label: `BERLIN`,
        people: [
          [`freckles`, 0],
          [`cap`, 2],
        ],
        style: o({ "--x": `25%`, "--y": `74%` }),
      })),
      (e[10] = g))
    : (g = e[10]);
  let _;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, M.jsxs)(`figure`, {
        className: `hr-beat hr-beat-b`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `hr-scene`,
            "aria-hidden": `true`,
            children: [
              p,
              m,
              h,
              g,
              (0, M.jsx)(d, {
                color: `sky`,
                label: `MADRID`,
                people: [
                  [`glasses`, 1],
                  [`beret`, 2],
                ],
                style: o({ "--x": `75%`, "--y": `74%` }),
              }),
            ],
          }),
          (0, M.jsxs)(`figcaption`, {
            children: [
              (0, M.jsx)(`b`, { children: `Go where everyone stands.` }),
              (0, M.jsx)(`p`, {
                children: `In most trivia games any right answer will do. In OpenNoillirk, the first idea that comes to mind is usually everyone's, and those answers are the busy tiles, #1 the biggest.`,
              }),
            ],
          }),
        ],
      })),
      (e[11] = _))
    : (_ = e[11]);
  let v;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, M.jsxs)(`div`, {
        className: `hr-chip`,
        children: [
          (0, M.jsx)(`span`, {
            className: `hr-band`,
            style: o({ "--c": `var(--band-4)` }),
            children: `#1 ANSWER`,
          }),
          (0, M.jsx)(`strong`, { children: `+200` }),
          `8 people join you`,
        ],
      })),
      (e[12] = v))
    : (v = e[12]);
  let y;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, M.jsx)(s, {
        who: `ponytail`,
        className: `hr-walker`,
        style: o({ "--l": `2%`, "--b": `118px`, "--d": `0s` }),
      })),
      (e[13] = y))
    : (y = e[13]);
  let b;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, M.jsx)(s, {
        who: `binoc`,
        pose: 2,
        className: `hr-walker`,
        style: o({ "--l": `17%`, "--b": `64px`, "--d": `0.35s` }),
      })),
      (e[14] = b))
    : (b = e[14]);
  let x;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, M.jsx)(s, {
        who: `sunhat`,
        pose: 2,
        className: `hr-walker`,
        style: o({
          "--l": `33%`,
          "--b": `150px`,
          "--h": `84px`,
          "--d": `0.7s`,
        }),
      })),
      (e[15] = x))
    : (x = e[15]);
  let S, C;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, M.jsxs)(`div`, {
        className: `hr-story`,
        style: u,
        children: [
          i,
          f,
          _,
          (0, M.jsxs)(`figure`, {
            className: `hr-beat hr-beat-c`,
            children: [
              (0, M.jsxs)(`div`, {
                className: `hr-scene`,
                "aria-hidden": `true`,
                children: [
                  v,
                  y,
                  b,
                  x,
                  (0, M.jsx)(d, {
                    color: `gold`,
                    label: `YOU · PARIS`,
                    you: !0,
                    className: `hr-win`,
                    people: [[`hero`, 2]],
                    style: o({ "--x": `70%`, "--y": `64%` }),
                  }),
                ],
              }),
              (0, M.jsxs)(`figcaption`, {
                children: [
                  (0, M.jsx)(`b`, { children: `Pull the crowd home.` }),
                  (0, M.jsx)(`p`, {
                    children: `Your OpenNoillirk figurine hops to your answer. The more people would say it, the more points you score, and the more of the table's 100 people walk over to join you.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (C = (0, M.jsx)(B, {})),
      (e[16] = S),
      (e[17] = C))
    : ((S = e[16]), (C = e[17]));
  let w;
  return (
    e[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, M.jsxs)(`section`, {
          id: `how-to-play`,
          className: `hr-section`,
          "aria-labelledby": `how-to-play-title`,
          children: [
            t,
            n,
            S,
            C,
            (0, M.jsxs)(`p`, {
              className: `hr-more`,
              children: [
                `Read the `,
                (0, M.jsx)(r, { to: `/how-to-play`, children: `full rules` }),
                ` for what counts as an answer, how the reveal works, streaks and challenge links.`,
              ],
            }),
          ],
        })),
        (e[18] = w))
      : (w = e[18]),
    w
  );
}
function ee() {
  let e = (0, A.c)(7),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `modes-title`,
        children: `A free daily game with a streak to keep`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `Everyone plays the same ten OpenNoillirk prompts each day, and new ones arrive at midnight.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`img`, {
        src: `/images/home/mode-daily.webp`,
        srcSet: `/images/home/mode-daily-500.webp 500w, /images/home/mode-daily.webp 1000w`,
        sizes: `(max-width: 767px) calc(100vw - 32px), 540px`,
        width: 1e3,
        height: 800,
        alt: `A blank desk calendar beside a round tile crowded with wooden figurines in morning light.`,
        loading: `lazy`,
        decoding: `async`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsxs)(`article`, {
        className: `hr-ticket`,
        children: [
          i,
          (0, M.jsxs)(`div`, {
            className: `hr-ticket-text`,
            children: [
              (0, M.jsx)(`h3`, { children: `The OpenNoillirk Daily` }),
              (0, M.jsx)(`p`, {
                children: `Everyone gets the same ten prompts for their local date, and new ones arrive at midnight. Finish it to keep your streak going in this browser, then compare with friends who played the same day.`,
              }),
            ],
          }),
        ],
      })),
      (e[3] = a))
    : (a = e[3]);
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsx)(`img`, {
        src: `/images/home/mode-unlimited.webp`,
        srcSet: `/images/home/mode-unlimited-500.webp 500w, /images/home/mode-unlimited.webp 1000w`,
        sizes: `(max-width: 767px) calc(100vw - 32px), 540px`,
        width: 1e3,
        height: 800,
        alt: `A winding path of round paper tiles across a wooden table, a raspberry figurine hopping from one to the next.`,
        loading: `lazy`,
        decoding: `async`,
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, M.jsxs)(`div`, {
        className: `hr-modes`,
        children: [
          a,
          (0, M.jsxs)(`article`, {
            className: `hr-ticket`,
            children: [
              o,
              (0, M.jsxs)(`div`, {
                className: `hr-ticket-text`,
                children: [
                  (0, M.jsx)(`h3`, { children: `More than ten?` }),
                  (0, M.jsxs)(`p`, {
                    children: [
                      (0, M.jsx)(r, {
                        to: `/unlimited`,
                        children: `OpenNoillirk Unlimited`,
                      }),
                      ` is the same game with no daily cap: 10, 20 or endless prompts from the whole bank, free, whenever you like.`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (e[5] = s))
    : (s = e[5]);
  let l;
  return (
    e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, M.jsxs)(`section`, {
          id: `modes`,
          className: `hr-section`,
          "aria-labelledby": `modes-title`,
          children: [
            t,
            n,
            s,
            (0, M.jsxs)(`div`, {
              className: `hr-modes-after`,
              children: [
                (0, M.jsx)(`p`, {
                  children: `After the Daily, open the answers review to see your answer and its band beside the top five of each prompt's board. The rest of the board stays hidden, so a OpenNoillirk prompt is still fun when it comes round again.`,
                }),
                (0, M.jsx)(c, {}),
              ],
            }),
          ],
        })),
        (e[6] = l))
      : (l = e[6]),
    l
  );
}
var H = 2,
  U = [
    {
      band: 0,
      answer: `Skopje`,
      tile: `sky`,
      people: [[`glasses`, 0]],
      wide: [13, 64],
      narrow: [18, 30],
    },
    {
      band: 1,
      answer: `Amsterdam`,
      tile: `lavender`,
      people: [
        [`ponytail`, 0],
        [`cap`, 0],
      ],
      wide: [32, 55],
      narrow: [50, 30],
    },
    {
      band: 2,
      answer: `Berlin`,
      tile: `peach`,
      people: [
        [`freckles`, 0],
        [`silver`, 0],
        [`binoc`, 0],
      ],
      wide: [51, 46],
      narrow: [82, 30],
    },
    {
      band: 3,
      answer: `London`,
      tile: `mint`,
      people: [
        [`beret`, 0],
        [`sunhat`, 0],
        [`cap`, 2],
      ],
      wide: [70, 37],
      narrow: [34, 70],
    },
    {
      band: 4,
      answer: `Paris`,
      tile: `cream`,
      people: [
        [`sunhat`, 2],
        [`hero`, 2],
        [`glasses`, 2],
        [`beret`, 2],
      ],
      wide: [88, 28],
      narrow: [66, 70],
    },
  ],
  te = Array.from({ length: 12 }, (e, t) => `dot-${t}`),
  W = (e) => `var(--band-${e})`;
function G(e) {
  let t = (0, A.c)(9),
    { index: n, onPick: r } = e,
    i = U[n],
    a;
  t[0] === i.band
    ? (a = t[1])
    : ((a = o({ "--c": W(i.band) })), (t[0] = i.band), (t[1] = a));
  let s;
  t[2] !== n || t[3] !== r
    ? ((s = () => r(n)), (t[2] = n), (t[3] = r), (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== i.answer || t[6] !== a || t[7] !== s
      ? ((c = (0, M.jsx)(`button`, {
          type: `button`,
          className: `hr-say`,
          style: a,
          onClick: s,
          children: i.answer,
        })),
        (t[5] = i.answer),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function K() {
  let e = (0, A.c)(76),
    [t, n] = (0, j.useState)(4),
    r = U[t],
    i = m[r.band],
    s,
    c,
    l,
    u,
    d,
    p,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    e[0] !== i.line ||
    e[1] !== i.name ||
    e[2] !== i.points ||
    e[3] !== r.answer ||
    e[4] !== r.band ||
    e[5] !== t
  ) {
    let D = g(r.band, H);
    ((s = h(D)),
      (d = `rare-answers`),
      (p = `hr-section hr-rare`),
      (_ = `rare-answers-title`));
    let O, k;
    e[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (0, M.jsx)(`h2`, {
          id: `rare-answers-title`,
          children: `Why the most common answer wins in OpenNoillirk`,
        })),
        (k = (0, M.jsx)(`p`, {
          className: `hr-dek`,
          children: `Same OpenNoillirk prompt, five answers. Tap one to see what it scores.`,
        })),
        (e[22] = O),
        (e[23] = k))
      : ((O = e[22]), (k = e[23]));
    let A;
    e[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((A = (0, M.jsx)(`p`, {
          children: `Every OpenNoillirk prompt has a board: our estimate, made in advance, of how 100 people would respond. The board's top five stand on the table as tiles with the crowd on them, and the #1 tile is the biggest. For “Name a capital city in Europe” they are Paris, London, Rome, Berlin and Madrid.`,
        })),
        (e[24] = A))
      : (A = e[24]);
    let j;
    e[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((j = (0, M.jsx)(G, { index: 4, onPick: n })), (e[25] = j))
      : (j = e[25]);
    let N;
    e[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, M.jsx)(`strong`, { children: `100 points` })), (e[26] = N))
      : (N = e[26]);
    let P;
    e[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, M.jsx)(G, { index: 0, onPick: n })), (e[27] = P))
      : (P = e[27]);
    let F;
    (e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, M.jsxs)(`p`, {
          children: [
            `Then your OpenNoillirk figurine hops to your pick. Say`,
            ` `,
            j,
            ` and you land on the biggest tile, the #1 Answer: `,
            N,
            `, and people walk over to join you. Say`,
            ` `,
            P,
            ` and you are right, but you stand on a small tile of your own beside the table: `,
            (0, M.jsx)(`strong`, { children: `10 points` }),
            `, and nobody joins you.`,
          ],
        })),
        (e[28] = F))
      : (F = e[28]),
      e[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = (0, M.jsxs)(`div`, {
            children: [
              O,
              k,
              (0, M.jsxs)(`div`, {
                className: `hr-prose`,
                children: [
                  A,
                  F,
                  (0, M.jsxs)(`p`, {
                    children: [
                      `Every accepted guess scores something, so a quick one is never wasted. But in OpenNoillirk the #1 Answer is worth `,
                      (0, M.jsx)(`strong`, { children: `ten times` }),
                      ` an Off the Board one. Length, spelling and cleverness don't matter, only how many people would say it.`,
                    ],
                  }),
                ],
              }),
            ],
          })),
          (e[29] = v))
        : (v = e[29]));
    let I;
    e[30] === t
      ? (I = e[31])
      : ((I = U.map((e, r) =>
          (0, M.jsxs)(
            `button`,
            {
              type: `button`,
              className: `hr-pick`,
              "aria-pressed": r === t,
              style: o({
                "--x": `${e.wide[0]}%`,
                "--y": `${e.wide[1]}%`,
                "--xn": `${e.narrow[0]}%`,
                "--yn": `${e.narrow[1]}%`,
                "--c": W(e.band),
              }),
              onClick: () => n(r),
              children: [
                (0, M.jsx)(f, { color: e.tile }),
                (0, M.jsx)(a, { people: e.people }),
                (0, M.jsxs)(`span`, {
                  className: `hr-pick-label`,
                  children: [
                    (0, M.jsx)(`b`, { children: e.answer }),
                    (0, M.jsxs)(`span`, {
                      children: [m[e.band].points, ` pts`],
                    }),
                    (0, M.jsxs)(`span`, {
                      className: `visually-hidden`,
                      children: [`, `, m[e.band].name],
                    }),
                  ],
                }),
              ],
            },
            e.answer,
          ),
        )),
        (e[30] = t),
        (e[31] = I));
    let L;
    (e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((L = (0, M.jsxs)(`div`, {
          className: `hr-axis`,
          "aria-hidden": `true`,
          children: [
            (0, M.jsx)(`span`, { children: `Few people say it` }),
            (0, M.jsx)(`i`, {}),
            (0, M.jsx)(`span`, { children: `Most people say it` }),
          ],
        })),
        (e[32] = L))
      : (L = e[32]),
      e[33] === I
        ? (u = e[34])
        : ((u = (0, M.jsxs)(`div`, {
            className: `hr-surface`,
            children: [I, L],
          })),
          (e[33] = I),
          (e[34] = u)),
      (C = `hr-result`),
      (w = `polite`),
      e[35] === r.band
        ? (T = e[36])
        : ((T = o({ "--c": W(r.band) })), (e[35] = r.band), (e[36] = T)));
    let R;
    e[37] === i.name
      ? (R = e[38])
      : ((R = i.name.toUpperCase()), (e[37] = i.name), (e[38] = R));
    let z;
    e[39] === R
      ? (z = e[40])
      : ((z = (0, M.jsx)(`span`, { className: `hr-band`, children: R })),
        (e[39] = R),
        (e[40] = z));
    let B;
    (e[41] === r.answer
      ? (B = e[42])
      : ((B = (0, M.jsx)(`span`, {
          className: `hr-result-answer`,
          children: r.answer,
        })),
        (e[41] = r.answer),
        (e[42] = B)),
      (E = (0, M.jsxs)(`div`, {
        className: `hr-result-head`,
        children: [
          z,
          B,
          (0, M.jsxs)(`span`, {
            className: `hr-result-points`,
            children: [`+`, D],
          }),
        ],
      })),
      e[43] === i.line
        ? (x = e[44])
        : ((x = (0, M.jsx)(`p`, {
            className: `hr-result-why`,
            children: i.line,
          })),
          (e[43] = i.line),
          (e[44] = x)),
      e[45] === i.points
        ? (S = e[46])
        : ((S = (0, M.jsxs)(`p`, {
            className: `hr-result-math`,
            children: [i.points, ` points × `, H, ` for question 4`],
          })),
          (e[45] = i.points),
          (e[46] = S)),
      (b = `hr-result-follow`),
      (c = `hr-dots`),
      (l = t),
      (y = te.slice(0, s).map(q)),
      (e[0] = i.line),
      (e[1] = i.name),
      (e[2] = i.points),
      (e[3] = r.answer),
      (e[4] = r.band),
      (e[5] = t),
      (e[6] = s),
      (e[7] = c),
      (e[8] = l),
      (e[9] = u),
      (e[10] = d),
      (e[11] = p),
      (e[12] = _),
      (e[13] = v),
      (e[14] = y),
      (e[15] = b),
      (e[16] = x),
      (e[17] = S),
      (e[18] = C),
      (e[19] = w),
      (e[20] = T),
      (e[21] = E));
  } else
    ((s = e[6]),
      (c = e[7]),
      (l = e[8]),
      (u = e[9]),
      (d = e[10]),
      (p = e[11]),
      (_ = e[12]),
      (v = e[13]),
      (y = e[14]),
      (b = e[15]),
      (x = e[16]),
      (S = e[17]),
      (C = e[18]),
      (w = e[19]),
      (T = e[20]),
      (E = e[21]));
  let D;
  e[47] !== c || e[48] !== l || e[49] !== y
    ? ((D = (0, M.jsx)(`span`, { className: c, children: y }, l)),
      (e[47] = c),
      (e[48] = l),
      (e[49] = y),
      (e[50] = D))
    : (D = e[50]);
  let O = s === 0 ? `Nobody joins you` : `${s} people join you`,
    k;
  e[51] === O
    ? (k = e[52])
    : ((k = (0, M.jsx)(`span`, { children: O })), (e[51] = O), (e[52] = k));
  let N;
  e[53] !== D || e[54] !== k || e[55] !== b
    ? ((N = (0, M.jsxs)(`div`, { className: b, children: [D, k] })),
      (e[53] = D),
      (e[54] = k),
      (e[55] = b),
      (e[56] = N))
    : (N = e[56]);
  let P;
  e[57] !== N || e[58] !== x || e[59] !== S
    ? ((P = (0, M.jsxs)(`div`, { children: [x, S, N] })),
      (e[57] = N),
      (e[58] = x),
      (e[59] = S),
      (e[60] = P))
    : (P = e[60]);
  let F;
  e[61] !== P || e[62] !== C || e[63] !== w || e[64] !== T || e[65] !== E
    ? ((F = (0, M.jsxs)(`div`, {
        className: C,
        "aria-live": w,
        style: T,
        children: [E, P],
      })),
      (e[61] = P),
      (e[62] = C),
      (e[63] = w),
      (e[64] = T),
      (e[65] = E),
      (e[66] = F))
    : (F = e[66]);
  let I;
  e[67] !== u || e[68] !== F
    ? ((I = (0, M.jsxs)(`div`, { children: [u, F] })),
      (e[67] = u),
      (e[68] = F),
      (e[69] = I))
    : (I = e[69]);
  let L;
  return (
    e[70] !== d || e[71] !== p || e[72] !== _ || e[73] !== v || e[74] !== I
      ? ((L = (0, M.jsxs)(`section`, {
          id: d,
          className: p,
          "aria-labelledby": _,
          children: [v, I],
        })),
        (e[70] = d),
        (e[71] = p),
        (e[72] = _),
        (e[73] = v),
        (e[74] = I),
        (e[75] = L))
      : (L = e[75]),
    L
  );
}
function q(e, t) {
  return (0, M.jsx)(`i`, { style: { animationDelay: `${t * 40}ms` } }, e);
}
var J = [
    [[`glasses`, 1]],
    [
      [`ponytail`, 1],
      [`cap`, 2],
    ],
    [
      [`freckles`, 1],
      [`silver`, 1],
      [`binoc`, 1],
    ],
    [
      [`beret`, 1],
      [`sunhat`, 1],
      [`cap`, 1],
      [`glasses`, 1],
    ],
    [
      [`beret`, 2],
      [`sunhat`, 2],
      [`hero`, 2],
      [`cap`, 2],
      [`glasses`, 2],
    ],
  ],
  Y = [1, 2, 3, 4];
function X() {
  let e = (0, A.c)(5),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `scoring-title`,
        children: `How OpenNoillirk scoring works`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `Each accepted answer falls into one of five bands. The band comes from the answer's place on that prompt's board, our estimate of how 100 people would answer, and it sets the base points.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let i, a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`ol`, { className: `hr-ladder`, children: m.map(Z) })),
      (a = (0, M.jsx)(`p`, {
        className: `hr-ladder-key`,
        children: `Base points for each band, and how many people one answer brings to join you in a ×1, ×2, ×3 and ×4 question.`,
      })),
      (e[2] = i),
      (e[3] = a))
    : ((i = e[2]), (a = e[3]));
  let o;
  return (
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, M.jsxs)(`section`, {
          id: `scoring`,
          className: `hr-section`,
          "aria-labelledby": `scoring-title`,
          children: [
            t,
            n,
            i,
            a,
            (0, M.jsxs)(`p`, {
              className: `hr-more`,
              children: [
                `Questions 3 to 5 of a OpenNoillirk Daily count twice, 6 to 8 three times and 9 and 10 four times, and every 25 points pulls one person to your home tile. For the thresholds, a worked example and how each title is earned, see`,
                ` `,
                (0, M.jsx)(r, {
                  to: `/scoring`,
                  children: `how scoring works in detail`,
                }),
                `.`,
              ],
            }),
          ],
        })),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
function Z(e) {
  return (0, M.jsxs)(
    `li`,
    {
      style: o({ "--c": `var(--band-${e.id})`, "--p": `${e.points}` }),
      children: [
        (0, M.jsxs)(`div`, {
          className: `hr-stand`,
          children: [
            (0, M.jsx)(`span`, {
              className: `hr-who`,
              children: J[e.id].map(ne),
            }),
            (0, M.jsx)(`div`, {
              className: `hr-step`,
              children: (0, M.jsxs)(`b`, {
                children: [e.points, (0, M.jsx)(`small`, { children: `pts` })],
              }),
            }),
          ],
        }),
        (0, M.jsx)(`span`, { className: `hr-step-name`, children: e.name }),
        (0, M.jsx)(`span`, { className: `hr-step-line`, children: e.line }),
        (0, M.jsx)(`span`, {
          className: `hr-step-people`,
          children: Y.map((t) =>
            (0, M.jsxs)(
              `span`,
              {
                children: [
                  `×`,
                  t,
                  (0, M.jsx)(`b`, { children: h(g(e.id, t)) }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    },
    e.id,
  );
}
function ne(e) {
  let [t, n] = e;
  return (0, M.jsx)(
    s,
    { who: t, pose: n, className: t === `hero` ? `hr-hero` : void 0 },
    `${t}-${n}`,
  );
}
var re = [
    {
      kind: `crowd`,
      alt: `A round tile packed with wooden figurines seen from above, one raspberry figurine at its centre.`,
    },
    {
      kind: `versus`,
      alt: `Two tiles side by side: a crowd around a raspberry figurine on one, a few figurines around a blue one on the other.`,
    },
    {
      kind: `moment`,
      alt: `A raspberry figurine steps onto the biggest tile as the wooden figurines on it turn to look.`,
    },
  ],
  ie = [
    `OpenNoillirk Unlimited · 🧍38/100`,
    `⚪🔵🟣🔵🟠⚪🟣⚪⚪🟡`,
    `Close Call · beat Mia 38–25`,
    `opennoillirk.com/c/…`,
  ];
function ae() {
  let e = (0, A.c)(7),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `share-challenge-title`,
        children: `Share your OpenNoillirk result and challenge a friend`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `Guessing what most people say is more fun against someone you know, so every OpenNoillirk run ends with cards and a link made for that.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`div`, { className: `hr-fan`, children: re.map(oe) })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`p`, {
        children: `When a OpenNoillirk run ends, Share & challenge makes share cards and a short text. The text shows how many people you pulled, one coloured circle per question and your title, but none of your answers, so it never spoils the Daily for anyone.`,
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsxs)(`div`, {
        className: `hr-share`,
        children: [
          r,
          (0, M.jsxs)(`div`, {
            className: `hr-prose`,
            children: [
              i,
              (0, M.jsxs)(`figure`, {
                className: `hr-bubble`,
                children: [
                  (0, M.jsx)(`pre`, {
                    children: ie.join(`
`),
                  }),
                  (0, M.jsx)(`figcaption`, {
                    children: `The text that goes with cards like these.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsxs)(`figure`, {
        className: `hr-challenge-shot`,
        children: [
          (0, M.jsx)(`img`, {
            src: `/images/home/challenge-mia-lisbon.webp`,
            srcSet: `/images/home/challenge-mia-lisbon-700.webp 700w, /images/home/challenge-mia-lisbon.webp 1400w`,
            sizes: `(max-width: 767px) calc(100vw - 32px), 640px`,
            width: 1400,
            height: 945,
            alt: `A raspberry figurine and a blue one share the same crowded tile, with a small paper pennant between them.`,
            loading: `lazy`,
            decoding: `async`,
          }),
          (0, M.jsx)(`figcaption`, {
            children: `Playing a friend's challenge: after each answer you see theirs, and the same answer means the same tile.`,
          }),
        ],
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, M.jsxs)(`section`, {
          id: `share-challenge`,
          className: `hr-section`,
          "aria-labelledby": `share-challenge-title`,
          children: [
            t,
            n,
            a,
            (0, M.jsxs)(`div`, {
              className: `hr-challenge`,
              children: [
                o,
                (0, M.jsxs)(`div`, {
                  className: `hr-prose`,
                  children: [
                    (0, M.jsx)(`h3`, {
                      children: `Play the same prompts as your friends`,
                    }),
                    (0, M.jsx)(`p`, {
                      children: `Every Daily share, and every share of a 10- or 20-prompt Unlimited run, carries a challenge link. A friend who opens it plays the same prompts, and after each answer they see your figurine on the tile you chose, with your name on it. At the end they see where they landed on the challenge board of everyone who played that link.`,
                    }),
                    (0, M.jsx)(`p`, {
                      children: `When your friend shares, their link brings new players to the same board, so a whole group can play one challenge. It's an easy way to play with friends online: no account, just a random nickname such as Swift Otter that you can change before you send.`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[6] = s))
      : (s = e[6]),
    s
  );
}
function oe(e) {
  return (0, M.jsx)(
    `img`,
    {
      className: `hr-card hr-card-${e.kind}`,
      src: `/images/home/share-card-${e.kind}.webp`,
      width: 520,
      height: 650,
      alt: e.alt,
      loading: `lazy`,
      decoding: `async`,
    },
    e.kind,
  );
}
var se = [
  {
    stop: `Too clever`,
    answers: [
      [`Skopje`, 0],
      [`Vaduz`, 0],
    ],
  },
  {
    stop: `Holiday favourites`,
    answers: [
      [`Prague`, 1],
      [`Amsterdam`, 1],
    ],
  },
  {
    stop: `Big and famous`,
    answers: [
      [`Berlin`, 2],
      [`Madrid`, 2],
    ],
  },
  {
    stop: `What everyone says`,
    answers: [
      [`Paris`, 4],
      [`London`, 3],
      [`Rome`, 3],
    ],
  },
];
function ce() {
  let e = (0, A.c)(12),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `rarer-answers-title`,
        children: `OpenNoillirk tips: how to guess the most common answer`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `In most trivia you look for a right answer. In OpenNoillirk you look for the one most people would give, and three habits help.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`p`, {
        className: `hr-notebook-prompt`,
        children: `Name a capital city in Europe`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsx)(`ol`, { className: `hr-route`, children: se.map(le) })),
      (e[3] = a))
    : (a = e[3]);
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsx)(d, {
        color: `sky`,
        className: `hr-sticker hr-sticker-crowd`,
        people: [[`glasses`, 0]],
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, M.jsxs)(`figure`, {
        className: `hr-notebook`,
        children: [
          i,
          a,
          o,
          (0, M.jsx)(d, {
            color: `cream`,
            className: `hr-sticker hr-sticker-you`,
            people: [
              [`beret`, 2],
              [`hero`, 2],
              [`sunhat`, 2],
            ],
          }),
          (0, M.jsx)(`figcaption`, {
            children: `Every step toward the obvious capital brings more people with you.`,
          }),
        ],
      })),
      (e[5] = s))
    : (s = e[5]);
  let c, l, u, f, p;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, M.jsx)(`h3`, { children: `Say your first thought` })),
      (u = (0, M.jsx)(`p`, {
        children: `The first thing that comes to mind is usually everyone's, and that is the one you want. Don't overthink it. After every guess the OpenNoillirk result card shows “Our board Paris, London, Rome, Berlin, Madrid (est.)”, the board's top five, so each prompt teaches you where most people's minds go.`,
      })),
      (f = (0, M.jsx)(`h3`, { children: `Pick the most famous one` })),
      (p = (0, M.jsx)(`p`, {
        children: `The best-known member of a category is usually #1, so reach for the familiar, everyday one. For a moon in our solar system, The Moon is the #1 Answer, Titan is a Runner-up, and Adrastea is right but Off the Board, worth only 10 points.`,
      })),
      (c = (0, M.jsx)(`h3`, { children: `Beat the clock` })),
      (e[6] = c),
      (e[7] = l),
      (e[8] = u),
      (e[9] = f),
      (e[10] = p))
    : ((c = e[6]), (l = e[7]), (u = e[8]), (f = e[9]), (p = e[10]));
  let m;
  return (
    e[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, M.jsxs)(`section`, {
          id: `rarer-answers`,
          className: `hr-section`,
          "aria-labelledby": `rarer-answers-title`,
          children: [
            t,
            n,
            (0, M.jsxs)(`div`, {
              className: `hr-strategy`,
              children: [
                s,
                (0, M.jsxs)(`div`, {
                  className: `hr-prose hr-habits`,
                  children: [
                    l,
                    u,
                    f,
                    p,
                    c,
                    (0, M.jsxs)(`p`, {
                      children: [
                        `Thirty seconds go fast. Any accepted guess scores, while a perfect one still in your head when time runs out scores nothing. `,
                        (0, M.jsx)(r, {
                          to: `/unlimited`,
                          children: `OpenNoillirk Unlimited`,
                        }),
                        ` `,
                        `is the place to practise, and after every run the answers review shows each prompt's top five from our board.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[11] = m))
      : (m = e[11]),
    m
  );
}
function le(e) {
  let { stop: t, answers: n } = e;
  return (0, M.jsxs)(
    `li`,
    {
      children: [
        (0, M.jsx)(`span`, { className: `hr-route-stop`, children: t }),
        (0, M.jsx)(`span`, {
          className: `hr-route-answers`,
          children: n.map(ue),
        }),
      ],
    },
    t,
  );
}
function ue(e) {
  let [t, n] = e;
  return (0, M.jsxs)(
    `span`,
    {
      className: `hr-route-chip`,
      style: o({ "--c": `var(--band-${n})` }),
      children: [t, (0, M.jsx)(`small`, { children: m[n].name })],
    },
    t,
  );
}
var de = Object.values(_),
  fe = new Set([`outlier`, `wildcard`]);
function pe() {
  let e = (0, A.c)(9),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, M.jsx)(`h2`, {
        id: `win-the-crowd-title`,
        children: `Win the OpenNoillirk crowd`,
      })),
      (n = (0, M.jsx)(`p`, {
        className: `hr-dek`,
        children: `Every OpenNoillirk run starts with a hundred people on the table. The more people would give your answer, the more of them join you.`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsx)(`figure`, {
        className: `hr-shot`,
        children: (0, M.jsxs)(`picture`, {
          children: [
            (0, M.jsx)(`source`, {
              media: `(max-width: 767px)`,
              srcSet: `/images/home/win-the-crowd-phone.webp`,
              width: 780,
              height: 1581,
            }),
            (0, M.jsx)(`img`, {
              src: `/images/home/win-the-crowd.webp`,
              srcSet: `/images/home/win-the-crowd-1100.webp 1100w, /images/home/win-the-crowd.webp 2200w`,
              sizes: `(max-width: 1184px) calc(100vw - 64px), 1120px`,
              width: 2200,
              height: 1286,
              alt: `Wooden figurines stream across the table from every side toward the one tile where a raspberry figurine stands.`,
              loading: `lazy`,
              decoding: `async`,
            }),
          ],
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`p`, {
        children: `The crowd is 100 little tourists. After each round, one of them walks over to join you on your home tile for every 25 points you scored, and stays there with a ring in your colour. The number on your tile keeps count.`,
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsxs)(`div`, {
        className: `hr-prose`,
        children: [
          i,
          (0, M.jsxs)(`p`, {
            children: [
              `At the end of a OpenNoillirk run the result reads “You pulled 26 of 100”. Ten #1 Answers pull all `,
              (0, M.jsx)(`strong`, { children: `100` }),
              `: that is a perfect Daily. The people are what count: a challenge, its board and today's percentile all compare how many you pulled, and points only break a tie on the board.`,
            ],
          }),
        ],
      })),
      (e[4] = a))
    : (a = e[4]);
  let o, s;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsx)(`h3`, { children: `A title for how you played` })),
      (s = (0, M.jsx)(`p`, {
        children: `Every OpenNoillirk run ends with a title: Mind Reader for three or more #1 answers, Hit or Miss for two or more #1 answers alongside three or more Off the Board answers, then the rest as your answers land further from the top of the board.`,
      })),
      (e[5] = o),
      (e[6] = s))
    : ((o = e[5]), (s = e[6]));
  let c;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, M.jsx)(`ul`, { className: `hr-titles`, children: de.map(me) })),
      (e[7] = c))
    : (c = e[7]);
  let l;
  return (
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, M.jsxs)(`section`, {
          id: `win-the-crowd`,
          className: `hr-section`,
          "aria-labelledby": `win-the-crowd-title`,
          children: [
            t,
            n,
            r,
            (0, M.jsxs)(`div`, {
              className: `hr-crowd-text`,
              children: [
                a,
                (0, M.jsxs)(`div`, {
                  className: `hr-prose`,
                  children: [
                    o,
                    s,
                    c,
                    (0, M.jsxs)(`div`, {
                      className: `hr-titles-key`,
                      "aria-hidden": `true`,
                      children: [
                        (0, M.jsx)(`span`, { children: `Closer to #1` }),
                        (0, M.jsx)(`span`, {
                          children: `Further from the top`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
function me(e) {
  let { id: t, title: n } = e;
  return (0, M.jsx)(
    `li`,
    { className: fe.has(t) ? `is-rare` : void 0, children: n },
    t,
  );
}
function he(e) {
  let t = (0, A.c)(6),
    { size: n } = e,
    r = n === void 0 ? 28 : n,
    i,
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`rect`, {
        x: `11`,
        y: `10`,
        width: `10`,
        height: `19`,
        rx: `1.5`,
        fill: `var(--tomato)`,
      })),
      (a = (0, M.jsx)(`rect`, {
        x: `1.5`,
        y: `17`,
        width: `9`,
        height: `12`,
        rx: `1.5`,
        fill: `var(--cobalt)`,
      })),
      (o = (0, M.jsx)(`rect`, {
        x: `21.5`,
        y: `21`,
        width: `9`,
        height: `8`,
        rx: `1.5`,
        fill: `var(--marigold)`,
      })),
      (s = (0, M.jsx)(`circle`, {
        cx: `16`,
        cy: `5.5`,
        r: `3.2`,
        fill: `var(--ink)`,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : ((i = t[0]), (a = t[1]), (o = t[2]), (s = t[3]));
  let c;
  return (
    t[4] === r
      ? (c = t[5])
      : ((c = (0, M.jsxs)(`svg`, {
          width: r,
          height: r,
          viewBox: `0 0 32 32`,
          fill: `none`,
          "aria-hidden": `true`,
          children: [i, a, o, s],
        })),
        (t[4] = r),
        (t[5] = c)),
    c
  );
}
function Q() {
  let e = (0, A.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, M.jsxs)(`span`, {
          className: `rarely-wordmark`,
          children: [(0, M.jsx)(he, {}), `OpenNoillirk`],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ge(e) {
  let t = (0, A.c)(11),
    { inStage: n } = e,
    i = n === void 0 ? !1 : n,
    a = `home-header${i ? ` home-game-header` : ``}`,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsx)(r, {
        to: `/`,
        className: `home-brand`,
        "aria-label": `OpenNoillirk home`,
        children: (0, M.jsx)(Q, {}),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s =
        !i &&
        (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(r, {
              to: `/`,
              className: `home-nav-play`,
              children: `Play OpenNoillirk`,
            }),
            (0, M.jsx)(r, {
              to: `/how-to-play`,
              className: `home-nav-how`,
              children: `How to play`,
            }),
            (0, M.jsx)(r, {
              to: `/scoring`,
              className: `home-nav-scoring`,
              children: `Scoring`,
            }),
            (0, M.jsx)(r, {
              to: `/leaderboard`,
              className: `home-nav-leaderboard`,
              children: `Leaderboard`,
            }),
            (0, M.jsx)(r, {
              to: `/archive`,
              className: `home-nav-archive`,
              children: `Archive`,
            }),
          ],
        })),
      (t[1] = i),
      (t[2] = s));
  let c;
  t[3] === i
    ? (c = t[4])
    : ((c =
        !i &&
        (0, M.jsxs)(r, {
          to: `/unlimited`,
          className: `home-nav-unlimited`,
          children: [
            `Unlimited `,
            (0, M.jsx)(`span`, { "aria-hidden": `true`, children: `↗` }),
          ],
        })),
      (t[3] = i),
      (t[4] = c));
  let l;
  t[5] !== s || t[6] !== c
    ? ((l = (0, M.jsxs)(`nav`, {
        "aria-label": `Main navigation`,
        children: [s, c],
      })),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== a || t[9] !== l
      ? ((u = (0, M.jsxs)(`header`, { className: a, children: [o, l] })),
        (t[8] = a),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function _e(e) {
  let t = (0, A.c)(3),
    { focused: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsxs)(`div`, {
        className: `home-content-shell`,
        children: [
          (0, M.jsx)(z, {}),
          (0, M.jsx)(V, {}),
          (0, M.jsx)(K, {}),
          (0, M.jsx)(X, {}),
          (0, M.jsx)(pe, {}),
          (0, M.jsx)(ce, {}),
          (0, M.jsx)(ee, {}),
          (0, M.jsx)(ae, {}),
          (0, M.jsx)(p, {}),
          (0, M.jsx)(l, {}),
        ],
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, M.jsx)(`div`, {
          className: `home-reading`,
          inert: n,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var $ = `hello@opennoillirk.com`;
function ve() {
  let e = (0, A.c)(7),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { select: ye }), (e[0] = t))
    : (t = e[0]);
  let n = y(t),
    r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, M.jsxs)(`nav`, {
        "aria-labelledby": `footer-agents`,
        children: [
          (0, M.jsx)(`p`, {
            className: `home-footer-head`,
            id: `footer-agents`,
            children: `For AI agents`,
          }),
          (0, M.jsx)(`a`, {
            className: `home-footer-file`,
            href: S.llms,
            children: `llms.txt`,
          }),
          (0, M.jsx)(`a`, {
            className: `home-footer-file`,
            href: S.llmsFull,
            children: `llms-full.txt`,
          }),
        ],
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(`span`, { children: `Ask AI about this page` })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  e[3] === n
    ? (a = e[4])
    : ((a = k(n).map((e) => {
        let t = R[e.id];
        return (0, M.jsx)(
          `a`,
          {
            href: e.href,
            target: `_blank`,
            rel: `noopener`,
            "aria-label": `Ask ${e.label}`,
            title: `Ask ${e.label}`,
            onClick: () => v(`ask_ai`, { provider: e.id, page: n }),
            children: (0, M.jsx)(t, { className: `home-footer-ai-icon` }),
          },
          e.id,
        );
      })),
      (e[3] = n),
      (e[4] = a));
  let o;
  return (
    e[5] === a
      ? (o = e[6])
      : ((o = (0, M.jsxs)(`div`, {
          className: `home-footer-agents`,
          children: [
            r,
            (0, M.jsxs)(`nav`, {
              "aria-label": `Ask AI about this page`,
              className: `home-footer-ask`,
              children: [
                i,
                (0, M.jsx)(`span`, {
                  className: `home-footer-ask-icons`,
                  children: a,
                }),
              ],
            }),
          ],
        })),
        (e[5] = a),
        (e[6] = o)),
    o
  );
}
function ye(e) {
  return e.location.pathname;
}
function be(e) {
  let t = (0, A.c)(8),
    { focused: n } = e,
    i = n === void 0 ? !1 : n,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsxs)(`div`, {
        className: `home-footer-brand`,
        children: [
          (0, M.jsx)(r, {
            to: `/`,
            className: `home-brand`,
            "aria-label": `OpenNoillirk home`,
            children: (0, M.jsx)(Q, {}),
          }),
          (0, M.jsx)(`p`, {
            children: `A free daily game where the answer most people give wins the crowd.`,
          }),
          (0, M.jsx)(`a`, { href: `mailto:${$}`, children: $ }),
        ],
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, M.jsxs)(`nav`, {
        "aria-labelledby": `footer-play`,
        children: [
          (0, M.jsx)(`p`, {
            className: `home-footer-head`,
            id: `footer-play`,
            children: `Play`,
          }),
          (0, M.jsxs)(`ul`, {
            children: [
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, { to: `/`, children: `Today's Daily` }),
              }),
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, {
                  to: `/unlimited`,
                  children: `Unlimited`,
                }),
              }),
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, {
                  to: `/leaderboard`,
                  children: `Leaderboard`,
                }),
              }),
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, {
                  to: `/archive`,
                  children: `Archive`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, M.jsxs)(`nav`, {
        "aria-labelledby": `footer-learn`,
        children: [
          (0, M.jsx)(`p`, {
            className: `home-footer-head`,
            id: `footer-learn`,
            children: `Learn`,
          }),
          (0, M.jsxs)(`ul`, {
            children: [
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, {
                  to: `/how-to-play`,
                  children: `How to play`,
                }),
              }),
              (0, M.jsx)(`li`, {
                children: (0, M.jsx)(r, {
                  to: `/scoring`,
                  children: `Scoring`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[2] = s))
    : (s = t[2]);
  let c, l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, M.jsxs)(`div`, {
        className: `home-footer-grid`,
        children: [
          a,
          o,
          s,
          (0, M.jsxs)(`nav`, {
            "aria-labelledby": `footer-help`,
            children: [
              (0, M.jsx)(`p`, {
                className: `home-footer-head`,
                id: `footer-help`,
                children: `Help & information`,
              }),
              (0, M.jsxs)(`ul`, {
                children: [
                  (0, M.jsx)(`li`, {
                    children: (0, M.jsx)(r, {
                      to: `/privacy`,
                      children: `Privacy`,
                    }),
                  }),
                  (0, M.jsx)(`li`, {
                    children: (0, M.jsx)(r, {
                      to: `/suggest`,
                      children: `Suggest a question`,
                    }),
                  }),
                  (0, M.jsx)(`li`, {
                    children: (0, M.jsx)(r, {
                      to: `/terms`,
                      children: `Terms`,
                    }),
                  }),
                  (0, M.jsx)(`li`, {
                    children: (0, M.jsx)(`a`, {
                      href: `mailto:${$}`,
                      children: `Contact`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })),
      (l = (0, M.jsx)(ve, {})),
      (t[3] = c),
      (t[4] = l))
    : ((c = t[3]), (l = t[4]));
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, M.jsxs)(`div`, {
        className: `home-footer-bottom`,
        children: [
          (0, M.jsx)(`p`, { children: b }),
          (0, M.jsx)(`p`, {
            children: `© 2026 OpenNoillirk · opennoillirk.com`,
          }),
        ],
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] === i
      ? (d = t[7])
      : ((d = (0, M.jsxs)(`footer`, {
          className: `home-footer`,
          inert: i,
          children: [c, l, u],
        })),
        (t[6] = i),
        (t[7] = d)),
    d
  );
}
export { ge as n, _e as r, be as t };
