import React, { useState, useEffect } from 'react'
import {
  Button, Card, Dialog, Divider, Modal, Loading, Toast,
  HealthBar, StaminaWheel, WeatherIcon, RupeeCounter, DivineBeast,
  SheikahAbility, RupeeType, Temperature, SoundMeter, Sensor,
  EffectDuration, BonusEffectIcon,
  MenuSections, ItemBG, Pagination, ModalButton, Scrollbar, ModalTimer, StatsStack,
  TitleLocation, TitleQuest, TitleShrine, TitleLocationLarge, TitlePointOfInterest,
  DialogChoice, DialogFloating,
  QuestListItem, QuestDescription, QuestTypeIcon, QuestNotification,
  ControllerButton, ActionSet,
  MapIcon, MapBeacon, MapQuestMarker, MapLocationName, MapCursor, MapHeroLocation,
  SheikahSymbol, SheikahBackground, SheikahScanlines, SheikahRune,
  SheikahCompendiumEntry, SheikahTextTitle, SheikahCompendiumFilters, SheikahAlbumButton,
  ItemEnchantment, StatusHealing, AimingReticle, AttackDefenseValues,
  ShopListItem, ShopPriceQuantity, NumberInput,
  SettingsToggle,
  TitleOrnament, DirectionalArrow, Starburst, TextOrnamentCorner, TimerOrnament, Logo,
  Illustration,
} from '../src'
import '../src/styles/global.less'
import './demo.css'

// ─── Types ───────────────────────────────────────────────────────────────────

interface CategoryDef {
  id: string
  label: string
  labelZh: string
  components: string[]
}

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES: CategoryDef[] = [
  { id: 'hud', label: 'HUD', labelZh: '抬头显示', components: ['HealthBar', 'StaminaWheel', 'WeatherIcon', 'RupeeCounter', 'DivineBeast', 'SheikahAbility', 'RupeeType', 'Temperature', 'SoundMeter', 'Sensor', 'EffectDuration', 'BonusEffectIcon'] },
  { id: 'menu', label: 'Menu', labelZh: '菜单', components: ['MenuSections', 'ItemBG', 'Pagination', 'ModalButton', 'Scrollbar', 'ModalTimer', 'StatsStack'] },
  { id: 'titles', label: 'Titles', labelZh: '标题', components: ['TitleLocation', 'TitleQuest', 'TitleShrine', 'TitleLocationLarge', 'TitlePointOfInterest'] },
  { id: 'dialog', label: 'Dialog', labelZh: '对话框', components: ['Dialog', 'DialogChoice', 'DialogFloating'] },
  { id: 'quest', label: 'Quest', labelZh: '任务', components: ['QuestListItem', 'QuestDescription', 'QuestTypeIcon', 'QuestNotification'] },
  { id: 'controls', label: 'Controls', labelZh: '控制器', components: ['ControllerButton', 'ActionSet'] },
  { id: 'map', label: 'Map', labelZh: '地图', components: ['MapIcon', 'MapBeacon', 'MapQuestMarker', 'MapLocationName', 'MapCursor', 'MapHeroLocation'] },
  { id: 'sheikah', label: 'Sheikah', labelZh: '希卡之石', components: ['SheikahSymbol', 'SheikahBackground', 'SheikahScanlines', 'SheikahRune', 'SheikahCompendiumEntry', 'SheikahTextTitle', 'SheikahCompendiumFilters', 'SheikahAlbumButton'] },
  { id: 'common', label: 'Common', labelZh: '通用', components: ['Button', 'Card', 'Modal', 'Divider', 'Loading', 'Toast'] },
  { id: 'battle', label: 'Battle', labelZh: '战斗', components: ['ItemEnchantment', 'StatusHealing', 'AimingReticle', 'AttackDefenseValues'] },
  { id: 'shop', label: 'Shop', labelZh: '商店', components: ['ShopListItem', 'ShopPriceQuantity', 'NumberInput'] },
  { id: 'settings', label: 'Settings', labelZh: '设置', components: ['SettingsToggle'] },
  { id: 'decorations', label: 'Decorations', labelZh: '装饰', components: ['TitleOrnament', 'DirectionalArrow', 'Starburst', 'TextOrnamentCorner', 'TimerOrnament', 'Logo'] },
]

// ─── Component Chinese Names ─────────────────────────────────────────────────

const COMPONENT_ZH: Record<string, string> = {
  HealthBar: '生命条', StaminaWheel: '精力轮', WeatherIcon: '天气图标', RupeeCounter: '卢比计数',
  DivineBeast: '神兽', SheikahAbility: '希卡能力', RupeeType: '卢比类型', Temperature: '温度计',
  SoundMeter: '声音探测', Sensor: '感应器', EffectDuration: '效果时长', BonusEffectIcon: '增益图标',
  MenuSections: '菜单分类', ItemBG: '物品格子', Pagination: '分页', ModalButton: '弹窗按钮',
  Scrollbar: '滚动条', ModalTimer: '弹窗计时', StatsStack: '属性面板',
  TitleLocation: '地点标题', TitleQuest: '任务标题', TitleShrine: '神庙标题',
  TitleLocationLarge: '大号地点', TitlePointOfInterest: '兴趣点',
  Dialog: '对话框', DialogChoice: '对话选项', DialogFloating: '浮动气泡',
  QuestListItem: '任务列表', QuestDescription: '任务描述', QuestTypeIcon: '任务图标', QuestNotification: '任务通知',
  ControllerButton: '控制按钮', ActionSet: '操作提示',
  MapIcon: '地图图标', MapBeacon: '地图信标', MapQuestMarker: '任务标记',
  MapLocationName: '地点名称', MapCursor: '地图光标', MapHeroLocation: '英雄位置',
  SheikahSymbol: '希卡符号', SheikahBackground: '希卡背景', SheikahScanlines: '扫描线',
  SheikahRune: '希卡符文', SheikahCompendiumEntry: '图鉴条目', SheikahTextTitle: '希卡标题',
  SheikahCompendiumFilters: '图鉴过滤', SheikahAlbumButton: '相册按钮',
  Button: '按钮', Card: '卡片', Modal: '弹窗', Divider: '分割线', Loading: '加载', Toast: '通知',
  ItemEnchantment: '附魔', StatusHealing: '治疗状态', AimingReticle: '瞄准', AttackDefenseValues: '攻防数值',
  ShopListItem: '商品列表', ShopPriceQuantity: '价格数量', NumberInput: '数字输入',
  SettingsToggle: '设置开关',
  TitleOrnament: '标题装饰', DirectionalArrow: '方向箭头', Starburst: '星芒',
  TextOrnamentCorner: '角落装饰', TimerOrnament: '计时装饰', Logo: '标志',
}

// ─── Code Examples ───────────────────────────────────────────────────────────

