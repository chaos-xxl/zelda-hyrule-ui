#!/usr/bin/env node
/**
 * A11y 审计脚本（长期 QA 工具，同 audit-mobile.mjs / audit-docs-coverage.mjs）
 * 扫描 src/components 下的 tsx，找出可能的无障碍缺口：
 *  1. <button> 没有可见文字也没有 aria-label
 *  2. onClick 挂在 div/span 上（非语义元素）
 *  3. inline <svg> 缺 aria-hidden（装饰性图标）
 *  4. <img> 缺 alt
 *
 * 注：会有少量已知误报（多行标签的属性在下一行、按钮内有可见文字 span 等），
 * 输出需人工复核。运行：node scripts/audit-a11y.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../packages/react/src/components', import.meta.url))

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else if (p.endsWith('.tsx')) out.push(p)
  }
  return out
}

const files = walk(ROOT)
const findings = { iconButton: [], divClick: [], svgNoHidden: [], imgNoAlt: [] }

for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const rel = f.replace(ROOT + '/', '')

  // 1. <button ...> 块里既无 {children}/文字 也无 aria-label
  const btnRe = /<button\b[^>]*>/g
  let m
  while ((m = btnRe.exec(src))) {
    const tag = m[0]
    if (!/aria-label|aria-labelledby/.test(tag)) {
      // 粗判：标签内若立即跟 <svg / <Icon / 组件，疑似纯图标
      const after = src.slice(m.index + tag.length, m.index + tag.length + 60)
      if (/^\s*\{?\s*<(svg|[A-Z]|.*Icon)/.test(after) || /Icon|svg/i.test(after)) {
        findings.iconButton.push(`${rel}: ${tag.slice(0, 80)}`)
      }
    }
  }

  // 2. onClick 在 div/span
  const divClickRe = /<(div|span)\b[^>]*\sonClick=/g
  while ((m = divClickRe.exec(src))) {
    const tag = src.slice(m.index, m.index + 90)
    if (!/role=/.test(tag)) findings.divClick.push(`${rel}: ${tag.slice(0, 80)}`)
  }

  // 3. inline <svg ...> 没有 aria-hidden 且没有 role/aria-label
  const svgRe = /<svg\b[^>]*>/g
  while ((m = svgRe.exec(src))) {
    const tag = m[0]
    if (!/aria-hidden|role=|aria-label/.test(tag)) {
      findings.svgNoHidden.push(`${rel}: ${tag.slice(0, 70)}`)
    }
  }

  // 4. <img ...> 没有 alt
  const imgRe = /<img\b[^>]*\/?>/g
  while ((m = imgRe.exec(src))) {
    const tag = m[0]
    if (!/\balt=/.test(tag)) findings.imgNoAlt.push(`${rel}: ${tag.slice(0, 70)}`)
  }
}

const print = (title, arr) => {
  console.log(`\n=== ${title} (${arr.length}) ===`)
  arr.forEach((x) => console.log('  ' + x))
}
print('图标按钮缺 aria-label', findings.iconButton)
print('div/span 挂 onClick 缺 role', findings.divClick)
print('inline svg 缺 aria-hidden', findings.svgNoHidden)
print('img 缺 alt', findings.imgNoAlt)
console.log(`\n扫描 ${files.length} 个 tsx 文件。`)
