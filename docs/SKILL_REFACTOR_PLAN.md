# SKILL.md 拆分重构计划

> 把当前单文件 `skill/SKILL.md`（2201 行）按 Anthropic 官方 Skill 架构拆分为「路由层 SKILL.md + references/ 数据层」，对齐渐进披露（Progressive Disclosure）设计。本文档为执行前的固化方案，确认后据此动手。

---

## 0. 背景与依据

### 为什么要拆

- 当前 `skill/SKILL.md` 已达 **2201 行**，远超 Anthropic 官方建议的 **<500 行**（超约 4.4 倍）。
- 对标项目 animal-island-ui 的 `skill/` 下只有单个 SKILL.md，**未做拆分**——但那是因为它只有 30 来个组件，规模小撑得住，**不是正确范式，只是没遇到问题**。
- 我们已有 84 个组件，且后续可能扩展（业务模板、多主题），单文件必然崩盘。

### Anthropic 官方 Skill 架构（依据）

Skill 是一个**渐进披露系统**，不是一份大文档。三级加载：

```
Level 1: YAML Frontmatter（~100 词，永久在 context）
         → name + description，AI 用来判断"要不要激活此 skill"
Level 2: SKILL.md 正文（建议 <500 行，命中触发时加载）
         → 核心规则 + 加载路由 + 指向 references 的指针
Level 3: Bundled Resources（无大小限制，用到才读）
         → references/ 详细文档、scripts/ 脚本、assets/ 模板
```

官方真实案例：
- `skill-creator`：SKILL.md 480 行 + references/ + scripts/ + agents/ + assets/
- `mcp-builder`：SKILL.md 仅 237 行，详细实现指南全部拆到 reference/（按需加载）

### SKILL.md 与 references 的关系

**单向引用，不重复内容。**

| 维度 | SKILL.md（路由层） | references/（数据层） |
|------|------------------|---------------------|
| 角色 | 决策中枢 | 详细仓库 |
| 内容 | 全局规则、铁律、禁止模式、加载路由 | 单个主题的完整规范 |
| 加载时机 | 命中触发就加载 | 显式引用时才加载 |
| 大小要求 | <500 行（核心约束） | 不限 |
| AI 行为 | 一定会读 | 按需读，可能根本不读 |

类比：SKILL.md 是图书馆的「导览图 + 借书规则」，references/ 是分类书架。AI 先看导览图，决定借哪本，再去对应书架取。

---

## 1. 拆分原则

对齐官方架构：**SKILL.md 是路由层（保持精简，每次必读），references/ 是数据层（按需加载）。不重复内容，单向引用。**

口吻统一：整份 SKILL.md 是**对 Agent 说话**（"你应该读 X""你必须遵守 Y"），不是对最终用户说话。Skill 本质是给执行 Agent 看的内部规范。

---

## 2. SKILL.md 保留内容（路由层，目标 ~330 行）

只留"AI 每次都必须看"的内容：

| 保留章节 | 当前行号 | 行数 | 为什么留 |
|---------|---------|------|---------|
| YAML frontmatter + 致谢 | 1-17 | 17 | 触发机制，必须在 |
| 概述 | 249-258 | 10 | 一句话定位 |
| 🚀 30 秒快速开始 | 43-92 | 50 | AI 起手式，最高频 |
| 📂 Reference 加载路由（改写） | 93-116 | ~45 | 核心：任务类型 → 读哪个 reference |
| Design Token 速查（精简版） | 节选 259 段 | ~25 | 最常用的色/字号，完整版进 reference |
| §5 设计铁律 | 872-884 | 13 | 8 条硬规则，必须每次读 |
| §8 禁止模式与正确示例 | 995-1105 | 111 | 核心护栏，✗/✓ 对照，防 AI 跑偏 |
| Reference 索引清单 | 新增 | ~20 | 列出所有 reference 文件 + 何时读 |

合计约 **300-330 行**，符合官方 <500 行建议。

---

## 3. references/ 拆出内容（数据层）

| 新文件 | 来源章节 | 当前行号 | 行数 |
|--------|---------|---------|------|
| `references/design-tokens.md` | §1 Design Tokens + §4 CSS 变量模板 | 259-426, 821-871 | ~220 |
| `references/core-patterns.md` | §2 核心设计模式（双层边框、希卡变体） | 427-485 | ~59 |
| `references/recipes.md` | 📦 常见配方（9 个场景） | 117-248 | ~130 |
| `references/components-core.md` | §3 核心组件深度示例（8 个） | 486-820 | ~335 |
| `references/components-full.md` | §10 全量组件精确规范（84 个） | 1325-1960 | ~636 |
| `references/component-list.md` | §11 全量组件清单 | 1961-2020 | ~60 |
| `references/ui-cases.md` | §9 完整界面案例（5 个） | 1106-1324 | ~219 |
| `references/new-component.md` | §6 文件结构模板 + §7 Checklist | 885-994 | ~110 |
| `references/demo-layout.md` | §12 Demo 布局规范 | 2021-2048 | ~28 |
| `references/theming.md` | §13 主题定制 | 2049-2111 | ~63 |
| `references/accessibility.md` | §14 无障碍 | 2112-2175 | ~64 |
| `references/svg-paths.md` | §15 SVG Path 索引 | 2176-2201 | ~26 |

