import { t as e } from "./storage-Cd9DMQud.js";
var t = `/assets/cheer-DDJzt95F.mp3`,
  n = `/assets/chime-ClZJeTC3.mp3`,
  r = `/assets/clock-Diy0GQBl.mp3`,
  i = `/assets/confetti-B0j8MJyI.mp3`,
  a = `/assets/copied-l1kLRNK1.mp3`,
  o = `/assets/fanfare-F0NKvHX1.mp3`,
  s = `/assets/flag-Cl2BnQJ7.mp3`,
  c = `/assets/friend-DNDw2jeP.mp3`,
  l = `/assets/hop-BXqiY40_.mp3`,
  u = `/assets/march-CeEOXx3m.mp3`,
  d = `/assets/music-CnAsPjp5.mp3`,
  f = `/assets/question-in-ColUu-kN.mp3`,
  p = `/assets/react-outlier-DY6XHtkk.mp3`,
  m = `/assets/react-popular-K6vYs8Tp.mp3`,
  ee = `/assets/react-standout-D2crq5Wg.mp3`,
  te = `/assets/react-uncommon-LTxPv1Iq.mp3`,
  ne = `/assets/reject-CDvksZ7A.mp3`,
  re = `/assets/room-CNuBg_Cr.mp3`,
  ie = `/assets/scurry-DK4zeffP.mp3`,
  ae = `/assets/sparkle-C6wxmSP8.mp3`,
  oe = `/assets/start-CxgMEX3r.mp3`,
  h = `/assets/submit-c0v97H5D.mp3`,
  g = `/assets/sweep-5hjwUm54.mp3`,
  _ = `/assets/tick-hsrNakeR.mp3`,
  v = `/assets/tiles-DYspsyEW.mp3`,
  y = `/assets/timeout-BCNhRjcc.mp3`,
  b = `/assets/whoosh--bVlNPdM.mp3`,
  x = Object.assign({
    "../../assets/audio/cheer.mp3": t,
    "../../assets/audio/chime.mp3": n,
    "../../assets/audio/clock.mp3": r,
    "../../assets/audio/confetti.mp3": i,
    "../../assets/audio/copied.mp3": a,
    "../../assets/audio/fanfare.mp3": o,
    "../../assets/audio/flag.mp3": s,
    "../../assets/audio/friend.mp3": c,
    "../../assets/audio/hop.mp3": l,
    "../../assets/audio/march.mp3": u,
    "../../assets/audio/music.mp3": d,
    "../../assets/audio/question-in.mp3": f,
    "../../assets/audio/react-outlier.mp3": p,
    "../../assets/audio/react-popular.mp3": m,
    "../../assets/audio/react-standout.mp3": ee,
    "../../assets/audio/react-uncommon.mp3": te,
    "../../assets/audio/reject.mp3": ne,
    "../../assets/audio/room.mp3": re,
    "../../assets/audio/scurry.mp3": ie,
    "../../assets/audio/sparkle.mp3": ae,
    "../../assets/audio/start.mp3": oe,
    "../../assets/audio/submit.mp3": h,
    "../../assets/audio/sweep.mp3": g,
    "../../assets/audio/tick.mp3": _,
    "../../assets/audio/tiles.mp3": v,
    "../../assets/audio/timeout.mp3": y,
    "../../assets/audio/whoosh.mp3": b,
  }),
  S = {
    start: 0.4,
    "question-in": 0.35,
    clock: 0.4,
    submit: 0.42,
    reject: 0.4,
    timeout: 0.5,
    tiles: 0.4,
    scurry: 0.5,
    hop: 0.3,
    whoosh: 0.4,
    "react-popular": 0.3,
    "react-uncommon": 0.5,
    "react-standout": 0.55,
    "react-outlier": 0.75,
    cheer: 0.45,
    chime: 0.36,
    flag: 0.4,
    confetti: 0.45,
    friend: 0.42,
    march: 0.45,
    tick: 0.26,
    sweep: 0.42,
    fanfare: 0.4,
    sparkle: 0.4,
    copied: 0.3,
    music: 0.12,
    room: 0.18,
  },
  C = new Set([`hop`, `tick`]),
  w = [`music`, `room`],
  se = 0.4,
  ce = 2500,
  le = 0.6,
  ue = 0.5,
  de = 0.005,
  T = 0.06,
  E = null,
  D = null,
  O,
  k = !0,
  A = !1,
  j = 0,
  M = !1,
  N,
  P = null,
  F = null,
  I = null,
  L = {},
  R = new WeakMap(),
  z = () => typeof window < `u`,
  B = () => {};
