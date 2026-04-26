import trigrams from '/data/trigrams.json' with { type: 'json' }
import hexagrams from '/data/hexagrams.json' with { type: 'json' }
import {html, raw} from '../../html.js'
import {renderTrigramGlyph, renderHexagramGlyph} from '../../glyphs.js'

const PROPERTY_LABELS = {
    bottom: { '1': 'open', '0': 'closed' },
    middle: { '1': 'focused', '0': 'distributed' },
    top: { '1': 'outward', '0': 'inward' },
}

function patternLabel(pattern) {
    // pattern is bottom-to-top
    return [
        PROPERTY_LABELS.bottom[pattern[0]],
        PROPERTY_LABELS.middle[pattern[1]],
        PROPERTY_LABELS.top[pattern[2]],
    ].join(' / ')
}

const hexagramRow = hexagram => html`
    <li>
        <a href="/hexagram/${hexagram.id}" class="hex-row-compact">
            <span class="hex-num">${hexagram.id}.</span>
            <span class="hex-glyph">${raw(renderHexagramGlyph(hexagram.pattern))}</span>
            <span class="hex-name">${hexagram.name}</span>
        </a>
    </li>
`

class Trigram {
    static getTrigram(value) {
        return trigrams.find(t => t.pattern === value)
    }

    static title(value) {
        const t = Trigram.getTrigram(value)
        if (!t) return 'The Console'
        return `The Console | ${t.name}`
    }

    static render(value) {
        const trigram = Trigram.getTrigram(value)
        if (!trigram) {
            return html`
                <h2>Not found</h2>
                <p>That trigram doesn't exist. Try the <a href="/">home page</a>.</p>
            `
        }

        const asLower = hexagrams.filter(h => h.lower === trigram.name)
        const asUpper = hexagrams.filter(h => h.upper === trigram.name)

        return html`
            <h2>
                <span class="tri-glyph-large">${raw(renderTrigramGlyph(trigram.pattern, {className: 'glyph glyph-large'}))}</span>
                <span class="tri-name">${trigram.name}</span>
            </h2>

            <p class="tri-pattern">${patternLabel(trigram.pattern)}</p>
            <p class="tri-sense"><em>${trigram.coreSense}</em></p>
            <p>${trigram.description}</p>

            <h3>Range</h3>
            <dl class="tri-range">
                <dt>Inner life</dt><dd>${trigram.range.innerLife}</dd>
                <dt>Relationships</dt><dd>${trigram.range.relationships}</dd>
                <dt>Work</dt><dd>${trigram.range.work}</dd>
                <dt>Body</dt><dd>${trigram.range.body}</dd>
                <dt>World</dt><dd>${trigram.range.world}</dd>
            </dl>

            <h3>In combination</h3>
            <p>${trigram.inCombination}</p>

            <h3>As present channel (lower)</h3>
            <ul class="hex-grid-compact">
                ${asLower.map(hexagramRow)}
            </ul>

            <h3>As emerging channel (upper)</h3>
            <ul class="hex-grid-compact">
                ${asUpper.map(hexagramRow)}
            </ul>
        `
    }
}

export default Trigram
