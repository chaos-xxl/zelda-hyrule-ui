import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const OUT_DIR = 'poster-export'
mkdirSync(OUT_DIR, { recursive: true })

const URL = 'http://localhost:5173/#/poster'
const SCALE = 3 // 3x for high-resolution (retina-quality) export

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: SCALE })

// Wide viewport so the 1120px 21:9 poster renders at full size
await page.setViewportSize({ width: 1400, height: 1400 })
await page.goto(URL, { waitUntil: 'networkidle' })

// Let scanline animation + fonts settle
await page.waitForTimeout(1500)

const targets = [
  { selector: '.poster-21x9', file: 'share-card-21x9.png' },
  { selector: '.poster-1x1', file: 'share-card-1x1.png' },
  { selector: '.poster-3x4:not(.poster-3x4-zh)', file: 'feature-onepager-3x4.png' },
  { selector: '.poster-3x4-zh', file: 'feature-onepager-3x4-zh.png' },
]

for (const { selector, file } of targets) {
  const el = await page.$(selector)
  if (!el) {
    console.error(`✗ element not found: ${selector}`)
    continue
  }
  await el.screenshot({ path: `${OUT_DIR}/${file}` })
  const box = await el.boundingBox()
  console.log(`✓ ${file}  (${Math.round(box.width * SCALE)}×${Math.round(box.height * SCALE)} px @ ${SCALE}x)`)
}

await browser.close()
console.log(`\nSaved to ./${OUT_DIR}/`)
