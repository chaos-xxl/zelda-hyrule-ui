import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const OUT_DIR = 'poster-export'
mkdirSync(OUT_DIR, { recursive: true })

const BASE = 'http://localhost:5173'
const SCALE = 3 // 3x for high-resolution (retina-quality) export

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: SCALE })

// Wide viewport so the posters render at full size
await page.setViewportSize({ width: 1400, height: 1400 })

// Square off the rounded corners + drop shadow for export only.
// (Rounded corners leave transparent triangles that look like white corners
//  on GitHub's white background. Square edges screenshot cleanly.)
const SQUARE_OFF = `
  .poster-21x9, .poster-1x1, .poster-3x4, .xhs-card {
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`

// ── Brand posters (#/poster) ──
await page.goto(`${BASE}/#/poster`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
await page.addStyleTag({ content: SQUARE_OFF })

const posterTargets = [
  { selector: '.poster-21x9', file: 'share-card-21x9.png' },
  { selector: '.poster-1x1', file: 'share-card-1x1.png' },
  { selector: '.poster-3x4:not(.poster-3x4-zh)', file: 'feature-onepager-3x4.png' },
  { selector: '.poster-3x4-zh', file: 'feature-onepager-3x4-zh.png' },
]

for (const { selector, file } of posterTargets) {
  const el = await page.$(selector)
  if (!el) { console.error(`✗ element not found: ${selector}`); continue }
  await el.screenshot({ path: `${OUT_DIR}/${file}` })
  const box = await el.boundingBox()
  console.log(`✓ ${file}  (${Math.round(box.width * SCALE)}×${Math.round(box.height * SCALE)} px @ ${SCALE}x)`)
}

// ── XHS cards (#/xhs) — 小红书 3:4 组图 ──
await page.goto(`${BASE}/#/xhs`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
await page.addStyleTag({ content: SQUARE_OFF })

const xhsCards = await page.$$('.xhs-card')
let i = 1
for (const el of xhsCards) {
  const file = `xhs-${i}.png`
  await el.screenshot({ path: `${OUT_DIR}/${file}` })
  const box = await el.boundingBox()
  console.log(`✓ ${file}  (${Math.round(box.width * SCALE)}×${Math.round(box.height * SCALE)} px @ ${SCALE}x)`)
  i++
}

// ── Milestone poster (#/milestone) — 朋友圈纪念海报 ──
// 导出时拉一次 GitHub 实时 star / fork 数，注入海报（#/milestone?stars=NNN&forks=NNN）
let stars = '142', forks = '18'
try {
  const res = await fetch('https://api.github.com/repos/chaos-xxl/zelda-hyrule-ui')
  const data = await res.json()
  if (data.stargazers_count != null) stars = String(data.stargazers_count)
  if (data.forks_count != null) forks = String(data.forks_count)
  console.log(`  (live: ${stars} stars, ${forks} forks)`)
} catch {
  console.warn('  (GitHub API unreachable — using defaults 142 / 18)')
}

await page.goto(`${BASE}/#/milestone?stars=${stars}&forks=${forks}`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
await page.addStyleTag({ content: SQUARE_OFF })

const milestoneEl = await page.$('.poster-milestone')
if (milestoneEl) {
  await milestoneEl.screenshot({ path: `${OUT_DIR}/milestone-100stars-3x4.png` })
  const box = await milestoneEl.boundingBox()
  console.log(`✓ milestone-100stars-3x4.png  (${Math.round(box.width * SCALE)}×${Math.round(box.height * SCALE)} px @ ${SCALE}x)`)
}

// ── Launch set (#/launch) — 官方曝光首发 6 张组图 ──
await page.goto(`${BASE}/#/launch`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
await page.addStyleTag({ content: SQUARE_OFF })

const launchCards = await page.$$('.xhs-card')
let li = 1
for (const el of launchCards) {
  const file = `launch-${li}.png`
  await el.screenshot({ path: `${OUT_DIR}/${file}` })
  const box = await el.boundingBox()
  console.log(`✓ ${file}  (${Math.round(box.width * SCALE)}×${Math.round(box.height * SCALE)} px @ ${SCALE}x)`)
  li++
}

await browser.close()
console.log(`\nSaved to ./${OUT_DIR}/`)