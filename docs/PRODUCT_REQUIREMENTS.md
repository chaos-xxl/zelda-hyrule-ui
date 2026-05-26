# Hyrule-UI 产品需求文档 (PRD)

## 一、项目概述

### 1.1 项目名称
**zelda-hyrule-ui** — 塞尔达旷野之息风格的 React UI 组件库 + AI 设计规范

### 1.2 一句话定位
让任何人（开发者、设计师、AI 编程用户）都能用塞尔达 BOTW 的视觉语言构建 Web 界面。

### 1.3 核心价值主张
- **对 AI 编程用户**：把 SKILL.md 喂给 Cursor，说"用塞尔达风格做 XX"，AI 直接输出像素级还原的代码
- **对前端开发者**：`npm install zelda-hyrule-ui`，import 组件即用
- **对设计师**：复制 DESIGN_PROMPT.md 到 v0/Figma AI，一键生成塞尔达风格设计稿

### 1.4 设计语言核心
**"希卡之石的科技感 + 海拉鲁大陆的自然感"**

- 暗色主题为主（区别于 animal-island-ui 的亮色田园风）
- 希卡蓝辉光（`#3CD3FC`）作为核心视觉记忆点
- 双层边框结构（外层半透明黑 + 内层米色/蓝色细边框）
- 发光效果系统（蓝色辉光、金色辉光、悬停辉光）
- Roboto Medium Italic 正文 + Hylia Serif 标题

---

## 二、目标用户

### 2.1 用户画像

| 用户类型 | 典型场景 | 核心需求 | 我们提供什么 |
|---------|---------|---------|------------|
| **AI 编程用户** | 用 Cursor/Copilot 写代码 | 对 AI 说一句话就能生成塞尔达风格 UI | `SKILL.md` |
| **前端开发者** | 做个人项目/游戏工具 | 直接 import 组件，不想自己写样式 | npm 组件库 |
| **设计师** | 用 v0/Figma AI 出设计稿 | 一键生成塞尔达风格的 UI 设计 | `DESIGN_PROMPT.md` |
| **塞尔达玩家** | 做个人主页/博客/攻略站 | 用喜欢的游戏风格装饰自己的网站 | 模板 + 组件库 |
| **独立开发者** | 做游戏工具/Dashboard | 需要暗色主题 + 科技感的 UI | 组件库 + Token |

### 2.2 优先级排序
1. AI 编程用户（最大传播杠杆）
2. 前端开发者（直接使用者）
3. 塞尔达玩家社区（情感连接最强）
4. 设计师（扩大影响面）

---

## 三、产品架构

### 3.1 三层产品矩阵

```
┌─────────────────────────────────────────────────┐
│  第三层：DESIGN_PROMPT.md                        │
│  → 给 v0 / Figma AI / MJ / DALL-E              │
│  → 一键复制，生成塞尔达风格设计稿                  │
├─────────────────────────────────────────────────┤
│  第二层：SKILL.md + AI_USAGE.md                  │
│  → 给 Cursor / Copilot / ChatGPT               │
│  → AI 读取后能自动生成符合规范的代码               │
├─────────────────────────────────────────────────┤
│  第一层：npm 组件库 (hyrule-ui)                   │
│  → 给前端开发者                                   │
│  → npm install + import 即用                     │
└─────────────────────────────────────────────────┘
```

### 3.2 文件结构规划

```
hyrule-ui/
├── src/
│   ├── components/          # React 组件源码
│   ├── styles/
│   │   └── variables.less   # 设计 Token
│   ├── assets/
│   │   ├── svg/             # 从 Figma 导出的 SVG 素材
│   │   └── fonts/           # Hylia Serif Beta 字体
│   └── index.ts             # 统一导出
├── demo/                    # Demo 展示站
├── docs/                    # 项目文档
│   ├── COMPETITIVE_ANALYSIS.md
│   └── PRODUCT_REQUIREMENTS.md (本文件)
├── skill/
│   └── SKILL.md             # 🔑 AI Skill 规范（核心传播物）
├── AI_USAGE.md              # AI 编程助手 API 手册
├── DESIGN_PROMPT.md         # 设计 AI 提示词
├── FIGMA_REFERENCE.md       # Figma 素材库索引
└── README.md
```

