import {html} from '../../html.js'

class About {
    static title() { return 'The Console | About' }

    static render() {
        return html`
            <h2>What this is</h2>
            <p>A divination deck of 24 cards. Each card names a recognizable life situation through a tech metaphor.
            The reading offers a structural frame for the moment you're in, a way to see what kind of pattern you're
            in.</p>
            <p>The cards group into four dimensions of any system:
            <span class="type-connection">connection</span> (how things relate),
            <span class="type-state">state</span> (how things are),
            <span class="type-time">time</span> (how time unfolds), and
            <span class="type-change">change</span> (how things shift).</p>
            <p>The deck draws on systems theory, the observation that the same structural patterns recur across very
            different domains. A stale cache could be compared to someone making a decision based on outdated information. 
            A deadlock between two computer processes is similar to two friends each waiting for the other to apologize. 
            Each card names one of these patterns.</p>

            <h2>How a reading works</h2>
            <p>A reading selects one of the 24 cards at random. Each reading is reproducible and shareable through
            its URL.</p>

            <h2>License</h2>
            <p>The code is MIT-licensed. The content (the card entries) is dedicated to the public domain under
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 Universal</a>.</p>
        `
    }
}

export default About
