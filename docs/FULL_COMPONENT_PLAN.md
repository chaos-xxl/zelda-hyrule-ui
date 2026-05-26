# zelda-hyrule-ui 全量组件规划

## 核心原则

**Figma 素材库中的每一个组件都必须在 hyrule-ui 中有对应的 React 实现。**

本文档将 Figma 中的 80+ 组件按功能域分组，规划为 React 组件，并标注实现优先级、Figma Node ID、以及组件 Props 设计。

---

## 组件总览（11 大类，60+ React 组件）

| 分类 | 组件数 | 状态 |
|------|--------|------|
| HUD 元素 | 16 | 🟡 已实现 3 个 |
| 菜单系统 | 14 | 🔴 未开始 |
| 对话系统 | 4 | 🟡 已实现 1 个 |
| 标题与文字 | 5 | 🔴 未开始 |
| 装饰元素 | 5 | 🟡 已实现 1 个 |
| 控制器按钮 | 4 | 🔴 未开始 |
| 希卡之石界面 | 8 | 🔴 未开始 |
| 地图系统 | 5 | 🔴 未开始 |
| 任务系统 | 4 | 🔴 未开始 |
| 加载与商店 | 4 | 🟡 已实现 1 个 |
| 战斗相关 | 4 | 🔴 未开始 |

---

## 一、HUD 元素（16 个组件）

### 已实现
- [x] `HealthBar` — 心心容器
- [x] `StaminaWheel` — 精力轮
- [x] `Loading` — 加载动画

### 待实现

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `HeartPiece` | 7:441 | `fraction: '1/4'|'2/4'|'3/4'|'4/4'|'0/4'`, `bonus: boolean` | P1 |
| 2 | `Temperature` | 8:913 | `value: 'regular'|'cold'|'hot'` | P2 |
| 3 | `SoundMeter` | 9:869 | `level: 'low'|'high'` | P2 |
| 4 | `WeatherIcon` | 13:622 | `weather: 'clear'|'storm'|'rain'|'cloudy'`, `glowing: boolean` | P1 |
| 5 | `RupeeCounter` | 3:234 | `amount: number`, `showLabel: boolean` | P1 |
| 6 | `SaveIndicator` | 13:944 | `state: '1'|'2'|'triforce'` | P3 |
| 7 | `Sensor` | 13:1983 | `active: boolean`, `plus: boolean` | P2 |
| 8 | `DivineBeast` | 61:155 | `beast: 'ruta'|'medoh'|'naboris'|'rudania'`, `recharging: boolean` | P1 |
| 9 | `SheikahAbility` | 8:864 | `ability: 'roundBomb'|'cubeBomb'|'magnesis'|'stasis'|'cryonis'|'camera'|'masterCycle'`, `recharge: boolean`, `plus: boolean` | P1 |
| 10 | `EffectDuration` | 34:2349 | `duration: number`, `maxDuration: number` | P2 |
| 11 | `HorseSpur` | 34:2551 | `type: 'normal'|'ancient'|'endura'`, `used: boolean` | P3 |
| 12 | `QuickSelector` | 13:723 | `type: 'bow'|'weapons'`, `items: Item[]`, `selectedIndex: number` | P2 |
| 13 | `BonusEffectHUD` | 198:20808 | `effects: EffectItem[]` | P2 |
| 14 | `TargetIndicator` | 270:33934 | `visible: boolean` | P3 |

---

