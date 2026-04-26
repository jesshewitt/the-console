// Renders trigram (3 lines) and hexagram (6 lines) as inline SVG strings.
// Lines stack bottom-to-top in the visual; pattern char 0 = bottom line.
// Uses currentColor so callers can color via CSS.

const LINE_HEIGHT = 6      // height of each line bar
const LINE_GAP = 4         // vertical gap between lines
const SOLID_WIDTH = 40     // total width of a solid bar
const BROKEN_GAP = 8       // gap in the middle of a broken line
const STROKE_PADDING = 2   // horizontal padding inside the SVG

function lineSvg(isOn, y) {
    if (isOn) {
        return `<rect x="${STROKE_PADDING}" y="${y}" width="${SOLID_WIDTH - STROKE_PADDING * 2}" height="${LINE_HEIGHT}" fill="currentColor"/>`
    }
    const halfWidth = (SOLID_WIDTH - STROKE_PADDING * 2 - BROKEN_GAP) / 2
    return (
        `<rect x="${STROKE_PADDING}" y="${y}" width="${halfWidth}" height="${LINE_HEIGHT}" fill="currentColor"/>` +
        `<rect x="${STROKE_PADDING + halfWidth + BROKEN_GAP}" y="${y}" width="${halfWidth}" height="${LINE_HEIGHT}" fill="currentColor"/>`
    )
}

function renderGlyph(pattern, options = {}) {
    // pattern[0] is the bottom line; it renders at the highest y value (visually lowest)
    const numLines = pattern.length
    const totalHeight = numLines * LINE_HEIGHT + (numLines - 1) * LINE_GAP
    const lines = []
    for (let i = 0; i < numLines; i++) {
        // line i (0 = bottom) sits at the bottom of the SVG, so y counts down from totalHeight
        const y = totalHeight - (i + 1) * LINE_HEIGHT - i * LINE_GAP
        const isOn = pattern[i] === '1'
        lines.push(lineSvg(isOn, y))
    }
    const className = options.className || 'glyph'
    return `<svg class="${className}" viewBox="0 0 ${SOLID_WIDTH} ${totalHeight}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${lines.join('')}</svg>`
}

export function renderTrigramGlyph(pattern, options) {
    if (typeof pattern !== 'string' || pattern.length !== 3) {
        throw new Error(`renderTrigramGlyph: pattern must be a 3-character string, got ${pattern}`)
    }
    return renderGlyph(pattern, options)
}

export function renderHexagramGlyph(pattern, options) {
    if (typeof pattern !== 'string' || pattern.length !== 6) {
        throw new Error(`renderHexagramGlyph: pattern must be a 6-character string, got ${pattern}`)
    }
    return renderGlyph(pattern, options)
}

/*
 * Sanity-check examples (run in Node with --input-type=module or copy into browser console):
 *
 * renderTrigramGlyph('111')
 *   => 3 solid lines, bottom to top all yang
 *
 * renderTrigramGlyph('000')
 *   => 3 broken lines, bottom to top all yin
 *
 * renderTrigramGlyph('101')
 *   => bottom solid, middle broken, top solid
 *   Pattern: pattern[0]='1' (solid, bottom), pattern[1]='0' (broken, middle), pattern[2]='1' (solid, top)
 *   Expected SVG has y=34 solid rect, y=20 broken rects, y=0 solid rect (totalHeight=34)
 *
 * renderHexagramGlyph('101010')
 *   => alternating solid/broken lines, 6 total, totalHeight=58
 */
