import {html} from '../../html.js'

class About {
    static title() { return 'The Console | About' }

    static render() {
        return html`
            <h2>What this is</h2>
            <p>A divination deck of 24 cards. Each card names a recognizable life situation through a tech metaphor.
            The reading offers a structural frame for the moment you're in, a way to see what kind of pattern you're
            in.</p>
            <p>The deck draws on systems theory, the observation that the same structural patterns recur across very
            different domains. A stale cache could be compared to someone making a decision based on outdated information.
            A deadlock between two computer processes is similar to two friends each waiting for the other to apologize.
            Each card names one of these patterns.</p>

            <h2>The four dimensions</h2>
            <p>Each card belongs to one of four dimensions of any system.</p>
            <p><strong class="type-connection">Connection.</strong> Channels and relationships through which things
            interact. The six connection cards trace channel behavior from open and active (Handshake, Bridge,
            Loopback) through degraded (Echo, Static) to closed (Connection Refused).</p>
            <p><strong class="type-state">State.</strong> The current status of the system: capacity,
            configuration, what's been accumulating. The six state cards cover open availability (Idle, Throttled),
            capacity stress (Buffer Full), drift (Stale Cache, Memory Leak), and outright break (Crash).</p>
            <p><strong class="type-time">Time.</strong> Temporal patterns of a situation: rhythm, delay, alignment,
            waiting. The six time cards range from regular and active (Heartbeat, Sync) through active and passive
            waiting (Polling, Latency) to silence (Timeout) and mutual stuck (Deadlock).</p>
            <p><strong class="type-change">Change.</strong> Moments of structural transformation. The six change
            cards span small temporary fixes (Patch), divergence and convergence (Fork, Merge), clearing (Garbage
            Collection), recovery (Restore), and total reset (Reset).</p>

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
