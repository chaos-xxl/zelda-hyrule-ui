import { readFileSync } from 'fs'

const index = readFileSync('src/index.ts', 'utf8')
const app = readFileSync('demo/App.tsx', 'utf8')

// 1. Exported components (export { default as X })
const exported = [...index.matchAll(/export \{ default as (\w+) \}/g)].map(m => m[1])

// 2. Components listed in CATEGORIES sidebar (components: [...])
const catBlock = app.slice(app.indexOf('const CATEGORIES'), app.indexOf('// ─── Component Chinese'))
const sidebar = [...catBlock.matchAll(/'([A-Z]\w+)'/g)].map(m => m[1])
const sidebarSet = new Set(sidebar)

// 3. DemoSection title="X" actually rendered
const demoTitles = [...app.matchAll(/<DemoSection[^>]*title="(\w+)"/g)].map(m => m[1])
const demoSet = new Set(demoTitles)

// Screens are intentionally not in the per-component docs (they're page-level compositions)
const SCREENS = new Set(['MenuScreen','QuestScreen','LoadingScreen','TitleScreen','GameOverScreen','SystemScreen','ShopScreen','SheikahMapScreen','QuickSelectorScreen'])

const nonScreen = exported.filter(c => !SCREENS.has(c))

console.log(`exported (non-screen): ${nonScreen.length}`)
console.log(`exported screens:      ${exported.filter(c=>SCREENS.has(c)).length}`)
console.log(`sidebar entries:       ${sidebar.length}`)
console.log(`DemoSection rendered:  ${demoTitles.length}`)

const missingFromSidebar = nonScreen.filter(c => !sidebarSet.has(c))
const missingFromDemo = nonScreen.filter(c => !demoSet.has(c))
const inSidebarNotExported = sidebar.filter(c => !exported.includes(c))
const demoButNotExported = demoTitles.filter(c => !exported.includes(c))

console.log('\n=== 导出了但侧边栏没登记 ===')
console.log(missingFromSidebar.length ? missingFromSidebar.join(', ') : '(none)')

console.log('\n=== 导出了但 docs 正文没 DemoSection（找不到展示）===')
console.log(missingFromDemo.length ? missingFromDemo.join(', ') : '(none)')

console.log('\n=== 侧边栏里有但其实没导出（幽灵条目）===')
console.log(inSidebarNotExported.length ? inSidebarNotExported.join(', ') : '(none)')

console.log('\n=== 有 DemoSection 但没导出 ===')
console.log(demoButNotExported.length ? demoButNotExported.join(', ') : '(none)')
