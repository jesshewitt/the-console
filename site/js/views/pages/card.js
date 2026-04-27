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
            <p class="card-situation">${card.situation}</p>
            <h3>Underneath</h3>
            <p>${card.underneath}</p>
            <h3>A move</h3>
            <p>${card.move}</p>
        `
    }
}

export default Card
