# Phase 5 (Build) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the static web app for the divination system. Live deployed site that consults the corpus (8 trigram entries + 64 hexagram entries) via an interactive divination interface.

**Architecture:** Static site, mirrors `/Users/jess/dev/i-ching/site/` heavily. Vanilla JS, no framework, no build step for the app (the build script in `content/` already produces `site/data/*.json`). History API routing, tagged-template html helper, seeded PRNG for reproducible readings, service worker for offline, PWA manifest, CSS custom properties + theme toggle.

**Tech Stack:** Vanilla JS (ES modules), CSS custom properties, History API, JSON data from `site/data/`, Node.js for content build (already in place).

**Note on scope:** Most of the work is "lift and adapt" from the i-ching site. The genuinely new work is: project naming, visual identity choices, hexagram SVG glyph rendering (since binary IDs don't match Unicode hexagram codepoints), and the divination-specific reading flow. The remaining structural work is mechanical translation.

---

## Task 1: Settle project name and visual identity (collaborative)

**Controller-executed.** Two decisions that propagate through everything else and need user input.

**Files:**
- Create: `/Users/jess/dev/divination/docs/notes/12-naming-and-identity.md`

- [ ] **Step 1: Surface project name candidates**

The project still needs a name (deferred from spec). Propose 4-6 candidates drawn from the worldview (channels, signal/communications register, chaos-magic-tech flavor) and ask the user to pick or steer. Examples to seed thinking:
- *Channels* (direct, generic)
- *Carrier* (signal carrier)
- *Open Channel*
- *Six Bits* (or *Six*)
- *On/Off*
- *Signal & Silence*
- *Tune*
- *Frequencies*

Avoid: anything that sounds mystical/oracular by default; anything that's already a brand.

- [ ] **Step 2: Surface visual identity choices**

Present 2-3 directions for the visual identity:
- *Same warm-minimalist register as i-ching* (Lora serif, cream/dark warm palette, similar feel) - safest, most coherent with the prior work
- *Differentiated minimalism* (e.g. mono or sans-serif for tech-flavor, different accent color, more spare layout)
- *Distinct identity* (different fonts, palette, layout principles entirely)

Ask the user to pick a direction. Specifics (exact font, exact accent color) follow from the direction.

- [ ] **Step 3: Capture decisions**

Write `docs/notes/12-naming-and-identity.md` with the user's chosen project name and visual identity direction. This is the input for all subsequent tasks.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/12-naming-and-identity.md
git commit -m "docs: settle project name and visual identity direction"
```

---

## Task 2: Set up site skeleton (HTML, manifest, SW, base CSS, fonts)

**Subagent-driven.** Lift heavily from i-ching with adaptations for the new project name and identity.

**Files:**
- Create: `/Users/jess/dev/divination/site/index.html`
- Create: `/Users/jess/dev/divination/site/manifest.json`
- Create: `/Users/jess/dev/divination/site/sw.js`
- Create: `/Users/jess/dev/divination/site/css/main.css`
- Create: `/Users/jess/dev/divination/site/robots.txt`
- Create: `/Users/jess/dev/divination/site/offline.html`
- Create: `/Users/jess/dev/divination/site/img/` (icons - placeholders ok for v1)
- Create: `/Users/jess/dev/divination/site/fonts/` (subset whichever fonts the identity calls for)

- [ ] **Step 1: Read i-ching reference files**

```bash
ls /Users/jess/dev/i-ching/site/
```

Read:
- `/Users/jess/dev/i-ching/site/index.html`
- `/Users/jess/dev/i-ching/site/manifest.json`
- `/Users/jess/dev/i-ching/site/sw.js`
- `/Users/jess/dev/i-ching/site/css/main.css`
- `/Users/jess/dev/i-ching/site/robots.txt`
- `/Users/jess/dev/i-ching/site/offline.html`

These are the structural templates.

- [ ] **Step 2: Create index.html**

Adapt from i-ching's index.html:
- Update title and meta description to reflect the new project name
- Update theme-color, og tags
- Update apple-touch-icon path
- Inline FOUC-prevention script for theme (lift exactly)
- Service worker registration (lift exactly)

- [ ] **Step 3: Create manifest.json**

Adapt from i-ching's manifest.json:
- Update name, short_name, description
- Update theme_color, background_color (from chosen palette)
- Keep display: standalone

- [ ] **Step 4: Create sw.js**

Adapt from i-ching's sw.js:
- Update cache list to match new file structure
- Same network-first + offline-fallback pattern

- [ ] **Step 5: Create css/main.css**

Adapt from i-ching's main.css:
- Keep the structural CSS (layout, grids, theme variables, typography reset)
- Update color palette per identity decision
- Update font-face declarations per chosen fonts
- Keep the prefers-color-scheme + theme-class override pattern

- [ ] **Step 6: Create robots.txt and offline.html**

Lift these as-is, lightly editing references to project name.

- [ ] **Step 7: Set up fonts directory**

Subset whichever fonts the identity calls for, following the i-ching pattern (woff2 subsets with unicode-range). For the divination-specific characters needed (trigram glyphs U+2630-U+2637), include Noto Sans Symbols 2 or equivalent.

- [ ] **Step 8: Set up img directory**

For v1, simple placeholders are fine (a flat-color square at 192px and 512px with the project name initial). Final icon design can come later.

- [ ] **Step 9: Verify static site loads**

```bash
cd /Users/jess/dev/divination
npx serve -s site
```

Open in browser, verify the skeleton loads without errors (will be mostly blank since no JS yet).

- [ ] **Step 10: Commit**

```bash
cd /Users/jess/dev/divination
git add site/
git commit -m "feat: scaffold site skeleton (HTML, manifest, SW, base CSS, fonts)"
```

---

## Task 3: Set up JS infrastructure (router, html helper, rng, theme)

**Subagent-driven.** Lift directly from i-ching with file path adaptations.

**Files:**
- Create: `/Users/jess/dev/divination/site/js/app.js`
- Create: `/Users/jess/dev/divination/site/js/html.js`
- Create: `/Users/jess/dev/divination/site/js/rng.js`
- Create: `/Users/jess/dev/divination/site/js/theme.js`
- Create: `/Users/jess/dev/divination/site/js/views/components/header.js`
- Create: `/Users/jess/dev/divination/site/js/views/components/footer.js`

- [ ] **Step 1: Read i-ching JS infrastructure**

Read these files in full:
- `/Users/jess/dev/i-ching/site/js/app.js`
- `/Users/jess/dev/i-ching/site/js/html.js`
- `/Users/jess/dev/i-ching/site/js/rng.js`
- `/Users/jess/dev/i-ching/site/js/theme.js`
- `/Users/jess/dev/i-ching/site/js/views/components/header.js`
- `/Users/jess/dev/i-ching/site/js/views/components/footer.js`

- [ ] **Step 2: Lift html.js, rng.js, theme.js exactly**

These three files are project-agnostic infrastructure. Copy verbatim to the new site.

- [ ] **Step 3: Adapt app.js**

Update routes to match the new app:
- `/` → home page
- `/trigram/:pattern` → trigram detail (using 3-char pattern as identifier)
- `/hexagram/:id` → hexagram detail (using numeric 1-64 id)
- `/reading/:seed` → reading flow
- `/about` → about page
- 404 fallback

Keep the History API click interception, theme toggle delegation, scroll reset, document.title pattern.

- [ ] **Step 4: Adapt header.js**

Same nav structure as i-ching's header, but update the brand text to the new project name.

- [ ] **Step 5: Adapt footer.js**

Lift, update brand and credit text.

- [ ] **Step 6: Wire imports in index.html**

Update the script tag in index.html to point at `/js/app.js`.

- [ ] **Step 7: Verify the empty pages route**

```bash
cd /Users/jess/dev/divination
npx serve -s site
```

Navigate to `/`, `/about`, etc. - the page handlers won't exist yet but the router should not throw; it should at most show the 404 fallback.

- [ ] **Step 8: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/
git commit -m "feat: lift JS infrastructure (router, html helper, rng, theme, components)"
```

---

## Task 4: SVG glyph rendering

**Subagent-driven.** Implement a small module that renders hexagram and trigram glyphs as inline SVG from their binary patterns. Decided in Phase 3 (since binary IDs don't map to King Wen Unicode codepoints for hexagrams; trigrams could use Unicode but using SVG for both is cleaner).

**Files:**
- Create: `/Users/jess/dev/divination/site/js/glyphs.js`
- Add: SVG styling in `/Users/jess/dev/divination/site/css/main.css`

- [ ] **Step 1: Implement renderTrigramGlyph(pattern) and renderHexagramGlyph(pattern)**

Pattern is the binary string ('000' or '000000'). Each character is one line, bottom-to-top. Render lines as SVG paths or rects: solid for '1', broken for '0'. Standard trigram visual: a solid line is one full bar; a broken line is two short bars with a gap.

```javascript
// Sketch
export function renderTrigramGlyph(pattern, size = 24) {
    // pattern is 3 chars, bottom-to-top
    // return SVG string with 3 stacked horizontal lines
}

export function renderHexagramGlyph(pattern, size = 24) {
    // pattern is 6 chars, bottom-to-top
    // return SVG string with 6 stacked horizontal lines
}
```

Use viewBox so size is responsive. Color from CSS via currentColor.

- [ ] **Step 2: Add minimal CSS for the glyphs**

```css
.glyph {
    color: var(--accent);  /* or whatever the identity calls for */
    /* sizing handled by SVG itself */
}
```

- [ ] **Step 3: Test render**

Quick manual test by importing into a temporary file or browser console; verify all 8 trigram patterns and a few hexagram patterns render correctly.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/glyphs.js site/css/main.css
git commit -m "feat: SVG glyph rendering for trigrams and hexagrams"
```

---

## Task 5: Implement home page (grid of 64 hexagrams + 8 trigrams)

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/site/js/views/pages/home.js`

- [ ] **Step 1: Read i-ching's home page for reference**

Read `/Users/jess/dev/i-ching/site/js/views/pages/home.js` for the grid pattern.

- [ ] **Step 2: Implement home.js**

Render two grids:
- 8 trigrams at the top (compact, click → /trigram/:pattern)
- 64 hexagrams below (compact grid, click → /hexagram/:id)

Each cell shows: glyph (SVG via glyphs.js), name, and the trajectory or core sense. Use CSS grid with similar subgrid pattern as i-ching for column alignment.

Title function: `static title() { return '<projectname>' }` or similar.

- [ ] **Step 3: Add CSS for the home grids**

Adapt the i-ching grid CSS (`.tri-grid`, `.hex-grid`, `.hex-row`, etc.) with appropriate column counts.

- [ ] **Step 4: Verify home renders**

Navigate to `/` in browser. Should show grids with all 72 entries.

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/views/pages/home.js site/css/main.css
git commit -m "feat: home page with grids for 8 trigrams and 64 hexagrams"
```

---

## Task 6: Implement trigram detail page

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/site/js/views/pages/trigram.js`

- [ ] **Step 1: Implement trigram.js**

Route: `/trigram/:pattern` where pattern is 3 chars (e.g. `000`). Lookup the trigram from `site/data/trigrams.json` by pattern.

Render: glyph (SVG), name, coreSense, description, range (5 domains as definition list), inCombination, and a link section showing all 8 hexagrams that use this trigram as the lower channel and all 8 that use it as the upper.

Title: `'<projectname> | <NAME>'` where NAME is the channel-state name.

If pattern not found, render a 404-ish "not found" message linking to home.

- [ ] **Step 2: Add CSS for trigram page**

Adapt i-ching's trigram-info dl pattern, etc.

- [ ] **Step 3: Verify**

Navigate to `/trigram/000`, `/trigram/111`, etc. Verify each renders correctly.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/views/pages/trigram.js site/css/main.css
git commit -m "feat: trigram detail page"
```

---

## Task 7: Implement hexagram detail page

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/site/js/views/pages/hexagram.js`

- [ ] **Step 1: Implement hexagram.js**

Route: `/hexagram/:id` where id is 1-64. Lookup the hexagram from `site/data/hexagrams.json` by id.

Render: glyph (SVG), name, lower trigram (with link to its detail page), upper trigram (with link), coreSense, image. Indicate the lower-as-present and upper-as-emerging structure clearly.

Title: `'<projectname> | <NAME>'` where NAME is the hexagram's name.

- [ ] **Step 2: Add CSS for hexagram page**

- [ ] **Step 3: Verify**

Navigate to `/hexagram/1`, `/hexagram/64`, `/hexagram/30`, etc.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/views/pages/hexagram.js site/css/main.css
git commit -m "feat: hexagram detail page"
```

---

## Task 8: Implement reading flow

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/site/js/views/pages/reading.js`

- [ ] **Step 1: Implement reading.js**

Route: `/reading/:seed` where seed is a string. Use seeded PRNG (rng.js) to deterministically generate 6 binary bits → a hexagram pattern → the corresponding hexagram.

Render: the hexagram glyph (SVG), the hexagram entry (name, lower/upper trigrams as channels with their core senses, image text). Include the seed in the URL so readings are shareable/reproducible.

The header's "Reading" link should generate a new random seed each time it's rendered (same pattern as i-ching's header).

Title: `'<projectname> | Reading <seed>'` or similar.

- [ ] **Step 2: Add CSS for reading page**

Reading should feel like the cleanest, most focused page in the app. Minimal chrome, the hexagram and the text.

- [ ] **Step 3: Verify**

Navigate to `/reading/test123`, `/reading/abc`, etc. Same seed should always produce the same hexagram. Click "Reading" in nav to generate fresh seeds.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/views/pages/reading.js site/css/main.css
git commit -m "feat: reading flow with seeded PRNG and shareable URLs"
```

---

## Task 9: Implement about page and 404 page

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/site/js/views/pages/about.js`
- Create: `/Users/jess/dev/divination/site/js/views/pages/error404.js`

- [ ] **Step 1: Draft about page content**

Write 3-4 short sections:
- *What this is* - one paragraph describing the system as a divination tool
- *How a reading works* - one paragraph explaining the cast and trajectory reading
- *How to use it well* - the chaos-magic both/and stance, briefly
- *Notes on origins* - acknowledging the I Ching as ancestor, our process, the CC0/MIT licensing

Each section ~150-250 words. Voice consistent with the corpus.

- [ ] **Step 2: Implement about.js**

Render the four sections. Title: `'<projectname> | About'`.

- [ ] **Step 3: Implement error404.js**

Lift from i-ching, light edits. Show "Page not found" with a link to home.

- [ ] **Step 4: Verify**

Navigate to `/about` and to `/anything-else-404`.

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add site/js/views/pages/about.js site/js/views/pages/error404.js
git commit -m "feat: about page and 404 page"
```

---

## Task 10: Tests

**Subagent-driven.** Mirror i-ching's smoke test pattern.

**Files:**
- Create: `/Users/jess/dev/divination/test/smoke.test.js`

- [ ] **Step 1: Read i-ching's test file**

`/Users/jess/dev/i-ching/test/smoke.test.js`

- [ ] **Step 2: Write smoke tests**

- PRNG determinism (seeded twice with same seed → same output)
- PRNG varies across seeds
- Coin-flip output pinned for known seed (regression test)
- Trigrams data shape: 8 entries with required fields
- Hexagrams data shape: 64 entries with required fields, no name duplicates, all patterns unique

- [ ] **Step 3: Verify tests pass**

```bash
cd /Users/jess/dev/divination
node --test
```

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add test/
git commit -m "test: smoke tests for PRNG and data shape"
```

---

## Task 11: Deployment setup (netlify.toml, README, LICENSE files)

**Subagent-driven.**

**Files:**
- Create: `/Users/jess/dev/divination/netlify.toml`
- Create: `/Users/jess/dev/divination/README.md`
- Create: `/Users/jess/dev/divination/LICENSE` (MIT)
- Create: `/Users/jess/dev/divination/LICENSE-content` (CC0)

- [ ] **Step 1: Create netlify.toml**

Lift from i-ching, adapt project name. Same publish dir and SPA redirect.

- [ ] **Step 2: Create README.md**

Sections:
- Project name + one-line tagline
- Brief description of the system (drawing from substrate's intent statement)
- Licensing (MIT for code, CC0 for content)
- Running locally
- Tests
- Project structure
- Routing
- Regenerating JSON
- Deploy

Mirror i-ching's README structure.

- [ ] **Step 3: Create LICENSE (MIT)**

Standard MIT license, with the user's name and current year.

- [ ] **Step 4: Create LICENSE-content (CC0)**

Lift the canonical CC0 1.0 text from i-ching's LICENSE-translation. (Already canonical there.)

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add netlify.toml README.md LICENSE LICENSE-content
git commit -m "chore: deployment setup, README, licenses"
```

---

## Task 12: Final polish and hand off

**Controller-executed; collaborative.**

- [ ] **Step 1: Manual browser walkthrough**

Run `npx serve -s site` and walk through every page:
- Home
- A trigram detail (try all 8)
- A hexagram detail (sample 4-5)
- A reading
- About
- A bad URL → 404

Note any UI issues, layout breaks, content gaps.

- [ ] **Step 2: Theme toggle test**

Toggle dark/light/auto in each page. Verify no FOUC, no broken layouts.

- [ ] **Step 3: Mobile responsive check**

Resize browser or use device emulator. Verify the home grids and reading page work at narrow widths.

- [ ] **Step 4: Surface any issues to user; iterate**

Present findings; fix what needs fixing.

- [ ] **Step 5: Hand off**

> Phase 5 deliverable is a working static site. Run `npx serve -s site` to view locally. To deploy: connect the repo to Netlify (the netlify.toml already configures publish dir and SPA redirect). All 5 phases of the project are now complete.

---

## Definition of done for Phase 5

Phase 5 is complete when:

1. The static site runs locally (`npx serve -s site`) without errors.
2. All routes render: home, trigram/:pattern, hexagram/:id, reading/:seed, about, 404.
3. SVG glyphs render correctly for all 8 trigrams and all 64 hexagrams.
4. A reading is reproducible from its seed URL.
5. Theme toggle works without FOUC.
6. Smoke tests pass (`node --test`).
7. README, licenses, and netlify.toml are in place.
8. The user has done a manual walkthrough and approved the result.

Once met, the project is ready to deploy.
