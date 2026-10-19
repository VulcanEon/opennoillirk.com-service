import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import { t as r } from "./react-dom-D0hKRYVm.js";
import { t as i } from "./jsx-runtime-D_h4s5mO.js";
import "./src-eercGixD.js";
import { t as a } from "./web-config-CJDEWP5_.js";
import { t as o } from "./preload-helper-qlgyTAkD.js";
import { A as s, k as c } from "./main-BXKF3zmu.js";
var l = s(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  u = s(`info`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
    [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
  ]),
  d = s(`octagon-x`, [
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [
      `path`,
      {
        d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
        key: `2d38gg`,
      },
    ],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  f = s(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  p = n(),
  m = e(t(), 1),
  h = e(r(), 1);
function g(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
var _ = (e) => {
    switch (e) {
      case `success`:
        return te;
      case `info`:
        return y;
      case `warning`:
        return ne;
      case `error`:
        return b;
      default:
        return null;
    }
  },
  v = Array(12).fill(0),
  ee = ({ visible: e, className: t }) =>
    m.createElement(
      `div`,
      {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        "data-visible": e,
      },
      m.createElement(
        `div`,
        { className: `sonner-spinner` },
        v.map((e, t) =>
          m.createElement(`div`, {
            className: `sonner-loading-bar`,
            key: `spinner-bar-${t}`,
          }),
        ),
      ),
    ),
  te = m.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    m.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    }),
  ),
  ne = m.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    m.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    }),
  ),
  y = m.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    m.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    }),
  ),
  b = m.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    m.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    }),
  ),
  re = m.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    m.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    m.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
  ),
  x = () => {
    let [e, t] = m.useState(document.hidden);
    return (
      m.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  S = 1,
  C = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : S++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e
            ? (this.dismissedToasts.add(e),
              requestAnimationFrame(() =>
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
              ))
            : this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), m.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (T(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o =
                      typeof r == `object` && !m.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !m.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !m.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !m.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)),
                  t.finally == null || t.finally.call(t));
              }),
            s = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t),
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || S++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  w = (e, t) => {
    let n = t?.id || S++;
    return (C.addToast({ title: e, ...t, id: n }), n);
  },
  T = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  ie = w,
  E = Object.assign(
    ie,
    {
      success: C.success,
      info: C.info,
      warning: C.warning,
      error: C.error,
      custom: C.custom,
      message: C.message,
      promise: C.promise,
      dismiss: C.dismiss,
      loading: C.loading,
    },
    { getHistory: () => C.toasts, getToasts: () => C.getActiveToasts() },
  );
