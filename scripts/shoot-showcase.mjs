/**
 * Capture uniform README thumbnails for the public/showcase/*.html demos.
 *
 *   node scripts/shoot-showcase.mjs
 *
 * Opens each showcase via file:// (assets are inlined, so no dev server needed),
 * squares off the slate's rounded corners, and clips to the framed panel at a
 * tidy card ratio. Output → docs/showcase/<out>.png (referenced by the README grid).
 *
 * To add a case: drop a new entry in SHOTS, rerun, then add a <td> to the README
 * showcase table.
 */
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const SHOTS = [
  { file: 'finals-boss-rush.html', out: 'boss-rush.png' },
  { file: 'june-quest-calendar.html', out: 'calendar.png' },
]

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1180, height: 760 } })

for (const { file, out } of SHOTS) {
  await page.goto(`file://${ROOT}/public/showcase/${file}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.addStyleTag({ content: '.slate{border-radius:0 !important;box-shadow:none !important} body{padding:0 !important}' })
  await page.waitForTimeout(600)
  const box = await page.locator('.slate').boundingBox()
  const w = Math.round(box.width)
  const h = Math.min(Math.round(box.height), Math.round(w * 0.62)) // cap to ~16:10 card
  await page.screenshot({ path: `${ROOT}/docs/showcase/${out}`, clip: { x: Math.round(box.x), y: Math.round(box.y), width: w, height: h } })
  console.log('shot', out, `${w}x${h}`)
}

await browser.close()
