# Modern Divination System - Design

Date: 2026-04-25
Status: Approved (brainstorming complete; ready for implementation planning)

## Context

A new project to design and ship a modern divination system using the I Ching as ancestor rather than canon. Sibling/successor to the just-shipped [i-ching site](../../../i-ching), which provides a clean public-domain reference and casting interface for Wilhelm's 1924 translation. This new project takes the structural bones of the I Ching and rebuilds the meaning from a contemporary, eclectic substrate.

Done in chaos magic spirit: the system is built bespoke, treats belief as a tool, and refuses commitment to any single grounding framework (psychology, systems theory, etc.). Same publishing ethos as the i-ching site: free, ad-free, minimalist, public-domain content.

## Scope decisions (settled during brainstorming)

- **Radicalness**: structural reinterpretation + inspired-by reconstruction (the I Ching as one ancestor, not the source).
- **Conceptual base**: eclectic / syncretic. No single grounding framework. Multiple contemporary lenses contribute to the substrate without any one being load-bearing.
- **Architectural elements preserved**: binary lines, 64 hexagrams, changing-lines mechanic.
- **Open to redesign**: composition rule (whether trigram pairs survive), organizing axis, content/meaning, casting mechanism, voice.
- **Audience**: the author first, but shipped free and minimal so others can use it - same ethos as the i-ching site.

## Landscape positioning

The full research is at [`docs/research/2026-04-25-existing-landscape.md`](../../research/2026-04-25-existing-landscape.md). Summary of gaps the new project occupies:

1. No widely known *eclectic, multi-framework structural reinterpretation* exists. James DeKorne's *Gnostic Book of Changes* is the closest precedent, but commits to Jung+Kabbalah as ground.
2. Apps in the space are either reverent traditional reference or thin LLM-wrappers. Nobody has shipped an app whose *content itself* is reinterpreted.
3. Visual/interaction language is uniformly conservative - the i-ching site is already more design-conscious than the field, and there is room for more.
4. Trigram-pair semantics rebuilt from a contemporary syncretic vocabulary is unoccupied territory.
5. The changing-lines mechanic is universally treated as inherited rather than reinterpreted.

## Phasing & deliverables

The work proceeds in five phases. Each ends with a concrete deliverable that gates the next.

### Phase 1 - Analyze

Read deeply across the I Ching corpus and key contemporary commentaries to identify what the system is fundamentally trying to do.

Sources: the just-shipped Wilhelm translation as primary; Karcher (myth/archetype angle); Balkin (philosophical/decision angle); possibly Hatcher (lexical bones).

**Output**: short document `docs/analysis.md`, ~1-2 pages, titled *What the I Ching Is For*. Functional rather than historical.

**Done when** we can answer concisely:
- What model of change does it use?
- What does it offer the consulter?
- What makes it work as a divination tool?
- What is culturally/historically specific vs. structurally universal?

### Phase 2 - Distill

From the analysis, identify the essentials: what to keep, what to drop, what to rebuild.

**Output**: a list of architectural and functional invariants in `docs/essentials.md` (e.g. "binary primary states", "compositional pairing into 64", "mutating states", "image-based rather than rule-based").

**Done when** we can articulate what the new system MUST have, MUST NOT have, and what is open to design choice.

### Phase 3 - Rebuild the worldview

Write the substrate the new system rests on.

**Output**: structured worldview document at `docs/substrate.md` with the following sections:

1. *What this system is for* - intent statement, what it does and doesn't claim
2. *The two primary states* - the new yin/yang: nature, names, range
3. *The eight primary forces* - the new trigrams: nature, names, range, internal logic of the eight as a set
4. *Composition* - how trigrams combine into the 64 (still upper/outer + lower/inner? if so, justified from the new substrate, not inherited)
5. *Change* - what changing lines mean now, the mutation mechanic
6. *Casting* - how a reading is invoked
7. *Stance* - how to consult it well; the chaos-magic both/and on belief
8. *Style guide* - voice, imagery, length conventions for the entries

**Done when** we can sit down and write any one of the 72 entries from it without ad-hoc invention.

### Phase 4 - Write

Generate the 8 trigram entries + 64 hexagram entries. Done in batches: starting with the 8 trigrams, then the 8 "pure" hexagrams (each trigram doubled), then iterating through the rest.

