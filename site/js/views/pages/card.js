import cards from '/data/cards.json' with { type: 'json' }
import {html} from '../../html.js'

const typeDescriptions = {
    connection: 'how things relate',
    state: 'how things are',
    time: 'how time unfolds',
    change: 'how things shift',
}

class Card {
    static getCard(id) {
        const numericId = parseInt(id, 10)
        return cards.find(c => c.id === numericId)
    }

    static title(id) {
        const c = Card.getCard(id)
        if (!c) return 'The Console'
        return `The Console | ${c.name}`
    }

    static render(id) {
        const card = Card.getCard(id)
        if (!card) {
            return html`<h2>Not found</h2><p>That card doesn't exist. Try the <a href="/">home page</a>.</p>`
        }
        return html`
            <h2 class="card-name type-${card.type}">${card.name}</h2>
            <p class="card-brief-card">${card.brief}</p>
            ${card.tech ? html`
                <h3>Tech</h3>
                <p class="card-tech">${card.tech}</p>
            ` : ''}
            <h3>Dimension</h3>
            <p class="card-type"><span class="type-name type-${card.type}">${card.type}</span><span class="type-description">: ${typeDescriptions[card.type]}</span></p>
            <h3>Situation</h3>
            <p>${card.situation}</p>
            ${card.examples && card.examples.length ? html`
                <ul class="card-examples">
                    ${card.examples.map(ex => html`<li>${ex}</li>`)}
                </ul>
            ` : ''}
            <h3>Reflection</h3>
            <p class="card-reflection">${card.reflection}</p>
        `
    }
}

export default Card