const CODE_EXAMPLES: Record<string, string> = {
  HealthBar: `import { HealthBar } from 'zelda-hyrule-ui'

// Full health
<HealthBar current={13} max={13} />

// Partial damage
<HealthBar current={8} max={13} />

// With bonus hearts (yellow)
<HealthBar current={10} max={13} bonus={3} />`,
  StaminaWheel: `import { StaminaWheel } from 'zelda-hyrule-ui'

// Full stamina
<StaminaWheel value={1} size={80} />

// Partial
<StaminaWheel value={0.6} size={80} />

// Critical low
<StaminaWheel value={0.15} size={80} />`,
  WeatherIcon: `import { WeatherIcon } from 'zelda-hyrule-ui'

// All four weather types
<WeatherIcon weather="clear" />
<WeatherIcon weather="cloudy" />
<WeatherIcon weather="rain" />
<WeatherIcon weather="storm" />`,
  RupeeCounter: `import { RupeeCounter } from 'zelda-hyrule-ui'

// Different amounts
<RupeeCounter amount={0} />
<RupeeCounter amount={999} />
<RupeeCounter amount={13878} />`,
  DivineBeast: `import { DivineBeast } from 'zelda-hyrule-ui'

// All four divine beasts
<DivineBeast beast="ruta" charges={1} />
<DivineBeast beast="medoh" charges={3} />
<DivineBeast beast="naboris" charges={2} />
<DivineBeast beast="rudania" charges={1} />`,
  SheikahAbility: `import { SheikahAbility } from 'zelda-hyrule-ui'

// Base abilities
<SheikahAbility ability="roundBomb" />
<SheikahAbility ability="magnesis" />
<SheikahAbility ability="stasis" />
<SheikahAbility ability="cryonis" />

// Plus variants (upgraded)
<SheikahAbility ability="roundBomb" plus />
<SheikahAbility ability="stasis" plus />`,
  RupeeType: `import { RupeeType } from 'zelda-hyrule-ui'

<RupeeType type="green" />
<RupeeType type="silver" />`,
  Temperature: `import { Temperature } from 'zelda-hyrule-ui'

<Temperature value="cold" />
<Temperature value="hot" />`,
  SoundMeter: `import { SoundMeter } from 'zelda-hyrule-ui'

<SoundMeter level="low" />
<SoundMeter level="high" />`,
  Sensor: `import { Sensor } from 'zelda-hyrule-ui'

<Sensor active size={50} />
<Sensor active plus size={50} />`,
  EffectDuration: `import { EffectDuration } from 'zelda-hyrule-ui'

<EffectDuration name="Attack Up" timeRemaining="2:30" />`,
  BonusEffectIcon: `import { BonusEffectIcon } from 'zelda-hyrule-ui'

<BonusEffectIcon icon="attackUp" arrow />`,
  MenuSections: `import { MenuSections } from 'zelda-hyrule-ui'

<MenuSections activeSection="weapons" />`,
  ItemBG: `import { ItemBG } from 'zelda-hyrule-ui'

<ItemBG state="filled" size={60} />
<ItemBG state="selected" size={60} />`,
  Pagination: `import { Pagination } from 'zelda-hyrule-ui'

<Pagination totalPages={4} currentPage={1} />`,
  ModalButton: `import { ModalButton } from 'zelda-hyrule-ui'

<ModalButton>Cancel</ModalButton>
<ModalButton selected>Confirm</ModalButton>`,
  Scrollbar: `import { Scrollbar } from 'zelda-hyrule-ui'

<Scrollbar location={1} maxSections={5} width={300} />`,
  ModalTimer: `import { ModalTimer } from 'zelda-hyrule-ui'

<ModalTimer time="2:30" />
<ModalTimer time="0:15" red />`,
  StatsStack: `import { StatsStack } from 'zelda-hyrule-ui'

<StatsStack type="weapon" value={32} />
<StatsStack type="armor" value={24} comparison={28} />`,
  TitleLocation: `import { TitleLocation } from 'zelda-hyrule-ui'

<TitleLocation name="Hateno Village" />`,
  TitleQuest: `import { TitleQuest } from 'zelda-hyrule-ui'

<TitleQuest name="Destroy Ganon" questType="main" />`,
  TitleShrine: `import { TitleShrine } from 'zelda-hyrule-ui'

<TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" />`,
  TitleLocationLarge: `import { TitleLocationLarge } from 'zelda-hyrule-ui'

<TitleLocationLarge name="Great Plateau" />`,
  TitlePointOfInterest: `import { TitlePointOfInterest } from 'zelda-hyrule-ui'

<TitlePointOfInterest title="Bokoblin Camp" variant="poi" />`,
  Dialog: `import { Dialog } from 'zelda-hyrule-ui'

// Speech dialog with continue arrow
<Dialog type="speech" speaker="Old Man">
  It is cold here. You should find warm clothes.
</Dialog>

// Sheikah Slate dialog
<Dialog type="sheikah" speaker="Sheikah Slate" showContinue={false}>
  Scope confirmed. Marker set.
</Dialog>`,
  DialogChoice: `import { DialogChoice } from 'zelda-hyrule-ui'

<DialogChoice
  options={[
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Maybe later', value: 'later' },
  ]}
  selectedIndex={0}
/>`,
  DialogFloating: `import { DialogFloating } from 'zelda-hyrule-ui'

<DialogFloating text="Shala-kah! You found me!" />`,
  QuestListItem: `import { QuestListItem } from 'zelda-hyrule-ui'

// Three quest types with different states
<QuestListItem
  title="Destroy Ganon"
  location="Hyrule Castle"
  questType="main"
  state="marked"
/>

<QuestListItem
  title="Robbie's Research"
  location="Akkala Ancient Tech Lab"
  questType="side"
  state="default"
/>

<QuestListItem
  title="The Stolen Heirloom"
  location="Kakariko Village"
  questType="shrine"
  state="completed"
/>`,
  QuestDescription: `import { QuestDescription } from 'zelda-hyrule-ui'

<QuestDescription
  title="Destroy Ganon"
  description="Defeat Calamity Ganon..."
  location="Hyrule Castle"
  npc="King Rhoam"
/>`,
  QuestTypeIcon: `import { QuestTypeIcon } from 'zelda-hyrule-ui'

<QuestTypeIcon type="main" size={50} />`,
  QuestNotification: `import { QuestNotification } from 'zelda-hyrule-ui'

<QuestNotification showLabel label="New Quest Available" />`,
  ControllerButton: `import { ControllerButton } from 'zelda-hyrule-ui'

<ControllerButton button="A" label="Confirm" />`,
  ActionSet: `import { ActionSet } from 'zelda-hyrule-ui'

<ActionSet actions={[
  { button: 'A', label: 'Talk' },
  { button: 'B', label: 'Cancel' },
]} />`,
  MapIcon: `import { MapIcon } from 'zelda-hyrule-ui'

<MapIcon icon="shrine" size={40} />`,
  MapBeacon: `import { MapBeacon } from 'zelda-hyrule-ui'

<MapBeacon color="blue" flare />`,
  MapQuestMarker: `import { MapQuestMarker } from 'zelda-hyrule-ui'

<MapQuestMarker pulse size={50} />`,
  MapLocationName: `import { MapLocationName } from 'zelda-hyrule-ui'

<MapLocationName name="Hateno Village" size="medium" />`,
  MapCursor: `import { MapCursor } from 'zelda-hyrule-ui'

<MapCursor locationName="Rito Village" action />`,
  MapHeroLocation: `import { MapHeroLocation } from 'zelda-hyrule-ui'

<MapHeroLocation rotation={0} vision />`,
  SheikahSymbol: `import { SheikahSymbol } from 'zelda-hyrule-ui'

<SheikahSymbol size={60} outline={false} />`,
  SheikahBackground: `import { SheikahBackground } from 'zelda-hyrule-ui'

<SheikahBackground color="darkBlue">
  <p>Content here</p>
</SheikahBackground>`,
  SheikahScanlines: `import { SheikahScanlines } from 'zelda-hyrule-ui'

<SheikahScanlines animated opacity={0.15} />`,
  SheikahRune: `import { SheikahRune } from 'zelda-hyrule-ui'

<SheikahRune activeRune="magnesis" />`,
  SheikahCompendiumEntry: `import { SheikahCompendiumEntry } from 'zelda-hyrule-ui'

<SheikahCompendiumEntry revealed number={1} />`,
  SheikahTextTitle: `import { SheikahTextTitle } from 'zelda-hyrule-ui'

<SheikahTextTitle title="Title" description="Subtitle" />`,
  SheikahCompendiumFilters: `import { SheikahCompendiumFilters } from 'zelda-hyrule-ui'

<SheikahCompendiumFilters activeFilter="creatures" />`,
  SheikahAlbumButton: `import { SheikahAlbumButton } from 'zelda-hyrule-ui'

<SheikahAlbumButton label="Album" />
<SheikahAlbumButton label="Compendium" selected />`,
  Button: `import { Button } from 'zelda-hyrule-ui'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="sheikah">Sheikah</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button variant="primary" size="small">Small</Button>
<Button variant="primary" size="middle">Middle</Button>
<Button variant="primary" size="large">Large</Button>

// States
<Button variant="primary" loading>Loading</Button>
<Button variant="primary" disabled>Disabled</Button>`,
  Card: `import { Card } from 'zelda-hyrule-ui'

// Three card variants
<Card variant="default" title="Default Card">
  Standard dark card with subtle border
</Card>

<Card variant="sheikah" title="Sheikah Card">
  Glowing blue Sheikah-style borders
</Card>

<Card variant="golden" title="Golden Card">
  Royal golden ornament style
</Card>`,
  Modal: `import { useState } from 'react'
import { Modal, Button } from 'zelda-hyrule-ui'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        title="Confirm Action"
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  )
}`,
  Divider: `import { Divider } from 'zelda-hyrule-ui'

<Divider variant="sheikah" />
<Divider variant="golden" />`,
  Loading: `import { Loading } from 'zelda-hyrule-ui'

<Loading />`,
  Toast: `import { Toast } from 'zelda-hyrule-ui'

<Toast visible={true} message="Saved!" onClose={handleClose} />`,
  ItemEnchantment: `import { ItemEnchantment } from 'zelda-hyrule-ui'

<ItemEnchantment quality={3} />`,
  StatusHealing: `import { StatusHealing } from 'zelda-hyrule-ui'

<StatusHealing type="3Hearts" />
<StatusHealing type="fullRecovery" />`,
  AimingReticle: `import { AimingReticle } from 'zelda-hyrule-ui'

<AimingReticle variant="bow" size={64} />`,
  AttackDefenseValues: `import { AttackDefenseValues } from 'zelda-hyrule-ui'

<AttackDefenseValues type="attack" value={32} />`,
  ShopListItem: `import { ShopListItem } from 'zelda-hyrule-ui'

<ShopListItem name="Hylian Shield" price={3000} />`,
  ShopPriceQuantity: `import { ShopPriceQuantity } from 'zelda-hyrule-ui'

<ShopPriceQuantity price={120} quantity={5} />`,
  NumberInput: `import { NumberInput } from 'zelda-hyrule-ui'

<NumberInput value={1} min={1} max={99} />`,
  SettingsToggle: `import { SettingsToggle } from 'zelda-hyrule-ui'

// Two-option toggle (selected row highlighted)
<SettingsToggle
  label="HUD Display"
  options={['ON', 'OFF']}
  value="ON"
  selected
/>

// Multi-option toggle
<SettingsToggle
  label="Camera Sensitivity"
  options={['Low', 'Normal', 'High']}
  value="Normal"
/>`,
  TitleOrnament: `import { TitleOrnament } from 'zelda-hyrule-ui'

<TitleOrnament side="left" />`,
  DirectionalArrow: `import { DirectionalArrow } from 'zelda-hyrule-ui'

<DirectionalArrow direction="up" size={24} />`,
  Starburst: `import { Starburst } from 'zelda-hyrule-ui'

<Starburst size={80} />`,
  TextOrnamentCorner: `import { TextOrnamentCorner } from 'zelda-hyrule-ui'

<TextOrnamentCorner position="topLeft" />`,
  TimerOrnament: `import { TimerOrnament } from 'zelda-hyrule-ui'

<TimerOrnament side="left" />`,
  Logo: `import { Logo } from 'zelda-hyrule-ui'

<Logo variant="mark" width={40} />
<Logo variant="full" width={200} />`,
}

// ─── Props Data ──────────────────────────────────────────────────────────────

interface PropDef {
  name: string
  type: string
  default?: string
  desc: string
}

