import cards from '/data/cards.json' with { type: 'json' }
import categories from '/data/categories.json' with { type: 'json' }
import {seeded} from '../../rng.js'
import {cardDetail} from '../components/card-detail.js'

function castFromSeed(seed) {
    const rand = seeded(seed)
    return Math.floor(rand() * 12) + 1
}

class Reading {
    static title(seed) {
        return `The Console | Reading ${seed}`
    }

    static render(seed) {
        const cardId = castFromSeed(seed)
        const card = cards.find(c => c.id === cardId)
        return cardDetail(card, categories)
    }
}

export default Reading
