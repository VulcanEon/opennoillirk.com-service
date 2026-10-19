var e =
    typeof global == `object` && global && global.Object === Object && global,
  t = typeof self == `object` && self && self.Object === Object && self,
  n = e || t || Function(`return this`)(),
  r = n.Symbol,
  i = Object.prototype,
  a = i.hasOwnProperty,
  o = i.toString,
  s = r ? r.toStringTag : void 0;
function c(e) {
  var t = a.call(e, s),
    n = e[s];
  try {
    e[s] = void 0;
    var r = !0;
  } catch {}
  var i = o.call(e);
  return (r && (t ? (e[s] = n) : delete e[s]), i);
}
var l = Object.prototype.toString;
function u(e) {
  return l.call(e);
}
var d = `[object Null]`,
  f = `[object Undefined]`,
  p = r ? r.toStringTag : void 0;
function m(e) {
  return e == null ? (e === void 0 ? f : d) : p && p in Object(e) ? c(e) : u(e);
}
function h(e) {
  return typeof e == `object` && !!e;
}
var g = Array.isArray;
function _(e) {
  var t = typeof e;
  return e != null && (t == `object` || t == `function`);
}
function v(e) {
  return e;
}
var ee = `[object AsyncFunction]`,
  te = `[object Function]`,
  ne = `[object GeneratorFunction]`,
  re = `[object Proxy]`;
function y(e) {
  if (!_(e)) return !1;
  var t = m(e);
  return t == te || t == ne || t == ee || t == re;
}
var b = n[`__core-js_shared__`],
  ie = (function () {
    var e = /[^.]+$/.exec((b && b.keys && b.keys.IE_PROTO) || ``);
    return e ? `Symbol(src)_1.` + e : ``;
  })();
function ae(e) {
  return !!ie && ie in e;
}
var oe = Function.prototype.toString;
function se(e) {
  if (e != null) {
    try {
      return oe.call(e);
    } catch {}
    try {
      return e + ``;
    } catch {}
  }
  return ``;
}
var ce = /[\\^$.*+?()[\]{}|]/g,
  le = /^\[object .+?Constructor\]$/,
  ue = Function.prototype,
  de = Object.prototype,
  fe = ue.toString,
  pe = de.hasOwnProperty,
  me = RegExp(
    `^` +
      fe
        .call(pe)
        .replace(ce, `\\$&`)
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          `$1.*?`,
        ) +
      `$`,
  );
function he(e) {
  return !_(e) || ae(e) ? !1 : (y(e) ? me : le).test(se(e));
}
function ge(e, t) {
  return e?.[t];
}
function x(e, t) {
  var n = ge(e, t);
  return he(n) ? n : void 0;
}
var S = Object.create,
  _e = (function () {
    function e() {}
    return function (t) {
      if (!_(t)) return {};
      if (S) return S(t);
      e.prototype = t;
      var n = new e();
      return ((e.prototype = void 0), n);
    };
  })();
