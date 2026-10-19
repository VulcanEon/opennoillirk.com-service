var e = [10, 25, 50, 75, 100],
  t = [
    {
      id: 0,
      name: `Off the Board`,
      points: 10,
      line: `Right, but few people said it.`,
      circle: `⚪`,
      color: `#7D86A8`,
    },
    {
      id: 1,
      name: `Top 10`,
      points: 25,
      line: `Made the top ten.`,
      circle: `🔵`,
      color: `#3FB6E0`,
    },
    {
      id: 2,
      name: `Top 5`,
      points: 50,
      line: `In the board's top five.`,
      circle: `🟣`,
      color: `#9C7BFF`,
    },
    {
      id: 3,
      name: `Runner-up`,
      points: 75,
      line: `Second or third on the board.`,
      circle: `🟠`,
      color: `#FF7A59`,
    },
    {
      id: 4,
      name: `#1 Answer`,
      points: 100,
      line: `The answer most people give.`,
      circle: `🟡`,
      color: `#FFC83D`,
    },
  ],
  n = {
    circle: `⚫`,
    color: `#9AA3B1`,
    passed: `Passed.`,
    timeout: `Out of time.`,
  },
  r = 864e5,
  i = (e) => String(e).padStart(2, `0`),
  a = (e = new Date()) =>
    `${e.getFullYear()}-${i(e.getMonth() + 1)}-${i(e.getDate())}`;
