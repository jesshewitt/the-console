// Constructs site/data/cards.json from inline JS object array in cards.mjs.
import fs from 'node:fs/promises'
import {cards} from './cards.mjs'

await fs.writeFile('./site/data/cards.json', JSON.stringify(cards) + '\n')
console.log(`wrote site/data/cards.json with ${cards.length} entries`)
