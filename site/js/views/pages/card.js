import cards from '/data/cards.json' with { type: 'json' }
import categories from '/data/categories.json' with { type: 'json' }
import {html} from '../../html.js'
import {cardDetail} from '../components/card-detail.js'

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
        return cardDetail(card, categories)
    }
}

export default Card
