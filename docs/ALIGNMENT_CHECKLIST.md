# zelda-hyrule-ui 对标 animal-island-ui 检查清单

每次开发前/后对照此清单，确保不偏离对标方向。

---

## 构建配置对标

| 配置项 | animal-island-ui | zelda-hyrule-ui | 状态 |
|--------|-----------------|-----------------|------|
| Vite library mode | ✅ | ✅ | ✅ |
| ESM + CJS 双输出 | ✅ | ✅ | ✅ |
| `@laynezh/vite-plugin-lib-assets` | ✅ limit:0 | ✅ limit:0 | ✅ |
| CSS Modules 类名前缀 | `animal-[local]-[hash:5]` | `zelda-[local]-[hash:5]` | ✅ |
| Less 全局变量注入 | `additionalData: @import variables` | ✅ 已配置 | ✅ |
| cssCodeSplit: false | ✅ | ✅ | ✅ |
| external react/react-dom | ✅ | ✅ | ✅ |
| vite-plugin-dts 类型生成 | ✅ | ✅ (tsconfig.build.json) | ✅ |

## package.json 对标

| 字段 | animal-island-ui | zelda-hyrule-ui | 状态 |
|------|-----------------|-----------------|------|
| exports (./style) | ✅ | ✅ | ✅ |
| files 包含 dist + AI_USAGE.md | ✅ | ✅ | ✅ |
| sideEffects | ✅ | ✅ | ✅ |
| homepage | ✅ | ✅ | ✅ |
| bugs | ✅ | ✅ | ✅ |
| prepublishOnly | ✅ | ✅ | ✅ |
| deploy 脚本 (gh-pages) | ✅ | ✅ | ✅ |
| peerDependencies react>=17 | ✅ | ✅ | ✅ |

## 文档体系对标

| 文档 | animal-island-ui | zelda-hyrule-ui | 状态 |
|------|-----------------|-----------------|------|
| AI_USAGE.md（随 npm 发布） | ✅ 682 行 | ✅ 450 行（随组件增长） | 🟡 |
| skill/SKILL.md（仅 repo） | ✅ 1450 行 | ✅ 766 行（随组件增长） | 🟡 |
| DESIGN_PROMPT.md（仅 repo） | ✅ 332 行 | ✅ 176 行 | 🟡 |
| README.md | ✅ | ✅ | ✅ |
| CONTRIBUTING.md | ✅ | ❌ 待补 | 🔴 |

## 开发规范对标

| 规范 | animal-island-ui | zelda-hyrule-ui | 状态 |
|------|-----------------|-----------------|------|
| 组件必须设置 displayName | ✅ | ✅ | ✅ |
| 每个组件独立文件夹 | ✅ | ✅ | ✅ |
| index.ts 统一导出 | ✅ | ✅ | ✅ |
| Props interface 导出 | ✅ | ✅ | ✅ |
| Less Modules (非全局 CSS) | ✅ | ✅ | ✅ |
| classnames 库 | ✅ | ✅ | ✅ |
| SVG 作为独立文件输出 | ✅ (lib-assets) | ✅ (lib-assets) | ✅ |
| 字体作为独立文件输出 | ✅ (@fontsource) | ✅ (lib-assets) | ✅ |

## 容易跑偏的陷阱

| 陷阱 | 说明 | 如何避免 |
|------|------|---------|
| 资源内联 | Vite lib 模式默认 base64 内联所有资源 | 必须用 lib-assets 插件，limit:0 |
| CSS 类名冲突 | 默认 hash 类名无法识别来源 | generateScopedName 加 `zelda-` 前缀 |
| Less 变量遗漏 | 每个文件手动 @import 容易忘 | additionalData 全局注入 |
| 包体积膨胀 | 大 SVG/PNG 被内联 | 检查构建产物，JS 应 < 100KB |
| 类型声明缺失 | 忘记跑 tsc --emitDeclarationOnly | prepublishOnly 自动执行 |
| Demo 和库配置混淆 | dev 用 demo 配置，build 用库配置 | 两个独立的 vite.config |
