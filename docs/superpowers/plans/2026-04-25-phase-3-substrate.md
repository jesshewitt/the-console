# Phase 3 (Rebuild the Worldview) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce `docs/substrate.md` - the worldview the new divination system rests on. Thorough enough that any of the 72 entries (8 trigrams + 64 hexagrams) can be written from it in Phase 4 without ad-hoc invention.

**Architecture:** Phase 3 is the heart of the project. It builds the substrate from scratch via collaborative design sessions. The user drives content (chaos-magic and personal context); the controller proposes structure, drafts based on user input, and surfaces tensions. Each substantive substrate decision (primary states, eight forces, etc.) gets its own task and its own notes file, then the substrate document is compiled at the end.

**Tech Stack:** Markdown writing.

**Note on scope:** Phase 3 is genuinely the largest phase in terms of design work. Tasks 2-5 are collaborative design sessions, each potentially spanning a working session of its own. The plan does not assume one-sitting completion; checkpoints between tasks let work pause naturally.

**Note on TDD-equivalent:** The "test" for Phase 3 is the entry-writability criterion: can we sit down and write any one of the 72 entries from the substrate without ad-hoc invention? Self-review (Task 7) tests this concretely by drafting one or two trial entries from the substrate and seeing if they hold together.

---

## Task 1: Scaffold `docs/substrate.md` and lift settled material

This task is **controller-executed**. The substrate has 8 sections (per the design spec); some are already largely settled by Phase 1/2 work and can be lifted from existing documents. The remaining sections get scaffolded as placeholders for collaborative work in Tasks 2-5.

**Files:**
- Create: `/Users/jess/dev/divination/docs/substrate.md`
- Read: `/Users/jess/dev/divination/docs/essentials.md` (functional core lifts from here)
- Read: `/Users/jess/dev/divination/docs/superpowers/specs/2026-04-25-modern-divination-system-design.md` (style guide bones from "Foundational principles")

- [ ] **Step 1: Lift the functional core into a "What this system is for" section**

