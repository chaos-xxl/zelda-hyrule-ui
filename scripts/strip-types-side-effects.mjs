// 构建后处理：从 dist/types/index.d.ts 删除 less 副作用 import。
// tsc/vite-plugin-dts 会把 `import '@core/styles/fonts.less'` 原样写进声明文件，
// 但该路径在发布包内不存在（字体已编进 dist/index.css），
// 不删的话，关闭 skipLibCheck 的消费者会得到 TS2307。
// 用法：node strip-types-side-effects.mjs [d.ts路径，相对 cwd]
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const target = process.argv[2] ?? 'dist/types/index.d.ts'
const file = resolve(process.cwd(), target)
const before = readFileSync(file, 'utf8')
const after = before
  .split('\n')
  .filter((line) => !/^import\s+'[^']*\.less';?\s*$/.test(line))
  .join('\n')

if (after !== before) {
  writeFileSync(file, after)
  console.log(`[strip-types] removed .less side-effect import from ${target}`)
} else {
  console.log(`[strip-types] nothing to strip in ${target}`)
}
