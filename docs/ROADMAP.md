# zelda-hyrule-ui 迭代计划（Living Roadmap）

> 这是一份**持续更新的待办清单**。任何提到过、规划过、或聊着聊着冒出来的想法，都往这里补。有空回来翻一翻，就知道有什么可做的。
>
> **维护约定**：新想法进「📥 Backlog（想法池）」；决定要做的挪到「🔜 计划中」；动手了挪到「🚧 进行中」；做完挪到「✅ 已完成」。每条尽量带一句"为什么"和指向详细文档的链接（如果有）。

---

## 图例

| 标记 | 含义 |
|------|------|
| 🟢 P1 | 高价值 / 高频，优先做 |
| 🟡 P2 | 有价值，看心情和时间 |
| 🔵 P3 | 锦上添花 / 远期 |
| 💡 | 想法，还没决定做不做 |
| 🔒 | 有前置依赖或触发条件，没到时机别做 |

---

## 🚧 进行中

| 事项 | 说明 | 详细文档 |
|------|------|---------|
| （空）| 当前无进行中事项 | — |

---

## 🔜 计划中（已决定要做，等排期）

| 事项 | 优先级 | 说明 |
|------|--------|------|
| Vue 版 · 阶段 0：占名 + 需求验证 ✅ | 🟢 P1 | 已完成（2026-06-12）：占位包 [`zelda-hyrule-ui-vue@0.0.1`](https://www.npmjs.com/package/zelda-hyrule-ui-vue) 已发布（npm 描述带非官方声明）；置顶 issue [#2](https://github.com/chaos-xxl/zelda-hyrule-ui/issues/2) 已开。**当前在等验证信号：5–10 个 👍 或第二条独立请求，达标即启动阶段 2/3。** 详见 `VUE_VERSION_PLAN.md`。 |
| Vue 版 · 阶段 1：monorepo 重构 ✅ | 🟢 P1 | 已完成（2026-06-12）：npm workspaces（非 pnpm，沿用现有 npm 流程），`packages/core`（tokens+素材+字体单源）+ `packages/react`（包名不变）。**产物与重构前逐字节一致**（227/228，唯一差异是顺手修掉 d.ts 里的 less 死 import）。 |
| Vue 版 · 阶段 2：MVP 11 组件 ✅ | 🟢 P1 | 已完成（2026-06-12）：`packages/vue` 真实构建（vite+plugin-vue+dts），8 核心 + 3 味道命门，SFC 复用 react 包同一份 .module.less（`@react` 别名，样式零分叉），Modal 用 Teleport+useId（peer vue>=3.5）。playground 全组件目检通过。**0.1.0 已发版**（2026-06-12，npm latest）。 |
| Vue 版 · 阶段 3：全量移植（剩 72，分 7 批） | 🟡 P2 🔒 | **触发条件：置顶 issue #2 攒 5–10 个 👍 或第二条独立请求。** 施工图已定稿（`VUE_VERSION_PLAN.md` §3.1–3.3）：0.2.0 HUD(14) → 0.3.0 Dialog+Quest+Titles(11) → 0.4.0 Sheikah+Map(12) → 0.5.0 Menu+Controls(10) → 0.6.0 Shop+Settings+Battle+Toast(9) → 0.7.0 Decorations+Brand(7) → 0.8.0 Screens(9)。每批=一个 minor=一条发帖素材；issue 点单组件插队。**执行时直接按文档走，不需重新讨论方案。** |
| 验证排版互操作（路径 A） | 🟢 P1 | 实测一次完整流程（如"用塞尔达风做 3 页 PPT"），看 Agent 能否正确走 `layout-bridge.md`。这是检验排版方案有没有真落地的唯一办法。 |
| 移动端 Demo 适配（拆成两个任务，见下） | 🟢 P1 | **游戏主题库最怕之一：移动端稀烂。** 开发者 90% 在手机上刷 GitHub/Twitter/Reddit，Live Demo 第一印象常发生在手机上。移动端问题分两层，必须分开治： |
| └ 任务 1 · 组件级适配 + 响应式（**真痛点，自研**） | 🟢 P1 🚧 | BOTW 组件按主机大屏设计（对话框原宽 910px！），小屏放不下。**已有 `AutoFit`（`transform: scale` 按 designWidth 等比缩放）机制，归藏帮不了这层。** 要审：AutoFit 覆盖够不够 / 触摸目标大小 / 横向溢出 / 各屏宽（320/375/390/414）断点。**这是"移动端稀烂"的主因（约占 70%），先做。** |
| └ 任务 2 · 页面框架重排（**借归藏方法论，路径 A**）✅ | 🟡 P2 | 已完成：用归藏瑞士排版思路重排 `MobilePage` 框架——hero 升级为 KPI 大字报（「83」做成 88px 视觉重心 + 扫描线）、section 用 CSS counter 自动编号（01–20）、随机分隔线统一成单锚点希卡蓝章节标记。借方法论不抄代码，保持 MIT。 |
| 继续高精度还原第三波 | 🟡 P2 | 审计剩余 LOW 精度组件，再挑一批做节点级还原。每做一批 = 一次更新发帖素材。 |

---

## 📥 Backlog（想法池，按主题分组）

### A. 排版能力 / 内容生成

| 事项 | 优先级 | 说明 | 链接 |
|------|--------|------|------|
| 路径 C：自建塞尔达排版系统 | 🔵 P3 🔒 | 不依赖归藏 skill，自己内建 6 个具名版式（封面/KPI/特性列表/对比/网格/收尾）。**触发条件**：A 验证为高频刚需 / 归藏 skill 出问题 / 想升级成"设计系统"。守 license 红线：学原则不抄代码。 | `LAYOUT_INTEGRATION_PLAN.md` §10 |
| 把 `#/xhs`、`#/poster` 沉淀为可复用版式 | 🔵 P3 🔒 | 现在是手搓成品，是路径 C 的起点。C 启动时第一步就是把它们抽象成参数化版式。 | 同上 |
| 内容驱动出图流水线 | 🔵 P3 💡 | 把 `export-posters.mjs` 升级成"读内容 JSON → 套版式 → 出图"。路径 C 的可选项。 | — |

### B. 体验 / 专业度（社区建议）

> 来源：网友建议。核心命题——**游戏主题 UI 库大家最怕两件事：「中看不中用（没真实业务组件）」和「移动端稀烂」。** 下面是针对性整改。

| 事项 | 优先级 | 说明 |
|------|--------|------|
| 移动端 Demo 适配（任务 1 自研 + 任务 2 借归藏） | 🟢 P1 | 见「🔜 计划中」的两任务拆分。痛点 70% 是组件级适配（自研 AutoFit，归藏帮不了），30% 是页面框架（可借归藏方法论）。**先做任务 1。** |
| Usage Snippet 加「一键复制」按钮 ✅ | 🟡 P2 | 已完成：`#/docs` 每个组件 Usage 代码块右上角加了一键复制按钮（clipboard API + execCommand 兜底，Copy→Copied→自动复位，希卡蓝 hover/focus 态）。67 个代码块全覆盖。 |
| A11y 无障碍体系化 ✅ | 🟡 P2 | 已完成：①装饰性 SVG 全部加 `aria-hidden`（34 处，codemod 一次性处理）；②图标按钮补 `aria-label`（MenuSections/NumberInput），MenuSections 加 `aria-pressed`；③用 div 实现的可点击组件（QuestListItem/ShopListItem/ItemBG/SheikahCompendiumEntry）通过新建 `src/utils/a11y.ts` 的 `interactiveProps()` 补齐 `role=button`+`tabIndex`+Enter/Space 键盘激活；④全部交互组件加 `:focus-visible` 希卡蓝焦点环（11 个组件）；⑤Modal 加 Escape 关闭。新增 `scripts/audit-a11y.mjs` 长期 QA 工具。**可作 r/reactjs 宣传卖点。** |

### C. 组件质量 / 还原度

| 事项 | 优先级 | 说明 |
|------|--------|------|
| 第三波高精度还原 ✅ | 🟡 P2 | 已完成 9 个组件：RupeeType（7切面宝石）/ RupeeCounter（复用）/ QuestTypeIcon + QuestListItem（共用 questIcons）/ MapQuestMarker（环形靶标）/ MapBeacon（方框书签针）/ AttackDefenseValues（复用剑盾）/ MapHeroLocation（风筝箭头改希卡黄+金辉光）/ QuestNotification（改用环形靶标）。Logo 三角力量保留（"ZELDA"文字刻意不还原官方 logo 美术——IP 安全）。 |
| 全量组件审计复查 | 🔵 P3 💡 | 定期重跑一次精度审计（HIGH/MEDIUM/LOW 分级），看整体水位。已知精确的勿动：WeatherIcon/Sensor/LoadingHeart/StatusHealing/MapIcon/TitleOrnament（inline 但是 Figma 复杂贝塞尔）。 |
| 补齐未实现组件 | 🔵 P3 | Figma 里还有组件没做成 React。是否要 100% 覆盖待定。 |

### D. 推广 / 增长

| 事项 | 优先级 | 说明 |
|------|--------|------|
| 持续高频更新发帖 | 🟢 P1 | 学 guokaigdg 节奏：每修一批组件 = 一条更新推文 / 小红书。素材已有（`#/xhs` 8 张图 + 海报）。 |
| 小红书运营 | 🟡 P2 | 已产出 8 张 3:4 配图 + 文案。持续发，观察反馈。 |
| Reddit 发帖 | 🟡 P2 | r/zelda 有标题规则（必须带 [BotW] 等 bracket tag，禁全大写）。发纯标题+链接帖。 |
| X / Twitter | 🟡 P2 | 新号起步慢。靠持续更新 + 蹭 KOL（如 op7418）势能。 |
| 自来水循环 | 🔵 P3 💡 | 让用户用这个 skill 做的作品反过来成为宣传素材。 |

### E. 文档 / 项目健康

| 事项 | 优先级 | 说明 |
|------|--------|------|
| npm 发布新版本 ✅ | 🟢 P1 | 已发 **0.2.0**（线上 latest）；git tag v0.2.0 + GitHub Release 都已建。下次发版提醒：2FA 可用 Automation token 免 OTP。 |
| README 持续打磨 | 🟡 P2 | Reddit 反馈"文档写得糟"。已优化一轮，持续改进。 |
| 合规姿态维护 | 🟢 P1 | 已加 Nintendo 非官方声明（README banner + npm 描述 + 页脚 + ATTRIBUTION 两层权利）。**铁律：永不商业化**，收到 takedown 立即配合。 |

### F. 远期 / 大方向

| 事项 | 优先级 | 说明 |
|------|--------|------|
| OS UI Kit 设计系统（独立大项目） | 🔵 P3 💡 | 把整套 OS 组件设计规范开发成一个"设计系统"，让设计师不用搭积木、直接出 UI 图。需新开项目 + 独立 agent。塞尔达项目是这个想法的跑通验证。 |
| 项目升级为"塞尔达设计系统" | 🔵 P3 💡 | 从"组件库"升级为"能直接产出 PPT/图文/网页"的设计系统。路径 C 是其中一块。 |

---

## ✅ 已完成（倒序，留档）

| 事项 | 说明 | 关联文档 |
|------|------|---------|
| SKILL.md 加「塞尔达味道命门组件」一节 | 在路由层（必读层）拎出 5 个风味担当组件（SheikahBackground+Scanlines / SheikahSymbol / Illustration / Logo / Divider），讲清优先级、典型场景、关键 props，加「风味起手式」骨架 + 5 条使用规则。补上"组件优先级"这层之前缺失的指引。同时复核 Logo-Full/Logo-Mark 两个 Figma 节点：确认是官方商标 logo，维持安全替代版不还原。 | `skill/SKILL.md` |
| A11y 无障碍体系化 | 装饰 SVG 全加 `aria-hidden`(34处)；图标按钮补 `aria-label`+`aria-pressed`；div 可点击组件用 `interactiveProps()` 补 `role=button`+键盘激活；11 个交互组件加 `:focus-visible` 焦点环；Modal 加 Escape 关闭。新增 `audit-a11y.mjs` QA 工具 + `src/utils/a11y.ts`。 | `skill/references/accessibility.md` |
| docs 展示覆盖核查 | 用 `audit-docs-coverage.mjs` 比对 导出 vs 侧边栏 vs DemoSection，发现 7 个组件"做了但 docs 找不到"(Illustration + LoadingIcon/LoadingHeart/HorseSpur/QuickSelector/ModalTutorial/MapGrid)，全部补上侧边栏+中文名+示例+props+展示区。现 74 个非 screen 组件 100% 有文档。 | `scripts/audit-docs-coverage.mjs` |
| 完整业务 demo：登录页 | `#/showcase` 新增 SHOT 06 登录页（用 SheikahBackground/Symbol/Button/ActionSet + 双层边框输入框拼成真实可用界面）。回击"中看不中用(没真实业务组件)"的批评，也是发帖素材。 | `demo/App.tsx` ShowcasePage |
| Usage 一键复制按钮 | `#/docs` 67 个代码块加复制按钮（clipboard + 兜底，Copy→Copied 反馈）。提"专业库"转化信号。 | `ROADMAP.md` B 区 |
| v0.2.0 发布 | npm publish 0.2.0（线上 latest）+ git tag + GitHub Release（中英 release notes）。 | GitHub Releases |
| 组件高精度还原 第三波 | 9 个手画近似组件升级到 Figma 节点级：卢比宝石(7切面)/卢比计数/任务类型图标/任务列表(共用 questIcons)/地图任务标记(环形靶标)/地图信标(书签针)/攻防图标(剑盾)/英雄位置(风筝箭头)/任务通知(环形靶标)。Logo 三角力量保留，"ZELDA"文字 IP 安全不还原。 | `ROADMAP.md` C 区 |
| 移动端适配 P1（任务1+2） | 任务1：修复 docs 页手机溢出（FitScale 缩放 + min-width:0 容器约束 + tap 目标 79→12）。任务2：用归藏瑞士方法论重排 MobilePage 框架（KPI 大字报 + 自动编号 + 章节标记）。新增 `audit-mobile.mjs` QA 工具。 | `ROADMAP.md`（移动端两任务） |
| 排版互操作桥接（路径 A） | 新建 `layout-bridge.md`，token 覆盖映射 + 退化方案；SKILL/README 更新。骨+皮，保持 MIT。 | `LAYOUT_INTEGRATION_PLAN.md` |
| Nintendo IP/商标合规加固 | README banner、npm 描述、demo 页脚、ATTRIBUTION 两层权利澄清。 | `ATTRIBUTION.md` |
| 组件高精度还原 第二波 | BonusEffectIcon(14图标) / MenuSections / QuestListItem 升级到精确 SVG，保留游戏原色。 | — |
| 组件高精度还原 第一波 | SheikahCompendiumFilters / SheikahTextTitle / SheikahRune 去 emoji 换精确 SVG。 | — |
| 小红书宣传配图 | `#/xhs` 8 张 3:4 卡片 + 文案；`export-posters.mjs` 扩展。 | — |
| 品牌海报 + showcase | `#/poster`（21:9/1:1/3:4）+ `#/showcase`；Playwright 3x 导出；README 换图。 | — |
| SKILL.md 拆分重构 | 单文件 2200 行 → 路由层 + 12 个 references（Progressive Disclosure）。 | `SKILL_REFACTOR_PLAN.md` |
| CC BY 4.0 许可证合规 | 查实原 Figma 是 CC BY 4.0，补全 ATTRIBUTION 合规说明。 | `ATTRIBUTION.md` |
| 项目 double-check 复盘 | 修正 GitHub 用户名、组件数(83)、版本号等。 | — |

---

## 已知约束 / 不做清单（避免重复讨论）

| 决策 | 原因 |
|------|------|
| ❌ 不改项目名（保留 `zelda-hyrule-ui`） | 保推广连续性。已知代价：商标暴露面大，靠"非官方+非商用"姿态缓解。 |
| ❌ 不 fork 合并归藏代码 | 归藏是 AGPL，合并会让本项目被迫转 AGPL，摧毁组件库的可被采用性。只做互操作（路径 A）。 |
| ❌ 不转 AGPL | 已封档复盘：star 是唯一 KPI，而 license 对 star 权重≈0；转 AGPL 在 star KPI 下性价比为负。详见 `LAYOUT_INTEGRATION_PLAN.md` §11。坚持 MIT。 |
| ❌ 不商业化 | 这是 Nintendo IP "粉丝创作"叙事能站住的前提。 |
| ⚠️ 高精度还原必须 Figma 节点级 | 绝不用 emoji/近似图形。这是 Reddit "AI slop" 的教训。 |

---

## 相关文档索引

| 文档 | 内容 |
|------|------|
| `ROADMAP.md`（本文件） | 迭代计划 / 想法池（持续更新） |
| `VUE_VERSION_PLAN.md` | Vue 版本计划（占名 / monorepo / 分阶段移植 / 退路） |
| `合规决策速查.md` | 版权 / IP / 开源协议决策单页总览（被质疑时引用） |
| `LAYOUT_INTEGRATION_PLAN.md` | 排版能力集成（路径 A 已执行 / C 规划） |
| `SKILL_REFACTOR_PLAN.md` | SKILL.md 拆分重构方案 |
| `FULL_COMPONENT_PLAN.md` | 全量组件规划（Figma 对应表） |
| `IMPLEMENTATION_PLAN.md` | 项目搭建路线图（对标 animal-island-ui） |
| `COMPETITIVE_ANALYSIS.md` | 竞品分析 |
| `PRODUCT_REQUIREMENTS.md` | 产品需求 |
| `ALIGNMENT_CHECKLIST.md` | 对齐检查清单 |

---

**文档版本**：v1.0（2026-06 创建）
**维护方式**：聊到任何想法就往「📥 Backlog」补；状态变化就在四个区之间挪动。
