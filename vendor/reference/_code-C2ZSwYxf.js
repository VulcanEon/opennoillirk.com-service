import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./link-CFi9sgXA.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import { t as a } from "./preload-helper-qlgyTAkD.js";
import "./seo-DEwHsI0l.js";
import "./climb-head-B90-o7R9.js";
import { N as o, R as s, U as c, n as l, w as u } from "./rules-DxwvjuIt.js";
import { t as d } from "./storage-Cd9DMQud.js";
import { a as ee } from "./stage-choice-DO9JGjKK.js";
import {
  b as te,
  f as ne,
  n as re,
  o as ie,
  r as f,
  s as p,
} from "./main-BXKF3zmu.js";
import { a as m, i as h, s as ae } from "./runs-DrM9YA6U.js";
import {
  a as g,
  i as _,
  o as v,
  s as y,
  t as oe,
} from "./stage-toggle-LI6FLr3n.js";
import {
  C as se,
  S as ce,
  _ as b,
  f as le,
  h as x,
  l as ue,
  o as de,
  r as S,
  t as fe,
  v as pe,
  x as me,
} from "./copy-CMIldnKw.js";
import { t as he } from "./height-CWSuyi2y.js";
import {
  a as C,
  d as w,
  n as ge,
  o as T,
  r as _e,
  s as E,
  t as D,
} from "./poster-icons-C6vhkpTx.js";
import { n as ve } from "./home-sections-CGYgZ4JZ.js";
import { t as ye } from "./challenge-switch-BjAL4Z8M.js";
var be = n(),
  O = e(t()),
  k = i(),
  A = [`#3A5FD0`, `#D33860`, `#A36815`],
  j = {
    friend: `/images/climb/krill-friend.png`,
    you: `/images/climb/krill-you.png`,
    shadow: `/images/climb/krill-shadow.png`,
  },
  M = 15,
  N = 22,
  xe = () =>
    a(async () => {
      let { defaultArt: e } = await import(`./src-CT_bkS5Q.js`);
      return { defaultArt: e };
    }, []).then(({ defaultArt: e }) => ({
      friend: e.friend.poses.at(0),
      hero: e.hero.poses.at(0),
    }));
