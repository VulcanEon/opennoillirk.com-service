import { i as e, n as t } from "./compiler-runtime-BybR60WX.js";
import { m as n, n as r, t as i, v as a } from "./useStore-CO7AIjx_.js";
import {
  b as o,
  i as s,
  m as c,
  p as l,
  t as u,
  u as d,
} from "./link-CFi9sgXA.js";
import { t as f } from "./jsx-runtime-D_h4s5mO.js";
function p(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e;
  return e;
}
function m(e) {
  return !!e?.isNotFound;
}
var h = `__root__`;
function g(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function _(e) {
  return e instanceof Response && !!e.options;
}
function v(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return g(e);
}
var y = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n
              ? (this._path = h)
              : this.parentRoute ||
                o(
                  !1,
                  `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`,
                ));
          let r = n ? h : t?.path;
          r && r !== `/` && (r = l(r));
          let i = t?.id || r,
            a = n
              ? h
              : d([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = d([`/`, a])));
          let s = a === `__root__` ? `/` : d([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = s),
            (this._to = c(s)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => g({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  b = class extends y {
    constructor(e) {
      super(e);
    }
  },
  x = e(t(), 1),
  S = x.createContext(void 0),
  C = x.createContext(void 0),
  w = { state: void 0, get: () => void 0, subscribe: () => () => {} };
function T(e) {
  let t = r(),
    n = x.useContext(e.from ? C : S),
    s = e.from ?? n,
    c = s
      ? e.from
        ? t.stores.getMatchStoreByRouteId(s)
        : t.stores.activeMatchStoresById.get(s)
      : void 0,
    l = x.useRef(void 0);
  return i(c ?? w, (n) => {
    if (
      (o(
        !((e.shouldThrow ?? !0) && !n),
        `Could not find ${e.from ? `an active match from "${e.from}"` : `a nearest match!`}`,
      ),
      n === void 0)
    )
      return;
    let r = e.select ? e.select(n) : n;
    if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
      let e = a(l.current, r);
      return ((l.current = e), e);
    }
    return r;
  });
}
function E(e) {
  return T({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function D(e) {
  let { select: t, ...n } = e;
  return T({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function O(e) {
  return T({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function k(e) {
  return T({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function A(e) {
  let t = r();
  return x.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t],
  );
}
function j(e) {
  return T({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var M = f(),
  N = class extends y {
    constructor(e) {
      (super(e),
        (this.useMatch = (e) =>
          T({
            select: e?.select,
            from: this.id,
            structuralSharing: e?.structuralSharing,
          })),
        (this.useRouteContext = (e) => j({ ...e, from: this.id })),
        (this.useSearch = (e) =>
          k({
            select: e?.select,
            structuralSharing: e?.structuralSharing,
            from: this.id,
          })),
        (this.useParams = (e) =>
          O({
            select: e?.select,
            structuralSharing: e?.structuralSharing,
            from: this.id,
          })),
        (this.useLoaderDeps = (e) => D({ ...e, from: this.id })),
        (this.useLoaderData = (e) => E({ ...e, from: this.id })),
        (this.useNavigate = () => A({ from: this.fullPath })),
        (this.Link = x.forwardRef((e, t) =>
          (0, M.jsx)(u, { ref: t, from: this.fullPath, ...e }),
        )),
        (this.$$typeof = Symbol.for(`react.memo`)));
    }
  };
function P(e) {
  return new N(e);
}
function F() {
  return (e) => L(e);
}
var I = class extends b {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        T({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => j({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        k({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        O({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => D({ ...e, from: this.id })),
      (this.useLoaderData = (e) => E({ ...e, from: this.id })),
      (this.useNavigate = () => A({ from: this.fullPath })),
      (this.Link = x.forwardRef((e, t) =>
        (0, M.jsx)(u, { ref: t, from: this.fullPath, ...e }),
      )),
      (this.$$typeof = Symbol.for(`react.memo`)));
  }
};
function L(e) {
  return new I(e);
}
function R(e) {
  return typeof e == `object`
    ? new z(e, { silent: !0 }).createRoute(e)
    : new z(e, { silent: !0 }).createRoute;
}
var z = class {
    constructor(e, t) {
      ((this.path = e),
        (this.createRoute = (e) => {
          let t = P(e);
          return ((t.isRoot = !1), t);
        }),
        (this.silent = t?.silent));
    }
  },
  B = class {
    constructor(e) {
      ((this.useMatch = (e) =>
        T({
          select: e?.select,
          from: this.options.id,
          structuralSharing: e?.structuralSharing,
        })),
        (this.useRouteContext = (e) => j({ ...e, from: this.options.id })),
        (this.useSearch = (e) =>
          k({
            select: e?.select,
            structuralSharing: e?.structuralSharing,
            from: this.options.id,
          })),
        (this.useParams = (e) =>
          O({
            select: e?.select,
            structuralSharing: e?.structuralSharing,
            from: this.options.id,
          })),
        (this.useLoaderDeps = (e) => D({ ...e, from: this.options.id })),
        (this.useLoaderData = (e) => E({ ...e, from: this.options.id })),
        (this.useNavigate = () =>
          A({ from: r().routesById[this.options.id].fullPath })),
        (this.options = e),
        (this.$$typeof = Symbol.for(`react.memo`)));
    }
  };
function V(e) {
  return typeof e == `object` ? new B(e) : (t) => new B({ id: e, ...t });
}
function H(e, t) {
  let r,
    i,
    a,
    o,
    c = () => (
      (r ||= e()
        .then((e) => {
          ((r = void 0), (i = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((a = e),
            n(a) &&
              a instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${a.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (o = !0));
          }
        })),
      r
    ),
    l = function (e) {
      if (o) throw (window.location.reload(), new Promise(() => {}));
      if (a) throw a;
      if (!i)
        if (s) s(c());
        else throw c();
      return x.createElement(i, e);
    };
  return ((l.preload = c), l);
}
export {
  A as a,
  S as c,
  g as d,
  h as f,
  F as i,
  _ as l,
  p as m,
  R as n,
  O as o,
  m as p,
  V as r,
  T as s,
  H as t,
  v as u,
};
