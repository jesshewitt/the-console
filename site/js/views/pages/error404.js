import {html} from '../../html.js'

class Error404 {
    static title() { return '404 - The Console' }

    static render() {
        return html`<h2>404</h2><p>Page not found.</p>`
    }
}

export default Error404
