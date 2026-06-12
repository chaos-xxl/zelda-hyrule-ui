// 构建后处理：从 dist/types/index.d.ts 删除 less 副作用 import。
// tsc 会把 `import '@core/styles/fonts.less'` 原样写进声明文件，
// 但该路径在发布包内不存在（字体已编进 dist/index.css），
// 不删的话，关闭 skipLibCheck 的消费者会得到 TS2307。
import { readFileSync, writeFileSync } from 'node:fs'

const file = new URL('../packages/react/dist/types/index.d.ts', import.meta.url)
const before = readFileSync(file, 'utf8')
const after = before
  .split('\n')
  .filter((line) => !/^import\s+'[^']*\.less';?\s*$/.test(line))
  .join('\n')

if (after !== before) {
  writeFileSync(file, after)
  console.log('[strip-types] removed .less side-effect import from index.d.ts')
} else {
  console.log('[strip-types] nothing to strip')
}
