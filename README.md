# OpenNoillirk

Play **[OpenNoillirk](https://opennoillirk.com)** — a free Noillirk Sky Climb game. Guess what most people would say, lift a balloon-powered krill, and challenge a friend.

Public deployable source: [VulcanEon/opennoillirk.com-service](https://github.com/VulcanEon/opennoillirk.com-service).

## Current release

Phase 1 includes the forest homepage, ten classic questions, 30-second rounds, five answer bands, typo correction and retry, pass/timeout, original procedural sky animation and audio, sound/music controls, saved progress, complete answer review, result titles, share images and QR codes, portable and database-backed challenge links, and nickname editing.

Tabletop, refreshed daily questions and Unlimited are the next phase. Their navigation is preserved for the reference layout; they are not available in this release. The classic question set is pinned to the authorized reference snapshot from 2026-10-19. We do not claim every remaining screen is pixel-identical: the application and share-card composition were implemented independently around the original authorized renderer and assets.

## Run locally

Requires Node.js 22+ and npm.

```sh
npm ci
npm run build
npm run db:local
npm run dev
```

Open http://localhost:3052. Wrangler provides persistent local D1 and R2 under `.wrangler/state`; it does not access production data. No secret is needed for local play. Copy `.dev.vars.example` to `.dev.vars` only if overriding settings.

```sh
npm test
npx playwright install chromium
npm run test:browser
```

The browser audit uses installed Google Chrome by default. Set `BROWSER_CHANNEL=chromium` to use a Playwright browser. Screenshots and JSON reports go to ignored `output/acceptance/`.

## Deploy to your own Cloudflare account

1. Sign in with `npx wrangler login`.
2. Create D1 and R2 with `npx wrangler d1 create opennoillirk` and `npx wrangler r2 bucket create opennoillirk-assets`.
3. Copy `wrangler.jsonc` to ignored `wrangler.production.jsonc`. Set the returned D1 ID, your account ID and desired custom-domain routes. Set `LOCAL_DEVELOPMENT` to `false`. Configure optional `PLAUSIBLE_SCRIPT`, `GA4_ID`, `CLARITY_ID`, `GSC_VERIFY`, and `BING_VERIFY` in that file using your own measurement and verification values.
4. Change `src/config.mjs` (site origin/branding/repository) and the production hostname check in `src/html.mjs` for your domain. Update the `www` redirect in `src/worker.mjs` if needed.
5. Run `npm run db:remote` and `npm run deploy`.

All needed images, fonts, question files and audio are checked in; the live game has no runtime dependency on noillirk.com. Worker static assets serve the game; optional `/media/<key>` serves assets from the bound R2 bucket. Production analytics is skipped in local development and automated audits.

## Source and data

- `src/app.mjs`: game flow, input, HUD, results and sharing.
- `src/worker.mjs`: pages, result/challenge API, score validation, sitemap and AI-readable summaries.
- `src/rules.mjs`: readable bindings around the pinned original rules.
- `public/assets/`: authorized pinned renderer and original presentation assets.
- `public/audio.mjs`: Web Audio playback and ambient mixing.
- `migrations/`: D1 schema, shared between local and production.
- `docs/`: provenance, acceptance criteria and deployment notes.

Production IDs, credentials, local database contents and saved runs are excluded from Git. Public source includes deployable code and configuration templates, not a dump of player data. Do not commit `.dev.vars`, `.env*`, `wrangler.production.jsonc`, `private/`, `output/` or `.wrangler/`.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for asset provenance and [LICENSE](LICENSE) for the scope of licensing.
