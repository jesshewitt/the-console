import cards from '/data/cards.json' with { type: 'json' }
import {html} from '../../html.js'

const cardRow = card => html`
    <li>
        <a href="/card/${card.id}" class="card-name type-${card.type}">${card.name}</a>
        <span class="card-brief">${card.brief}</span>
    </li>
`

class Home {
    static title() { return 'The Console' }

    static render() {
        return html`
            <p class="main-description">
                The Console is a divination deck of 28 cards. Each card describes a life situation through the lens of systems theory. The cards are grouped into four dimensions: <span class="type-connection">connection</span>, <span class="type-state">state</span>, <span class="type-time">time</span>, and <span class="type-change">change</span>.
            </p>

            <ul class="card-list">
                ${cards.map(cardRow)}
            </ul>
        `
    }
}

export default Home
