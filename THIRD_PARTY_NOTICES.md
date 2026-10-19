# Third-party notices

OpenNoillirk is an independently hosted adaptation of Noillirk. The project owner confirms authorization to reproduce the reference game and reuse its assets. This repository includes authorized reference client modules, renderers, rules, CSS, question data, images, fonts and audio. Authorization does not imply those components were authored by OpenNoillirk or are covered by our application-code license.

Reference: https://noillirk.com/ (retrieved October 19, 2026). `docs/asset-manifest.json` records the initial public URLs, byte sizes and SHA-256 hashes. `docs/client-manifest.json` records the coherent phase-two client graph and deployed hashes. Acquisition manifests may include material not used in the final build.

`vendor/reference/` contains formatted, adapted **distributed JavaScript modules**, rather than the original private TSX project. The build regenerates deployable client assets from these checked-in modules. Original game controllers, share-card composition, Tabletop and Sky Climb renderers are preserved. Changes cover OpenNoillirk branding, independent service endpoints, removal of upstream telemetry/chat/account configuration, own legal text and diagnostic hooks. The pinned React 19.2.3 distribution exposes its existing createRoot implementation so the adapted interactive client can mount over the prerendered document without hydration mismatch. Upstream administrative interfaces are replaced with inert stubs. No upstream credentials are required.

The Worker API, D1/R2 integration, scheduling fallback, server-side validation, metadata adaptation and deployment configuration are project-owned. Runtime requests use this site's own services. We do not represent the reference artwork, audio, question rosters or client implementation as original OpenNoillirk work.

Fonts include Pixelify Sans, Baloo 2, Geist and DM Sans. Their authors' copyright and SIL Open Font License apply. React and TanStack Router use MIT licenses. License texts are supplied under `docs/licenses/`.

The project also bundles QRCode (MIT) and uses esbuild, Wrangler, Sharp, Playwright, LinkeDOM, Prettier and other npm dependencies under their package licenses; see `package-lock.json` and package LICENSE files.

Anyone redistributing or reusing the authorized reference materials must ensure their own permission covers that use. No general sublicensing right to the upstream client, artwork, audio or question data is asserted here.
