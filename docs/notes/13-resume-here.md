# Resume here

Last working session ended mid-edit. State summary and next steps.

## Where things are

**Committed (last SHA `2325a9a`):**
- 24-card oracle deck pivot is done, web app working
- Manrope font, "draw a card" wording, no more 24-card mentions
- Field names in `content/cards.mjs` are still `situation` / `underneath` / `move`
- Handshake content is the original auto-drafted version

**Decided in chat but not yet applied:**
- Field rename: `situation` -> `brief`, `underneath` -> `situation`, `move` -> `reflection`
- New display labels: no label for brief (lead paragraph), "Situation", "Reflection"
- Handshake's new content (see below)

## Next steps

1. Rename fields across all 24 cards in `content/cards.mjs`:
   - `move:` -> `reflection:` (sed pass 1)
   - `situation:` -> `brief:` (sed pass 2)
   - `underneath:` -> `situation:` (sed pass 3)
   Order matters: do `move` first, then `situation` (becomes brief), then `underneath` (becomes situation).
   Use `sed -i.bak ... content/cards.mjs` and remove the `.bak` after.

2. Apply Handshake's settled content:
   - brief: "Setup is complete and you are ready for action."
   - situation: "This might be a new job started, a relationship made official, a contract signed, a mentorship begun, or a team joined. The setup is done and what comes next is the actual work."
   - reflection: "Take a moment to consider all of the ways this change will impact your life. Is there anything you can do to feel prepared?"

3. Update views for new field names and section labels:
   - `site/js/views/pages/card.js` - render brief as lead paragraph, "Situation" h3, "Reflection" h3
   - `site/js/views/pages/home.js` - row shows `card.brief` (was `card.situation`)
   - `site/js/views/pages/reading.js` - same structure as card.js
   - `test/smoke.test.js` - field names in shape test
   - `node content/build.mjs` and `node --test`

4. Continue card-by-card refinement, starting with card 2 (Connection Refused). Discuss before drafting; settle on tech meaning + life applications + reflection direction; then write.

## Constraints to keep in mind

- No em dashes, no spaced hyphens used as separators, no semicolons in prose, no "this isn't X, it's Y" patterns
- The 24 cards are: Handshake, Connection Refused, Timeout, Loopback, Bridge, Buffer Full, Stale Cache, Memory Leak, Race Condition, Cache Miss, Echo, Static, Ping, Throttled, Idle, Polling, Sync, Latency, Fork, Deadlock, Merge, Garbage Collection, Patch, Reset
- Working directory is `/Users/jess/dev/divination`. Bash tool resets cwd between calls; prefix commands with `cd /Users/jess/dev/divination &&` or use absolute paths.
