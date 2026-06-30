import {html} from '../../html.js'

class About {
    static title() { return 'The Console | About' }

    static render() {
        return html`
            <h2>What this is</h2>
            <p>A divination deck of 12 cards. Each card names a structural pattern with a tech
            metaphor, then reads it back as a question about your situation. A reading offers a
            frame for the moment you're in — a way to notice what kind of pattern you're caught in.</p>
            <p>The deck draws on the idea that the same structures recur across very different
            systems. A firewall deciding what may pass is also a person deciding what to let into
            their life. A model that simplifies in order to predict is also a belief that explains
            by leaving things out. Each card names one of these patterns.</p>

            <h2>The four categories</h2>
            <p>Every card belongs to one of four categories — four questions you can ask of any
            situation.</p>
            <p><strong class="category-perception">Perception.</strong> How do I see this?
            (Radar, Focus, Model)</p>
            <p><strong class="category-agency">Agency.</strong> How do I engage with this?
            (Run, Constraint, Update)</p>
            <p><strong class="category-connection">Connection.</strong> How do I relate to this?
            (Connection, Signal, Trust)</p>
            <p><strong class="category-structure">Structure.</strong> How is this organized?
            (Sync, Transaction, Firewall)</p>

            <h2>The two voices</h2>
            <p>Each card speaks twice. <em>System Documentation</em> describes the literal
            mechanism — what the thing does in a computer or a network. The <em>Operator's
            Guide</em> reads that mechanism as a dimension of your situation, with a handful of
            ways it commonly shows up.</p>

            <h2>How a reading works</h2>
            <p>A reading draws one of the 12 cards at random. Each reading is reproducible and
            shareable through its URL.</p>

            <h2>License</h2>
            <p>The code is MIT-licensed. The content (the card entries) is dedicated to the public
            domain under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0
            Universal</a>.</p>
        `
    }
}

export default About
