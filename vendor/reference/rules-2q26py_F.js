var e = [
    { id: `should-count`, label: `My answer should have counted` },
    { id: `unclear`, label: `Bad or unclear question` },
    { id: `board`, label: `The board feels wrong` },
    { id: `obscure`, label: `Too obscure` },
    { id: `other`, label: `Other` },
  ],
  t = [
    { id: `slow`, label: `Too slow` },
    { id: `hard-to-read`, label: `Hard to read` },
    { id: `other-stage`, label: `Prefer the other stage` },
    { id: `bugs`, label: `Bugs` },
    { id: `other`, label: `Other` },
  ];
function n(e) {
  let t = e.mode === `daily` ? `daily|${e.date}` : `unlimited|${e.seed}`;
  return e.kind === `prompt` ? `${t}|${e.slot}` : `${e.stage}|${t}`;
}
var r = {
  saved: null,
  open: !1,
  sending: null,
  failed: !1,
  reasons: [],
  note: ``,
};
function i(e, t, n) {
  let r = { ui: e, send: null };
  switch (t.type) {
    case `up`:
      return e.sending
        ? r
        : e.saved === `up`
          ? { ui: { ...e, open: !1, failed: !1 }, send: null }
          : { ui: { ...e, open: !1, sending: `up`, failed: !1 }, send: `up` };
    case `down`:
      return e.sending
        ? r
        : { ui: { ...e, open: !e.open, failed: !1 }, send: null };
    case `close`:
      return { ui: { ...e, open: !1 }, send: null };
    case `toggle`: {
      let r = !e.reasons.includes(t.reason),
        i = n.filter((n) => (n === t.reason ? r : e.reasons.includes(n)));
      return { ui: { ...e, reasons: i }, send: null };
    }
    case `note`:
      return { ui: { ...e, note: t.note.slice(0, 300) }, send: null };
    case `send`:
      return e.sending
        ? r
        : { ui: { ...e, sending: `down`, failed: !1 }, send: `down` };
    case `done`:
      return e.sending === t.rating
        ? t.ok
          ? {
              ui: {
                ...e,
                sending: null,
                saved: t.rating,
                open: !1,
                failed: !1,
              },
              send: null,
            }
          : { ui: { ...e, sending: null, failed: !0 }, send: null }
        : r;
    default:
      return r;
  }
}
export { i as a, n as i, e as n, t as r, r as t };
