import { chromium } from 'playwright'

const WIDTHS = [320, 375, 390]
const ROUTES = [
  { hash: '', name: 'landing' },
  { hash: '#/docs', name: 'docs' },
  { hash: '#/mobile', name: 'mobile' },
]
const browser = await chromium.launch()

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 800 }, deviceScaleFactor: 2 })
    await page.goto(`http://localhost:5173/${route.hash}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)

    const docW = await page.evaluate(() => document.documentElement.scrollWidth)
    const overflowed = docW > width + 1

    const offenders = await page.evaluate((vw) => {
      const out = []
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        if (r.right > vw + 1) {
          out.push({
            tag: el.tagName.toLowerCase(),
            cls: (typeof el.className === 'string') ? el.className.slice(0, 36) : '',
            right: Math.round(r.right),
            w: Math.round(r.width),
          })
        }
      }
      return out.sort((a, b) => b.right - a.right).slice(0, 8)
    }, width)

    // tiny tap targets (<40px) among clickable els
    const smallTargets = await page.evaluate(() => {
      let n = 0
      for (const el of document.querySelectorAll('button, a, [role=button]')) {
        const r = el.getBoundingClientRect()
        if (r.width === 0) continue
        if (r.height < 36 || r.width < 36) n++
      }
      return n
    })

    const flag = overflowed ? 'OVERFLOW ⚠️' : 'ok'
    console.log(`[${route.name} @ ${width}] scrollW=${docW} ${flag}  smallTapTargets=${smallTargets}`)
    for (const o of offenders) console.log(`     ↦ ${o.tag}.${o.cls} right=${o.right} w=${o.w}`)
    await page.close()
  }
}
await browser.close()