g(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
function D(e) {
  return e.label !== void 0;
}
var ae = 3,
  oe = `24px`,
  se = `16px`,
  O = 4e3,
  k = 356,
  ce = 14,
  A = 45,
  le = 200;
function j(...e) {
  return e.filter(Boolean).join(` `);
}
function M(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var ue = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: h,
      cancelButtonStyle: g,
      actionButtonStyle: v,
      className: te = ``,
      descriptionClassName: ne = ``,
      duration: y,
      position: b,
      gap: S,
      expandByDefault: C,
      classNames: w,
      icons: T,
      closeButtonAriaLabel: ie = `Close toast`,
    } = e,
    [E, ae] = m.useState(null),
    [oe, se] = m.useState(null),
    [k, ce] = m.useState(!1),
    [ue, de] = m.useState(!1),
    [fe, N] = m.useState(!1),
    [P, pe] = m.useState(!1),
    [F, me] = m.useState(!1),
    [he, I] = m.useState(0),
    [ge, _e] = m.useState(0),
    L = m.useRef(n.duration || y || O),
    ve = m.useRef(null),
    R = m.useRef(null),
    ye = c === 0,
    be = c + 1 <= o,
    z = n.type,
    B = n.dismissible !== !1,
    V = n.className || ``,
    xe = n.descriptionClassName || ``,
    H = m.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]),
    U = m.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    Se = m.useMemo(() => n.duration || y || O, [n.duration, y]),
    Ce = m.useRef(0),
    W = m.useRef(0),
    we = m.useRef(0),
    G = m.useRef(null),
    [Te, Ee] = b.split(`-`),
    De = m.useMemo(
      () => s.reduce((e, t, n) => (n >= H ? e : e + t.height), 0),
      [s, H],
    ),
    Oe = x(),
    ke = n.invert || t,
    K = z === `loading`;
  ((W.current = m.useMemo(() => H * S + De, [H, De])),
    m.useEffect(() => {
      L.current = Se;
    }, [Se]),
    m.useEffect(() => {
      ce(!0);
    }, []),
    m.useEffect(() => {
      let e = R.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          _e(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    m.useLayoutEffect(() => {
      if (!k) return;
      let e = R.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        _e(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [k, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
  let q = m.useCallback(() => {
    (de(!0),
      I(W.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, le));
  }, [n, d, a, W]);
  (m.useEffect(() => {
    if (
      (n.promise && z === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || Oe
        ? (() => {
            if (we.current < Ce.current) {
              let e = new Date().getTime() - Ce.current;
              L.current -= e;
            }
            we.current = new Date().getTime();
          })()
        : L.current !== 1 / 0 &&
          ((Ce.current = new Date().getTime()),
          (e = setTimeout(() => {
            (n.onAutoClose == null || n.onAutoClose.call(n, n), q());
          }, L.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, z, Oe, q]),
    m.useEffect(() => {
      n.delete && (q(), n.onDismiss == null || n.onDismiss.call(n, n));
    }, [q, n.delete]));
  function Ae() {
    return T?.loading
      ? m.createElement(
          `div`,
          {
            className: j(w?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": z === `loading`,
          },
          T.loading,
        )
      : m.createElement(ee, {
          className: j(w?.loader, n?.classNames?.loader),
          visible: z === `loading`,
        });
  }
  let je = n.icon || T?.[z] || _(z);
  return m.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: R,
      className: j(
        te,
        V,
        w?.toast,
        n?.classNames?.toast,
        w?.default,
        w?.[z],
        n?.classNames?.[z],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? f,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": k,
      "data-promise": !!n.promise,
      "data-swiped": F,
      "data-removed": ue,
      "data-visible": be,
      "data-y-position": Te,
      "data-x-position": Ee,
      "data-index": c,
      "data-front": ye,
      "data-swiping": fe,
      "data-dismissible": B,
      "data-type": z,
      "data-invert": ke,
      "data-swipe-out": P,
      "data-swipe-direction": oe,
      "data-expanded": !!(u || (C && k)),
      "data-testid": n.testId,
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${ue ? he : W.current}px`,
        "--initial-height": C ? `auto` : `${ge}px`,
        ...h,
        ...n.style,
      },
      onDragEnd: () => {
        (N(!1), ae(null), (G.current = null));
      },
      onPointerDown: (e) => {
        e.button !== 2 &&
          (K ||
            !B ||
            ((ve.current = new Date()),
            I(W.current),
            e.target.setPointerCapture(e.pointerId),
            e.target.tagName !== `BUTTON` &&
              (N(!0), (G.current = { x: e.clientX, y: e.clientY }))));
      },
      onPointerUp: () => {
        if (P || !B) return;
        G.current = null;
        let e = Number(
            R.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          t = Number(
            R.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          r = new Date().getTime() - ve.current?.getTime(),
          i = E === `x` ? e : t,
          a = Math.abs(i) / r;
        if (Math.abs(i) >= A || a > 0.11) {
          (I(W.current),
            n.onDismiss == null || n.onDismiss.call(n, n),
            se(E === `x` ? (e > 0 ? `right` : `left`) : t > 0 ? `down` : `up`),
            q(),
            pe(!0));
          return;
        } else {
          var o, s;
          ((o = R.current) == null ||
            o.style.setProperty(`--swipe-amount-x`, `0px`),
            (s = R.current) == null ||
              s.style.setProperty(`--swipe-amount-y`, `0px`));
        }
        (me(!1), N(!1), ae(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!G.current || !B || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - G.current.y,
          a = t.clientX - G.current.x,
          o = e.swipeDirections ?? M(b);
        !E &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          ae(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 },
          c = (e) => 1 / (1.5 + Math.abs(e) / 20);
        if (E === `y`) {
          if (o.includes(`top`) || o.includes(`bottom`))
            if ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0))
              s.y = i;
            else {
              let e = i * c(i);
              s.y = Math.abs(e) < Math.abs(i) ? e : i;
            }
        } else if (E === `x` && (o.includes(`left`) || o.includes(`right`)))
          if ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0))
            s.x = a;
          else {
            let e = a * c(a);
            s.x = Math.abs(e) < Math.abs(a) ? e : a;
          }
        ((Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && me(!0),
          (n = R.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = R.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    U && !n.jsx && z !== `loading`
      ? m.createElement(
          `button`,
          {
            "aria-label": ie,
            "data-disabled": K,
            "data-close-button": !0,
            onClick:
              K || !B
                ? () => {}
                : () => {
                    (q(), n.onDismiss == null || n.onDismiss.call(n, n));
                  },
            className: j(w?.closeButton, n?.classNames?.closeButton),
          },
          T?.close ?? re,
        )
      : null,
    (z || n.icon || n.promise) && n.icon !== null && (T?.[z] !== null || n.icon)
      ? m.createElement(
          `div`,
          { "data-icon": ``, className: j(w?.icon, n?.classNames?.icon) },
          n.promise || (n.type === `loading` && !n.icon)
            ? n.icon || Ae()
            : null,
          n.type === `loading` ? null : je,
        )
      : null,
    m.createElement(
      `div`,
      { "data-content": ``, className: j(w?.content, n?.classNames?.content) },
      m.createElement(
        `div`,
        { "data-title": ``, className: j(w?.title, n?.classNames?.title) },
        n.jsx ? n.jsx : typeof n.title == `function` ? n.title() : n.title,
      ),
      n.description
        ? m.createElement(
            `div`,
            {
              "data-description": ``,
              className: j(ne, xe, w?.description, n?.classNames?.description),
            },
            typeof n.description == `function`
              ? n.description()
              : n.description,
          )
        : null,
    ),
    m.isValidElement(n.cancel)
      ? n.cancel
      : n.cancel && D(n.cancel)
        ? m.createElement(
            `button`,
            {
              "data-button": !0,
              "data-cancel": !0,
              style: n.cancelButtonStyle || g,
              onClick: (e) => {
                D(n.cancel) &&
                  B &&
                  (n.cancel.onClick == null ||
                    n.cancel.onClick.call(n.cancel, e),
                  q());
              },
              className: j(w?.cancelButton, n?.classNames?.cancelButton),
            },
            n.cancel.label,
          )
        : null,
    m.isValidElement(n.action)
      ? n.action
      : n.action && D(n.action)
        ? m.createElement(
            `button`,
            {
              "data-button": !0,
              "data-action": !0,
              style: n.actionButtonStyle || v,
              onClick: (e) => {
                D(n.action) &&
                  (n.action.onClick == null ||
                    n.action.onClick.call(n.action, e),
                  !e.defaultPrevented && q());
              },
              className: j(w?.actionButton, n?.classNames?.actionButton),
            },
            n.action.label,
          )
        : null,
  );
};
function de() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function fe(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? se : oe;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var N = m.forwardRef(function (e, t) {
    let {
        id: n,
        invert: r,
        position: i = `bottom-right`,
        hotkey: a = [`altKey`, `KeyT`],
        expand: o,
        closeButton: s,
        className: c,
        offset: l,
        mobileOffset: u,
        theme: d = `light`,
        richColors: f,
        duration: p,
        style: g,
        visibleToasts: _ = ae,
        toastOptions: v,
        dir: ee = de(),
        gap: te = ce,
        icons: ne,
        containerAriaLabel: y = `Notifications`,
      } = e,
      [b, re] = m.useState([]),
      x = m.useMemo(
        () =>
          n
            ? b.filter((e) => e.toasterId === n)
            : b.filter((e) => !e.toasterId),
        [b, n],
      ),
      S = m.useMemo(
        () =>
          Array.from(
            new Set(
              [i].concat(x.filter((e) => e.position).map((e) => e.position)),
            ),
          ),
        [x, i],
      ),
      [w, T] = m.useState([]),
      [ie, E] = m.useState(!1),
      [D, oe] = m.useState(!1),
      [se, O] = m.useState(
        d === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : d,
      ),
      A = m.useRef(null),
      le = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      j = m.useRef(null),
      M = m.useRef(!1),
      N = m.useCallback((e) => {
        re(
          (t) => (
            t.find((t) => t.id === e.id)?.delete || C.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          ),
        );
      }, []);
    return (
      m.useEffect(
        () =>
          C.subscribe((e) => {
            if (e.dismiss) {
              requestAnimationFrame(() => {
                re((t) =>
                  t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
                );
              });
              return;
            }
            setTimeout(() => {
              h.flushSync(() => {
                re((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [b],
      ),
      m.useEffect(() => {
        if (d !== `system`) {
          O(d);
          return;
        }
        if (
          (d === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? O(`dark`)
              : O(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            O(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              O(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [d]),
      m.useEffect(() => {
        b.length <= 1 && E(!1);
      }, [b]),
      m.useEffect(() => {
        let e = (e) => {
          if (a.every((t) => e[t] || e.code === t)) {
            var t;
            (E(!0), (t = A.current) == null || t.focus());
          }
          e.code === `Escape` &&
            (document.activeElement === A.current ||
              A.current?.contains(document.activeElement)) &&
            E(!1);
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [a]),
      m.useEffect(() => {
        if (A.current)
          return () => {
            j.current &&
              (j.current.focus({ preventScroll: !0 }),
              (j.current = null),
              (M.current = !1));
          };
      }, [A.current]),
      m.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${y} ${le}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        S.map((t, n) => {
          let [i, a] = t.split(`-`);
          return x.length
            ? m.createElement(
                `ol`,
                {
                  key: t,
                  dir: ee === `auto` ? de() : ee,
                  tabIndex: -1,
                  ref: A,
                  className: c,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": se,
                  "data-y-position": i,
                  "data-x-position": a,
                  style: {
                    "--front-toast-height": `${w[0]?.height || 0}px`,
                    "--width": `${k}px`,
                    "--gap": `${te}px`,
                    ...g,
                    ...fe(l, u),
                  },
                  onBlur: (e) => {
                    M.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((M.current = !1),
                      (j.current &&=
                        (j.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      M.current ||
                      ((M.current = !0), (j.current = e.relatedTarget));
                  },
                  onMouseEnter: () => E(!0),
                  onMouseMove: () => E(!0),
                  onMouseLeave: () => {
                    D || E(!1);
                  },
                  onDragEnd: () => E(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      oe(!0);
                  },
                  onPointerUp: () => oe(!1),
                },
                x
                  .filter((e) => (!e.position && n === 0) || e.position === t)
                  .map((n, i) =>
                    m.createElement(ue, {
                      key: n.id,
                      icons: ne,
                      index: i,
                      toast: n,
                      defaultRichColors: f,
                      duration: v?.duration ?? p,
                      className: v?.className,
                      descriptionClassName: v?.descriptionClassName,
                      invert: r,
                      visibleToasts: _,
                      closeButton: v?.closeButton ?? s,
                      interacting: D,
                      position: t,
                      style: v?.style,
                      unstyled: v?.unstyled,
                      classNames: v?.classNames,
                      cancelButtonStyle: v?.cancelButtonStyle,
                      actionButtonStyle: v?.actionButtonStyle,
                      closeButtonAriaLabel: v?.closeButtonAriaLabel,
                      removeToast: N,
                      toasts: x.filter((e) => e.position == n.position),
                      heights: w.filter((e) => e.position == n.position),
                      setHeights: T,
                      expandByDefault: o,
                      gap: te,
                      expanded: ie,
                      swipeDirections: e.swipeDirections,
                    }),
                  ),
              )
            : null;
        }),
      )
    );
  }),
  P = i(),
  pe = (e) => {
    let t = (0, p.c)(8),
      n,
      r;
    t[0] === e
      ? ((n = t[1]), (r = t[2]))
      : (({ theme: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
    let i = r === void 0 ? `system` : r,
      a,
      o;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = {
          success: (0, P.jsx)(l, { className: `size-4` }),
          info: (0, P.jsx)(u, { className: `size-4` }),
          warning: (0, P.jsx)(f, { className: `size-4` }),
          error: (0, P.jsx)(d, { className: `size-4` }),
          loading: (0, P.jsx)(c, { className: `size-4 animate-spin` }),
        }),
        (o = {
          "--normal-bg": `var(--popover)`,
          "--normal-text": `var(--popover-foreground)`,
          "--normal-border": `var(--border)`,
          "--border-radius": `var(--radius)`,
        }),
        (t[3] = a),
        (t[4] = o))
      : ((a = t[3]), (o = t[4]));
    let s;
    return (
      t[5] !== n || t[6] !== i
        ? ((s = (0, P.jsx)(N, {
            className: `toaster group`,
            icons: a,
            style: o,
            theme: i,
            ...n,
          })),
          (t[5] = n),
          (t[6] = i),
          (t[7] = s))
        : (s = t[7]),
      s
    );
  };
function F(e, t) {
  let n = t && t.cache ? t.cache : be,
    r = t && t.serializer ? t.serializer : R;
  return (t && t.strategy ? t.strategy : _e)(e, { cache: n, serializer: r });
}
function me(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function he(e, t, n, r) {
  let i = me(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function I(e, t, n) {
  let r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function ge(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function _e(e, t) {
  let n = e.length === 1 ? he : I;
  return ge(e, this, n, t.cache.create(), t.serializer);
}
function L(e, t) {
  return ge(e, this, I, t.cache.create(), t.serializer);
}
function ve(e, t) {
  return ge(e, this, he, t.cache.create(), t.serializer);
}
var R = function () {
    return JSON.stringify(arguments);
  },
  ye = class {
    cache;
    constructor() {
      this.cache = Object.create(null);
    }
    get(e) {
      return this.cache[e];
    }
    set(e, t) {
      this.cache[e] = t;
    }
  },
  be = {
    create: function () {
      return new ye();
    },
  },
  z = { variadic: L, monadic: ve },
  B = class extends Error {
    constructor(e, t) {
      let n = e;
      (t && (n += `: ` + t),
        super(n),
        (this.code = e),
        t && (this.originalMessage = t));
    }
  },
  V = (function (e) {
    return (
      (e.MISSING_MESSAGE = `MISSING_MESSAGE`),
      (e.MISSING_FORMAT = `MISSING_FORMAT`),
      (e.ENVIRONMENT_FALLBACK = `ENVIRONMENT_FALLBACK`),
      (e.INSUFFICIENT_PATH = `INSUFFICIENT_PATH`),
      (e.INVALID_MESSAGE = `INVALID_MESSAGE`),
      (e.INVALID_KEY = `INVALID_KEY`),
      (e.FORMATTING_ERROR = `FORMATTING_ERROR`),
      e
    );
  })(V || {});
function xe() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {},
  };
}
function H(e, t) {
  return F(e, {
    cache:
      ((n = t),
      {
        create: () => ({
          get: (e) => n[e],
          set(e, t) {
            n[e] = t;
          },
        }),
      }),
    strategy: z.variadic,
  });
  var n;
}
function U(e, t) {
  return H((...t) => new e(...t), t);
}
function Se(e) {
  return {
    getDateTimeFormat: U(Intl.DateTimeFormat, e.dateTime),
    getNumberFormat: U(Intl.NumberFormat, e.number),
    getPluralRules: U(Intl.PluralRules, e.pluralRules),
    getRelativeTimeFormat: U(Intl.RelativeTimeFormat, e.relativeTime),
    getListFormat: U(Intl.ListFormat, e.list),
    getDisplayNames: U(Intl.DisplayNames, e.displayNames),
  };
}
var Ce =
  /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function W(e) {
  let t = {};
  return (
    e.replace(Ce, (e) => {
      let n = e.length;
      switch (e[0]) {
        case `G`:
          t.era = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `y`:
          t.year = n === 2 ? `2-digit` : `numeric`;
          break;
        case `Y`:
        case `u`:
        case `U`:
        case `r`:
          throw RangeError(
            "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
          );
        case `q`:
        case `Q`:
          throw RangeError("`q/Q` (quarter) patterns are not supported");
        case `M`:
        case `L`:
          t.month = [`numeric`, `2-digit`, `short`, `long`, `narrow`][n - 1];
          break;
        case `w`:
        case `W`:
          throw RangeError("`w/W` (week) patterns are not supported");
        case `d`:
          t.day = [`numeric`, `2-digit`][n - 1];
          break;
        case `D`:
        case `F`:
        case `g`:
          throw RangeError(
            "`D/F/g` (day) patterns are not supported, use `d` instead",
          );
        case `E`:
          t.weekday = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `e`:
          if (n < 4)
            throw RangeError("`e..eee` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `c`:
          if (n < 4)
            throw RangeError("`c..ccc` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `a`:
          t.hour12 = !0;
          break;
        case `b`:
        case `B`:
          throw RangeError(
            "`b/B` (period) patterns are not supported, use `a` instead",
          );
        case `h`:
          ((t.hourCycle = `h12`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `H`:
          ((t.hourCycle = `h23`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `K`:
          ((t.hourCycle = `h11`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `k`:
          ((t.hourCycle = `h24`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `j`:
        case `J`:
        case `C`:
          throw RangeError(
            "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
          );
        case `m`:
          t.minute = [`numeric`, `2-digit`][n - 1];
          break;
        case `s`:
          t.second = [`numeric`, `2-digit`][n - 1];
          break;
        case `S`:
        case `A`:
          throw RangeError(
            "`S/A` (second) patterns are not supported, use `s` instead",
          );
        case `z`:
          t.timeZoneName = n < 4 ? `short` : `long`;
          break;
        case `Z`:
        case `O`:
        case `v`:
        case `V`:
        case `X`:
        case `x`:
          throw RangeError(
            "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
          );
      }
      return ``;
    }),
    t
  );
}
var we = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function G(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  let t = e.split(we).filter((e) => e.length > 0),
    n = [];
  for (let e of t) {
    let t = e.split(`/`);
    if (t.length === 0) throw Error(`Invalid number skeleton`);
    let [r, ...i] = t;
    for (let e of i) if (e.length === 0) throw Error(`Invalid number skeleton`);
    n.push({ stem: r, options: i });
  }
  return n;
}
function Te(e) {
  return e.replace(/^(.*?)-/, ``);
}
var Ee = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  De = /^(@+)?(\+|#+)?[rs]?$/g,
  Oe = /(\*)(0+)|(#+)(0+)|(0+)/g,
  ke = /^(0+)$/;
function K(e) {
  let t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(De, function (e, n, r) {
      return (
        typeof r == `string`
          ? r === `+`
            ? (t.minimumSignificantDigits = n.length)
            : n[0] === `#`
              ? (t.maximumSignificantDigits = n.length)
              : ((t.minimumSignificantDigits = n.length),
                (t.maximumSignificantDigits =
                  n.length + (typeof r == `string` ? r.length : 0)))
          : ((t.minimumSignificantDigits = n.length),
            (t.maximumSignificantDigits = n.length)),
        ``
      );
    }),
    t
  );
}
function q(e) {
  switch (e) {
    case `sign-auto`:
      return { signDisplay: `auto` };
    case `sign-accounting`:
    case `()`:
      return { currencySign: `accounting` };
    case `sign-always`:
    case `+!`:
      return { signDisplay: `always` };
    case `sign-accounting-always`:
    case `()!`:
      return { signDisplay: `always`, currencySign: `accounting` };
    case `sign-except-zero`:
    case `+?`:
      return { signDisplay: `exceptZero` };
    case `sign-accounting-except-zero`:
    case `()?`:
      return { signDisplay: `exceptZero`, currencySign: `accounting` };
    case `sign-never`:
    case `+_`:
      return { signDisplay: `never` };
  }
}
function Ae(e) {
  let t;
  if (
    (e[0] === `E` && e[1] === `E`
      ? ((t = { notation: `engineering` }), (e = e.slice(2)))
      : e[0] === `E` && ((t = { notation: `scientific` }), (e = e.slice(1))),
    t)
  ) {
    let n = e.slice(0, 2);
    if (
      (n === `+!`
        ? ((t.signDisplay = `always`), (e = e.slice(2)))
        : n === `+?` && ((t.signDisplay = `exceptZero`), (e = e.slice(2))),
      !ke.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function je(e) {
  return q(e) || {};
}
function Me(e) {
  let t = {};
  for (let n of e) {
    switch (n.stem) {
      case `percent`:
      case `%`:
        t.style = `percent`;
        continue;
      case `%x100`:
        ((t.style = `percent`), (t.scale = 100));
        continue;
      case `currency`:
        ((t.style = `currency`), (t.currency = n.options[0]));
        continue;
      case `group-off`:
      case `,_`:
        t.useGrouping = !1;
        continue;
      case `precision-integer`:
      case `.`:
        t.maximumFractionDigits = 0;
        continue;
      case `measure-unit`:
      case `unit`:
        ((t.style = `unit`), (t.unit = Te(n.options[0])));
        continue;
      case `compact-short`:
      case `K`:
        ((t.notation = `compact`), (t.compactDisplay = `short`));
        continue;
      case `compact-long`:
      case `KK`:
        ((t.notation = `compact`), (t.compactDisplay = `long`));
        continue;
      case `scientific`:
        t = {
          ...t,
          notation: `scientific`,
          ...n.options.reduce((e, t) => ({ ...e, ...je(t) }), {}),
        };
        continue;
      case `engineering`:
        t = {
          ...t,
          notation: `engineering`,
          ...n.options.reduce((e, t) => ({ ...e, ...je(t) }), {}),
        };
        continue;
      case `notation-simple`:
        t.notation = `standard`;
        continue;
      case `unit-width-narrow`:
        ((t.currencyDisplay = `narrowSymbol`), (t.unitDisplay = `narrow`));
        continue;
      case `unit-width-short`:
        ((t.currencyDisplay = `code`), (t.unitDisplay = `short`));
        continue;
      case `unit-width-full-name`:
        ((t.currencyDisplay = `name`), (t.unitDisplay = `long`));
        continue;
      case `unit-width-iso-code`:
        t.currencyDisplay = `symbol`;
        continue;
      case `scale`:
        t.scale = parseFloat(n.options[0]);
        continue;
      case `rounding-mode-floor`:
        t.roundingMode = `floor`;
        continue;
      case `rounding-mode-ceiling`:
        t.roundingMode = `ceil`;
        continue;
      case `rounding-mode-down`:
        t.roundingMode = `trunc`;
        continue;
      case `rounding-mode-up`:
        t.roundingMode = `expand`;
        continue;
      case `rounding-mode-half-even`:
        t.roundingMode = `halfEven`;
        continue;
      case `rounding-mode-half-down`:
        t.roundingMode = `halfTrunc`;
        continue;
      case `rounding-mode-half-up`:
        t.roundingMode = `halfExpand`;
        continue;
      case `integer-width`:
        if (n.options.length > 1)
          throw RangeError(
            `integer-width stems only accept a single optional option`,
          );
        n.options[0].replace(Oe, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a)
            throw Error(`We currently do not support maximum integer digits`);
          else if (o)
            throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (ke.test(n.stem)) {
      t.minimumIntegerDigits = n.stem.length;
      continue;
    }
    if (Ee.test(n.stem)) {
      if (n.options.length > 1)
        throw RangeError(
          `Fraction-precision stems only accept a single optional option`,
        );
      n.stem.replace(Ee, function (e, n, r, i, a, o) {
        return (
          r === `*`
            ? (t.minimumFractionDigits = n.length)
            : i && i[0] === `#`
              ? (t.maximumFractionDigits = i.length)
              : a && o
                ? ((t.minimumFractionDigits = a.length),
                  (t.maximumFractionDigits = a.length + o.length))
                : ((t.minimumFractionDigits = n.length),
                  (t.maximumFractionDigits = n.length)),
          ``
        );
      });
      let e = n.options[0];
      e === `w`
        ? (t = { ...t, trailingZeroDisplay: `stripIfInteger` })
        : e && (t = { ...t, ...K(e) });
      continue;
    }
    if (De.test(n.stem)) {
      t = { ...t, ...K(n.stem) };
      continue;
    }
    let e = q(n.stem);
    e && (t = { ...t, ...e });
    let r = Ae(n.stem);
    r && (t = { ...t, ...r });
  }
  return t;
}
var J = (function (e) {
    return (
      (e[(e.literal = 0)] = `literal`),
      (e[(e.argument = 1)] = `argument`),
      (e[(e.number = 2)] = `number`),
      (e[(e.date = 3)] = `date`),
      (e[(e.time = 4)] = `time`),
      (e[(e.select = 5)] = `select`),
      (e[(e.plural = 6)] = `plural`),
      (e[(e.pound = 7)] = `pound`),
      (e[(e.tag = 8)] = `tag`),
      e
    );
  })({}),
  Ne = (function (e) {
    return (
      (e[(e.number = 0)] = `number`),
      (e[(e.dateTime = 1)] = `dateTime`),
      e
    );
  })({});
function Pe(e) {
  return e.type === J.literal;
}
function Fe(e) {
  return e.type === J.argument;
}
function Ie(e) {
  return e.type === J.number;
}
function Le(e) {
  return e.type === J.date;
}
function Re(e) {
  return e.type === J.time;
}
function ze(e) {
  return e.type === J.select;
}
function Be(e) {
  return e.type === J.plural;
}
function Ve(e) {
  return e.type === J.pound;
}
function He(e) {
  return e.type === J.tag;
}
function Ue(e) {
  return !!(e && typeof e == `object` && e.type === Ne.number);
}
function We(e) {
  return !!(e && typeof e == `object` && e.type === Ne.dateTime);
}
var Y = (function (e) {
    return (
      (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
        `EXPECT_ARGUMENT_CLOSING_BRACE`),
      (e[(e.EMPTY_ARGUMENT = 2)] = `EMPTY_ARGUMENT`),
      (e[(e.MALFORMED_ARGUMENT = 3)] = `MALFORMED_ARGUMENT`),
      (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = `EXPECT_ARGUMENT_TYPE`),
      (e[(e.INVALID_ARGUMENT_TYPE = 5)] = `INVALID_ARGUMENT_TYPE`),
      (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = `EXPECT_ARGUMENT_STYLE`),
      (e[(e.INVALID_NUMBER_SKELETON = 7)] = `INVALID_NUMBER_SKELETON`),
      (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = `INVALID_DATE_TIME_SKELETON`),
      (e[(e.EXPECT_NUMBER_SKELETON = 9)] = `EXPECT_NUMBER_SKELETON`),
      (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = `EXPECT_DATE_TIME_SKELETON`),
      (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
        `UNCLOSED_QUOTE_IN_ARGUMENT_STYLE`),
      (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
        `EXPECT_SELECT_ARGUMENT_OPTIONS`),
      (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
        `EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE`),
      (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
        `INVALID_PLURAL_ARGUMENT_OFFSET_VALUE`),
      (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
        `EXPECT_SELECT_ARGUMENT_SELECTOR`),
      (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
        `EXPECT_PLURAL_ARGUMENT_SELECTOR`),
      (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
        `EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT`),
      (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
        `EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT`),
      (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
        `INVALID_PLURAL_ARGUMENT_SELECTOR`),
      (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
        `DUPLICATE_PLURAL_ARGUMENT_SELECTOR`),
      (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
        `DUPLICATE_SELECT_ARGUMENT_SELECTOR`),
      (e[(e.MISSING_OTHER_CLAUSE = 22)] = `MISSING_OTHER_CLAUSE`),
      (e[(e.INVALID_TAG = 23)] = `INVALID_TAG`),
      (e[(e.INVALID_TAG_NAME = 25)] = `INVALID_TAG_NAME`),
      (e[(e.UNMATCHED_CLOSING_TAG = 26)] = `UNMATCHED_CLOSING_TAG`),
      (e[(e.UNCLOSED_TAG = 27)] = `UNCLOSED_TAG`),
      e
    );
  })({}),
  Ge = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  Ke = {
    "001": [`H`, `h`],
    419: [`h`, `H`, `hB`, `hb`],
    AC: [`H`, `h`, `hb`, `hB`],
    AD: [`H`, `hB`],
    AE: [`h`, `hB`, `hb`, `H`],
    AF: [`H`, `hb`, `hB`, `h`],
    AG: [`h`, `hb`, `H`, `hB`],
    AI: [`H`, `h`, `hb`, `hB`],
    AL: [`h`, `H`, `hB`],
    AM: [`H`, `hB`],
    AO: [`H`, `hB`],
    AR: [`h`, `H`, `hB`, `hb`],
    AS: [`h`, `H`],
    AT: [`H`, `hB`],
    AU: [`h`, `hb`, `H`, `hB`],
    AW: [`H`, `hB`],
    AX: [`H`],
    AZ: [`H`, `hB`, `h`],
    BA: [`H`, `hB`, `h`],
    BB: [`h`, `hb`, `H`, `hB`],
    BD: [`h`, `hB`, `H`],
    BE: [`H`, `hB`],
    BF: [`H`, `hB`],
    BG: [`H`, `hB`, `h`],
    BH: [`h`, `hB`, `hb`, `H`],
    BI: [`H`, `h`],
    BJ: [`H`, `hB`],
    BL: [`H`, `hB`],
    BM: [`h`, `hb`, `H`, `hB`],
    BN: [`hb`, `hB`, `h`, `H`],
    BO: [`h`, `H`, `hB`, `hb`],
    BQ: [`H`],
    BR: [`H`, `hB`],
    BS: [`h`, `hb`, `H`, `hB`],
    BT: [`h`, `H`],
    BW: [`H`, `h`, `hb`, `hB`],
    BY: [`H`, `h`],
    BZ: [`H`, `h`, `hb`, `hB`],
    CA: [`h`, `hb`, `H`, `hB`],
    CC: [`H`, `h`, `hb`, `hB`],
    CD: [`hB`, `H`],
    CF: [`H`, `h`, `hB`],
    CG: [`H`, `hB`],
    CH: [`H`, `hB`, `h`],
    CI: [`H`, `hB`],
    CK: [`H`, `h`, `hb`, `hB`],
    CL: [`h`, `H`, `hB`, `hb`],
    CM: [`H`, `h`, `hB`],
    CN: [`H`, `hB`, `hb`, `h`],
    CO: [`h`, `H`, `hB`, `hb`],
    CP: [`H`],
    CR: [`h`, `H`, `hB`, `hb`],
    CU: [`h`, `H`, `hB`, `hb`],
    CV: [`H`, `hB`],
    CW: [`H`, `hB`],
    CX: [`H`, `h`, `hb`, `hB`],
    CY: [`h`, `H`, `hb`, `hB`],
    CZ: [`H`],
    DE: [`H`, `hB`],
    DG: [`H`, `h`, `hb`, `hB`],
    DJ: [`h`, `H`],
    DK: [`H`],
    DM: [`h`, `hb`, `H`, `hB`],
    DO: [`h`, `H`, `hB`, `hb`],
    DZ: [`h`, `hB`, `hb`, `H`],
    EA: [`H`, `h`, `hB`, `hb`],
    EC: [`h`, `H`, `hB`, `hb`],
    EE: [`H`, `hB`],
    EG: [`h`, `hB`, `hb`, `H`],
    EH: [`h`, `hB`, `hb`, `H`],
    ER: [`h`, `H`],
    ES: [`H`, `hB`, `h`, `hb`],
    ET: [`hB`, `hb`, `h`, `H`],
    FI: [`H`],
    FJ: [`h`, `hb`, `H`, `hB`],
    FK: [`H`, `h`, `hb`, `hB`],
    FM: [`h`, `hb`, `H`, `hB`],
    FO: [`H`, `h`],
    FR: [`H`, `hB`],
    GA: [`H`, `hB`],
    GB: [`H`, `h`, `hb`, `hB`],
    GD: [`h`, `hb`, `H`, `hB`],
    GE: [`H`, `hB`, `h`],
    GF: [`H`, `hB`],
    GG: [`H`, `h`, `hb`, `hB`],
    GH: [`h`, `H`],
    GI: [`H`, `h`, `hb`, `hB`],
    GL: [`H`, `h`],
    GM: [`h`, `hb`, `H`, `hB`],
    GN: [`H`, `hB`],
    GP: [`H`, `hB`],
    GQ: [`H`, `hB`, `h`, `hb`],
    GR: [`h`, `H`, `hb`, `hB`],
    GS: [`H`, `h`, `hb`, `hB`],
    GT: [`h`, `H`, `hB`, `hb`],
    GU: [`h`, `hb`, `H`, `hB`],
    GW: [`H`, `hB`],
    GY: [`h`, `hb`, `H`, `hB`],
    HK: [`h`, `hB`, `hb`, `H`],
    HN: [`h`, `H`, `hB`, `hb`],
    HR: [`H`, `hB`],
    HU: [`H`, `h`],
    IC: [`H`, `h`, `hB`, `hb`],
    ID: [`H`],
    IE: [`H`, `h`, `hb`, `hB`],
    IL: [`H`, `hB`],
    IM: [`H`, `h`, `hb`, `hB`],
    IN: [`h`, `H`],
    IO: [`H`, `h`, `hb`, `hB`],
    IQ: [`h`, `hB`, `hb`, `H`],
    IR: [`hB`, `H`],
    IS: [`H`],
    IT: [`H`, `hB`],
    JE: [`H`, `h`, `hb`, `hB`],
    JM: [`h`, `hb`, `H`, `hB`],
    JO: [`h`, `hB`, `hb`, `H`],
    JP: [`H`, `K`, `h`],
    KE: [`hB`, `hb`, `H`, `h`],
    KG: [`H`, `h`, `hB`, `hb`],
    KH: [`hB`, `h`, `H`, `hb`],
    KI: [`h`, `hb`, `H`, `hB`],
    KM: [`H`, `h`, `hB`, `hb`],
    KN: [`h`, `hb`, `H`, `hB`],
    KP: [`h`, `H`, `hB`, `hb`],
    KR: [`h`, `H`, `hB`, `hb`],
    KW: [`h`, `hB`, `hb`, `H`],
    KY: [`h`, `hb`, `H`, `hB`],
    KZ: [`H`, `hB`],
    LA: [`H`, `hb`, `hB`, `h`],
    LB: [`h`, `hB`, `hb`, `H`],
    LC: [`h`, `hb`, `H`, `hB`],
    LI: [`H`, `hB`, `h`],
    LK: [`H`, `h`, `hB`, `hb`],
    LR: [`h`, `hb`, `H`, `hB`],
    LS: [`h`, `H`],
    LT: [`H`, `h`, `hb`, `hB`],
    LU: [`H`, `h`, `hB`],
    LV: [`H`, `hB`, `hb`, `h`],
    LY: [`h`, `hB`, `hb`, `H`],
    MA: [`H`, `h`, `hB`, `hb`],
    MC: [`H`, `hB`],
    MD: [`H`, `hB`],
    ME: [`H`, `hB`, `h`],
    MF: [`H`, `hB`],
    MG: [`H`, `h`],
    MH: [`h`, `hb`, `H`, `hB`],
    MK: [`H`, `h`, `hb`, `hB`],
    ML: [`H`],
    MM: [`hB`, `hb`, `H`, `h`],
    MN: [`H`, `h`, `hb`, `hB`],
    MO: [`h`, `hB`, `hb`, `H`],
    MP: [`h`, `hb`, `H`, `hB`],
    MQ: [`H`, `hB`],
    MR: [`h`, `hB`, `hb`, `H`],
    MS: [`H`, `h`, `hb`, `hB`],
    MT: [`H`, `h`],
    MU: [`H`, `h`],
    MV: [`H`, `h`],
    MW: [`h`, `hb`, `H`, `hB`],
    MX: [`h`, `H`, `hB`, `hb`],
    MY: [`hb`, `hB`, `h`, `H`],
    MZ: [`H`, `hB`],
    NA: [`h`, `H`, `hB`, `hb`],
    NC: [`H`, `hB`],
    NE: [`H`],
    NF: [`H`, `h`, `hb`, `hB`],
    NG: [`H`, `h`, `hb`, `hB`],
    NI: [`h`, `H`, `hB`, `hb`],
    NL: [`H`, `hB`],
    NO: [`H`, `h`],
    NP: [`H`, `h`, `hB`],
    NR: [`H`, `h`, `hb`, `hB`],
    NU: [`H`, `h`, `hb`, `hB`],
    NZ: [`h`, `hb`, `H`, `hB`],
    OM: [`h`, `hB`, `hb`, `H`],
    PA: [`h`, `H`, `hB`, `hb`],
    PE: [`h`, `H`, `hB`, `hb`],
    PF: [`H`, `h`, `hB`],
    PG: [`h`, `H`],
    PH: [`h`, `hB`, `hb`, `H`],
    PK: [`h`, `hB`, `H`],
    PL: [`H`, `h`],
    PM: [`H`, `hB`],
    PN: [`H`, `h`, `hb`, `hB`],
    PR: [`h`, `H`, `hB`, `hb`],
    PS: [`h`, `hB`, `hb`, `H`],
    PT: [`H`, `hB`],
    PW: [`h`, `H`],
    PY: [`h`, `H`, `hB`, `hb`],
    QA: [`h`, `hB`, `hb`, `H`],
    RE: [`H`, `hB`],
    RO: [`H`, `hB`],
    RS: [`H`, `hB`, `h`],
    RU: [`H`],
    RW: [`H`, `h`],
    SA: [`h`, `hB`, `hb`, `H`],
    SB: [`h`, `hb`, `H`, `hB`],
    SC: [`H`, `h`, `hB`],
    SD: [`h`, `hB`, `hb`, `H`],
    SE: [`H`],
    SG: [`h`, `hb`, `H`, `hB`],
    SH: [`H`, `h`, `hb`, `hB`],
    SI: [`H`, `hB`],
    SJ: [`H`],
    SK: [`H`],
    SL: [`h`, `hb`, `H`, `hB`],
    SM: [`H`, `h`, `hB`],
    SN: [`H`, `h`, `hB`],
    SO: [`h`, `H`],
    SR: [`H`, `hB`],
    SS: [`h`, `hb`, `H`, `hB`],
    ST: [`H`, `hB`],
    SV: [`h`, `H`, `hB`, `hb`],
    SX: [`H`, `h`, `hb`, `hB`],
    SY: [`h`, `hB`, `hb`, `H`],
    SZ: [`h`, `hb`, `H`, `hB`],
    TA: [`H`, `h`, `hb`, `hB`],
    TC: [`h`, `hb`, `H`, `hB`],
    TD: [`h`, `H`, `hB`],
    TF: [`H`, `h`, `hB`],
    TG: [`H`, `hB`],
    TH: [`H`, `h`],
    TJ: [`H`, `h`],
    TL: [`H`, `hB`, `hb`, `h`],
    TM: [`H`, `h`],
    TN: [`h`, `hB`, `hb`, `H`],
    TO: [`h`, `H`],
    TR: [`H`, `hB`],
    TT: [`h`, `hb`, `H`, `hB`],
    TW: [`hB`, `hb`, `h`, `H`],
    TZ: [`hB`, `hb`, `H`, `h`],
    UA: [`H`, `hB`, `h`],
    UG: [`hB`, `hb`, `H`, `h`],
    UM: [`h`, `hb`, `H`, `hB`],
    US: [`h`, `hb`, `H`, `hB`],
    UY: [`h`, `H`, `hB`, `hb`],
    UZ: [`H`, `hB`, `h`],
    VA: [`H`, `h`, `hB`],
    VC: [`h`, `hb`, `H`, `hB`],
    VE: [`h`, `H`, `hB`, `hb`],
    VG: [`h`, `hb`, `H`, `hB`],
    VI: [`h`, `hb`, `H`, `hB`],
    VN: [`H`, `h`],
    VU: [`h`, `H`],
    WF: [`H`, `hB`],
    WS: [`h`, `H`],
    XK: [`H`, `hB`, `h`],
    YE: [`h`, `hB`, `hb`, `H`],
    YT: [`H`, `hB`],
    ZA: [`H`, `h`, `hb`, `hB`],
    ZM: [`h`, `hb`, `H`, `hB`],
    ZW: [`H`, `h`],
    "af-ZA": [`H`, `h`, `hB`, `hb`],
    "ar-001": [`h`, `hB`, `hb`, `H`],
    "ca-ES": [`H`, `h`, `hB`],
    "en-001": [`h`, `hb`, `H`, `hB`],
    "en-HK": [`h`, `hb`, `H`, `hB`],
    "en-IL": [`H`, `h`, `hb`, `hB`],
    "en-MY": [`h`, `hb`, `H`, `hB`],
    "es-BR": [`H`, `h`, `hB`, `hb`],
    "es-ES": [`H`, `h`, `hB`, `hb`],
    "es-GQ": [`H`, `h`, `hB`, `hb`],
    "fr-CA": [`H`, `h`, `hB`],
    "gl-ES": [`H`, `h`, `hB`],
    "gu-IN": [`hB`, `hb`, `h`, `H`],
    "hi-IN": [`hB`, `h`, `H`],
    "it-CH": [`H`, `h`, `hB`],
    "it-IT": [`H`, `h`, `hB`],
    "kn-IN": [`hB`, `h`, `H`],
    "ku-SY": [`H`, `hB`],
    "ml-IN": [`hB`, `h`, `H`],
    "mr-IN": [`hB`, `hb`, `h`, `H`],
    "pa-IN": [`hB`, `hb`, `h`, `H`],
    "ta-IN": [`hB`, `h`, `hb`, `H`],
    "te-IN": [`hB`, `h`, `H`],
    "zu-ZA": [`H`, `hB`, `hb`, `h`],
  };
function qe(e, t) {
  let n = ``;
  for (let r = 0; r < e.length; r++) {
    let i = e.charAt(r);
    if (i === `j`) {
      let a = 0;
      for (; r + 1 < e.length && e.charAt(r + 1) === i;) (a++, r++);
      let o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = Je(t);
      for ((c == `H` || c == `k`) && (s = 0); s-- > 0;) n += `a`;
      for (; o-- > 0;) n = c + n;
    } else i === `J` ? (n += `H`) : (n += i);
  }
  return n;
}
function Je(e) {
  let t = e.hourCycle;
  if (
    (t === void 0 &&
      e.hourCycles &&
      e.hourCycles.length &&
      (t = e.hourCycles[0]),
    t)
  )
    switch (t) {
      case `h24`:
        return `k`;
      case `h23`:
        return `H`;
      case `h12`:
        return `h`;
      case `h11`:
        return `K`;
      default:
        throw Error(`Invalid hourCycle`);
    }
  let n = e.language,
    r;
  return (
    n !== `root` && (r = e.maximize().region),
    (Ke[r || ``] || Ke[n || ``] || Ke[`${n}-001`] || Ke[`001`])[0]
  );
}
var Ye = RegExp(`^${Ge.source}*`),
  Xe = RegExp(`${Ge.source}*$`);
function X(e, t) {
  return { start: e, end: t };
}
var Ze = !!Object.fromEntries,
  Qe = !!String.prototype.trimStart,
  $e = !!String.prototype.trimEnd,
  et = Ze
    ? Object.fromEntries
    : function (e) {
        let t = {};
        for (let [n, r] of e) t[n] = r;
        return t;
      },
  tt = Qe
    ? function (e) {
        return e.trimStart();
      }
    : function (e) {
        return e.replace(Ye, ``);
      },
  nt = $e
    ? function (e) {
        return e.trimEnd();
      }
    : function (e) {
        return e.replace(Xe, ``);
      },
  rt = RegExp(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`);
function it(e, t) {
  return ((rt.lastIndex = t), rt.exec(e)[1] ?? ``);
}
var at = class {
  message;
  position;
  locale;
  ignoreTag;
  requiresOtherClause;
  shouldParseSkeletons;
  constructor(e, t = {}) {
    ((this.message = e),
      (this.position = { offset: 0, line: 1, column: 1 }),
      (this.ignoreTag = !!t.ignoreTag),
      (this.locale = t.locale),
      (this.requiresOtherClause = !!t.requiresOtherClause),
      (this.shouldParseSkeletons = !!t.shouldParseSkeletons));
  }
  parse() {
    if (this.offset() !== 0) throw Error(`parser can only be used once`);
    return this.parseMessage(0, ``, !1);
  }
  parseMessage(e, t, n) {
    let r = [];
    for (; !this.isEOF();) {
      let i = this.char();
      if (i === 123) {
        let t = this.parseArgument(e, n);
        if (t.err) return t;
        r.push(t.val);
      } else if (i === 125 && e > 0) break;
      else if (i === 35 && (t === `plural` || t === `selectordinal`)) {
        let e = this.clonePosition();
        (this.bump(),
          r.push({ type: J.pound, location: X(e, this.clonePosition()) }));
      } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
        if (n) break;
        return this.error(
          Y.UNMATCHED_CLOSING_TAG,
          X(this.clonePosition(), this.clonePosition()),
        );
      } else if (i === 60 && !this.ignoreTag && ot(this.peek() || 0)) {
        let n = this.parseTag(e, t);
        if (n.err) return n;
        r.push(n.val);
      } else {
        let n = this.parseLiteral(e, t);
        if (n.err) return n;
        r.push(n.val);
      }
    }
    return { val: r, err: null };
  }
  parseTag(e, t) {
    let n = this.clonePosition();
    this.bump();
    let r = this.parseTagName();
    if ((this.bumpSpace(), this.bumpIf(`/>`)))
      return {
        val: {
          type: J.literal,
          value: `<${r}/>`,
          location: X(n, this.clonePosition()),
        },
        err: null,
      };
    if (this.bumpIf(`>`)) {
      let i = this.parseMessage(e + 1, t, !0);
      if (i.err) return i;
      let a = i.val,
        o = this.clonePosition();
      if (this.bumpIf(`</`)) {
        if (this.isEOF() || !ot(this.char()))
          return this.error(Y.INVALID_TAG, X(o, this.clonePosition()));
        let e = this.clonePosition();
        return r === this.parseTagName()
          ? (this.bumpSpace(),
            this.bumpIf(`>`)
              ? {
                  val: {
                    type: J.tag,
                    value: r,
                    children: a,
                    location: X(n, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(Y.INVALID_TAG, X(o, this.clonePosition())))
          : this.error(Y.UNMATCHED_CLOSING_TAG, X(e, this.clonePosition()));
      } else return this.error(Y.UNCLOSED_TAG, X(n, this.clonePosition()));
    } else return this.error(Y.INVALID_TAG, X(n, this.clonePosition()));
  }
  parseTagName() {
    let e = this.offset();
    for (this.bump(); !this.isEOF() && ct(this.char());) this.bump();
    return this.message.slice(e, this.offset());
  }
  parseLiteral(e, t) {
    let n = this.clonePosition(),
      r = ``;
    for (;;) {
      let n = this.tryParseQuote(t);
      if (n) {
        r += n;
        continue;
      }
      let i = this.tryParseUnquoted(e, t);
      if (i) {
        r += i;
        continue;
      }
      let a = this.tryParseLeftAngleBracket();
      if (a) {
        r += a;
        continue;
      }
      break;
    }
    let i = X(n, this.clonePosition());
    return { val: { type: J.literal, value: r, location: i }, err: null };
  }
  tryParseLeftAngleBracket() {
    return !this.isEOF() &&
      this.char() === 60 &&
      (this.ignoreTag || !st(this.peek() || 0))
      ? (this.bump(), `<`)
      : null;
  }
  tryParseQuote(e) {
    if (this.isEOF() || this.char() !== 39) return null;
    switch (this.peek()) {
      case 39:
        return (this.bump(), this.bump(), `'`);
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (e === `plural` || e === `selectordinal`) break;
        return null;
      default:
        return null;
    }
    this.bump();
    let t = [this.char()];
    for (this.bump(); !this.isEOF();) {
      let e = this.char();
      if (e === 39)
        if (this.peek() === 39) (t.push(39), this.bump());
        else {
          this.bump();
          break;
        }
      else t.push(e);
      this.bump();
    }
    return String.fromCodePoint(...t);
  }
  tryParseUnquoted(e, t) {
    if (this.isEOF()) return null;
    let n = this.char();
    return n === 60 ||
      n === 123 ||
      (n === 35 && (t === `plural` || t === `selectordinal`)) ||
      (n === 125 && e > 0)
      ? null
      : (this.bump(), String.fromCodePoint(n));
  }
  parseArgument(e, t) {
    let n = this.clonePosition();
    if ((this.bump(), this.bumpSpace(), this.isEOF()))
      return this.error(
        Y.EXPECT_ARGUMENT_CLOSING_BRACE,
        X(n, this.clonePosition()),
      );
    if (this.char() === 125)
      return (
        this.bump(),
        this.error(Y.EMPTY_ARGUMENT, X(n, this.clonePosition()))
      );
    let r = this.parseIdentifierIfPossible().value;
    if (!r) return this.error(Y.MALFORMED_ARGUMENT, X(n, this.clonePosition()));
    if ((this.bumpSpace(), this.isEOF()))
      return this.error(
        Y.EXPECT_ARGUMENT_CLOSING_BRACE,
        X(n, this.clonePosition()),
      );
    switch (this.char()) {
      case 125:
        return (
          this.bump(),
          {
            val: {
              type: J.argument,
              value: r,
              location: X(n, this.clonePosition()),
            },
            err: null,
          }
        );
      case 44:
        return (
          this.bump(),
          this.bumpSpace(),
          this.isEOF()
            ? this.error(
                Y.EXPECT_ARGUMENT_CLOSING_BRACE,
                X(n, this.clonePosition()),
              )
            : this.parseArgumentOptions(e, t, r, n)
        );
      default:
        return this.error(Y.MALFORMED_ARGUMENT, X(n, this.clonePosition()));
    }
  }
  parseIdentifierIfPossible() {
    let e = this.clonePosition(),
      t = this.offset(),
      n = it(this.message, t),
      r = t + n.length;
    return (this.bumpTo(r), { value: n, location: X(e, this.clonePosition()) });
  }
  parseArgumentOptions(e, t, n, r) {
    let i = this.clonePosition(),
      a = this.parseIdentifierIfPossible().value,
      o = this.clonePosition();
    switch (a) {
      case ``:
        return this.error(Y.EXPECT_ARGUMENT_TYPE, X(i, o));
      case `number`:
      case `date`:
      case `time`: {
        this.bumpSpace();
        let e = null;
        if (this.bumpIf(`,`)) {
          this.bumpSpace();
          let t = this.clonePosition(),
            n = this.parseSimpleArgStyleIfPossible();
          if (n.err) return n;
          let r = nt(n.val);
          if (r.length === 0)
            return this.error(
              Y.EXPECT_ARGUMENT_STYLE,
              X(this.clonePosition(), this.clonePosition()),
            );
          e = { style: r, styleLocation: X(t, this.clonePosition()) };
        }
        let t = this.tryParseArgumentClose(r);
        if (t.err) return t;
        let i = X(r, this.clonePosition());
        if (e && e.style.startsWith(`::`)) {
          let t = tt(e.style.slice(2));
          if (a === `number`) {
            let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
            return r.err
              ? r
              : {
                  val: { type: J.number, value: n, location: i, style: r.val },
                  err: null,
                };
          } else {
            if (t.length === 0)
              return this.error(Y.EXPECT_DATE_TIME_SKELETON, i);
            let r = t;
            this.locale && (r = qe(t, this.locale));
            let o = {
              type: Ne.dateTime,
              pattern: r,
              location: e.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? W(r) : {},
            };
            return {
              val: {
                type: a === `date` ? J.date : J.time,
                value: n,
                location: i,
                style: o,
              },
              err: null,
            };
          }
        }
        return {
          val: {
            type: a === `number` ? J.number : a === `date` ? J.date : J.time,
            value: n,
            location: i,
            style: e?.style ?? null,
          },
          err: null,
        };
      }
      case `plural`:
      case `selectordinal`:
      case `select`: {
        let i = this.clonePosition();
        if ((this.bumpSpace(), !this.bumpIf(`,`)))
          return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, X(i, { ...i }));
        this.bumpSpace();
        let o = this.parseIdentifierIfPossible(),
          s = 0;
        if (a !== `select` && o.value === `offset`) {
          if (!this.bumpIf(`:`))
            return this.error(
              Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              X(this.clonePosition(), this.clonePosition()),
            );
          this.bumpSpace();
          let e = this.tryParseDecimalInteger(
            Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
            Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
          );
          if (e.err) return e;
          (this.bumpSpace(),
            (o = this.parseIdentifierIfPossible()),
            (s = e.val));
        }
        let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
        if (c.err) return c;
        let l = this.tryParseArgumentClose(r);
        if (l.err) return l;
        let u = X(r, this.clonePosition());
        return a === `select`
          ? {
              val: {
                type: J.select,
                value: n,
                options: et(c.val),
                location: u,
              },
              err: null,
            }
          : {
              val: {
                type: J.plural,
                value: n,
                options: et(c.val),
                offset: s,
                pluralType: a === `plural` ? `cardinal` : `ordinal`,
                location: u,
              },
              err: null,
            };
      }
      default:
        return this.error(Y.INVALID_ARGUMENT_TYPE, X(i, o));
    }
  }
  tryParseArgumentClose(e) {
    return this.isEOF() || this.char() !== 125
      ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, X(e, this.clonePosition()))
      : (this.bump(), { val: !0, err: null });
  }
  parseSimpleArgStyleIfPossible() {
    let e = 0,
      t = this.clonePosition();
    for (; !this.isEOF();)
      switch (this.char()) {
        case 39: {
          this.bump();
          let e = this.clonePosition();
          if (!this.bumpUntil(`'`))
            return this.error(
              Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
              X(e, this.clonePosition()),
            );
          this.bump();
          break;
        }
        case 123:
          ((e += 1), this.bump());
          break;
        case 125:
          if (e > 0) --e;
          else
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          break;
        default:
          this.bump();
          break;
      }
    return { val: this.message.slice(t.offset, this.offset()), err: null };
  }
  parseNumberSkeletonFromString(e, t) {
    let n = [];
    try {
      n = G(e);
    } catch {
      return this.error(Y.INVALID_NUMBER_SKELETON, t);
    }
    return {
      val: {
        type: Ne.number,
        tokens: n,
        location: t,
        parsedOptions: this.shouldParseSkeletons ? Me(n) : {},
      },
      err: null,
    };
  }
  tryParsePluralOrSelectOptions(e, t, n, r) {
    let i = !1,
      a = [],
      o = new Set(),
      { value: s, location: c } = r;
    for (;;) {
      if (s.length === 0) {
        let e = this.clonePosition();
        if (t !== `select` && this.bumpIf(`=`)) {
          let t = this.tryParseDecimalInteger(
            Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            Y.INVALID_PLURAL_ARGUMENT_SELECTOR,
          );
          if (t.err) return t;
          ((c = X(e, this.clonePosition())),
            (s = this.message.slice(e.offset, this.offset())));
        } else break;
      }
      if (o.has(s))
        return this.error(
          t === `select`
            ? Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR
            : Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
          c,
        );
      (s === `other` && (i = !0), this.bumpSpace());
      let r = this.clonePosition();
      if (!this.bumpIf(`{`))
        return this.error(
          t === `select`
            ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
            : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
          X(this.clonePosition(), this.clonePosition()),
        );
      let l = this.parseMessage(e + 1, t, n);
      if (l.err) return l;
      let u = this.tryParseArgumentClose(r);
      if (u.err) return u;
      (a.push([s, { value: l.val, location: X(r, this.clonePosition()) }]),
        o.add(s),
        this.bumpSpace(),
        ({ value: s, location: c } = this.parseIdentifierIfPossible()));
    }
    return a.length === 0
      ? this.error(
          t === `select`
            ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR
            : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,
          X(this.clonePosition(), this.clonePosition()),
        )
      : this.requiresOtherClause && !i
        ? this.error(
            Y.MISSING_OTHER_CLAUSE,
            X(this.clonePosition(), this.clonePosition()),
          )
        : { val: a, err: null };
  }
  tryParseDecimalInteger(e, t) {
    let n = 1,
      r = this.clonePosition();
    this.bumpIf(`+`) || (this.bumpIf(`-`) && (n = -1));
    let i = !1,
      a = 0;
    for (; !this.isEOF();) {
      let e = this.char();
      if (e >= 48 && e <= 57) ((i = !0), (a = a * 10 + (e - 48)), this.bump());
      else break;
    }
    let o = X(r, this.clonePosition());
    return i
      ? ((a *= n),
        Number.isSafeInteger(a) ? { val: a, err: null } : this.error(t, o))
      : this.error(e, o);
  }
  offset() {
    return this.position.offset;
  }
  isEOF() {
    return this.offset() === this.message.length;
  }
  clonePosition() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column,
    };
  }
  char() {
    let e = this.position.offset;
    if (e >= this.message.length) throw Error(`out of bound`);
    let t = this.message.codePointAt(e);
    if (t === void 0)
      throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
    return t;
  }
  error(e, t) {
    return { val: null, err: { kind: e, message: this.message, location: t } };
  }
  bump() {
    if (this.isEOF()) return;
    let e = this.char();
    e === 10
      ? ((this.position.line += 1),
        (this.position.column = 1),
        (this.position.offset += 1))
      : ((this.position.column += 1),
        (this.position.offset += e < 65536 ? 1 : 2));
  }
  bumpIf(e) {
    if (this.message.startsWith(e, this.offset())) {
      for (let t = 0; t < e.length; t++) this.bump();
      return !0;
    }
    return !1;
  }
  bumpUntil(e) {
    let t = this.offset(),
      n = this.message.indexOf(e, t);
    return n >= 0
      ? (this.bumpTo(n), !0)
      : (this.bumpTo(this.message.length), !1);
  }
  bumpTo(e) {
    if (this.offset() > e)
      throw Error(
        `targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`,
      );
    for (e = Math.min(e, this.message.length); ;) {
      let t = this.offset();
      if (t === e) break;
      if (t > e)
        throw Error(
          `targetOffset ${e} is at invalid UTF-16 code unit boundary`,
        );
      if ((this.bump(), this.isEOF())) break;
    }
  }
  bumpSpace() {
    for (; !this.isEOF() && lt(this.char());) this.bump();
  }
  peek() {
    if (this.isEOF()) return null;
    let e = this.char(),
      t = this.offset();
    return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
  }
};
function ot(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function st(e) {
  return ot(e) || e === 47;
}
function ct(e) {
  return (
    e === 45 ||
    e === 46 ||
    (e >= 48 && e <= 57) ||
    e === 95 ||
    (e >= 97 && e <= 122) ||
    (e >= 65 && e <= 90) ||
    e == 183 ||
    (e >= 192 && e <= 214) ||
    (e >= 216 && e <= 246) ||
    (e >= 248 && e <= 893) ||
    (e >= 895 && e <= 8191) ||
    (e >= 8204 && e <= 8205) ||
    (e >= 8255 && e <= 8256) ||
    (e >= 8304 && e <= 8591) ||
    (e >= 11264 && e <= 12271) ||
    (e >= 12289 && e <= 55295) ||
    (e >= 63744 && e <= 64975) ||
    (e >= 65008 && e <= 65533) ||
    (e >= 65536 && e <= 983039)
  );
}
function lt(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  );
}
function ut(e) {
  e.forEach((e) => {
    if ((delete e.location, ze(e) || Be(e)))
      for (let t in e.options)
        (delete e.options[t].location, ut(e.options[t].value));
    else
      (Ie(e) && Ue(e.style)) || ((Le(e) || Re(e)) && We(e.style))
        ? delete e.style.location
        : He(e) && ut(e.children);
  });
}
function dt(e, t = {}) {
  t = { shouldParseSkeletons: !0, requiresOtherClause: !0, ...t };
  let n = new at(e, t).parse();
  if (n.err) {
    let e = SyntaxError(Y[n.err.kind]);
    throw (
      (e.location = n.err.location),
      (e.originalMessage = n.err.message),
      e
    );
  }
  return (t?.captureLocation || ut(n.val), n.val);
}
var Z = (function (e) {
    return (
      (e.MISSING_VALUE = `MISSING_VALUE`),
      (e.INVALID_VALUE = `INVALID_VALUE`),
      (e.MISSING_INTL_API = `MISSING_INTL_API`),
      e
    );
  })({}),
  ft = class extends Error {
    code;
    originalMessage;
    constructor(e, t, n) {
      (super(e), (this.code = t), (this.originalMessage = n));
    }
    toString() {
      return `[formatjs Error: ${this.code}] ${this.message}`;
    }
  },
  pt = class extends ft {
    constructor(e, t, n, r) {
      super(
        `Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join(`", "`)}"`,
        Z.INVALID_VALUE,
        r,
      );
    }
  },
  mt = class extends ft {
    constructor(e, t, n) {
      super(`Value for "${e}" must be of type ${t}`, Z.INVALID_VALUE, n);
    }
  },
  ht = class extends ft {
    constructor(e, t) {
      super(
        `The intl string context variable "${e}" was not provided to the string "${t}"`,
        Z.MISSING_VALUE,
        t,
      );
    }
  },
  Q = (function (e) {
    return (
      (e[(e.literal = 0)] = `literal`),
      (e[(e.object = 1)] = `object`),
      e
    );
  })({});
function gt(e) {
  return e.length < 2
    ? e
    : e.reduce((e, t) => {
        let n = e[e.length - 1];
        return (
          !n || n.type !== Q.literal || t.type !== Q.literal
            ? e.push(t)
            : (n.value += t.value),
          e
        );
      }, []);
}
function _t(e) {
  return typeof e == `function`;
}
function vt(e, t, n, r, i, a, o) {
  if (e.length === 1 && Pe(e[0]))
    return [{ type: Q.literal, value: e[0].value }];
  let s = [];
  for (let c of e) {
    if (Pe(c)) {
      s.push({ type: Q.literal, value: c.value });
      continue;
    }
    if (Ve(c)) {
      typeof a == `number` &&
        s.push({ type: Q.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    let { value: e } = c;
    if (!(i && e in i)) throw new ht(e, o);
    let l = i[e];
    if (Fe(c)) {
      ((!l ||
        typeof l == `string` ||
        typeof l == `number` ||
        typeof l == `bigint`) &&
        (l =
          typeof l == `string` || typeof l == `number` || typeof l == `bigint`
            ? String(l)
            : ``),
        s.push({
          type: typeof l == `string` ? Q.literal : Q.object,
          value: l,
        }));
      continue;
    }
    if (Le(c)) {
      let e =
        typeof c.style == `string`
          ? r.date[c.style]
          : We(c.style)
            ? c.style.parsedOptions
            : void 0;
      s.push({ type: Q.literal, value: n.getDateTimeFormat(t, e).format(l) });
      continue;
    }
    if (Re(c)) {
      let e =
        typeof c.style == `string`
          ? r.time[c.style]
          : We(c.style)
            ? c.style.parsedOptions
            : r.time.medium;
      s.push({ type: Q.literal, value: n.getDateTimeFormat(t, e).format(l) });
      continue;
    }
    if (Ie(c)) {
      let e =
        typeof c.style == `string`
          ? r.number[c.style]
          : Ue(c.style)
            ? c.style.parsedOptions
            : void 0;
      if (e && e.scale) {
        let t = e.scale || 1;
        if (typeof l == `bigint`) {
          if (!Number.isInteger(t))
            throw TypeError(
              `Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`,
            );
          l *= BigInt(t);
        } else l *= t;
      }
      s.push({ type: Q.literal, value: n.getNumberFormat(t, e).format(l) });
      continue;
    }
    if (He(c)) {
      let { children: e, value: l } = c,
        u = i[l];
      if (!_t(u)) throw new mt(l, `function`, o);
      let d = u(vt(e, t, n, r, i, a).map((e) => e.value));
      (Array.isArray(d) || (d = [d]),
        s.push(
          ...d.map((e) => ({
            type: typeof e == `string` ? Q.literal : Q.object,
            value: e,
          })),
        ));
    }
    if (ze(c)) {
      let e = l,
        a =
          (Object.prototype.hasOwnProperty.call(c.options, e)
            ? c.options[e]
            : void 0) || c.options.other;
      if (!a) throw new pt(c.value, l, Object.keys(c.options), o);
      s.push(...vt(a.value, t, n, r, i));
      continue;
    }
    if (Be(c)) {
      let e = `=${l}`,
        a = Object.prototype.hasOwnProperty.call(c.options, e)
          ? c.options[e]
          : void 0;
      if (!a) {
        if (!Intl.PluralRules)
          throw new ft(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            Z.MISSING_INTL_API,
            o,
          );
        let e = typeof l == `bigint` ? Number(l) : l,
          r = n
            .getPluralRules(t, { type: c.pluralType })
            .select(e - (c.offset || 0));
        a =
          (Object.prototype.hasOwnProperty.call(c.options, r)
            ? c.options[r]
            : void 0) || c.options.other;
      }
      if (!a) throw new pt(c.value, l, Object.keys(c.options), o);
      let u = typeof l == `bigint` ? Number(l) : l;
      s.push(...vt(a.value, t, n, r, i, u - (c.offset || 0)));
      continue;
    }
  }
  return gt(s);
}
function yt(e, t) {
  return t
    ? {
        ...e,
        ...t,
        ...Object.keys(e).reduce(
          (n, r) => ((n[r] = { ...e[r], ...t[r] }), n),
          {},
        ),
      }
    : e;
}
function bt(e, t) {
  return t
    ? Object.keys(e).reduce((n, r) => ((n[r] = yt(e[r], t[r])), n), { ...e })
    : e;
}
function xt(e) {
  return {
    create() {
      return {
        get(t) {
          return e[t];
        },
        set(t, n) {
          e[t] = n;
        },
      };
    },
  };
}
function St(e = { number: {}, dateTime: {}, pluralRules: {} }) {
  return {
    getNumberFormat: F((...e) => new Intl.NumberFormat(...e), {
      cache: xt(e.number),
      strategy: z.variadic,
    }),
    getDateTimeFormat: F((...e) => new Intl.DateTimeFormat(...e), {
      cache: xt(e.dateTime),
      strategy: z.variadic,
    }),
    getPluralRules: F((...e) => new Intl.PluralRules(...e), {
      cache: xt(e.pluralRules),
      strategy: z.variadic,
    }),
  };
}
var Ct = class e {
  ast;
  locales;
  resolvedLocale;
  formatters;
  formats;
  message;
  formatterCache = { number: {}, dateTime: {}, pluralRules: {} };
  constructor(t, n = e.defaultLocale, r, i) {
    if (
      ((this.locales = n),
      (this.resolvedLocale = e.resolveLocale(n)),
      typeof t == `string`)
    ) {
      if (((this.message = t), !e.__parse))
        throw TypeError(
          "IntlMessageFormat.__parse must be set to process `message` of type `string`",
        );
      let { ...n } = i || {};
      this.ast = e.__parse(t, { ...n, locale: this.resolvedLocale });
    } else this.ast = t;
    if (!Array.isArray(this.ast))
      throw TypeError(`A message must be provided as a String or AST.`);
    ((this.formats = bt(e.formats, r)),
      (this.formatters = (i && i.formatters) || St(this.formatterCache)));
  }
  format = (e) => {
    let t = this.formatToParts(e);
    if (t.length === 1) return t[0].value;
    let n = t.reduce(
      (e, t) => (
        !e.length || t.type !== Q.literal || typeof e[e.length - 1] != `string`
          ? e.push(t.value)
          : (e[e.length - 1] += t.value),
        e
      ),
      [],
    );
    return n.length <= 1 ? n[0] || `` : n;
  };
  formatToParts = (e) =>
    vt(
      this.ast,
      this.locales,
      this.formatters,
      this.formats,
      e,
      void 0,
      this.message,
    );
  resolvedOptions = () => ({
    locale:
      this.resolvedLocale?.toString() ||
      Intl.NumberFormat.supportedLocalesOf(this.locales)[0],
  });
  getAst = () => this.ast;
  static memoizedDefaultLocale = null;
  static get defaultLocale() {
    return (
      (e.memoizedDefaultLocale ||=
        new Intl.NumberFormat().resolvedOptions().locale),
      e.memoizedDefaultLocale
    );
  }
  static resolveLocale = (e) => {
    if (Intl.Locale === void 0) return;
    let t = Intl.NumberFormat.supportedLocalesOf(e);
    return t.length > 0
      ? new Intl.Locale(t[0])
      : new Intl.Locale(typeof e == `string` ? e : e[0]);
  };
  static __parse = dt;
  static formats = {
    number: {
      integer: { maximumFractionDigits: 0 },
      currency: { style: `currency` },
      percent: { style: `percent` },
    },
    date: {
      short: { month: `numeric`, day: `numeric`, year: `2-digit` },
      medium: { month: `short`, day: `numeric`, year: `numeric` },
      long: { month: `long`, day: `numeric`, year: `numeric` },
      full: { weekday: `long`, month: `long`, day: `numeric`, year: `numeric` },
    },
    time: {
      short: { hour: `numeric`, minute: `numeric` },
      medium: { hour: `numeric`, minute: `numeric`, second: `numeric` },
      long: {
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        timeZoneName: `short`,
      },
      full: {
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        timeZoneName: `short`,
      },
    },
  };
};
function wt(...[e, t, n, r]) {
  if (Array.isArray(t)) throw new B(V.INVALID_MESSAGE, void 0);
  if (typeof t == `object`) throw new B(V.INSUFFICIENT_PATH, void 0);
  if (typeof t == `string`) {
    let e = (function (e, t) {
      return t || /'[{}]/.test(e) ? void 0 : e;
    })(t, n);
    if (e) return e;
  }
  let {
      cache: i,
      formats: a,
      formatters: o,
      globalFormats: s,
      locale: c,
      timeZone: l,
    } = r,
    u;
  o.getMessageFormat ||= (function (e, t) {
    return H(
      (...e) => new Ct(e[0], e[1], e[2], { formatters: t, ...e[3] }),
      e.message,
    );
  })(i, o);
  try {
    u = o.getMessageFormat(
      t,
      c,
      (function (e, t, n) {
        let r = Ct.formats.date,
          i = Ct.formats.time,
          a = { ...e?.dateTime, ...t?.dateTime },
          o = {
            date: { ...r, ...a },
            time: { ...i, ...a },
            number: { ...e?.number, ...t?.number },
          };
        return (
          n &&
            [`date`, `time`].forEach((e) => {
              let t = o[e];
              for (let [e, r] of Object.entries(t))
                t[e] = { timeZone: n, ...r };
            }),
          o
        );
      })(s, a, l),
      {
        formatters: {
          ...o,
          getDateTimeFormat: (e, t) =>
            o.getDateTimeFormat(e, { ...t, timeZone: t?.timeZone ?? l }),
        },
      },
    );
  } catch {
    throw new B(V.INVALID_MESSAGE, void 0);
  }
  let d = u.format(n);
  return (0, m.isValidElement)(d) || Array.isArray(d) || typeof d == `string`
    ? d
    : String(d);
}
wt.raw = !0;
function Tt(...e) {
  return e.filter(Boolean).join(`.`);
}
function Et(e) {
  return Tt(e.namespace, e.key);
}
function Dt(e) {
  console.error(e);
}
function Ot(e, t, n, r) {
  let i = Tt(r, n);
  if (!t) throw Error(i);
  let a = t;
  return (
    n.split(`.`).forEach((t) => {
      let n = a[t];
      if (t == null || n == null) throw Error(i + ` (${e})`);
      a = n;
    }),
    a
  );
}
function kt(e) {
  let t = (function (e, t, n) {
    try {
      if (!t) throw Error(void 0);
      let r = n ? Ot(e, t, n) : t;
      if (!r) throw Error(n);
      return r;
    } catch (e) {
      return new B(V.MISSING_MESSAGE, e.message);
    }
  })(e.locale, e.messages, e.namespace);
  return (function ({
    cache: e,
    formats: t,
    formatters: n,
    getMessageFallback: r = Et,
    locale: i,
    messagesOrError: a,
    namespace: o,
    onError: s,
    timeZone: c,
  }) {
    let l = a instanceof B;
    function u(e, t, n, i) {
      let a = new B(t, n);
      return (s(a), i ?? r({ error: a, key: e, namespace: o }));
    }
    function d(d, f, p, h) {
      let g = h,
        _;
      if (l) {
        if (!g) return (s(a), r({ error: a, key: d, namespace: o }));
        _ = g;
      } else {
        let e = a;
        try {
          _ = Ot(i, e, d, o);
        } catch (e) {
          if (!g) return u(d, V.MISSING_MESSAGE, e.message, g);
          _ = g;
        }
      }
      try {
        return wt(
          Tt(o, d),
          _,
          f &&
            (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((n) => {
                  let r = 0,
                    i = e[n],
                    a;
                  ((a =
                    typeof i == `function`
                      ? (e) => {
                          let t = i(e);
                          return (0, m.isValidElement)(t)
                            ? (0, m.cloneElement)(t, { key: n + r++ })
                            : t;
                        }
                      : i),
                    (t[n] = a));
                }),
                t
              );
            })(f),
          {
            cache: e,
            formatters: n,
            globalFormats: t,
            formats: p,
            locale: i,
            timeZone: c,
          },
        );
      } catch (e) {
        let t, n;
        return (
          e instanceof B
            ? ((t = e.code), (n = e.originalMessage))
            : ((t = V.FORMATTING_ERROR), (n = e.message)),
          u(d, t, n, g)
        );
      }
    }
    function f(e, t, n, r) {
      let i = d(e, t, n, r);
      return typeof i == `string` ? i : u(e, V.INVALID_MESSAGE, void 0);
    }
    return (
      (f.rich = d),
      (f.markup = (e, t, n, r) => d(e, t, n, r)),
      (f.raw = (e) => {
        if (l) return (s(a), r({ error: a, key: e, namespace: o }));
        let t = a;
        try {
          return Ot(i, t, e, o);
        } catch (t) {
          return u(e, V.MISSING_MESSAGE, t.message);
        }
      }),
      (f.has = (e) => {
        if (l) return !1;
        try {
          return (Ot(i, a, e, o), !0);
        } catch {
          return !1;
        }
      }),
      f
    );
  })({ ...e, messagesOrError: t });
}
function At(e, t) {
  return e === t ? void 0 : e.slice((t + `.`).length);
}
var jt = 86400;
(7 * jt, 365 * jt);
function Mt({
  formats: e,
  getMessageFallback: t,
  messages: n,
  onError: r,
  ...i
}) {
  return {
    ...i,
    formats: e || void 0,
    messages: n || void 0,
    onError: r || Dt,
    getMessageFallback: t || Et,
  };
}
var Nt = (0, m.createContext)(void 0);
function Pt({
  children: e,
  formats: t,
  getMessageFallback: n,
  locale: r,
  messages: i,
  now: a,
  onError: o,
  timeZone: s,
}) {
  let c = (0, m.useContext)(Nt),
    l = (0, m.useMemo)(() => c?.cache || xe(), [r, c?.cache]),
    u = (0, m.useMemo)(() => c?.formatters || Se(l), [l, c?.formatters]),
    d = (0, m.useMemo)(
      () => ({
        ...Mt({
          locale: r,
          formats: t === void 0 ? c?.formats : t,
          getMessageFallback: n || c?.getMessageFallback,
          messages: i === void 0 ? c?.messages : i,
          now: a || c?.now,
          onError: o || c?.onError,
          timeZone: s || c?.timeZone,
        }),
        formatters: u,
        cache: l,
      }),
      [l, t, u, n, r, i, a, o, c, s],
    );
  return (0, P.jsx)(Nt.Provider, { value: d, children: e });
}
function Ft() {
  let e = (0, m.useContext)(Nt);
  if (!e) throw Error(void 0);
  return e;
}
var It = !1,
  Lt = typeof window > `u`;
function Rt(e) {
  return (function (e, t, n) {
    let {
        cache: r,
        formats: i,
        formatters: a,
        getMessageFallback: o,
        locale: s,
        onError: c,
        timeZone: l,
      } = Ft(),
      u = e[n],
      d = At(t, n);
    return (
      l || It || !Lt || ((It = !0), c(new B(V.ENVIRONMENT_FALLBACK, void 0))),
      (0, m.useMemo)(
        () =>
          kt({
            cache: r,
            formatters: a,
            getMessageFallback: o,
            messages: u,
            namespace: d,
            onError: c,
            formats: i,
            locale: s,
            timeZone: l,
          }),
        [r, a, o, u, d, c, i, s, l],
      )
    );
  })({ "!": Ft().messages }, e ? `!.${e}` : `!`, `!`);
}
function zt(e) {
  let t = (0, p.c)(4),
    { locale: n, messages: r, children: i } = e,
    a;
  return (
    t[0] !== i || t[1] !== n || t[2] !== r
      ? ((a = (0, P.jsx)(Pt, {
          locale: n,
          messages: r,
          timeZone: `UTC`,
          children: i,
        })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Bt() {
  return (
    window.matchMedia(`(display-mode: standalone)`).matches ||
    navigator.standalone === !0
  );
}
function Vt() {
  return (
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === `MacIntel` && navigator.maxTouchPoints > 1)) &&
    /Safari/.test(navigator.userAgent) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS/.test(navigator.userAgent)
  );
}
function Ht() {
  return `onbeforeinstallprompt` in window;
}
function Ut() {
  return /Android/.test(navigator.userAgent);
}
function Wt() {
  return (
    Ut() &&
    /Chrome/.test(navigator.userAgent) &&
    !/\bwv\b|Version\/4\.0|EdgA|OPR|SamsungBrowser/.test(navigator.userAgent)
  );
}
function Gt() {
  return (
    /Chrome/.test(navigator.userAgent) &&
    !/Android|iPad|iPhone|iPod|Edg|OPR|SamsungBrowser/.test(navigator.userAgent)
  );
}
var $ = `pwa-install`,
  Kt = `pwa-install-prompt-dismissed`,
  qt = 10080 * 60 * 1e3,
  Jt = 3e3;
function Yt() {
  let e = Number(window.localStorage.getItem(Kt));
  return Date.now() - e < qt;
}
function Xt() {
  (window.localStorage.setItem(Kt, String(Date.now())), E.dismiss($));
}
function Zt() {
  let e = (0, p.c)(3),
    t = Rt(`pwa`),
    n = (0, m.useRef)(void 0),
    r = (0, m.useRef)(!1),
    i,
    o;
  return (
    e[0] === t
      ? ((i = e[1]), (o = e[2]))
      : ((i = () => {
          if (Bt()) return;
          let e = Yt(),
            i = Vt(),
            o = Ut(),
            s = Wt(),
            c = Gt(),
            l = (s || c) && Ht() && !e;
          r.current = e;
          let u = () => {
              ((r.current = !0), Xt());
            },
            d = () => {
              E.info(
                t(o ? `mobileInstallAvailable` : `installAvailable`, {
                  appName: a.AppName,
                }),
                {
                  id: $,
                  description: t(`installDescription`),
                  duration: 1 / 0,
                  action: {
                    label: t(`installAction`),
                    onClick: async () => {
                      let e = n.current;
                      if (!e) return;
                      n.current = void 0;
                      let t = await e.prompt();
                      (E.dismiss($), t.outcome === `dismissed` && u());
                    },
                  },
                  cancel: { label: t(`laterAction`), onClick: u },
                },
              );
            },
            f = () => {
              E.info(
                t(s ? `mobileInstallAvailable` : `installAvailable`, {
                  appName: a.AppName,
                }),
                {
                  id: $,
                  description: t(
                    s
                      ? `androidInstallDescription`
                      : `desktopInstallDescription`,
                  ),
                  duration: 1 / 0,
                  cancel: { label: t(`laterAction`), onClick: u },
                },
              );
            },
            p = (e) => {
              (e.preventDefault(), !r.current && ((n.current = e), d()));
            },
            m = () => {
              ((n.current = void 0),
                window.localStorage.removeItem(Kt),
                E.dismiss($));
            };
          (i &&
            !e &&
            E.info(t(`iosInstallAvailable`), {
              id: $,
              description: t(`iosInstallDescription`),
              duration: 1 / 0,
              cancel: { label: t(`gotItAction`), onClick: u },
            }),
            window.addEventListener(`beforeinstallprompt`, p),
            window.addEventListener(`appinstalled`, m));
          let h = l
            ? window.setTimeout(() => {
                !n.current && !r.current && f();
              }, Jt)
            : void 0;
          return () => {
            (E.dismiss($),
              window.removeEventListener(`beforeinstallprompt`, p),
              window.removeEventListener(`appinstalled`, m),
              h !== void 0 && window.clearTimeout(h));
          };
        }),
        (o = [t]),
        (e[0] = t),
        (e[1] = i),
        (e[2] = o)),
    (0, m.useEffect)(i, o),
    null
  );
}
var Qt = 3600 * 1e3,
  $t = `/api/pwa-version`;
async function en() {
  let e = await fetch($t, { cache: `no-store` });
  if (!e.ok) throw Error(`Unable to load the PWA build version: ${e.status}`);
  let { buildId: t } = await e.json(),
    n = `/service-worker.js?build=${encodeURIComponent(t)}`;
  return navigator.serviceWorker.register(n, { updateViaCache: `none` });
}
function tn(e) {
  let t = (0, p.c)(8),
    { enabled: n, shouldRegister: r, quiet: i } = e,
    a = i === void 0 ? !1 : i,
    o = Rt(`pwa`),
    s = (0, m.useRef)(a),
    c,
    l;
  (t[0] === a
    ? ((c = t[1]), (l = t[2]))
    : ((c = () => {
        s.current = a;
      }),
      (l = [a]),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l)),
    (0, m.useEffect)(c, l));
  let u, d;
  return (
    t[3] !== n || t[4] !== r || t[5] !== o
      ? ((u = () => {
          if (!(`serviceWorker` in navigator)) return;
          if (!n) {
            navigator.serviceWorker.getRegistration().then(rn);
            return;
          }
          if (!r) return;
          let e = !!navigator.serviceWorker.controller,
            t = !1,
            i,
            a,
            c,
            l = () => {
              !i?.waiting ||
                !navigator.serviceWorker.controller ||
                s.current ||
                E.info(o(`updateAvailable`), {
                  id: `pwa-update`,
                  duration: 1 / 0,
                  action: {
                    label: o(`updateAction`),
                    onClick: () => {
                      i?.waiting?.postMessage({ type: `SKIP_WAITING` });
                    },
                  },
                  cancel: { label: o(`laterAction`), onClick: nn },
                });
            },
            u = () => {
              if (e) {
                window.location.reload();
                return;
              }
              e = !0;
            },
            d = () => {
              a?.state === `installed` && l();
            },
            f = () => {
              let e = i?.installing;
              !e ||
                e === a ||
                (a?.removeEventListener(`statechange`, d),
                (a = e),
                e.addEventListener(`statechange`, d),
                d());
            },
            p = (e) => {
              (i !== e &&
                (i?.removeEventListener(`updatefound`, f),
                (i = e),
                i.addEventListener(`updatefound`, f)),
                f(),
                l());
            },
            m = () => {
              en()
                .then((e) => {
                  t || p(e);
                })
                .catch((e) => {
                  t ||
                    console.error(`Unable to register PWA service worker`, e);
                });
            };
          return (
            navigator.serviceWorker.addEventListener(`controllerchange`, u),
            m(),
            (c = setInterval(m, Qt)),
            () => {
              ((t = !0),
                navigator.serviceWorker.removeEventListener(
                  `controllerchange`,
                  u,
                ),
                i?.removeEventListener(`updatefound`, f),
                a?.removeEventListener(`statechange`, d),
                c && clearInterval(c));
            }
          );
        }),
        (d = [n, r, o]),
        (t[3] = n),
        (t[4] = r),
        (t[5] = o),
        (t[6] = u),
        (t[7] = d))
      : ((u = t[6]), (d = t[7])),
    (0, m.useEffect)(u, d),
    null
  );
}
function nn() {
  E.dismiss(`pwa-update`);
}
function rn(e) {
  return e?.unregister();
}
var an = () => o(() => import(`./messages-D5AK8TrV.js`), []);
function on(e) {
  let t = (0, p.c)(18),
    { locale: n, enabled: r, pwaEnabled: i, playing: a } = e,
    [o, s] = (0, m.useState)(void 0),
    c,
    l;
  (t[0] !== n || t[1] !== a
    ? ((c = () => {
        if (a) return;
        let e = !0;
        return (
          an()
            .then((t) => {
              let { getMessages: r } = t;
              e && s(r(n));
            })
            .catch(sn),
          () => {
            e = !1;
          }
        );
      }),
      (l = [a, n]),
      (t[0] = n),
      (t[1] = a),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3])),
    (0, m.useEffect)(c, l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, P.jsx)(pe, {
        richColors: !0,
        position: `top-right`,
        theme: `dark`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== o || t[6] !== a || t[7] !== i
    ? ((d = i && !a && o && (0, P.jsx)(Zt, {})),
      (t[5] = o),
      (t[6] = a),
      (t[7] = i),
      (t[8] = d))
    : (d = t[8]);
  let f = a || !o,
    h;
  t[9] !== r || t[10] !== i || t[11] !== f
    ? ((h = (0, P.jsx)(tn, { enabled: r, shouldRegister: i, quiet: f })),
      (t[9] = r),
      (t[10] = i),
      (t[11] = f),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== n || t[14] !== o || t[15] !== d || t[16] !== h
      ? ((g = (0, P.jsxs)(zt, { locale: n, messages: o, children: [u, d, h] })),
        (t[13] = n),
        (t[14] = o),
        (t[15] = d),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function sn() {}
export { on as default };
