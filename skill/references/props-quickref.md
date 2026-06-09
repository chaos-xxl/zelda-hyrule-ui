# Props 速查（合法枚举值）

> Reference for `skill/SKILL.md`. **从源码精确抽取**的高频组件 props 合法取值。
>
> ⚠️ **AI 最容易猜错枚举值导致代码报错。生成代码前，凡用到下列组件，必须核对取值。**
> 典型坑：天气晴天是 `clear` **不是** `sunny`；变体多用 `sheikah` 而非自创值。
>
> 本表只列"会被猜错的枚举/必填项"。完整 props（含所有可选项、默认值）见随包发布的 `AI_USAGE.md`（装包后可得）；本表是 skill-only 场景的兜底，确保不装包也能填对值。

---

## HUD

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `WeatherIcon` | `weather`（必填） | `clear` \| `storm` \| `rain` \| `cloudy` | ⚠️ 晴天是 `clear` 不是 `sunny` |
| `HealthBar` | `current` `max`（必填，number）；`bonus`（number） | — | 黄心数量 = bonus |
| `StaminaWheel` | `value`（必填，0–1 小数） | 如 `0.75` | 不是百分比整数 |
| `RupeeCounter` | `amount`（必填，number） | — | — |
| `RupeeType` | `type` | `green` \| `blue` \| `red` \| `purple` \| `silver` \| `gold` | — |
| `DivineBeast` | `beast`（必填） | `ruta` \| `medoh` \| `naboris` \| `rudania` | 水/风/雷/火 |
| `DivineBeast` | `charges`（number）`recharging`（bool） | — | — |
| `SheikahAbility` | `ability`（必填） | `roundBomb` \| `cubeBomb` \| `magnesis` \| `stasis` \| `cryonis` \| `camera` \| `masterCycle` | `plus` 加强态 |
| `Temperature` | `value`（必填） | `regular` \| `cold` \| `hot` | — |
| `SoundMeter` | `level` | `low` \| `high` | — |
| `BonusEffectIcon` | `icon`（必填） | `attackUp` \| `defenseUp` \| `speedUp` \| `heatResist` \| `coldResist` \| `electricResist` \| `quietUp` \| `fireResist` \| `durabilityUp` \| `criticalHit` \| `longThrow` \| `climbSpeedUp` \| `swimSpeedUp` \| `bonusHeart` \| `staminaUp` | `arrow` 显示箭头 |
| `LoadingIcon` | `icon` | `shrine` \| `orb` \| `rupee` \| `korok` \| `stamina` | — |
| `HorseSpur` | `type` | `normal` \| `ancient` \| `endura` | — |

## 通用 / 容器

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `Button` | `variant` | `primary` \| `sheikah` \| `ghost` \| `danger` | 不确定时默认 `sheikah` |
| `Button` | `size` | `small` \| `middle` \| `large` | 默认 `middle` |
| `Card` | `variant` | `default` \| `sheikah` \| `item` \| `golden` | — |
| `Divider` | `variant` | `sheikah` \| `golden` \| `subtle` \| `ornament` | — |
| `Modal` | `open`（必填，bool）`onClose` | — | 按 Esc 可关 |

## 希卡 / 背景

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `SheikahBackground` | `color` | `darkBlue` \| `blueGrey` | 默认 `darkBlue` |
| `SheikahScanlines` | `opacity`（number）`animated`（bool） | 如 `0.08` | 控制在 0.06–0.15 |
| `SheikahSymbol` | `size`（number）`outline`（bool） | 默认 380 / true | — |
| `SheikahRune` | `activeRune` | `roundBomb` \| `cubeBomb` \| `magnesis` \| `stasis` \| `cryonis` \| `camera` | — |
| `SheikahCompendiumFilters` | `activeFilter` | `creatures` \| `materials` \| `enemies` \| `weapons` \| `treasure` | — |

## 对话

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `Dialog` | `type` | `speech` \| `written` \| `sheikah` | `speaker` 说话人名；`showContinue` 续箭头 |
| `DialogChoice` | `options`（必填，`{label,value}[]`）`selectedIndex` | — | — |
| `DialogFloating` | `text`（必填）`type` | `dialog` \| `name` | — |

## 任务 / 菜单 / 标题

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `QuestListItem` | `questType` | `main` \| `side` \| `shrine` \| `memory` | `title` 必填 |
| `QuestListItem` | `state` | `default` \| `marked` \| `unmarked` \| `completed` | — |
| `QuestTypeIcon` | `type` | `main` \| `side` \| `shrine` \| `memory` | — |
| `TitleQuest` | `questType` | `main` \| `side` \| `shrine` | — |
| `MenuSections` | `activeSection` | `weapons` \| `bows` \| `shields` \| `clothing` \| `materials` \| `food` \| `special` | — |
| `ItemBG` | `state` | `empty` \| `filled` \| `selected` \| `equipped` \| `sheikahSelect` | — |
| `StatsStack` | `type` | `weapon` \| `armor` \| `shield` \| `healing` | — |
| `TitlePointOfInterest` | `variant` | `poi` \| `bossName` \| `poiWithHealth` | — |
| `TitleLocation` / `MapLocationName` | `size` | `small` \| `medium` \| `large` | — |

## 地图 / 战斗 / 商店 / 装饰

| 组件 | prop | 合法值 | 备注 |
|------|------|--------|------|
| `MapIcon` | `icon` | `shrine` \| `lab` \| `tower` \| `resurrection` | — |
| `MapBeacon` | `color`（必填） | `red` \| `blue` \| `yellow` \| `green` \| `pink` | `flare` 显示光柱 |
| `MapGrid` | `variant` | `small` \| `large` | — |
| `AttackDefenseValues` | `type`（必填） | `attack` \| `defense` | `modifier`：`normal`\|`bonus`\|`penalty` |
| `AimingReticle` | `variant` | `bow` \| `sheikahAbility` | — |
| `StatusHealing` | `type` | `5+Hearts` \| `5Hearts` \| `4Hearts` \| `3Hearts` \| `2Hearts` \| `1Hearts` \| `0Hearts` \| `fullRecovery` \| `bonusHearts` \| `stamina` | — |
| `ItemEnchantment` | `quality`（必填） | `0` \| `1` \| `2` \| `3`（number） | — |
| `ControllerButton` | `button`（必填） | `A` \| `B` \| `X` \| `Y` \| `L` \| `R` \| `ZL` \| `ZR` \| `Plus` \| `Minus` | — |
| `SettingsToggle` | `type` | `track` \| `on` \| `off` \| `center` \| `right` \| `left` \| `button` | `options` + `value` 控制内容 |
| `DirectionalArrow` | `direction` | `up` \| `down` \| `left` \| `right` | `variant`：`outline`\|`solid`\|`triangle`\|`large` |
| `TextOrnamentCorner` | `position` | `topLeft` \| `topRight` \| `bottomRight` \| `bottomLeft` | — |
| `TimerOrnament` | `side` | `left` \| `right` | — |
| `Logo` | `variant` | `full` \| `mark` | — |
| `Illustration` | `illustration` | `sword` \| `rupee` \| `slate` \| `memories` | 大尺寸装饰图 |

---

> 没列在这里的 prop（如各种 `size` / `className` / `style` / 回调）按常识传即可。拿不准某个枚举值，**优先查本表或装包后的 `AI_USAGE.md`，不要凭英文直觉猜**（如 `clear` vs `sunny`、`middle` vs `medium`）。
