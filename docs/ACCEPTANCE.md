# Full-game acceptance — October 19, 2026

Reference: noillirk.com. This is separate from playdaily.org. No subagents were used.

## Fidelity and scope

The phase-two release uses the authorized reference game UI/controller, both renderers, styles, animation/audio cues, reveal cards, landmark ruler, result/review components and share-card composition. The prior phase-one custom implementations are retained only for compatibility with previously cached pages. Visible branding is OpenNoillirk; contact/source links, own legal text, telemetry and independent services are intentional adaptations.

The source includes formatted distributed JavaScript, rather than the reference's unavailable private TSX project. Current scene assets and client behavior are pinned, with SHA-256 provenance in `docs/client-manifest.json`. No live original-site server is required.

The 200-question bank and October 15–December 31, 2026 schedule are included. Later dates use deterministic local scheduling. Unseen future changes to the reference cannot be certified identical. Screenshot checks cover simulated phone/keyboard/landscape sizes, rather than physical iOS/Android keyboards. Animation frames and human audio perception have not been certified pixel/sample-identical across every device.

## Verified behavior

- Tabletop complete ten: refusal/retry, typo correction, original crowd/tile/hop/march animation, 2,500 points / 100 followers, automatic result/share overlay, downloaded PNG, nickname editing, answer review and short challenge.
- Sky Climb complete ten: 14.0 km, original altitude/ruler/zone changes, audio/music, result/share cards, QR and same-question friend reveal.
- Next local date: fresh ten, completed progress restored in either stage, two-day streak. Idle homepage crosses midnight and automatically loads the new Daily; an active run retains its date.
- Unlimited 20: repeated multiplier cycles, 5,000 points / 200 cumulative followers; a short challenge preserves seed/bank/length.
- Endless: 22 accepted answers, no repeated prompts, 5,200 points and a 76.7 km climb; manual settlement, review and share sheet. The reference shares the Unlimited entry URL for Endless, rather than a finite short challenge.
- Whole-bank selection: 200 distinct prompts before reshuffle, with a distinct second cycle; all scheduled days have ten valid, distinct prompts; future scheduling remains deterministic and changes by date.
- 390×844 phone, 390×450 keyboard-height and 844×390 landscape: input/reveal, saved resume, pass, timeout, layout without horizontal overflow. Desktop audits use 1440×864.
- Audio/music preferences survive reload. Actual controller diagnostics record original dispatched cues. Phase-one progress and best score migrate into the full client without losing completed answers.
- Rules, scoring, privacy, terms, archive list, archived-day replay, leaderboard and suggestion pages render without error. Public source link is present. Archive plays its original date with archive mode enabled.
- D1 result reply includes the complete board contract. Owner retry is idempotent; another browser cannot overwrite an existing ID or rename it. Friend results share the same root board and receive correct rank/ownership fields. The live server rejects forged seeds/order/bands, incomplete runs, invalid payloads and cross-origin writes. Feedback and suggestions persist.

During regression, two independent-service contract defects were found and fixed: score creation needed to return the ranked board/scores for Sky Climb results; archive loading needed top-level SEO plus the day's prompt summaries. Console-error collection now catches React error boundaries as well as uncaught exceptions. A source-footer timing race was removed by observing DOM changes immediately.

## Reproduce checks

```sh
npm test
npm run test:browser
npm run test:extra
npm run test:api
npm run test:pwa  # HTTPS deployment
```

`npm test` passes 12 meaningful rules/scheduling/validation tests. Full local and production browser/extra audits pass with no console/page errors or failed requests. The API audit verifies six persistence/security workflows. Screenshots and reports live in ignored `output/phase2/`, `output/phase2-extra/` and `output/phase2-api/`.

The supplied web-game Playwright client was run for both stages and its canvas screenshots inspected. Full-page audit screenshots are also inspected because the helper intentionally captures only the largest canvas and omits DOM controls.

Set `TEST_URL` to target another deployment. Set `TEST_OUTPUT` for separate full/extra output folders. `AUDIT_UNRANKED=1` makes the full audit mark saved runs as replayed so verification runs do not enter the public Daily leaderboard; gameplay, score recomputation and challenge persistence still use the real services. Audits write test results/suggestions to the selected database and skip analytics.

An additional HTTPS audit confirms one active versioned service-worker registration, one document load and an uninterrupted playing screen. The duplicate compatibility-layer registration was removed, the API now supplies the reference buildId contract, and updates wait for the reference update action. Production verification and independently rebuilt public-source results are recorded in `docs/DEPLOYMENT.md` after release.

## Follow-up screen comparison and SEO

The phase-three comparison and SEO additions are documented in `FIDELITY-2026-10-19.md`. Unit tests now include a homepage content/metadata regression (13 total). Native accordion behavior, initial viewport preservation, hydrated keyword density and identical crawler/user HTML are verified with `npm run test:seo`. The exact authorized favicon now supplies both favicon and PWA icon builds. Game controller, renderer and audio behavior were preserved.
