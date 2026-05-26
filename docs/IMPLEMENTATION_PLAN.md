# zelda-hyrule-ui 实施计划

## 对标声明

本项目完整对标 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)，在以下维度必须达到同等水平：

| 维度 | animal-island-ui | zelda-hyrule-ui 目标 |
|------|-----------------|---------------------|
| SKILL.md | 1450 行像素级规范 | **≥1500 行**（90-100 个组件 > 17 个组件） |
| AI_USAGE.md | 682 行 API 手册 | **≥800 行**（组件更多） |
| DESIGN_PROMPT.md | 332 行提示词 | **≥300 行** |
| 组件数量 | 17 个 | **90-100 个**（全量覆盖 Figma） |
| Demo 站 | 完整 + gh-pages | **完整 + gh-pages** |
| npm 发布 | ✅ | **✅** |
| 新组件 Checklist | ✅ | **✅** |
| 设计铁律 | 7 条 | **≥7 条** |
| CSS 变量模板 | ✅ | **✅** |
| 文件结构模板 | ✅ | **✅** |

---

## 总览

本文档是项目的完整搭建路线图，按阶段拆分为可执行的任务清单。每个任务标注了依赖关系和验收标准，方便逐步推进。

---

## Phase 0：基础设施完善（已完成 ✅）

> 目标：项目能跑起来，有基本的组件骨架

- [x] 初始化 React + TS + Vite library mode
- [x] 配置 package.json exports（ESM/CJS/types/style）
- [x] 建立 Less Modules + variables.less 设计 Token
- [x] 从 Figma 提取设计变量（色彩/字体/阴影/辉光）
- [x] 实现 8 个基础组件（Button/Card/Dialog/HealthBar/StaminaWheel/Modal/Divider/Loading）
- [x] 从 Figma 导出精确 SVG 素材并 inline 化
- [x] Demo 站可运行（npm run dev）
- [x] 构建通过（npm run build）
- [x] 存储 Figma 素材库完整索引（FIGMA_REFERENCE.md）

---

## Phase 1：SKILL.md + 文档体系（最高优先级）

> 目标：让 AI 能读取规范后自动生成塞尔达风格代码
> 预计工时：3-5 天

### 任务 1.1：编写 SKILL.md

**这是整个项目最重要的交付物。必须对标 animal-island-ui 的 SKILL.md（1450 行），做到像素级规范。**

对标要求（animal-island-ui SKILL.md 的结构，我们必须 1:1 覆盖）：

| animal-island-ui 有的 | zelda-hyrule-ui 必须有的 |
|----------------------|------------------------|
| 概述 + 三文档分工 + 全量组件清单 | ✅ 同等结构 |
| Design Tokens（完整 hex/px） | ✅ 从 Figma Variables 精确提取 |
| 每个组件的精确 CSS（尺寸表 + 颜色值 + keyframe） | ✅ 90-100 个组件全部覆盖 |
| Demo 布局精确规范 | ✅ 同等结构 |
| CSS 变量完整模板（:root） | ✅ 已有基础，需完善 |
| 7 条设计铁律 | ✅ 对应塞尔达的设计铁律 |
| 新组件文件结构模板（TSX + Less） | ✅ 同等结构 |
| 新组件 Checklist | ✅ 同等结构 |
| Demo 页面规范 | ✅ 同等结构 |
| HomePage 精确规范 | ✅ 同等结构 |

结构规划：

```markdown
# Hyrule UI 设计风格指南

## 概述
- 项目定位、设计语言核心描述
- 三文档分工说明
- 全量组件清单

## 1. Design Tokens
- 色彩系统（完整 hex 值 + 用途说明）
- 字体（font-family / weight / size 分级）
- 间距 / 圆角 / 边框
- 阴影与辉光（精确 box-shadow 值）
- 动效（transition / keyframes）

## 2. 组件精确样式规范
- Button（每个 variant × size 的精确 CSS）
- Card（每个 variant 的精确 CSS）
- Dialog（背景 SVG path + 文字样式）
- HealthBar（心形 SVG path + 颜色值）
- StaminaWheel（环形 SVG path + mask 技巧）
- Modal（双层边框 + 动画）
- Divider（4 种变体 + 装饰 SVG path）
- Loading（旋转环 + 脉冲眼）
- [后续补充的组件...]

## 3. Demo 布局精确规范
- 整体布局（背景色/间距/最大宽度）
- Section 标题样式
- 组件展示区间距

## 4. CSS 变量完整模板
- :root 下的所有 --zelda-* 变量

## 5. 设计铁律
- 7+ 条必须遵守的规则
- 禁止模式清单

## 6. 新组件文件结构模板
- TSX 模板
- Less 模板
- index.ts 导出模板

## 7. 新组件 Checklist
- 开发前/中/后的检查项
```