共 **12 个 reference 文件**。

### 关于 components-full.md 的决策

**已确认采用方案 A：单文件**（636 行，84 个组件放一个 `components-full.md`）。

> 备选方案 B（按分类拆 14 个文件）已否决。理由：本项目 84 组件规模下单文件够用；按分类拆细留待 AIOS 大项目（200+ 组件）时采用。

---

## 4. 最终目录结构

```
skill/
├── SKILL.md                       # ~330 行，路由层
└── references/
    ├── design-tokens.md           # 设计 token 完整系统
    ├── core-patterns.md           # 双层边框、希卡变体
    ├── recipes.md                 # 9 个场景配方
    ├── components-core.md         # 8 个核心组件深度示例
    ├── components-full.md         # 84 个组件全量规范（方案 A，单文件）
    ├── component-list.md          # 组件清单
    ├── ui-cases.md                # 5 个完整界面案例
    ├── new-component.md           # 新组件开发模板 + checklist
    ├── demo-layout.md             # demo 布局规范
    ├── theming.md                 # 主题定制
    ├── accessibility.md           # 无障碍
    └── svg-paths.md               # SVG 索引
```

---

## 5. 「Reference 加载路由」设计（重点修正）

### 命名与定位修正

原方案叫「AI 决策导航」，措辞是"用户问 X → 读哪个 reference"，**这是错的**，会误导成"用户来提问"。

**实际定位**：这张表是给 **Agent 自己看的内部路由规则**，不是用户交互界面。它的作用是——**当 Agent 拿到一个笼统需求后，自己决定去读哪个 reference 文件，而不是把 12 个 reference 全部读进来。**

用户的真实使用场景：只会说"用这个风格做个网页/PPT"，给的是笼统的整体需求，不会具体到"我要一个标题栏加三个按钮"。所以路由表的左列是**任务类型**，不是**用户提问**。

### 真实运行流程示例

```
用户：「用塞尔达风格给我做一个个人主页」
        ↓
Agent 读 SKILL.md（路由层，必读）
        ↓
Agent 盘算：做整页 → 先看有没有现成页面级模板
        ↓
（路由表）"做完整页面 → 读 references/ui-cases.md"
        ↓
Agent 加载 ui-cases.md，参考布局
        ↓
拼页面需要具体组件样式 →（路由表）"查组件精确样式 → components-full.md"
        ↓
Agent 按需加载，产出整页代码
```

关键点：这张表帮 Agent 做"**我现在该加载哪个文件**"的决策，本质是**渐进披露的索引**，避免 Agent 一上来把 2200 行全塞进 context。

### 改写后的路由表（写入 SKILL.md）

```markdown
## 📂 Reference 加载路由

本 SKILL.md 是路由层，必须完整读完（铁律 + 禁止模式必须遵守）。
然后根据当前任务，**只加载需要的 reference**，不要一次性全部读取。

| 当前任务 | 加载文件 |
|---------|---------|
| 做完整页面 / 整体风格（网页、PPT、应用界面） | references/ui-cases.md + references/recipes.md |
| 需要某个区块的组件组合（如导航栏、卡片列表） | references/recipes.md |
| 需要某组件的精确样式（颜色、尺寸、阴影） | references/components-full.md |
| 需要 token（配色、字体、间距） | references/design-tokens.md |
| 自己实现/扩展新组件 | references/new-component.md |
| 主题换色 | references/theming.md |
| 无障碍 | references/accessibility.md |

典型流程（用户说"用这个风格做个 X"）：
1. 读 references/ui-cases.md 找最接近的整页模板
2. 读 references/design-tokens.md 拿配色/字体
3. 拼装时按需查 references/components-full.md 的精确样式
```

---

## 6. 风险提示

1. **锚点链接会失效**：原 SKILL.md 内部的 `#9-完整界面案例` 这种跳转，拆分后要改成指向 reference 文件。执行时一并处理。
2. **README 里引用 SKILL.md 的描述要更新**："1500 行像素级规范"这类描述要改为反映新的「路由层 + references」结构。
3. **demo 站如果有引用 SKILL.md 行号的地方**（预计没有）需检查并修正。

---

## 7. 执行步骤（确认后据此动手）

1. 创建 `skill/references/` 目录
2. 按第 3 节映射表，逐个抽取内容生成 12 个 reference 文件（保持原内容，仅做必要的标题层级调整）
3. 重写 `SKILL.md` 为路由层（第 2 节保留内容 + 第 5 节路由表）
4. 全文检查并修复锚点跳转（风险 1）
5. 更新 README 中对 SKILL.md 的描述（风险 2）
6. 检查 demo / 其他文档是否引用 SKILL.md 行号（风险 3）
7. 校验：SKILL.md 行数 <500；每个 reference 内容完整无丢失；frontmatter 不变
8. commit + push

---

**文档版本**：v1.0
**状态**：已确认方案 A + 路由表改名，待执行
**关联文件**：`skill/SKILL.md`、`README.md`