**Output**: full content corpus in `content/trigrams.mjs` and `content/hexagrams.mjs` (inline JS objects, building to JSON via `content/build.mjs` - same pattern as i-ching's `translation/build.mjs`).

**Done when** all 72 entries read coherently and a stranger could pick any one and use it.

### Phase 5 - Build

Static web app, in the same family as the i-ching site.

**Output**: live deployed site.

**Done when** it ships.

## Foundational principles

Six principles steer decisions throughout the project.

1. **Voice: thoughtful friend.** Plain, present-tense language. Not a scholar, not an oracle, not a coach. Someone who has spent real time with the system and is telling you what they see. No academic hedging, no mystical pronouncement.
2. **Image-grounded.** Every entry centers on a concrete situation or image, not an abstract claim. The original I Ching does this well ("treading on the tail of the tiger") - keep that level of grounded specificity, with contemporary or universal imagery. Avoid pure-abstract entries.
3. **No jargon.** None of: systems-theory terms (attractor, feedback, entropy), mystical terms (synchronicity, archetype, vibration), academic hedges, AI-jargon. The substrate may draw freely from these as scaffolding; the surface speaks plainly.
4. **Coherence with substrate.** Every entry is derivable from the underlying worldview. The 8 trigrams' meanings show up consistently across the 64 hexagrams. Someone who reads the substrate sees how each entry expresses it; someone who doesn't can still use the entries cold.
5. **Approachable cold.** No required background - no I Ching knowledge, no chaos magic familiarity, no philosophical frame. Someone landing on a single hexagram from a search result should be able to use it.
6. **Same publishing ethos as i-ching.** Free, ad-free, minimal. Public-domain content (CC0), MIT code, no analytics, no runtime LLM, no third-party dependencies the reader has to trust.

## Entry templates

### Trigram entry (8 total)

The foundational forces. Richer treatment than hexagrams.

- *Name* - in plain English or an evocative coined term
- *Glyph* - reuse the Unicode trigram glyphs (☰ ☳ ☵ ☶ ☷ ☴ ☲ ☱) for the bones
- *Core sense* - one line
- *Description* - 1-2 short paragraphs on the force's nature
- *Range* - 3-5 concrete examples showing where the force appears across domains (inner life, relationships, work, world events) - grounds the abstraction
- *In combination* - one line on how this force shows up when paired with another (or defer to the hexagram entries)

**Target length**: 200-300 words per trigram entry.

### Hexagram entry (64 total)

- *Number* + *glyph* + *composition* (above + below trigrams)
- *Name* - short evocative name
- *Core sense* - one line
- *Image / situation* - 3-5 sentences, image-grounded, present-tense
- *Six line readings* - one short sentence per line, surfaced only when that line is the changing line in a reading

**Target length**: 100-150 words for the main body, plus the six line readings.

### Surfaced About / How-to-use (in-app)

Short pieces, each ~200-300 words: *What this is*, *How a reading works*, *How to use it well*, *Notes on origins* (acknowledging the I Ching as ancestor + our process).

## Web app architecture

Inherits from the i-ching site. Same stack and shape:

- Vanilla JS, no framework, no build step for the app (a small build script generates JSON from authored content)
- Static site
- History API routing with click interception
- Tagged-template html helper
- Seeded PRNG (xmur3 + mulberry32) for reproducible readings
- Service worker for offline support
- PWA manifest
- CSS custom properties + prefers-color-scheme + theme toggle

### Pages

- `/` - grid of 64 hexagram glyphs + 8 trigram glyphs (like i-ching)
- `/trigram/:value` - trigram detail (rich, per template)
- `/hexagram/:id` - hexagram detail (per template)
- `/reading/:seed` - reading flow (cast → display → read; seed in URL, reproducible/shareable)
- `/about` - the surfaced About sections
- `/error` - 404

### Visual identity

Broadly similar warm-minimalist register to i-ching - probably the same font family (Lora-ish), possibly a different accent color and glyph treatment to mark the differentiation. Specifics deferred to Phase 5.

## Repository structure

Mirrors i-ching with a couple of additions:

```
divination/
  README.md
  LICENSE                 (MIT for code)
  LICENSE-content         (CC0 for substrate + entries)
  docs/
    research/             (already created; landscape map lives here)
    analysis.md           (Phase 1 output)
    essentials.md         (Phase 2 output)
    substrate.md          (Phase 3 output - the worldview document)
    superpowers/specs/    (this design doc lives here)
  site/                   (the static app; mirrors i-ching/site/)
  content/
    build.mjs             (generates JSON from inline JS - equivalent of translation/build.mjs)
    trigrams.mjs
    hexagrams.mjs
  test/
    smoke.test.js
  netlify.toml
```

## Ways of working

Mirrors how we worked on i-ching: incremental, the user steers, Claude proposes and executes. Key collaboration touch-points by phase:

- **Phase 1 (analyze)**: Claude reads across the corpus, synthesizes; user reacts.
- **Phase 2 (distill)**: Claude proposes the essentials; user accepts or revises.
- **Phase 3 (substrate)**: Heaviest collaboration. Worked through each substrate section together - this is where the user's chaos-magic context shapes what the system means.
- **Phase 4 (write)**: Claude drafts; user edits. Same workflow as the Wilhelm translation.
- **Phase 5 (build)**: Mostly mechanical. Claude implements; user reviews.

## Naming

The project still needs a name. "I Ching" obviously won't fit; "divination" is the directory name but probably not the artifact's name. **Deferred until after Phase 3** - the worldview will likely suggest a name.

## Open questions parked for Phase 2/3

These don't need to be answered now - they will surface from the analysis and worldview work:

- Whether trigram pairs remain the composition rule, or 64 organizes along a different axis
- Whether yin/yang get renamed (and to what), or stay as the abstract binary
- Whether the 8 trigrams keep something close to their original named forces (heaven/earth/thunder/wind etc.) or get fully renamed
- The casting mechanism (3 coins likely, but the *naming* of the act might shift)
- Whether the hexagrams have a sequence (King Wen analog) or are flat / differently ordered

## Risks and mitigations

- **Phase 1 / 2 expansion**: the analysis and distillation phases could expand without limit. *Mitigation*: hold to the deliverable as the finish criterion - a 1-2 page document for analysis, a clear list for distillation.
- **Substrate incoherence**: with no single grounding framework, the substrate could fragment into a list of unrelated influences. *Mitigation*: Phase 3 is heavy collaboration; we explicitly check coherence by asking whether all 8 trigrams sit naturally in the same world.
- **Voice drift across 72 entries**: maintaining a consistent voice across that much writing is hard. *Mitigation*: write trigrams first (8 entries set the voice), then the 8 pure hexagrams (validate at scale), then iterate.
- **Slipping into "modern Wilhelm"**: a real risk if Phase 3 isn't strong. *Mitigation*: success criterion for Phase 3 is being able to write any entry from the substrate without ad-hoc invention - if we keep falling back on Wilhelm-isms, the substrate isn't doing its job.
