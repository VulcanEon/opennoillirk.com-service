import { i as e, n as t, o as n, s as r } from "./client-CdvhFRyp.js";
import { i, n as a, r as o, t as s } from "./src-eercGixD.js";
var c = () => window.location.origin;
function l(e) {
  for (let t of r) {
    let n = `/${t}`;
    if (e === n) return `/`;
    if (e.startsWith(`${n}/`)) return e.slice(n.length) || `/`;
  }
  return e;
}
function u(t, n) {
  return n === e ? t : `/${n}${t === `/` ? `` : t}`;
}
function d() {
  return i(`https://opennoillirk.com`) || i(c()) || `http://localhost:3000`;
}
function f(e, t) {
  return s(e) ? e : u(l(a(e)), t);
}
function p(e) {
  return n[e];
}
function m(e, t) {
  if (s(e)) return [];
  let n = l(a(e)),
    i = r.map((e) => ({ rel: `alternate`, hrefLang: e, href: o(u(n, e), t) }));
  return (
    i.push({ rel: `alternate`, hrefLang: `x-default`, href: o(n, t) }),
    i
  );
}
function h(e) {
  if (e) return Array.isArray(e) ? e.join(`, `) : e;
}
function g(e) {
  return JSON.stringify(e).replace(/</g, `\\u003c`);
}
function _(e) {
  let n = e.locale ?? t(),
    r = d(),
    i = f(e.canonicalPath, n),
    a = o(i, r),
    s = e.description,
    c = h(e.keywords),
    l = e.robots ?? `index,follow`,
    u = e.type ?? `website`,
    _ = e.twitterSite ?? a,
    v = o(e.image ?? `/og.png`, r),
    y = v ? `summary_large_image` : `summary`,
    b = [
      { title: e.title },
      { name: `robots`, content: l },
      { property: `og:type`, content: u },
      { property: `og:title`, content: e.title },
      { property: `og:url`, content: a },
      { property: `og:locale`, content: p(n) },
      { name: `twitter:card`, content: y },
      { name: `twitter:title`, content: e.title },
      { name: `twitter:url`, content: a },
      { name: `twitter:site`, content: _ },
    ];
  return (
    s &&
      b.push(
        { name: `description`, content: s },
        { property: `og:description`, content: s },
        { name: `twitter:description`, content: s },
      ),
    c && b.push({ name: `keywords`, content: c }),
    e.siteName && b.push({ property: `og:site_name`, content: e.siteName }),
    v &&
      b.push(
        { property: `og:image`, content: v },
        { name: `twitter:image`, content: v },
      ),
    v &&
      e.imageSize &&
      b.push(
        { property: `og:image:width`, content: String(e.imageSize.width) },
        { property: `og:image:height`, content: String(e.imageSize.height) },
      ),
    v &&
      e.imageAlt &&
      b.push({ property: `og:image:alt`, content: e.imageAlt }),
    {
      meta: b,
      links: [
        { rel: `canonical`, href: a },
        ...(e.alternates === !1 ? [] : m(i, r)),
      ],
      scripts: e.ldJson
        ? [{ type: `application/ld+json`, children: g(e.ldJson) }]
        : void 0,
    }
  );
}
function v(e) {
  let n = e.locale ?? t();
  return _({ ...e, locale: n, robots: `noindex,nofollow`, alternates: !1 });
}
export { _ as n, v as t };
