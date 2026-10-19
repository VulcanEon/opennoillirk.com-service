# OpenNoillirk

Play **[OpenNoillirk](https://opennoillirk.com)** — a free Noillirk game. Guess what most people would say, climb with a balloon-powered krill or gather a crowd on the tabletop, then challenge a friend.

Public deployable source: [VulcanEon/opennoillirk.com-service](https://github.com/VulcanEon/opennoillirk.com-service).

## Full-game release

- **Sky Climb and Tabletop:** the authorized reference controllers, renderers, scenery, animation, sound/music, input, reveal boards, landmark ruler, results, review, feedback and share-card layouts.
- **Daily:** ten questions and thirty seconds per round; local-calendar rollover, saved progress, best scores and streaks. Both stages use the same questions and score rules.
- **Unlimited:** 10, 20 and Endless; seeded order with all 200 questions used before a repeat, repeating ten-round multiplier cycles, and manual settlement for Endless.
- **Sharing:** downloadable cards and QR codes, copy link/text, native/social sharing, database-backed and portable challenges, same-seed replay, nickname editing and challenge boards. Finite runs can be stored as short links; Endless cards share the Unlimited entry URL, matching the reference.
- **Supporting pages:** rules, scoring, all sky zones, daily leaderboard, archive/replay, question suggestions, own privacy/terms, public-source footer, sitemap and AI-readable summaries.

This is a self-contained, independently hosted adaptation using assets authorized by the project owner. Branding, service endpoints, analytics, privacy text and deployment are adapted for OpenNoillirk. The reference's distributed client JavaScript is included as readable formatted modules; its original private TSX project was not available and is not claimed to be included. The Worker and database implementation are project-owned. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

The imported Daily schedule matches the reference from October 15 through December 31, 2026. Later dates select ten questions deterministically from the included bank, so daily rotation continues without relying on the original server. A future change to the reference's bank or algorithm requires an explicit asset update; there is no claim that unseen future content is identical.

## Run locally

Requires Node.js 22+ and npm.

```sh
npm ci
npm run build
npm run db:local
npm run dev
```

Open http://localhost:3052. Wrangler supplies persistent **local** D1/R2 under `.wrangler/state`; local play needs no production credentials. Optional overrides go in ignored `.dev.vars` (see `.dev.vars.example`).

```sh
npm test
npm run test:browser
npm run test:extra
npm run test:api
npm run test:pwa  # HTTPS deployment; defaults to the live site
```

Browser audits use installed Google Chrome. To use a Playwright browser, run `npx playwright install chromium` and set `BROWSER_CHANNEL=chromium`. `TEST_URL` changes the target (default localhost); audits save test results and suggestions to that target's database. Screenshots and reports go to ignored `output/phase2/` and `output/phase2-extra/`. Automated traffic skips analytics.

## Deploy to your Cloudflare account

1. Sign in with `npx wrangler login`.
2. Create D1 and R2: `npx wrangler d1 create opennoillirk` and `npx wrangler r2 bucket create opennoillirk-assets`.
3. Copy `wrangler.jsonc` to ignored `wrangler.production.jsonc`. Set your account ID, D1 ID, custom domain/route and `LOCAL_DEVELOPMENT=false`. Optional `PLAUSIBLE_SCRIPT`, `GA4_ID`, `CLARITY_ID`, `GSC_VERIFY` and `BING_VERIFY` use your own values.
4. For a different brand/domain, update `src/config.mjs`, `src/reference-page.mjs`, `src/html.mjs`, `src/worker.mjs`, `public/compat.mjs` and the relevant readable `vendor/reference/` modules/templates. Search the checked-in source for `opennoillirk.com` before publishing a fork.
5. Run `npm run db:remote` and `npm run deploy`.

Both local and production use the same numbered D1 migrations. Worker static assets include all game resources. Optional `/media/<key>` serves objects from the R2 binding. Playing has no runtime dependency on noillirk.com.

## Source map

- `vendor/reference/`: readable, adapted reference client modules and CSS. `npm run build` compiles these into `public/assets/v2/`.
- `src/reference-pages.generated.mjs`: checked-in prerendered page templates; the client mounts the interactive app using the same reference layouts.
- `src/reference-page.mjs`, `public/compat.mjs`, `public/migrate.mjs`: metadata, source attribution, privacy masking, debug/time hooks, date rollover and preservation of phase-one progress.
- `src/game-data.mjs`, `src/game-api.mjs`, `src/worker.mjs`: independent question selection, server-side score/order validation, persistence, challenge/board APIs and hosting.
- `public/game/`: 200 complete prompts, bank index, scheduled Daily IDs and the compatibility snapshot.
- `src/content/`: editable supporting content; privacy and terms regenerate into the full client at build time.
- `migrations/`, `tests/`, `scripts/`, `docs/`: database schema, verification, build/deployment tooling and provenance.
- `src/app.mjs`, `public/app.mjs`: retained phase-one client for compatibility with previously cached pages; new pages use the full client above.

`docs/asset-manifest.json` records the initial asset acquisition. `docs/client-manifest.json` additionally records the original and deployed SHA-256 values for the phase-two module graph. `scripts/import-authorized-client.mjs` is an optional maintainer reimport tool requiring the private acquisition snapshot; **normal build/deploy does not require that snapshot**.

Production identifiers, credentials, local databases and saved player records are excluded from Git. The public repository contains deployable code and configuration templates. Never commit `wrangler.production.jsonc`, `.dev.vars`, `.env*`, `private/`, `output/` or `.wrangler/`.

See [docs/ACCEPTANCE.md](docs/ACCEPTANCE.md) for verification coverage and [LICENSE](LICENSE) for licensing scope.
