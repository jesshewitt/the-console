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
