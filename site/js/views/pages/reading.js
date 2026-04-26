import hexagrams from '/data/hexagrams.json' with { type: 'json' }
import trigrams from '/data/trigrams.json' with { type: 'json' }
import {html, raw} from '../../html.js'
import {renderTrigramGlyph, renderHexagramGlyph} from '../../glyphs.js'
import {seeded} from '../../rng.js'

function castFromSeed(seed) {
    const rand = seeded(seed)
    const lines = []
    for (let i = 0; i < 6; i++) {
        lines.push(rand() > 0.5 ? '1' : '0')
    }
    return lines.join('')
}

function getHexagramByPattern(pattern) {
    return hexagrams.find(h => h.pattern === pattern)
}

function getTrigram(name) {
    return trigrams.find(t => t.name === name)
}

class Reading {
    static title(seed) {
        return `The Console | Reading ${seed}`
    }

    static render(seed) {
        const pattern = castFromSeed(seed)
        const hexagram = getHexagramByPattern(pattern)
        if (!hexagram) {
            return html`<p>Reading produced an unknown hexagram. This is a bug.</p>`
        }
        const lowerTrigram = getTrigram(hexagram.lower)
        const upperTrigram = getTrigram(hexagram.upper)
        const newSeed = Math.floor(Math.random() * 1e9).toString(36)

        return html`
            <p class="reading-seed">Cast from seed: <span class="reading-seed-value">${seed}</span></p>

            <h2 class="reading-heading">
                <span class="hex-glyph-large">${raw(renderHexagramGlyph(hexagram.pattern, {className: 'glyph glyph-large'}))}</span>
                <span class="reading-num">#${hexagram.id}</span>
                <span class="reading-name">${hexagram.name}</span>
            </h2>

            <p class="hex-composition-detail">
                <a href="/trigram/${lowerTrigram.pattern}">${hexagram.lower}</a>
                <span class="hex-comp-label">(present)</span>
                <span class="hex-arrow">→</span>
                <a href="/trigram/${upperTrigram.pattern}">${hexagram.upper}</a>
                <span class="hex-comp-label">(emerging)</span>
            </p>

            <p class="hex-sense"><em>${hexagram.coreSense}</em></p>

            <p class="reading-image">${hexagram.image}</p>

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

            <p class="reading-actions">
                <a href="/reading/${newSeed}">Cast another reading</a>
            </p>
        `
    }
}

export default Reading
