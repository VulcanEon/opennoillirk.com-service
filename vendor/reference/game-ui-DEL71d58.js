import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./jsx-runtime-D_h4s5mO.js";
import { G as i, W as a, q as o } from "./rules-DxwvjuIt.js";
import { a as s, c, r as l, s as u } from "./icons-DDwzIPdf.js";
var d = n(),
  f = e(t(), 1),
  p = r(),
  m = {
    0: `linear-gradient(180deg,var(--band-0),color-mix(in srgb,var(--band-0) 78%,black))`,
    1: `linear-gradient(180deg,var(--band-1),color-mix(in srgb,var(--band-1) 78%,black))`,
    2: `linear-gradient(180deg,var(--band-2),color-mix(in srgb,var(--band-2) 78%,black))`,
    3: `linear-gradient(180deg,var(--band-3),color-mix(in srgb,var(--band-3) 78%,black))`,
    4: `linear-gradient(180deg,var(--band-4),color-mix(in srgb,var(--band-4) 78%,black))`,
  },
  h = `linear-gradient(180deg,#7B8595,#5E6879)`,
  g = {
    f1: `#3A5FD0`,
    f2: `#D33860`,
    f3: `#A36815`,
    f4: `#8E4B8F`,
    f5: `#4E6A7A`,
  },
  _ = `#05081A`,
  v = (e) => (e === null ? _ : (i[e]?.color ?? `#05081A`));
