# Phase 2 (Distill) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce `docs/essentials.md` - a categorized list of architectural and functional invariants for the new divination system, gating Phase 3 (rebuild the worldview).

**Architecture:** Phase 2 is decision work, not generative writing. Resolve the open questions surfaced by Phase 1 (especially "what is it for" and the Ten Wings architectural entanglement), then catalog every essential and rejected element into a single structured document.

**Tech Stack:** Markdown writing only.

**Note on TDD-equivalent:** This phase is decision-cataloging. The disciplined equivalent is *defining the success criteria before generating the catalog*. Task 1 scaffolds `docs/essentials.md` with the four-section structure; Task 2 collects the user decisions that the catalog needs as inputs; Task 3 compiles. The "test" is whether the final document leaves no architectural or functional question dangling that Phase 3 will need.

**Note on collaboration:** Per the design spec, Phase 2 is the second-most-collaborative phase (after Phase 3). User input is required for the substantive design decisions. Tasks 2 (decision intake) and 5 (final review) are explicitly user-facing.

---

## Task 1: Scaffold `docs/essentials.md` with the four-section structure

**Files:**
- Create: `/Users/jess/dev/divination/docs/essentials.md`

- [ ] **Step 1: Write the scaffold**

Write the following content to `/Users/jess/dev/divination/docs/essentials.md`:

```markdown
# Essentials of the New Divination System

What the new system MUST have, MUST NOT have, and what is open to design choice. Distilled from `docs/analysis.md` and the working notes in `docs/notes/`. Inputs to Phase 3 (rebuild the worldview).

## Functional core

What the system is for, and what it must do to count as that. (To be filled.)

## Architectural invariants

What structural elements of the I Ching the new system inherits as load-bearing. (To be filled.)

## Rejected elements

What we are explicitly NOT bringing forward, and why. (To be filled.)

## Deferred to Phase 3

Open design choices that will be settled by the substrate work in the next phase. (To be filled.)
```

- [ ] **Step 2: Commit the scaffold**

```bash
cd /Users/jess/dev/divination
git add docs/essentials.md
git commit -m "docs: scaffold essentials document"
```

---

## Task 2: Surface open decisions to user, capture their choices

This task is **controller-executed** (not subagent). The decisions need user input and the controller has full context to frame them.

**Files:**
- Read: `/Users/jess/dev/divination/docs/analysis.md`
- Read: `/Users/jess/dev/divination/docs/notes/05-structural-vs-cultural.md`
- Create: `/Users/jess/dev/divination/docs/notes/06-phase-2-decisions.md` (capture the decisions for Task 3 to consume)

- [ ] **Step 1: Re-confirm context**

Use the Read tool on the two files above to make sure controller has the latest analysis and structural-vs-cultural framing in mind before opening the conversation with the user.

- [ ] **Step 2: Present Decision A to the user (functional core)**

The most upstream Phase 2 decision: what is this system for? The four sources from Phase 1 disagree:

- **Wilhelm/Balkin: Orientation.** Locate the consulter in a recognizable pattern; name the appropriate posture for *this* type of moment.
- **Hatcher: Attitude adjustment.** Reframe the consulter's response when habitual thinking has stalled; "the bait is fortune-telling, the substance is choice."
- **Karcher: Transformation through image-contact.** Put the consulter in contact with a living symbolic world; the symbols themselves do the work.
- **Balkin (separable second function): Character formation.** The cumulative use of the system shapes who the consulter is becoming.

Ask the user to pick one as primary, or to state a deliberate blend. This shapes voice, content density, and reading rhythm in Phase 4.

- [ ] **Step 3: Present Decision B to the user (architectural keeps)**

Design spec settled the obvious keeps (binary primitives, 64 hexagrams, changing-line mechanism). Phase 1 surfaced that the less obvious "architecture" actually lives in the Ten Wings (Confucian commentary layer), which Hatcher recommends stripping. Ask the user to decide each:

1. **8 trigrams composing into 64 hexagrams as upper-pair + lower-pair.** Keep, modify, or replace with a different composition rule?
2. **Per-line position semantics** (line 1 = beginning, line 5 = ruling position, etc.). Keep as a structural invariant, keep loosely as a guideline, or drop entirely?
3. **King Wen sequence** as the canonical ordering of the 64. Keep, replace with a different ordering, or treat the 64 as flat/unordered?

For each, present the trade-off briefly, offer a weak recommendation if useful, and let the user decide.

- [ ] **Step 4: Capture decisions in notes file**

Write `/Users/jess/dev/divination/docs/notes/06-phase-2-decisions.md` with:

- The user's answer on Decision A (functional core), in their own framing where possible
- The user's answer on each of Decision B's three sub-questions
- Any caveats, conditions, or "decide later" notes the user added

This file is the input to Task 3.

- [ ] **Step 5: Commit decisions**

```bash
cd /Users/jess/dev/divination
git add docs/notes/06-phase-2-decisions.md
git commit -m "docs: capture Phase 2 user decisions on functional core and architectural keeps"
```

---

## Task 3: Compile `docs/essentials.md` from notes + decisions

This task can be subagent-driven. Inputs are well-defined; output is a structured document.

**Files:**
- Read: all five Phase 1 notes (`docs/notes/01-` through `05-`)
- Read: `docs/notes/06-phase-2-decisions.md` (Task 2 output)
- Read: `docs/analysis.md`
- Modify: `docs/essentials.md` (replace the four "(To be filled.)" placeholders)

