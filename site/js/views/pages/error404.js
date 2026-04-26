import {html} from '../../html.js'

class Error404 {
    static title() { return 'The Console | Not Found' }

    static render() {
        return html`
            <h2>Page not found</h2>
            <p>That page doesn't exist. Try the <a href="/">home page</a>.</p>
        `
    }
}

export default Error404
