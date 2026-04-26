import {test} from 'node:test'
import assert from 'node:assert/strict'
import {seeded} from '../site/js/rng.js'
import trigrams from '../site/data/trigrams.json' with { type: 'json' }
import hexagrams from '../site/data/hexagrams.json' with { type: 'json' }

// PRNG tests

test('seeded rng is deterministic for the same seed', () => {
    const rng1 = seeded('test')
    const rng2 = seeded('test')
    for (let i = 0; i < 20; i++) {
        assert.equal(rng1(), rng2())
    }
})

test('seeded rng differs across seeds', () => {
    const rng1 = seeded('seed-a')
    const rng2 = seeded('seed-b')
    const a = Array.from({length: 10}, () => rng1())
    const b = Array.from({length: 10}, () => rng2())
    assert.notDeepEqual(a, b)
})

test('coin-flip output is pinned for seed "test"', () => {
    // Regression guard: seed "test" must always produce pattern 101110 (hexagram 47 Attend).
    // If the PRNG implementation changes, this test will catch it.
    const rng = seeded('test')
    const bits = Array.from({length: 6}, () => rng() > 0.5 ? '1' : '0')
    assert.equal(bits.join(''), '101110')
})

// Trigram data shape tests

test('trigrams data shape is intact', () => {
    assert.equal(trigrams.length, 8)

    const requiredFields = ['id', 'pattern', 'name', 'glyph', 'coreSense', 'description', 'range', 'inCombination']
    const requiredRangeFields = ['innerLife', 'relationships', 'work', 'body', 'world']
    const patterns = new Set()
    const names = new Set()
    const ids = new Set()

    for (const t of trigrams) {
        for (const f of requiredFields) {
            assert.ok(f in t, `trigram ${t.name ?? t.id} missing field "${f}"`)
        }
        for (const f of requiredRangeFields) {
            assert.ok(f in t.range, `trigram ${t.name} missing range.${f}`)
        }
        assert.match(t.pattern, /^[01]{3}$/, `trigram ${t.name} pattern not a 3-char binary string`)
        patterns.add(t.pattern)
        names.add(t.name)
        ids.add(t.id)
    }

    assert.equal(patterns.size, 8, 'trigram patterns are not all unique')
    assert.equal(names.size, 8, 'trigram names are not all unique')
    assert.deepEqual([...ids].sort((a, b) => a - b), [1, 2, 3, 4, 5, 6, 7, 8])
})

// Hexagram data shape tests

test('hexagrams data shape is intact', () => {
    assert.equal(hexagrams.length, 64)

    const requiredFields = ['id', 'pattern', 'name', 'glyph', 'lower', 'upper', 'coreSense', 'image']
    const trigramNames = new Set(trigrams.map(t => t.name))
    const patterns = new Set()
    const names = new Set()
    const ids = new Set()

    for (const h of hexagrams) {
        // Use "in" check so null glyph passes (undefined would fail)
        for (const f of requiredFields) {
            assert.ok(f in h, `hexagram ${h.id} (${h.name ?? '?'}) missing field "${f}"`)
        }
        assert.match(h.pattern, /^[01]{6}$/, `hexagram ${h.id} pattern not a 6-char binary string`)
        assert.ok(trigramNames.has(h.lower), `hexagram ${h.id} lower "${h.lower}" is not a valid trigram name`)
        assert.ok(trigramNames.has(h.upper), `hexagram ${h.id} upper "${h.upper}" is not a valid trigram name`)
        patterns.add(h.pattern)
        names.add(h.name)
        ids.add(h.id)
    }

    assert.equal(patterns.size, 64, 'hexagram patterns are not all unique')
    assert.equal(names.size, 64, 'hexagram names are not all unique')
    assert.equal(ids.size, 64, 'hexagram IDs are not all unique')
    assert.equal(Math.min(...ids), 1)
    assert.equal(Math.max(...ids), 64)
})
