# Card content style guide

Working guidelines for generating and revising the 24 card entries. Self-evaluate every draft against this before asking for feedback.

## Schema

Each card has these fields:

| Field | Shape | Purpose |
|---|---|---|
| `name` | string, capitalized tech metaphor | The card's identity |
| `brief` | one short sentence | Plain-language read of what the card means at a glance |
| `tech` | 2-3 sentences | Brief overview of what the term means in tech, accessible to a non-specialist. NOT a specification |
| `situation` | one short opening line | Direct introduction to the examples. No rhetorical preamble |
| `examples` | array of 5-8 short scenarios | Distinct life-moments the card describes |
| `reflection` | 1-2 sentences, often questions | Invites thought without prescribing |

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

- Often a question or pair of questions
- Multi-domain applicable
- Open-ended; doesn't tell the reader what to do
- Stays grounded in what the situation reveals about the consulter, others, or circumstances
- No prescriptions, no instructions
- Frame toward insight, growth, or peace. The card may name something hard, but the reflection points toward what can be understood, learned, or settled into. Avoid framing the reflection as a problem to manage or a cost to mitigate

## Process

When drafting any card:

1. Write the entry against the schema
2. Self-check against every hard constraint
3. Self-check against style preferences
4. Revise as needed
5. Only present to the user once it passes the checks

If the user pushes back on something, update this guide if the lesson is general; if it's specific to one card, just apply it.
