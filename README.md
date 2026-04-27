# The Console

A 24-card oracle deck. Each card names a recognizable life situation through a tech metaphor and offers something to notice and a move to consider. Cast a reading by entering a seed; the URL is the reading.

## Licensing

Two licenses cover this repository:

- **Application code** (everything outside `site/data/*.json` and `content/*.mjs`) is under the MIT license. See `LICENSE`.
- **Content** (the 24 card entries in `site/data/cards.json` and `content/cards.mjs`) is dedicated to the public domain under CC0 1.0 Universal. See `LICENSE-content`.

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

Covers PRNG determinism, the seeded card-cast output, and the shape of the card data. Requires Node 22+ for JSON module imports.

## Project structure

```
site/
  index.html            entry point
  manifest.json         PWA manifest
  sw.js                 service worker (network-first, offline fallback to index.html)
  offline.html          offline fallback page
  robots.txt
  css/main.css          styling (CSS custom properties, prefers-color-scheme, theme toggle)
  fonts/                self-hosted Manrope
  img/                  app icons
  data/
    cards.json          24 card entries
  js/
    app.js              router (History API, click interception)
    html.js             tagged-template helper with auto-escape and raw()
    rng.js              xmur3 + mulberry32 seeded PRNG
    theme.js            three-state theme cycle (auto/light/dark) with localStorage
    views/
      components/       header, footer
      pages/            home, about, card, reading, error404
content/
  build.mjs             generates site/data/cards.json from cards.mjs
  cards.mjs             24 card entries (source of truth)
test/
  smoke.test.js         node:test suite
netlify.toml            publish dir + SPA redirect
```

## Routing

Client-side via the History API. Routes:

- `/` - home grid of 24 cards
- `/about` - what this is, how a reading works, how to use it well
- `/card/:id` - card detail, where `:id` is 1-24
- `/reading/:seed` - reading flow. The seed is baked into the URL, so any reading is reproducible and shareable.

## Regenerating the JSON data

The canonical source for the card text is `content/cards.mjs`. Run `node content/build.mjs` to regenerate `site/data/cards.json` from that source.

## Deploy

`netlify.toml` declares `site` as the publish directory and rewrites `/*` to `/index.html` so History-API routes resolve on reload. Push to the branch connected to Netlify.
