# Phase 4 (Write) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the full content corpus for the modern divination system: 8 trigram (channel-state) entries + 64 hexagram (channel-trajectory) entries, all derived from `docs/substrate.md` and stored as inline JS objects that build to JSON for the static web app.

**Architecture:** Content lives in `content/` (parallel to i-ching's `translation/`). Each content file holds inline JS objects; a build script writes them to `site/data/*.json`. Phase 4 fills these files in batches with collaborative review at natural checkpoints.

**Tech Stack:** Markdown writing for the entries themselves; Node.js for the build script; JSON for the data the web app consumes.

**Note on scope:** Phase 4 is the heaviest content task in the project. 72 entries total. Writing is creative work that needs the substrate and style guide in mind for every entry; consistency across the corpus matters as much as individual entry quality. Plan structure batches the work so consistency can be checked between batches.

**Note on TDD-equivalent:** Same as prior phases - the "test" is whether each entry, read cold by a stranger, is usable as a divination prompt. Each batch ends with a self-review against this criterion before moving on.

---

## Task 1: Set up `content/` infrastructure

**Controller-executed.** Mechanical setup - mirrors i-ching's `translation/` pattern.

**Files:**
- Create: `/Users/jess/dev/divination/content/build.mjs`
- Create: `/Users/jess/dev/divination/content/trigrams.mjs` (scaffold)
- Create: `/Users/jess/dev/divination/content/hexagrams.mjs` (scaffold)
- Create: `/Users/jess/dev/divination/site/data/.gitkeep`

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p /Users/jess/dev/divination/content
mkdir -p /Users/jess/dev/divination/site/data
touch /Users/jess/dev/divination/site/data/.gitkeep
```

- [ ] **Step 2: Write `content/build.mjs`**

Create `/Users/jess/dev/divination/content/build.mjs` with content following i-ching's `translation/build.mjs` pattern:

```javascript
// Constructs site/data/trigrams.json and site/data/hexagrams.json
// from inline JS object arrays in trigrams.mjs and hexagrams.mjs.
import fs from 'node:fs/promises'
import {trigrams} from './trigrams.mjs'
import {hexagrams} from './hexagrams.mjs'

await fs.writeFile('./site/data/trigrams.json', JSON.stringify(trigrams) + '\n')
console.log(`wrote site/data/trigrams.json with ${trigrams.length} entries`)

await fs.writeFile('./site/data/hexagrams.json', JSON.stringify(hexagrams) + '\n')
console.log(`wrote site/data/hexagrams.json with ${hexagrams.length} entries`)
```

- [ ] **Step 3: Write `content/trigrams.mjs` scaffold**

```javascript
// The 8 channel-state entries. Each describes one trigram pattern.
// Patterns read bottom-to-top: bottom = open/closed, middle = focused/distributed,
// top = outward/inward. (1 = open/focused/outward; 0 = closed/distributed/inward.)
export const trigrams = []
```

- [ ] **Step 4: Write `content/hexagrams.mjs` scaffold**

```javascript
// The 64 channel-trajectory entries. Each describes one hexagram (lower trigram = present,
// upper trigram = emerging).
//
// Pattern string reads bottom-to-top: char 1 = line 1 (bottom of lower trigram),
// char 6 = line 6 (top of upper trigram).
// ID = (pattern string interpreted as binary number, leftmost char as MSB) + 1.
// This means the lower trigram is the high 3 bits and the upper trigram is the low 3 bits,
// so IDs cluster by lower trigram (8 IDs per lower trigram value).
//
// Hexagram 1 = pattern '000000' = MONITOR -> MONITOR (all closed/distributed/inward).
// Hexagram 64 = pattern '111111' = TRANSMIT -> TRANSMIT (all open/focused/outward).
export const hexagrams = []
```

- [ ] **Step 5: Verify build runs (with empty arrays)**

```bash
cd /Users/jess/dev/divination
node content/build.mjs
```

Expected: prints "wrote site/data/trigrams.json with 0 entries" and "wrote site/data/hexagrams.json with 0 entries". Files created (empty arrays in JSON).

- [ ] **Step 6: Commit setup**

```bash
cd /Users/jess/dev/divination
git add content/ site/data/.gitkeep
git commit -m "chore: scaffold content/ build infrastructure"
```

---

## Task 2: Write the 8 trigram entries

**Subagent-driven.** Material largely already drafted in `docs/notes/09-channel-states.md`. Task is to formalize as JS objects with consistent fields.

**Files:**
- Read: `/Users/jess/dev/divination/docs/substrate.md` (Section 3 + style guide)
- Read: `/Users/jess/dev/divination/docs/notes/09-channel-states.md`
- Modify: `/Users/jess/dev/divination/content/trigrams.mjs`

- [ ] **Step 1: Define the schema for trigram entries**

Each entry has these fields:

```javascript
{
    id: 1,                         // 1-8, ordered by binary value of pattern + 1
    pattern: '000',                // 3 chars, bottom-to-top, '1' = open/focused/outward, '0' = closed/distributed/inward
    name: 'MONITOR',               // capitalized name from the signal/comms register
    glyph: '☷',                   // Unicode trigram glyph
    coreSense: '...',              // one-line characterization
    description: '...',            // 1-2 paragraphs, prose
    range: {                       // 5 domain examples
        innerLife: '...',
        relationships: '...',
        work: '...',
        body: '...',
        world: '...',
    },
    inCombination: '...',          // one line on what this brings to a hexagram
}
```

Glyph mapping (Unicode trigrams U+2630-U+2637):
- 000 (MONITOR) = ☷
- 001 (STANDBY) = ☶
- 010 (TUNE) = ☵
- 011 (AIM) = ☴
- 100 (SCAN) = ☳
- 101 (BROADCAST) = ☲
- 110 (RECEIVE) = ☱
- 111 (TRANSMIT) = ☰

(Note: glyph mapping needs verification - the original I Ching's trigram glyph assignments use yang=solid; in our system, on=solid. So a pattern with on at top has solid line at top of glyph.)

- [ ] **Step 2: Write all 8 entries**

For each of the 8 channel states, lift content from `docs/notes/09-channel-states.md` and format as a JS object per the schema. Order entries by binary value of pattern (id = binary + 1), so trigrams.mjs reads MONITOR (id 1), STANDBY (id 2), TUNE (id 3), AIM (id 4), SCAN (id 5), BROADCAST (id 6), RECEIVE (id 7), TRANSMIT (id 8).

Each entry's text comes from notes/09 with light editing for fit.

- [ ] **Step 3: Verify build produces valid JSON**

```bash
cd /Users/jess/dev/divination
node content/build.mjs
```

Expected: "wrote site/data/trigrams.json with 8 entries". JSON file should be valid and contain all 8 entries.

- [ ] **Step 4: Self-review the 8 entries**

Read all 8 entries together. Check:
- Voice consistent across all 8 (thoughtful-friend, image-grounded, present-tense)
- No mixed metaphors (all in signal/communications register)
- No banned jargon (attractor, feedback, entropy, synchronicity, archetype, vibration)
- No em dashes
- Each entry's range examples are concrete and varied across domains

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add content/trigrams.mjs site/data/trigrams.json
git commit -m "content: write the 8 trigram (channel-state) entries"
```

---

## Tasks 3-10: Write the 64 hexagram entries in 8 batches by lower trigram

**Subagent-driven for each batch.** Each batch covers all hexagrams with one specific lower trigram (8 entries per batch: the pure hexagram + 7 mixed). Batching by lower trigram lets each batch develop a coherent voice for "trajectories starting from this channel state."

**Schema for hexagram entries (used in all batches):**

```javascript
{
    id: 1,                          // 1-64, by binary value (lines bottom-to-top, line 1 = LSB) + 1
    pattern: '000000',              // 6 chars, bottom-to-top
    name: '...',                    // a short evocative name (e.g. "Reveille", "Drift", "Held Note")
    glyph: '䷀',                    // Unicode hexagram glyph from U+4DC0-U+4DFF
    lower: 'MONITOR',               // present channel name
    upper: 'TRANSMIT',              // emerging channel name
    coreSense: '...',               // one line
    image: '...',                   // 3-5 sentences, image-grounded, present-tense
}
```

The pure hexagrams (lower == upper) describe stable trajectories - the channel state continuing. The mixed hexagrams describe transitions between distinct states.

### Task 3: Batch 1 - lower MONITOR

8 hexagrams: MONITOR→MONITOR (pure), MONITOR→STANDBY, MONITOR→TUNE, MONITOR→AIM, MONITOR→SCAN, MONITOR→BROADCAST, MONITOR→RECEIVE, MONITOR→TRANSMIT.

The "starting from open availability with no signal arriving" set. Trajectory texts describe what happens when the diffuse-receptive present gives way to each of the 8 emerging states.

**Files:** Modify `/Users/jess/dev/divination/content/hexagrams.mjs`

- [ ] **Step 1: Identify the 8 hexagrams in this batch with their binary patterns and IDs**

Compute pattern strings (bottom-to-top: line 1 line 2 line 3 line 4 line 5 line 6).

For lower MONITOR (lines 1-3 = '000'): patterns are 000XXX where XXX varies.

| Pattern | Upper | ID (binary + 1) | Trajectory |
|---|---|---|---|
| 000000 | MONITOR | 1 | MONITOR → MONITOR (pure) |
| 000001 | STANDBY | 2 | MONITOR → STANDBY |
| 000010 | TUNE | 3 | MONITOR → TUNE |
| 000011 | AIM | 4 | MONITOR → AIM |
| 000100 | SCAN | 5 | MONITOR → SCAN |
| 000101 | BROADCAST | 6 | MONITOR → BROADCAST |
| 000110 | RECEIVE | 7 | MONITOR → RECEIVE |
| 000111 | TRANSMIT | 8 | MONITOR → TRANSMIT |

(Verify line→bit mapping: line 1 is LSB; line 4 is bit 3; pattern reads bottom-to-top so first three chars = lower trigram = lines 1-2-3, last three = upper trigram = lines 4-5-6.)

- [ ] **Step 2: Write 8 entries**

For each entry, derive the trajectory's narrative logic from the substrate's channel-state descriptions. Voice: thoughtful friend. Image-grounded. Present-tense. No prediction, no instruction. ~100-150 words for the image text.

Naming convention: each hexagram gets a short evocative name (1-3 words). Names should feel like they live in the same world as the channel-state names (signal/communications register where natural, but more general words OK if a signal-specific name doesn't fit).

For glyphs: the Unicode hexagram block (U+4DC0-U+4DFF) follows the *King Wen sequence*, NOT binary value. So our binary-based IDs do not map directly to U+4DC0 + (id - 1). Two viable approaches:

(a) Render hexagram glyphs as inline SVG (most flexible, no Unicode lookup needed); set `glyph: null` in entries and let the web app draw the 6 lines from the pattern.

(b) Include a precomputed Unicode codepoint per entry, looked up via the binary-pattern-to-King-Wen lookup table.

Defer the choice to Phase 5 (the web app build). For now, set `glyph: null` and `pattern` is the source of truth.

- [ ] **Step 3: Verify build**

```bash
cd /Users/jess/dev/divination
node content/build.mjs
```

Expected: "wrote site/data/hexagrams.json with 8 entries" (after this batch).

- [ ] **Step 4: Self-review the batch**

Read all 8 entries together. Check:
- Voice consistent
- Each trajectory's logic makes sense given lower=MONITOR
- No mixed metaphors
- No banned jargon, no em dashes
- Names don't repeat across the batch

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add content/hexagrams.mjs site/data/hexagrams.json
git commit -m "content: hexagrams batch 1 (lower MONITOR, 8 trajectories)"
```

### Task 4: Batch 2 - lower STANDBY

8 hexagrams with lower STANDBY: STANDBY→MONITOR, STANDBY→STANDBY, STANDBY→TUNE, STANDBY→AIM, STANDBY→SCAN, STANDBY→BROADCAST, STANDBY→RECEIVE, STANDBY→TRANSMIT.

Patterns: 001XXX. IDs 9-16.

Steps mirror Task 3. Subagent should also read the prior batch's entries (`content/hexagrams.mjs` IDs 1-8) for voice consistency.

Commit message: `content: hexagrams batch 2 (lower STANDBY, 8 trajectories)`

### Task 5: Batch 3 - lower TUNE

8 hexagrams with lower TUNE. Patterns: 010XXX. IDs 17-24.
Steps mirror Task 3. Read prior batches for voice.
Commit: `content: hexagrams batch 3 (lower TUNE, 8 trajectories)`

### Task 6: Batch 4 - lower AIM

8 hexagrams with lower AIM. Patterns: 011XXX. IDs 25-32.
Commit: `content: hexagrams batch 4 (lower AIM, 8 trajectories)`

### Task 7: Batch 5 - lower SCAN

8 hexagrams with lower SCAN. Patterns: 100XXX. IDs 33-40.
Commit: `content: hexagrams batch 5 (lower SCAN, 8 trajectories)`

### Task 8: Batch 6 - lower BROADCAST

8 hexagrams with lower BROADCAST. Patterns: 101XXX. IDs 41-48.
Commit: `content: hexagrams batch 6 (lower BROADCAST, 8 trajectories)`

### Task 9: Batch 7 - lower RECEIVE

8 hexagrams with lower RECEIVE. Patterns: 110XXX. IDs 49-56.
Commit: `content: hexagrams batch 7 (lower RECEIVE, 8 trajectories)`

### Task 10: Batch 8 - lower TRANSMIT

8 hexagrams with lower TRANSMIT. Patterns: 111XXX. IDs 57-64.
Commit: `content: hexagrams batch 8 (lower TRANSMIT, 8 trajectories)`

---

## Task 11: Cross-batch consistency review

**Controller-executed; collaborative.** With all 64 hexagram entries written, do a consistency pass across the whole corpus. The eight batches were each written in isolation; this task catches drift.

**Files:**
- Read: `/Users/jess/dev/divination/content/hexagrams.mjs` (all 64)
- Read: `/Users/jess/dev/divination/content/trigrams.mjs` (all 8)
- Read: `/Users/jess/dev/divination/docs/substrate.md`

- [ ] **Step 1: Read the full corpus**

Use the Read tool on hexagrams.mjs and trigrams.mjs in full.

- [ ] **Step 2: Voice and consistency check across all 64 hexagrams**

For each batch:
- Has the voice drifted? (Compare batch 1 entries against batch 8 entries side by side.)
- Are the channel-state names being used consistently? (TRANSMIT means the same thing in batch 1 as in batch 8.)
- Are the names of hexagrams varied across the corpus? (No accidental name reuse across batches.)
- Are any entries repeating language patterns excessively?

- [ ] **Step 3: Substrate-coherence check**

Pick 4-5 hexagrams at random. For each, verify:
- The trajectory text is derivable from the lower + upper channel state descriptions in the substrate
- No invented properties or claims that aren't in the substrate
- The reading respects the worldview (no prediction, no instruction, no cosmological appeal)

- [ ] **Step 4: Surface inconsistencies to user**

If issues found, present them to the user with proposed fixes. Iterate.

- [ ] **Step 5: Apply fixes inline**

Use Edit on individual entries.

- [ ] **Step 6: Commit revisions if any**

```bash
cd /Users/jess/dev/divination
git add content/hexagrams.mjs site/data/hexagrams.json
git commit -m "content: cross-batch consistency revisions"
```

(Skip if no revisions needed.)

---

## Task 12: Hand off Phase 4 to user

- [ ] **Step 1: Show summary of corpus**

Report to user:
- 8 trigram entries committed
- 64 hexagram entries committed in 8 batches
- Total word count
- Any noted inconsistencies and how they were resolved

- [ ] **Step 2: Pick 3-5 sample entries for review**

Suggest the user review:
- One trigram entry (any)
- One pure hexagram (e.g., MONITOR→MONITOR or TRANSMIT→TRANSMIT)
- One mixed hexagram from early batches (e.g., MONITOR→TRANSMIT)
- One mixed hexagram from late batches (e.g., TRANSMIT→MONITOR)

This gives a representative sample without requiring the user to read all 72.

- [ ] **Step 3: Request review**

Ask the user:

> Phase 4 deliverable is committed. The full corpus (8 trigrams + 64 hexagrams) is in `content/`. Please review the suggested sample entries, plus any others you want to spot-check. If approved, the next step is the Phase 5 plan (the web app build).

- [ ] **Step 4: Iterate or proceed**

If user requests changes (likely on individual entries; full revisions unlikely), edit and re-commit. If approved, mark Phase 4 complete and offer to invoke writing-plans for Phase 5.

---

## Definition of done for Phase 4

Phase 4 is complete when:

1. `content/trigrams.mjs` has all 8 entries; `content/hexagrams.mjs` has all 64 entries.
2. `content/build.mjs` runs cleanly and produces valid JSON.
3. Voice is consistent across the corpus; no batch drift.
4. Sample entries reviewed by user are usable as divination prompts cold.
5. No banned jargon, no em dashes, no mixed metaphors.

Once met, transition to writing-plans for Phase 5 (build the web app).
