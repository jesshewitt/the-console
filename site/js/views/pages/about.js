import {html} from '../../html.js'

class About {
    static title() { return 'The Console | About' }

    static render() {
        return html`
            <h2>What this is</h2>
            <p>A divination deck. Each card names a recognizable life situation through a tech metaphor and offers
            something to notice and a move to consider. The reading offers a fresh description of where you are. Not a
            prediction, not instruction, just a frame to sit with.</p>

            <h2>How a reading works</h2>
            <p>You draw a card by entering a seed string. Any string works: a word, a phrase, a timestamp. The seed
            deterministically selects one card from the deck. The same seed always produces the same card, so readings
            are reproducible and shareable. The URL is the reading.</p>
            <p>The in-app reading link generates a random seed for you. You can also edit the URL seed directly.</p>

            <h2>How to use it well</h2>
            <p>The reading lands as useful when you bring attention to it. Read the card, sit with the name, and notice
            how it might apply to where you are right now. The system gives you a frame your habitual thinking might
            not have generated. The work happens in the moment of seeing.</p>
            <p>Whether the draw landed on the right card through some mechanism or whether you're finding resonance
            with whichever card you got is beside the point. Both stances work. The reframing happens regardless.</p>

            <h2>Notes on origins</h2>
            <p>The card names are drawn from the signal, networking, and systems register. The entries were written
            specifically for this project.</p>
            <p>The code is MIT-licensed. The content (the card entries) is dedicated to the public domain under
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 Universal</a>.</p>
        `
    }
}

export default About
