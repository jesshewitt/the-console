import {html} from '../../html.js'

class About {
    static title() { return 'The Console | About' }

    static render() {
        return html`
            <h2>What this is</h2>
            <p>A divination system. Cast six binary draws to get one of 64 trajectories. Each trajectory describes a
            present channel - a way of being engaged in your situation right now - meeting an emerging channel, the way
            that's coming into being. The reading offers a fresh description of where you are and where you're going.
            Not a prediction, not instruction, just a frame to sit with.</p>
            <p>The I Ching is the structural ancestor: 64 hexagrams, six binary lines, the architecture of paired
            trigrams. The content here is original - written from a contemporary worldview built around channels and
            connections rather than the I Ching's natural-element imagery.</p>

            <h2>How a reading works</h2>
            <p>You cast a hexagram by generating six binary bits. Any randomization works: a coin flipped six times,
            the in-app generator, an entered seed string. The lower three bits form the present channel; the upper
            three form the emerging channel. Eight possible channel postures. 64 possible trajectories.</p>
            <p>A reading shows the present channel, the emerging channel, and a short text describing the trajectory
            between them. The same seed always produces the same hexagram, so readings are reproducible and shareable -
            the URL is the reading.</p>

            <h2>How to use it well</h2>
            <p>The reading lands as useful when you bring attention to it. Read the trajectory, sit with the image,
            and notice how it might apply to where you are right now. The system gives you a frame your habitual
            thinking might not have generated. The work happens in the moment of seeing.</p>
            <p>Whether the casting picked the matching hexagram through some mechanism or whether you're finding
            resonance with whichever hexagram you got is beside the point. Both stances work. The reframing happens
            regardless.</p>

            <h2>Notes on origins</h2>
            <p>The eight channel-state names (TRANSMIT, RECEIVE, BROADCAST, SCAN, AIM, TUNE, STANDBY, MONITOR) are
            drawn from the signal and communications register. The 64 hexagram entries were written specifically for
            this project, not adapted from any prior text.</p>
            <p>The code is MIT-licensed. The content - channel-state descriptions and hexagram entries - is dedicated
            to the public domain under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0
            Universal</a>. Acknowledgment to the I Ching as structural ancestor; gratitude to the contemporary
            divination community whose work informed the framing.</p>
        `
    }
}

export default About