const PROPS_DATA: Record<string, PropDef[]> = {
  HealthBar: [
    { name: 'current', type: 'number', desc: 'Current hearts' },
    { name: 'max', type: 'number', desc: 'Maximum hearts' },
    { name: 'bonus', type: 'number', default: '0', desc: 'Bonus (yellow) hearts' },
  ],
  StaminaWheel: [
    { name: 'value', type: 'number', desc: 'Fill ratio (0–1)' },
    { name: 'size', type: 'number', default: '80', desc: 'Diameter in px' },
  ],
  WeatherIcon: [
    { name: 'weather', type: "'clear'|'rain'|'cloudy'|'storm'", desc: 'Weather type' },
  ],
  RupeeCounter: [
    { name: 'amount', type: 'number', desc: 'Rupee count to display' },
  ],
  DivineBeast: [
    { name: 'beast', type: "'ruta'|'medoh'|'naboris'|'rudania'", desc: 'Beast type' },
    { name: 'charges', type: 'number', default: '0', desc: 'Available charges (0–3)' },
  ],
  SheikahAbility: [
    { name: 'ability', type: "'roundBomb'|'magnesis'|'stasis'|'cryonis'|...", desc: 'Ability type' },
    { name: 'plus', type: 'boolean', default: 'false', desc: 'Plus variant' },
    { name: 'recharging', type: 'boolean', default: 'false', desc: 'Recharging state' },
  ],
  RupeeType: [
    { name: 'type', type: "'green'|'blue'|'red'|'purple'|'silver'|'gold'", desc: 'Rupee color variant' },
  ],
  Temperature: [
    { name: 'value', type: "'regular'|'cold'|'hot'", default: "'regular'", desc: 'Temperature state' },
  ],
  SoundMeter: [
    { name: 'level', type: "'low'|'high'", default: "'low'", desc: 'Noise level' },
  ],
  Sensor: [
    { name: 'active', type: 'boolean', default: 'false', desc: 'Whether sensor is active' },
    { name: 'plus', type: 'boolean', default: 'false', desc: 'Sensor+ variant' },
    { name: 'size', type: 'number', default: '40', desc: 'Size in px' },
  ],
  EffectDuration: [
    { name: 'name', type: 'string', desc: 'Effect name' },
    { name: 'timeRemaining', type: 'string', desc: 'Time display (e.g. "2:30")' },
  ],
  BonusEffectIcon: [
    { name: 'icon', type: "'attackUp'|'defenseUp'|'speedUp'|...", desc: 'Effect type' },
    { name: 'arrow', type: 'boolean', default: 'false', desc: 'Show arrow indicator' },
  ],
  MenuSections: [
    { name: 'activeSection', type: "'weapons'|'bows'|'shields'|'clothing'|...", desc: 'Active tab' },
  ],
  ItemBG: [
    { name: 'state', type: "'empty'|'filled'|'selected'|'equipped'", default: "'empty'", desc: 'Slot state' },
    { name: 'size', type: 'number', default: '80', desc: 'Size in px' },
  ],
  Pagination: [
    { name: 'totalPages', type: 'number', desc: 'Total pages (1–6)' },
    { name: 'currentPage', type: 'number', desc: 'Current page' },
  ],
  ModalButton: [
    { name: 'selected', type: 'boolean', default: 'false', desc: 'Selected state' },
    { name: 'children', type: 'ReactNode', desc: 'Button label' },
  ],
  Scrollbar: [
    { name: 'location', type: 'number', desc: 'Current position (1-based)' },
    { name: 'maxSections', type: 'number', desc: 'Total sections' },
    { name: 'width', type: 'number', default: '200', desc: 'Width in px' },
  ],
  ModalTimer: [
    { name: 'time', type: 'string', desc: 'Time text (e.g. "2:30")' },
    { name: 'red', type: 'boolean', default: 'false', desc: 'Red warning state' },
  ],
  StatsStack: [
    { name: 'type', type: "'weapon'|'armor'|'shield'|'healing'", desc: 'Stat type' },
    { name: 'value', type: 'number', desc: 'Current value' },
    { name: 'comparison', type: 'number', desc: 'Comparison value (optional)' },
    { name: 'trait', type: 'string', desc: 'Bonus trait text' },
  ],
  TitleLocation: [
    { name: 'name', type: 'string', desc: 'Location name' },
  ],
  TitleQuest: [
    { name: 'name', type: 'string', desc: 'Quest name' },
    { name: 'questType', type: "'main'|'side'|'shrine'", desc: 'Quest type' },
    { name: 'complete', type: 'boolean', default: 'false', desc: 'Completed state' },
  ],
  TitleShrine: [
    { name: 'name', type: 'string', desc: 'Shrine name' },
    { name: 'subtitle', type: 'string', desc: 'Trial subtitle' },
  ],
  TitleLocationLarge: [
    { name: 'name', type: 'string', desc: 'Location name (large)' },
  ],
  TitlePointOfInterest: [
    { name: 'title', type: 'string', desc: 'POI title' },
    { name: 'variant', type: "'poi'|'bossName'|'poiWithHealth'", desc: 'Display variant' },
    { name: 'subtitle', type: 'string', desc: 'Subtitle text' },
    { name: 'healthPercent', type: 'number', desc: 'Health bar (0–100)' },
  ],
  Dialog: [
    { name: 'type', type: "'speech'|'sheikah'", desc: 'Dialog style' },
    { name: 'speaker', type: 'string', desc: 'Speaker name' },
    { name: 'showContinue', type: 'boolean', default: 'true', desc: 'Show continue indicator' },
    { name: 'children', type: 'ReactNode', desc: 'Dialog content' },
  ],
  DialogChoice: [
    { name: 'options', type: '{ label, value }[]', desc: 'Choice options' },
    { name: 'selectedIndex', type: 'number', default: '0', desc: 'Selected option index' },
  ],
  DialogFloating: [
    { name: 'text', type: 'string', desc: 'Floating text' },
    { name: 'type', type: "'speech'|'name'", default: "'speech'", desc: 'Bubble type' },
  ],
  QuestListItem: [
    { name: 'title', type: 'string', desc: 'Quest title' },
    { name: 'location', type: 'string', desc: 'Location text' },
    { name: 'questType', type: "'main'|'side'|'shrine'", desc: 'Quest type' },
    { name: 'state', type: "'default'|'marked'|'completed'", desc: 'Item state' },
  ],
  QuestDescription: [
    { name: 'title', type: 'string', desc: 'Quest title' },
    { name: 'description', type: 'string', desc: 'Quest description text' },
    { name: 'location', type: 'string', desc: 'Location' },
    { name: 'npc', type: 'string', desc: 'NPC name' },
  ],
  QuestTypeIcon: [
    { name: 'type', type: "'main'|'side'|'shrine'|'memory'", desc: 'Quest type' },
    { name: 'size', type: 'number', default: '40', desc: 'Size in px' },
  ],
  QuestNotification: [
    { name: 'showLabel', type: 'boolean', default: 'false', desc: 'Show label text' },
    { name: 'label', type: 'string', desc: 'Notification label' },
  ],
  ControllerButton: [
    { name: 'button', type: "'A'|'B'|'X'|'Y'|'L'|'R'|'ZL'|'ZR'", desc: 'Button type' },
    { name: 'label', type: 'string', desc: 'Action label' },
  ],
  ActionSet: [
    { name: 'actions', type: '{ button, label }[]', desc: 'Array of button actions' },
  ],
  MapIcon: [
    { name: 'icon', type: "'shrine'|'tower'|'lab'|'resurrection'", desc: 'Map icon type' },
    { name: 'size', type: 'number', default: '32', desc: 'Size in px' },
  ],
  MapBeacon: [
    { name: 'color', type: "'red'|'blue'|'yellow'|'green'|'pink'", desc: 'Beacon color' },
    { name: 'flare', type: 'boolean', default: 'false', desc: 'Show flare animation' },
  ],
  MapQuestMarker: [
    { name: 'size', type: 'number', default: '40', desc: 'Size in px' },
    { name: 'pulse', type: 'boolean', default: 'false', desc: 'Pulse animation' },
  ],
  MapLocationName: [
    { name: 'name', type: 'string', desc: 'Location name' },
    { name: 'size', type: "'small'|'medium'|'large'", default: "'medium'", desc: 'Text size' },
  ],
  MapCursor: [
    { name: 'locationName', type: 'string', desc: 'Location name tooltip' },
    { name: 'action', type: 'boolean', default: 'false', desc: 'Action state' },
  ],
  MapHeroLocation: [
    { name: 'rotation', type: 'number', default: '0', desc: 'Rotation in degrees' },
    { name: 'vision', type: 'boolean', default: 'false', desc: 'Show vision cone' },
  ],
  SheikahSymbol: [
    { name: 'size', type: 'number', default: '60', desc: 'Size in px' },
    { name: 'outline', type: 'boolean', default: 'false', desc: 'Outline-only mode' },
  ],
  SheikahBackground: [
    { name: 'color', type: "'darkBlue'|'blueGrey'", default: "'darkBlue'", desc: 'Background color' },
    { name: 'children', type: 'ReactNode', desc: 'Content' },
  ],
  SheikahScanlines: [
    { name: 'opacity', type: 'number', default: '0.1', desc: 'Scanline opacity (0–1)' },
    { name: 'animated', type: 'boolean', default: 'false', desc: 'Animate scanlines' },
  ],
  SheikahRune: [
    { name: 'activeRune', type: "'roundBomb'|'cubeBomb'|'magnesis'|'stasis'|'cryonis'|'camera'", desc: 'Active rune' },
  ],
  SheikahCompendiumEntry: [
    { name: 'revealed', type: 'boolean', default: 'false', desc: 'Entry discovered' },
    { name: 'hovered', type: 'boolean', default: 'false', desc: 'Hover state' },
    { name: 'number', type: 'number', desc: 'Entry number' },
  ],
  SheikahTextTitle: [
    { name: 'title', type: 'string', desc: 'Title text' },
    { name: 'description', type: 'string', desc: 'Subtitle text' },
  ],
  SheikahCompendiumFilters: [
    { name: 'activeFilter', type: "'creatures'|'materials'|'enemies'|...", desc: 'Active filter' },
  ],
  SheikahAlbumButton: [
    { name: 'label', type: 'string', desc: 'Button label' },
    { name: 'selected', type: 'boolean', default: 'false', desc: 'Selected state' },
  ],
  Button: [
    { name: 'variant', type: "'primary'|'sheikah'|'ghost'|'danger'", default: "'primary'", desc: 'Button style' },
    { name: 'size', type: "'small'|'middle'|'large'", default: "'middle'", desc: 'Button size' },
    { name: 'onClick', type: '() => void', desc: 'Click handler' },
  ],
  Card: [
    { name: 'variant', type: "'default'|'sheikah'|'golden'", default: "'default'", desc: 'Card style' },
    { name: 'title', type: 'string', desc: 'Card title' },
    { name: 'children', type: 'ReactNode', desc: 'Card content' },
  ],
  Modal: [
    { name: 'open', type: 'boolean', desc: 'Visibility' },
    { name: 'onClose', type: '() => void', desc: 'Close handler' },
    { name: 'title', type: 'string', desc: 'Modal title' },
    { name: 'children', type: 'ReactNode', desc: 'Modal content' },
  ],
  Divider: [
    { name: 'variant', type: "'sheikah'|'golden'|'subtle'|'ornament'", default: "'sheikah'", desc: 'Divider style' },
  ],
  Loading: [],
  Toast: [
    { name: 'visible', type: 'boolean', desc: 'Show/hide' },
    { name: 'message', type: 'string', desc: 'Toast message' },
    { name: 'onClose', type: '() => void', desc: 'Close callback' },
  ],
  ItemEnchantment: [
    { name: 'quality', type: '1|2|3', desc: 'Enchantment level' },
  ],
  StatusHealing: [
    { name: 'type', type: "'3Hearts'|'fullRecovery'|'bonusHearts'|'stamina'", desc: 'Healing type' },
  ],
  AimingReticle: [
    { name: 'variant', type: "'bow'|'sheikahAbility'", desc: 'Reticle style' },
    { name: 'size', type: 'number', default: '64', desc: 'Size in px' },
  ],
  AttackDefenseValues: [
    { name: 'type', type: "'attack'|'defense'", desc: 'Value type' },
    { name: 'value', type: 'number', desc: 'Numeric value' },
    { name: 'modifier', type: "'bonus'|'penalty'", desc: 'Color modifier' },
  ],
  ShopListItem: [
    { name: 'name', type: 'string', desc: 'Item name' },
    { name: 'price', type: 'number', desc: 'Price in rupees' },
    { name: 'hovered', type: 'boolean', default: 'false', desc: 'Hover state' },
  ],
  ShopPriceQuantity: [
    { name: 'price', type: 'number', desc: 'Unit price' },
    { name: 'quantity', type: 'number', desc: 'Quantity' },
  ],
  NumberInput: [
    { name: 'value', type: 'number', desc: 'Current value' },
    { name: 'min', type: 'number', desc: 'Minimum value' },
    { name: 'max', type: 'number', desc: 'Maximum value' },
  ],
  SettingsToggle: [
    { name: 'label', type: 'string', desc: 'Setting label' },
    { name: 'options', type: 'string[]', desc: 'Toggle options' },
    { name: 'value', type: 'string', desc: 'Current value' },
    { name: 'selected', type: 'boolean', default: 'false', desc: 'Row selected' },
  ],
  TitleOrnament: [
    { name: 'side', type: "'left'|'right'", desc: 'Ornament side' },
  ],
  DirectionalArrow: [
    { name: 'direction', type: "'up'|'right'|'down'|'left'", desc: 'Arrow direction' },
    { name: 'size', type: 'number', default: '24', desc: 'Size in px' },
  ],
  Starburst: [
    { name: 'size', type: 'number', default: '80', desc: 'Size in px' },
  ],
  TextOrnamentCorner: [
    { name: 'position', type: "'topLeft'|'topRight'|'bottomLeft'|'bottomRight'", desc: 'Corner position' },
  ],
  TimerOrnament: [
    { name: 'side', type: "'left'|'right'", desc: 'Ornament side' },
  ],
  Logo: [
    { name: 'variant', type: "'mark'|'full'", desc: 'Logo variant' },
    { name: 'width', type: 'number', desc: 'Width in px' },
  ],
}

// ─── Syntax Highlighting ─────────────────────────────────────────────────────