- [ ] **Step 1: Re-read inputs**

Use the Read tool on all the input files. Hold them in context together so the synthesis is coherent.

- [ ] **Step 2: Fill in "Functional core"**

From Decision A in `06-phase-2-decisions.md`, write the functional core:

- One-paragraph statement of what the system is for (echoing the user's chosen framing).
- A short list of functional invariants that follow from that choice. E.g. if the choice is "attitude adjustment": must offer a re-frame, not a prediction; must require active interpretation; must work even without belief in the casting; etc.

Length: ~150-250 words.

- [ ] **Step 3: Fill in "Architectural invariants"**

List every architectural element that the new system inherits. For each, note the source (settled by spec / settled by Decision B / settled by analysis).

The settled list (from spec + analysis):
- Binary primitive states (the new yin/yang, with naming deferred to Phase 3)
- 64 distinct composite states
- Changing-line mechanism (states transform into other states)
- Image-based answers, not rule-based
- Situation-as-pattern, not situation-as-event
- Position-within-situation matters (assuming Decision B Step 3 question 2 keeps it)

The Decision-B-dependent list:
- 8 trigrams composing into 64 (or alternative)
- Per-line position semantics (or not)
- King Wen sequence (or alternative)

For each item: one short justification line. Length: ~200-300 words.

- [ ] **Step 4: Fill in "Rejected elements"**

From `docs/notes/05-structural-vs-cultural.md`, list the cultural/historically specific elements being explicitly NOT brought forward. Each gets a one-line explanation. Mostly mechanical extraction from notes 05.

Items expected:
- Feudal/court imagery (the great man, the prince, etc.)
- Strict gendered cosmology (yin = feminine/passive, yang = masculine/active)
- Confucian moral vocabulary (junzi, petty persons, merit hierarchy)
- Bronze Age material imagery as authoritative (jade, cauldron, specific animals)
- Ten Wings as authoritative commentary
- Ancestor-consultation and shen/gui spirit-cosmology as the frame
- Specific astrological/seasonal correspondences from the original

Length: ~150-200 words.

- [ ] **Step 5: Fill in "Deferred to Phase 3"**

List the open design choices that the substrate work will resolve. Pull from the design spec's "Open questions parked for Phase 2/3" section, and add any new ones surfaced during Phase 1 or Phase 2.

Expected items:
- Naming the two primary states (replacing yin/yang)
- Naming the 8 primary forces (replacing the original trigram names)
- The casting mechanism (3 coins likely, but the naming and ritual frame open)
- The eclectic syncretic substrate's actual content (which contemporary domains contribute)
- The voice / aesthetic identity (warm-minimalist register but specifics open)
- Project name

Length: ~100-150 words.

- [ ] **Step 6: Commit the draft**

```bash
cd /Users/jess/dev/divination
git add docs/essentials.md
git commit -m "docs: compile essentials document from Phase 1 + Phase 2 decisions"
```

---

## Task 4: Self-review and tighten

**Files:**
- Modify: `/Users/jess/dev/divination/docs/essentials.md`

- [ ] **Step 1: Length and balance check**

Read `docs/essentials.md`. Total target: 600-900 words across the four sections. Each section in its targeted range (per Task 3 steps). If anything is way over, trim. If under, expand only if there's substantive material missing.

- [ ] **Step 2: Decision-completeness check**

Walk through the analysis questions and the Decision A/B framework. Is anything dangling? In particular:

- Functional core: is there a clear statement of what the system is for?
- Architectural invariants: did the document take a position on each Decision B sub-question?
- Rejected elements: any major cultural item that should be on the list but isn't?
- Deferred items: any open question that Phase 3 will need but isn't flagged?

- [ ] **Step 3: Voice and jargon check**

Same constraints as the analysis: no em dashes; no banned jargon ("attractor", "feedback", "entropy", "synchronicity", "archetype", "vibration") in our own framing; no academic hedges. Clean and direct.

- [ ] **Step 4: Apply edits inline if needed**

Use the Edit tool. If no edits needed, skip to Task 5 without committing.

- [ ] **Step 5: Commit revisions if any**

```bash
cd /Users/jess/dev/divination
git add docs/essentials.md
git commit -m "docs: tighten essentials document after self-review"
```

(Skip if no revisions.)

---

## Task 5: Hand off to user for review

- [ ] **Step 1: Show the final document**

Use the Read tool on `/Users/jess/dev/divination/docs/essentials.md` and present the full content to the user.

- [ ] **Step 2: Request review**

Ask the user:

> Phase 2 deliverable is committed at `docs/essentials.md`. The document captures the functional core (your call), architectural invariants (Decision B), rejected elements, and what we're carrying into Phase 3. Please review. If approved, the next step is the Phase 3 plan (rebuild the worldview - the substrate the new system rests on).

- [ ] **Step 3: Iterate or proceed**

If the user requests changes, edit and re-commit. If approved, mark Phase 2 complete and offer to invoke writing-plans for Phase 3.

---

## Definition of done for Phase 2

Phase 2 is complete when:

1. `docs/essentials.md` exists with all four sections substantive (no placeholders).
2. The functional core is settled with the user's stated framing.
3. The Decision B architectural sub-questions all have answers (keep / modify / drop).
4. The rejected elements catalog is complete enough that Phase 3 won't accidentally bring rejected material back.
5. The deferred items list captures everything Phase 3 will need to settle.
6. The user has reviewed and approved.

Once met, transition to writing-plans for Phase 3.
