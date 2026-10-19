import { I as e, j as t } from "./rules-DxwvjuIt.js";
var n = /^[0-9A-Za-z]{8}$/,
  r = /^[0-9A-Za-z]{16}$/,
  i = `x-outrivia-device`,
  a = 1e3,
  o = {
    daily: (e) => `opennoillirk:daily:${e}`,
    runLength: `opennoillirk:run-length`,
    streak: `opennoillirk:streak`,
    muted: `opennoillirk:muted`,
    music: `opennoillirk:music`,
    nickname: `opennoillirk:nickname`,
    quality: `opennoillirk:quality`,
    device: `opennoillirk:device`,
    run: (e) => `opennoillirk:run:${e}`,
    runs: `opennoillirk:runs`,
    stage: `opennoillirk:stage`,
    best: `opennoillirk:best`,
  };
function s(e) {
  try {
    let t = localStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function c(e, t) {
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {}
}
function l(e, t) {
  let [n, r, i] = e.split(`-`).map(Number);
  return new Date(Date.UTC(n, r - 1, i + t)).toISOString().slice(0, 10);
}
var u = {
  getDaily(e) {
    let t = s(o.daily(e));
    return t?.v === 2 ? t : null;
  },
  setDaily(e, t) {
    c(o.daily(e), t);
  },
  runLength() {
    try {
      return t(localStorage.getItem(o.runLength));
    } catch {
      return 10;
    }
  },
  setRunLength(t) {
    try {
      localStorage.setItem(o.runLength, e(t));
    } catch {}
  },
  streak() {
    return s(o.streak) ?? { n: 0, last: `` };
  },
  bumpStreak(e) {
    let t = u.streak();
    t.last >= e ||
      c(o.streak, { n: t.last === l(e, -1) ? t.n + 1 : 1, last: e });
  },
  muted() {
    return s(o.muted) === !0;
  },
  setMuted(e) {
    c(o.muted, e);
  },
  music() {
    let e = s(o.music);
    return typeof e == `boolean` ? e : null;
  },
  setMusic(e) {
    c(o.music, e);
  },
  nickname() {
    let e = s(o.nickname);
    return typeof e == `string` && e.length > 0 ? e : null;
  },
  setNickname(e) {
    c(o.nickname, e);
  },
  quality() {
    let e = s(o.quality);
    return e === `high` || e === `medium` || e === `low` ? e : null;
  },
  setQuality(e) {
    c(o.quality, e);
  },
  stage() {
    let e = s(o.stage);
    return e === `climb` || e === `table` ? e : null;
  },
  setStage(e) {
    c(o.stage, e);
  },
  best(e) {
    let t = s(o.best)?.[e];
    return typeof t == `number` && Number.isFinite(t) ? t : 0;
  },
  bumpBest(e, t) {
    let n = u.best(e);
    if (t > n) {
      let n = s(o.best) ?? {};
      c(o.best, { ...n, [e]: t });
    }
    return n;
  },
  device() {
    let e = s(o.device);
    return typeof e == `string` && r.test(e) ? e : null;
  },
  setDevice(e) {
    c(o.device, e);
  },
  getRun(e) {
    let t = s(o.run(e));
    return t && typeof t.id == `string` && typeof t.root == `string` ? t : null;
  },
  setRun(e, t) {
    c(o.run(e), t);
  },
  ownRuns() {
    let e = s(o.runs);
    return Array.isArray(e) ? e.filter((e) => typeof e == `string`) : [];
  },
  addOwnRun(e) {
    c(o.runs, [...u.ownRuns().filter((t) => t !== e), e].slice(-30));
  },
};
export { n as i, a as n, i as r, u as t };
