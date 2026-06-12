# Vue 版本迭代计划（VUE_VERSION_PLAN）

> 应对社区对 Vue 版本的需求。本文档是决策记录 + 分阶段执行计划。
> 调研基线：2026-06-12，对标 `guokaigdg/animal-island-ui` → `animal-island-vue`。

---

## 〇、一句话结论

> **今天占名 `zelda-hyrule-ui-vue`（半天）；需求验证达标后，走同仓库 pnpm monorepo（core / react / vue 三包），props API 与 React 版 1:1 对齐，让 skill 和规范资产直接双倍杠杆。全量移植约 1.5–2 个月业余时间，且要接受此后每个组件维护成本 ×1.7 的长期税。验证不达标则退到「只发 core 包」的中间档。**

---

## 一、背景与前车之鉴

### 1.1 需求信号

- 仓库已有公开 issue 反馈想要 Vue 版本（需求信号是**公开的**，任何人都看得到）。
- 风格化组件库的 Vue 需求被对标项目验证为真实存在（见下）。

### 1.2 对标的时间线教训（重要）

| 时间 | 事件 |
|------|------|
| 2026-04-16 | guokaigdg 发布 React 版 `animal-island-ui` |
| 2026-04-20 | **第三方（yanstu）抢先发布 `animal-island-ui-vue`**——比官方早一个月，把最顺手的包名占走 |
| 2026-05-19 | 官方被迫退而求其次，发 `animal-island-vue@0.2.1`（独立新仓库，主仓库 README 没提） |
| 同期 | 还冒出 React 增强 fork `laeva-animal-island-ui` |

两条结论：
1. **这类库的 Vue 需求是真的**，第三方等不及会自己动手；
2. **不占名，名就没了。** 本项目的处境和对标 4 月中旬时一模一样——公开需求信号 + 包名未占。

### 1.3 包名现状（2026-06-12 实测）

| 包名 | 状态 |
|------|------|
| `zelda-hyrule-ui-vue` | ✅ 404，可注册（**首选**，和主包名最连贯） |
| `zelda-hyrule-vue` | ✅ 404，可注册（备选） |

---

## 二、核心决策（决策记录）

### 决策 1：同仓库 monorepo，不开新仓库 ⭐

对标选了新仓库，但**本项目反着来**。对标只有十来个组件、没有素材体系、没有规范文档，复制成本≈0；本项目不同：

| 资产 | 绑定 React？ | 占比 |
|------|------------|------|
| TSX 组件壳 | ✅ 是 | 少数 |
| Design tokens（variables.less） | ❌ 否 | |
| Less Modules 样式 | ❌ 否（Vite + Vue 原生支持 `.module.less`） | |
| SVG / PNG / 字体素材 | ❌ 否 | 多数 |
| skill/ 目录 + AI_USAGE 规范 | ❌ 否 | |

真正绑定 React 的只有 TSX 薄壳，**框架无关的部分恰恰是差异化卖点**。新开仓库则这些资产要么跨仓库复制（把"文档与代码漂移"的老毛病制度化——此前刚治过"skill 落后于包两个版本"的病），要么跨仓库引用（工程别扭）。

三条加固理由：
1. **AI-consumable 定位要求规范单源**——AI 读到哪份信哪份，两份规范必然漂移；
2. **一个人维护**，两个仓库 = 双倍 issue / CI / 发版杂务；
3. **star 和活跃度集中**——star 是唯一 KPI，把 Vue 版动静分流到零 star 新仓库是纯亏。

目标结构：

```
zelda-hyrule-ui/                # 仓库名不变，star 不分流
├── packages/
│   ├── core/                   # variables.less + 全局样式 + assets/(svg/fonts) — 单一事实源
│   │                           # workspace 内部包，先不发 npm（退路档才发）
│   ├── react/                  # 现 src/ 整体迁入；npm 包名保持 zelda-hyrule-ui，现有用户零感知
│   └── vue/                    # 新增 zelda-hyrule-ui-vue；含内部 dev playground 用于移植时目检
├── skill/                      # 一份 skill 服务两个框架（加 Vue 映射节）
├── demo/                       # 现 React demo 站不动
└── docs/
```

### 决策 2：props API 与 React 版 1:1 对齐（硬铁律）

同名、同枚举值、同默认值。回调命名按 Vue 惯例转 emit（`onSelect` → `@select`），其余完全一致。

