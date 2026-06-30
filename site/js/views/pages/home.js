import cards from '/data/cards.json' with { type: 'json' }
import categories from '/data/categories.json' with { type: 'json' }
import {html} from '../../html.js'

const categoryGroup = ([key, meta]) => html`
    <section class="card-group">
        <h2 class="category-name category-${key}">${meta.label}<span class="category-question"> · ${meta.question}</span></h2>
        <ul>
            ${cards.filter(c => c.category === key).map(c => html`<li><a href="/card/${c.id}" class="card-name category-${key}">${c.name}</a></li>`)}
        </ul>
    </section>
`

class Home {
    static title() { return 'The Console' }

    static render() {
        return html`
            <p class="main-description">The Console is a divination deck of 12 cards, grouped into four categories — four questions you can ask of any situation.</p>
            ${Object.entries(categories).map(categoryGroup)}
        `
    }
}

export default Home
