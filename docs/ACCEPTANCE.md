# Phase 1 acceptance

Reference: noillirk.com, 2026-10-19. Do not confuse it with the separate playdaily.org game.

Implemented and verified:
- Forest homepage with the original procedural pixel scenery, floating krill, branding, navigation, animated learning sections and scoring demonstration.
- Full classic ten questions; 30 seconds each; weights 1,1,2,2,2,3,3,3,4,4.
- Answer bands 10/25/50/75/100; refusal/retry, spelling correction, pass, timeout, per-round floor(points/25), pause on hidden tab and saved resume.
- Original climb renderer, movement, scene transitions, balloon reactions, camera and 23 sound buffers with four ambient beds.
- Full score, 14km perfect climb, titles, personal best, ten-question answer review, share overlay and replay.
- Two downloadable PNG cards, QR, copy text/link, native share and social share URLs; D1-backed and portable challenge links; nickname update; friend's answer reveal.
- Desktop 1440×864, mobile 390×844, keyboard-height 390×450 and landscape 844×390 checks. No console errors or failed requests in the audit.
- Local and remote D1 migrations, server-side answer-band/order/score validation, R2 binding, static assets, PWA, SEO and public source attribution.

Meaningful automated checks: `npm test`, `npm run test:browser`. `output/acceptance/report.json` and screenshots record the latest execution. The skill's canvas-only client is also run; the full-page audit provides DOM+canvas proof because the helper only captures the largest canvas.

Known remaining fidelity work:
- Tabletop, daily question rotation and Unlimited are subsequent phases as requested.
- Share-card composition is project-owned and requires a final overlay comparison to be called pixel-identical.
- Landmark ruler labels, some copy, remaining secondary interactions and stage feedback differ from the pinned reference.
- Audio playback/decoded buffers and cue dispatch are tested; human listening across devices remains useful.
- Compact viewports are tested by simulation; an actual iOS/Android keyboard remains a separate device check.

Do not describe this release as 100% identical or the entire multi-phase project as complete.
