import trigrams from '/data/trigrams.json' with { type: 'json' }
import hexagrams from '/data/hexagrams.json' with { type: 'json' }
import {html, raw} from '../../html.js'
import {renderTrigramGlyph, renderHexagramGlyph} from '../../glyphs.js'

const trigramRow = trigram => html`
    <li>
        <a href="/trigram/${trigram.pattern}" class="tri-row">
            <span class="tri-glyph">${raw(renderTrigramGlyph(trigram.pattern))}</span>
            <span class="tri-name">${trigram.name}</span>
            <span class="tri-sense">${trigram.coreSense}</span>
        </a>
    </li>
`

const hexagramRow = hexagram => html`
    <li>
        <a href="/hexagram/${hexagram.id}" class="hex-row">
            <span class="hex-num">${hexagram.id}.</span>
            <span class="hex-glyph">${raw(renderHexagramGlyph(hexagram.pattern))}</span>
            <span class="hex-name">${hexagram.name}</span>
            <span class="hex-composition">${hexagram.lower} → ${hexagram.upper}</span>
        </a>
    </li>
`

class Home {
    static title() { return 'The Console' }

    static render() {
        const seed = Math.floor(Math.random() * 1e9).toString(36)
        return html`
            <p>
                A divination system.
                <a href="/reading/${seed}">Cast a reading</a>
                or browse the 8 channels and 64 trajectories.
            </p>

            <h2>Channels</h2>
            <ul class="tri-grid">
                ${trigrams.map(trigramRow)}
            </ul>

            <h2>Trajectories</h2>
            <ul class="hex-grid">
                ${hexagrams.map(hexagramRow)}
            </ul>
        `
    }
}

export default Home
