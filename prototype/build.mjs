// build.mjs — Assemble a single, self-contained index.html from Kaani.html.
//
// Why: Kaani.html loads its JSX modules with <script type="text/babel" src="…">.
// Babel-standalone fetches those over XHR, which Chrome/Edge block under the
// file:// protocol — so double-clicking Kaani.html yields a blank page.
// This script inlines each module's contents into the page so the app runs by
// simply opening index.html (the React/Babel CDN scripts stay external).
//
// Run:  node build.mjs   →  writes index.html
// Re-run any time you edit a module under app/ or a frame.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(resolve(root, 'Kaani.html'), 'utf8');

// Replace each local babel module <script src="…"> with its inlined contents.
// Remote scripts (https://…) are left untouched.
const tag = /<script type="text\/babel" src="([^"]+)"><\/script>/g;

let count = 0;
const html = template.replace(tag, (whole, src) => {
  if (/^https?:\/\//.test(src)) return whole; // leave CDN scripts external
  const file = resolve(root, src);
  let code = readFileSync(file, 'utf8');
  // Guard against an accidental </script> inside a module breaking the parse.
  code = code.replace(/<\/script>/gi, '<\\/script>');
  count++;
  return `<script type="text/babel" data-module="${src}">\n${code}\n</script>`;
});

if (count === 0) {
  console.error('No local <script type="text/babel" src> tags found — nothing inlined.');
  process.exit(1);
}

writeFileSync(resolve(root, 'index.html'), html, 'utf8');
console.log(`index.html written — inlined ${count} module(s).`);