**为什么是铁律**：做到这一点，`skill/` 和 `AI_USAGE.md` 几乎零改动——只需加一节「Vue 模板语法映射」。规范资产直接双倍杠杆，这是对标完全没有的优势。任何 Vue 版"顺手改进 API"的冲动都要克制（发现 API 设计问题 → 两个框架同步改，走 breaking change 流程）。

### 决策 3：版本号独立，但维护对照表

Vue 包从 `0.1.0`（MVP）起步，不强行追 React 版本号。README 维护一张「功能对齐矩阵」（Vue x.y 对齐 React x.y 的组件集）。

### 决策 4：peer 依赖 `vue >= 3.5`

React 版 Modal 刚做了 portal + focus management + `useId`；Vue 侧对应物：`<Teleport>`（内置）+ `useId`（**Vue 3.5+ 才有**）。3.5 已发布近两年，直接要求 3.5+，省掉自实现 id 生成器。（对标要求 >=3.4，我们高半档没负担。）

---

## 三、分阶段计划

### 阶段 0 · 占名 + 需求验证 ✅（已完成 2026-06-12，验证进行中）

| 动作 | 状态 |
|------|------|
| 发占位包 `zelda-hyrule-ui-vue@0.0.1` | ✅ [已发布](https://www.npmjs.com/package/zelda-hyrule-ui-vue)。npm 描述带非官方声明；README 中英双语 + Nintendo 免责；源文件在 `packages/vue/`。 |
| 开置顶 issue "Vue version interest" | ✅ [#2](https://github.com/chaos-xxl/zelda-hyrule-ui/issues/2) 已开并置顶。 |
| 验证门槛 | ⏳ **等信号中：5–10 个 👍，或出现第二条独立请求**，才启动阶段 2/3 全量投入。一条 issue ≠ 验证过的需求，1.5 个月业余时间换三个下载量不值。 |

> ⚠️ 诚实备注：纯占位包理论上违反 npm 的反 squatting 政策。缓解：占位包带真实 README + 明确开发意图，且门槛达标后尽快跟进真 MVP。对标的第三方抢名包也没被处理，实际风险低，但**别让占位状态拖过几个月**。

### 阶段 1 · monorepo 重构（1–2 天，**不依赖验证结果，无论做不做 Vue 都值得**）

| 步骤 | 内容 |
|------|------|
| 1 | pnpm workspace 初始化（`pnpm-workspace.yaml`，root package.json 改 private） |
| 2 | 抽 `packages/core`：`src/styles/`（variables/global/fonts）+ `src/assets/` 迁入；core 是**源文件共享包**（workspace 内部，不发 npm），react/vue 构建时各自把样式/素材编进自己的 dist，**npm 依赖链对用户不变** |
| 3 | `src/` → `packages/react/src/`，改 core 引用路径；vite.config 的 `additionalData` 注入、`zelda-` 类名前缀、lib-assets 配置原样保留 |
| 4 | 发包脚本 + CI 跑通（react 包构建产物 diff 对比迁移前，确保零变化） |

这一步顺带治好"字体/素材该归谁"的历史问题。

**验收**：`zelda-hyrule-ui` 重新 build 后产物与迁移前一致；demo 站正常跑。

### 阶段 2 · Vue 基建 + MVP（2–3 个周末，🔒 验证达标后启动）

| 步骤 | 内容 |
|------|------|
| 1 | `packages/vue` 脚手架：Vite + `@vitejs/plugin-vue`，复用 core 的 less 注入和 `zelda-` 类名配置；lib-assets 同配置；**不需要 `'use client'` banner** |
| 2 | 关键利好：`.module.less` 在 Vue + Vite 原生可用，SFC 里 `import styles from './button.module.less'` 照常工作——**样式文件一行不改，移植 = 只重写组件逻辑层** |
| 3 | 首批组件（凑一个能发 0.1.0 的 MVP）：8 个核心组件（Button / Card / Dialog / HealthBar / StaminaWheel / Modal / Divider / Loading）+ 3 个味道命门（SheikahBackground / SheikahScanlines / SheikahSymbol） |
| 4 | 内部 dev playground（`packages/vue/dev/`，不发布），移植时逐个目检和 React 版并排对比 |
| 5 | 发布 `zelda-hyrule-ui-vue@0.1.0` + README 功能对齐矩阵 |

**React → Vue 移植映射表**（写进 skill 的 Vue 节）：

| React | Vue 3 |
|-------|-------|
| `children` | 默认 slot |
| `icon?: ReactNode` 等插槽型 props | 具名 slot（`#icon`） |
| `onSelect` / `onChange` 回调 | `emit('select')` / `v-model` |
| `createPortal` | `<Teleport>`（内置，反而更顺） |
| `useId` | `useId`（Vue 3.5+） |
| `classNames` 库 | 照用（框架无关），或 Vue 原生 `:class` 数组 |
| CSS Modules | 原样 import，类名 hash 规则一致 |

**验收**：MVP 11 个组件与 React 版并排目检一致；props 名/枚举/默认值经脚本比对 1:1。

### 阶段 3 · 全量移植（1.5–2 个月业余时间，🔒 跟随阶段 2）

| 类型 | 数量 | 单个成本 | 说明 |
|------|------|---------|------|
| 纯展示型组件 | ~70 | 15–30 分钟 | AI 翻译 + 人工校验。**本项目有完整 props 规范和样式规范，AI 翻译正确率显著高于平均——skill 第一次反哺自己** |
| 有状态交互组件 | ~10 | ~1 小时 | Modal / Toast / NumberInput / QuickSelector / SettingsToggle / MenuSections / Pagination / DialogChoice 等。顺带把此前审计出的 Toast 定时器问题在 Vue 版一步到位写对 |

配套动作：
- `skill/SKILL.md` 路由表加一行 Vue；`references/` 加 `vue-usage.md`（映射表 + 起手式 SFC 版）
- `AI_USAGE.md` 保持 React 语法为正典，Vue 包里附带映射节
- **Demo 站先不做 Vue 交互版**（README 标注用法即可，省 1–2 周）；Vue demo 进 Backlog
- 发版节奏：每移植完一个分类 = 一个 minor 版本 = 一条更新发帖素材（延续现有推广节奏）

**验收**：83 组件全量；对齐矩阵 100%；skill 路由含 Vue 路径。

---

## 四、中间档退路（验证不达标时）

只把 `packages/core` 发成 npm 包（tokens + 素材 + 字体 + 全局样式），文档里给 Vue 用户一条「纯 CSS 用法」路径：

```
npm i @zelda-hyrule/core   # 或 zelda-hyrule-core
```

- 成本：约 1 天（阶段 1 做完后几乎是顺手的事）
- 能满足约一半的 Vue 需求（要风格不要组件逻辑的那部分）
- 同时是探需求真伪的探针：core 包下载量能反映 Vue 生态的真实热度

---

## 五、长期税（发布前想清楚）

> **发布 Vue 版 = 承诺，不是一次性项目。** 此后每个新组件、每个 bugfix 的成本约 ×1.7（样式共享省下了剩余部分）。接受不了就停在中间档。

| 场景 | 增量成本 |
|------|---------|
| 新组件 | 写两份逻辑壳（样式/素材/规范共享） |
| 样式 bugfix | ≈0（core 单源） |
| 逻辑 bugfix | ×2 |
| breaking change | 两包同步发版 + 两份 migration 说明 |

---

## 六、不做清单

| 决策 | 原因 |
|------|------|
| ❌ 不开独立 Vue 仓库 | 见决策 1：规范漂移、维护翻倍、star 分流 |
| ❌ 不支持 Vue 2 | 2023 年已 EOL，负担纯负 |
| ❌ 不做 Nuxt 模块 / 专用集成 | Vue 3 包 + SSR 友好即可，按需再说 |
| ❌ Vue 版不"顺手改进" API | 决策 2 铁律；API 问题两框架同步改 |
| ❌ 不先做 Vue demo 站 | README 用法 + React demo 已足够第一印象，省 1–2 周 |
| ❌ 占位包不裸奔合规声明 | npm 描述从 0.0.1 起带非官方非商用声明 |

---

## 七、执行顺序总览

```
今天        阶段 0：占名 + 置顶 issue（半天）
            │
任意时间    阶段 1：monorepo 重构（1–2 天，独立有价值，可先做）
            │
   ┌────────┴────────┐
验证达标          验证不达标
   │                 │
阶段 2：MVP       中间档：只发 core 包（1 天）
（2–3 周末）          │
   │              （继续观察 core 下载量）
阶段 3：全量
（1.5–2 月业余）
```

---

**文档版本**：v1.0（2026-06-12 创建）
**维护方式**：阶段推进时更新状态；决策变化先改本文件，再同步 `ROADMAP.md`。
