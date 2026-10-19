import { i as e, n as t, t as n } from "./compiler-runtime-BybR60WX.js";
import "./react-dom-D0hKRYVm.js";
import "./useStore-CO7AIjx_.js";
import { t as r } from "./jsx-runtime-D_h4s5mO.js";
import "./home-faq-BKaFOKKy.js";
import "./src-eercGixD.js";
import "./seo-DEwHsI0l.js";
import "./seo-content-BRJA07rn.js";
import "./climb-head-B90-o7R9.js";
import { t as i } from "./daily-done-DgUyDuk2.js";
import "./rules-DxwvjuIt.js";
import "./storage-Cd9DMQud.js";
import "./stage-choice-DO9JGjKK.js";
import "./main-BXKF3zmu.js";
import "./icons-DDwzIPdf.js";
import "./game-ui-DEL71d58.js";
import { i as a } from "./stage-toggle-LI6FLr3n.js";
import { n as o, r as s, t as c } from "./home-sections-CGYgZ4JZ.js";
import { t as l } from "./intro-CCqPM7kD.js";
import { t as u } from "./use-daily-setup-ZCxngFu3.js";
var d = n(),
  f = e(t()),
  p = r();
function m() {
  let e = (0, d.c)(28),
    { setup: t, error: n, retry: r } = u(),
    [m, h] = (0, f.useState)(`intro`),
    g,
    _;
  (e[0] !== n || e[1] !== m || e[2] !== t
    ? ((g = () => {
        (n || (t && (m !== `intro` || !t.finished))) &&
          document.documentElement.removeAttribute(i);
      }),
      (_ = [n, t, m]),
      (e[0] = n),
      (e[1] = m),
      (e[2] = t),
      (e[3] = g),
      (e[4] = _))
    : ((g = e[3]), (_ = e[4])),
    (0, f.useEffect)(g, _));
  let v = m === `run`,
    y = t?.kind.kind === `daily` ? t.kind.number : null,
    b;
  e[5] !== y || e[6] !== t
    ? ((b = (e) => {
        let { start: n, waiting: r, setup: i } = e;
        return (0, p.jsx)(l, {
          number: y,
          resumeAt: i?.resume ? i.resume.index + 1 : null,
          ready: t !== null,
          waiting: r || t === null,
          header: (0, p.jsx)(o, { inStage: !0 }),
          onPlay: () => n(),
        });
      }),
      (e[5] = y),
      (e[6] = t),
      (e[7] = b))
    : (b = e[7]);
  let x;
  e[8] !== t || e[9] !== b
    ? ((x = (0, p.jsx)(a, {
        route: `daily`,
        setup: t,
        lockPage: !0,
        onScreen: h,
        intro: b,
      })),
      (e[8] = t),
      (e[9] = b),
      (e[10] = x))
    : (x = e[10]);
  let S;
  e[11] !== n || e[12] !== r
    ? ((S =
        n &&
        (0, p.jsxs)(`p`, {
          className: `rarely-error`,
          role: `alert`,
          children: [
            `Today's questions could not be loaded.`,
            ` `,
            (0, p.jsx)(`button`, {
              type: `button`,
              className: `og-link`,
              onClick: r,
              children: `Try again`,
            }),
          ],
        })),
      (e[11] = n),
      (e[12] = r),
      (e[13] = S))
    : (S = e[13]);
  let C;
  e[14] !== x || e[15] !== S
    ? ((C = (0, p.jsxs)(`div`, {
        id: `play`,
        className: `home-game`,
        children: [x, S],
      })),
      (e[14] = x),
      (e[15] = S),
      (e[16] = C))
    : (C = e[16]);
  let w;
  e[17] === v
    ? (w = e[18])
    : ((w = (0, p.jsx)(s, { focused: v })), (e[17] = v), (e[18] = w));
  let T;
  e[19] !== C || e[20] !== w
    ? ((T = (0, p.jsxs)(`main`, { children: [C, w] })),
      (e[19] = C),
      (e[20] = w),
      (e[21] = T))
    : (T = e[21]);
  let E;
  e[22] === v
    ? (E = e[23])
    : ((E = (0, p.jsx)(c, { focused: v })), (e[22] = v), (e[23] = E));
  let D;
  return (
    e[24] !== v || e[25] !== T || e[26] !== E
      ? ((D = (0, p.jsxs)(`div`, {
          className: `rarely-home`,
          "data-focused": v,
          children: [T, E],
        })),
        (e[24] = v),
        (e[25] = T),
        (e[26] = E),
        (e[27] = D))
      : (D = e[27]),
    D
  );
}
export { m as component };
