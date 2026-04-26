import {html} from '../../html.js'

class Footer {
    static render() {
        return html`
            <p>
                <strong>The Console</strong> - code
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT</a>,
                content
                <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener">CC0</a>
                by Jess Hewitt.
                <!-- TODO: add GitHub link once repo is public -->
            </p>
        `
    }
}

export default Footer
