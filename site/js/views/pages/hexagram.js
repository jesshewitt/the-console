import hexagrams from '/data/hexagrams.json' with { type: 'json' }
import trigrams from '/data/trigrams.json' with { type: 'json' }
import {html, raw} from '../../html.js'
import {renderTrigramGlyph, renderHexagramGlyph} from '../../glyphs.js'

function getTrigram(name) {
    return trigrams.find(t => t.name === name)
}

class Hexagram {
    static getHexagram(id) {
        const numericId = parseInt(id, 10)
        return hexagrams.find(h => h.id === numericId)
    }

    static title(id) {
        const h = Hexagram.getHexagram(id)
        if (!h) return 'The Console'
        return `The Console | ${h.name}`
    }

    static render(id) {
        const hexagram = Hexagram.getHexagram(id)
        if (!hexagram) {
            return html`
                <h2>Not found</h2>
                <p>That hexagram doesn't exist. Try the <a href="/">home page</a>.</p>
            `
        }

        const lowerTrigram = getTrigram(hexagram.lower)
        const upperTrigram = getTrigram(hexagram.upper)

        return html`
            <h2 class="hex-heading">
                <span class="hex-glyph-large">${raw(renderHexagramGlyph(hexagram.pattern, {className: 'glyph glyph-large'}))}</span>
                <span class="hex-num-large">#${hexagram.id}</span>
                <span class="hex-name-large">${hexagram.name}</span>
            </h2>

            <p class="hex-composition-detail">
                <a href="/trigram/${lowerTrigram.pattern}">${hexagram.lower}</a>
                <span class="hex-comp-label">(present)</span>
                <span class="hex-arrow">→</span>
                <a href="/trigram/${upperTrigram.pattern}">${hexagram.upper}</a>
                <span class="hex-comp-label">(emerging)</span>
            </p>

            <p class="hex-sense"><em>${hexagram.coreSense}</em></p>

            <p class="hex-image">${hexagram.image}</p>

            <h3>The two channels</h3>
            <div class="hex-channels">
                <div class="hex-channel">
                    <span class="hex-channel-glyph">${raw(renderTrigramGlyph(lowerTrigram.pattern))}</span>
                    <strong><a href="/trigram/${lowerTrigram.pattern}">${lowerTrigram.name}</a></strong>
                    <span class="hex-channel-label">present</span>
                    <p>${lowerTrigram.coreSense}</p>
                </div>
                <div class="hex-channel">
                    <span class="hex-channel-glyph">${raw(renderTrigramGlyph(upperTrigram.pattern))}</span>
                    <strong><a href="/trigram/${upperTrigram.pattern}">${upperTrigram.name}</a></strong>
                    <span class="hex-channel-label">emerging</span>
                    <p>${upperTrigram.coreSense}</p>
                </div>
            </div>
        `
    }
}

export default Hexagram
