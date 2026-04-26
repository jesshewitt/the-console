# Phase 3 Task 5: Casting and Stance (refined)

With the worldview settled and changing lines dropped, casting simplifies considerably.

## Casting

**Mechanism**: six binary draws, producing a 6-bit hexagram. Each draw produces one line; lines are read bottom-to-top (line 1 = bottom = first drawn).

Concretely, any of these works:
- One coin flipped six times (heads = on, tails = off)
- A single die per line (even = on, odd = off)
- In the web app: a single click that generates 6 random bits at once
- An entered seed (allows reproducible / shareable readings, like the i-ching site's `/reading/:seed` URL pattern)

The 3-coin or yarrow-stalk methods of the original I Ching are not used; they exist to produce the four-outcomes-per-line distribution (stable on, stable off, changing on, changing off) needed for the changing-line mechanism. With no changing lines, two outcomes per line is what we need, and the simplest randomization works.

**Order**: bottom to top. Line 1 is the foundation of the lower trigram (first property of the present channel: open or closed). Line 4 is the foundation of the upper trigram (first property of the emerging channel). The hexagram builds from the foundation of the present up through the surface of the emerging.

**Framing of the act**: the consulter holds a question or sits with a situation, then draws. The question can be specific ("how should I respond to X?") or open ("what's the shape of where I am?"). Both work; the system doesn't prescribe.

In the web app, the casting interaction is: click → 6 bits generated → hexagram displayed → reading text rendered. No multi-step ritual needed unless the consulter wants one (which they can layer on themselves outside the app).

## Stance toward divination (refined from Task 1 draft)

Take the casting seriously enough to make it work. Don't require metaphysical commitment to the casting being meaningful in any cosmic sense.

The reading lands as useful because the consulter brings their attention to it. The system gives you a structured frame for your situation that you might not have generated on your own; the work happens when you sit with that frame and notice what it shows. Whether the casting "really" picked the matching hexagram (some kind of synchronicity) or whether you're finding resonance with whichever hexagram you got (psychological pareidolia) is beside the point - the reframing happens regardless.

This is the chaos-magic both/and: a consulter who reads the system as "random prompt + framework for thinking" gets value from it. A consulter who reads it as "the casting brought me what I needed" gets value too. The system is built so neither stance breaks it.

Practical implications for entry writing: do not appeal to any cosmic mechanism in the entry text. Don't say "this hexagram came to you because..." or "the universe is showing you that..." The entry describes the channel-shift the hexagram represents and lets the consulter map it to their situation themselves. Faith in the casting is the consulter's, not the system's.

## How a reading proceeds

1. Consulter sits with their situation or holds a question.
2. Casting produces 6 bits → a hexagram (lower trigram = present channel, upper trigram = emerging channel).
3. Consulter reads the entry: a description of the present channel, a description of the emerging channel, and the trajectory between them.
4. Consulter applies the description to their situation - which channels in their life look like the present? Which feel like the emerging?
5. The reframing is the work. The system has no further role.

No second-pass mutation (no changing lines, no resulting hexagram). Each casting is one trajectory.