function y(e) {
  let t = (0, d.c)(50),
    n;
  t[0] === e.round
    ? (n = t[1])
    : ((n = (0, p.jsx)(`span`, { children: e.round })),
      (t[0] = e.round),
      (t[1] = n));
  let r;
  t[2] === e.weight
    ? (r = t[3])
    : ((r =
        e.weight > 1 &&
        (0, p.jsxs)(`span`, {
          className: `og-mult`,
          children: [`×`, e.weight],
        })),
      (t[2] = e.weight),
      (t[3] = r));
  let i;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, p.jsx)(`span`, { className: `og-sp` })), (t[4] = i))
    : (i = t[4]);
  let a;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, p.jsx)(u, {})), (t[5] = a))
    : (a = t[5]);
  let o;
  t[6] === e.people
    ? (o = t[7])
    : ((o = (0, p.jsxs)(`span`, {
        className: `og-hp ppl`,
        title: `People who joined you`,
        children: [a, (0, p.jsx)(`b`, { children: e.people })],
      })),
      (t[6] = e.people),
      (t[7] = o));
  let f;
  t[8] === e.points
    ? (f = t[9])
    : ((f = e.points.toLocaleString(`en-US`)), (t[8] = e.points), (t[9] = f));
  let m;
  t[10] === f
    ? (m = t[11])
    : ((m = (0, p.jsxs)(`span`, {
        className: `og-hp`,
        children: [(0, p.jsx)(`b`, { children: f }), `\xA0pts`],
      })),
      (t[10] = f),
      (t[11] = m));
  let h = e.muted ? `Turn sound on` : `Mute sound`,
    g;
  t[12] === e.muted
    ? (g = t[13])
    : ((g = (0, p.jsx)(c, { muted: e.muted })), (t[12] = e.muted), (t[13] = g));
  let _;
  t[14] !== e.muted || t[15] !== e.onMute || t[16] !== h || t[17] !== g
    ? ((_ = (0, p.jsx)(`button`, {
        type: `button`,
        className: `og-iconbtn`,
        "aria-pressed": e.muted,
        "aria-label": h,
        onClick: e.onMute,
        children: g,
      })),
      (t[14] = e.muted),
      (t[15] = e.onMute),
      (t[16] = h),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v = e.musicOff ? `Turn music on` : `Turn music off`,
    y;
  t[19] === e.musicOff
    ? (y = t[20])
    : ((y = (0, p.jsx)(s, { off: e.musicOff })),
      (t[19] = e.musicOff),
      (t[20] = y));
  let b;
  t[21] !== e.musicOff || t[22] !== e.onMusic || t[23] !== v || t[24] !== y
    ? ((b = (0, p.jsx)(`button`, {
        type: `button`,
        className: `og-iconbtn`,
        "aria-pressed": e.musicOff,
        "aria-label": v,
        onClick: e.onMusic,
        children: y,
      })),
      (t[21] = e.musicOff),
      (t[22] = e.onMusic),
      (t[23] = v),
      (t[24] = y),
      (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, p.jsx)(l, {})), (t[26] = x))
    : (x = t[26]);
  let S;
  t[27] !== e.onQuit || t[28] !== e.quitLabel
    ? ((S = (0, p.jsx)(`button`, {
        type: `button`,
        className: `og-iconbtn`,
        "aria-label": e.quitLabel,
        onClick: e.onQuit,
        children: x,
      })),
      (t[27] = e.onQuit),
      (t[28] = e.quitLabel),
      (t[29] = S))
    : (S = t[29]);
  let C;
  t[30] !== n ||
  t[31] !== r ||
  t[32] !== b ||
  t[33] !== S ||
  t[34] !== o ||
  t[35] !== m ||
  t[36] !== _
    ? ((C = (0, p.jsxs)(`div`, {
        className: `og-qmeta`,
        children: [n, r, i, o, m, _, b, S],
      })),
      (t[30] = n),
      (t[31] = r),
      (t[32] = b),
      (t[33] = S),
      (t[34] = o),
      (t[35] = m),
      (t[36] = _),
      (t[37] = C))
    : (C = t[37]);
  let w;
  t[38] === e.text
    ? (w = t[39])
    : ((w = (0, p.jsx)(`h2`, { className: `og-qtext`, children: e.text })),
      (t[38] = e.text),
      (t[39] = w));
  let T = `${Math.ceil(e.left * 30)} seconds left`,
    E = `scaleX(${Math.max(0, Math.min(1, e.left))})`,
    D;
  t[40] === E
    ? (D = t[41])
    : ((D = (0, p.jsx)(`i`, { style: { transform: E } })),
      (t[40] = E),
      (t[41] = D));
  let O;
  t[42] !== e.warn || t[43] !== T || t[44] !== D
    ? ((O = (0, p.jsx)(`div`, {
        className: `og-qbar`,
        "data-warn": e.warn,
        role: `timer`,
        "aria-label": T,
        children: D,
      })),
      (t[42] = e.warn),
      (t[43] = T),
      (t[44] = D),
      (t[45] = O))
    : (O = t[45]);
  let k;
  return (
    t[46] !== C || t[47] !== w || t[48] !== O
      ? ((k = (0, p.jsxs)(`section`, {
          className: `og-card og-qcard`,
          "aria-label": `Question`,
          children: [C, w, O],
        })),
        (t[46] = C),
        (t[47] = w),
        (t[48] = O),
        (t[49] = k))
      : (k = t[49]),
    k
  );
}
function b(e, t) {
  let n = (0, d.c)(4),
    [r, i] = (0, f.useState)(0),
    a,
    o;
  return (
    n[0] !== t || n[1] !== e
      ? ((a = () => {
          if (!t) {
            i(0);
            return;
          }
          let n = performance.now(),
            r = 0,
            a = () => {
              let t = Math.min(1, (performance.now() - n) / 700);
              (i(Math.round(e * (1 - (1 - t) ** 3))),
                t < 1 && (r = requestAnimationFrame(a)));
            };
          return (
            (r = requestAnimationFrame(a)),
            () => cancelAnimationFrame(r)
          );
        }),
        (o = [e, t]),
        (n[0] = t),
        (n[1] = e),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, f.useEffect)(a, o),
    r
  );
}
function x(e) {
  let t = (0, d.c)(48),
    { result: n, visible: r, top: a, onReport: s, feedback: c } = e,
    [l, u] = (0, f.useState)(null),
    g = b(n?.points ?? 0, r),
    _ = n?.band ?? null,
    v = _ === null ? null : i[_],
    y = n?.reason === `timeout`,
    x = y ? o.timeout : o.passed,
    C = y ? `Out of time` : `Passed`,
    w = n?.canonical ?? n?.typed ?? ``,
    T;
  t[0] === n?.typed
    ? (T = t[1])
    : ((T = n?.typed.trim() ?? ``), (t[0] = n?.typed), (t[1] = T));
  let E = T,
    D;
  t[2] !== s || t[3] !== l || t[4] !== n || t[5] !== E
    ? ((D = () => {
        !n || l === n || (u(n), s(n.promptId, E));
      }),
      (t[2] = s),
      (t[3] = l),
      (t[4] = n),
      (t[5] = E),
      (t[6] = D))
    : (D = t[6]);
  let O = D,
    k = !r,
    A = _ === null ? h : m[_],
    j;
  t[7] === A ? (j = t[8]) : ((j = { background: A }), (t[7] = A), (t[8] = j));
  let M = v ? v.name : C,
    N;
  t[9] !== j || t[10] !== M
    ? ((N = (0, p.jsx)(`span`, {
        className: `og-badge`,
        style: j,
        children: M,
      })),
      (t[9] = j),
      (t[10] = M),
      (t[11] = N))
    : (N = t[11]);
  let P = w || `—`,
    F;
  t[12] === P
    ? (F = t[13])
    : ((F = (0, p.jsx)(`span`, { className: `ans`, children: P })),
      (t[12] = P),
      (t[13] = F));
  let I = _ !== null && _ >= 3 ? v?.color : `var(--ink)`,
    L;
  t[14] === I ? (L = t[15]) : ((L = { color: I }), (t[14] = I), (t[15] = L));
  let R;
  t[16] !== g || t[17] !== L
    ? ((R = (0, p.jsxs)(`span`, {
        className: `plus`,
        style: L,
        children: [`+`, g],
      })),
      (t[16] = g),
      (t[17] = L),
      (t[18] = R))
    : (R = t[18]);
  let z;
  t[19] !== R || t[20] !== N || t[21] !== F
    ? ((z = (0, p.jsxs)(`div`, { className: `r1`, children: [N, F, R] })),
      (t[19] = R),
      (t[20] = N),
      (t[21] = F),
      (t[22] = z))
    : (z = t[22]);
  let B = v ? v.line : x,
    V = v && n && n.weight > 1 ? `  ×${n.weight} question.` : ``,
    H;
  t[23] !== B || t[24] !== V
    ? ((H = (0, p.jsxs)(`p`, { className: `why`, children: [B, V] })),
      (t[23] = B),
      (t[24] = V),
      (t[25] = H))
    : (H = t[25]);
  let U;
  t[26] === n
    ? (U = t[27])
    : ((U =
        n?.corrected &&
        n.canonical &&
        (0, p.jsxs)(`p`, {
          className: `corr`,
          children: [`We read “`, n.typed, `” as `, n.canonical, `.`],
        })),
      (t[26] = n),
      (t[27] = U));
  let W;
  t[28] !== _ ||
  t[29] !== O ||
  t[30] !== l ||
  t[31] !== n ||
  t[32] !== E ||
  t[33] !== r
    ? ((W =
        _ === null
          ? E &&
            (0, p.jsx)(`button`, {
              type: `button`,
              className: `fol none report`,
              onClick: O,
              disabled: !r || l === n,
              children:
                l === n
                  ? `Thanks, we'll check it`
                  : `Should this count? Tell us →`,
            })
          : (0, p.jsx)(`span`, {
              className: `fol${n?.people ? `` : ` none`}`,
              children:
                n && n.people > 0
                  ? (0, p.jsxs)(p.Fragment, {
                      children: [
                        (0, p.jsx)(`span`, {
                          className: `figs`,
                          "aria-hidden": `true`,
                          children: Array.from(
                            { length: Math.min(n.people, 12) },
                            S,
                          ),
                        }),
                        n.people,
                        ` joined you`,
                      ],
                    })
                  : `Nobody joined you. Most people said something else.`,
            })),
      (t[28] = _),
      (t[29] = O),
      (t[30] = l),
      (t[31] = n),
      (t[32] = E),
      (t[33] = r),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] !== n?.aid || t[36] !== a
    ? ((G =
        a.length > 0 &&
        (0, p.jsxs)(`span`, {
          className: `est`,
          children: [
            `Our board`,
            ` `,
            a.map((e) =>
              (0, p.jsx)(
                `b`,
                {
                  className: e.aid === n?.aid ? `is-you` : void 0,
                  children: e.name,
                },
                e.aid,
              ),
            ),
            ` `,
            `(est.)`,
          ],
        })),
      (t[35] = n?.aid),
      (t[36] = a),
      (t[37] = G))
    : (G = t[37]);
  let K;
  t[38] !== c || t[39] !== W || t[40] !== G
    ? ((K = (0, p.jsxs)(`div`, { className: `r3`, children: [W, G, c] })),
      (t[38] = c),
      (t[39] = W),
      (t[40] = G),
      (t[41] = K))
    : (K = t[41]);
  let q;
  return (
    t[42] !== z || t[43] !== H || t[44] !== U || t[45] !== K || t[46] !== k
      ? ((q = (0, p.jsxs)(`section`, {
          className: `og-card og-chip`,
          "aria-hidden": k,
          children: [z, H, U, K],
        })),
        (t[42] = z),
        (t[43] = H),
        (t[44] = U),
        (t[45] = K),
        (t[46] = k),
        (t[47] = q))
      : (q = t[47]),
    q
  );
}
function S(e, t) {
  return (0, p.jsx)(u, {}, `f${String(t)}`);
}
function C(e) {
  let t = (0, d.c)(9),
    { friends: n, shown: r, you: a } = e,
    o;
  if (t[0] !== n || t[1] !== r || t[2] !== a?.aid) {
    let e;
    (t[4] !== r || t[5] !== a?.aid
      ? ((e = (e) => {
          let t = r.includes(e.key),
            n = e.aid !== null && a?.aid === e.aid,
            o = e.band === null ? null : i[e.band];
          return (0, p.jsxs)(
            `div`,
            {
              className: `og-fchip${t ? ` on` : ``}`,
              children: [
                (0, p.jsx)(`span`, {
                  className: `av`,
                  style: { background: g[e.key] },
                  "aria-hidden": `true`,
                  children: e.name.slice(0, 1).toUpperCase(),
                }),
                (0, p.jsx)(`span`, {
                  children: e.canonical
                    ? (0, p.jsxs)(p.Fragment, {
                        children: [
                          e.name,
                          ` said `,
                          (0, p.jsx)(`b`, { children: e.canonical }),
                          ` · `,
                          o?.name,
                          ` +`,
                          e.points,
                          n &&
                            (0, p.jsx)(`span`, {
                              className: `same`,
                              children: ` · same as you!`,
                            }),
                        ],
                      })
                    : `${e.name} didn't get one`,
                }),
              ],
            },
            e.key,
          );
        }),
        (t[4] = r),
        (t[5] = a?.aid),
        (t[6] = e))
      : (e = t[6]),
      (o = n.slice(0, 3).map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a?.aid),
      (t[3] = o));
  } else o = t[3];
  let s;
  return (
    t[7] === o
      ? (s = t[8])
      : ((s = (0, p.jsx)(`div`, { className: `og-fchips`, children: o })),
        (t[7] = o),
        (t[8] = s)),
    s
  );
}
function w(e) {
  let t = (0, d.c)(19),
    {
      inputRef: n,
      onSubmit: r,
      onPass: i,
      onType: a,
      disabled: o,
      lead: s,
      describedBy: c,
    } = e,
    l;
  t[0] !== n || t[1] !== r
    ? ((l = (e) => {
        (e.preventDefault(), r(n.current?.value ?? ``));
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    f = T,
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, p.jsx)(`span`, {
        className: `visually-hidden`,
        children: `Your answer`,
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== c || t[5] !== n || t[6] !== a
    ? ((h = (0, p.jsxs)(`label`, {
        className: `og-field`,
        children: [
          m,
          (0, p.jsx)(`input`, {
            ref: n,
            type: `text`,
            name: `answer`,
            placeholder: `What would most people say?`,
            autoComplete: `off`,
            autoCorrect: `off`,
            autoCapitalize: `off`,
            spellCheck: !1,
            enterKeyHint: `go`,
            maxLength: 60,
            "aria-describedby": c,
            onInput: a,
          }),
        ],
      })),
      (t[4] = c),
      (t[5] = n),
      (t[6] = a),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== o || t[9] !== i
    ? ((g = (0, p.jsx)(`button`, {
        type: `button`,
        className: `og-pass`,
        onPointerDown: f,
        onClick: i,
        disabled: o,
        children: `Pass`,
      })),
      (t[8] = o),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === o
    ? (_ = t[12])
    : ((_ = (0, p.jsx)(`button`, {
        type: `submit`,
        className: `og-go`,
        onPointerDown: f,
        "aria-label": `Submit answer`,
        disabled: o,
        children: `→`,
      })),
      (t[11] = o),
      (t[12] = _));
  let v;
  return (
    t[13] !== s || t[14] !== u || t[15] !== h || t[16] !== g || t[17] !== _
      ? ((v = (0, p.jsxs)(`form`, {
          className: `og-dock`,
          onSubmit: u,
          "aria-label": `Your answer`,
          children: [s, h, g, _],
        })),
        (t[13] = s),
        (t[14] = u),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function T(e) {
  return e.preventDefault();
}
var E = (e) => String(e).padStart(2, `0`);
function D(e) {
  let t = Math.max(0, Math.floor(e / 1e3));
  return `${E(Math.floor(t / 3600))}:${E(Math.floor((t % 3600) / 60))}:${E(t % 60)}`;
}
function O() {
  let e = (0, d.c)(2),
    [t, n] = (0, f.useState)(null),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {
          let e = () => n(D(a()));
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }),
        (i = []),
        (e[0] = r),
        (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, f.useEffect)(r, i),
    t
  );
}
function k(e) {
  let t = (0, d.c)(6),
    { label: n, onClose: r, children: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a =
        r &&
        (0, p.jsx)(`button`, {
          type: `button`,
          className: `og-iconbtn og-close`,
          "aria-label": `Close`,
          onClick: r,
          children: (0, p.jsx)(l, {}),
        })),
      (t[0] = r),
      (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== n || t[4] !== a
      ? ((o = (0, p.jsxs)(`section`, {
          className: `og-sheet`,
          "aria-label": n,
          children: [a, i],
        })),
        (t[2] = i),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function A(e) {
  let t = (0, d.c)(5),
    { results: n, length: r } = e,
    a = Math.max(r, n.length),
    o;
  if (t[0] !== a || t[1] !== n) {
    let e;
    (t[3] === n
      ? (e = t[4])
      : ((e = (e, t) => {
          let r = n[t],
            a = r
              ? r.band === null
                ? `miss`
                : (i[r.band]?.name ?? ``)
              : `not played`;
          return (0, p.jsx)(
            `li`,
            {
              className: r ? `` : `empty`,
              style: r ? { background: v(r.band) } : void 0,
              "aria-label": `Question ${t + 1}: ${a}`,
            },
            `q${String(t)}`,
          );
        }),
        (t[3] = n),
        (t[4] = e)),
      (o = (0, p.jsx)(`ol`, {
        className: `og-strip`,
        "aria-label": `Your answers by band`,
        children: Array.from({ length: Math.min(a, 20) }, e),
      })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = o));
  } else o = t[2];
  return o;
}
export {
  x as a,
  D as c,
  y as i,
  O as l,
  A as n,
  k as o,
  C as r,
  v as s,
  w as t,
};
