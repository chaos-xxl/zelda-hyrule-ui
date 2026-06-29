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

### 阶段 2 · Vue 基建 + MVP ✅（已完成并发版 0.1.0，2026-06-12）

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

### 阶段 3 · 全量移植（1.5–2 个月业余时间，🔒 等 issue #2 信号达标）

> 现状（2026-06-12）：**已移植 11 / 83，剩 72**。
> 已完成：Button / Card / Dialog / Modal / Divider / Loading / HealthBar / StaminaWheel + SheikahBackground / SheikahScanlines / SheikahSymbol。
>
> ⏳ **启动门槛仍然有效**：issue #2 攒 5–10 个 👍 或第二条独立请求。MVP 已上线引流，等真信号，别白扔业余时间。

#### 3.1 分批发版计划（每批 = 一个 minor 版本 = 一条更新发帖素材）

批次按"视觉辨识度优先 + 同类打包 + 有状态的集中处理 + 组合件最后"排：

| 版本 | 批次内容 | 数量 | 备注 |
|------|---------|------|------|
| **0.2.0** ✅ | HUD 14 个：WeatherIcon / RupeeCounter / DivineBeast / SheikahAbility / RupeeType / Temperature / SoundMeter / Sensor / EffectDuration / BonusEffectIcon / LoadingIcon / HorseSpur / QuickSelector / LoadingHeart | 14 | **已完成**（2026-06，分 batch1+batch2 两次 PR）。整个 HUD 类别 parity，Vue 共 25/83。全部纯展示（QuickSelector 实际也无状态）|
| **0.3.0** | Dialog 补全 2（DialogChoice / DialogFloating）+ Quest 4 + Titles 5 | 11 | DialogChoice 有选中态 |
| **0.4.0** | Sheikah 补全 5（SheikahRune / SheikahCompendiumEntry / SheikahTextTitle / SheikahCompendiumFilters / SheikahAlbumButton）+ Map 7 | 12 | 纯展示为主 |
| **0.5.0** | Menu 8（MenuSections / ItemBG / Pagination / ModalButton / Scrollbar / ModalTimer / StatsStack / ModalTutorial）+ Controls 2 | 10 | 有状态集中区：MenuSections（aria-pressed）/ Pagination / Scrollbar |
| **0.6.0** | Shop 3（含 NumberInput）+ Settings 1（SettingsToggle）+ Battle 4 + Toast | 9 | 第二个有状态集中区：NumberInput 要做 `v-model`（对应 React 的 value/onChange）；Toast 注意定时器清理 |
| **0.7.0** | Decorations 6 + Brand 1（Logo） | 7 | 全纯展示，最快的一批 |
| **0.8.0** | Screens 9（MenuScreen / QuestScreen / LoadingScreen / TitleScreen / GameOverScreen / SystemScreen / ShopScreen / SheikahMapScreen / QuickSelectorScreen） | 9 | 组合件，依赖前面全部批次，**必须最后** |

合计 72。节奏参考：纯展示 15–30 分钟/个，有状态 ~1 小时/个；一批 ≈ 1–2 个周末。

**插队规则**：issue #2 留言点名的组件，提进下一批，呼声高的优先（上线通知里已公开承诺）。批次表相应顺延，不必重排版本号。

#### 3.2 每个组件的固定动作（照做即可，勿省步骤）

1. `packages/vue/src/components/<同 react 目录>/<Name>.vue` + `index.ts`——SFC + `<script setup lang="ts">`，样式 `import styles from '@react/components/.../xxx.module.less'`（**绝不复制 less**），素材走 `@core/assets`
2. props 与 React 版 **1:1**（同名/同枚举/同默认值）；差异仅限映射表：回调→emit、ReactNode prop→具名 slot、`className`/`style`→原生透传（不声明 prop）
3. `src/index.ts` 加导出（组件 + 类型）
4. `dev/App.vue` playground 加目检用例，与 React demo 并排对比
5. `skill/references/vue-usage.md` 的「当前组件集」清单同步

#### 3.3 每批发版的固定动作（对照 `发版检查清单.md` 的 Vue 版）

1. `npm run build:vue` + `npm run typecheck -w zelda-hyrule-ui-vue` 零报错；抽查 dist（index.css 含 @font-face、types 无 .less 泄漏）
2. bump `packages/vue/package.json` minor 版本
3. README 对齐矩阵更新（哪个版本对齐到哪些组件）；`packages/vue/README.md` 组件清单同步
4. PR 合并进 main（不直推）
5. `npm publish`（**需作者本人 OTP**）→ `npm view zelda-hyrule-ui-vue version` 验证
6. `git tag vue-vX.Y.0` + GitHub Release（中英双语）
7. issue #2 发进度评论（已发组件 + 下批预告）；可感知的批次发一条社媒更新

**阶段 3 总验收**：83 组件全量、对齐矩阵 100%、`vue-usage.md` 清单与包一致，最终版本号到 0.8.0 后评估是否定 1.0.0（宣布 full parity）。

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

## 七、执行顺序总览（含当前进度）

```
✅ 阶段 0：占名 + 置顶 issue            （2026-06-12 完成，0.0.1 占位包 + issue #2）
✅ 阶段 1：monorepo 重构                （2026-06-12 完成，产物与基线逐字节一致）
✅ 阶段 2：MVP 11 组件 + 发版 0.1.0     （2026-06-12 完成，npm latest + Release + issue 通知）
            │
⏳ 等 issue #2 信号（5–10 个 👍 或第二条独立请求）
            │
🔒 阶段 3：剩余 72 个，按 §3.1 批次表走
   0.2.0 HUD(14) → 0.3.0 Dialog+Quest+Titles(11) → 0.4.0 Sheikah+Map(12)
   → 0.5.0 Menu+Controls(10) → 0.6.0 Shop+Settings+Battle+Toast(9)
   → 0.7.0 Decorations+Brand(7) → 0.8.0 Screens(9) → 评估 1.0.0（full parity）
```

**后续操作守则**：做阶段 3 的任何一批，直接按 §3.1 批次表 + §3.2 组件动作 + §3.3 发版动作执行，不需要重新讨论方案；点单组件按"插队规则"提前。

---

**文档版本**：v1.1（2026-06-12 创建；同日更新阶段 0–2 完成状态 + 阶段 3 分批施工图）
**维护方式**：阶段推进时更新状态；决策变化先改本文件，再同步 `ROADMAP.md`。每发一批，把 §3.1 表中对应行打 ✅。