function V() {
  return (D === null && (D = z() && e.muted()), D);
}
function H() {
  return (O === void 0 && (O = z() ? e.music() : null), O ?? (P ? k : !0));
}
function fe(e) {
  return x[`../../assets/audio/${e}.mp3`];
}
async function pe(e, t, n) {
  let r = fe(t);
  if (r)
    try {
      let i = await fetch(r);
      n.set(t, await e.decodeAudioData(await i.arrayBuffer()));
    } catch {}
}
function me() {
  if (!z()) return null;
  let e = window.AudioContext ?? window.webkitAudioContext;
  if (!e) return null;
  let t = new e(),
    n = t.createGain();
  ((n.gain.value = V() ? 0 : 1), n.connect(t.destination));
  let r = t.createGain(),
    i = t.createGain();
  return (
    (r.gain.value = 0),
    (i.gain.value = 0),
    r.connect(n),
    i.connect(n),
    document.addEventListener(`visibilitychange`, () => {
      document.hidden ? t.suspend().catch(B) : M && t.resume().catch(B);
    }),
    {
      ctx: t,
      master: n,
      music: r,
      room: i,
      buffers: new Map(),
      loading: null,
      bedsStarted: !1,
    }
  );
}
function he(e) {
  let t = Object.keys(S);
  return Promise.all(t.map((t) => pe(e.ctx, t, e.buffers))).then(B);
}
function U(e, t = 1) {
  let n = e.ctx.currentTime,
    r = M ? 0.3 : se;
  if (P) {
    (e.music.gain.setTargetAtTime(0, n, r),
      e.room.gain.setTargetAtTime(0, n, r),
      F?.bus.gain.setTargetAtTime(M && H() ? t : 0, n, r));
    return;
  }
  (e.music.gain.setTargetAtTime(M && H() ? S.music * t : 0, n, r),
    e.room.gain.setTargetAtTime(M ? S.room * Math.max(0.5, t) : 0, n, r));
}
function W(e) {
  if (e.bedsStarted || P) return;
  let t = !1;
  for (let n of w) {
    let r = e.buffers.get(n);
    if (!r) continue;
    let i = e.ctx.createBufferSource();
    ((i.buffer = r),
      (i.loop = !0),
      i.connect(n === `music` ? e.music : e.room),
      i.start(),
      (t = !0));
  }
  t && ((e.bedsStarted = !0), U(e));
}
function G(e) {
  let t = R.get(e);
  return (
    t || ((t = { buffers: new Map(), loads: new Map() }), R.set(e, t)),
    t
  );
}
function K(e, t, n) {
  let r = t.bank.beds[n],
    i = R.get(t.bank)?.buffers.get(n);
  if (!r || !i || t.bedGains.has(n)) return;
  let a = e.ctx.createGain();
  ((a.gain.value = (t.bank.gains[n] ?? 1) * (L[n] ?? 0)), a.connect(t.bus));
  let o = e.ctx.createBufferSource();
  ((o.buffer = i),
    (o.loop = !0),
    (o.loopStart = r.start),
    (o.loopEnd = r.end),
    o.connect(a),
    o.start(0, r.start),
    t.sources.add(o),
    t.bedGains.set(n, a));
}
function q(e, t, n) {
  let r = t.files[n];
  if (!r) return Promise.resolve();
  let i = G(t),
    a = i.loads.get(n);
  return (
    a ||
      ((a = (async () => {
        try {
          let t = await fetch(r);
          i.buffers.set(n, await e.ctx.decodeAudioData(await t.arrayBuffer()));
        } catch {
          i.loads.delete(n);
        }
        F?.bank === t && K(e, F, n);
      })()),
      i.loads.set(n, a)),
    a
  );
}
function ge(e) {
  let t = window.requestIdleCallback;
  t ? t(e, { timeout: 3e3 }) : setTimeout(e, 1e3);
}
function J(e) {
  if (!P || F?.bank === P) return;
  Y();
  let t = P,
    n = e.ctx.createGain();
  ((n.gain.value = 0), n.connect(e.ctx.destination));
  let r = e.ctx.createGain();
  ((r.gain.value = 1), r.connect(e.master));
  let i = {
    bank: t,
    bus: n,
    shots: r,
    sources: new Set(),
    bedGains: new Map(),
  };
  ((F = i), U(e));
  for (let n of Object.keys(t.beds)) K(e, i, n);
  let a = Object.keys(t.files).filter((e) => !t.first.includes(e));
  Promise.all(t.first.map((n) => q(e, t, n)))
    .then(() =>
      ge(() => {
        if (F === i) for (let n of a) q(e, t, n).catch(B);
      }),
    )
    .catch(B);
}
function Y() {
  let e = F;
  F = null;
  let t = E;
  if (!e || !t) return;
  let n = t.ctx.currentTime;
  (e.bus.gain.setTargetAtTime(0, n, T / 5),
    e.shots.gain.setTargetAtTime(0, n, T / 5));
  for (let t of e.sources)
    try {
      t.stop(n + T);
    } catch {}
  setTimeout(() => {
    for (let t of e.sources) t.disconnect();
    for (let t of e.bedGains.values()) t.disconnect();
    (e.shots.disconnect(), e.bus.disconnect());
  }, T * 1e3);
}
function X(e) {
  let t = e.ctx.state === `running` || I !== null;
  return !V() && !A && !document.hidden && t;
}
function Z(e, t, n, r, i, a) {
  let { ctx: o } = e,
    s = o.createBufferSource();
  s.buffer = r;
  let c = t.bank.steady.includes(n) ? 1 : 1 + (Math.random() - 0.5) * 0.06;
  s.playbackRate.value = (i.rate ?? 1) * c;
  let l = (t.bank.gains[n] ?? 1) * (i.gain ?? 1),
    u = o.createGain();
  ((u.gain.value = l), s.connect(u), u.connect(t.shots));
  let d = 0,
    f = 0;
  if (i.endIn !== void 0) {
    let e = Math.max(0, i.endIn - a);
    ((d = Math.min(r.duration, Math.max(0, r.duration - e))),
      (f = Math.max(0, e - r.duration)));
  }
  let p = o.currentTime + Math.max(0, (i.delay ?? 0) - a) + f;
  return (
    d > 0 &&
      (u.gain.setValueAtTime(0, p), u.gain.linearRampToValueAtTime(l, p + de)),
    s.start(p, d),
    t.sources.add(s),
    (s.onended = () => {
      (t.sources.delete(s), s.disconnect(), u.disconnect());
    }),
    {
      fade(e) {
        let t = o.currentTime;
        (u.gain.setTargetAtTime(0, t, e / 5), s.stop(t + e));
      },
    }
  );
}
function Q(e, t, n) {
  let r = F;
  if (!r || !r.bank.files[t] || !X(e)) return null;
  let i = G(r.bank).buffers.get(t);
  if (i && e.ctx.state === `running`) return Z(e, r, t, i, n, 0);
  let a = Date.now(),
    o = null,
    s = !1;
  return (
    Promise.all([q(e, r.bank, t), I])
      .then(() => {
        let i = (Date.now() - a) / 1e3,
          c = G(r.bank).buffers.get(t);
        s || !c || i > ue || F !== r || !X(e) || (o = Z(e, r, t, c, n, i));
      })
      .catch(B),
    {
      fade(e) {
        o ? o.fade(e) : (s = !0);
      },
    }
  );
}
var $ = {
  unlock() {
    E ??= me();
    let e = E;
    if (e) {
      if (e.ctx.state !== `running`) {
        let t = e.ctx
          .resume()
          .catch(B)
          .then(() => {
            I === t && (I = null);
          });
        I = t;
      }
      if (P) {
        J(e);
        return;
      }
      ((e.loading ??= he(e)), e.loading.then(() => W(e)).catch(B));
    }
  },
  setBank(e) {
    ((P = e), e && (k = !V()));
    let t = E;
    if (!e) {
      (Y(), t && U(t));
      return;
    }
    t && J(t);
  },
  playClip(e, t = {}) {
    return E ? Q(E, e, t) : null;
  },
  mixBeds(e) {
    L = e;
    let t = E,
      n = F;
    if (!t || !n) return;
    let r = t.ctx.currentTime;
    for (let [t, i] of n.bedGains)
      i.gain.setTargetAtTime((n.bank.gains[t] ?? 1) * (e[t] ?? 0), r, le);
  },
  play(e, t = {}) {
    let n = E;
    if (!n) return;
    if (P) {
      let r = P.alias[e];
      r && Q(n, r, t);
      return;
    }
    if (V() || A || document.hidden || n.ctx.state !== `running`) return;
    let r = n.buffers.get(e);
    if (!r) return;
    let i = n.ctx.createBufferSource();
    i.buffer = r;
    let a = C.has(e) ? 1 : 1 + (Math.random() - 0.5) * 0.06;
    i.playbackRate.value = (t.rate ?? 1) * a;
    let o = n.ctx.createGain();
    ((o.gain.value = S[e] * (t.gain ?? 1)),
      i.connect(o),
      o.connect(n.master),
      i.start(n.ctx.currentTime + (t.delay ?? 0)));
  },
  duck(e, t) {
    let n = E;
    if (!n) return;
    U(n, e);
    let r = Date.now() + t * 1e3;
    ((j = r),
      setTimeout(() => {
        j === r && E && U(E);
      }, t * 1e3));
  },
  setFastForward(e) {
    A = e;
  },
  setBeds(e, t = 0) {
    if ((clearTimeout(N), (N = void 0), e)) {
      M = !0;
      let e = E;
      if (!e) return;
      (e.ctx.state !== `running` && !document.hidden && e.ctx.resume().catch(B),
        U(e));
      return;
    }
    let n = () => {
      M = !1;
      let e = E;
      e &&
        (U(e),
        (N = setTimeout(() => {
          M || e.ctx.suspend().catch(B);
        }, ce)));
    };
    t > 0 ? (N = setTimeout(n, t * 1e3)) : n();
  },
  isMuted: V,
  toggleMute() {
    return (
      (D = !V()),
      e.setMuted(D),
      E && (E.master.gain.value = D ? 0 : 1),
      D || $.unlock(),
      D
    );
  },
  isMusicOn: H,
  toggleMusic() {
    let t = !H();
    return ((O = t), e.setMusic(t), E && U(E), t);
  },
};
export { $ as t };
