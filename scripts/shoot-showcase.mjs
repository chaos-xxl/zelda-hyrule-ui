/**
 * Generate all showcase assets in one shot:
 *   node scripts/shoot-showcase.mjs
 *
 * 1. favicon — public/showcase/sheikah-eye.svg, built from the real package
 *    Sheikah eye (sheikah-symbol.svg): blue eye on a dark rounded panel.
 * 2. README thumbnails — docs/showcase/{boss-rush,calendar}.png, clipped to the
 *    framed panel at a tidy card ratio (referenced by the README showcase grid).
 * 3. OG share images — public/showcase/{finals-boss-rush,june-quest-calendar}-og.png,
 *    2400×1260 (2× of 1200×630) for social cards (og:image / twitter:image).
 *
 * Each page is opened via file:// (assets are inlined, so no dev server needed).
 * To add a case: add it to PAGES, rerun, then add a <td> to the README grid.
 */
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const PAGES = [
  { file: 'finals-boss-rush.html', thumb: 'boss-rush.png', og: 'finals-boss-rush-og.png' },
  { file: 'june-quest-calendar.html', thumb: 'calendar.png', og: 'june-quest-calendar-og.png' },
  { file: 'daily-shrine-tracker.html', thumb: 'shrine-tracker.png', og: 'daily-shrine-tracker-og.png' },
  { file: 'shrine-focus-timer.html', thumb: 'focus-timer.png', og: 'shrine-focus-timer-og.png' },
]

// ── 1. favicon from the real Sheikah eye ──────────────────────────────────────
const symbol = readFileSync(`${ROOT}/packages/core/assets/svg/sheikah-symbol.svg`, 'utf8')
const inner = symbol
  .replace(/^[\s\S]*?<svg[^>]*>/, '') // strip opening <svg ...>
  .replace(/<\/svg>\s*$/, '') // strip closing </svg>
  .replace(/var\(--fill-0,\s*white\)/g, '#3CD3FC') // hard-code the blue eye (no CSS vars in a favicon)
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380">
<rect width="380" height="380" rx="84" fill="#0a1628"/>
<g transform="translate(0,15)">${inner}</g>
</svg>
`
writeFileSync(`${ROOT}/public/showcase/sheikah-eye.svg`, favicon)
console.log('wrote favicon sheikah-eye.svg')

// ── screenshots ───────────────────────────────────────────────────────────────
const browser = await chromium.launch()

// 2. README thumbnails (clip to slate panel, ~16:10)
const thumbPage = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1180, height: 760 } })
for (const { file, thumb } of PAGES) {
  await thumbPage.goto(`file://${ROOT}/public/showcase/${file}`, { waitUntil: 'networkidle' })
  await thumbPage.evaluate(() => document.fonts.ready)
  await thumbPage.addStyleTag({ content: '.slate{border-radius:0 !important;box-shadow:none !important} body{padding:0 !important}' })
  await thumbPage.waitForTimeout(600)
  const box = await thumbPage.locator('.slate').boundingBox()
  const w = Math.round(box.width)
  const h = Math.min(Math.round(box.height), Math.round(w * 0.62))
  await thumbPage.screenshot({ path: `${ROOT}/docs/showcase/${thumb}`, clip: { x: Math.round(box.x), y: Math.round(box.y), width: w, height: h } })
  console.log('thumb', thumb, `${w}x${h}`)
}

// 3. OG share images — fixed 1200×630 viewport @2× = 2400×1260
const ogPage = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1200, height: 630 } })
for (const { file, og } of PAGES) {
  await ogPage.goto(`file://${ROOT}/public/showcase/${file}`, { waitUntil: 'networkidle' })
  await ogPage.evaluate(() => document.fonts.ready)
  // fill the card: trim page padding, keep the slate's framed look
  await ogPage.addStyleTag({ content: 'body{padding:14px !important} .slate{box-shadow:none !important}' })
  await ogPage.waitForTimeout(600)
  await ogPage.screenshot({ path: `${ROOT}/public/showcase/${og}` }) // viewport-sized → 2400×1260
  console.log('og', og, '2400x1260')
}

await browser.close()
