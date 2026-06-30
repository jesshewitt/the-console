// Constructs site/data/*.json from the inline exports in cards.mjs.
import fs from 'node:fs/promises'
import {cards, categories} from './cards.mjs'

await fs.writeFile('./site/data/cards.json', JSON.stringify(cards) + '\n')
await fs.writeFile('./site/data/categories.json', JSON.stringify(categories) + '\n')
console.log(`wrote site/data/cards.json with ${cards.length} entries`)
console.log(`wrote site/data/categories.json with ${Object.keys(categories).length} categories`)
