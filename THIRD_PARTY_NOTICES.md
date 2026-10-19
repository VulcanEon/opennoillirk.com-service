# Third-party notices

OpenNoillirk is an independently hosted adaptation of Noillirk. The project owner confirms authorization to reproduce the reference game and reuse its assets. This repository preserves the original renderer, rules, CSS, question data, images, fonts and audio for faithful presentation; authorization does not imply those components were authored by OpenNoillirk or are covered by the license on our application code.

Reference: https://noillirk.com/ (retrieved 2026-10-19). `docs/asset-manifest.json` records original public URLs, byte sizes and SHA-256 hashes of downloaded material. Some files in the import manifest are excluded from the final distribution; the manifest describes acquisition, not the final build inventory. The reference changed its asset hashes during acquisition, so `src/reference-config.json` pins a coherent renderer graph and stylesheet snapshot.

The game uses the original pixel renderer and sky-zone map, shrimp sprites and motion, scenery, UI styles, question rosters and matching rules. Branding is changed to OpenNoillirk. We do not represent the original game or artwork as our own creation. Original upstream application/admin/network code and tracking identifiers are excluded; OpenNoillirk has its own application controller, backend, analytics configuration and share-card layout.

Fonts include Pixelify Sans and Baloo 2. Their authors' copyright and SIL Open Font License apply. Font license files are provided under `docs/licenses/`.

The project bundles QRCode (MIT) and uses esbuild, Wrangler, Sharp and other npm dependencies under their respective package licenses; see `package-lock.json` and the packages' LICENSE files for details.

Reference materials are supplied as authorized project assets. Anyone redistributing or reusing them must ensure their own permission covers that use. No general sublicensing right to upstream artwork, audio or question data is asserted here.
