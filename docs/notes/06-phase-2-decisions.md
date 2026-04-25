# Phase 2 User Decisions

Captured during Phase 2 Task 2. Inputs to Task 3 (compile essentials.md).

## Decision A: Functional core

**Surface frame: Attitude adjustment via reframing.** The system offers a reframing of the consulter's situation that they can sit with and apply themselves. Notably *not* explicitly commanding the attitude shift - the system describes the situation freshly and leaves the response to the consulter.

**Undercurrents:**
- *Transformation* (cumulative). Engagement with the symbols themselves does work over time, even when the immediate use is reframing.
- *Character building* (unspoken). Sustained use shapes who the consulter is becoming, but this is a side-effect rather than an explicit goal of any single reading.

**What this rules out:**
- Direct prediction or instruction ("you will" / "you should").
- Coaching voice ("here's what to do").
- Any framing that positions the system as authoritative about the consulter's situation.

**What this requires:**
- Image-based, present-tense entries that describe *the situation* rather than prescribe a response.
- Voice that respects the consulter's agency (the thoughtful-friend register from the spec).
- Texts open enough to reframe but specific enough to hold in mind.

## Decision B: Architectural keeps (provisional)

User flagged that these are hard to answer without knowing what we're distilling into. Treat all three as **provisional** for now; Phase 3 substrate work should confirm or revise.

### B1. Composition rule

**Provisional: Keep** the 8 trigrams composing into 64 hexagrams as upper + lower pair. Reasoning: structural elegance, makes the 64 humanly tractable, even Hatcher considers it load-bearing.

**Phase 3 should confirm**: does the new substrate's notion of the 8 primary forces actually pair this way? If the new forces don't compose meaningfully in pairs, we may need to revisit.

### B2. Per-line position semantics

**Provisional: Keep loosely.** The idea that position-in-situation matters is structural; the specific Confucian feudal assignments (line 5 = ruler, line 4 = minister, etc.) are not.

**Phase 3 should confirm**: design new position semantics that derive from the new substrate, replacing the feudal mapping.

### B3. Ordering

**Provisional: Treat as flat for v1.** The 64 are a set, ordering only matters where useful (e.g. UI listing). King Wen sequence is interesting historically but not preserved as authoritative.

**Phase 3 should confirm**: if the new substrate suggests a meaningful ordering (e.g. by some axis emerging from the worldview), introduce it then. Otherwise stays flat.

## Note on the provisional status

These three architectural calls are placeholders so Phase 2 can complete and Phase 3 can begin. They are not load-bearing decisions yet - if Phase 3's substrate work calls for different architecture, we revise without prejudice.