## 二、菜单系统（14 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `MenuSections` | 8:466 | `sections: Section[]`, `activeSection: string` | P1 |
| 2 | `ItemSlot` | 6:1335 | `itemType: 'weapon'|'armor'|'shield'|'bow'|'material'|'meal'|'rune'|'other'`, `hasBonus: boolean`, `quantity: number|null` | P1 |
| 3 | `ItemBG` | 6:704 | `state: 'empty'|'filled'|'selected'|'equipped'|'sheikahSelect'` | P1 |
| 4 | `ItemDescription` | 32:1226 | `type: 'weapon'|'shield'|'armor'|'food'`, `enchanted: boolean`, `item: ItemData` | P1 |
| 5 | `StatsStack` | 33:1351 | `statusType: 'weapon'|'armor'|'shield'|'healing'`, `comparison: boolean`, `trait: boolean` | P2 |
| 6 | `Pagination` | 7:677 | `totalPages: number`, `currentPage: number` | P1 |
| 7 | `Scrollbar` | 7:1009 | `location: number`, `maxSections: number` | P2 |
| 8 | `MenuHeader` | 191:20155 | `title: string`, `tabs: Tab[]` | P1 |
| 9 | `ModalButton` | 6:1646 | `selected: boolean`, `children: ReactNode` | P1 |
| 10 | `ModalChoice` | 6:1697 | `options: Option[]`, `selectedIndex: number`, `onSelect: (i) => void` | P1 |
| 11 | `ModalNewItem` | 40:787 | `item: ItemData`, `open: boolean` | P2 |
| 12 | `ModalTimer` | 21:777 | `time: number`, `red: boolean` | P2 |
| 13 | `ModalTutorial` | 20:1259 | `text: boolean`, `showContinue: boolean`, `content: ReactNode` | P2 |
| 14 | `ModalRecipe` | 13:765 | `recipe: RecipeData` | P3 |

---

## 三、对话系统（4 个组件）

### 已实现
- [x] `Dialog` — 对话文本框（speech/written/sheikah）

### 待实现

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `DialogChoice` | 13:1238 | `options: ChoiceOption[]`, `selectedIndex: number`, `showButton: boolean`, `showQuantity: boolean` | P1 |
| 2 | `DialogChoiceSet` | 13:1397 | `choices: string[]` (1-3 个) | P1 |
| 3 | `DialogFloating` | 48:1488 | `type: 'dialog'|'name'`, `text: string` | P2 |

---

## 四、标题与文字（5 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `TitleLocation` | 24:800 | `name: string` | P1 |
| 2 | `TitleShrine` | 26:826 | `shrineName: string`, `subtitle: string` | P2 |
| 3 | `TitleQuest` | 26:845 | `questName: string`, `complete: boolean` | P1 |
| 4 | `TitleLocationLarge` | 44:290 | `name: string` | P2 |
| 5 | `TitlePointOfInterest` | 26:803 | `variant: 'poi'|'bossName'|'poiWithHealth'`, `name: string`, `healthPercent?: number` | P2 |

---

## 五、装饰元素（5 个组件）

### 已实现
- [x] `Divider` — 分割线（subtle/sheikah/golden/ornament）

### 待实现

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `TitleOrnament` | 13:1074 | `side: 'left'|'right'` | P1 |
| 2 | `TextBoxOrnamentContinue` | 13:1152 | (无 props，纯装饰) | P2 |
| 3 | `TextOrnamentCorner` | 20:1224 | `corner: 1|2|3|4|5|6|7|8`, `triforce: boolean` | P2 |
| 4 | `DirectionalArrow` | 2:192 | `direction: 'up'|'down'|'left'|'right'`, `variant: 'outline'|'solid'|'triangle'|'large'` | P2 |

---

## 六、控制器按钮（4 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `ControllerButton` | 2:68 | `button: 'A'|'B'|'X'|'Y'|'L'|'R'|'ZL'|'ZR'|'Plus'|'Minus'|'DPad-Up'|...`, `arrow: 'none'|'left'|'right'|'both'|'up'|'down'` | P1 |
| 2 | `ControllerButtonLabel` | 2:72 | `label: string`, `position: 'left'|'right'|'below'` | P1 |
| 3 | `ButtonHint` | 12:761 | `button: 'A'|'B'|'X'|'Y'|'L'|'R'|'ZL'|'ZR'|'StickForward'`, `label: string` | P1 |
| 4 | `ActionSet` | 5:154 | `actions: ActionItem[]` | P1 |

---