function o(e = new Date()) {
  let t = new Date(e);
  return (t.setHours(24, 0, 0, 0), t.getTime() - e.getTime());
}
var s = (e) => {
    let [t, n, r] = e.split(`-`).map(Number);
    return Date.UTC(t, n - 1, r);
  },
  c = (e, t) => Math.round((s(t) - s(e)) / r),
  l = (e, t) => new Date(s(e) + t * r).toISOString().slice(0, 10),
  u = (e) => {
    let t = 2166136261;
    for (let n of e) ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return t >>> 0;
  },
  d = (e) => {
    let t = e | 0;
    return () => {
      t = (t + 1831565813) | 0;
      let e = Math.imul(t ^ (t >>> 15), 1 | t);
      return (
        (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    };
  };
function f(e, t) {
  let n = d(t),
    r = [...e];
  for (let e = r.length - 1; e > 0; e--) {
    let t = Math.floor(n() * (e + 1));
    [r[e], r[t]] = [r[t], r[e]];
  }
  return r;
}
var ee = [
    `Swift`,
    `Brave`,
    `Bright`,
    `Calm`,
    `Clever`,
    `Daring`,
    `Eager`,
    `Gentle`,
    `Happy`,
    `Jolly`,
    `Keen`,
    `Lucky`,
    `Merry`,
    `Mellow`,
    `Nimble`,
    `Plucky`,
    `Quick`,
    `Quiet`,
    `Sunny`,
    `Witty`,
    `Zesty`,
    `Breezy`,
    `Cosmic`,
    `Cheery`,
  ],
  te = [
    `Otter`,
    `Fox`,
    `Panda`,
    `Heron`,
    `Lynx`,
    `Badger`,
    `Falcon`,
    `Koala`,
    `Moose`,
    `Owl`,
    `Raven`,
    `Tiger`,
    `Yak`,
    `Zebra`,
    `Bison`,
    `Crane`,
    `Gecko`,
    `Lemur`,
    `Robin`,
    `Hare`,
    `Wolf`,
    `Hawk`,
    `Finch`,
    `Wombat`,
  ],
  ne = /\s+/g,
  re = /^[\p{L}\p{M}\p{Nd} ._-]+$/u,
  ie = /[\p{L}\p{Nd}]/u,
  ae = /\p{M}+/gu,
  oe = /[ ._-]+/,
  se = /\d/g,
  ce = { 0: `o`, 1: `i`, 3: `e`, 4: `a`, 5: `s`, 7: `t`, 8: `b` },
  le = [
    `fuck`,
    `cunt`,
    `nigger`,
    `nigga`,
    `faggot`,
    `whore`,
    `bitch`,
    `dildo`,
    `jizz`,
    `retard`,
    `molest`,
    `asshole`,
    `pedophile`,
    `paedophile`,
    `wanker`,
    `shithead`,
    `bullshit`,
  ],
  p = new Set(
    `anal.anus.arse.arsehole.ass.bastard.boob.chink.cock.coon.cum.dick.dyke.fag.gook.hitler.hoe.homo.kike.kkk.kys.nazi.negro.paki.pedo.penis.piss.porn.porno.prick.pussy.rape.rapist.sex.shit.shitty.skank.slag.slut.spic.tits.titty.tranny.twat.vagina.wank`.split(
      `.`,
    ),
  ),
  m = (e) =>
    p.has(e) ||
    (e.length > 3 && e.endsWith(`s`) && p.has(e.slice(0, -1))) ||
    (e.length > 4 && e.endsWith(`es`) && p.has(e.slice(0, -2))),
  h = (e) => e.normalize(`NFC`).replace(ne, ` `).trim();
function ue(e) {
  let t = h(e),
    n = Array.from(t).length;
  return n >= 1 && n <= 16 && re.test(t) && ie.test(t);
}
function de(e) {
  let t = e
      .normalize(`NFD`)
      .replace(ae, ``)
      .toLowerCase()
      .replace(se, (e) => ce[e] ?? e)
      .split(oe)
      .filter((e) => e.length > 0),
    n = t.join(``);
  return le.some((e) => n.includes(e)) ? !0 : m(n) || t.some(m);
}
var g = (e, t) => e[Math.min(e.length - 1, Math.floor(t() * e.length))],
  _ = (e = Math.random) => `${g(ee, e)} ${g(te, e)}`;
function v(e, t = d(u(e))) {
  let n = h(e);
  return ue(n) && !de(n) ? n : _(t);
}
var fe = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
  pe = 2500,
  me = [10, 20, 1 / 0],
  y = (e) => fe[((e % 10) + 10) % 10],
  b = (t, n) => e[t] * n,
  x = (e) => Math.floor(e / 25),
  S = (e) => (Number.isFinite(e) ? (100 * e) / 10 : null);
function he(e) {
  if (e === `endless` || e === `Infinity`) return 1 / 0;
  let t = Number(e);
  return t === 10 || t === 20 ? t : 10;
}
function ge(e) {
  return e === 1 / 0 ? `endless` : String(e);
}
function C(e, t) {
  return Number.isFinite(t) && e + 1 >= t;
}
var w = `2026-01-01`,
  _e = 255,
  T = 65535,
  ve = 4294967295,
  E = (e) => (e.mode === `daily` ? 10 : e.length),
  D = new TextEncoder(),
  ye = new TextDecoder(),
  be = /^[\w-]*$/,
  xe = /\+/g,
  Se = /\//g,
  Ce = /=+$/,
  we = /-/g,
  Te = /_/g;
function Ee(e) {
  let t = ``;
  for (let n of e) t += String.fromCharCode(n);
  return btoa(t).replace(xe, `-`).replace(Se, `_`).replace(Ce, ``);
}
function De(e) {
  if (!be.test(e) || e.length % 4 == 1) return null;
  let t = `${e.replace(we, `+`).replace(Te, `/`)}${`=`.repeat((4 - (e.length % 4)) % 4)}`,
    n = atob(t),
    r = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e += 1) r[e] = n.charCodeAt(e);
  return r;
}
var O = (e, t) => Number.isInteger(e) && e >= 0 && e <= t;
function Oe(e) {
  let t = D.encode(e);
  if (t.length <= 48) return t;
  let n = 0;
  for (let t of e) {
    let e = n + D.encode(t).length;
    if (e > 48) break;
    n = e;
  }
  return t.slice(0, n);
}
function ke(e) {
  let t = ye.decode(e),
    n = D.encode(t);
  if (n.length !== e.length) return null;
  for (let t = 0; t < n.length; t += 1) if (n[t] !== e[t]) return null;
  return t;
}
function Ae(e) {
  let t = E(e);
  if (e.players.length < 1 || e.players.length > 5)
    throw RangeError(`A challenge carries 1 to 5 players`);
  let n = e.players.map((e) => Oe(e.name)),
    r = e.mode === `daily` ? 5 : 8;
  for (let e of n) r += 1 + e.length + 2 * t;
  let i = new Uint8Array(r),
    a = new DataView(i.buffer);
  a.setUint8(0, 1);
  let o = 2;
  if (e.mode === `daily`) {
    let t = c(w, e.date);
    if (!O(t, T)) throw RangeError(`No challenge code for the date ${e.date}`);
    (a.setUint8(1, 0), a.setUint16(o, t), (o += 2));
  } else {
    if (!O(e.seed, ve)) throw RangeError(`The seed must be a uint32`);
    if (!O(e.bank, _e)) throw RangeError(`The bank version must fit in a byte`);
    (a.setUint8(1, e.length === 10 ? 1 : 2),
      a.setUint32(o, e.seed),
      a.setUint8(o + 4, e.bank),
      (o += 5));
  }
  (a.setUint8(o, e.players.length), (o += 1));
  for (let [r, s] of e.players.entries()) {
    if (s.aids.length !== t)
      throw RangeError(`Each player needs ${t} answers, not ${s.aids.length}`);
    let e = n[r];
    (a.setUint8(o, e.length), i.set(e, o + 1), (o += 1 + e.length));
    for (let e of s.aids) {
      if (e !== null && !O(e, T - 1)) throw RangeError(`Bad answer id ${e}`);
      (a.setUint16(o, e === null ? 0 : e + 1), (o += 2));
    }
  }
  return Ee(i);
}
function je(e, t) {
  if (e.byteLength < 2) return { error: `truncated` };
  if (e.getUint8(0) !== 1) return { error: `version` };
  let n = e.getUint8(1);
  if (n === 0) {
    if (e.byteLength < 4) return { error: `truncated` };
    let n = l(w, e.getUint16(2));
    return n > t
      ? { error: `future` }
      : { head: { mode: `daily`, date: n }, at: 4 };
  }
  return n !== 1 && n !== 2
    ? { error: `mode` }
    : e.byteLength < 7
      ? { error: `truncated` }
      : {
          head: {
            mode: `unlimited`,
            length: n === 1 ? 10 : 20,
            seed: e.getUint32(2),
            bank: e.getUint8(6),
          },
          at: 7,
        };
}
function Me(e, t, n, r) {
  if (n >= e.length) return { error: `truncated` };
  let i = t.getUint8(n);
  if (i < 1 || i > 5) return { error: `players` };
  let a = [],
    o = n + 1;
  for (; a.length < i;) {
    if (o >= e.length) return { error: `truncated` };
    let n = t.getUint8(o);
    if (n > 48) return { error: `name` };
    if (((o += 1), o + n + 2 * r > e.length)) return { error: `truncated` };
    let i = ke(e.subarray(o, o + n));
    if (i === null) return { error: `name` };
    o += n;
    let s = [];
    for (let e = 0; e < r; e += 1) {
      let e = t.getUint16(o);
      (s.push(e === 0 ? null : e - 1), (o += 2));
    }
    a.push({ name: v(i), aids: s });
  }
  return o === e.length ? a : { error: `entries` };
}
function Ne(e, t = a()) {
  let n = De(e);
  if (!n) return { error: `malformed` };
  let r = new DataView(n.buffer, n.byteOffset, n.byteLength),
    i = je(r, t);
  if (`error` in i) return i;
  let o = Me(n, r, i.at, E(i.head));
  return `error` in o ? o : { ...i.head, players: o };
}
function Pe(e, t) {
  return [...e, t].slice(-5);
}
var k = `2026-10-15`,
  Fe = (e) => Math.max(1, c(k, e) + 1);
function Ie(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === `Uint8Array`)
  );
}
function A(e, ...t) {
  if (!Ie(e)) throw Error(`Uint8Array expected`);
  if (t.length > 0 && !t.includes(e.length))
    throw Error(
      `Uint8Array expected of length ` + t + `, got length=` + e.length,
    );
}
function j(e, t = !0) {
  if (e.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t && e.finished) throw Error(`Hash#digest() has already been called`);
}
function Le(e, t) {
  A(e);
  let n = t.outputLen;
  if (e.length < n)
    throw Error(`digestInto() expects output buffer of length at least ` + n);
}
function M(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function N(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function P(e, t) {
  return (e << (32 - t)) | (e >>> t);
}
(new Uint8Array(new Uint32Array([287454020]).buffer)[0],
  typeof Uint8Array.from([]).toHex == `function` && Uint8Array.fromHex);
function Re(e) {
  if (typeof e != `string`) throw Error(`string expected`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function F(e) {
  return (typeof e == `string` && (e = Re(e)), A(e), e);
}
var ze = class {};
function Be(e) {
  let t = (t) => e().update(F(t)).digest(),
    n = e();
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  );
}
function Ve(e, t, n, r) {
  if (typeof e.setBigUint64 == `function`) return e.setBigUint64(t, n, r);
  let i = BigInt(32),
    a = BigInt(4294967295),
    o = Number((n >> i) & a),
    s = Number(n & a),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  (e.setUint32(t + c, o, r), e.setUint32(t + l, s, r));
}
function He(e, t, n) {
  return (e & t) ^ (~e & n);
}
function Ue(e, t, n) {
  return (e & t) ^ (e & n) ^ (t & n);
}
var We = class extends ze {
    constructor(e, t, n, r) {
      (super(),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.blockLen = e),
        (this.outputLen = t),
        (this.padOffset = n),
        (this.isLE = r),
        (this.buffer = new Uint8Array(e)),
        (this.view = N(this.buffer)));
    }
    update(e) {
      (j(this), (e = F(e)), A(e));
      let { view: t, buffer: n, blockLen: r } = this,
        i = e.length;
      for (let a = 0; a < i;) {
        let o = Math.min(r - this.pos, i - a);
        if (o === r) {
          let t = N(e);
          for (; r <= i - a; a += r) this.process(t, a);
          continue;
        }
        (n.set(e.subarray(a, a + o), this.pos),
          (this.pos += o),
          (a += o),
          this.pos === r && (this.process(t, 0), (this.pos = 0)));
      }
      return ((this.length += e.length), this.roundClean(), this);
    }
    digestInto(e) {
      (j(this), Le(e, this), (this.finished = !0));
      let { buffer: t, view: n, blockLen: r, isLE: i } = this,
        { pos: a } = this;
      ((t[a++] = 128),
        M(this.buffer.subarray(a)),
        this.padOffset > r - a && (this.process(n, 0), (a = 0)));
      for (let e = a; e < r; e++) t[e] = 0;
      (Ve(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0));
      let o = N(e),
        s = this.outputLen;
      if (s % 4) throw Error(`_sha2: outputLen should be aligned to 32bit`);
      let c = s / 4,
        l = this.get();
      if (c > l.length) throw Error(`_sha2: outputLen bigger than state`);
      for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return (this.destroy(), n);
    }
    _cloneInto(e) {
      ((e ||= new this.constructor()), e.set(...this.get()));
      let {
        blockLen: t,
        buffer: n,
        length: r,
        finished: i,
        destroyed: a,
        pos: o,
      } = this;
      return (
        (e.destroyed = a),
        (e.finished = i),
        (e.length = r),
        (e.pos = o),
        r % t && e.buffer.set(n),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
  },
  I = Uint32Array.from([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  L = BigInt(2 ** 32 - 1),
  R = BigInt(32);
function Ge(e, t = !1) {
  return t
    ? { h: Number(e & L), l: Number((e >> R) & L) }
    : { h: Number((e >> R) & L) | 0, l: Number(e & L) | 0 };
}
function Ke(e, t = !1) {
  let n = e.length,
    r = new Uint32Array(n),
    i = new Uint32Array(n);
  for (let a = 0; a < n; a++) {
    let { h: n, l: o } = Ge(e[a], t);
    [r[a], i[a]] = [n, o];
  }
  return [r, i];
}
var qe = Uint32Array.from([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  z = new Uint32Array(64),
  Je = class extends We {
    constructor(e = 32) {
      (super(64, e, 8, !1),
        (this.A = I[0] | 0),
        (this.B = I[1] | 0),
        (this.C = I[2] | 0),
        (this.D = I[3] | 0),
        (this.E = I[4] | 0),
        (this.F = I[5] | 0),
        (this.G = I[6] | 0),
        (this.H = I[7] | 0));
    }
    get() {
      let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
      return [e, t, n, r, i, a, o, s];
    }
    set(e, t, n, r, i, a, o, s) {
      ((this.A = e | 0),
        (this.B = t | 0),
        (this.C = n | 0),
        (this.D = r | 0),
        (this.E = i | 0),
        (this.F = a | 0),
        (this.G = o | 0),
        (this.H = s | 0));
    }
    process(e, t) {
      for (let n = 0; n < 16; n++, t += 4) z[n] = e.getUint32(t, !1);
      for (let e = 16; e < 64; e++) {
        let t = z[e - 15],
          n = z[e - 2],
          r = P(t, 7) ^ P(t, 18) ^ (t >>> 3);
        z[e] =
          ((P(n, 17) ^ P(n, 19) ^ (n >>> 10)) + z[e - 7] + r + z[e - 16]) | 0;
      }
      let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
      for (let e = 0; e < 64; e++) {
        let t = P(o, 6) ^ P(o, 11) ^ P(o, 25),
          u = (l + t + He(o, s, c) + qe[e] + z[e]) | 0,
          d = ((P(n, 2) ^ P(n, 13) ^ P(n, 22)) + Ue(n, r, i)) | 0;
        ((l = c),
          (c = s),
          (s = o),
          (o = (a + u) | 0),
          (a = i),
          (i = r),
          (r = n),
          (n = (u + d) | 0));
      }
      ((n = (n + this.A) | 0),
        (r = (r + this.B) | 0),
        (i = (i + this.C) | 0),
        (a = (a + this.D) | 0),
        (o = (o + this.E) | 0),
        (s = (s + this.F) | 0),
        (c = (c + this.G) | 0),
        (l = (l + this.H) | 0),
        this.set(n, r, i, a, o, s, c, l));
    }
    roundClean() {
      M(z);
    }
    destroy() {
      (this.set(0, 0, 0, 0, 0, 0, 0, 0), M(this.buffer));
    }
  },
  B = Ke(
    `0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`
      .split(`.`)
      .map((e) => BigInt(e)),
  );
(B[0], B[1]);
var V = Be(() => new Je()),
  H = new TextEncoder(),
  Ye = new TextDecoder();
function Xe(e) {
  let t = ``;
  for (let n of e) t += n.toString(16).padStart(2, `0`);
  return t;
}
function Ze(e, t) {
  return Xe(V(H.encode(`${e} ${t}`))).slice(0, 16);
}
function Qe(e, t, n) {
  let r = new Uint8Array(n),
    i = 0,
    a = 0;
  for (; a < n;) {
    let o = V(H.encode(`r ${e} ${t} ${i}`)),
      s = Math.min(o.length, n - a);
    (r.set(o.subarray(0, s), a), (a += s), (i += 1));
  }
  return r;
}
function $e(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
function et(e, t, n) {
  let r = $e(e),
    i = Qe(t, n, r.length),
    a = new Uint8Array(r.length);
  for (let e = 0; e < r.length; e++) a[e] = r[e] ^ i[e];
  return Ye.decode(a);
}
var tt = /^(the|a|an) /,
  nt = /['’`.,!?:;()"“”]/g,
  rt = /&/g,
  it = /[-–—_/]/g,
  at = /\s+/g,
  ot = /(x|ch|sh|s)es$/,
  st = `abcdefghijklmnopqrstuvwxyz `;
function ct(e) {
  return e
    .toLowerCase()
    .normalize(`NFD`)
    .replace(/\p{M}+/gu, ``)
    .replace(rt, ` and `)
    .replace(nt, ``)
    .replace(it, ` `)
    .replace(at, ` `)
    .trim()
    .replace(tt, ``);
}
function lt(e) {
  return e.endsWith(`ies`) && e.length > 4
    ? `${e.slice(0, -3)}y`
    : e.endsWith(`ss`)
      ? e
      : e.endsWith(`es`) && ot.test(e)
        ? e.slice(0, -2)
        : e.endsWith(`s`) && e.length > 3
          ? e.slice(0, -1)
          : e;
}
function ut(e, t) {
  let n = [e, lt(e)],
    r = new Set(n);
  for (let e of n)
    for (let n of t)
      (e.endsWith(` ${n}`) && r.add(e.slice(0, -n.length - 1)),
        e.startsWith(`${n} `) && r.add(e.slice(n.length + 1)));
  return [...r].filter((e) => e.length > 0);
}
function dt(e) {
  let t = new Set(),
    n = e.length;
  for (let r = 0; r <= n; r++) {
    let i = e.slice(0, r),
      a = e.slice(r);
    (r < n && t.add(i + a.slice(1)),
      r < n - 1 && t.add(`${i}${a[1]}${a[0]}${a.slice(2)}`));
    for (let e of st)
      (r < n && a[0] !== e && t.add(`${i}${e}${a.slice(1)}`),
        t.add(`${i}${e}${a}`));
  }
  return (t.delete(e), t);
}
var ft = `roster`;
function U(e) {
  return JSON.parse(et(e.roster, e.salt, ft));
}
var W = new WeakMap();
function pt(e) {
  let t = W.get(e);
  return (t || ((t = U(e)), W.set(e, t)), t);
}
function G(e, t) {
  let n = e.table[Ze(e.salt, t)];
  if (!n) return null;
  let r = pt(e)[n.a];
  return {
    aid: n.a,
    band: n.b,
    canonical: r ? r[0] : t,
    corrected: !1,
    key: t,
  };
}
function mt(e, t) {
  let n = ct(t);
  if (!n) return null;
  let r = ut(n, e.strip);
  for (let t of r) {
    let n = G(e, t);
    if (n) return n;
  }
  for (let t of r)
    if (!(t.length < 5))
      for (let n of dt(t)) {
        let t = G(e, n);
        if (t) return { ...t, corrected: !0 };
      }
  return null;
}
var ht = 3e4,
  gt = [1e4, 5e3];
function _t(e) {
  return {
    phase: `idle`,
    prompts: [...e.prompts],
    length: e.length,
    limitMs: e.limitMs ?? 3e4,
    index: 0,
    results: [],
    typed: ``,
    promptStart: null,
    pausedAt: null,
    lastHit: null,
    refused: null,
    next: e.next,
  };
}
function vt(e, t) {
  return e.phase === `idle`
    ? {
        ...e,
        phase: `playing`,
        promptStart: t,
        pausedAt: null,
        refused: null,
        typed: ``,
      }
    : e;
}
function K(e, t) {
  if (e.phase !== `playing` || e.promptStart === null) return e.limitMs;
  let n = (e.pausedAt ?? t) - e.promptStart;
  return Math.max(0, e.limitMs - n);
}
function q(e) {
  return e.prompts[e.index];
}
function J(t, n, r, i) {
  let a = q(t),
    o = y(t.index),
    s;
  if (n) {
    let t = b(n.band, o);
    s = {
      promptId: a.id,
      aid: n.aid,
      band: n.band,
      canonical: n.canonical,
      typed: r,
      base: e[n.band],
      weight: o,
      points: t,
      people: x(t),
      corrected: n.corrected,
      key: n.key,
    };
  } else
    s = {
      promptId: a.id,
      aid: null,
      band: null,
      canonical: null,
      typed: r,
      base: 0,
      weight: o,
      points: 0,
      people: 0,
      reason: i,
      corrected: !1,
      key: null,
    };
  return {
    ...t,
    phase: `reveal`,
    results: [...t.results, s],
    lastHit: n,
    refused: null,
    typed: r,
    promptStart: null,
    pausedAt: null,
  };
}
function yt(e, t, n) {
  if (e.phase !== `playing` || e.pausedAt !== null) return e;
  let r = t.trim();
  if (!r) return Y(e, n);
  if (K(e, n) <= 0) return J(e, null, r, `timeout`);
  let i = mt(q(e), r);
  return i ? J(e, i, r) : { ...e, refused: r, typed: r };
}
function Y(e, t) {
  if (e.phase !== `playing`) return e;
  let n = K(e, t) <= 0 ? `timeout` : `passed`;
  return J(e, null, e.typed, n);
}
function bt(e, t) {
  return e.phase !== `playing` || e.pausedAt !== null
    ? e
    : K(e, t) <= 0
      ? J(e, null, e.typed, `timeout`)
      : e;
}
function xt(e, t) {
  if (e.phase !== `reveal`) return e;
  let n = e.index + 1;
  if (C(e.index, e.length))
    return { ...e, phase: `done`, index: n, promptStart: null };
  let r = e.prompts;
  if (n >= r.length) {
    if (!e.next) return { ...e, phase: `done`, index: n, promptStart: null };
    r = [...r, e.next(n)];
  }
  return {
    ...e,
    phase: `playing`,
    index: n,
    prompts: r,
    promptStart: t,
    pausedAt: null,
    refused: null,
    typed: ``,
    lastHit: null,
  };
}
function St(e) {
  return e.phase === `done`
    ? e
    : { ...e, phase: `done`, promptStart: null, pausedAt: null };
}
function Ct(e, t) {
  return e.phase !== `playing` || e.pausedAt !== null
    ? e
    : { ...e, pausedAt: t };
}
function wt(e, t) {
  return e.phase !== `playing` || e.pausedAt === null || e.promptStart === null
    ? e
    : { ...e, promptStart: e.promptStart + (t - e.pausedAt), pausedAt: null };
}
function Tt(e) {
  let t = 0;
  for (let n of e.results) t += n.points;
  return t;
}
function Et(e) {
  let t = 0;
  for (let n of e.results) t += n.people;
  return t;
}
var X = {
  outlier: {
    id: `outlier`,
    title: `Mind Reader`,
    line: `You knew the #1 answer, again and again.`,
  },
  wildcard: {
    id: `wildcard`,
    title: `Hit or Miss`,
    line: `Bullseyes and blind spots.`,
  },
  "free-thinker": {
    id: `free-thinker`,
    title: `Crowd Whisperer`,
    line: `You think like most people do.`,
  },
  "side-stepper": {
    id: `side-stepper`,
    title: `Close Call`,
    line: `Near the top, most of the time.`,
  },
  "trend-spotter": {
    id: `trend-spotter`,
    title: `Own Lane`,
    line: `Your answers rarely made the board.`,
  },
  "crowd-pleaser": {
    id: `crowd-pleaser`,
    title: `Free Thinker`,
    line: `Nobody thinks like you. That's a skill too.`,
  },
};
function Z(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e)
    (i.band === 4 && (t += 1), i.band === 0 && (n += 1), (r += i.band ?? 0));
  let i = e.length > 0 ? r / e.length : 0;
  return t >= 3
    ? X.outlier
    : t >= 2 && n >= 3
      ? X.wildcard
      : i >= 1.8
        ? X[`free-thinker`]
        : i >= 1.2
          ? X[`side-stepper`]
          : i >= 0.6
            ? X[`trend-spotter`]
            : X[`crowd-pleaser`];
}
var Q = `opennoillirk.com`,
  Dt = /\B(?=(\d{3})+(?!\d))/g,
  $ = (e) => String(Math.round(e)).replace(Dt, `,`);
function Ot(e) {
  return e.kind === `endless`
    ? ``
    : `/${$(S(e.kind === `daily` ? 10 : e.length) ?? 100)}`;
}
function kt(e, t) {
  return t
    ? e > t.people
      ? ` · beat ${t.name} ${$(e)}–${$(t.people)}`
      : e === t.people
        ? ` · tied with ${t.name}`
        : ` · ${t.name} won ${$(t.people)}–${$(e)}`
    : ``;
}
function At(e, r, i) {
  let a = 0,
    o = ``;
  for (let e of r)
    ((a += e.people), (o += e.band === null ? n.circle : t[e.band].circle));
  let s =
      e.kind === `daily`
        ? `OpenNoillirk #${$(e.number)}`
        : `OpenNoillirk Unlimited`,
    c = e.kind === `endless` ? `${Q}/unlimited` : e.link;
  return [`${s} · 🧍${$(a)}${Ot(e)}`, o, `${Z(r).title}${kt(a, i)}`, c].join(`
`);
}
function jt(e, t) {
  return t
    ? e > t.points
      ? ` · climbed past ${t.name}`
      : e === t.points
        ? ` · level with ${t.name}`
        : ` · ${t.name} climbed higher`
    : ``;
}
function Mt(e, r, i, a) {
  let o = 0,
    s = ``;
  for (let e of r)
    ((o += e.points), (s += e.band === null ? n.circle : t[e.band].circle));
  let c =
      e.kind === `daily`
        ? `OpenNoillirk #${$(e.number)}`
        : `OpenNoillirk Unlimited`,
    l = e.kind === `endless` ? `${Q}/unlimited` : e.link;
  return [`${c} · ${i.altitude}`, i.zone, s, `${Z(r).title}${jt(o, a)}`, l]
    .join(`
`);
}
var Nt = 7919;
function Pt(e, t) {
  let n = f(e, t);
  return [
    ...n.slice(0, 10).sort((e, t) => e.difficulty - t.difficulty),
    ...n.slice(10),
  ];
}
function Ft(e, t, n) {
  let r = e.length;
  if (r === 0) throw RangeError(`An Unlimited run needs at least one prompt`);
  let i = Math.floor(n / r);
  return i === 0 ? Pt(e, t)[n] : f(e, t + i * (Nt + r))[n - i * r];
}
var It = (e = Math.random) => Math.floor(e() * 2 ** 32);
export {
  fe as A,
  v as B,
  k as C,
  Ae as D,
  Ne as E,
  C as F,
  t as G,
  l as H,
  ge as I,
  e as K,
  y as L,
  x as M,
  S as N,
  pe as O,
  b as P,
  _ as R,
  U as S,
  Pe as T,
  a as U,
  h as V,
  o as W,
  St as _,
  At as a,
  Et as b,
  ht as c,
  vt as d,
  _t as f,
  wt as g,
  K as h,
  $ as i,
  he as j,
  me as k,
  gt as l,
  Ct as m,
  Ft as n,
  X as o,
  Y as p,
  n as q,
  Mt as r,
  Z as s,
  It as t,
  xt as u,
  yt as v,
  Fe as w,
  Tt as x,
  bt as y,
  ue as z,
};
