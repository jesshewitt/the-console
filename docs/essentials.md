# Essentials of the New Divination System

What the new system MUST have, MUST NOT have, and what is open to design choice. Distilled from `docs/analysis.md` and the working notes in `docs/notes/`. Inputs to Phase 3 (rebuild the worldview).

## Functional core

What the system is for, and what it must do to count as that.

The system offers a reframing of the consulter's situation. When habitual thinking has stalled, a fresh description of the moment can open a path that wasn't visible before. The primary offer is attitude adjustment - not through instruction, but through the image itself. The consulter sits with the description and applies it; the system does not direct them. Alongside this surface function run two quieter undercurrents: sustained engagement with the symbols does cumulative work over time (transformation), and repeated use shapes who the consulter is becoming, even though no single reading names that explicitly (character building). Neither undercurrent is the stated goal; both are real.

**What entries must do:**
- Describe the situation in present-tense, image-grounded language
- Name the forces in play without prescribing a response
- Stay open enough to reframe but specific enough to hold in mind

**What the voice must respect:**
- The consulter's agency; they apply the image, the system does not apply it for them
- The thoughtful-friend register: plain, direct, no mystical pronouncement

**What this rules out:**
- Direct prediction ("you will") or instruction ("you should")
- Coaching voice: "here is what to do"
- Any framing that positions the system as authoritative about the consulter's specific situation

## Architectural invariants

What structural elements of the I Ching the new system inherits as load-bearing.

### Settled (spec-level - these are locked)

**Binary primitive states.** Two values at each position. The entire system is built from this. Naming (the new yin/yang) is deferred to Phase 3; the binary fact is not.

**64 distinct composite states.** Six positions, two values each: 64 combinations. This is the scope of the system. It is humanly tractable, internally complete, and has no serious alternative.

**Image-based answers, not rule-based.** The response is an image the consulter must apply. No rule hands them a conclusion; the gap between image and situation is where the work happens.

**Situation-as-pattern, not situation-as-event.** Each composite state names a type of moment, not a prediction about what will occur. This separates the system from fortune-telling at the structural level.

**Position-within-situation matters.** Line 1 and Line 5 of the same hexagram describe different positions within the same type of moment, and may call for opposite orientations. This is a structural fact, not a cultural overlay.

### Confirmed during Phase 3

These were provisional at end of Phase 2; Phase 3 worldview work has now settled them.

**Trigram = one channel.** Each trigram represents a single channel (a connection in the consulter's situation), fully characterized by three binary properties: open/closed (line 1, foundation), focused/distributed (line 2, body), outward/inward (line 3, surface). The 8 trigram patterns are 8 distinct channel postures.

**Hexagram = two channels in temporal relation.** Lower trigram = the channel live right now. Upper trigram = the channel emerging. The 64 hexagrams enumerate 64 distinct present-to-emerging trajectories. The upper/lower distinction is *temporal*, not spatial (deliberately not inner/outer, not self/other).

**Each line has a fixed binary semantic.** Line 1 always asks open/closed; line 2 always asks focused/distributed; line 3 always asks outward/inward. Same applies to lines 4-6 of the upper trigram. This replaces the "loose" provisional from Phase 2 with concrete per-line semantics derived from the worldview.

**Flat ordering for v1.** Confirmed. The 64 are treated as a set; no canonical sequence. King Wen's arrangement is not preserved.

## Rejected elements

What we are explicitly NOT bringing forward, and why.

**Feudal and court imagery.** "The great man," "the prince," sending daughters in marriage - these roles belong to Zhou dynasty social structure. The relational dynamics they encode may survive in new form; the roles themselves do not translate.

**Strict gendered cosmology.** Yin as feminine/passive, yang as masculine/active. This is a later overlay, not an original structural feature. The new system names its binary states from scratch.

**Confucian moral vocabulary.** The junzi (noble one), petty persons, and merit hierarchy built into the text. The underlying distinction - acting from principle versus acting from expedience - may be usable; the specific social framing is not.

**Bronze Age material imagery as authoritative.** Jade, the cauldron, river crossings, the lean pig, the lean horse. These were already metaphors in the original; they carry associative weight that belongs to their context. New image vocabulary will be built from the substrate.

**The Ten Wings as authoritative commentary.** Inheriting these texts means inheriting the disagreement about them. Hatcher identifies them as a primary source of cosmological distortion. They are not included.

**Ancestor-consultation and spirit-cosmology.** The shen/gui frame requires cultural re-acculturation most modern consulters will not do. The idea of contact with something larger than immediate circumstances may be separable; the specific spirit frame is not.

**Direct prediction and prescriptive voice.** "You will" and "you should" are structural rejections, not just tonal ones. Any entry that predicts outcome or directs action violates the functional core.

**Specific astrological and seasonal correspondences.** The correlative cosmology connecting hexagrams to seasons, directions, and celestial positions is historically specific and not carried forward.

**Changing-line mechanism.** Dropped during Phase 3. The hexagram itself encodes a transition (present channel → emerging channel), so changing-lines do redundant work. Each casting yields one hexagram; there is no second hexagram and no per-line conditional readings.

## Settled during Phase 3 (was deferred at end of Phase 2)

**Naming the two primary states.** Settled as **on / off** (computer-binary register). Multiple interpretive frames (signal/silence, charge/ground, present/absent, etc.) can be layered into entry text without any single frame being load-bearing.

**Naming the 8 primary forces.** Settled as channel states from the signal/communications register: **TRANSMIT, RECEIVE, BROADCAST, SCAN, AIM, TUNE, STANDBY, MONITOR**. Each is a posture a channel can be in, derived from the three binary properties. All 8 names are drawn from the same register (signal/communications), aligning with the channel-as-anchor metaphor.

**Per-line position semantics.** Settled. Each line has a fixed binary semantic (open/closed, focused/distributed, outward/inward). See "Confirmed during Phase 3" above.

**The casting mechanism.** Settled. Six binary draws producing a 6-bit hexagram. Any randomization works (one coin × six flips, six coins, single die per line, in-app generator). No 3-coin / yarrow-stalk methods needed.

**The substrate content.** Settled. See `docs/substrate.md` for the full worldview document.

## Still deferred to later phases

**Voice and aesthetic specifics.** The thoughtful-friend register is settled in the substrate's style guide. The precise tone, imagery register, and sentence rhythm in actual entries get nailed in Phase 4 (writing) by drafting and revising entries together.

**Visual identity for the web app.** Defaults to warm-minimalist register like the i-ching site; specifics deferred to Phase 5 (build).

**Project name.** Deferred until Phase 4 surfaces a fitting one.