## 七、希卡之石界面（8 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `SheikahBackground` | 178:17638 | `color: 'darkBlue'|'blueGrey'` | P1 |
| 2 | `SheikahFrame` | 117:755 | (无 props，全屏边框装饰) | P1 |
| 3 | `SheikahScope` | 149:5 | `zoom: number` | P3 |
| 4 | `SheikahRune` | 139:4 | `activeRune: string` | P2 |
| 5 | `SheikahCamera` | 260:27336 | `mode: 'photo'|'selfie'` | P3 |
| 6 | `SheikahCompendium` | 260:27429 | `entries: CompendiumEntry[]`, `filter: string` | P2 |
| 7 | `SheikahSymbol` | 258:26039 | `outline: boolean`, `size: number` | P1 |
| 8 | `SheikahScanlines` | 151:4062 | `opacity: number`, `animated: boolean` | P1 |

---

## 八、地图系统（5 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `MapIcon` | 146:13 | `icon: 'shrine'|'lab'|'tower'|'resurrection'` | P1 |
| 2 | `MapBeacon` | 151:3884 | `color: 'red'|'blue'|'yellow'|'green'|'pink'`, `colored: boolean`, `flare: boolean` | P2 |
| 3 | `MapQuestMarker` | 151:4900 | `pulse: boolean` | P2 |
| 4 | `MapMinimap` | 160:52225 | `revealed: boolean`, `objectives: boolean`, `lockNorth: boolean` | P3 |
| 5 | `MapLocationName` | 232:41374 | `name: string`, `size: 'small'|'medium'|'large'` | P2 |

---

## 九、任务系统（4 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `QuestListItem` | 191:17721 | `questType: 'main'|'side'|'shrine'|'memory'`, `state: 'default'|'marked'|'unmarked'|'completed'`, `hovered: boolean`, `title: string`, `location: string` | P1 |
| 2 | `QuestTypeIcon` | 191:18381 | `type: 'main'|'side'|'shrine'|'memory'` | P1 |
| 3 | `QuestDescription` | 191:19521 | `title: string`, `description: string`, `location: string`, `cleared: string` | P1 |
| 4 | `QuestNotification` | 191:19529 | `showLabel: boolean` | P2 |

---

## 十、加载与商店（4 个组件）

### 已实现
- [x] `Loading` — 加载动画

### 待实现

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `LoadingScreen` | 199:20102 | `tip: string`, `icons: LoadingIcon[]` | P2 |
| 2 | `LoadingIcon` | 75:1559 | `icon: 'shrine'|'orb'|'rupee'|'korok'|'stamina'`, `quantity: boolean`, `count?: number` | P2 |
| 3 | `RupeeType` | 3:213 | `type: 'green'|'blue'|'red'|'purple'|'silver'|'gold'` | P1 |
| 4 | `ShopUI` | 197:21476 | `items: ShopItem[]`, `rupees: number` | P3 |

---

## 十一、战斗相关（4 个组件）

| # | 组件名 | Figma Node | Props 设计 | 优先级 |
|---|--------|-----------|-----------|--------|
| 1 | `BonusEffectIcon` | 6:324 | `icon: 'attackUp'|'defenseUp'|'speedUp'|'heatResist'|'coldResist'|...` (28 种), `arrow: boolean` | P2 |
| 2 | `SetBonusIndicator` | 9:910 | `level: 1|2|3`, `showLabel: boolean` | P3 |
| 3 | `ItemEnchantment` | 40:881 | `quality: 0|1|2|3` | P2 |
| 4 | `AimingReticle` | 35:1558 | `option: 'bow'|'sheikahAbility'` | P3 |

---

## 十二、完整界面组合（复合组件 / 页面级）

这些是由上面的基础组件组合而成的完整界面：

