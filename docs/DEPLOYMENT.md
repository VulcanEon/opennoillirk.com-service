# Deployment record — October 19, 2026

Production: **https://opennoillirk.com**. Alternate host: https://opennoillirk.vulcaneon.workers.dev. `www.opennoillirk.com` preserves path/query and redirects to the apex with HTTP 301.

## Full-game release

- Sky Climb, Tabletop, local-date Daily rotation, Unlimited 10/20/Endless and the remaining reference UI/share/review/ruler/supporting pages are deployed. Branding is OpenNoillirk.
- Worker `opennoillirk`, D1 `opennoillirk` and R2 `opennoillirk-assets` are bound. Local and remote migrations through `0002_full_game.sql` applied. A remote D1 export was saved in ignored `private/backups/` before the upgrade. Existing player records were retained.
- The apex uses its existing proxied A records with a Worker `/*` route; `www` uses a Worker custom domain. Nameservers, canonical HTTPS and redirect were verified.
- Worker release `a9644ecf-2fbd-41e1-bc12-97e899d09646`.
- Build **701235019219** contains all resources; the game makes no runtime requests to the reference host. Cache versioning and the reference PWA update prompt use the same build ID. There is one service-worker registration; an active game is not forcibly refreshed on first install.
- `/api/health` reports phase2, bank4 and 200 questions. Production tests created/read/renamed real remote results and exercised a two-player challenge board. Local and remote data remain separate. Audit Daily runs were marked as replayed so they do not enter the public Daily leaderboard.
- R2 remains configured, and `/media/og.png` serves the checked-in OG object. Game images/fonts/audio are also self-contained in Workers assets.

## Verification

Rules/scheduling/server validation and prerendered SEO/source attribution: **12/12 passed**. Full local and production browser audits passed with no console/page errors or failed requests: Tabletop10, Sky10, next-date streak, 20-question Tabletop, Endless22, result/share PNG, nickname/review, same-seed challenges, phone/keyboard-height/landscape, pass/timeout/resume, audio preferences, phase-one progress migration, idle midnight rollover and secondary routes/archive replay.

Production API audit passed: complete create-reply/board contract, idempotency, ownership, nickname update, shared board ranking, forged-seed/incomplete-run rejection and feedback changes. Separate HTTPS PWA audit confirmed one document load, one active registration at the current build URL, and uninterrupted gameplay. Reports/screenshots are in ignored `output/production-phase2/`, `output/production-phase2-extra/`, `output/phase2-api/` and `output/pwa/`.

The sanitized public repository was independently installed, built, tested and checked with Wrangler's deployment dry run using only template bindings. Production configuration, credentials, local state and player records are excluded. Public source remains deployable without the private acquisition snapshot.

## Analytics and search platforms

- **Plausible:** uses the requested https://analytics.howtosurvive.ai installation; a dedicated site and real page views were verified. Existing game goals cover start/completion, answers/refusals and sharing.
- **GA4:** dedicated OpenNoillirk property/web stream; installation and real-time traffic verified in phase1. Measurement values remain in ignored production configuration.
- **Clarity:** dedicated project and live script. Rechecked October19: the recordings screen now lists 15 results, superseding the earlier processing state. Individual recordings were not reviewed. Input/textarea fields are masked.
- **GSC:** the HTTPS URL-prefix property is verified; submitted sitemap shows Success. Its prior crawl discovered six phase-one pages. The same sitemap URL now serves ten public routes, ready for the next crawl.
- **Bing:** rechecked October19 after reload: sitemap **Success**, no errors/warnings, six URLs from its prior crawl. It will read the expanded sitemap at the existing URL.

The logo/favicon, 192/512 PWA icons and 1200×630 OG image remain included. Visible H1 contains “Noillirk game”; titles/descriptions, canonical/schema/robots and AI summaries describe the full release. Private challenge URLs are noindex. Prerendered AI links and explicit source attribution point at OpenNoillirk and its public repository, including without JavaScript.

No credentials or production database contents are published. No subagents were used. See `ACCEPTANCE.md` for exact fidelity boundaries, including future question-bank changes and physical-device coverage.

## Screen comparison and SEO follow-up

Published build **6ba93337c96d**, Worker release `a46eb793-fbb9-4091-b523-29b9c05ce1bc`. The favicon/PWA icons now use the exact authorized reference SVG. H1/title/description/keywords emphasize Noillirk, with an accessible server-rendered guide below the existing homepage content. Initial viewport/game geometry is preserved.

Post-release desktop and phone SEO checks both measured **4,184 body words, 133 standalone Noillirk occurrences, 3.179%**. Normal and Googlebot request HTML is identical. The guide expands with a pointer, closes with the keyboard, appears once and follows the reference reading section's focused-game visibility. HTTPS PWA and remote API persistence/ownership/ranking checks passed with no application errors. D1 migrations were rechecked: none pending.

The fresh reference comparison matched 92 original module/style hashes and 50 audio resources. Both perfect and mixed-band runs matched cue order and playback counts. Mixed runs also verified pass/timeout, alternate downloaded cards and clipboard destinations. Local complete acceptance passed both stages, daily rollover/streaks, Unlimited20 and Endless22. Unit tests are now **13/13**. The sanitized public repository independently builds to the same hash and passes the same unit tests. See `FIDELITY-2026-10-19.md` for screenshots, methods and intentional differences.
