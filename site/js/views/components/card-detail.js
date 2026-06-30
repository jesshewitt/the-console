import {html} from '../../html.js'

// Shared two-voice card markup for the card detail and reading pages.
// Pure function of (card, categories) so it can be unit-tested without the DOM.
export function cardDetail(card, categories) {
    const cat = categories[card.category]
    return html`
        <h2 class="card-name category-${card.category}">${card.name}</h2>
        <p class="card-meta"><span class="category-name category-${card.category}">${cat.label}</span><span class="category-question"> · ${cat.question}</span></p>
        <h3>System Documentation</h3>
        <p class="card-tech">${card.tech}</p>
        <h3>Operator's Guide</h3>
        <p class="card-dimension">${card.dimension}</p>
        <p class="card-dimension-note">${card.dimensionNote}</p>
        <ul class="card-manifestations">
            ${card.manifestations.map(m => html`<li>${m}</li>`)}
        </ul>
    `
}