| # | 组件名 | Figma Node | 说明 | 优先级 |
|---|--------|-----------|------|--------|
| 1 | `MenuScreen` | 205:22638 | 完整菜单界面（物品栏） | P2 |
| 2 | `QuestScreen` | 161:17297 | 任务日志界面 | P2 |
| 3 | `SystemScreen` | 220:431 | 系统设置界面 | P3 |
| 4 | `ShopScreen` | 197:21476 | 商店界面 | P3 |
| 5 | `LoadingScreenFull` | 199:20102 | 完整加载画面 | P2 |
| 6 | `TitleScreen` | 199:20597 | 标题画面 | P3 |
| 7 | `GameOverScreen` | 219:23980 | Game Over 画面 | P3 |
| 8 | `SheikahMapScreen` | 132:104 | 希卡之石地图界面 | P3 |
| 9 | `SheikahDivineBeastScreen` | 227:28235 | 神兽控制界面 | P3 |

---

## 实施分批计划

### Batch 1（P1 组件，约 30 个）— 核心可用

覆盖最常用、最有视觉辨识度的组件：

**HUD**: HeartPiece, WeatherIcon, RupeeCounter, DivineBeast, SheikahAbility
**菜单**: MenuSections, ItemSlot, ItemBG, ItemDescription, Pagination, MenuHeader, ModalButton, ModalChoice
**对话**: DialogChoice, DialogChoiceSet
**标题**: TitleLocation, TitleQuest
**装饰**: TitleOrnament
**控制器**: ControllerButton, ControllerButtonLabel, ButtonHint, ActionSet
**希卡**: SheikahBackground, SheikahFrame, SheikahSymbol, SheikahScanlines
**地图**: MapIcon
**任务**: QuestListItem, QuestTypeIcon, QuestDescription
**其他**: RupeeType

### Batch 2（P2 组件，约 25 个）— 功能完善

**HUD**: Temperature, SoundMeter, Sensor, EffectDuration, QuickSelector, BonusEffectHUD
**菜单**: StatsStack, Scrollbar, ModalNewItem, ModalTimer, ModalTutorial
**对话**: DialogFloating
**标题**: TitleShrine, TitleLocationLarge, TitlePointOfInterest
**装饰**: TextBoxOrnamentContinue, TextOrnamentCorner, DirectionalArrow
**希卡**: SheikahRune, SheikahCompendium
**地图**: MapBeacon, MapQuestMarker, MapLocationName
**任务**: QuestNotification
**加载**: LoadingScreen, LoadingIcon
**战斗**: BonusEffectIcon, ItemEnchantment

### Batch 3（P3 组件，约 15 个）— 完整覆盖

**HUD**: SaveIndicator, HorseSpur, TargetIndicator
**菜单**: ModalRecipe
**希卡**: SheikahScope, SheikahCamera
**地图**: MapMinimap
**加载**: ShopUI
**战斗**: SetBonusIndicator, AimingReticle
**界面**: MenuScreen, QuestScreen, SystemScreen, ShopScreen, TitleScreen, GameOverScreen, SheikahMapScreen, SheikahDivineBeastScreen

---

## 每个组件的开发标准流程

```
1. 从 Figma 获取 design context
   → mcp_figma_desktop_get_design_context(nodeId)
   
2. 截图确认视觉目标
   → mcp_figma_desktop_get_screenshot(nodeId)

3. 提取 SVG path data + 精确样式值
   → 从 design context 中提取 fill/stroke/size/position

4. 创建组件文件
   src/components/[Category]/[Name]/
   ├── [Name].tsx          # 组件逻辑 + inline SVG
   ├── [name].module.less  # 样式
   └── index.ts            # 导出

5. 在 src/index.ts 添加导出

6. 在 Demo 站添加展示

7. 在 SKILL.md 补充精确样式规范

8. 在 AI_USAGE.md 补充 API 文档
```

---

## 文件组织结构（按功能域分组）

