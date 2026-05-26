# 竞品分析：Animal-Island-UI vs zelda-hyrule-ui

## 一、Animal-Island-UI 项目定位

### 它到底是什么？

Animal-Island-UI **不是一个传统组件库**，而是一个**三层产品矩阵**：

| 层级 | 产品形态 | 目标用户 | 核心文件 |
|------|---------|---------|---------|
| 第一层 | npm 组件库 | 前端开发者 | `src/components/` + `package.json` |
| 第二层 | AI Skill（Cursor Rule） | AI 编程用户 | `skill/SKILL.md` + `AI_USAGE.md` |
| 第三层 | Design Prompt | 设计师 / v0 用户 | `DESIGN_PROMPT.md` |

### 为什么它能火？

社交媒体上的典型用法：
1. 把 `SKILL.md` 丢给 Cursor / Copilot
2. 对 AI 说"用动森风格做一个 XX 页面"
3. AI 直接输出完整的 React + CSS 代码，像素级还原动森风格

**核心洞察：组件库本身只是载体，真正让它传播的是 SKILL.md 这份 AI 可消费的设计规范。用户不需要 npm install，只需要把 SKILL.md 喂给 AI，就能在任何项目里获得动森风格。**

---

## 二、三份文档的分工逻辑

| 文档 | 给谁用 | 内容 | 行数 |
|------|--------|------|------|
| `AI_USAGE.md` | AI 编程助手（写代码时查） | 每个组件的 props、类型、默认值、合法取值、19 条硬规则 | 682 行 |
| `skill/SKILL.md` | Cursor / Copilot（实现/扩展样式时查） | 像素级 CSS 规范——所有 hex/px/keyframe/token/Demo 布局 | 1450 行 |
| `DESIGN_PROMPT.md` | v0 / Figma AI / MJ / DALL-E | 一键复制的提示词包，含色板、字体、尺寸表、禁止清单 | 332 行 |

### 使用场景对应

- **"我要用这个组件库写代码"** → 查 `AI_USAGE.md`
- **"我要自己实现/扩展这个风格"** → 查 `SKILL.md`
- **"我要让设计 AI 生成这个风格的图"** → 复制 `DESIGN_PROMPT.md`

---

## 三、Animal-Island-UI 技术细节

### 技术栈
- React 18 + TypeScript
- Vite (library mode)
- Less Modules + CSS Variables
- Google Fonts (Nunito / Noto Sans SC / Zen Maru Gothic)
- 打包产物：ESM + CJS + 类型声明 + 独立 CSS

### 组件清单（17 个）
Button、Input、Switch、Modal、Card、Collapse、Select、Checkbox、Icon、Time、Phone、Footer、Divider、Cursor、Typewriter、Tabs、CodeBlock

### 设计语言核心特征
1. **温暖大地色系** — 棕色文字 + 薄荷青绿主色 + 奶油米白背景
2. **大圆角 pill 形** — 按钮/输入框 50px 圆角
3. **游戏按键立体感** — 所有可点击元素有底部厚阴影，hover 上浮，active 下压
4. **柔和动效** — 0.15~0.35s，cubic-bezier(0.4, 0, 0.2, 1)
5. **有机不规则形状** — Modal 用 SVG blob clip-path
6. **禁止冷色调** — 不用纯黑、冷灰、蓝色焦点

### 项目数据
- Stars: 2.4k+
- Forks: 200+
- npm 版本: v0.9.3
- 社区衍生: Vue 版、Flutter 版、Android 版、博客模板、儿童学习 App

---

## 四、Hyrule-UI 与 Animal-Island-UI 的差距对比

| 维度 | Animal-Island-UI | Hyrule-UI（当前） | 状态 |
|------|-----------------|-------------------|------|
| **SKILL.md** | ✅ 1450 行像素级规范 | ❌ 没有 | 🔴 最大差距 |
| **AI_USAGE.md** | ✅ 682 行 API 手册 | ❌ 没有 | 🔴 |
| **DESIGN_PROMPT.md** | ✅ 332 行提示词 | ❌ 没有 | 🔴 |
| 组件数量 | 17 个 | 8 个已实现（规划 90-100 个全量覆盖 Figma） | 🟡 |
| Demo 站 | ✅ 完整 + gh-pages 部署 | 🟡 有但简陋 | 🟡 |
| npm 发布 | ✅ v0.9.3 | ❌ 未发布 | 🟡 |
| 字体 | Google Fonts (Nunito) 免费可用 | Cinzel 替代（Hylia Serif 需手动安装） | 🟡 |
| 设计 Token 系统 | Less variables + CSS 变量模板 | Less variables ✅ | 🟢 |
| SVG 素材 | 作者自己画的 | 从 Figma 精确导出 ✅ | 🟢 |
| 社区衍生 | Vue/Flutter/Android/博客模板 | ❌ 无 | 后续自然增长 |

---

## 五、Hyrule-UI 的独特优势

### 1. 暗色主题差异化
动森是亮色田园风，塞尔达是暗色科幻感。市面上暗色游戏 UI 库几乎没有。

### 2. 辉光系统
希卡蓝辉光（`#3CD3FC`）是极强的视觉记忆点，比动森的"圆润可爱"更有技术感和高级感。

### 3. 完整 Figma 素材库
拥有官方级别的 UI Kit（80+ 组件），animal-island-ui 是作者自己画的。

### 4. 适用场景更广
暗色主题天然适合：Dashboard、开发者工具、游戏工具、个人主页、数据可视化。

### 5. IP 影响力
塞尔达在全球游戏玩家中的认知度和情感连接极强，尤其是 BOTW/TOTK 玩家群体。

---

## 六、关键学习点

### 从 Animal-Island-UI 学到的

1. **文档即产品** — 三份文档比代码本身更重要
2. **AI-first 设计** — 所有规范都是为了让 AI 能精确复现
3. **7 条设计铁律** — 简洁的禁止规则比复杂的设计指南更有效
4. **新组件 Checklist** — 标准化的开发流程保证一致性
5. **Demo 即营销** — 在线预览站是最好的传播素材
6. **社区衍生** — 提供模板让别人基于你的风格做项目
