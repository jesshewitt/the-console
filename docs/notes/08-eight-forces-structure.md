# Phase 3 Task 3: Eight Primary Forces - Structural Logic

The structural decisions about HOW the 8 forces relate to each other and how they sit on the binary architecture. Per-force naming and content come in Task 4.

## Decision: Keep the original 8-trigram architecture (provisionally)

8 forces. Each force is a 3-position stack of on/off, giving 2³ = 8 distinct combinations. Hexagrams are 2 stacked trigrams (8 × 8 = 64).

This is the original I Ching's 2-3-6 structure. Considered alternatives:
- *No intermediate (just 6 binary lines)*: loses the named-primitives vocabulary that makes the 64 cohere from a smaller core.
- *4 doublets composing in threes (cleaner recursive doubling: 2→4→64 via 4³)*: technically more binary-native but 4 named primitives is thin for a divination system.

Stayed with 8 trigrams not because it's the original but because 8 is the human-tractability sweet spot for named primitives, and the 2-part composition (one trigram meeting another) gives readers a built-in interpretive frame.

**Provisional note**: hard to evaluate the structural choice without knowing what the granular elements actually mean. May revisit once Task 4 surfaces what the 8 forces feel like as a set.

## Decision: Four pairs of binary opposites

The 8 forces split naturally into 4 pairs, where each pair flips every position in the binary stack. Each force has one clear opposite in the set.

| Pair | Force A binary | Force B binary |
|------|---------------|----------------|
| Pair 1 | on-on-on | off-off-off |
| Pair 2 | on-on-off | off-off-on |
| Pair 3 | on-off-on | off-on-off |
| Pair 4 | off-on-on | on-off-off |

Each pair represents a conceptual axis (a force and its mirror situation). The 4 pairs together give the system 4 distinct axes of meaning, with 2 forces per axis.

Considered alternative: arrange the 8 in a circle / Gray code (each adjacent force differs by one bit-flip). Cyclic rather than oppositional. Stayed with pairs because oppositional structure is more useful for divinatory contrast - a force and its mirror situation are easier to read against each other than as positions on a circle.

## Decision: Keep positional weight within a trigram

The three positions within a trigram are not interchangeable. Each carries semantic weight:

- *Bottom position*: where the force begins, what's underneath, the foundation.
- *Middle position*: the heart of the force, the substance, the body.
- *Top position*: where the force lands, what shows, the surface.

A trigram with "on" at the top reads differently from a trigram with "on" at the bottom - the activity is in different parts of the situation.

This preserves the original I Ching's idea (positions have weight) without inheriting the cosmological vocabulary (heaven/earth/human). Plain-language framing replaces the feudal one.

## What this gives us for Task 4

With the structure settled, Task 4 designs each of the 8 forces individually. The structure constrains the design in useful ways:

- Each force has one binary opposite that should feel like a conceptual mirror
- Each force has a 3-position pattern that suggests *where the activity lives* in it (foundation, body, or surface)
- The 4 pairs together should feel like 4 distinct axes - the system as a whole has 4 dimensions of meaning, not 8 unrelated ones

Naming should respect the pair structure: the two forces in each pair should sound like genuine opposites, not arbitrary opposite-by-naming.