**验收标准**：
- [ ] 把 SKILL.md 喂给 Cursor，说"用塞尔达风格做一个登录页面"
- [ ] AI 输出的代码在视觉上能识别为塞尔达风格（暗色背景 + 双层边框 + 辉光 + Italic 文字）
- [ ] AI 不会使用亮色背景、纯白文字、冷蓝色调

### 任务 1.2：编写 AI_USAGE.md

结构规划：

```markdown
# hyrule-ui · AI Usage Guide

## 0. Setup
- npm install + style import
- 字体加载方式
- Peer dependencies

## 1. Full API（每个组件）
- TypeScript interface 完整定义
- 每个 prop 的合法取值
- 默认值
- 典型用法代码（copy-paste-ready）

## 2. Common Recipes
- 游戏风格登录页
- Dashboard 布局
- 个人主页
- 对话系统

## 3. HARD RULES
- 19+ 条硬规则（禁止发明 props 等）

## 4. Minimal Boilerplate
- main.tsx + App.tsx 最小可运行示例
```

**验收标准**：
- [ ] AI 读取后不会发明不存在的 props
- [ ] 每个组件都有可直接复制的示例代码
- [ ] 硬规则覆盖所有常见错误

### 任务 1.3：编写 DESIGN_PROMPT.md

结构规划：

```markdown
# hyrule-ui 设计提示词

## UI 工具提示词（v0 / Figma AI）
- 完整的一段式提示词
- 包含：字体、色板、形状、阴影、动效、禁止规则

## 图片生成提示词（MJ / DALL-E）
- 风格描述
- 关键视觉元素
- 氛围词

## 关键数值速查表
- 所有重要数值的快速查阅表格
```

**验收标准**：
- [ ] 复制到 v0 能生成暗色 + 辉光风格的 UI
- [ ] 复制到 MJ 能生成塞尔达 UI 风格的图片

---

## Phase 2：全量组件实现（Figma 素材 100% 覆盖）

> 目标：Figma 素材库中的 90-100 个组件全部实现为 React 组件
> 预计工时：15-20 天（分 3 个 Batch）
> 依赖：Phase 1 完成（有了 SKILL.md 后，新组件开发有标准可循）
> 详细清单见：`docs/FULL_COMPONENT_PLAN.md`

### 核心原则
**Figma 中的每一个组件都必须有对应的 React 实现，不遗漏任何素材。**

### Batch 2.1：P1 核心组件（约 35 个，8-10 天）

覆盖最常用、最有视觉辨识度的组件：
- HUD: HeartPiece, WeatherIcon, RupeeCounter, DivineBeast, SheikahAbility, WeatherAndTime
- 菜单: MenuSections, ItemSlot, ItemBG, ItemDescription, Pagination, MenuHeader, ModalButton, ModalChoice, MenuScrimOverlay, QuickItemSelector
- 对话: DialogChoice, DialogChoiceSet
- 标题: TitleLocation, TitleQuest, TitleQuestSubtitle
- 装饰: TitleOrnament, TextBoxOrnamentSide
- 控制器: ControllerButton, ControllerButtonLabel, ButtonHint, ActionSet
- 希卡: SheikahBackground, SheikahFrame, SheikahSymbol, SheikahScanlines, SheikahAlbumButton
- 地图: MapIcon, MapQuestIcon
- 任务: QuestListItem, QuestTypeIcon, QuestDescription
- 其他: RupeeType, Toast

### Batch 2.2：P2 功能完善（约 35 个，7-8 天）

- HUD: Temperature, SoundMeter, Sensor, EffectDuration, QuickSelector, BonusEffectHUD, SaveIndicatorComponent
- 菜单: StatsStack, Scrollbar, ModalNewItem, ModalTimer, ModalTutorial, MenuMaterialSelectionControls
- 对话: DialogFloating, DialogMental
- 标题: TitleShrine, TitleShrineName, TitleLocationLarge, TitlePointOfInterest, TitleOptions
- 装饰: TextBoxOrnamentContinue, TextOrnamentCorner, DirectionalArrow, DirectionalTriangle, TimerOrnament, Starburst
- 希卡: SheikahRune, SheikahCompendium, SheikahRuneSet, SheikahTextTitle, SheikahTextOrnamentDivider, SheikahCompendiumEntry, SheikahCompendiumFilters, SheikahCompendiumFilterBar
- 地图: MapBeacon, MapQuestMarker, MapLocationName, MapCursor, MapHeroLocation
- 任务: QuestNotification, QuestIllustration
- 加载: LoadingScreen, LoadingIcon, LoadingHeart, DivineBeastsLoading
- 战斗: BonusEffectIcon, ItemEnchantment, BonusEffectDescription, StatusHealing, AttackDefenseValues
- 商店: ShopListItem, ShopItemInfo, ShopPriceQuantity, ShopRupeeCounter, NumberInput
- Toast: ToastSideInfo
- 设置: SettingsToggleBase, SettingsToggleComponent