function P(e) {
  let t = (0, be.c)(96),
    {
      model: n,
      header: r,
      onTake: i,
      onBoard: a,
      onSendBack: s,
      sendNote: c,
      sendLink: l,
      instead: u,
      climb: d,
    } = e,
    ee = d !== void 0,
    [te, ne] = (0, O.useState)(null),
    re,
    ie;
  (t[0] === ee
    ? ((re = t[1]), (ie = t[2]))
    : ((re = () => {
        if (ee) return;
        let e = !0;
        return (
          xe()
            .then((t) => {
              e && ne(t);
            })
            .catch(we),
          () => {
            e = !1;
          }
        );
      }),
      (ie = [ee]),
      (t[0] = ee),
      (t[1] = re),
      (t[2] = ie)),
    (0, O.useEffect)(re, ie));
  let {
      inviter: f,
      starter: p,
      owner: m,
      questions: h,
      chips: ae,
      strip: g,
      mine: _,
    } = n,
    v;
  t[3] !== f.name || t[4] !== p
    ? ((v = ue(f.name, p)), (t[3] = f.name), (t[4] = p), (t[5] = v))
    : (v = t[5]);
  let y = v,
    b = (d ? d.mine : _) === null,
    S = te?.friend,
    C = te?.hero,
    w = null,
    T = f.people,
    E = _ ?? `?`,
    ve = f.name,
    ye = f.people,
    A;
  t[6] === h ? (A = t[7]) : ((A = o(h)), (t[6] = h), (t[7] = A));
  let P = `${y}: ${ve} pulled ${ye} of ${A}. Can you beat it?`;
  if (d) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { url: j.friend, w: M, h: N }), (t[8] = e))
      : (e = t[8]),
      (S = e));
    let n = b ? j.shadow : j.you,
      r;
    (t[9] === n
      ? (r = t[10])
      : ((r = { url: n, w: M, h: N }), (t[9] = n), (t[10] = r)),
      (C = r));
    let i;
    (t[11] === d.inviter
      ? (i = t[12])
      : ((i = he(d.inviter)), (t[11] = d.inviter), (t[12] = i)),
      (T = i));
    let a;
    if (
      (t[13] === d.mine
        ? (a = t[14])
        : ((a = d.mine === null ? `?` : he(d.mine)),
          (t[13] = d.mine),
          (t[14] = a)),
      (E = a),
      (P = `${y}: ${f.name} reached ${T}. Can you climb higher?`),
      d.mine !== null)
    ) {
      let e;
      (t[15] !== d.inviter || t[16] !== d.mine || t[17] !== f.name
        ? ((e = fe(x(d.mine, d.inviter), f.name)),
          (t[15] = d.inviter),
          (t[16] = d.mine),
          (t[17] = f.name),
          (t[18] = e))
        : (e = t[18]),
        (w = e),
        (P = `${w} You ${E}, ${f.name} ${T}.`));
    }
  } else if (_ !== null) {
    let e;
    (t[19] !== f.name || t[20] !== f.people || t[21] !== _
      ? ((e = fe(x(_, f.people), f.name)),
        (t[19] = f.name),
        (t[20] = f.people),
        (t[21] = _),
        (t[22] = e))
      : (e = t[22]),
      (w = e),
      (P = `${w} You ${_}, ${f.name} ${f.people}.`));
  }
  let F;
  t[23] === r
    ? (F = t[24])
    : ((F = r && (0, k.jsx)(`div`, { className: `og-intro-top`, children: r })),
      (t[23] = r),
      (t[24] = F));
  let Te = d ? `climb` : void 0,
    I;
  t[25] === f.name
    ? (I = t[26])
    : ((I = f.name.charAt(0).toUpperCase()), (t[25] = f.name), (t[26] = I));
  let L;
  t[27] === I
    ? (L = t[28])
    : ((L = (0, k.jsx)(`span`, { className: `og-duel-av`, children: I })),
      (t[27] = I),
      (t[28] = L));
  let R;
  t[29] !== y || t[30] !== L
    ? ((R = (0, k.jsxs)(`p`, {
        className: `og-duel-from`,
        "aria-hidden": `true`,
        children: [L, y],
      })),
      (t[29] = y),
      (t[30] = L),
      (t[31] = R))
    : (R = t[31]);
  let z;
  t[32] === P
    ? (z = t[33])
    : ((z = (0, k.jsx)(`h1`, {
        id: `og-duel-title`,
        className: `visually-hidden`,
        children: P,
      })),
      (t[32] = P),
      (t[33] = z));
  let B;
  t[34] === S
    ? (B = t[35])
    : ((B =
        S &&
        (0, k.jsx)(`img`, {
          className: `og-duel-fig them`,
          src: S.url,
          width: S.w,
          height: S.h,
          alt: ``,
        })),
      (t[34] = S),
      (t[35] = B));
  let V;
  t[36] !== d || t[37] !== C || t[38] !== b
    ? ((V =
        C &&
        (0, k.jsx)(`img`, {
          className: b && !d ? `og-duel-fig you shadow` : `og-duel-fig you`,
          src: C.url,
          width: C.w,
          height: C.h,
          alt: ``,
        })),
      (t[36] = d),
      (t[37] = C),
      (t[38] = b),
      (t[39] = V))
    : (V = t[39]);
  let H;
  t[40] === T
    ? (H = t[41])
    : ((H = (0, k.jsx)(`span`, {
        className: `og-duel-score them`,
        children: T,
      })),
      (t[40] = T),
      (t[41] = H));
  let Ee;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, k.jsx)(`span`, { className: `og-duel-vs`, children: `VS` })),
      (t[42] = Ee))
    : (Ee = t[42]);
  let U;
  t[43] === E
    ? (U = t[44])
    : ((U = (0, k.jsx)(`span`, {
        className: `og-duel-score you`,
        children: E,
      })),
      (t[43] = E),
      (t[44] = U));
  let W;
  t[45] === f.name
    ? (W = t[46])
    : ((W = (0, k.jsx)(`span`, {
        className: `og-duel-name them`,
        children: f.name,
      })),
      (t[45] = f.name),
      (t[46] = W));
  let G;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, k.jsx)(`span`, {
        className: `og-duel-name you`,
        children: `You`,
      })),
      (t[47] = G))
    : (G = t[47]);
  let K;
  t[48] !== B || t[49] !== V || t[50] !== H || t[51] !== U || t[52] !== W
    ? ((K = (0, k.jsxs)(`div`, {
        className: `og-duel-stage`,
        "aria-hidden": `true`,
        children: [B, V, H, Ee, U, W, G],
      })),
      (t[48] = B),
      (t[49] = V),
      (t[50] = H),
      (t[51] = U),
      (t[52] = W),
      (t[53] = K))
    : (K = t[53]);
  let q;
  t[54] === w
    ? (q = t[55])
    : ((q =
        w &&
        (0, k.jsx)(`p`, {
          className: `og-duel-done`,
          "aria-hidden": `true`,
          children: w,
        })),
      (t[54] = w),
      (t[55] = q));
  let J;
  t[56] !== d || t[57] !== g
    ? ((J =
        g &&
        (0, k.jsxs)(`p`, {
          className: `og-duel-strip`,
          children: [
            (0, k.jsx)(`span`, {
              className: `og-duel-faces`,
              "aria-hidden": `true`,
              children: g.faces.map(Ce),
            }),
            d ? de(d.leader ?? null, g.count) : ce(g.leader, g.count),
          ],
        })),
      (t[56] = d),
      (t[57] = g),
      (t[58] = J))
    : (J = t[58]);
  let Y;
  t[59] === ae ? (Y = t[60]) : ((Y = ae.map(Se)), (t[59] = ae), (t[60] = Y));
  let X;
  t[61] === Y
    ? (X = t[62])
    : ((X = (0, k.jsx)(`ul`, { className: `og-duel-chips`, children: Y })),
      (t[61] = Y),
      (t[62] = X));
  let Z;
  t[63] !== f.name || t[64] !== m || t[65] !== h || t[66] !== b
    ? ((Z = b ? pe(f.name, h) : le(m, f.name)),
      (t[63] = f.name),
      (t[64] = m),
      (t[65] = h),
      (t[66] = b),
      (t[67] = Z))
    : (Z = t[67]);
  let Q;
  t[68] === Z
    ? (Q = t[69])
    : ((Q = (0, k.jsx)(`p`, { className: `og-duel-line`, children: Z })),
      (t[68] = Z),
      (t[69] = Q));
  let De;
  t[70] !== u ||
  t[71] !== f.name ||
  t[72] !== a ||
  t[73] !== s ||
  t[74] !== i ||
  t[75] !== m ||
  t[76] !== l ||
  t[77] !== c ||
  t[78] !== p ||
  t[79] !== b
    ? ((De = b
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(`button`, {
                type: `button`,
                className: `og-duel-take`,
                onClick: i,
                children: [(0, k.jsx)(_e, {}), se(f.name, p)],
              }),
              (0, k.jsx)(oe, {}),
              u,
            ],
          })
        : (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(`button`, {
                type: `button`,
                className: `og-duel-take`,
                onClick: a,
                children: [(0, k.jsx)(D, {}), me(m)],
              }),
              (0, k.jsxs)(`button`, {
                type: `button`,
                className: `og-duel-alt`,
                onClick: s,
                children: [`Send it back to `, f.name],
              }),
              (0, k.jsx)(`p`, {
                className: `og-duel-note`,
                role: `status`,
                children: c,
              }),
              l &&
                (0, k.jsxs)(`div`, {
                  className: `og-linkfield`,
                  children: [
                    (0, k.jsx)(ge, {}),
                    (0, k.jsx)(`span`, {
                      className: `og-linkfield-url`,
                      children: l,
                    }),
                  ],
                }),
            ],
          })),
      (t[70] = u),
      (t[71] = f.name),
      (t[72] = a),
      (t[73] = s),
      (t[74] = i),
      (t[75] = m),
      (t[76] = l),
      (t[77] = c),
      (t[78] = p),
      (t[79] = b),
      (t[80] = De))
    : (De = t[80]);
  let Oe;
  t[81] !== J || t[82] !== X || t[83] !== Q || t[84] !== De
    ? ((Oe = (0, k.jsxs)(`div`, {
        className: `og-duel-bottom`,
        children: [J, X, Q, De],
      })),
      (t[81] = J),
      (t[82] = X),
      (t[83] = Q),
      (t[84] = De),
      (t[85] = Oe))
    : (Oe = t[85]);
  let $;
  t[86] !== R ||
  t[87] !== z ||
  t[88] !== K ||
  t[89] !== q ||
  t[90] !== Oe ||
  t[91] !== Te
    ? (($ = (0, k.jsxs)(`section`, {
        className: `og-duel`,
        "data-stage": Te,
        "aria-labelledby": `og-duel-title`,
        children: [R, z, K, q, Oe],
      })),
      (t[86] = R),
      (t[87] = z),
      (t[88] = K),
      (t[89] = q),
      (t[90] = Oe),
      (t[91] = Te),
      (t[92] = $))
    : ($ = t[92]);
  let ke;
  return (
    t[93] !== $ || t[94] !== F
      ? ((ke = (0, k.jsxs)(k.Fragment, { children: [F, $] })),
        (t[93] = $),
        (t[94] = F),
        (t[95] = ke))
      : (ke = t[95]),
    ke
  );
}
function Se(e) {
  return (0, k.jsx)(`li`, { children: e }, e);
}
function Ce(e, t) {
  return (0, k.jsx)(
    `span`,
    {
      style: { background: A[t % A.length] },
      children: e.name.charAt(0).toUpperCase(),
    },
    e.id,
  );
}
function we() {}
var F = (e, t) => e == null || (ne(t)[e] ?? null) !== null;
function Te(e, t) {
  for (let [n, r] of t.entries())
    for (let t of e) if (!F(t.aids.at(n), r)) return !1;
  return !0;
}
function I(e) {
  return e.mode === `daily`
    ? { mode: `daily`, date: e.date ?? ``, players: [] }
    : {
        mode: `unlimited`,
        length: e.length ?? 10,
        seed: e.seed ?? 0,
        bank: e.bank ?? 0,
        players: [],
      };
}
var L = (e, t) => e.length === t.length && t.every((t, n) => F(e.at(n), t));
function R(e, t) {
  let n = e.players.filter((e) => L(e.aids, t)),
    r = e.players.find((t) => t.id === e.inviter.id);
  return r && !n.includes(r) ? null : { ...e, players: n };
}
function z(e, t) {
  let n = e.players.filter((e) => !t.has(e.id)),
    r = { ...I(e), players: n.map((e) => ({ name: e.name, aids: e.aids })) },
    i = n[0],
    a = i ? { id: i.id, name: i.name, people: i.people } : null,
    o = e.starter;
  return {
    challenge: r,
    inviter: a,
    starter:
      o !== null && a !== null && a.id !== o.id && !t.has(o.id) ? o.name : null,
    own: t.has(e.inviter.id),
    ownIds: t,
  };
}
var B = (e, t) => (e === `daily` && t !== null ? `Daily #${t}` : `Unlimited`);
function V(e, t, n, r) {
  if (!t.inviter) return null;
  let i = e.mode === `daily` ? 10 : (e.length ?? 10),
    a = e.inviter.id === e.board.root ? e.inviter : e.starter,
    o = `unknown`;
  a && (o = t.ownIds.has(a.id) ? `you` : { name: a.name });
  let s =
      n === null
        ? [B(e.mode, r), `${i} questions`, `30 s each`]
        : [B(e.mode, r), `${S(o)} · ${b(e.board.count)} played`],
    c = e.board.leader,
    l = e.players.some((e) => e.id === c.id)
      ? c
      : ([...e.players].sort((e, t) => t.people - e.people)[0] ?? null),
    u =
      n === null && e.board.count >= 2 && l
        ? {
            faces: e.players
              .filter((e) => !t.ownIds.has(e.id))
              .slice(0, 3)
              .map((e) => ({ id: e.id, name: e.name })),
            leader: { name: l.name, people: l.people, you: t.ownIds.has(l.id) },
            count: e.board.count,
          }
        : null;
  return {
    inviter: { name: t.inviter.name, people: t.inviter.people },
    starter: t.starter,
    owner: o,
    questions: i,
    chips: s,
    strip: u,
    mine: n,
  };
}
function H(e) {
  let t = null;
  for (let n of e) (!t || n.points > t.points) && (t = n);
  return t && { name: t.name, you: t.you };
}
function Ee(e, t, n) {
  let r = t.at(-1) ?? { name: `A friend`, people: 0 },
    i = e.players[0]?.name ?? r.name,
    a = e.mode === `daily` ? 10 : e.length,
    o = [...t].sort((e, t) => t.people - e.people)[0] ?? r;
  return {
    inviter: { name: r.name, people: r.people },
    starter: e.players.length > 1 && i !== r.name ? i : null,
    owner: { name: i },
    questions: a,
    chips: [B(e.mode, n), `${a} questions`, `30 s each`],
    strip:
      e.players.length >= 2
        ? {
            faces: e.players
              .slice(0, 3)
              .map((e, t) => ({ id: `p${t}`, name: e.name })),
            leader: { name: o.name, people: o.people, you: !1 },
            count: e.players.length,
          }
        : null,
    mine: null,
  };
}
var U = {
    mismatch: `This challenge was made on an older question set.`,
    missing: `We couldn't find this challenge.`,
    unavailable: `We couldn't open this challenge right now.`,
    invalid: `This challenge link doesn't work.`,
    own: `This is your own challenge link.`,
  },
  W = () => void 0;
