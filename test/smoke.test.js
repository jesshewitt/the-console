import {test} from 'node:test'
import assert from 'node:assert/strict'
import {seeded} from '../site/js/rng.js'
import cards from '../site/data/cards.json' with { type: 'json' }

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

test('card cast is pinned for seed "test"', () => {
    // Regression guard: seed "test" must always produce card id 19 (Patch).
    // If the PRNG implementation changes, this test will catch it.
    const rand = seeded('test')
    const id = Math.floor(rand() * 24) + 1
    assert.equal(id, 19)
})

// Card data shape tests

test('cards data has 24 entries', () => {
    assert.equal(cards.length, 24)
})

test('cards data shape is intact', () => {
    const requiredFields = ['id', 'name', 'type', 'brief', 'situation', 'reflection']
    const names = new Set()
    const ids = new Set()

    for (const c of cards) {
        for (const f of requiredFields) {
            assert.ok(f in c, `card ${c.id ?? '?'} missing field "${f}"`)
        }
        assert.ok(typeof c.id === 'number', `card id is not a number`)
        assert.ok(typeof c.name === 'string' && c.name.length > 0, `card ${c.id} name is empty`)
        assert.ok(typeof c.brief === 'string' && c.brief.length > 0, `card ${c.id} brief is empty`)
        assert.ok(typeof c.situation === 'string' && c.situation.length > 0, `card ${c.id} situation is empty`)
        assert.ok(typeof c.reflection === 'string' && c.reflection.length > 0, `card ${c.id} reflection is empty`)
        names.add(c.name)
        ids.add(c.id)
    }

    assert.equal(names.size, 24, 'card names are not all unique')
    assert.equal(ids.size, 24, 'card ids are not all unique')
    assert.equal(Math.min(...ids), 1, 'lowest card id is not 1')
    assert.equal(Math.max(...ids), 24, 'highest card id is not 24')
    assert.deepEqual([...ids].sort((a, b) => a - b), Array.from({length: 24}, (_, i) => i + 1), 'card ids are not 1-24 with no gaps')
})

test('card types are evenly distributed across the four dimensions', () => {
    const validTypes = new Set(['connection', 'state', 'time', 'change'])
    const counts = {connection: 0, state: 0, time: 0, change: 0}

    for (const c of cards) {
        assert.ok(validTypes.has(c.type), `card ${c.id} has invalid type "${c.type}"`)
        counts[c.type]++
    }

    for (const t of validTypes) {
        assert.equal(counts[t], 6, `type "${t}" should have 6 cards, got ${counts[t]}`)
    }
})