### Batch 2.3：P3 完整覆盖 + 页面级组件（约 25 个，5-6 天）

- 剩余基础组件: SaveIndicator, HorseSpur, TargetIndicator, ModalRecipe, SheikahScope, SheikahCamera, MapMinimap, MapMinimapBase, MapGrid, MapResetLocation, ShopUI, SetBonusIndicator, AimingReticle, ScrimListItem, ScrimAbilityBullet, ScrimSaveSelection, ScrimSaveThumb, AutosaveViolator, SheikahDivineBeastMarker, SheikahDivineBeastMarkers, SheikahDivineBeastSelector, SheikahMemoryPhotos, SheikahCompendiumEntryCard, SheikahAlbumMemories, SheikahMapBorder, GamepadSwitch, TutorialBG, TutorialSubtitleBar, LogoFull, LogoMark, ShopRupeeIcon, ShopBag
- 页面级组件: MenuScreen, QuestScreen, SystemScreen, LoadingScreenFull, TitleScreen, GameOverScreen, SheikahMapScreen, SheikahDivineBeastScreen, ShopScreen, QuickSelectorUI, SaveGameScreen

### 每个组件的开发流程

```
1. 从 Figma 获取 design context
   → mcp_figma_desktop_get_design_context(nodeId)
   
2. 截图确认视觉目标
   → mcp_figma_desktop_get_screenshot(nodeId)

3. 提取 SVG path data + 精确样式值

4. 创建组件文件夹：
   src/components/[Category]/[Name]/
   ├── [Name].tsx          # 组件逻辑 + inline SVG
   ├── [name].module.less  # 样式
   └── index.ts            # 导出

5. 在 src/index.ts 添加导出

6. 在 Demo 站对应分类页添加展示

7. 在 SKILL.md 补充精确样式规范

8. 在 AI_USAGE.md 补充 API 文档

9. 运行 Checklist 验证
```

**验收标准**：
- [ ] Figma 素材库 90-100 个组件全部有对应 React 实现
- [ ] 每个组件使用 inline SVG（从 Figma 精确导出的 path data）
- [ ] 每个组件在 Demo 站可见可交互
- [ ] SKILL.md 和 AI_USAGE.md 同步更新
- [ ] 组件按功能域分组（hud/menu/dialog/titles/decorations/controls/sheikah/map/quest/battle/screens/settings/shop/toast/tutorial/brand）

---

## Phase 3：Demo 站完善

> 目标：一个完整的、可部署的展示站点
> 预计工时：3-4 天
> 依赖：Phase 2 基本完成

### 任务 3.1：Demo 站布局重构

参考 animal-island-ui 的 Demo 站结构：

```
demo/
├── App.tsx              # 路由入口
├── main.tsx             # 渲染入口
├── components/          # 每个组件的 Demo 页
│   ├── ButtonDemo/
│   ├── CardDemo/
│   ├── DialogDemo/
│   └── ...
├── pages/
│   └── HomePage.tsx     # 首页（Hero + 特性介绍 + 快速开始）
├── layout/
│   ├── Sidebar.tsx      # 侧边栏导航
│   └── Layout.tsx       # 整体布局
└── pageInfo.ts          # 页面元信息
```

### 任务 3.2：首页设计

- Hero 区域：塞尔达风格标题 + 副标题 + 版本 Badge
- 特性网格：6 个核心特性卡片
- 快速开始：代码示例（用 CodeBlock 组件展示）
- 底部：Footer 装饰

### 任务 3.3：部署

- 配置 `vite.config.demo.ts` 的 base 路径
- 添加 `npm run deploy` 脚本（gh-pages）
- GitHub Pages 部署

**验收标准**：
- [ ] 在线可访问的 Demo 站
- [ ] 每个组件有独立的展示页
- [ ] 首页有吸引力，能作为社交媒体分享素材

---

## Phase 4：发布与传播