async function G(e) {
  let t;
  if (e.mode === `daily`) {
    let { file: n, fallback: r } = await g(e.date);
    if (r || n.date !== e.date) return { state: `mismatch`, mode: `daily` };
    let i = c(),
      a = e.date === i ? d.getDaily(e.date) : null,
      o = n.prompts.map((e) => e.id),
      s = a !== null && a.results.every((e, t) => e.promptId === o[t]),
      l = s ? a.results : [];
    t = {
      kind: { kind: `daily`, date: e.date, number: u(e.date) },
      prompts: n.prompts,
      challengers: e.players,
      resume:
        s && !a.done && l.length > 0 ? { results: l, index: l.length } : null,
      finished: s && a.done ? l : null,
      saves: e.date === i,
    };
  } else {
    let n = await v();
    if (n.bank !== e.bank) return { state: `mismatch`, mode: `unlimited` };
    let r = Array.from({ length: e.length }, (t, r) => l(n.prompts, e.seed, r)),
      i = await Promise.all(r.map((e) => y(e.id)));
    t = {
      kind: { kind: `unlimited`, length: e.length, seed: e.seed, bank: n.bank },
      prompts: i,
      index: n.prompts,
      challengers: e.players,
      saves: !1,
    };
  }
  return { state: `ready`, setup: t, totals: p(e.players, t.prompts) };
}
var K = (e) => e.reduce((e, t) => e + t.people, 0),
  q = (e) => e.reduce((e, t) => e + t.points, 0),
  J = (e) => (e.kind.kind === `daily` ? e.kind.number : null);
