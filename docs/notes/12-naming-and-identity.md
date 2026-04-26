# Phase 5 Task 1: Project name and visual identity

## Project name: The Console

Decided pragmatically among the options:
- "The Console" - operator's console (signal/connection routing world); the article makes it brand-distinctive; bonus: *console* also means to comfort, which fits the divinatory/reflective use of the system without being mystical about it.

Reservations to revisit if needed: it's a fairly common word, so search-distinctiveness depends on the article and on whether the rest of the site copy claims the term. Can be revised in a later phase if it doesn't hold up.

## Visual identity direction: B (differentiated minimalism, sans-serif)

Differentiating from the i-ching site (warm-minimalist Lora serif). Same minimalist principles but with a different visual register that signals the divination system's contemporary chaos-magic-tech flavor.

Specifics:
- **Typeface**: sans-serif (NOT monospace, per user). Default candidate: Inter (open, well-established, neutral). Alternatives if Inter doesn't fit: IBM Plex Sans, Source Sans 3.
- **Palette**: desaturated, slightly cool-leaning to distinguish from i-ching's warm cream/dark. Specifics deferred to the CSS task; likely a near-white background with deep grey text in light mode, near-black background with off-white text in dark mode, with one accent color (TBD - candidates: a desaturated teal, a muted blue, or a dark amber).
- **Layout**: similar minimalist structure to i-ching. Similar grid for the home page. Same theme-toggle pattern.
- **Glyphs**: SVG (not Unicode hexagram glyphs - decided in Phase 3 since binary IDs don't map to King Wen Unicode codepoints).

## What this means for downstream tasks

- index.html, manifest.json: brand as "The Console"; theme-color and og tags use the chosen accent color
- CSS: define color palette, font-face for chosen sans-serif (subset and self-host like i-ching does for Lora)
- README, LICENSE: project name "The Console"
- All page titles: "The Console | <page>"

Final font and accent color choices can be made during the CSS task; this note captures the direction.
