import {test} from 'node:test'
import assert from 'node:assert/strict'
import {seeded} from '../site/js/rng.js'
import cards from '../site/data/cards.json' with { type: 'json' }
import categories from '../site/data/categories.json' with { type: 'json' }

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

test('cards data has 12 entries', () => {
    assert.equal(cards.length, 12)
})

test('cards data shape is intact', () => {
    const requiredFields = ['id', 'name', 'category', 'tech', 'dimension', 'dimensionNote', 'manifestations']
    const names = new Set()
    const ids = new Set()
    const dimensions = new Set()

    for (const c of cards) {
        for (const f of requiredFields) {
            assert.ok(f in c, `card ${c.id ?? '?'} missing field "${f}"`)
        }
        assert.ok(typeof c.id === 'number', `card id is not a number`)
        assert.ok(typeof c.name === 'string' && c.name.length > 0, `card ${c.id} name is empty`)
        assert.ok(typeof c.tech === 'string' && c.tech.length > 0, `card ${c.id} tech is empty`)
        assert.ok(typeof c.dimension === 'string' && c.dimension.length > 0, `card ${c.id} dimension is empty`)
        assert.ok(typeof c.dimensionNote === 'string' && c.dimensionNote.length > 0, `card ${c.id} dimensionNote is empty`)
        assert.ok(Array.isArray(c.manifestations) && c.manifestations.length > 0, `card ${c.id} manifestations is empty`)
        names.add(c.name)
        ids.add(c.id)
        dimensions.add(c.dimension)
    }

    assert.equal(names.size, 12, 'card names are not all unique')
    assert.equal(dimensions.size, 12, 'card dimensions are not all unique')
    assert.equal(ids.size, 12, 'card ids are not all unique')
    assert.equal(Math.min(...ids), 1, 'lowest card id is not 1')
    assert.equal(Math.max(...ids), 12, 'highest card id is not 12')
    assert.deepEqual([...ids].sort((a, b) => a - b), Array.from({length: 12}, (_, i) => i + 1), 'card ids are not 1-12 with no gaps')
})

test('card categories are evenly distributed across the four categories', () => {
    const validCategories = new Set(['perception', 'agency', 'connection', 'structure'])
    const counts = {perception: 0, agency: 0, connection: 0, structure: 0}

    for (const c of cards) {
        assert.ok(validCategories.has(c.category), `card ${c.id} has invalid category "${c.category}"`)
        counts[c.category]++
    }

    for (const cat of validCategories) {
        assert.equal(counts[cat], 3, `category "${cat}" should have 3 cards, got ${counts[cat]}`)
    }
})

test('categories metadata matches card categories', () => {
    const cardCategories = new Set(cards.map(c => c.category))
    const metaKeys = new Set(Object.keys(categories))
    assert.deepEqual([...metaKeys].sort(), [...cardCategories].sort(), 'categories.json keys do not match card categories')

    for (const [key, meta] of Object.entries(categories)) {
        assert.ok(typeof meta.label === 'string' && meta.label.length > 0, `category ${key} label is empty`)
        assert.ok(typeof meta.question === 'string' && meta.question.length > 0, `category ${key} question is empty`)
    }
})