async function Y(e, t) {
  if (!t.view.found) return { state: `missing` };
  let n = await G(I(t.view));
  if (n.state === `mismatch`) return n;
  let r = R(t.view, n.setup.prompts);
  if (!r) return { state: `mismatch`, mode: t.view.mode };
  let i = z(r, new Set(d.ownRuns())),
    a = { ...n.setup, challengers: i.challenge.players },
    o = a.finished ?? null;
  if (i.own && o)
    return {
      state: `ready`,
      setup: a,
      poster: null,
      challenge: null,
      saved: null,
      via: null,
      climbLeader: null,
    };
  let s = V(r, i, o ? K(o) : null, J(a));
  if (!s || !i.inviter) return { state: `own` };
  let c = {
    kind: `short`,
    via: e,
    reposted: o !== null,
    runId: o ? m(8) : null,
    inviter: {
      id: i.inviter.id,
      name: i.inviter.name,
      people: i.inviter.people,
      points: p(i.challenge.players.slice(0, 1), a.prompts)[0]?.points ?? 0,
    },
    owner: s.owner,
  };
  return {
    state: `ready`,
    setup: { ...a, finished: null },
    poster: s,
    challenge: c,
    saved: o,
    via: e,
    climbLeader: H(
      p(r.players, a.prompts).map((e, t) => ({
        name: e.name,
        points: e.points,
        you: i.ownIds.has(r.players[t]?.id ?? ``),
      })),
    ),
  };
}
async function X(e) {
  let t = f(e.code, c());
  if (t.kind !== `long`) return { state: `invalid` };
  let n = t.challenge,
    r = await G(n);
  if (r.state === `mismatch`) return r;
  if (!Te(n.players, r.setup.prompts))
    return { state: `mismatch`, mode: n.mode };
  let i = Ee(n, r.totals, J(r.setup)),
    a = {
      kind: `long`,
      via: null,
      reposted: !1,
      runId: null,
      inviter: {
        id: null,
        name: i.inviter.name,
        people: i.inviter.people,
        points: r.totals.at(-1)?.points ?? 0,
      },
      owner: i.owner,
    },
    o = {
      state: `ready`,
      setup: r.setup,
      challenge: a,
      saved: null,
      via: null,
    };
  if (r.setup.finished) return { ...o, poster: null, climbLeader: null };
  let s = H(r.totals.map((e) => ({ ...e, you: !1 })));
  return { ...o, poster: i, climbLeader: s };
}
function Z(e) {
  return e.kind === `invalid`
    ? Promise.resolve({ state: `invalid` })
    : e.kind === `unavailable`
      ? Promise.resolve({ state: `unavailable` })
      : e.kind === `long`
        ? X(e)
        : Y(e.code, e);
}
function Q() {
  let e = (0, be.c)(40),
    t = re.useLoaderData(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { state: `loading` }), (e[0] = n))
    : (n = e[0]);
  let [i, a] = (0, O.useState)(n),
    [o, c] = (0, O.useState)(!1),
    [l, u] = (0, O.useState)(null),
    [ne, f] = (0, O.useState)(null),
    [p, g] = (0, O.useState)(null),
    v = (0, O.useRef)(null),
    y = ee(`challenge`),
    [se, ce] = (0, O.useState)(y);
  if (se !== y && (ce(y), c(!1), i.state === `ready` && !i.saved)) {
    let e = ye(i.setup);
    e !== i.setup &&
      a({ ...i, setup: e, poster: e.finished ? null : i.poster });
  }
  let b, le;
  (e[1] === t
    ? ((b = e[2]), (le = e[3]))
    : ((b = () => {
        let e = !0;
        return (
          Z(t)
            .then((t) => {
              e &&
                (a(t),
                te(`challenge_open`, {
                  players: t.state === `ready` ? t.setup.challengers.length : 0,
                  valid: t.state === `ready`,
                }));
            })
            .catch(() => {
              e && a({ state: `invalid` });
            }),
          () => {
            e = !1;
          }
        );
      }),
      (le = [t]),
      (e[1] = t),
      (e[2] = b),
      (e[3] = le)),
    (0, O.useEffect)(b, le));
  let x;
  e[4] !== i.challenge?.runId ||
  e[5] !== i.saved ||
  e[6] !== i.setup ||
  e[7] !== i.state ||
  e[8] !== i.via
    ? ((x = () => {
        if (i.state !== `ready` || !i.saved || !i.via || v.current === i.via)
          return;
        let e = ae(i.setup.kind, i.saved);
        if (!e) return;
        v.current = i.via;
        let t = d.nickname() ?? s();
        d.setNickname(t);
        let n = (e) => {
          (d.addOwnRun(e.id), g(e));
        };
        h(
          {
            id: i.challenge?.runId ?? m(8),
            name: t,
            via: i.via,
            reposted: !0,
            run: e,
          },
          n,
        )
          .then((e) => {
            e && n(e);
          })
          .catch(W);
      }),
      (e[4] = i.challenge?.runId),
      (e[5] = i.saved),
      (e[6] = i.setup),
      (e[7] = i.state),
      (e[8] = i.via),
      (e[9] = x))
    : (x = e[9]);
  let ue;
  (e[10] === i ? (ue = e[11]) : ((ue = [i]), (e[10] = i), (e[11] = ue)),
    (0, O.useEffect)(x, ue));
  let de;
  e[12] === i
    ? (de = e[13])
    : ((de = () => {
        i.state !== `ready` ||
          !i.saved ||
          (c(!0),
          a({ ...i, poster: null, setup: { ...i.setup, finished: i.saved } }));
      }),
      (e[12] = i),
      (e[13] = de));
  let S = de,
    fe;
  e[14] !== i.poster ||
  e[15] !== i.saved ||
  e[16] !== i.setup ||
  e[17] !== i.state ||
  e[18] !== p?.id
    ? ((fe = (e) => {
        if (i.state !== `ready` || !i.saved || !i.poster) return;
        let t = d.nickname() ?? s(),
          n = p?.id ?? ie(i.setup.kind, i.setup.challengers, t, i.saved),
          r = e === `climb` ? he(q(i.saved)) : (i.poster.mine ?? K(i.saved)),
          a = i.poster.inviter.name;
        w(T(r, E(n, `native`)), null)
          .then((e) => {
            e === `shared`
              ? (te(`share_action`, { card: `home`, method: `native` }),
                u(`Sent.`))
              : e === `copied`
                ? (te(`share_action`, { card: `home`, method: `fallback` }),
                  u(`Copied. Paste it to ${a}.`))
                : e === `manual` &&
                  (u(`Sharing isn't available here · copy the link below`),
                  f(C(n)));
          })
          .catch(W);
      }),
      (e[14] = i.poster),
      (e[15] = i.saved),
      (e[16] = i.setup),
      (e[17] = i.state),
      (e[18] = p?.id),
      (e[19] = fe))
    : (fe = e[19]);
  let pe = fe,
    me;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, k.jsx)(ve, { inStage: !0 })), (e[20] = me))
    : (me = e[20]);
  let ge = me,
    _e;
  e[21] !== i.mode || e[22] !== i.state
    ? ((_e =
        i.state === `mismatch` && i.mode === `unlimited`
          ? {
              to: `/unlimited`,
              label: `Play Unlimited`,
              line: `Start a new Unlimited run`,
            }
          : {
              to: `/`,
              label: `Play today's questions`,
              line: `Play today's questions`,
            }),
      (e[21] = i.mode),
      (e[22] = i.state),
      (e[23] = _e))
    : (_e = e[23]);
  let D = _e,
    A = i.state === `ready` ? i.setup : null,
    j = i.state === `ready` ? i.challenge : null,
    M;
  e[24] !== D ||
  e[25] !== i.challenge?.inviter ||
  e[26] !== i.climbLeader ||
  e[27] !== i.poster ||
  e[28] !== i.saved ||
  e[29] !== i.state ||
  e[30] !== S ||
  e[31] !== pe ||
  e[32] !== ne ||
  e[33] !== l
    ? ((M = (e) => {
        let { start: t, waiting: n, stage: a } = e;
        return i.state === `ready` && i.poster
          ? (0, k.jsx)(P, {
              model: i.poster,
              header: ge,
              climb:
                a === `climb`
                  ? {
                      inviter: i.challenge?.inviter.points ?? 0,
                      mine: i.saved ? q(i.saved) : null,
                      leader: i.climbLeader,
                    }
                  : void 0,
              onTake: () => t(),
              onBoard: S,
              onSendBack: () => pe(a),
              sendNote: l,
              sendLink: ne,
              instead: (0, k.jsx)(r, {
                to: `/`,
                className: `og-duel-alt`,
                children: `Play today's Daily instead`,
              }),
            })
          : i.state === `loading` || i.state === `ready`
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(`div`, {
                    className: `og-intro-top`,
                    children: ge,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `og-hero`,
                    "aria-busy": `true`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `og-kicker`,
                        children: `Challenge`,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `og-line`,
                        children: n ? `Loading…` : `Opening the challenge…`,
                      }),
                    ],
                  }),
                ],
              })
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(`div`, {
                    className: `og-intro-top`,
                    children: ge,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `og-hero`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `og-kicker`,
                        children: `Challenge`,
                      }),
                      (0, k.jsx)(`h1`, {
                        className: `og-h1`,
                        children: U[i.state],
                      }),
                      (0, k.jsx)(`p`, {
                        className: `og-line`,
                        children:
                          i.state === `own`
                            ? `Send it to friends: when they play it, they land on your board.`
                            : `${D.line} instead and send your own.`,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `og-actions`,
                        children: (0, k.jsx)(r, {
                          to: D.to,
                          className: `og-link`,
                          children: D.label,
                        }),
                      }),
                      (0, k.jsx)(oe, {}),
                    ],
                  }),
                ],
              });
      }),
      (e[24] = D),
      (e[25] = i.challenge?.inviter),
      (e[26] = i.climbLeader),
      (e[27] = i.poster),
      (e[28] = i.saved),
      (e[29] = i.state),
      (e[30] = S),
      (e[31] = pe),
      (e[32] = ne),
      (e[33] = l),
      (e[34] = M))
    : (M = e[34]);
  let N;
  return (
    e[35] !== o || e[36] !== j || e[37] !== M || e[38] !== A
      ? ((N = (0, k.jsx)(`main`, {
          className: `rarely-challenge`,
          children: (0, k.jsx)(_, {
            route: `challenge`,
            setup: A,
            challenge: j,
            popupOnRestore: o,
            homeMode: `landing`,
            lockPage: !0,
            intro: M,
          }),
        })),
        (e[35] = o),
        (e[36] = j),
        (e[37] = M),
        (e[38] = A),
        (e[39] = N))
      : (N = e[39]),
    N
  );
}
export { Q as component };
