# Phase 1 (Analyze) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce `docs/analysis.md` ("What the I Ching Is For") - a ~1-2 page functional analysis of the I Ching that gates moving to Phase 2.

**Architecture:** Read across the corpus we have direct access to (the just-completed Wilhelm translation in the sibling i-ching repo), supplement with freely available contemporary commentary (Hatcher's free Word-by-Word PDF), source Karcher and Balkin via reviews and summaries since their works are commercially published and not in our local corpus. Take per-source observation notes, then synthesize the answers to four core questions into the final document.

**Tech Stack:** Markdown writing; WebFetch / WebSearch for online sources; reading existing files in `/Users/jess/dev/i-ching/translation/` and `/Users/jess/dev/i-ching/site/data/`.

**Note on TDD-equivalent:** This phase is research and writing, not code. The disciplined equivalent is *defining success criteria before generating answers*. Task 1 scaffolds `docs/analysis.md` with the four questions as section headers; subsequent tasks fill them in from the source material. The "test" is whether the final document answers each question concisely and from sourced evidence.

---

## Task 1: Scaffold the analysis document with the four success criteria

**Files:**
- Create: `/Users/jess/dev/divination/docs/analysis.md`

- [ ] **Step 1: Write the scaffold**

Write the following content to `/Users/jess/dev/divination/docs/analysis.md`:

```markdown
# What the I Ching Is For

A short functional analysis of the I Ching, used as input to Phase 2 (distill) of the modern divination system project. Functional rather than historical: what the system does, not where it came from.

## What model of change does the I Ching use?

(To be filled.)

## What does it offer the consulter?

(To be filled.)

## What makes it work as a divination tool?

(To be filled.)

## What is structurally universal vs. culturally/historically specific?

(To be filled.)

## Sources

(List of sources consulted, with notes on depth.)
```

- [ ] **Step 2: Commit the scaffold**

```bash
cd /Users/jess/dev/divination
git add docs/analysis.md
git commit -m "docs: scaffold analysis document with four core questions"
```

---

## Task 2: Extract observations from our Wilhelm translation

The just-completed Wilhelm translation is the primary source we have direct access to. Read across a representative sample and capture how the corpus answers each of the four questions.

**Files:**
- Read: `/Users/jess/dev/i-ching/translation/hexagrams-wilhelm.json`
- Read: `/Users/jess/dev/i-ching/site/data/trigrams.json`
- Read: `/Users/jess/dev/i-ching/translation/style-guide.md`
- Create: `/Users/jess/dev/divination/docs/notes/01-wilhelm-observations.md`

- [ ] **Step 1: Read the trigram corpus and the style guide**

Use the Read tool on the three files above. The trigrams file is small (8 entries). The style guide records terminology decisions made during translation and is useful context for what was preserved vs adapted.

- [ ] **Step 2: Read a representative sample of hexagrams**

Sample selection: hexagrams 1, 2 (the two pure poles), 11, 12 (Peace and Stagnation - paired structurally), 24 (Return - cyclical change), 44 (Coming to Meet - subtle line-position importance), 63, 64 (After Completion / Before Completion - the closing pair). Eight hexagrams gives enough breadth without re-reading the whole corpus.

For each, use the Read tool to read its entry from `/Users/jess/dev/i-ching/translation/hexagrams-wilhelm.json`. Note: the file is one large JSON object; you'll likely need to read it in chunks or grep for specific hexagram numbers.

- [ ] **Step 3: Write observations to notes**

Write `/Users/jess/dev/divination/docs/notes/01-wilhelm-observations.md` with sections corresponding to the four questions. For each, capture 3-5 bullet points of what the Wilhelm corpus shows. Cite hexagram numbers as evidence. Length: ~400-600 words.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/01-wilhelm-observations.md
git commit -m "docs: capture observations from Wilhelm translation"
```

---

## Task 3: Source contemporary commentary - Hatcher (freely available)

Bradford Hatcher's *Yijing Word by Word* is a free 2-volume PDF and the most academically rigorous freely-available commentary. Use it for the structural/lexical bones angle.

**Files:**
- WebSearch + WebFetch
- Create: `/Users/jess/dev/divination/docs/notes/02-hatcher-observations.md`

- [ ] **Step 1: Locate Hatcher's free PDFs**

Run WebSearch: `"Bradford Hatcher" "Word by Word" Yijing PDF download`

From results, identify the canonical hosting site for his work (the landscape research at `docs/research/2026-04-25-existing-landscape.md` cites `yijing.nl/books/Hatcher.html` as one entry point, but verify with the search results which is most current).

- [ ] **Step 2: Fetch the introductory or framing material**

WebFetch the most relevant URL (likely his preface, introduction, or volume 1 front matter) with: "Summarize Hatcher's framing of what the I Ching is, how it works as a divination tool, his model of change, and what he treats as essential vs incidental. Quote 2-3 representative passages if possible."

If the PDF itself can't be fetched directly, fall back to a review or summary page that quotes substantively from the introduction.

- [ ] **Step 3: Write observations to notes**

Write `/Users/jess/dev/divination/docs/notes/02-hatcher-observations.md`. Same structure as the Wilhelm notes: four-question sections, with Hatcher's perspective on each. Be honest about what we read directly vs paraphrased. Length: ~300-400 words.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/02-hatcher-observations.md
git commit -m "docs: capture observations from Hatcher's Word by Word"
```

---

## Task 4: Source contemporary commentary - Karcher (via reviews and Eranos materials)

Stephen Karcher's books are commercially published and not in our local corpus. Source his perspective via reviews, the Eranos Foundation I Ching Project background, his author page, and any sample readings posted online.

**Files:**
- WebSearch + WebFetch
- Create: `/Users/jess/dev/divination/docs/notes/03-karcher-observations.md`

- [ ] **Step 1: WebSearch for Karcher's framing**

Run WebSearch: `Stephen Karcher "Total I Ching" myths change Eranos approach`

From results, identify 2-3 sources that describe his approach (publisher pages, in-depth reviews, his own essays).

- [ ] **Step 2: WebFetch the most informative source**

WebFetch the highest-signal URL with: "Summarize Stephen Karcher's approach to the I Ching: what he treats as the I Ching's essential function, how he reframes it (the myth/archetype angle), what he considers culturally specific vs universal, and how his readings differ from Wilhelm's. Quote 1-2 representative passages if available."

If multiple sources are needed, fetch up to 3.

- [ ] **Step 3: Write observations to notes**

Write `/Users/jess/dev/divination/docs/notes/03-karcher-observations.md`. Same four-question structure. Mark this clearly as paraphrased-from-secondary-sources rather than read directly. Length: ~300-400 words.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/03-karcher-observations.md
git commit -m "docs: capture observations from Karcher (via secondary sources)"
```

---

## Task 5: Source contemporary commentary - Balkin (via reviews and his Yale page)

Jack Balkin's *The Laws of Change* is also commercial. Source via reviews, his Yale Law School faculty page, any abstracts or chapters he's posted.

**Files:**
- WebSearch + WebFetch
- Create: `/Users/jess/dev/divination/docs/notes/04-balkin-observations.md`

- [ ] **Step 1: WebSearch for Balkin's framing**

Run WebSearch: `Jack Balkin "Laws of Change" I Ching philosophy decision approach`

From results, identify Balkin's Yale page (`jackbalkin.yale.edu`), publisher description, and 1-2 substantive reviews.

- [ ] **Step 2: WebFetch the most informative source**

WebFetch with: "Summarize Jack Balkin's approach to the I Ching: how he reframes it as a philosophy-of-life manual rather than a magical tool, what model of change he treats as central, what he considers the divinatory mechanism's actual function, and how he handles the culturally specific vs universal question. Quote 1-2 representative passages if available."

If multiple sources are needed, fetch up to 3.

- [ ] **Step 3: Write observations to notes**

Write `/Users/jess/dev/divination/docs/notes/04-balkin-observations.md`. Same four-question structure. Mark as paraphrased-from-secondary-sources. Length: ~300-400 words.

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/04-balkin-observations.md
git commit -m "docs: capture observations from Balkin (via secondary sources)"
```

---

## Task 6: Synthesize structural vs cultural distinction

This is the most original part of Phase 1. Based on the four prior notes files, identify what feels structurally universal (works across cultures and centuries because it captures something real about change/situations) vs locally Chinese-cultural (Bronze Age agrarian imagery, Confucian/Daoist substrate, feudal hierarchy, gendered cosmology).

**Files:**
- Read: all four notes files from Tasks 2-5
- Create: `/Users/jess/dev/divination/docs/notes/05-structural-vs-cultural.md`

- [ ] **Step 1: Re-read the four observation notes**

Use the Read tool on:
- `/Users/jess/dev/divination/docs/notes/01-wilhelm-observations.md`
- `/Users/jess/dev/divination/docs/notes/02-hatcher-observations.md`
- `/Users/jess/dev/divination/docs/notes/03-karcher-observations.md`
- `/Users/jess/dev/divination/docs/notes/04-balkin-observations.md`

- [ ] **Step 2: Draft a structural vs cultural distinction**

Write `/Users/jess/dev/divination/docs/notes/05-structural-vs-cultural.md` with two clearly labeled sections:

**Structural (likely universal):** examples might include - binary primitive states; compositional layering of states into composite situations; mutating states (the changing-line mechanism); image-based rather than rule-based answer; situation-as-pattern rather than situation-as-event.

**Cultural / historically specific:** examples might include - feudal/court imagery (the prince, the great man); strict gendered cosmology (yang as masculine/active, yin as feminine/passive); specific Bronze Age objects and animals (jade, the cauldron, particular horses); Confucian/Daoist moral scaffolding; the King Wen sequence as an authoritative ordering.

Each item gets one short justification line. Length: ~400-500 words. Be specific; vague distinctions don't help Phase 2.

- [ ] **Step 3: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/05-structural-vs-cultural.md
git commit -m "docs: distinguish structural vs cultural elements of I Ching"
```

---

## Task 7: Draft `docs/analysis.md` from the working notes

Now synthesize the working notes into the final 1-2 page document. Replace the four "(To be filled.)" placeholders.

**Files:**
- Read: all five notes files in `docs/notes/`
- Modify: `/Users/jess/dev/divination/docs/analysis.md`

- [ ] **Step 1: Re-read all working notes**

Use the Read tool on the five files in `/Users/jess/dev/divination/docs/notes/01-` through `05-`.

- [ ] **Step 2: Write the four answer sections**

Edit `/Users/jess/dev/divination/docs/analysis.md`. For each of the four "(To be filled.)" sections, write a synthesis answer drawing from the notes. Constraints:

- Each section: 100-200 words. The whole document should land at ~1-2 pages (roughly 600-900 words total including the existing scaffolding text).
- Voice: clean, structured, plain language. No academic hedging. No jargon (per spec foundational principle 3).
- Where sources disagree, name the disagreement briefly rather than papering over it.
- For "what is structurally universal vs culturally specific", use the work from Task 6 directly.

- [ ] **Step 3: Fill in the Sources section**

Replace the placeholder Sources section with a brief enumeration of what was consulted and at what depth:
- Wilhelm 1924 (translated by Claude/Jess Hewitt 2026, full corpus, primary source)
- Hatcher (Word by Word, depth varies based on what was accessible)
- Karcher (paraphrased from secondary sources)
- Balkin (paraphrased from secondary sources)
- Cross-references to landscape research at `docs/research/2026-04-25-existing-landscape.md`

- [ ] **Step 4: Commit the draft**

```bash
cd /Users/jess/dev/divination
git add docs/analysis.md
git commit -m "docs: draft analysis document from working notes"
```

---

## Task 8: Self-review and tighten

Look at the draft with fresh eyes. Apply the same self-review checklist used on the design spec.

**Files:**
- Modify: `/Users/jess/dev/divination/docs/analysis.md`

- [ ] **Step 1: Length check**

Read the document. Count approximate words. Target: 600-900. If over 1000, cut. If under 500, expand the thinnest section.

- [ ] **Step 2: Coverage check**

Each of the four section headers should have a substantive answer, not a one-liner. The "structurally universal vs culturally specific" section in particular should have concrete items, not generalities.

- [ ] **Step 3: Jargon and voice check**

Search for forbidden vocabulary (per spec foundational principle 3): *attractor, feedback, entropy, synchronicity, archetype, vibration*. Also check for academic hedges (*it might be argued that, one could suggest, in some sense*). Strike or replace.

- [ ] **Step 4: Internal consistency check**

The four answers should be coherent with each other - not contradicting. The "structural vs cultural" answer should be consistent with what was named as essential in the other three.

- [ ] **Step 5: Apply edits inline**

Make any necessary edits using the Edit tool.

- [ ] **Step 6: Commit revisions**

```bash
cd /Users/jess/dev/divination
git add docs/analysis.md
git commit -m "docs: tighten analysis document after self-review"
```

(Skip this commit if no revisions were needed.)

---

## Task 9: Hand off to user for review

Phase 1's deliverable is now complete. Ask the user to review.

- [ ] **Step 1: Show the final document**

Use the Read tool on `/Users/jess/dev/divination/docs/analysis.md` and present the full content to the user.

- [ ] **Step 2: Request review**

Ask the user:

> Phase 1 deliverable is committed at `docs/analysis.md`. Working notes are in `docs/notes/01-` through `05-`. Please review the analysis. If approved, the next step is the Phase 2 plan (distillation - identifying what to keep, drop, and rebuild from this analysis).

- [ ] **Step 3: Iterate or proceed**

If user requests changes, edit the analysis and re-commit. If user approves, mark Phase 1 complete and offer to invoke writing-plans for Phase 2.

---

## Definition of done for Phase 1

Phase 1 is complete when:

1. `docs/analysis.md` exists, is ~1-2 pages, answers all four core questions concisely.
2. Working notes (`docs/notes/01-` through `05-`) document the source-by-source observations underlying the analysis.
3. The user has reviewed and approved the analysis document.
4. We can articulate (in conversation) the structural vs cultural distinction without re-reading the doc.

Once met, transition to writing-plans for Phase 2.
