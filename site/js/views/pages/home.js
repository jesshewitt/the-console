import cards from '/data/cards.json' with { type: 'json' }
import {html} from '../../html.js'

const cardRow = card => html`
    <li>
        <a href="/card/${card.id}" class="card-row">
            <span class="card-num">${card.id}.</span>
            <span class="card-name">${card.name}</span>
            <span class="card-situation">${card.situation}</span>
        </a>
    </li>
`

class Home {
    static title() { return 'The Console' }

    static render() {
        const seed = Math.floor(Math.random() * 1e9).toString(36)
        return html`
            <p>
                A 24-card oracle deck.
                <a href="/reading/${seed}">Cast a reading</a>
                or browse the 24 cards.
            </p>

            <h2>Cards</h2>
            <ul class="card-list">
                ${cards.map(cardRow)}
            </ul>
        `
    }
}

export default Home
