// make-icons.mjs — Rasterize Kaani app icons (PNG) from the brand SVG using
// the installed Chrome in headless mode. No native image deps required.
//
//   npm run icons   (or: node scripts/make-icons.mjs)

import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pub = resolve(root, 'public');
const tmp = resolve(root, '.icontmp');
mkdirSync(pub, { recursive: true });
mkdirSync(tmp, { recursive: true });

// Locate Chrome.
const CHROME = process.env.CHROME || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((p) => existsSync(p));

if (!CHROME) {
  console.error('Chrome/Edge introuvable. Définissez la variable CHROME vers chrome.exe.');
  process.exit(1);
}

// Brand icon as an SVG string sized to exactly `size` px. `rx` rounds the
// corners; `leafSpan` sizes the leaf within the 512-unit viewBox.
function iconSVG({ rx, leafSpan, size }) {
  const k = (leafSpan / 14).toFixed(4);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16533D"/><stop offset="1" stop-color="#0C3426"/>
    </linearGradient>
    <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E2C173"/><stop offset="1" stop-color="#C79A3E"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="${rx}" fill="url(#bg)"/>
  <g transform="translate(256 256) scale(${k}) translate(-12 -13)">
    <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14a6 6 0 0 1-1-1Z" fill="url(#leaf)"/>
    <path d="M9 16c2.5-3 5-4.5 8-5.5" fill="none" stroke="#0C3426" stroke-width="0.7" stroke-linecap="round" stroke-opacity="0.55"/>
  </g>
</svg>`;
}

const targets = [
  { name: 'pwa-192.png',          size: 192, rx: 112, leafSpan: 300 },
  { name: 'pwa-512.png',          size: 512, rx: 112, leafSpan: 300 },
  { name: 'pwa-maskable-512.png', size: 512, rx: 0,   leafSpan: 230 },
  { name: 'apple-touch-icon.png', size: 180, rx: 0,   leafSpan: 300 },
];

for (const t of targets) {
  const svg = iconSVG(t);
  const html = `<!DOCTYPE html><html><head><meta charset="utf8"><style>
    html,body{margin:0;padding:0}svg{display:block}
  </style></head><body>${svg}</body></html>`;
  const htmlPath = resolve(tmp, t.name + '.html');
  const out = resolve(pub, t.name);
  writeFileSync(htmlPath, html, 'utf8');
  // file:// URL (Windows path → forward slashes, encode spaces)
  const url = 'file:///' + htmlPath.replace(/\\/g, '/').replace(/ /g, '%20');
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    `--force-device-scale-factor=1`,
    `--default-background-color=00000000`,
    `--window-size=${t.size},${t.size}`,
    `--screenshot=${out}`,
    url,
  ], { stdio: 'ignore' });
  console.log(`✓ ${t.name} (${t.size}×${t.size})`);
}

rmSync(tmp, { recursive: true, force: true });
console.log('Icônes générées dans public/.');