function ve(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function ye(e, t) {
  var n = -1,
    r = e.length;
  for (t ||= Array(r); ++n < r;) t[n] = e[n];
  return t;
}
var be = 800,
  xe = 16,
  Se = Date.now;
function Ce(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Se(),
      i = xe - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= be) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function we(e) {
  return function () {
    return e;
  };
}
var C = (function () {
    try {
      var e = x(Object, `defineProperty`);
      return (e({}, ``, {}), e);
    } catch {}
  })(),
  Te = Ce(
    C
      ? function (e, t) {
          return C(e, `toString`, {
            configurable: !0,
            enumerable: !1,
            value: we(t),
            writable: !0,
          });
        }
      : v,
  ),
  Ee = 9007199254740991,
  De = /^(?:0|[1-9]\d*)$/;
function w(e, t) {
  var n = typeof e;
  return (
    (t ??= Ee),
    !!t &&
      (n == `number` || (n != `symbol` && De.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
function T(e, t, n) {
  t == `__proto__` && C
    ? C(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
function E(e, t) {
  return e === t || (e !== e && t !== t);
}
var Oe = Object.prototype.hasOwnProperty;
function ke(e, t, n) {
  var r = e[t];
  (!(Oe.call(e, t) && E(r, n)) || (n === void 0 && !(t in e))) && T(e, t, n);
}
function Ae(e, t, n, r) {
  var i = !n;
  n ||= {};
  for (var a = -1, o = t.length; ++a < o;) {
    var s = t[a],
      c = r ? r(n[s], e[s], s, n, e) : void 0;
    (c === void 0 && (c = e[s]), i ? T(n, s, c) : ke(n, s, c));
  }
  return n;
}
var je = Math.max;
function Me(e, t, n) {
  return (
    (t = je(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, i = -1, a = je(r.length - t, 0), o = Array(a);
        ++i < a;
      )
        o[i] = r[t + i];
      i = -1;
      for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
      return ((s[t] = n(o)), ve(e, this, s));
    }
  );
}
function Ne(e, t) {
  return Te(Me(e, t, v), e + ``);
}
var Pe = 9007199254740991;
function Fe(e) {
  return typeof e == `number` && e > -1 && e % 1 == 0 && e <= Pe;
}
function D(e) {
  return e != null && Fe(e.length) && !y(e);
}
function Ie(e, t, n) {
  if (!_(n)) return !1;
  var r = typeof t;
  return (r == `number` ? D(n) && w(t, n.length) : r == `string` && t in n)
    ? E(n[t], e)
    : !1;
}
function Le(e) {
  return Ne(function (t, n) {
    var r = -1,
      i = n.length,
      a = i > 1 ? n[i - 1] : void 0,
      o = i > 2 ? n[2] : void 0;
    for (
      a = e.length > 3 && typeof a == `function` ? (i--, a) : void 0,
        o && Ie(n[0], n[1], o) && ((a = i < 3 ? void 0 : a), (i = 1)),
        t = Object(t);
      ++r < i;
    ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var Re = Object.prototype;
function ze(e) {
  var t = e && e.constructor;
  return e === ((typeof t == `function` && t.prototype) || Re);
}
function Be(e, t) {
  for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
  return r;
}
var Ve = `[object Arguments]`;
function O(e) {
  return h(e) && m(e) == Ve;
}
var He = Object.prototype,
  Ue = He.hasOwnProperty,
  We = He.propertyIsEnumerable,
  k = O(
    (function () {
      return arguments;
    })(),
  )
    ? O
    : function (e) {
        return h(e) && Ue.call(e, `callee`) && !We.call(e, `callee`);
      };
function Ge() {
  return !1;
}
var A = typeof exports == `object` && exports && !exports.nodeType && exports,
  j = A && typeof module == `object` && module && !module.nodeType && module,
  M = j && j.exports === A ? n.Buffer : void 0,
  N = (M ? M.isBuffer : void 0) || Ge,
  Ke = `[object Arguments]`,
  qe = `[object Array]`,
  Je = `[object Boolean]`,
  Ye = `[object Date]`,
  Xe = `[object Error]`,
  Ze = `[object Function]`,
  Qe = `[object Map]`,
  $e = `[object Number]`,
  et = `[object Object]`,
  tt = `[object RegExp]`,
  nt = `[object Set]`,
  rt = `[object String]`,
  it = `[object WeakMap]`,
  at = `[object ArrayBuffer]`,
  ot = `[object DataView]`,
  st = `[object Float32Array]`,
  ct = `[object Float64Array]`,
  lt = `[object Int8Array]`,
  ut = `[object Int16Array]`,
  dt = `[object Int32Array]`,
  ft = `[object Uint8Array]`,
  pt = `[object Uint8ClampedArray]`,
  mt = `[object Uint16Array]`,
  ht = `[object Uint32Array]`,
  P = {};
((P[st] = P[ct] = P[lt] = P[ut] = P[dt] = P[ft] = P[pt] = P[mt] = P[ht] = !0),
  (P[Ke] =
    P[qe] =
    P[at] =
    P[Je] =
    P[ot] =
    P[Ye] =
    P[Xe] =
    P[Ze] =
    P[Qe] =
    P[$e] =
    P[et] =
    P[tt] =
    P[nt] =
    P[rt] =
    P[it] =
      !1));
function gt(e) {
  return h(e) && Fe(e.length) && !!P[m(e)];
}
function _t(e) {
  return function (t) {
    return e(t);
  };
}
var vt = typeof exports == `object` && exports && !exports.nodeType && exports,
  F = vt && typeof module == `object` && module && !module.nodeType && module,
  I = F && F.exports === vt && e.process,
  L = (function () {
    try {
      return (
        (F && F.require && F.require(`util`).types) ||
        (I && I.binding && I.binding(`util`))
      );
    } catch {}
  })(),
  R = L && L.isTypedArray,
  z = R ? _t(R) : gt,
  yt = Object.prototype.hasOwnProperty;
function bt(e, t) {
  var n = g(e),
    r = !n && k(e),
    i = !n && !r && N(e),
    a = !n && !r && !i && z(e),
    o = n || r || i || a,
    s = o ? Be(e.length, String) : [],
    c = s.length;
  for (var l in e)
    (t || yt.call(e, l)) &&
      !(
        o &&
        (l == `length` ||
          (i && (l == `offset` || l == `parent`)) ||
          (a && (l == `buffer` || l == `byteLength` || l == `byteOffset`)) ||
          w(l, c))
      ) &&
      s.push(l);
  return s;
}
function xt(e, t) {
  return function (n) {
    return e(t(n));
  };
}
function St(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var Ct = Object.prototype.hasOwnProperty;
function wt(e) {
  if (!_(e)) return St(e);
  var t = ze(e),
    n = [];
  for (var r in e) (r == `constructor` && (t || !Ct.call(e, r))) || n.push(r);
  return n;
}
function B(e) {
  return D(e) ? bt(e, !0) : wt(e);
}
var V = x(Object, `create`);
function Tt() {
  ((this.__data__ = V ? V(null) : {}), (this.size = 0));
}
function Et(e) {
  var t = this.has(e) && delete this.__data__[e];
  return ((this.size -= t ? 1 : 0), t);
}
var Dt = `__lodash_hash_undefined__`,
  Ot = Object.prototype.hasOwnProperty;
function kt(e) {
  var t = this.__data__;
  if (V) {
    var n = t[e];
    return n === Dt ? void 0 : n;
  }
  return Ot.call(t, e) ? t[e] : void 0;
}
var At = Object.prototype.hasOwnProperty;
function jt(e) {
  var t = this.__data__;
  return V ? t[e] !== void 0 : At.call(t, e);
}
var Mt = `__lodash_hash_undefined__`;
function Nt(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = V && t === void 0 ? Mt : t),
    this
  );
}
function H(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
((H.prototype.clear = Tt),
  (H.prototype.delete = Et),
  (H.prototype.get = kt),
  (H.prototype.has = jt),
  (H.prototype.set = Nt));
function Pt() {
  ((this.__data__ = []), (this.size = 0));
}
function U(e, t) {
  for (var n = e.length; n--;) if (E(e[n][0], t)) return n;
  return -1;
}
var Ft = Array.prototype.splice;
function It(e) {
  var t = this.__data__,
    n = U(t, e);
  return n < 0
    ? !1
    : (n == t.length - 1 ? t.pop() : Ft.call(t, n, 1), --this.size, !0);
}
function Lt(e) {
  var t = this.__data__,
    n = U(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rt(e) {
  return U(this.__data__, e) > -1;
}
function zt(e, t) {
  var n = this.__data__,
    r = U(n, e);
  return (r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this);
}
function W(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
((W.prototype.clear = Pt),
  (W.prototype.delete = It),
  (W.prototype.get = Lt),
  (W.prototype.has = Rt),
  (W.prototype.set = zt));
var G = x(n, `Map`);
function Bt() {
  ((this.size = 0),
    (this.__data__ = { hash: new H(), map: new (G || W)(), string: new H() }));
}
function Vt(e) {
  var t = typeof e;
  return t == `string` || t == `number` || t == `symbol` || t == `boolean`
    ? e !== `__proto__`
    : e === null;
}
function K(e, t) {
  var n = e.__data__;
  return Vt(t) ? n[typeof t == `string` ? `string` : `hash`] : n.map;
}
function Ht(e) {
  var t = K(this, e).delete(e);
  return ((this.size -= t ? 1 : 0), t);
}
function Ut(e) {
  return K(this, e).get(e);
}
function Wt(e) {
  return K(this, e).has(e);
}
function Gt(e, t) {
  var n = K(this, e),
    r = n.size;
  return (n.set(e, t), (this.size += n.size == r ? 0 : 1), this);
}
function q(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
((q.prototype.clear = Bt),
  (q.prototype.delete = Ht),
  (q.prototype.get = Ut),
  (q.prototype.has = Wt),
  (q.prototype.set = Gt));
var J = xt(Object.getPrototypeOf, Object),
  Kt = `[object Object]`,
  qt = Function.prototype,
  Jt = Object.prototype,
  Yt = qt.toString,
  Xt = Jt.hasOwnProperty,
  Zt = Yt.call(Object);
function Y(e) {
  if (!h(e) || m(e) != Kt) return !1;
  var t = J(e);
  if (t === null) return !0;
  var n = Xt.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && Yt.call(n) == Zt;
}
function Qt() {
  ((this.__data__ = new W()), (this.size = 0));
}
function $t(e) {
  var t = this.__data__,
    n = t.delete(e);
  return ((this.size = t.size), n);
}
function en(e) {
  return this.__data__.get(e);
}
function tn(e) {
  return this.__data__.has(e);
}
var nn = 200;
function rn(e, t) {
  var n = this.__data__;
  if (n instanceof W) {
    var r = n.__data__;
    if (!G || r.length < nn - 1)
      return (r.push([e, t]), (this.size = ++n.size), this);
    n = this.__data__ = new q(r);
  }
  return (n.set(e, t), (this.size = n.size), this);
}
function X(e) {
  this.size = (this.__data__ = new W(e)).size;
}
((X.prototype.clear = Qt),
  (X.prototype.delete = $t),
  (X.prototype.get = en),
  (X.prototype.has = tn),
  (X.prototype.set = rn));
var an = typeof exports == `object` && exports && !exports.nodeType && exports,
  Z = an && typeof module == `object` && module && !module.nodeType && module,
  on = Z && Z.exports === an ? n.Buffer : void 0,
  sn = on ? on.allocUnsafe : void 0;
function cn(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = sn ? sn(n) : new e.constructor(n);
  return (e.copy(r), r);
}
var ln = n.Uint8Array;
function un(e) {
  var t = new e.constructor(e.byteLength);
  return (new ln(t).set(new ln(e)), t);
}
function dn(e, t) {
  var n = t ? un(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function fn(e) {
  return typeof e.constructor == `function` && !ze(e) ? _e(J(e)) : {};
}
function pn(e) {
  return function (t, n, r) {
    for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
      var c = o[e ? s : ++i];
      if (n(a[c], c, a) === !1) break;
    }
    return t;
  };
}
var mn = pn();
function Q(e, t, n) {
  ((n !== void 0 && !E(e[t], n)) || (n === void 0 && !(t in e))) && T(e, t, n);
}
function hn(e) {
  return h(e) && D(e);
}
function $(e, t) {
  if (!(t === `constructor` && typeof e[t] == `function`) && t != `__proto__`)
    return e[t];
}
function gn(e) {
  return Ae(e, B(e));
}
function _n(e, t, n, r, i, a, o) {
  var s = $(e, n),
    c = $(t, n),
    l = o.get(c);
  if (l) {
    Q(e, n, l);
    return;
  }
  var u = a ? a(s, c, n + ``, e, t, o) : void 0,
    d = u === void 0;
  if (d) {
    var f = g(c),
      p = !f && N(c),
      m = !f && !p && z(c);
    ((u = c),
      f || p || m
        ? g(s)
          ? (u = s)
          : hn(s)
            ? (u = ye(s))
            : p
              ? ((d = !1), (u = cn(c, !0)))
              : m
                ? ((d = !1), (u = dn(c, !0)))
                : (u = [])
        : Y(c) || k(c)
          ? ((u = s), k(s) ? (u = gn(s)) : (!_(s) || y(s)) && (u = fn(c)))
          : (d = !1));
  }
  (d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), Q(e, n, u));
}
function vn(e, t, n, r, i) {
  e !== t &&
    mn(
      t,
      function (a, o) {
        if (((i ||= new X()), _(a))) _n(e, t, o, n, vn, r, i);
        else {
          var s = r ? r($(e, o), a, o + ``, e, t, i) : void 0;
          (s === void 0 && (s = a), Q(e, o, s));
        }
      },
      B,
    );
}
var yn = Le(function (e, t, n, r) {
  vn(e, t, n, r);
});
function bn(e, t) {
  return t
    ? !Y(e) || !Y(t)
      ? t
      : yn({}, e, t, (e, t) => {
          if (g(t)) return t;
        })
    : e;
}
function xn(e) {
  return e.replace(/\/+$/, ``);
}
function Sn(e) {
  return /^https?:\/\//.test(e);
}
function Cn(e, t) {
  return Sn(e) ? e : new URL(e, `${xn(t)}/`).toString();
}
function wn(e) {
  let t = e.split(/[?#]/)[0] ?? `/`;
  return t ? (t.startsWith(`/`) ? t : `/${t}`) : `/`;
}
export { bn as a, xn as i, wn as n, Cn as r, Sn as t };