---

## 四、功能需求

### 4.1 Phase 1：核心基础（当前 → 2 周内）

#### P0：SKILL.md（最高优先级）

**目标**：写一份 1000+ 行的像素级设计规范，让 AI 读取后能自动生成塞尔达风格代码。

**内容结构**（参考 animal-island-ui）：
1. 设计 Token（色彩/字体/间距/圆角/阴影/动效）
2. 每个组件的精确 CSS（hex/px/keyframe）
3. Demo 布局精确值
4. CSS 变量完整模板
5. 设计铁律（禁止规则）
6. 新组件开发模板 + Checklist

**验收标准**：
- [ ] 把 SKILL.md 喂给 Cursor，说"用塞尔达风格做一个登录页"，AI 能输出视觉正确的代码
- [ ] 包含所有已有组件的精确样式值
- [ ] 包含 7+ 条设计铁律

#### P0：AI_USAGE.md

**目标**：写一份 AI 可消费的 API 手册。

**内容结构**：
1. 安装和引入方式
2. 每个组件的完整 Props 定义
3. 合法取值枚举
4. 典型用法代码示例
5. 硬规则（禁止发明 props 等）

**验收标准**：
- [ ] AI 读取后不会发明不存在的 props
- [ ] 每个组件都有 copy-paste-ready 的示例代码

#### P1：DESIGN_PROMPT.md

**目标**：给 v0/Figma AI/MJ 的一键提示词。

**内容结构**：
1. UI 工具提示词（v0 / Figma AI）
2. 图片生成提示词（MJ / DALL-E）
3. 关键数值速查表

---

### 4.2 Phase 2：组件补全（2-4 周）

| 组件 | 优先级 | 对应塞尔达元素 | 说明 |
|------|--------|--------------|------|
| Tabs | P1 | 背包分类标签 | 武器/弓/盾/衣服/材料/食物 |
| Select | P1 | 下拉选择器 | 设置界面的选项 |
| Collapse | P1 | 手风琴/FAQ | 任务描述展开 |
| Input | P1 | 输入框 | 搜索/命名 |
| Switch | P1 | 开关 | 设置界面 |
| Toast | P2 | 物品获得通知 | 右上角弹出 |
| Tooltip | P2 | 物品描述悬浮 | hover 显示详情 |
| Progress | P2 | 经验条/加载条 | 线性进度 |
| Badge | P2 | 新消息红点 | NookPhone 风格 |
| Pagination | P3 | 分页指示器 | 点状分页 |

---

### 4.3 Phase 3：生态建设（4-8 周）

| 交付物 | 说明 |
|--------|------|
| Demo 站完善 | 完整的组件展示 + 在线预览，部署到 gh-pages |
| npm 发布 | `npm publish`，版本号 0.1.0 |
| 网站模板 | 1-2 个基于 hyrule-ui 的完整页面模板（个人主页/博客） |
| Vue 版本 | 如果 React 版火了，考虑出 Vue 版 |
| 社区运营 | GitHub README 优化、社交媒体分享 |

---

## 五、设计规范摘要

### 5.1 色彩系统

| 变量 | 值 | 用途 |
|------|-----|------|
| Sheikah Blue | `#3CD3FC` | 核心主色，辉光效果 |
| Sheikah Yellow | `#FFE460` | 希卡黄，焦点高亮 |
| Effect Orange | `#FCC413` | 金色效果，确认按钮 |
| Main Tan | `#E2DED3` | 米色，边框/标题文字 |
| Text Main | `#E9E1D1` | 主体文字（暖白） |
| Text Yellow | `#E2D146` | 黄色强调文字 |
| Text Red | `#F15050` | 红色/危险文字 |
| Text Green | `#6FD49C` | 绿色/成功文字 |
| Dark BG | `#66645D` | 页面背景 |
| Card BG | `rgba(0,0,0,0.6)` | 卡片/按钮背景 |

### 5.2 字体