The Phase 2 essentials' "Functional core" section is the substrate's intent statement, lightly adapted. Read it and write a substrate-flavored version (it's no longer phrased as "what we're building toward" - it's now phrased as "what this system is").

- [ ] **Step 2: Lift voice/style principles into a "Style guide" section**

The design spec's six foundational principles (thoughtful friend, image-grounded, no jargon, coherence with substrate, approachable cold, ad-free publishing ethos) collapse into a tight style guide for entry writing. Lift and adapt - the publishing-ethos one isn't relevant in the substrate doc, but the other five are.

- [ ] **Step 3: Draft a placeholder "Stance toward divination" section**

The chaos-magic both/and on belief is the answer. Draft a 1-2 paragraph statement: take the casting seriously enough to make it work; don't require metaphysical commitment to the casting being meaningful in any cosmic sense. Mark this draft as ready for user revision in Task 5 (since stance is closely tied to casting framing).

- [ ] **Step 4: Scaffold the remaining 5 sections**

Add headers and "(To be filled in Task N.)" placeholders for:
- The two primary states (Task 2)
- The eight primary forces (Tasks 3 + 4)
- Composition (Task 5)
- Change - what changing lines mean (Task 5)
- Casting (Task 5)

- [ ] **Step 5: Commit the scaffold**

```bash
cd /Users/jess/dev/divination
git add docs/substrate.md
git commit -m "docs: scaffold substrate document; lift settled sections from Phase 1/2"
```

---

## Task 2: Design the two primary states (collaborative)

**Controller-executed.** The most upstream creative decision in Phase 3. What replaces yin/yang?

**Files:**
- Read: `/Users/jess/dev/divination/docs/essentials.md` (the rejection of yin/yang and the deferred-to-Phase-3 framing)
- Read: `/Users/jess/dev/divination/docs/notes/05-structural-vs-cultural.md`
- Create: `/Users/jess/dev/divination/docs/notes/07-primary-states.md`

- [ ] **Step 1: Surface the design space to the user**

Present options for what the two primary states should be in the new system. Categories of possibility:

- **Abstract** (just two values: 0/1, A/B, mark/space, even/odd). Carries no semantic baggage; meaning accumulates from how they're used.
- **Energy/movement-based** (e.g. driving/yielding, active/receptive, propulsive/holding). Cleaner than the gendered original but still naming dynamics.
- **Information-theoretic** (e.g. signal/silence, present/absent, declared/unstated). The substrate's tech-flavor showing through.
- **Embodied/phenomenological** (e.g. reaching/resting, pushing/letting). Body-based language; very approachable.
- **Other / hybrid / something the user wants to invent**

Ask the user for direction. Offer weak prior if useful.

- [ ] **Step 2: Iterate on names**

Once a category is picked, propose 2-3 candidate name pairs with short descriptions. Iterate with user until names feel right.

- [ ] **Step 3: Define each state's nature, range, and what it is/isn't**

For each of the two named states, write:
- A 2-3 sentence description of its nature
- The range of what it covers (across personal, relational, work, world-event domains)
- What it is NOT (especially: what it is not when paired with the gendered/cosmological original)

- [ ] **Step 4: Write notes file**

Capture the chosen names and definitions in `/Users/jess/dev/divination/docs/notes/07-primary-states.md`. This is the input to Task 3 (which builds the 8 forces from combinations of these states).

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/07-primary-states.md
git commit -m "docs: design the two primary states"
```

---

## Task 3: Design the eight primary forces - structural logic (collaborative)

**Controller-executed.** Before naming the 8 forces individually (Task 4), settle the LOGIC of the 8 as a set: how they relate to each other, what axes they sit on, whether they preserve the original trigram structure or restructure.

**Files:**
- Read: `/Users/jess/dev/divination/docs/notes/07-primary-states.md` (Task 2 output)
- Read: `/Users/jess/dev/divination/docs/essentials.md` (provisional architecture)
- Create: `/Users/jess/dev/divination/docs/notes/08-eight-forces-structure.md`

- [ ] **Step 1: Confirm or revise the structural provisional**

Phase 2 left "8 trigrams composing into 64 as upper + lower pair" as provisional. With Task 2's primary states defined, the controller should now ask: do the new primary states actually compose into 8 distinct three-position combinations that mean something? Or does the original trigram structure feel arbitrary now?

If keep: the 8 forces are simply the 8 = 2³ combinations of three primary-state positions. Good - move on.

If restructure: discuss with user what alternative grouping makes sense (e.g. 4 forces with two positions each, or 8 forces with no internal structure, or some other arrangement).

- [ ] **Step 2: Identify the internal logic of the 8 as a set**

If trigram structure is kept, identify the natural pairings/oppositions among the 8 (in the original: heaven↔earth, fire↔water, etc.). With the new primary states, what are the analogous pairs? Are there other groupings (2 sets of 4? a circle of 8?) that the new substrate suggests?

This shapes how the 8 forces feel relative to each other - which is the foundation for how their pairings into 64 hexagrams will feel.

- [ ] **Step 3: Write notes file**

Capture in `/Users/jess/dev/divination/docs/notes/08-eight-forces-structure.md`:
- Composition rule (confirmed or revised)
- The 8 positions/identities derived from the rule
- Internal pairings, oppositions, and natural groupings
- Any structural-axis claims (e.g. "the 8 sit on two axes: density and direction")

- [ ] **Step 4: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/08-eight-forces-structure.md
git commit -m "docs: design structural logic of the eight primary forces"
```

---

## Task 4: Design the eight primary forces - per-force content (collaborative)

**Controller-executed.** With structure settled in Task 3, name and describe each of the 8 forces individually. This is the most content-intensive task in Phase 3.

**Files:**
- Read: `/Users/jess/dev/divination/docs/notes/07-primary-states.md`
- Read: `/Users/jess/dev/divination/docs/notes/08-eight-forces-structure.md`
- Create: `/Users/jess/dev/divination/docs/notes/09-eight-forces-content.md`

- [ ] **Step 1: Propose initial naming for the 8 forces**

The controller proposes names + one-line core sense for each of the 8, drawing from Task 3's structural logic. Names should be:
- Plain English where possible
- Evocative but not mystical
- Coherent as a set (read together, the 8 names should sound like they live in the same world)

- [ ] **Step 2: Iterate with user on naming**

User reacts; controller revises. Repeat until the 8 names feel right as a set. The set test: read all 8 names in sequence; do they cohere?

- [ ] **Step 3: For each of the 8, draft initial content**

For each force, draft (per the trigram template in design spec):
- Name
- Core sense (one line)
- Description (1-2 short paragraphs on the force's nature)
- Range of application (3-5 concrete examples across domains: inner life, relationships, work, world events)

This is roughly 200-300 words per force, so ~1800 words total for this step. Can be batched - draft all 8 in one pass, then iterate.

- [ ] **Step 4: User reviews and revises**

User reads the 8 drafts together. Controller revises based on feedback. Particularly important: the 8 should feel coherent AS A SET, not just individually solid.

- [ ] **Step 5: Write notes file**

Final 8-force content captured in `/Users/jess/dev/divination/docs/notes/09-eight-forces-content.md`.

- [ ] **Step 6: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/09-eight-forces-content.md
git commit -m "docs: write content for the eight primary forces"
```

---

## Task 5: Design composition, change, and casting (collaborative)

**Controller-executed.** Three smaller substrate sections that can usually be settled in one session. They share dependencies (composition affects how change is read; casting affects stance) so it's natural to work them together.

**Files:**
- Read: notes 07, 08, 09 from Tasks 2-4
- Read: `/Users/jess/dev/divination/docs/essentials.md` (provisional architecture)
- Create: `/Users/jess/dev/divination/docs/notes/10-composition-change-casting.md`

- [ ] **Step 1: Composition (how trigrams pair into 64)**

If Task 3 kept the trigram-pair structure: confirm the upper/outer + lower/inner reading, OR design an alternative reading (e.g. left/right, before/after) if that fits the new substrate better. Discuss briefly with user; settle.

If Task 3 restructured: design the alternative composition rule fully here.

- [ ] **Step 2: Change (what changing lines mean now)**

Discuss what "a line changes" means in the new substrate. Options:
- The original framing: a line that has reached its extreme transforms into the opposite, generating the next state
- A re-framing: changing lines mark *which parts* of a moment are unstable / in transition
- Something else suggested by the substrate

Also: how many changing lines are typical/meaningful per reading? (Original allows 0-6; some traditions limit.)

- [ ] **Step 3: Casting (the act of invoking a reading)**

3 coins is the likely mechanism (Heads/Tails twice over: easy, gives the same probability distribution as yarrow stalks for stable vs changing lines). Settle:
- Mechanism (3 coins / digital coins / something else)
- Framing (secular: "randomness breaks a rut" vs less-secular: "the result that arrives is the one that applies" vs both/and chaos-magic stance)
- Whether the user enters a question or just sits with the reading

- [ ] **Step 4: Refine the stance section**

The "Stance toward divination" section drafted in Task 1 should now be refined based on the casting framing settled in Step 3. Edit it with the user.

- [ ] **Step 5: Write notes file**

Capture composition, change, casting, and any stance refinements in `/Users/jess/dev/divination/docs/notes/10-composition-change-casting.md`.

- [ ] **Step 6: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/notes/10-composition-change-casting.md
git commit -m "docs: design composition, change, and casting"
```

---

## Task 6: Compile `docs/substrate.md` from all notes

**Subagent-driven.** Inputs are well-defined; output is a structured document. Synthesize the four notes files (07, 08, 09, 10) plus refinements into the final substrate document.

**Files:**
- Read: notes 07, 08, 09, 10
- Read: `docs/essentials.md`
- Read: `docs/superpowers/specs/2026-04-25-modern-divination-system-design.md` (for the substrate document structure)
- Modify: `docs/substrate.md` (replace remaining placeholders)

- [ ] **Step 1: Re-read all inputs**

Hold all inputs in context together so the synthesis is coherent.

- [ ] **Step 2: Fill in the substrate sections**

Replace placeholders in `docs/substrate.md` with content from the notes:
- Section 2 (two primary states) ← notes 07
- Section 3 (eight primary forces) ← notes 08 + 09
- Section 4 (composition) ← notes 10
- Section 5 (change) ← notes 10
- Section 6 (casting) ← notes 10
- Section 7 (stance) ← refined draft from Task 5 Step 4 + initial Task 1 draft

Sections 1 (intent) and 8 (style guide) were lifted in Task 1 and should already be in place.

- [ ] **Step 3: Length / structure check**

Substrate document target: 2000-3500 words total. The eight forces section will be the longest (1500-2400 words for 8 entries × 200-300 words each). Other sections shorter. Adjust if anything is way off.

- [ ] **Step 4: Voice and jargon check**

Same constraints throughout: no em dashes, no banned jargon ("attractor", "feedback", "entropy", "synchronicity", "archetype", "vibration") in own framing, thoughtful-friend voice consistent across sections.

- [ ] **Step 5: Commit**

```bash
cd /Users/jess/dev/divination
git add docs/substrate.md
git commit -m "docs: compile substrate document from Phase 3 notes"
```

---

## Task 7: Self-review against the entry-writability criterion

**Controller-executed.** Phase 3's success criterion is: can we write any of the 72 entries from the substrate without ad-hoc invention? Test this concretely.

**Files:**
- Read: `/Users/jess/dev/divination/docs/substrate.md`

- [ ] **Step 1: Pick two trial entries to draft**

One trigram entry and one hexagram entry. The hexagram should be a non-pure one (not a doubled trigram), to test whether the substrate gives us enough to compose meaning from a pair. Suggested: trigram #3 (third primary force in the new ordering) and a hexagram that combines two distinct trigrams.

- [ ] **Step 2: Attempt the trial entries**

Working only from the substrate (no other notes, no Phase 1/2 docs), draft each entry per the design spec's templates:
- Trigram: name, glyph (placeholder if Unicode reuse not yet decided), core sense, description, range, in-combination
- Hexagram: number/glyph/composition header, name, core sense, image, six line readings

If a section requires invention not in the substrate, STOP. The substrate has a gap. Note it.

- [ ] **Step 3: Triage gaps**

If the trial entries surfaced gaps:
- Minor (a missing example, a clarification): patch the substrate with a small Edit
- Substantial (an entire section feels insufficient to compose entries from): return to the relevant Task 2-5 collaborative work to extend

- [ ] **Step 4: Commit any patches**

```bash
cd /Users/jess/dev/divination
git add docs/substrate.md
git commit -m "docs: patch substrate gaps surfaced in self-review"
```

(Skip if no patches needed.)

---

## Task 8: Hand off to user for review

- [ ] **Step 1: Show the substrate document**

Use the Read tool on `/Users/jess/dev/divination/docs/substrate.md` and present the full content to the user. (May be too long for one message; can present section-by-section.)

- [ ] **Step 2: Show the trial entries from Task 7**

The two trial entries demonstrate that the substrate is workable. Present them as evidence that Phase 4 writing is unblocked.

- [ ] **Step 3: Request review**

Ask the user:

> Phase 3 deliverable is committed at `docs/substrate.md`. The substrate covers all 8 sections (intent, two states, eight forces, composition, change, casting, stance, style guide). Two trial entries (one trigram, one hexagram) drafted from it confirm the entry-writability criterion. Please review. If approved, the next step is the Phase 4 plan (writing all 72 entries).

- [ ] **Step 4: Iterate or proceed**

If user requests changes, edit and re-commit. If approved, mark Phase 3 complete and offer to invoke writing-plans for Phase 4.

---

## Definition of done for Phase 3

Phase 3 is complete when:

1. `docs/substrate.md` exists with all 8 sections substantive (no placeholders).
2. The two primary states are named and defined.
3. The eight primary forces are named, described, and coherent as a set.
4. Composition, change, and casting are settled with explicit framings.
5. Stance and style guide are present and consistent with the rest.
6. Trial entries (Task 7) confirm entries can be written from the substrate without ad-hoc invention.
7. The user has reviewed and approved.

Once met, transition to writing-plans for Phase 4 (the 72 entries).
