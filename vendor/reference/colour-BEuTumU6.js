var e = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ],
  t = 16,
  n = (t, n) => ((e[n % 4]?.[t % 4] ?? 0) + 0.5) / 16,
  r = (e, t, r, i) =>
    Math.min(e - 1, Math.max(0, Math.floor(t * e + n(r, i) - 0.5))),
  i = (e, t = 1) => {
    let n = e.replace(`#`, ``),
      r =
        n.length === 3
          ? n
              .split(``)
              .map((e) => e + e)
              .join(``)
          : n,
      i = Number.parseInt(r, 16),
      a = (i >> 16) & 255,
      o = (i >> 8) & 255,
      s = i & 255;
    return (
      ((Math.round(Math.min(Math.max(t, 0), 1) * 255) << 24) |
        (s << 16) |
        (o << 8) |
        a) >>>
      0
    );
  },
  a = (e, t, n) => {
    let r = 0;
    for (let i = 0; i < 32; i += 8) {
      let a = (e >>> i) & 255,
        o = (t >>> i) & 255;
      r |= Math.round(a + (o - a) * n) << i;
    }
    return r >>> 0;
  },
  o = class {
    w;
    h;
    data;
    constructor(e, t) {
      ((this.w = e), (this.h = t), (this.data = new Uint32Array(e * t)));
    }
    get(e, t) {
      return e < 0 || t < 0 || e >= this.w || t >= this.h
        ? 0
        : (this.data[t * this.w + e] ?? 0);
    }
    fill(e) {
      this.data.fill(e);
    }
    rect(e, t, n, r, i) {
      let a = Math.floor(e),
        o = Math.floor(t),
        s = Math.max(0, a),
        c = Math.min(this.w, a + Math.round(n)),
        l = Math.min(this.h, o + Math.round(r));
      for (let e = Math.max(0, o); e < l; e += 1)
        c > s && this.data.fill(i, e * this.w + s, e * this.w + c);
    }
    plot(e, t, n) {
      let r = Math.floor(e),
        i = Math.floor(t);
      r >= 0 &&
        i >= 0 &&
        r < this.w &&
        i < this.h &&
        (this.data[i * this.w + r] = n);
    }
    ditherRect(e, t, r, i, a, o) {
      let s = Math.floor(e),
        c = Math.floor(t),
        l = Math.min(this.w, s + Math.round(r)),
        u = Math.min(this.h, c + Math.round(i));
      for (let e = Math.max(0, c); e < u; e += 1)
        for (let t = Math.max(0, s); t < l; t += 1)
          o > n(t, e) && (this.data[e * this.w + t] = a);
    }
    vGradient(e, r, i, o) {
      let s = Math.floor(e),
        c = Math.floor(r),
        l = c - s - 1,
        u = Array.from({ length: t }, (e, n) => a(i, o, n / (t - 1)));
      for (let e = Math.max(0, s); e < Math.min(this.h, c); e += 1) {
        let r = (l > 0 ? (e - s) / l : 0) * (t - 1),
          a = Math.min(Math.floor(r), t - 1),
          c = Math.min(a + 1, t - 1),
          d = r - a,
          f = u[a] ?? i,
          p = u[c] ?? o;
        for (let t = 0; t < this.w; t += 1)
          this.data[e * this.w + t] = d > n(t, e) ? p : f;
      }
    }
    sprite(e, t, n, r) {
      let i = Math.floor(e),
        a = Math.floor(t);
      for (let [e, t] of n.entries())
        for (let [n, o] of [...t].entries()) {
          let t = o === `.` ? void 0 : r[o];
          t !== void 0 && this.plot(i + n, a + e, t);
        }
    }
  },
  s = (e) => {
    let t = Number.parseInt(e.replace(`#`, ``), 16);
    return [Math.floor(t / 65536) % 256, Math.floor(t / 256) % 256, t % 256];
  },
  c = (e) =>
    `#${e.map((e) => Math.round(e).toString(16).padStart(2, `0`)).join(``)}`,
  l = (e, t, n) => [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n,
    e[2] + (t[2] - e[2]) * n,
  ];
export { i as a, o as i, l as n, n as o, s as r, r as s, c as t };
