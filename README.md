# The Console

A divination system inspired by the I Ching, built around channels and connections.

The Console offers a fresh description of your situation. Cast six binary draws to get one of 64 trajectories - a present channel meeting an emerging one. The reading offers a frame to sit with, not a prediction. The architecture is the I Ching's (six binary lines, eight trigrams pairing into 64 hexagrams), but the worldview, the eight channel states, and all 64 entries are original to this project.

## Licensing

Two licenses cover this repository:

- **Application code** (everything outside `site/data/*.json` and `content/*.mjs`) is under the MIT license. See `LICENSE`.
- **Content** (the 8 channel-state entries and 64 hexagram entries in `site/data/*.json` and `content/*.mjs`) is dedicated to the public domain under CC0 1.0 Universal. See `LICENSE-content`.

## Running locally

The app is a static site under `site/`. Because it uses client-side routing, a dev server that serves `index.html` as a fallback for unknown paths is required.

```
npx serve -s site
```

The `-s` flag rewrites any unknown path to `index.html` so reloads on deep URLs (e.g. `/reading/abc123`) work.

## Tests

```
node --test
```

Covers PRNG determinism, the seeded coin-flip output, and the shape and cross-references of the trigram and hexagram data. Requires Node 22+ for JSON module imports.

## Project structure

```
site/
  index.html            entry point
  manifest.json         PWA manifest
  sw.js                 service worker (network-first, offline fallback to index.html)
  offline.html          offline fallback page
  robots.txt
  css/main.css          styling (CSS custom properties, prefers-color-scheme, theme toggle)
  fonts/                self-hosted Inter (latin) and Noto Sans Symbols 2 (trigram subset)
  img/                  app icons
  data/
    trigrams.json       8 channel-state entries
    hexagrams.json      64 hexagram-trajectory entries
  js/
    app.js              router (History API, click interception)
    html.js             tagged-template helper with auto-escape and raw() for SVG
    rng.js              xmur3 + mulberry32 seeded PRNG
    theme.js            three-state theme cycle (auto/light/dark) with localStorage
    glyphs.js           inline SVG renderer for trigrams and hexagrams
    views/
      components/       header, footer
      pages/            home, about, hexagram, trigram, reading, error404
content/
  build.mjs             generates site/data/*.json from inline JS
  trigrams.mjs          8 channel-state entries (source of truth)
  hexagrams.mjs         64 hexagram entries (source of truth)
docs/
  substrate.md          the worldview document (foundational)
  essentials.md         architectural and functional invariants
  analysis.md           Phase 1 functional analysis of the I Ching
  notes/                working notes from each phase
  research/             landscape research on existing reinterpretations
  superpowers/specs/    design spec
  superpowers/plans/    per-phase implementation plans
test/
  smoke.test.js         node:test suite
netlify.toml            publish dir + SPA redirect
```

## Routing

Client-side via the History API. Routes:

- `/` - home grid of 8 channels and 64 trajectories
- `/about` - what this is, how a reading works, how to use it well, notes on origins
- `/trigram/:value` - channel detail, where `:value` is the 3-character binary pattern (e.g. `000` for MONITOR, `111` for TRANSMIT)
- `/hexagram/:id` - trajectory detail, where `:id` is 1-64 (binary value of pattern + 1)
- `/reading/:seed` - reading flow. The seed is baked into the URL, so any reading is reproducible and shareable.

## Regenerating the JSON data

The canonical sources for the live channel-state and hexagram text are `content/trigrams.mjs` and `content/hexagrams.mjs`, which contain inline JS objects. Run `node content/build.mjs` to regenerate `site/data/trigrams.json` and `site/data/hexagrams.json` from those sources.

The 8 channel-state names (TRANSMIT, RECEIVE, BROADCAST, SCAN, AIM, TUNE, STANDBY, MONITOR) derive from the worldview in `docs/substrate.md`. Each is one of 8 postures a channel can take, characterized by three binary properties: open or closed (carrying anything), focused or distributed (point-to-point vs. spread), outward or inward (which way energy flows).

## Deploy

`netlify.toml` declares `site` as the publish directory and rewrites `/*` to `/index.html` so History-API routes resolve on reload. Push to the branch connected to Netlify.