```
src/components/
├── hud/
│   ├── HealthBar/
│   ├── HeartPiece/
│   ├── StaminaWheel/
│   ├── Temperature/
│   ├── SoundMeter/
│   ├── WeatherIcon/
│   ├── RupeeCounter/
│   ├── SaveIndicator/
│   ├── Sensor/
│   ├── DivineBeast/
│   ├── SheikahAbility/
│   ├── EffectDuration/
│   ├── HorseSpur/
│   ├── QuickSelector/
│   ├── BonusEffectHUD/
│   └── TargetIndicator/
├── menu/
│   ├── MenuSections/
│   ├── ItemSlot/
│   ├── ItemBG/
│   ├── ItemDescription/
│   ├── StatsStack/
│   ├── Pagination/
│   ├── Scrollbar/
│   ├── MenuHeader/
│   ├── ModalButton/
│   ├── ModalChoice/
│   ├── ModalNewItem/
│   ├── ModalTimer/
│   ├── ModalTutorial/
│   └── ModalRecipe/
├── dialog/
│   ├── Dialog/
│   ├── DialogChoice/
│   ├── DialogChoiceSet/
│   └── DialogFloating/
├── titles/
│   ├── TitleLocation/
│   ├── TitleShrine/
│   ├── TitleQuest/
│   ├── TitleLocationLarge/
│   └── TitlePointOfInterest/
├── decorations/
│   ├── Divider/
│   ├── TitleOrnament/
│   ├── TextBoxOrnamentContinue/
│   ├── TextOrnamentCorner/
│   └── DirectionalArrow/
├── controls/
│   ├── ControllerButton/
│   ├── ControllerButtonLabel/
│   ├── ButtonHint/
│   └── ActionSet/
├── sheikah/
│   ├── SheikahBackground/
│   ├── SheikahFrame/
│   ├── SheikahScope/
│   ├── SheikahRune/
│   ├── SheikahCamera/
│   ├── SheikahCompendium/
│   ├── SheikahSymbol/
│   └── SheikahScanlines/
├── map/
│   ├── MapIcon/
│   ├── MapBeacon/
│   ├── MapQuestMarker/
│   ├── MapMinimap/
│   └── MapLocationName/
├── quest/
│   ├── QuestListItem/
│   ├── QuestTypeIcon/
│   ├── QuestDescription/
│   └── QuestNotification/
├── battle/
│   ├── BonusEffectIcon/
│   ├── SetBonusIndicator/
│   ├── ItemEnchantment/
│   └── AimingReticle/
├── screens/
│   ├── MenuScreen/
│   ├── QuestScreen/
│   ├── LoadingScreen/
│   ├── TitleScreen/
│   └── ...
└── common/
    ├── Button/
    ├── Card/
    ├── Modal/
    └── Loading/
```

---

## 与 Figma 素材的对应关系验证

### 确认全覆盖 Checklist

- [ ] HUD 元素：16/16 个 Figma 组件已规划
- [ ] 菜单系统：14/14 个 Figma 组件已规划
- [ ] 对话系统：4/4 个 Figma 组件已规划
- [ ] 标题与文字：5/5 个 Figma 组件已规划
- [ ] 装饰元素：5/5 个 Figma 组件已规划
- [ ] 控制器按钮：4/4 个 Figma 组件已规划
- [ ] 希卡之石界面：8/8 个 Figma 组件已规划
- [ ] 地图系统：5/5 个 Figma 组件已规划
- [ ] 任务系统：4/4 个 Figma 组件已规划
- [ ] 加载与商店：4/4 个 Figma 组件已规划
- [ ] 战斗相关：4/4 个 Figma 组件已规划
- [ ] 完整界面：9 个复合页面已规划

**总计：73 个基础组件 + 9 个页面级组件 = 82 个 React 组件**

---

## 注意事项

1. **SVG 全部 inline** — 不用 `<img src>`，直接在 JSX 中写 `<svg><path>` 保证矢量清晰
2. **从 Figma 精确导出** — 每个组件开发前都要调用 `get_design_context` 获取精确数据
3. **保持 Props 一致性** — 同类组件的 Props 命名风格统一
4. **文档同步更新** — 每完成一个组件，SKILL.md 和 AI_USAGE.md 同步补充
5. **Demo 分页展示** — 90-100 个组件需要按分类分页展示，不能全堆在一个页面


---

## 补充：Figma 交叉检查后发现的遗漏组件