| 字体 | 用途 | 来源 |
|------|------|------|
| Hylia Serif Beta | 标题、大字 | 粉丝制作，需手动安装 |
| Cinzel | Hylia Serif 的 Google Fonts 替代 | Google Fonts |
| Roboto Medium/Bold Italic | 正文、按钮、对话 | Google Fonts |

### 5.3 设计铁律（初版）

1. **暗色为主** — 背景永远是深色（`#66645D` 或更深），禁止亮色/白色背景
2. **双层边框** — 所有容器/按钮使用外层半透明黑 + 内层细边框的双层结构
3. **辉光系统** — 选中/激活态使用蓝色或金色辉光，禁止纯色高亮
4. **Italic 正文** — 对话/按钮文字使用 Roboto Medium Italic，模拟游戏内文字
5. **禁止纯白** — 文字用暖白 `#E9E1D1`，禁止 `#FFFFFF`
6. **禁止冷色** — 不用冷蓝、冷灰，所有颜色带暖色调
7. **SVG 优先** — 图标/装饰使用 inline SVG，保证矢量清晰

---

## 六、技术方案

### 6.1 技术栈（已确定）
- React 18 + TypeScript
- Vite (library mode)
- Less Modules
- classnames
- 打包产物：ESM + CJS + 类型声明 + 独立 CSS

### 6.2 构建产物
```
dist/
├── es/index.js       # ESM
├── cjs/index.cjs     # CJS
├── types/index.d.ts  # TypeScript 类型
└── index.css         # 样式
```

### 6.3 使用方式
```tsx
// 方式一：npm 组件库
import { Button, Card, HealthBar } from 'hyrule-ui'
import 'hyrule-ui/style'

// 方式二：AI Skill（不需要安装）
// 把 SKILL.md 放到 .cursorrules 或 Cursor Skill
// 然后对 AI 说"用塞尔达风格做一个 XX"
```

---

## 七、里程碑

| 阶段 | 时间 | 交付物 | 验收标准 |
|------|------|--------|---------|
| M1 | 第 1-2 周 | SKILL.md + AI_USAGE.md + DESIGN_PROMPT.md | 喂给 Cursor 能生成正确代码 |
| M2 | 第 3-6 周 | 全量组件实现（Figma 90-100 个组件 100% 覆盖） | 所有 Figma 素材都有对应 React 组件 |
| M3 | 第 6-7 周 | Demo 站完善 + npm 发布 | 在线可访问 + 可 npm install |
| M4 | 第 7-9 周 | 网站模板 + 社区分享 | 至少 1 个完整模板 + 社交媒体首发 |

---

## 八、成功指标

### 短期（1 个月内）
- [ ] SKILL.md 完成，喂给 Cursor 能生成视觉正确的塞尔达风格页面
- [ ] npm 发布成功
- [ ] Demo 站上线

### 中期（3 个月内）
- [ ] GitHub Stars > 100
- [ ] 至少 3 个社区衍生项目（博客/工具/模板）
- [ ] 社交媒体分享获得 > 1000 互动

### 长期（6 个月内）
- [ ] 成为"塞尔达风格 Web UI"的事实标准
- [ ] 被 AI 编程工具（Cursor/v0）的用户自发传播
- [ ] 考虑 Vue 版本 / 付费模板

---

## 九、风险与注意事项

### 9.1 版权风险
- 本项目为粉丝创作，仅供学习和非商业用途
- 不使用任何任天堂官方素材/代码/资源文件
- 所有 SVG 路径数据来自社区 Figma UI Kit（非官方）
- 如收到版权方通知，立即整改或删除

### 9.2 字体风险
- Hylia Serif Beta 是粉丝制作字体，非官方授权
- 提供 Google Fonts (Cinzel) 作为 fallback
- 文档中注明字体来源和使用限制

### 9.3 技术风险
- Figma 素材服务器（localhost:3845）仅在 Figma 桌面端打开时可用
- 已导出的 SVG 需要本地存储，不依赖远程服务器
- Less Modules 的 CSS 类名在生产环境会被 hash 化，不影响使用
