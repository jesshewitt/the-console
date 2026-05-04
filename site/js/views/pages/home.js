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
            <p>
                A divination deck of 24 cards. Each card names a life situation through a tech metaphor. The cards group into four dimensions of any system: <span class="type-connection">connection</span>, <span class="type-state">state</span>, <span class="type-time">time</span>, and <span class="type-change">change</span>.
            </p>

            <ul class="card-list">
                ${cards.map(cardRow)}
            </ul>
        `
    }
}

export default Home
