import cards from '/data/cards.json' with { type: 'json' }
import {html} from '../../html.js'

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
            <h2 class="card-name">${card.name}</h2>
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
        `
    }
}

export default Card
