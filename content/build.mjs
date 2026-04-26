// Constructs site/data/trigrams.json and site/data/hexagrams.json
// from inline JS object arrays in trigrams.mjs and hexagrams.mjs.
import fs from 'node:fs/promises'
import {trigrams} from './trigrams.mjs'
import {hexagrams} from './hexagrams.mjs'

await fs.writeFile('./site/data/trigrams.json', JSON.stringify(trigrams) + '\n')
console.log(`wrote site/data/trigrams.json with ${trigrams.length} entries`)

await fs.writeFile('./site/data/hexagrams.json', JSON.stringify(hexagrams) + '\n')
console.log(`wrote site/data/hexagrams.json with ${hexagrams.length} entries`)
