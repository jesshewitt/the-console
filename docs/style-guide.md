# Card content style guide

Working guidelines for generating and revising the 24 card entries. Self-evaluate every draft against this before asking for feedback.

## Schema

Each card has these fields:

| Field | Shape | Purpose |
|---|---|---|
| `name` | string, capitalized tech metaphor | The card's identity |
| `type` | `'connection'` \| `'state'` \| `'time'` \| `'change'` | Which dimension of the system frame this card belongs to |
| `brief` | one short sentence | Plain-language read of what the card means at a glance |
| `tech` | 2-3 sentences | Brief overview of what the term means in tech, accessible to a non-specialist. NOT a specification |
| `situation` | one short opening line | Direct introduction to the examples. No rhetorical preamble |
| `examples` | array of 5-8 short scenarios | Distinct life-moments the card describes |
| `reflection` | 1-2 sentences, often questions | Invites thought without prescribing |

The deck's worldview is systems-theoretic: situations have recognizable shape, and the same patterns recur. The four types are the fundamental dimensions any system has:

- **`connection`** — relationships and channels between parts (how things relate)
- **`state`** — the current configuration, what's stored and held (how things are)
- **`time`** — temporal patterns: rhythms, delays, alignments (how time behaves)
- **`change`** — moments of structural transformation (when shape shifts)

The deck holds 6 cards per type, evenly distributed.

## Hard constraints (no exceptions)

These have come up repeatedly. Apply absolutely.

- No em dashes (—)
- No spaced hyphens used as parenthetical separators ( - )
- No semicolons in prose (JS syntax exempt)
- No defining-by-negation patterns:
  - "this isn't X, it's Y"
  - "not X, but Y"
  - "real X, not Y"
  - "X, not Y" (e.g. "real rest, not waiting")
- No banned jargon: *attractor, feedback, entropy, synchronicity, archetype, vibration*
- No coaching imperatives: "you should", "you must", "you need to"
- No mystical or cosmological appeals: "the universe", "cosmic", "destined", "the field is..."

## Style preferences

- "Shape" used metaphorically (e.g. "the shape is the same") feels off in this register; avoid
- Plain over technical
- Short over long
- Direct over hedged
- Examples grounded in everyday life, multi-domain
- Watch for word repetition across examples within one card (e.g. don't have "begun" in two scenarios in a list)
- No filler phrases: "worth noting", "it is worth", "essentially", "simply put"
- Metaphor stays in the card name and tech section. Brief, situation, examples, and reflection use plain human language for the actual experience, in words a person would use about their own life

## Field-specific guidance

### `tech`

- Brief overview, not specification
- Accessible to someone who has never used the term
- No detail just for completeness; only what helps explain the metaphor
- Avoid technical comparisons like "this is distinct from..." (defining-by-negation)
- No protocol-level detail unless the metaphor depends on it (no SYN/ACK, no specific HTTP error codes unless directly relevant)
- No commentary on how the term maps to life — leave the mapping to situation, examples, and reflection. Tech explains the term, not interprets it

### `situation`

- One short, direct line
- No "the unifying thread is", no "this might be", no "in essence"
- Just states what kind of moment the card describes
- Human-relatable framing in plain language. Prefer direct phrasings ("You are the connection between two or more separate worlds") over abstract nominalizations ("Carrying meaning across two contexts")

### `examples`

- 5-8 distinct scenarios
- Each a different *kind* of moment, not surface variants of the same one
- Multi-domain: cover relationships, work, internal life, decisions, beliefs, etc.
- Short phrases or short clauses, not full paragraphs
- Concrete enough to recognize immediately
- Avoid redundancy: if two examples differ only by what kind of message was sent (text, email, etc.), consolidate
- Universality: each example should be recognizable to most adults across many walks of life. A scenario that requires a specific profession, identity, or background to recognize narrows the card's reach. Aim for moments most readers can locate themselves in
- Form: each card uses one form across all examples, picked by what fits the card:
  - **Gerund form** ("Verbing X") when the consulter is the agent of the moment: "Rehearsing a conversation"
  - **Noun-phrase form** ("A noun [modifier]") when the consulter is the recipient or witness: "A pitch declined", "A friendship that quietly fades". Internal grammar varies (past-participle modifiers, relative clauses, prepositional phrases, bare nouns). Don't force a single sub-pattern
  - Pick one form per card. Don't mix forms within a card

### `reflection`

A short paragraph (3-6 sentences) of food for thought drawn from systems theory. Systems vocabulary serves as the deck's distinctive contemplative register, the same role the esoteric tradition plays for tarot or classical Chinese cosmology plays for I-Ching. Used right, it gives reflections analytical depth without therapeutic register or preachiness.

**Structure** (this is the reflection methodology):

1. **State the structural pattern** — the systems fact this card describes
2. **Mechanism** — how the pattern works
3. **Categorical observation** — variants, options, or invariants of the pattern
4. **Closing insight** — the actually-revealing thing about being inside this state, often unintuitive

**Voice and constraints:**

- Use systems theory vocabulary as the contemplative register: words like *capacity, throughput, channel, signal, feedback, backpressure, latency, reachability, persistence* are evocative without being jargon. The systems vocabulary is the deck's "mysticism"
- Plain enough that a non-specialist can follow. Use the systems concept; explain in context where needed
- Paragraph form, not questions
- Multi-domain applicable
- No prescriptions, no instructions
- The closing insight is the food-for-thought, not a directive. Don't tell the consulter what to contemplate; let the structural truth point at what's there
- Frame toward structural understanding, not toward managing or fixing

## Process

When drafting any card:

1. Write the entry against the schema
2. Self-check against every hard constraint
3. Self-check against style preferences
4. Revise as needed
5. Only present to the user once it passes the checks

If the user pushes back on something, update this guide if the lesson is general; if it's specific to one card, just apply it.