function highlightCode(code: string): React.ReactNode[] {
  const lines = code.split('\n')
  return lines.map((line, i) => {
    const parts: React.ReactNode[] = []
    let remaining = line
    let key = 0

    while (remaining.length > 0) {
      // Comments: // ... or {/* ... */}
      let match = remaining.match(/^(\/\/.*|\/\*[\s\S]*?\*\/|\{\/\*[\s\S]*?\*\/\})/)
      if (match) {
        parts.push(<span key={key++} style={{ color: 'rgba(233,225,209,0.35)' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Strings: '...' or "..."
      match = remaining.match(/^('[^']*'|"[^"]*")/)
      if (match) {
        parts.push(<span key={key++} style={{ color: '#E2D146' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Keywords
      match = remaining.match(/^(import|from|export|default|const|let|return|function)\b/)
      if (match) {
        parts.push(<span key={key++} style={{ color: '#6FD49C' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // JSX tags: <ComponentName or </ComponentName
      match = remaining.match(/^(<\/?)([A-Z][A-Za-z]*)/)
      if (match) {
        parts.push(<span key={key++} style={{ color: 'rgba(233,225,209,0.5)' }}>{match[1]}</span>)
        parts.push(<span key={key++} style={{ color: '#FF9E64' }}>{match[2]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // HTML-like tags: <div, </div, <p, <span
      match = remaining.match(/^(<\/?)([a-z][a-zA-Z]*)/)
      if (match) {
        parts.push(<span key={key++} style={{ color: 'rgba(233,225,209,0.5)' }}>{match[1]}</span>)
        parts.push(<span key={key++} style={{ color: '#7DCFFF' }}>{match[2]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Props/attributes: word=
      match = remaining.match(/^([a-zA-Z][a-zA-Z0-9]*)(?==)/)
      if (match) {
        parts.push(<span key={key++} style={{ color: '#BB9AF7' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Numbers
      match = remaining.match(/^\d+/)
      if (match) {
        parts.push(<span key={key++} style={{ color: '#FF9E64' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Braces and operators
      match = remaining.match(/^[{}()[\]<>\/=,;.]+/)
      if (match) {
        parts.push(<span key={key++} style={{ color: 'rgba(233,225,209,0.5)' }}>{match[0]}</span>)
        remaining = remaining.slice(match[0].length)
        continue
      }
      // Default: single char
      parts.push(<span key={key++}>{remaining[0]}</span>)
      remaining = remaining.slice(1)
    }

    return <div key={i}>{parts.length > 0 ? parts : ' '}</div>
  })
}

// ─── Code Example Component ──────────────────────────────────────────────────

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for non-secure contexts / older browsers
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* noop */ }
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      type="button"
      className={`doc-copy-btn${copied ? ' is-copied' : ''}`}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy code'}
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
            <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.5 10.5H2.5C2.5 10.5 2.5 2.5 2.5 2.5C2.5 2.5 10.5 2.5 10.5 2.5V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

const CodeExample: React.FC<{ componentName: string }> = ({ componentName }) => {
  const code = CODE_EXAMPLES[componentName]
  if (!code) return null

  return (
    <div className="doc-section">
      <div className="doc-section-badge">Usage</div>
      <div className="doc-code-block">
        <CopyButton text={code} />
        <pre>{highlightCode(code)}</pre>
      </div>
    </div>
  )
}

// ─── Props Table Component ───────────────────────────────────────────────────

const PropsTable: React.FC<{ componentName: string }> = ({ componentName }) => {
  const props = PROPS_DATA[componentName]
  if (!props || props.length === 0) return null

  return (
    <div className="doc-section">
      <div className="doc-section-badge">API</div>
      <div className="doc-api-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p) => (
              <tr key={p.name}>
                <td className="prop-name">{p.name}</td>
                <td className="prop-desc">{p.desc}</td>
                <td className="prop-type">{p.type}</td>
                <td className="prop-default">{p.default || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Demo Section Renderer ───────────────────────────────────────────────────

/**
 * Measures the natural width of its content and scales it DOWN to fit the
 * container when it would otherwise overflow (e.g. a 910px Dialog on a 360px
 * phone). On desktop, content fits so scale stays 1 — zero visual change.
 * This replaces the old "horizontal scroll inside the card" mobile hack:
 * a component showcase should never make the user swipe sideways to see a demo.
 */
const FitScale: React.FC<{ children: React.ReactNode; align?: 'center' | 'start' }> = ({ children, align = 'center' }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [scale, setScale] = React.useState(1)
  const [boxHeight, setBoxHeight] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    const measure = () => {
      const cw = containerRef.current?.offsetWidth ?? 0
      const nw = innerRef.current?.scrollWidth ?? 0
      const nh = innerRef.current?.offsetHeight ?? 0
      if (!cw || !nw) return
      const s = Math.min(1, cw / nw)
      setScale(s)
      setBoxHeight(nh * s)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    if (innerRef.current) ro.observe(innerRef.current)
    // fonts/images settling
    const t = setTimeout(measure, 400)
    return () => { ro.disconnect(); clearTimeout(t) }
  }, [children])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: boxHeight, overflow: 'hidden', display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}
    >
      <div
        ref={innerRef}
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: 16,
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          transform: `scale(${scale})`,
          transformOrigin: align === 'center' ? 'top center' : 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const DemoSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={`section-${id}`} className="docs-demo-section">
    <h3 className="docs-demo-title">
      {title} {COMPONENT_ZH[title] && <span className="docs-demo-title-zh">{COMPONENT_ZH[title]}</span>}
    </h3>
    <div className="docs-demo-card">
      <FitScale>{children}</FitScale>
    </div>
    <CodeExample componentName={title} />
    <PropsTable componentName={title} />
  </section>
)

// ─── Docs Page ───────────────────────────────────────────────────────────────

const DocsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('hud')
  const [modalOpen, setModalOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    setSidebarOpen(false)
    const el = document.getElementById(`category-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#66645D', minHeight: '100vh', display: 'flex' }}>
      {/* Mobile menu toggle */}
      <button className="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <nav className={`docs-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          style={{
            display: 'block', padding: '16px 20px', color: '#3CD3FC',
            fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 14,
            cursor: 'pointer', background: 'none', border: 'none', width: '100%', textAlign: 'left',
            borderBottom: '1px solid rgba(233,225,209,0.1)',
          }}
          onClick={() => { window.location.hash = ''; setSidebarOpen(false) }}
        >
          ← Home
        </button>
        {CATEGORIES.map((cat) => (
          <div key={cat.id}>
            <div style={{
              fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 11,
              color: 'rgba(233,225,209,0.4)', letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '16px 20px 6px',
            }}>{cat.label} {cat.labelZh}</div>
            {cat.components.map((comp) => (
              <button
                key={comp}
                className="docs-nav-link"
                style={{
                  display: 'block', padding: '8px 20px', color: '#E9E1D1',
                  fontSize: 13, cursor: 'pointer',
                  background: 'none', border: 'none', borderLeft: '2px solid transparent',
                  width: '100%', textAlign: 'left', transition: 'all 0.15s',
                  ...(activeCategory === cat.id ? { borderLeft: '2px solid #3CD3FC', background: 'rgba(60,211,252,0.1)', color: '#3CD3FC' } : {}),
                }}
                onClick={() => scrollToCategory(cat.id)}
              >
                {comp} {COMPONENT_ZH[comp] || ''}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main className="docs-main">
        <h1 style={{ fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 32, color: '#E9E1D1', marginBottom: 8 }}>
          Component Documentation 组件文档
        </h1>
        <p style={{ color: 'rgba(233,225,209,0.5)', marginBottom: 40 }}>
          All 83 components with live demos, usage examples, and API references.
          <br />
          全部 83 个组件，含实时预览、使用示例与 API 参考。
        </p>

        {/* ═══ HUD ═══ */}
        <div id="category-hud">
          <SheikahTextTitle title="HUD 抬头显示" description="Heads-up display elements / 游戏内信息显示" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="healthbar" title="HealthBar">
              <HealthBar current={13} max={13} bonus={0} />
              <HealthBar current={8} max={13} bonus={3} />
              <HealthBar current={3} max={10} bonus={0} />
            </DemoSection>
            <DemoSection id="staminawheel" title="StaminaWheel">
              <StaminaWheel value={1} size={60} />
              <StaminaWheel value={0.6} size={60} />
              <StaminaWheel value={0.25} size={60} />
            </DemoSection>
            <DemoSection id="weathericon" title="WeatherIcon">
              <WeatherIcon weather="clear" />
              <WeatherIcon weather="rain" />
              <WeatherIcon weather="cloudy" />
              <WeatherIcon weather="storm" />
            </DemoSection>
            <DemoSection id="rupeecounter" title="RupeeCounter">
              <RupeeCounter amount={0} />
              <RupeeCounter amount={999} />
              <RupeeCounter amount={13878} />
            </DemoSection>
            <DemoSection id="divinebeast" title="DivineBeast">
              <DivineBeast beast="ruta" charges={1} />
              <DivineBeast beast="medoh" charges={3} />
              <DivineBeast beast="naboris" charges={2} />
              <DivineBeast beast="rudania" charges={1} />
            </DemoSection>
            <DemoSection id="sheikahability" title="SheikahAbility">
              <SheikahAbility ability="roundBomb" />
              <SheikahAbility ability="roundBomb" plus />
              <SheikahAbility ability="magnesis" />
              <SheikahAbility ability="stasis" plus />
              <SheikahAbility ability="cryonis" />
            </DemoSection>
            <DemoSection id="rupeetype" title="RupeeType">
              <RupeeType type="green" />
              <RupeeType type="blue" />
              <RupeeType type="red" />
              <RupeeType type="purple" />
              <RupeeType type="silver" />
              <RupeeType type="gold" />
            </DemoSection>
            <DemoSection id="temperature" title="Temperature">
              <Temperature value="cold" />
              <Temperature value="regular" />
              <Temperature value="hot" />
            </DemoSection>
            <DemoSection id="soundmeter" title="SoundMeter">
              <SoundMeter level="low" />
              <SoundMeter level="high" />
              <SoundMeter />
            </DemoSection>
            <DemoSection id="sensor" title="Sensor">
              <Sensor active size={50} />
              <Sensor active plus size={50} />
              <Sensor active={false} size={50} />
            </DemoSection>
            <DemoSection id="effectduration" title="EffectDuration">
              <EffectDuration name="Attack Up" timeRemaining="2:30" />
              <EffectDuration name="Cold Resist" timeRemaining="5:00" />
              <EffectDuration name="Speed Up" timeRemaining="0:45" />
            </DemoSection>
            <DemoSection id="bonuseffecticon" title="BonusEffectIcon">
              <BonusEffectIcon icon="attackUp" arrow />
              <BonusEffectIcon icon="defenseUp" />
              <BonusEffectIcon icon="speedUp" arrow />
              <BonusEffectIcon icon="coldResist" />
              <BonusEffectIcon icon="heatResist" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ MENU ═══ */}
        <div id="category-menu" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Menu 菜单" description="Inventory and menu UI / 物品栏与菜单界面" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="menusections" title="MenuSections">
              <MenuSections activeSection="weapons" />
              <MenuSections activeSection="bows" />
            </DemoSection>
            <DemoSection id="itembg" title="ItemBG">
              <ItemBG state="empty" size={60} />
              <ItemBG state="filled" size={60} />
              <ItemBG state="selected" size={60} />
              <ItemBG state="equipped" size={60} />
            </DemoSection>
            <DemoSection id="pagination" title="Pagination">
              <Pagination totalPages={4} currentPage={1} />
              <Pagination totalPages={6} currentPage={3} />
              <Pagination totalPages={5} currentPage={5} />
            </DemoSection>
            <DemoSection id="modalbutton" title="ModalButton">
              <ModalButton>Cancel</ModalButton>
              <ModalButton selected>Confirm</ModalButton>
              <ModalButton>Delete</ModalButton>
            </DemoSection>
            <DemoSection id="scrollbar" title="Scrollbar">
              <Scrollbar location={1} maxSections={5} width={300} />
              <Scrollbar location={3} maxSections={5} width={300} />
            </DemoSection>
            <DemoSection id="modaltimer" title="ModalTimer">
              <ModalTimer time="2:30" />
              <ModalTimer time="0:15" red />
              <ModalTimer time="10:00" />
            </DemoSection>
            <DemoSection id="statsstack" title="StatsStack">
              <StatsStack type="weapon" value={32} />
              <StatsStack type="armor" value={24} comparison={28} />
              <StatsStack type="shield" value={18} trait="Durability Up" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ TITLES ═══ */}
        <div id="category-titles" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Titles 标题" description="Location and quest title overlays / 地点与任务标题" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="titlelocation" title="TitleLocation">
              <TitleLocation name="Hateno Village" />
              <TitleLocation name="Kakariko Village" />
            </DemoSection>
            <DemoSection id="titlequest" title="TitleQuest">
              <TitleQuest name="Destroy Ganon" questType="main" />
              <TitleQuest name="A Wife Washed Away" questType="side" />
              <TitleQuest name="The Stolen Heirloom" questType="shrine" complete />
            </DemoSection>
            <DemoSection id="titleshrine" title="TitleShrine">
              <TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" />
              <TitleShrine name="Ja Baij Shrine" />
            </DemoSection>
            <DemoSection id="titlelocationlarge" title="TitleLocationLarge">
              <TitleLocationLarge name="Great Plateau" />
            </DemoSection>
            <DemoSection id="titlepointofinterest" title="TitlePointOfInterest">
              <TitlePointOfInterest title="Bokoblin Camp" variant="poi" />
              <TitlePointOfInterest title="Hinox" variant="bossName" subtitle="Black Hinox" />
              <TitlePointOfInterest title="Lynel" variant="poiWithHealth" healthPercent={65} />
            </DemoSection>
          </div>
        </div>

        {/* ═══ DIALOG ═══ */}
        <div id="category-dialog" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Dialog 对话框" description="Speech and system dialogs / 对话与系统弹窗" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="dialog" title="Dialog">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Dialog type="speech" speaker="Old Man">It is cold here. You should find warm clothes.</Dialog>
                <Dialog type="sheikah" speaker="Sheikah Slate" showContinue={false}>Scope confirmed.</Dialog>
              </div>
            </DemoSection>
            <DemoSection id="dialogchoice" title="DialogChoice">
              <DialogChoice
                options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
                selectedIndex={0}
              />
            </DemoSection>
            <DemoSection id="dialogfloating" title="DialogFloating">
              <DialogFloating text="Shala-kah! You found me!" />
              <DialogFloating text="Hestu" type="name" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ QUEST ═══ */}
        <div id="category-quest" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Quest 任务" description="Quest tracking and notifications / 任务追踪与通知" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="questlistitem" title="QuestListItem">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
                <QuestListItem title="Robbie's Research" location="Akkala Ancient Tech Lab" questType="side" state="default" />
                <QuestListItem title="The Stolen Heirloom" location="Kakariko Village" questType="shrine" state="completed" />
              </div>
            </DemoSection>
            <DemoSection id="questdescription" title="QuestDescription">
              <QuestDescription
                title="Destroy Ganon"
                description="Defeat Calamity Ganon, the source of the darkness that has plagued Hyrule for 100 years."
                location="Hyrule Castle"
                npc="King Rhoam"
              />
            </DemoSection>
            <DemoSection id="questtypeicon" title="QuestTypeIcon">
              <QuestTypeIcon type="main" size={50} />
              <QuestTypeIcon type="side" size={50} />
              <QuestTypeIcon type="shrine" size={50} />
              <QuestTypeIcon type="memory" size={50} />
            </DemoSection>
            <DemoSection id="questnotification" title="QuestNotification">
              <QuestNotification />
              <QuestNotification showLabel label="New Quest Available" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ CONTROLS ═══ */}
        <div id="category-controls" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Controls 控制器" description="Controller button prompts / 手柄按键提示" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="controllerbutton" title="ControllerButton">
              <ControllerButton button="A" label="Confirm" />
              <ControllerButton button="B" label="Cancel" />
              <ControllerButton button="X" label="Jump" />
              <ControllerButton button="Y" label="Attack" />
              <ControllerButton button="L" />
              <ControllerButton button="R" />
            </DemoSection>
            <DemoSection id="actionset" title="ActionSet">
              <ActionSet actions={[
                { button: 'A', label: 'Talk' },
                { button: 'B', label: 'Cancel' },
                { button: 'X', label: 'Jump' },
              ]} />
            </DemoSection>
          </div>
        </div>

        {/* ═══ MAP ═══ */}
        <div id="category-map" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Map 地图" description="Map markers and navigation / 地图标记与导航" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="mapicon" title="MapIcon">
              <MapIcon icon="shrine" size={40} />
              <MapIcon icon="tower" size={40} />
              <MapIcon icon="lab" size={40} />
              <MapIcon icon="resurrection" size={40} />
            </DemoSection>
            <DemoSection id="mapbeacon" title="MapBeacon">
              <MapBeacon color="red" />
              <MapBeacon color="blue" flare />
              <MapBeacon color="yellow" />
              <MapBeacon color="green" flare />
              <MapBeacon color="pink" />
            </DemoSection>
            <DemoSection id="mapquestmarker" title="MapQuestMarker">
              <MapQuestMarker size={50} />
              <MapQuestMarker pulse size={50} />
            </DemoSection>
            <DemoSection id="maplocationname" title="MapLocationName">
              <MapLocationName name="Hateno Village" size="small" />
              <MapLocationName name="Zora's Domain" size="medium" />
              <MapLocationName name="Hyrule Castle" size="large" />
            </DemoSection>
            <DemoSection id="mapcursor" title="MapCursor">
              <MapCursor locationName="Rito Village" action />
            </DemoSection>
            <DemoSection id="mapherolocation" title="MapHeroLocation">
              <MapHeroLocation rotation={0} vision />
              <MapHeroLocation rotation={90} />
              <MapHeroLocation rotation={225} vision />
            </DemoSection>
          </div>
        </div>

        {/* ═══ SHEIKAH ═══ */}
        <div id="category-sheikah" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Sheikah 希卡之石" description="Sheikah Slate themed components / 希卡之石主题组件" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="sheikahsymbol" title="SheikahSymbol">
              <SheikahSymbol size={60} outline={false} />
              <SheikahSymbol size={60} outline />
              <SheikahSymbol size={40} outline={false} />
            </DemoSection>
            <DemoSection id="sheikahbackground" title="SheikahBackground">
              <div style={{ width: 200, height: 120, position: 'relative' }}>
                <SheikahBackground color="darkBlue">
                  <p style={{ padding: 16, color: '#E9E1D1', fontSize: 12 }}>Dark Blue BG</p>
                </SheikahBackground>
              </div>
            </DemoSection>
            <DemoSection id="sheikahscanlines" title="SheikahScanlines">
              <div style={{ width: 200, height: 80, position: 'relative', background: '#1a1a2e' }}>
                <SheikahScanlines animated opacity={0.15} />
                <p style={{ position: 'relative', padding: 16, color: '#E9E1D1', fontSize: 12 }}>Scanlines overlay</p>
              </div>
            </DemoSection>
            <DemoSection id="sheikahRune" title="SheikahRune">
              <SheikahRune activeRune="magnesis" />
            </DemoSection>
            <DemoSection id="sheikahcompendiumentry" title="SheikahCompendiumEntry">
              <SheikahCompendiumEntry revealed number={1} />
              <SheikahCompendiumEntry revealed hovered number={2} />
              <SheikahCompendiumEntry number={3} />
              <SheikahCompendiumEntry revealed number={4} />
            </DemoSection>
            <DemoSection id="sheikahTexttitle" title="SheikahTextTitle">
              <SheikahTextTitle title="Example Title" description="A subtitle description" />
            </DemoSection>
            <DemoSection id="sheikahcompendiumfilters" title="SheikahCompendiumFilters">
              <SheikahCompendiumFilters activeFilter="creatures" />
            </DemoSection>
            <DemoSection id="sheikahalbumbutton" title="SheikahAlbumButton">
              <SheikahAlbumButton label="Album" />
              <SheikahAlbumButton label="Compendium" selected />
              <SheikahAlbumButton label="Map" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ COMMON ═══ */}
        <div id="category-common" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Common 通用" description="General-purpose UI components / 通用 UI 组件" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="button" title="Button">
              <Button variant="primary">Primary</Button>
              <Button variant="sheikah">Sheikah</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" size="small">Small</Button>
            </DemoSection>
            <DemoSection id="card" title="Card">
              <Card variant="default" title="Default Card">Card content here</Card>
              <Card variant="sheikah" title="Sheikah Card">Glowing borders</Card>
              <Card variant="golden" title="Golden Card">Royal style</Card>
            </DemoSection>
            <DemoSection id="modal" title="Modal">
              <Button variant="sheikah" size="small" onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm Action">
                <p style={{ color: '#E9E1D1' }}>Are you sure you want to proceed?</p>
              </Modal>
            </DemoSection>
            <DemoSection id="divider" title="Divider">
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Divider variant="sheikah" />
                <Divider variant="golden" />
                <Divider variant="ornament" />
              </div>
            </DemoSection>
            <DemoSection id="loading" title="Loading">
              <Loading />
            </DemoSection>
            <DemoSection id="toast" title="Toast">
              <Button variant="primary" size="small" onClick={() => setToastVisible(true)}>Show Toast</Button>
              <Toast visible={toastVisible} message="Item saved successfully!" onClose={() => setToastVisible(false)} />
            </DemoSection>
          </div>
        </div>

        {/* ═══ BATTLE ═══ */}
        <div id="category-battle" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Battle 战斗" description="Combat-related UI elements / 战斗相关界面" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="itemenchantment" title="ItemEnchantment">
              <ItemEnchantment quality={1} />
              <ItemEnchantment quality={2} />
              <ItemEnchantment quality={3} />
            </DemoSection>
            <DemoSection id="statushealing" title="StatusHealing">
              <StatusHealing type="3Hearts" />
              <StatusHealing type="fullRecovery" />
              <StatusHealing type="bonusHearts" />
              <StatusHealing type="stamina" />
            </DemoSection>
            <DemoSection id="aimingreticle" title="AimingReticle">
              <AimingReticle variant="bow" size={64} />
              <AimingReticle variant="sheikahAbility" size={64} />
            </DemoSection>
            <DemoSection id="attackdefensevalues" title="AttackDefenseValues">
              <AttackDefenseValues type="attack" value={32} />
              <AttackDefenseValues type="defense" value={24} modifier="bonus" />
              <AttackDefenseValues type="attack" value={12} modifier="penalty" />
            </DemoSection>
          </div>
        </div>

        {/* ═══ SHOP ═══ */}
        <div id="category-shop" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Shop 商店" description="Shop and trading UI / 商店与交易界面" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="shoplistitem" title="ShopListItem">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                <ShopListItem name="Hylian Shield" price={3000} />
                <ShopListItem name="Ancient Arrow" price={90} hovered />
                <ShopListItem name="Mighty Elixir" price={150} />
              </div>
            </DemoSection>
            <DemoSection id="shoppricequantity" title="ShopPriceQuantity">
              <ShopPriceQuantity price={120} quantity={5} />
              <ShopPriceQuantity price={3000} quantity={1} />
            </DemoSection>
            <DemoSection id="numberinput" title="NumberInput">
              <NumberInput value={1} min={1} max={99} />
              <NumberInput value={10} min={1} max={99} />
              <NumberInput value={99} min={1} max={99} />
            </DemoSection>
          </div>
        </div>

        {/* ═══ SETTINGS ═══ */}
        <div id="category-settings" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Settings 设置" description="System settings controls / 系统设置控件" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="settingstoggle" title="SettingsToggle">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
                <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
                <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="OFF" />
              </div>
            </DemoSection>
          </div>
        </div>

        {/* ═══ DECORATIONS ═══ */}
        <div id="category-decorations" style={{ marginTop: 48 }}>
          <SheikahTextTitle title="Decorations 装饰" description="Ornamental and decorative elements / 装饰与点缀元素" />
          <div style={{ marginTop: 24 }}>
            <DemoSection id="titleornament" title="TitleOrnament">
              <TitleOrnament side="left" />
              <TitleOrnament side="right" />
            </DemoSection>
            <DemoSection id="directionalarrow" title="DirectionalArrow">
              <DirectionalArrow direction="up" size={24} />
              <DirectionalArrow direction="right" size={24} />
              <DirectionalArrow direction="down" size={24} />
              <DirectionalArrow direction="left" size={24} />
            </DemoSection>
            <DemoSection id="starburst" title="Starburst">
              <Starburst size={80} />
              <Starburst size={120} />
            </DemoSection>
            <DemoSection id="textornamentcorner" title="TextOrnamentCorner">
              <TextOrnamentCorner position="topLeft" />
              <TextOrnamentCorner position="topRight" />
              <TextOrnamentCorner position="bottomLeft" />
              <TextOrnamentCorner position="bottomRight" />
            </DemoSection>
            <DemoSection id="timerornament" title="TimerOrnament">
              <TimerOrnament side="left" />
              <TimerOrnament side="right" />
            </DemoSection>
            <DemoSection id="logo" title="Logo">
              <Logo variant="mark" width={40} />
              <Logo variant="full" width={200} />
            </DemoSection>
          </div>
        </div>
      </main>
    </div>
  )
}


// ─── Landing Page ────────────────────────────────────────────────────────────

const LandingPage: React.FC = () => (
  <div style={{ background: '#66645D', minHeight: '100vh' }}>

    {/* ═══════ HERO SECTION ═══════ */}
    <section className="landing-hero">
      <SheikahBackground color="darkBlue">
        <SheikahScanlines animated opacity={0.08} />
        <div className="landing-hero-content">
          <SheikahSymbol size={100} outline={false} />
          <h1 className="landing-hero-title">
            zelda-hyrule-ui
          </h1>
          <p style={{
            fontSize: 17, fontWeight: 500,
            color: 'rgba(233,225,209,0.7)', maxWidth: 640, lineHeight: 1.7, margin: '0 0 32px',
          }}>
            83 React components inspired by The Legend of Zelda: Breath of the Wild.
            <br />
            <span style={{ fontSize: 15, opacity: 0.85 }}>
              受《塞尔达传说：旷野之息》启发的 83 个 React 组件 · 暗色主题 + 希卡之石辉光 + AI 设计规范
            </span>
          </p>
          <div className="landing-buttons">
            <Button variant="sheikah" size="small" onClick={() => window.open('https://www.npmjs.com/package/zelda-hyrule-ui')}>
              npm install
            </Button>
            <Button variant="primary" size="small" onClick={() => window.open('https://github.com/chaos-xxl/zelda-hyrule-ui')}>
              GitHub
            </Button>
          </div>
        </div>
      </SheikahBackground>
    </section>

    {/* ═══════ FEATURES ═══════ */}
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <Illustration illustration="rupee" opacity={0.08} style={{ position: 'absolute', inset: 0 }} />
      <div className="landing-section" style={{ position: 'relative', zIndex: 1 }}>
        <SheikahTextTitle title="Features 特性" description="Why choose zelda-hyrule-ui? / 为什么选择这套组件库？" />
        <div className="landing-features-grid">
          <Card variant="sheikah" title="83 Components / 83 个组件">
            Full coverage of the BOTW UI Kit — HUD, menus, dialogs, maps, and more.
            <br />
            <span style={{ opacity: 0.7 }}>覆盖 BOTW UI Kit 全部组件</span>
          </Card>
          <Card variant="golden" title="AI-Ready / AI 友好">
            Drop SKILL.md into Cursor and say "build in Zelda style" — pixel-perfect output.
            <br />
            <span style={{ opacity: 0.7 }}>SKILL.md 丢给 AI 即可生成像素级代码</span>
          </Card>
          <Card variant="default" title="Dark Theme / 暗色主题">
            Sheikah blue glows, double-border structure, warm-white text.
            <br />
            <span style={{ opacity: 0.7 }}>希卡蓝辉光 + 双层边框 + 暖白色文字</span>
          </Card>
          <Card variant="sheikah" title="Figma Precision / 像素级还原">
            Every SVG path exported directly from the community Figma UI Kit.
            <br />
            <span style={{ opacity: 0.7 }}>所有 SVG 从 Figma 精确导出</span>
          </Card>
          <Card variant="golden" title="TypeScript / 全量类型">
            Full type definitions for all 83 components. IntelliSense out of the box.
            <br />
            <span style={{ opacity: 0.7 }}>完整 TS 类型定义，IntelliSense 即用</span>
          </Card>
          <Card variant="default" title="Lightweight / 轻量">
            ~115KB ESM, tree-shakeable. Assets externalized via vite-plugin-lib-assets.
            <br />
            <span style={{ opacity: 0.7 }}>~115KB ESM，支持摇树优化</span>
          </Card>
        </div>
      </div>
    </section>

    <div className="landing-section" style={{ padding: '0 24px' }}>
      <Divider variant="sheikah" />
    </div>

    {/* ═══════ LIVE COMPONENT PREVIEW ═══════ */}
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <Illustration illustration="slate" opacity={0.06} style={{ position: 'absolute', inset: 0 }} />
      <div className="landing-section" style={{ position: 'relative', zIndex: 1 }}>
        <SheikahTextTitle title="Component Preview 组件预览" description="Real components rendered live / 真实组件实时渲染" />

        {/* HUD Row */}
        <div style={{ marginTop: 32, marginBottom: 24 }}>
          <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>HUD ELEMENTS</p>
          <div className="landing-preview-row">
            <HealthBar current={10} max={13} bonus={3} />
            <StaminaWheel value={0.75} size={70} />
            <RupeeCounter amount={13878} />
            <div style={{ display: 'flex', gap: 8 }}>
              <WeatherIcon weather="clear" />
              <WeatherIcon weather="rain" />
              <Temperature value="regular" />
              <SoundMeter level="low" />
            </div>
          </div>
        </div>

        {/* Divine Beasts + Abilities */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>DIVINE BEASTS & ABILITIES</p>
          <div className="landing-preview-row">
            <DivineBeast beast="ruta" charges={1} />
            <DivineBeast beast="medoh" charges={1} />
            <DivineBeast beast="naboris" charges={3} />
            <DivineBeast beast="rudania" charges={2} />
            <div style={{ width: 1, height: 50, background: 'rgba(226,222,211,0.1)' }} />
            <SheikahAbility ability="roundBomb" plus />
            <SheikahAbility ability="magnesis" />
            <SheikahAbility ability="stasis" plus />
            <SheikahAbility ability="cryonis" />
          </div>
        </div>

        {/* Menu & Map */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>MENU & MAP</p>
          <div className="landing-preview-row">
            <MenuSections activeSection="weapons" />
            <div style={{ display: 'flex', gap: 6 }}>
              <ItemBG state="filled" size={60} />
              <ItemBG state="selected" size={60} />
              <ItemBG state="equipped" size={60} />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <MapIcon icon="shrine" size={40} />
              <MapIcon icon="tower" size={40} />
            </div>
            <ItemEnchantment quality={3} />
          </div>
        </div>

        {/* Titles */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>TITLES</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <TitleLocation name="Hateno Village" />
          </div>
        </div>
      </div>
    </section>

    {/* ═══════ VIEW ALL COMPONENTS BUTTON ═══════ */}
    <section className="landing-section" style={{ textAlign: 'center', paddingBottom: 48 }}>
      <Button variant="sheikah" onClick={() => { window.location.hash = '#/docs' }}>
        View All Components 查看全部组件 →
      </Button>
    </section>

    <div className="landing-section" style={{ padding: '0 24px' }}>
      <Divider variant="golden" />
    </div>

    {/* ═══════ INSTALLATION ═══════ */}
    <section className="landing-section">
      <SheikahTextTitle title="Installation 安装" description="Get started in 30 seconds / 30 秒上手" />
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center top' }}>
          <Dialog type="sheikah" speaker="Terminal" showContinue={false}>
            <span style={{ color: '#6FD49C' }}>npm install</span> zelda-hyrule-ui
          </Dialog>
        </div>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center top', marginTop: -40 }}>
          <Dialog type="speech" speaker="App.tsx" showContinue={false}>
            <span style={{ color: '#6FD49C' }}>import</span> {'{ Button, Card }'} <span style={{ color: '#6FD49C' }}>from</span> <span style={{ color: '#E2D146' }}>&apos;zelda-hyrule-ui&apos;</span>
          </Dialog>
        </div>
      </div>
    </section>

    <div className="landing-section" style={{ padding: '0 24px' }}>
      <Divider variant="ornament" />
    </div>

    {/* ═══════ AI USAGE ═══════ */}
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <Illustration illustration="memories" opacity={0.07} style={{ position: 'absolute', inset: 0 }} />
      <div className="landing-section" style={{ position: 'relative', zIndex: 1 }}>
        <SheikahTextTitle title="AI-Powered AI 加持" description="Works with Cursor, Copilot, and v0 / 兼容 Cursor、Copilot、v0" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 32, maxWidth: 600, margin: '32px auto 0' }}>
          <QuestListItem
            title="Drop SKILL.md into Cursor"
            location="Copy to .cursorrules"
            questType="main"
            state="marked"
          />
          <QuestListItem
            title='Say "Build in Zelda style"'
            location="AI generates pixel-perfect code"
            questType="side"
            state="default"
          />
          <QuestListItem
            title="Ship your Zelda-themed app"
            location="Dark theme + Sheikah glow"
            questType="shrine"
            state="default"
          />
        </div>
      </div>
    </section>

    <div className="landing-section" style={{ padding: '0 24px' }}>
      <Divider variant="sheikah" />
    </div>

    {/* ═══════ FOOTER ═══════ */}
    <section className="landing-section" style={{ textAlign: 'center' }}>
      <Logo variant="mark" width={40} />
      <p style={{
        fontFamily: "'Hylia Serif', 'Cinzel', serif",
        fontSize: 20, color: '#E2DED3', margin: '16px 0 8px',
      }}>
        zelda-hyrule-ui
      </p>
      <p style={{ fontSize: 13, color: 'rgba(233,225,209,0.4)', marginBottom: 8 }}>
        MIT License — Unofficial, non-commercial fan project for learning only.
      </p>
      <p style={{ fontSize: 12, color: 'rgba(233,225,209,0.35)', marginBottom: 6 }}>
        Not affiliated with, endorsed by, or sponsored by Nintendo. All Zelda trademarks © Nintendo.
      </p>
      <p style={{ fontSize: 12, color: 'rgba(233,225,209,0.35)', marginBottom: 24 }}>
        非官方粉丝创作，仅供学习 · 与任天堂无任何关联 · 所有塞尔达相关商标归任天堂所有
      </p>
      <div className="landing-buttons">
        <Button variant="sheikah" size="small" onClick={() => window.open('https://github.com/chaos-xxl/zelda-hyrule-ui')}>
          GitHub
        </Button>
        <Button variant="primary" size="small" onClick={() => window.open('https://www.npmjs.com/package/zelda-hyrule-ui')}>
          npm
        </Button>
      </div>
    </section>
  </div>
)

// ─── Mobile Page ─────────────────────────────────────────────────────────────

/**
 * Auto-fit wrapper: measures parent width and scales children down proportionally.
 * Use this for wide components (Dialog, QuestListItem, Title*, etc.) so they
 * visually fit the mobile viewport without horizontal scroll or overflow.
 */
const AutoFit: React.FC<{ designWidth: number; children: React.ReactNode }> = ({ designWidth, children }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [scale, setScale] = React.useState(1)
  const [innerHeight, setInnerHeight] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    const measure = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0
      if (!containerWidth) return
      const newScale = Math.min(1, containerWidth / designWidth)
      setScale(newScale)
      const naturalHeight = innerRef.current?.offsetHeight ?? 0
      setInnerHeight(naturalHeight * newScale)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    if (innerRef.current) ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [designWidth])

  return (
    <div ref={containerRef} style={{ width: '100%', height: innerHeight, overflow: 'hidden' }}>
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const MobileSectionHeader: React.FC<{ en: string; zh?: string }> = ({ en, zh }) => (
  <div className="mobile-section-header">
    <span className="mobile-section-en">{en}</span>
    {zh && <span className="mobile-section-zh">{zh}</span>}
  </div>
)

/** 章节分隔标记（瑞士手法：发丝线 + 单锚点色 mono 标签，取代随机分隔线） */
const MobileChapter: React.FC<{ label: string }> = ({ label }) => (
  <div className="mobile-chapter"><span>{label}</span></div>
)

const MobilePage: React.FC = () => (
  <div className="mobile-page">
    {/* Hero — KPI 大字报（瑞士手法：把核心钩子「83」做成视觉重心） */}
    <div className="mobile-hero">
      <div className="mobile-hero-scan" aria-hidden="true" />
      <SheikahSymbol size={46} outline={false} />
      <h1>zelda-hyrule-ui</h1>
      <p className="mobile-hero-tagline">A React UI library in the style of Breath of the Wild</p>
      <p className="mobile-hero-tagline-zh">塞尔达旷野之息风格 · React 组件库</p>
      <div className="mobile-hero-kpi">
        <span className="num">83</span>
        <span className="unit">Components<br />个组件</span>
      </div>
      <div className="mobile-header-buttons">
        <Button variant="sheikah" size="small" onClick={() => window.open('https://github.com/chaos-xxl/zelda-hyrule-ui')}>GitHub</Button>
        <Button variant="primary" size="small" onClick={() => window.open('https://www.npmjs.com/package/zelda-hyrule-ui')}>npm</Button>
        <Button variant="ghost" size="small" onClick={() => { window.location.hash = '#/docs' }}>Docs</Button>
      </div>
    </div>

    <div className="mobile-content">
      {/* HUD */}
      <section className="mobile-section">
        <MobileSectionHeader en="HUD" zh="抬头显示" />
        <div className="mobile-fit-card">
          <AutoFit designWidth={320}>
            <HealthBar current={8} max={10} bonus={2} />
          </AutoFit>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <StaminaWheel value={0.75} size={64} />
            <RupeeCounter amount={13878} />
          </div>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Weather" zh="天气" />
        <div className="mobile-demo-card">
          <WeatherIcon weather="clear" />
          <WeatherIcon weather="rain" />
          <WeatherIcon weather="cloudy" />
          <WeatherIcon weather="storm" />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Temperature & Sound" zh="温度与声音" />
        <div className="mobile-demo-card">
          <Temperature value="cold" />
          <Temperature value="regular" />
          <Temperature value="hot" />
          <SoundMeter level="low" />
          <SoundMeter level="high" />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Divine Beasts" zh="神兽" />
        <div className="mobile-demo-card">
          <DivineBeast beast="ruta" charges={1} />
          <DivineBeast beast="medoh" charges={3} />
          <DivineBeast beast="naboris" charges={2} />
          <DivineBeast beast="rudania" charges={1} />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Sheikah Abilities" zh="希卡能力" />
        <div className="mobile-demo-card">
          <SheikahAbility ability="roundBomb" plus />
          <SheikahAbility ability="magnesis" />
          <SheikahAbility ability="stasis" plus />
          <SheikahAbility ability="cryonis" />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Rupees" zh="卢比" />
        <div className="mobile-demo-card">
          <RupeeType type="green" />
          <RupeeType type="blue" />
          <RupeeType type="red" />
          <RupeeType type="purple" />
          <RupeeType type="silver" />
          <RupeeType type="gold" />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Bonus Effects" zh="增益效果" />
        <div className="mobile-demo-card">
          <BonusEffectIcon icon="attackUp" arrow />
          <BonusEffectIcon icon="defenseUp" />
          <BonusEffectIcon icon="speedUp" arrow />
          <BonusEffectIcon icon="coldResist" />
          <BonusEffectIcon icon="heatResist" />
        </div>
      </section>

      <div className="mobile-divider"><MobileChapter label="Menus · Titles · Dialog / 菜单 · 标题 · 对话" /></div>

      {/* Wide components — auto-scaled to fit */}
      <section className="mobile-section">
        <MobileSectionHeader en="Titles" zh="标题" />
        <div className="mobile-fit-card">
          <AutoFit designWidth={500}><TitleLocation name="Hateno Village" /></AutoFit>
          <AutoFit designWidth={500}><TitleQuest name="Destroy Ganon" questType="main" /></AutoFit>
          <AutoFit designWidth={500}><TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" /></AutoFit>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Dialog" zh="对话框" />
        <div className="mobile-fit-card">
          <AutoFit designWidth={910}><Dialog type="speech" speaker="Old Man">It is cold here. Find warm clothes.</Dialog></AutoFit>
          <AutoFit designWidth={910}><Dialog type="sheikah" speaker="Sheikah Slate" showContinue={false}>Scope confirmed.</Dialog></AutoFit>
          <AutoFit designWidth={400}><DialogFloating text="Shala-kah! You found me!" /></AutoFit>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Quest" zh="任务" />
        <div className="mobile-fit-card">
          <AutoFit designWidth={600}><QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" /></AutoFit>
          <AutoFit designWidth={600}><QuestListItem title="Robbie's Research" location="Akkala Lab" questType="side" state="default" /></AutoFit>
          <AutoFit designWidth={600}><QuestListItem title="The Stolen Heirloom" location="Kakariko" questType="shrine" state="completed" /></AutoFit>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Quest Icons" zh="任务图标" />
        <div className="mobile-demo-card">
          <QuestTypeIcon type="main" size={40} />
          <QuestTypeIcon type="side" size={40} />
          <QuestTypeIcon type="shrine" size={40} />
          <QuestTypeIcon type="memory" size={40} />
        </div>
      </section>

      <div className="mobile-divider"><MobileChapter label="Controls · Map · Menu / 控制 · 地图 · 物品" /></div>

      <section className="mobile-section">
        <MobileSectionHeader en="Buttons" zh="按钮" />
        <div className="mobile-demo-card">
          <Button variant="primary" size="small">Primary</Button>
          <Button variant="sheikah" size="small">Sheikah</Button>
          <Button variant="ghost" size="small">Ghost</Button>
          <Button variant="danger" size="small">Danger</Button>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Cards" zh="卡片" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Card variant="sheikah" title="Sheikah Card">Glowing borders</Card>
          <Card variant="golden" title="Golden Card">Royal style</Card>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Controls" zh="控制器" />
        <div className="mobile-demo-card">
          <ControllerButton button="A" label="Confirm" />
          <ControllerButton button="B" label="Cancel" />
          <ControllerButton button="X" label="Jump" />
          <ControllerButton button="Y" label="Attack" />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Map" zh="地图" />
        <div className="mobile-demo-card">
          <MapIcon icon="shrine" size={36} />
          <MapIcon icon="tower" size={36} />
          <MapIcon icon="lab" size={36} />
          <MapBeacon color="blue" flare />
          <MapBeacon color="red" />
          <MapBeacon color="yellow" />
          <MapBeacon color="green" flare />
        </div>
      </section>

      <div className="mobile-divider"><MobileChapter label="Battle · Sheikah · Settings / 战斗 · 希卡 · 设置" /></div>

      <section className="mobile-section">
        <MobileSectionHeader en="Menu" zh="菜单" />
        <div className="mobile-demo-card">
          <ItemBG state="filled" size={48} />
          <ItemBG state="selected" size={48} />
          <ItemBG state="equipped" size={48} />
          <ItemBG state="empty" size={48} />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Battle" zh="战斗" />
        <div className="mobile-demo-card">
          <ItemEnchantment quality={1} />
          <ItemEnchantment quality={2} />
          <ItemEnchantment quality={3} />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Sheikah" zh="希卡之石" />
        <div className="mobile-demo-card">
          <SheikahSymbol size={40} outline={false} />
          <SheikahSymbol size={40} outline />
          <SheikahCompendiumEntry revealed number={1} />
          <SheikahCompendiumEntry number={2} />
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Settings" zh="设置" />
        <div className="mobile-fit-card">
          <AutoFit designWidth={500}><SettingsToggle label="HUD" options={['ON', 'OFF']} value="ON" selected /></AutoFit>
          <AutoFit designWidth={500}><SettingsToggle label="Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" /></AutoFit>
        </div>
      </section>

      <section className="mobile-section">
        <MobileSectionHeader en="Decorations" zh="装饰" />
        <div className="mobile-demo-card">
          <Logo variant="mark" width={32} />
          <Starburst size={48} />
          <DirectionalArrow direction="up" size={20} />
          <DirectionalArrow direction="right" size={20} />
          <DirectionalArrow direction="down" size={20} />
          <DirectionalArrow direction="left" size={20} />
        </div>
      </section>

      {/* Footer */}
      <div className="mobile-footer">
        <p>MIT License · Unofficial fan project for learning only</p>
        <p>非官方粉丝创作仅供学习 · 与任天堂无关联 · 商标归任天堂所有</p>
      </div>
    </div>
  </div>
)

// ─── Showcase Page (宣传素材成品图) ──────────────────────────────────────────

const ShowcaseShot: React.FC<{ label: string; ratio?: '16x9' | '4x3'; children: React.ReactNode }> = ({ label, ratio = '16x9', children }) => (
  <div className="showcase-shot">
    <div className="showcase-shot-label">{label}</div>
    <div className={`showcase-frame showcase-frame-${ratio}`}>{children}</div>
  </div>
)

const ShowcasePage: React.FC = () => (
  <div className="showcase-page">
    <div className="showcase-header">
      <SheikahSymbol size={56} outline={false} />
      <h1>zelda-hyrule-ui · Showcase</h1>
      <p>Real interfaces built with the component library. Screenshot any frame below.</p>
    </div>

    <div className="showcase-grid">

      {/* ═══ SHOT 1: 启动 / 封面页 ═══ */}
      <ShowcaseShot label="01 — Title / Cover Screen" ratio="16x9">
        <SheikahBackground color="darkBlue">
          <SheikahScanlines animated opacity={0.1} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 20, padding: 40,
          }}>
            <SheikahSymbol size={96} outline={false} />
            <h1 style={{
              fontFamily: "'Hylia Serif', serif", fontSize: 52, color: '#E2DED3',
              letterSpacing: '0.06em', textShadow: '0 0 24px rgba(0,0,0,0.6)', margin: 0,
            }}>
              Hyrule
            </h1>
            <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(233,225,209,0.65)', margin: 0 }}>
              A React UI library in the style of Breath of the Wild
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 12, transform: 'scale(0.8)' }}>
              <Button variant="sheikah">Start</Button>
              <Button variant="primary">Continue</Button>
            </div>
          </div>
        </SheikahBackground>
      </ShowcaseShot>

      {/* ═══ SHOT 2: 完整 HUD overlay ═══ */}
      <ShowcaseShot label="02 — In-Game HUD Overlay" ratio="16x9">
        <SheikahBackground color="blueGrey">
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* 左上：心心 + 精力 */}
            <div style={{ position: 'absolute', top: 28, left: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <HealthBar current={11} max={13} bonus={3} />
              <StaminaWheel value={0.7} size={64} />
            </div>
            {/* 右上：卢比 + 天气温度 */}
            <div style={{ position: 'absolute', top: 28, right: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
              <RupeeCounter amount={13878} />
              <div style={{ display: 'flex', gap: 10 }}>
                <WeatherIcon weather="rain" />
                <Temperature value="cold" />
                <SoundMeter level="low" />
              </div>
            </div>
            {/* 左下：神兽 + 能力 */}
            <div style={{ position: 'absolute', bottom: 28, left: 32, display: 'flex', gap: 14, alignItems: 'center' }}>
              <DivineBeast beast="ruta" charges={1} />
              <DivineBeast beast="medoh" charges={3} />
              <div style={{ width: 1, height: 44, background: 'rgba(226,222,211,0.15)' }} />
              <SheikahAbility ability="magnesis" />
              <SheikahAbility ability="stasis" plus />
            </div>
            {/* 右下：操作提示 */}
            <div style={{ position: 'absolute', bottom: 28, right: 32 }}>
              <ActionSet actions={[
                { button: 'A', label: 'Talk' },
                { button: 'B', label: 'Back' },
                { button: 'X', label: 'Jump' },
              ]} />
            </div>
            {/* 中部：地点标题（独立位置，不贴顶栏） */}
            <div style={{ position: 'absolute', top: '32%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <TitleLocation name="Hateno Village" />
            </div>
          </div>
        </SheikahBackground>
      </ShowcaseShot>

      {/* ═══ SHOT 3: 任务管理 App ═══ */}
      <ShowcaseShot label="03 — Quest Tracker App" ratio="4x3">
        <SheikahBackground color="darkBlue">
          <SheikahScanlines opacity={0.05} />
          <div style={{ position: 'absolute', inset: 0, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <SheikahTextTitle title="Adventure Log" description="3 active quests" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
                <QuestListItem title="Robbie's Research" location="Akkala Ancient Tech Lab" questType="side" state="default" />
                <QuestListItem title="The Stolen Heirloom" location="Kakariko Village" questType="shrine" state="completed" />
              </div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <Button variant="ghost" size="small">Filter</Button>
                <Button variant="sheikah" size="small">Add Quest</Button>
              </div>
            </div>
          </div>
        </SheikahBackground>
      </ShowcaseShot>

      {/* ═══ SHOT 4: 网站着陆页 ═══ */}
      <ShowcaseShot label="04 — Website Landing Page" ratio="16x9">
        <SheikahBackground color="darkBlue">
          <SheikahScanlines opacity={0.06} />
          <div style={{ position: 'absolute', inset: 0, padding: 48, display: 'flex', flexDirection: 'column' }}>
            {/* 顶部导航 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo variant="full" width={150} />
              <div style={{ display: 'flex', gap: 10 }}>
                <Button variant="ghost" size="small">Work</Button>
                <Button variant="ghost" size="small">About</Button>
                <Button variant="sheikah" size="small">Contact</Button>
              </div>
            </div>
            {/* 主标题 */}
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 style={{ fontFamily: "'Hylia Serif', serif", fontSize: 44, color: '#E2DED3', margin: 0, lineHeight: 1.2 }}>
                Link Anderson
              </h1>
              <p style={{ fontSize: 17, fontStyle: 'italic', color: 'rgba(233,225,209,0.6)', maxWidth: 420, marginTop: 12 }}>
                Product designer & adventurer. Crafting interfaces worth exploring.
              </p>
            </div>
            {/* 卡片行 */}
            <div style={{ display: 'flex', gap: 16 }}>
              <Card variant="sheikah" title="Design">UI / UX systems</Card>
              <Card variant="golden" title="Build">React & TypeScript</Card>
              <Card variant="default" title="Explore">Side quests welcome</Card>
            </div>
          </div>
        </SheikahBackground>
      </ShowcaseShot>

      {/* ═══ SHOT 5: 对话场景 ═══ */}
      <ShowcaseShot label="05 — Dialogue Scene" ratio="16x9">
        <SheikahBackground color="blueGrey">
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', padding: '0 60px 40px' }}>
            <div style={{ transform: 'scale(0.5)', transformOrigin: 'bottom center', width: '100%' }}>
              <Dialog type="speech" speaker="Old Man">
                It is dangerous to go alone. Take this UI kit with you.
              </Dialog>
            </div>
            <div style={{ marginTop: 16, alignSelf: 'flex-end' }}>
              <ActionSet actions={[{ button: 'A', label: 'Continue' }, { button: 'B', label: 'Skip' }]} />
            </div>
          </div>
        </SheikahBackground>
      </ShowcaseShot>

    </div>
  </div>
)

// ─── Poster Page (品牌宣传海报) ──────────────────────────────────────────────

const PosterPage: React.FC = () => (
  <div className="poster-page">
    <div className="poster-stack">

      {/* ═══ 21:9 横版头图（X / 公众号头图） ═══ */}
      <div>
        <div className="poster-block-label">21:9 — X / WeChat Header</div>
        <div className="poster-21x9">
          <div className="poster-bg">
            <SheikahBackground color="darkBlue">
              <SheikahScanlines animated opacity={0.07} />
            </SheikahBackground>
          </div>
          {/* 右侧大尺寸希卡之眼作为唯一视觉焦点 */}
          <div style={{
            position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
            zIndex: 2, opacity: 0.92,
          }}>
            <SheikahSymbol size={300} outline={false} />
          </div>
          {/* 左侧：大标题为绝对重心 */}
          <div className="poster-focus">
            <div className="poster-kicker">React UI Library</div>
            <h1 className="poster-h1">zelda-<br />hyrule-ui</h1>
            <p className="poster-sub">
              The visual language of Hyrule, as production-ready React components.
            </p>
            <div className="poster-meta-row">
              <span>83 Components</span>
              <span className="dot" />
              <span>Sheikah Glow</span>
              <span className="dot" />
              <span>AI-Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 1:1 分享卡（小红书 / 朋友圈） ═══ */}
      <div>
        <div className="poster-block-label">1:1 — Share Card</div>
        <div className="poster-1x1">
          <div className="poster-bg">
            <SheikahBackground color="darkBlue">
              <SheikahScanlines animated opacity={0.08} />
            </SheikahBackground>
          </div>
          <div className="poster-focus center">
            <SheikahSymbol size={110} outline={false} />
            <h1 className="poster-h1" style={{ marginTop: 28 }}>zelda-hyrule-ui</h1>
            <p className="poster-sub" style={{ textAlign: 'center' }}>
              A React UI library in the style of<br />Breath of the Wild
            </p>
            <div className="poster-meta-row" style={{ justifyContent: 'center' }}>
              <span>83 Components</span>
              <span className="dot" />
              <span>AI-Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 3:4 卖点 one-pager（README / 竖版） ═══ */}
      <div>
        <div className="poster-block-label">3:4 — Feature One-Pager</div>
        <div className="poster-3x4">
          <div className="poster-bg">
            <SheikahBackground color="darkBlue">
              <SheikahScanlines animated opacity={0.07} />
            </SheikahBackground>
          </div>
          <div className="poster-onepage">
            {/* 头部：标题区 */}
            <div className="poster-onepage-head">
              <SheikahSymbol size={72} outline={false} />
              <h1 className="poster-onepage-title">zelda-hyrule-ui</h1>
              <p className="poster-onepage-sub">
                A React UI component library in the style of<br />
                The Legend of Zelda: Breath of the Wild
              </p>
            </div>

            {/* 卖点列表 */}
            <div className="poster-features">
              <div className="poster-feature">
                <span className="poster-feature-num">01</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">83 Components</p>
                  <p className="poster-feature-desc">Full coverage of the BOTW UI Kit — HUD, menus, dialogs, maps, quests &amp; more</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">02</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">Figma-Precise SVG</p>
                  <p className="poster-feature-desc">Every path exported node-by-node from the community Figma source</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">03</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">AI-Ready</p>
                  <p className="poster-feature-desc">Drop SKILL.md into Cursor and say &quot;build in Zelda style&quot;</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">04</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">TypeScript &amp; Lightweight</p>
                  <p className="poster-feature-desc">Full type definitions · ~115KB ESM · tree-shakeable</p>
                </div>
              </div>
            </div>

            {/* 底部：安装命令 */}
            <div className="poster-onepage-foot">
              <span className="accent">npm i</span>
              <span>zelda-hyrule-ui</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 3:4 卖点 one-pager 中文版 ═══ */}
      <div>
        <div className="poster-block-label">3:4 — Feature One-Pager (中文)</div>
        <div className="poster-3x4 poster-3x4-zh">
          <div className="poster-bg">
            <SheikahBackground color="darkBlue">
              <SheikahScanlines animated opacity={0.07} />
            </SheikahBackground>
          </div>
          <div className="poster-onepage">
            {/* 头部：标题区 */}
            <div className="poster-onepage-head">
              <SheikahSymbol size={72} outline={false} />
              <h1 className="poster-onepage-title">zelda-hyrule-ui</h1>
              <p className="poster-onepage-sub">
                一套受《塞尔达传说：旷野之息》启发的<br />
                React UI 组件库
              </p>
            </div>

            {/* 卖点列表 */}
            <div className="poster-features">
              <div className="poster-feature">
                <span className="poster-feature-num">01</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">83 个组件</p>
                  <p className="poster-feature-desc">完整覆盖 BOTW UI Kit——HUD、菜单、对话、地图、任务等</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">02</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">Figma 像素级还原</p>
                  <p className="poster-feature-desc">所有 SVG 从 Figma 社区原稿逐节点精确导出</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">03</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">AI 友好</p>
                  <p className="poster-feature-desc">把 SKILL.md 丢给 Cursor，说一句&quot;用塞尔达风格做&quot;</p>
                </div>
              </div>
              <div className="poster-feature">
                <span className="poster-feature-num">04</span>
                <div className="poster-feature-text">
                  <p className="poster-feature-title">TypeScript &amp; 轻量</p>
                  <p className="poster-feature-desc">完整类型定义 · ~115KB ESM · 支持摇树优化</p>
                </div>
              </div>
            </div>

            {/* 底部：安装命令 */}
            <div className="poster-onepage-foot">
              <span className="accent">npm i</span>
              <span>zelda-hyrule-ui</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <p className="poster-caption">github.com/chaos-xxl/zelda-hyrule-ui · npm i zelda-hyrule-ui</p>
  </div>
)

// ─── XHS Page (小红书 3:4 配图) ──────────────────────────────────────────────
// 排版逻辑借鉴 guizang-social-card-skill 的瑞士国际主义手法：
// 网格 / 单锚点色（希卡蓝）/ 极致字号对比 / 发丝线 / 克制留白；视觉用塞尔达希卡风。

const XhsCard: React.FC<{ label: string; children: React.ReactNode; scan?: number }> = ({ label, children, scan = 0.07 }) => (
  <div>
    <div className="poster-block-label">{label}</div>
    <div className="xhs-card">
      <div className="poster-bg">
        <SheikahBackground color="darkBlue">
          <SheikahScanlines animated opacity={scan} />
        </SheikahBackground>
      </div>
      <div className="xhs-body">{children}</div>
    </div>
  </div>
)

const XhsPage: React.FC = () => (
  <div className="poster-page">
    <div className="poster-stack">

      {/* ═══ 卡 1：封面 ═══ */}
      <XhsCard label="XHS 1 / 8 — Cover">
        <div className="xhs-cover">
          <div className="xhs-kicker">开源项目 · 持续更新</div>
          <h1 className="xhs-cover-title">我把《塞尔达》<br />的 UI 做成了<br /><span className="accent">组件库</span></h1>
          <p className="xhs-cover-sub">《旷野之息》的希卡之石界面，<br />现在是 83 个 React 组件</p>
          <div className="xhs-cover-foot">
            <SheikahSymbol size={48} outline={false} />
            <div className="xhs-cover-foot-text">
              <span className="name">zelda-hyrule-ui</span>
              <span className="ver">v0.2 UPDATE</span>
            </div>
          </div>
        </div>
      </XhsCard>

      {/* ═══ 卡 2：这是什么 ═══ */}
      <XhsCard label="XHS 2 / 8 — What">
        <div className="xhs-content">
          <div className="xhs-kicker">01 / 这是什么</div>
          <div className="xhs-bignum-row">
            <span className="xhs-bignum">83</span>
            <span className="xhs-bignum-unit">Components</span>
          </div>
          <h2 className="xhs-h2">一套《旷野之息》风格的<br />React 组件库</h2>
          <div className="xhs-rows">
            <div className="xhs-row"><span className="n">—</span><p>HUD / 菜单 / 对话 / 地图 / 任务 全覆盖</p></div>
            <div className="xhs-row"><span className="n">—</span><p>所有 SVG 从 Figma 社区原稿逐节点精确导出</p></div>
            <div className="xhs-row"><span className="n">—</span><p>内置 AI Skill，丢个链接给 Cursor 就能用</p></div>
          </div>
        </div>
      </XhsCard>

      {/* ═══ 卡 3：本次更新 ═══ */}
      <XhsCard label="XHS 3 / 8 — Update">
        <div className="xhs-content">
          <div className="xhs-kicker">02 / 本次更新</div>
          <h2 className="xhs-h2 tight">6 个组件做了<br /><span className="accent">节点级精确还原</span></h2>
          <div className="xhs-features">
            <div className="xhs-feature">
              <span className="xhs-feature-num">01</span>
              <div className="xhs-feature-text">
                <p className="t">图鉴分类 · 符文 · 标题装饰</p>
                <p className="d">告别近似 emoji，换成 Figma 真实图标</p>
              </div>
            </div>
            <div className="xhs-feature">
              <span className="xhs-feature-num">02</span>
              <div className="xhs-feature-text">
                <p className="t">14 个增益效果图标</p>
                <p className="d">连图标配色都对齐了游戏原版</p>
              </div>
            </div>
            <div className="xhs-feature">
              <span className="xhs-feature-num">03</span>
              <div className="xhs-feature-text">
                <p className="t">菜单分类 · 任务类型图标</p>
                <p className="d">补齐剩余半成品，全部精确</p>
              </div>
            </div>
          </div>
          <div className="xhs-foot-note">本次新增 21 个 Figma 精确 SVG 素材</div>
        </div>
      </XhsCard>

      {/* ═══ 卡 4：怎么用 ═══ */}
      <XhsCard label="XHS 4 / 8 — How">
        <div className="xhs-content">
          <div className="xhs-kicker">03 / 怎么用</div>
          <h2 className="xhs-h2">把链接丢给 AI<br />说一句<span className="accent">「用塞尔达风格做」</span></h2>
          <div className="xhs-code">
            <span className="comment"># 安装组件库</span>
            <span><span className="accent">npm i</span> zelda-hyrule-ui</span>
            <span className="comment"># 或把仓库链接 + SKILL.md 丢给 Cursor / Claude</span>
          </div>
          <div className="xhs-cta">
            <SheikahSymbol size={40} outline={false} />
            <p>github.com/chaos-xxl/<br /><span className="accent">zelda-hyrule-ui</span></p>
          </div>
        </div>
      </XhsCard>

      {/* ═══ 卡 5：真实组件展示墙 ═══ */}
      <XhsCard label="XHS 5 / 8 — Showcase">
        <div className="xhs-content">
          <div className="xhs-kicker">本次升级的组件 · 真机渲染</div>
          <h2 className="xhs-h2 tight">不是截图<br />是<span className="accent">能跑的组件</span></h2>
          <div className="xhs-showcase">
            <div className="xhs-showcase-cell">
              <SheikahRune activeRune="magnesis" />
              <span className="cap">SheikahRune</span>
            </div>
            <div className="xhs-showcase-cell">
              <SheikahCompendiumFilters activeFilter="creatures" />
              <span className="cap">CompendiumFilters</span>
            </div>
            <div className="xhs-showcase-cell">
              <div className="xhs-icon-row">
                <BonusEffectIcon icon="attackUp" arrow />
                <BonusEffectIcon icon="fireResist" />
                <BonusEffectIcon icon="speedUp" arrow />
                <BonusEffectIcon icon="staminaUp" />
              </div>
              <span className="cap">BonusEffectIcon</span>
            </div>
            <div className="xhs-showcase-cell">
              <MenuSections activeSection="weapons" />
              <span className="cap">MenuSections</span>
            </div>
          </div>
        </div>
      </XhsCard>

      {/* ═══ 卡 6：before → after 还原对比 ═══ */}
      <XhsCard label="XHS 6 / 8 — Before / After">
        <div className="xhs-content">
          <div className="xhs-kicker">为什么要重做</div>
          <h2 className="xhs-h2 tight">从「差不多」<br />到<span className="accent">「就是它」</span></h2>
          <div className="xhs-ba">
            <div className="xhs-ba-col before">
              <span className="tag">BEFORE</span>
              <div className="glyphs">🐾 👹 🌿 ⚔ 💎</div>
              <p className="note">emoji / 近似图形凑数</p>
            </div>
            <div className="xhs-ba-arrow">→</div>
            <div className="xhs-ba-col after">
              <span className="tag">AFTER</span>
              <div className="comp"><SheikahCompendiumFilters activeFilter="materials" /></div>
              <p className="note">Figma 节点级精确 SVG</p>
            </div>
          </div>
          <div className="xhs-foot-note">逐节点导出 · 保留游戏原版配色与辉光</div>
        </div>
      </XhsCard>

      {/* ═══ 卡 7：覆盖什么 ═══ */}
      <XhsCard label="XHS 7 / 8 — Coverage">
        <div className="xhs-content">
          <div className="xhs-kicker">83 个组件 · 覆盖范围</div>
          <h2 className="xhs-h2 tight">整套游戏 UI<br />都给你<span className="accent">搭好了</span></h2>
          <div className="xhs-cat-grid">
            <div className="xhs-cat"><span className="n">14</span><span className="l">HUD 抬头显示</span></div>
            <div className="xhs-cat"><span className="n">11</span><span className="l">菜单 / 物品栏</span></div>
            <div className="xhs-cat"><span className="n">8</span><span className="l">对话系统</span></div>
            <div className="xhs-cat"><span className="n">9</span><span className="l">地图标记</span></div>
            <div className="xhs-cat"><span className="n">7</span><span className="l">任务追踪</span></div>
            <div className="xhs-cat"><span className="n">34</span><span className="l">标题 / 装饰 / 其他</span></div>
          </div>
          <div className="xhs-foot-note">HUD · 菜单 · 对话 · 地图 · 任务 · 希卡之石 · 战斗 · 商店</div>
        </div>
      </XhsCard>

      {/* ═══ 卡 8：适合谁 / 收尾 ═══ */}
      <XhsCard label="XHS 8 / 8 — Closing">
        <div className="xhs-cover">
          <div className="xhs-kicker">谁会喜欢</div>
          <h2 className="xhs-h2" style={{ marginTop: 24 }}>如果你也<br /><span className="accent">既玩塞尔达<br />又写前端</span></h2>
          <div className="xhs-rows" style={{ marginTop: 36 }}>
            <div className="xhs-row"><span className="n">→</span><p>想做个有游戏感的个人项目 / 作品集</p></div>
            <div className="xhs-row"><span className="n">→</span><p>给 AI 一个明确的设计语言去生成页面</p></div>
            <div className="xhs-row"><span className="n">→</span><p>纯粹喜欢《旷野之息》这套 UI 美学</p></div>
          </div>
          <div className="xhs-cover-foot">
            <SheikahSymbol size={44} outline={false} />
            <div className="xhs-cover-foot-text">
              <span className="name">⭐ Star 一下不迷路</span>
              <span className="ver">github.com/chaos-xxl/zelda-hyrule-ui</span>
            </div>
          </div>
        </div>
      </XhsCard>

    </div>
    <p className="poster-caption">github.com/chaos-xxl/zelda-hyrule-ui · npm i zelda-hyrule-ui</p>
  </div>
)

// ─── App with Hash Routing ───────────────────────────────────────────────────

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'docs' | 'mobile' | 'showcase' | 'poster' | 'xhs'>(() => {
    const hash = window.location.hash
    if (hash === '#/docs') return 'docs'
    if (hash === '#/mobile') return 'mobile'
    if (hash === '#/showcase') return 'showcase'
    if (hash === '#/poster') return 'poster'
    if (hash === '#/xhs') return 'xhs'
    return 'landing'
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/docs') setPage('docs')
      else if (hash === '#/mobile') setPage('mobile')
      else if (hash === '#/showcase') setPage('showcase')
      else if (hash === '#/poster') setPage('poster')
      else if (hash === '#/xhs') setPage('xhs')
      else setPage('landing')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === 'docs') return <DocsPage />
  if (page === 'mobile') return <MobilePage />
  if (page === 'showcase') return <ShowcasePage />
  if (page === 'poster') return <PosterPage />
  if (page === 'xhs') return <XhsPage />
  return <LandingPage />
}

export default App
