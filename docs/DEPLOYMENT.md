# Deployment record — 2026-10-19

- Production: https://opennoillirk.com
- Alternate host: https://opennoillirk.vulcaneon.workers.dev
- `www.opennoillirk.com` redirects to the canonical root with HTTP 301.
- Cloudflare Worker `opennoillirk`, D1 `opennoillirk`, R2 `opennoillirk-assets` provisioned. Local and remote D1 migrations applied successfully.
- The apex already had proxied A records. The Worker uses an apex `/*` route rather than deleting those records; `www` uses a custom domain. Nameservers resolve to Cloudflare and HTTPS is working.
- `/api/health` confirms database/storage bindings. Production full-run audit successfully created a result in remote D1, read the challenge and updated its nickname. Production and local player data remain separate.
- `/media/og.png` returns the R2 object with the same SHA-256 as the checked-in image. Game assets are also self-contained in Workers static assets.
- Plausible uses the requested https://analytics.howtosurvive.ai instance. Installation verified and real page views visible in its dashboard. Custom goals for game start/completion, answer acceptance/refusal and sharing are configured.
- GA4 has a dedicated OpenNoillirk property and web stream; real-time report displays the live page and one active visitor.
- Clarity has a dedicated project; its script and runtime both load in the live browser. Dashboard processing is not yet complete; the setup screen says data may take up to two hours. Do not claim a recording has been reviewed yet.
- GSC HTTPS URL-prefix property verified with an HTML meta tag; sitemap submission confirmed successful.
- Bing site verified with HTML meta tag; sitemap accepted and Processing.
- Account IDs, database IDs, script IDs and verification values are kept in ignored production configuration. No credentials or production player records are exported to the public repository.

Production smoke/full-run audit: all ten answers, 2,500 points / 14,000m, result review, PNG download, challenge retrieval, nickname update, mobile/compact/landscape layouts, audio buffers/cues; no JS errors or failed assets. Audit traffic skips analytics.

Logo/favicon, 192/512 PWA icons, 1200×630 OG image, page titles/descriptions, visible Noillirk-game H1, canonical URLs, structured data, robots and six-URL sitemap are included. AI-readable summaries disclose current phase availability.