> 目标：npm 发布 + 社交媒体首发
> 预计工时：2-3 天
> 依赖：Phase 3 完成

### 任务 4.1：npm 发布准备

- [ ] 确认 package.json 信息完整（name/version/description/keywords/repository）
- [ ] 运行 `npm run build` 确认产物正确
- [ ] 运行 `tsc --project tsconfig.build.json` 生成类型声明
- [ ] 确认 `files` 字段只包含 dist + README + AI_USAGE.md
- [ ] `npm publish`

### 任务 4.2：GitHub 仓库优化

- [ ] README.md 完善（截图 + 安装 + 快速开始 + 组件列表）
- [ ] 添加 LICENSE (MIT)
- [ ] 添加 CONTRIBUTING.md
- [ ] 配置 GitHub Topics（react, ui, zelda, botw, component-library）
- [ ] 添加 Demo 站链接到 About

### 任务 4.3：社交媒体首发

渠道规划：

| 平台 | 内容形式 | 重点 |
|------|---------|------|
| 小红书 | 图文/视频 | "把塞尔达 UI 搬到网页上" + 效果对比图 |
| Twitter/X | 英文推文 + GIF | 面向全球开发者社区 |
| 即刻 | 图文 | 面向中文开发者/设计师 |
| V2EX | 帖子 | 面向技术社区 |
| 掘金 | 技术文章 | "如何用 AI + Figma 搭建游戏风格组件库" |

**验收标准**：
- [ ] npm 可安装 (`npm install hyrule-ui`)
- [ ] GitHub 仓库信息完整
- [ ] 至少在 2 个平台发布

---

## Phase 5：生态扩展（长期）

> 目标：形成社区效应
> 时间线：发布后持续

### 任务 5.1：模板项目

- 塞尔达风格个人主页模板
- 塞尔达风格博客模板
- 塞尔达风格 Dashboard 模板

### 任务 5.2：更多组件

- 地图组件（Minimap）
- 物品格子（ItemSlot）
- 任务列表（QuestList）
- 天气图标（WeatherIcon）
- NPC 对话系统（完整的对话流）

### 任务 5.3：跨框架

- Vue 版本（如果 React 版有需求）
- Web Components 版本（框架无关）

---

## 执行顺序总结

```
Phase 0 ✅ 已完成（基础骨架 + 8 个组件）
    ↓
Phase 1 ← 现在应该做的（文档体系）
  1.1 SKILL.md（3 天）
  1.2 AI_USAGE.md（1 天）
  1.3 DESIGN_PROMPT.md（1 天）
    ↓
Phase 2（全量组件实现 — Figma 90-100 个组件 100% 覆盖）
  Batch 2.1 P1 核心组件 × 35（8-10 天）
  Batch 2.2 P2 功能组件 × 35（7-8 天）
  Batch 2.3 P3 完整覆盖 + 页面级 × 25（5-6 天）
    ↓
Phase 3（Demo 站完善）
  3.1 Demo 站重构 — 按 11 个分类分页（2 天）
  3.2 首页设计（1 天）
  3.3 部署 gh-pages（0.5 天）
    ↓
Phase 4（发布与传播）
  4.1 npm 发布（0.5 天）
  4.2 GitHub 优化（0.5 天）
  4.3 社交媒体首发（1 天）
    ↓
Phase 5（持续生态建设）
```

**总预计工时：30-40 天（不含 Phase 5）**

---

## 关键决策记录

| 决策 | 选择 | 原因 |
|------|------|------|
| 样式方案 | Less Modules | 和 animal-island-ui 一致，成熟可靠 |
| 构建工具 | Vite library mode | 快速、现代、支持 ESM/CJS 双输出 |
| 字体方案 | Hylia Serif + Cinzel fallback | Hylia 是最正宗的塞尔达字体，Cinzel 是 Google Fonts 替代 |
| SVG 方案 | Inline SVG（JSX 内直接写 path） | 矢量清晰、颜色可控、不依赖外部文件 |
| 主题 | 暗色唯一 | 区别于 animal-island-ui 的亮色，且更符合塞尔达原作 |
| 命名 | zelda-hyrule-ui | 简洁、好记、SEO 友好、和游戏世界观关联 |

---

## 每次开发前的 Checklist

开始新任务前，确认：

- [ ] 当前在哪个 Phase？
- [ ] 这个任务的依赖是否已完成？
- [ ] 有没有对应的 Figma node ID 可以参考？
- [ ] 完成后需要更新哪些文档？（SKILL.md / AI_USAGE.md / Demo）
- [ ] 验收标准是什么？
