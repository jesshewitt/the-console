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
            <p class="card-type">${card.type}</p>
            <p class="card-brief">${card.brief}</p>
            ${card.tech ? html`
                <h3>Tech</h3>
                <p>${card.tech}</p>
            ` : ''}
            <h3>Situation</h3>
            <p>${card.situation}</p>
            ${card.examples && card.examples.length ? html`
                <ul class="card-examples">
                    ${card.examples.map(ex => html`<li>${ex}</li>`)}
                </ul>
            ` : ''}
            <h3>Reflection</h3>
            <p>${card.reflection}</p>
            <p class="reading-actions">
                <a href="/reading/${newSeed}">Draw another card</a>
            </p>
        `
    }
}

export default Reading
