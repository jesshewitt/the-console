import cards from '/data/cards.json' with { type: 'json' }
import {html} from '../../html.js'
import {seeded} from '../../rng.js'

function castFromSeed(seed) {
    const rand = seeded(seed)
    return Math.floor(rand() * 24) + 1
}

class Reading {
    static title(seed) {
        return `The Console | Reading ${seed}`
    }

    static render(seed) {
        const cardId = castFromSeed(seed)
        const card = cards.find(c => c.id === cardId)
        const newSeed = Math.floor(Math.random() * 1e9).toString(36)
        return html`
            <h2>${card.name}</h2>
            <p>${card.situation}</p>
            <h3>Underneath</h3>
            <p>${card.underneath}</p>
            <h3>A move</h3>
            <p>${card.move}</p>
            <p class="reading-actions">
                <a href="/reading/${newSeed}">Draw another card</a>
            </p>
        `
    }
}

export default Reading