以下组件在 Figma metadata 中存在，但之前的规划中未覆盖：

### 新增组件

| # | 组件名 | Figma Frame/Node | Props 设计 | 分类 |
|---|--------|-----------------|-----------|------|
| 1 | `Toast` | 6:229 (Toast - Inventory Notification) | `item: string`, `icon: ReactNode` | 反馈 |
| 2 | `ToastSideInfo` | 57:1448 (Toast - Side Info) | `variant: 'sideHint'|'acquireItem'|'controlHint'|'sideHintUpdate'|'objectiveCounter'` | 反馈 |
| 3 | `TitleQuestSubtitle` | 28:817 | `questType: 'shrine'|'side'|'main'` | 标题 |
| 4 | `TitleShrineName` | 24:813 | `name: string` | 标题 |
| 5 | `TitleOptions` | 199:19781 | `hovered: boolean`, `label: string` | 标题 |
| 6 | `SettingsToggleBase` | 121:185 | `toggle: 'track'|'on'|'off'|'center'|'right'|'left'|'button'`, `selected: boolean` | 设置 |
| 7 | `SettingsToggleComponent` | 122:2899 | `selected: boolean`, `label: string`, `options: string[]` | 设置 |
| 8 | `ScrimListItem` | 220:74 | `hovered: boolean`, `hidden: boolean`, `label: string` | 设置 |
| 9 | `ScrimAbilityBullet` | 220:158 | (纯装饰) | 设置 |
| 10 | `ScrimSaveSelection` | 225:22755 | `hover: boolean`, `autosave: boolean`, `data: SaveData` | 设置 |
| 11 | `ScrimSaveThumb` | 225:22792 | `image: string` | 设置 |
| 12 | `AutosaveViolator` | 225:23019 | (纯装饰标签) | 设置 |
| 13 | `SheikahAlbumButton` | 236:25143 | `selected: boolean`, `label: string` | 希卡 |
| 14 | `SheikahTextOrnamentDivider` | 239:25636 | `side: 'left'|'right'` | 希卡 |
| 15 | `SheikahTextTitle` | 239:25659 | `title: string`, `description?: string` | 希卡 |
| 16 | `SheikahCompendiumEntry` | 258:26055 | `revealed: boolean`, `hovered: boolean` | 希卡 |
| 17 | `SheikahCompendiumFilters` | 260:27029 | `variation: 'creatures'|'materials'|'enemies'|'weapons'|'treasure'`, `active: boolean` | 希卡 |
| 18 | `SheikahCompendiumFilterBar` | 260:27276 | `filters: Filter[]`, `activeFilter: string` | 希卡 |
| 19 | `SheikahMemoryPhotos` | 260:28727 | `memories: Memory[]` | 希卡 |
| 20 | `SheikahCompendiumEntryCard` | 260:28812 | `hovered: boolean`, `data: EntryData` | 希卡 |
| 21 | `SheikahDivineBeastMarker` | 227:28384 | `selected: boolean` | 希卡 |
| 22 | `SheikahDivineBeastMarkers` | 227:28391 | `variant: 'terminal'|'player'` | 希卡 |
| 23 | `SheikahDivineBeastSelector` | 227:28943 | (圆形选择器) | 希卡 |
| 24 | `SheikahRuneSet` | 141:3797 | `bg: 'blank'|'selected'|'default'` | 希卡 |
| 25 | `MapResetLocation` | 132:29 | (按钮) | 地图 |
| 26 | `MapCursor` | 133:101 | `rightSide: boolean`, `action: boolean` | 地图 |
| 27 | `MapHeroLocation` | 160:41030 | `vision: boolean` | 地图 |
| 28 | `MapGrid` | 160:31 / 160:374 | `size: 'small'|'large'` | 地图 |
| 29 | `MapMinimapBase` | 160:51533 | (底图) | 地图 |
| 30 | `NumberInput` | 197:19438 | `value: number`, `onChange: (v) => void` | 商店 |
| 31 | `ShopRupeeIcon` | 195:10617 | (纯图标) | 商店 |
| 32 | `ShopBag` | 195:10634 | (纯图标) | 商店 |
| 33 | `ShopRupeeCounter` | 195:10508 | `amount: number` | 商店 |
| 34 | `ShopPriceQuantity` | 195:10659 | `price: number`, `quantity: number` | 商店 |
| 35 | `ShopItemInfo` | 195:8428 | `item: ItemData` | 商店 |
| 36 | `ShopListItem` | 197:21017 | `hovered: boolean`, `item: ShopItem` | 商店 |
| 37 | `DirectionalTriangle` | 195:11137 | `variant: 'add'|'remove'` | 装饰 |
| 38 | `TimerOrnament` | 20:1371 | `side: 'left'|'right'` | 装饰 |
| 39 | `TextBoxOrnamentSide` | 13:1165 | `side: 'left'|'right'`, `type: 'spoken'|'written'|'sheikah'` | 装饰 |
| 40 | `Starburst` | 116:8295 / 13:920 | `size: number` | 装饰 |
| 41 | `TutorialBG` | 44:141 / 20:1354 | (背景容器) | 教程 |
| 42 | `TutorialSubtitleBar` | 20:1352 | `title: string` | 教程 |
| 43 | `StatusHealing` | 29:2371 | `type: '5+Hearts'|'5Hearts'|...|'stamina'|'fullRecovery'|'bonusHearts'` | 战斗 |
| 44 | `BonusEffectDescription` | 29:3075 | `type: string`, `level: 1|2|3` | 战斗 |
| 45 | `AttackDefenseValues` | 1:122 | `fieldType: 'damageNumber'|'damageComparison'`, `variant: boolean` | 战斗 |
| 46 | `WeatherAndTime` | 13:665 | (组合组件：天气+时间) | HUD |
| 47 | `SaveIndicatorComponent` | 13:1015 | `variant: 'default'|'variant2'` | HUD |
| 48 | `DivineBeastsLoading` | 64:180 | `beast: 'ruta'|'medoh'|'naboris'|'rudania'|'masterCycle'` | 加载 |
| 49 | `LoadingHeart` | 75:1741 | `shown: boolean` | 加载 |
| 50 | `LogoFull` | 74:285 | (塞尔达完整 Logo) | 品牌 |
| 51 | `LogoMark` | 116:1942 | (塞尔达标记) | 品牌 |
| 52 | `GamepadSwitch` | 220:1075 | `view: 'front'|'top'` | 控制器 |
| 53 | `MenuScrimOverlay` | 161:17340 | `position: 'center'|'left'|'right'` | 菜单 |
| 54 | `MenuMaterialSelectionControls` | 232:32951 | (材料选择控制面板) | 菜单 |
| 55 | `QuestIllustration` | 174:17614 | `illustration: 'sword'|'rupee'|'slate'|'memories'` | 任务 |
| 56 | `QuickItemSelector` | 134:3322 | `type: 'arrows'|'weapons'|'shields'|'bows'|'runes'`, `position: boolean` | 菜单 |
| 57 | `DialogMental` | 13:1665 (Field Type=Mental) | `choices: boolean`, `text: string` | 对话 |
| 58 | `SheikahMapBorder` | 132:104 | (全屏边框) | 希卡 |
| 59 | `SheikahAlbumMemories` | 260:29866 | (完整相册界面) | 希卡 |
| 60 | `MapQuestIcon` | 26:832 | `icon: 'shrine'|'sideQuest'|'mainQuest'` | 地图 |

---

## 更新后的总计

- **之前规划**：73 基础 + 9 页面 = 82 个
- **新增遗漏**：60 个
- **去重后总计**：约 **120+ React 组件**（含变体）

> 注：部分 Figma 中的 symbol 是同一组件的不同变体（如 Heart Fraction 的 5 种状态），这些会合并为一个 React 组件的不同 props 值，不会每个变体都单独建组件。实际独立组件数约 **90-100 个**。
