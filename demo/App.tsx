import React, { useState, useEffect } from 'react'
import {
  Button, Card, Dialog, Modal, Divider, Loading, Toast,
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
} from '../src'
import '../src/styles/global.less'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  key: string
  label: string
  components: string[]
}

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  { key: 'hud', label: 'HUD', components: ['HealthBar', 'StaminaWheel', 'WeatherIcon', 'RupeeCounter', 'DivineBeast', 'SheikahAbility', 'RupeeType', 'Temperature', 'SoundMeter', 'Sensor', 'EffectDuration', 'BonusEffectIcon'] },
  { key: 'menu', label: 'Menu', components: ['MenuSections', 'ItemBG', 'Pagination', 'ModalButton', 'Scrollbar', 'ModalTimer', 'StatsStack'] },
  { key: 'titles', label: 'Titles', components: ['TitleLocation', 'TitleQuest', 'TitleShrine', 'TitleLocationLarge', 'TitlePointOfInterest'] },
  { key: 'dialog', label: 'Dialog', components: ['Dialog', 'DialogChoice', 'DialogFloating'] },
  { key: 'quest', label: 'Quest', components: ['QuestListItem', 'QuestDescription', 'QuestTypeIcon', 'QuestNotification'] },
  { key: 'controls', label: 'Controls', components: ['ControllerButton', 'ActionSet'] },
  { key: 'map', label: 'Map', components: ['MapIcon', 'MapBeacon', 'MapQuestMarker', 'MapLocationName', 'MapCursor', 'MapHeroLocation'] },
  { key: 'sheikah', label: 'Sheikah', components: ['SheikahSymbol', 'SheikahBackground', 'SheikahScanlines', 'SheikahRune', 'SheikahCompendiumEntry', 'SheikahTextTitle', 'SheikahCompendiumFilters', 'SheikahAlbumButton'] },
  { key: 'common', label: 'Common', components: ['Button', 'Card', 'Modal', 'Divider', 'Loading', 'Toast'] },
  { key: 'battle', label: 'Battle', components: ['ItemEnchantment', 'StatusHealing', 'AimingReticle', 'AttackDefenseValues'] },
  { key: 'shop', label: 'Shop', components: ['ShopListItem', 'ShopPriceQuantity', 'NumberInput'] },
  { key: 'settings', label: 'Settings', components: ['SettingsToggle'] },
  { key: 'decorations', label: 'Decorations', components: ['TitleOrnament', 'DirectionalArrow', 'Starburst', 'TextOrnamentCorner', 'TimerOrnament', 'Logo'] },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{
    fontFamily: "'Hylia Serif', 'Cinzel', Georgia, serif",
    fontSize: 24, color: '#E2DED3', marginBottom: 16, letterSpacing: '0.05em',
  }}>{children}</h2>
)

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{
    fontSize: 11, fontWeight: 500, color: 'rgba(233,225,209,0.4)',
    letterSpacing: '0.1em', marginBottom: 8, textTransform: 'uppercase',
  }}>{children}</p>
)

const Row: React.FC<{ children: React.ReactNode; gap?: number; wrap?: boolean; align?: string }> = ({ children, gap = 16, wrap = true, align = 'center' }) => (
  <div style={{ display: 'flex', gap, flexWrap: wrap ? 'wrap' : 'nowrap', alignItems: align as any }}>{children}</div>
)

const Block: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ marginBottom: 24 }}>
    <Label>{label}</Label>
    {children}
  </div>
)

// ─── Page: HUD ───────────────────────────────────────────────────────────────

const HudPage: React.FC = () => (
  <div>
    <SectionTitle>HUD Elements</SectionTitle>
    <Block label="HealthBar">
      <Row gap={32} align="flex-start">
        <HealthBar current={13} max={13} bonus={0} />
        <HealthBar current={8} max={13} bonus={3} />
        <HealthBar current={3} max={10} bonus={0} />
      </Row>
    </Block>
    <Block label="StaminaWheel">
      <Row>
        <StaminaWheel value={1} />
        <StaminaWheel value={0.6} />
        <StaminaWheel value={0.15} />
        <StaminaWheel value={0.8} bonus />
      </Row>
    </Block>
    <Block label="WeatherIcon">
      <Row>
        <WeatherIcon weather="clear" />
        <WeatherIcon weather="cloudy" />
        <WeatherIcon weather="rain" />
        <WeatherIcon weather="storm" />
        <WeatherIcon weather="clear" glowing={false} />
      </Row>
    </Block>
    <Block label="RupeeCounter">
      <Row gap={32}>
        <RupeeCounter amount={0} />
        <RupeeCounter amount={999} />
        <RupeeCounter amount={13878} />
      </Row>
    </Block>
    <Block label="DivineBeast">
      <Row>
        <DivineBeast beast="ruta" charges={1} />
        <DivineBeast beast="medoh" charges={1} />
        <DivineBeast beast="rudania" charges={2} />
        <DivineBeast beast="naboris" charges={3} />
        <DivineBeast beast="ruta" recharging charges={0} />
      </Row>
    </Block>
    <Block label="SheikahAbility">
      <Row gap={8}>
        <SheikahAbility ability="roundBomb" plus />
        <SheikahAbility ability="magnesis" />
        <SheikahAbility ability="stasis" plus />
        <SheikahAbility ability="cryonis" />
        <SheikahAbility ability="camera" />
        <SheikahAbility ability="stasis" recharging />
      </Row>
    </Block>
    <Block label="RupeeType">
      <Row gap={8}>
        <RupeeType type="green" />
        <RupeeType type="blue" />
        <RupeeType type="red" />
        <RupeeType type="purple" />
        <RupeeType type="silver" />
        <RupeeType type="gold" />
      </Row>
    </Block>
    <Block label="Temperature">
      <Row>
        <Temperature value="regular" />
        <Temperature value="cold" />
        <Temperature value="hot" />
      </Row>
    </Block>
    <Block label="SoundMeter">
      <Row>
        <SoundMeter level="low" />
        <SoundMeter level="high" />
      </Row>
    </Block>
    <Block label="Sensor">
      <Row>
        <Sensor active />
        <Sensor active={false} />
        <Sensor active plus />
      </Row>
    </Block>
    <Block label="EffectDuration">
      <Row gap={24}>
        <EffectDuration name="Attack Up" timeRemaining="12:30" />
        <EffectDuration name="Cold Resist" timeRemaining="05:00" />
        <EffectDuration name="Speed Up" timeRemaining="01:15" />
      </Row>
    </Block>
    <Block label="BonusEffectIcon">
      <Row gap={8}>
        <BonusEffectIcon icon="attackUp" arrow />
        <BonusEffectIcon icon="defenseUp" arrow />
        <BonusEffectIcon icon="speedUp" />
        <BonusEffectIcon icon="coldResist" />
        <BonusEffectIcon icon="heatResist" />
      </Row>
    </Block>
  </div>
)

// ─── Page: Menu ──────────────────────────────────────────────────────────────

const MenuPage: React.FC = () => (
  <div>
    <SectionTitle>Menu System</SectionTitle>
    <Block label="MenuSections">
      <MenuSections activeSection="weapons" />
    </Block>
    <Block label="ItemBG">
      <Row gap={8}>
        <ItemBG state="empty" size={80} />
        <ItemBG state="filled" size={80} />
        <ItemBG state="selected" size={80} />
        <ItemBG state="equipped" size={80} />
        <ItemBG state="sheikahSelect" size={80} />
      </Row>
    </Block>
    <Block label="Pagination">
      <Row gap={24}>
        <Pagination totalPages={6} currentPage={1} />
        <Pagination totalPages={4} currentPage={3} />
        <Pagination totalPages={2} currentPage={2} />
      </Row>
    </Block>
    <Block label="ModalButton">
      <Row>
        <ModalButton>Cancel</ModalButton>
        <ModalButton selected>Confirm</ModalButton>
        <ModalButton>Delete</ModalButton>
      </Row>
    </Block>
    <Block label="Scrollbar">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Scrollbar location={1} maxSections={5} width={400} />
        <Scrollbar location={3} maxSections={5} width={400} />
        <Scrollbar location={5} maxSections={5} width={400} />
      </div>
    </Block>
    <Block label="ModalTimer">
      <Row>
        <ModalTimer time="2:30" />
        <ModalTimer time="0:15" red />
        <ModalTimer time="10:00" />
      </Row>
    </Block>
    <Block label="StatsStack">
      <Row gap={24}>
        <StatsStack type="weapon" value={32} comparison={45} />
        <StatsStack type="armor" value={24} trait="Flame Guard" />
        <StatsStack type="shield" value={60} comparison={40} />
        <StatsStack type="healing" value={5} />
      </Row>
    </Block>
  </div>
)

// ─── Page: Titles ────────────────────────────────────────────────────────────

const TitlesPage: React.FC = () => (
  <div>
    <SectionTitle>Titles</SectionTitle>
    <Block label="TitleLocation">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TitleLocation name="Hateno Village" />
        <TitleLocation name="Zora's Domain" />
        <TitleLocation name="Gerudo Town" />
      </div>
    </Block>
    <Block label="TitleQuest">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TitleQuest name="Forbidden City Entry" questType="main" />
        <TitleQuest name="The Stolen Heirloom" questType="shrine" />
        <TitleQuest name="A Wife Washed Away" questType="side" />
      </div>
    </Block>
    <Block label="TitleShrine">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TitleShrine name="Oman Au Shrine" subtitle="Magnesis Trial" />
        <TitleShrine name="Keo Ruug Shrine" subtitle="Fateful Stars" />
      </div>
    </Block>
    <Block label="TitleLocationLarge">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TitleLocationLarge name="Hyrule Castle" />
        <TitleLocationLarge name="Death Mountain" />
      </div>
    </Block>
    <Block label="TitlePointOfInterest">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TitlePointOfInterest title="Bokoblin Camp" variant="poi" />
        <TitlePointOfInterest title="Hinox" subtitle="Black Hinox" variant="bossName" />
        <TitlePointOfInterest title="Lynel" variant="poiWithHealth" healthPercent={65} />
      </div>
    </Block>
  </div>
)

// ─── Page: Dialog ────────────────────────────────────────────────────────────

const DialogPage: React.FC = () => (
  <div>
    <SectionTitle>Dialog</SectionTitle>
    <Block label="Dialog — Speech">
      <Dialog type="speech" speaker="Cree">
        If I give you this <span style={{ color: '#6bdecc' }}>goat butter</span>, will you make some <span style={{ color: '#6bdecc' }}>salmon meuniere</span> for Genli?
      </Dialog>
    </Block>
    <Block label="Dialog — Sheikah">
      <Dialog type="sheikah" speaker="Sheikah Slate">
        Scope identified. Distilling...
      </Dialog>
    </Block>
    <Block label="DialogChoice">
      <DialogChoice
        options={[
          { label: 'Yes, I will help.', value: 'yes' },
          { label: 'Not right now.', value: 'no' },
          { label: 'Tell me more.', value: 'more' },
        ]}
        selectedIndex={0}
      />
    </Block>
    <Block label="DialogFloating">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DialogFloating text="Hey! Over here!" type="dialog" />
        <DialogFloating text="Beedle" type="name" />
      </div>
    </Block>
  </div>
)

// ─── Page: Quest ─────────────────────────────────────────────────────────────

const QuestPage: React.FC = () => (
  <div>
    <SectionTitle>Quest</SectionTitle>
    <Block label="QuestListItem">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <QuestListItem title="Robbie's Research" location="Hateno Ancient Tech Lab" questType="main" state="marked" />
        <QuestListItem title="From the Ground Up" location="Hateno Village" questType="side" state="default" />
        <QuestListItem title="A Parent's Love" location="Tarrey Town" questType="side" state="completed" />
      </div>
    </Block>
    <Block label="QuestDescription">
      <QuestDescription
        title="Robbie's Research"
        description={<>Visit the <span style={{ color: '#6bdecc' }}>Hateno Ancient Tech Lab</span> and speak with Robbie about ancient technology.</>}
        location="Hateno Ancient Tech Lab"
        npc="Robbie"
      />
    </Block>
    <Block label="QuestTypeIcon">
      <Row gap={24}>
        <QuestTypeIcon type="main" size={60} />
        <QuestTypeIcon type="side" size={60} />
        <QuestTypeIcon type="shrine" size={60} />
        <QuestTypeIcon type="memory" size={60} />
      </Row>
    </Block>
    <Block label="QuestNotification">
      <Row gap={24}>
        <QuestNotification />
        <QuestNotification showLabel label="New Quest!" />
      </Row>
    </Block>
  </div>
)

// ─── Page: Controls ──────────────────────────────────────────────────────────

const ControlsPage: React.FC = () => (
  <div>
    <SectionTitle>Controls</SectionTitle>
    <Block label="ControllerButton">
      <Row>
        <ControllerButton button="A" label="Confirm" />
        <ControllerButton button="B" label="Cancel" />
        <ControllerButton button="X" label="Jump" />
        <ControllerButton button="Y" label="Attack" />
        <ControllerButton button="L" />
        <ControllerButton button="R" />
        <ControllerButton button="ZL" label="Shield" />
        <ControllerButton button="ZR" label="Throw" />
        <ControllerButton button="Plus" label="Menu" />
      </Row>
    </Block>
    <Block label="ActionSet">
      <ActionSet actions={[
        { button: 'A', label: 'Talk' },
        { button: 'B', label: 'Cancel' },
        { button: 'X', label: 'Jump' },
        { button: 'Y', label: 'Attack' },
      ]} />
    </Block>
  </div>
)

// ─── Page: Map ───────────────────────────────────────────────────────────────

const MapPage: React.FC = () => (
  <div>
    <SectionTitle>Map</SectionTitle>
    <Block label="MapIcon">
      <Row>
        <MapIcon icon="shrine" />
        <MapIcon icon="resurrection" />
        <MapIcon icon="tower" />
        <MapIcon icon="lab" />
      </Row>
    </Block>
    <Block label="MapBeacon">
      <Row gap={24}>
        <MapBeacon color="red" />
        <MapBeacon color="blue" flare />
        <MapBeacon color="yellow" />
        <MapBeacon color="green" flare />
        <MapBeacon color="pink" />
      </Row>
    </Block>
    <Block label="MapQuestMarker">
      <Row gap={24}>
        <MapQuestMarker size={60} />
        <MapQuestMarker size={60} pulse />
      </Row>
    </Block>
    <Block label="MapLocationName">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <MapLocationName name="Hateno Village" size="large" />
        <MapLocationName name="Dueling Peaks Stable" size="medium" />
        <MapLocationName name="Outskirt Stable" size="small" />
      </div>
    </Block>
    <Block label="MapCursor">
      <Row gap={32}>
        <MapCursor locationName="Oman Au Shrine" action />
        <MapCursor locationName="Hateno Tower" rightSide={false} />
      </Row>
    </Block>
    <Block label="MapHeroLocation">
      <Row gap={24}>
        <MapHeroLocation rotation={0} vision />
        <MapHeroLocation rotation={45} />
        <MapHeroLocation rotation={180} vision />
      </Row>
    </Block>
  </div>
)

// ─── Page: Sheikah ───────────────────────────────────────────────────────────

const SheikahPage: React.FC = () => (
  <div>
    <SectionTitle>Sheikah</SectionTitle>
    <Block label="SheikahSymbol">
      <Row gap={24}>
        <SheikahSymbol size={80} outline={false} />
        <SheikahSymbol size={80} outline />
        <SheikahSymbol size={60} outline={false} />
      </Row>
    </Block>
    <Block label="SheikahBackground + SheikahScanlines">
      <div style={{ position: 'relative', width: '100%', height: 200, borderRadius: 8, overflow: 'hidden' }}>
        <SheikahBackground color="darkBlue">
          <SheikahScanlines animated opacity={0.12} />
          <div style={{ padding: 32, display: 'flex', alignItems: 'center', gap: 24 }}>
            <SheikahSymbol size={80} outline={false} />
            <div>
              <p style={{ fontFamily: "'Hylia Serif', serif", fontSize: 20, color: '#E2DED3', marginBottom: 4 }}>Sheikah Slate</p>
              <p style={{ fontSize: 13, color: 'rgba(233,225,209,0.6)', fontStyle: 'italic' }}>A mysterious tablet with ancient technology</p>
            </div>
          </div>
        </SheikahBackground>
      </div>
    </Block>
    <Block label="SheikahRune">
      <SheikahRune activeRune="magnesis" />
    </Block>
    <Block label="SheikahCompendiumEntry">
      <Row gap={8}>
        <SheikahCompendiumEntry revealed number={1} />
        <SheikahCompendiumEntry revealed hovered number={2} />
        <SheikahCompendiumEntry number={3} />
        <SheikahCompendiumEntry number={4} />
      </Row>
    </Block>
    <Block label="SheikahTextTitle">
      <SheikahTextTitle title="Hyrule Compendium" description="A catalog of all creatures, materials, and equipment." />
    </Block>
    <Block label="SheikahCompendiumFilters">
      <SheikahCompendiumFilters activeFilter="creatures" />
    </Block>
    <Block label="SheikahAlbumButton">
      <Row>
        <SheikahAlbumButton label="Album" selected />
        <SheikahAlbumButton label="Map" />
        <SheikahAlbumButton label="Compendium" />
      </Row>
    </Block>
  </div>
)

// ─── Page: Common ────────────────────────────────────────────────────────────

const CommonPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <SectionTitle>Common</SectionTitle>
      <Block label="Button">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
          <Button variant="primary">Continue Adventure</Button>
          <Button variant="sheikah">Activate Rune</Button>
          <Button variant="danger">Delete Save File</Button>
        </div>
        <Row gap={12} align="center">
          <Button variant="primary" size="small">Small</Button>
          <Button variant="ghost" size="small">Ghost</Button>
          <Button variant="primary" loading size="small">Loading</Button>
          <Button variant="primary" disabled size="small">Disabled</Button>
        </Row>
      </Block>
      <Block label="Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <Card title="Adventure Log">Though Robbie initially presumed that it was the power of love...</Card>
          <Card variant="sheikah" title="Sheikah Slate">Distilling rune data from the ancient shrine...</Card>
          <Card variant="golden" title="Master Sword">The legendary blade that seals the darkness.</Card>
          <Card variant="item">Hylian Shield — A shield passed down through the Hyrulean royal family.</Card>
        </div>
      </Block>
      <Block label="Modal">
        <Button variant="primary" size="small" onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal open={modalOpen} title="Adventure Log" onClose={() => setModalOpen(false)} onOk={() => setModalOpen(false)}>
          <p>Though Robbie initially presumed that it was the power of love that set the ancient oven right again, he soon realized the cause was actually lighting the furnace with blue flame.</p>
        </Modal>
      </Block>
      <Block label="Divider">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Divider variant="subtle" />
          <Divider variant="sheikah" />
          <Divider variant="golden" />
          <Divider variant="ornament" />
        </div>
      </Block>
      <Block label="Loading">
        <Row gap={40} align="flex-end">
          <Loading size="small" />
          <Loading size="middle" tip="Loading..." />
          <Loading size="large" tip="Preparing the Sheikah Slate" />
        </Row>
      </Block>
      <Block label="Toast">
        <Toast message="Obtained Hylian Shield!" visible duration={0} />
      </Block>
    </div>
  )
}

// ─── Page: Battle ────────────────────────────────────────────────────────────

const BattlePage: React.FC = () => (
  <div>
    <SectionTitle>Battle</SectionTitle>
    <Block label="ItemEnchantment">
      <Row gap={24}>
        <ItemEnchantment quality={0} />
        <ItemEnchantment quality={1} />
        <ItemEnchantment quality={2} />
        <ItemEnchantment quality={3} />
      </Row>
    </Block>
    <Block label="StatusHealing">
      <Row gap={16}>
        <StatusHealing type="3Hearts" />
        <StatusHealing type="5Hearts" />
        <StatusHealing type="fullRecovery" />
        <StatusHealing type="bonusHearts" />
        <StatusHealing type="stamina" />
      </Row>
    </Block>
    <Block label="AimingReticle">
      <Row gap={32}>
        <AimingReticle variant="bow" size={80} />
        <AimingReticle variant="sheikahAbility" size={80} />
      </Row>
    </Block>
    <Block label="AttackDefenseValues">
      <Row gap={24}>
        <AttackDefenseValues type="attack" value={32} />
        <AttackDefenseValues type="attack" value={48} modifier="bonus" />
        <AttackDefenseValues type="defense" value={24} />
        <AttackDefenseValues type="defense" value={12} modifier="penalty" />
      </Row>
    </Block>
  </div>
)

// ─── Page: Shop ──────────────────────────────────────────────────────────────

const ShopPage: React.FC = () => {
  const [qty, setQty] = useState(3)
  return (
    <div>
      <SectionTitle>Shop</SectionTitle>
      <Block label="ShopListItem">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
          <ShopListItem name="Hylian Shield" price={3000} />
          <ShopListItem name="Ancient Arrow" price={90} hovered />
          <ShopListItem name="Mighty Elixir" price={150} />
        </div>
      </Block>
      <Block label="ShopPriceQuantity">
        <Row gap={24}>
          <ShopPriceQuantity price={90} quantity={5} />
          <ShopPriceQuantity price={3000} quantity={1} />
        </Row>
      </Block>
      <Block label="NumberInput">
        <Row gap={24}>
          <NumberInput value={qty} min={1} max={20} onChange={setQty} />
          <NumberInput value={1} min={1} max={99} />
        </Row>
      </Block>
    </div>
  )
}

// ─── Page: Settings ──────────────────────────────────────────────────────────

const SettingsPage: React.FC = () => {
  const [proMode, setProMode] = useState('On')
  const [lang, setLang] = useState('English')
  return (
    <div>
      <SectionTitle>Settings</SectionTitle>
      <Block label="SettingsToggle">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
          <SettingsToggle label="Pro HUD Mode" options={['On', 'Off']} value={proMode} onChange={setProMode} selected />
          <SettingsToggle label="Language" options={['English', '日本語', '中文']} value={lang} onChange={setLang} />
          <SettingsToggle label="Minimap" options={['On', 'Off']} value="Off" />
        </div>
      </Block>
    </div>
  )
}

// ─── Page: Decorations ───────────────────────────────────────────────────────

const DecorationsPage: React.FC = () => (
  <div>
    <SectionTitle>Decorations</SectionTitle>
    <Block label="TitleOrnament">
      <Row gap={24}>
        <TitleOrnament side="left" />
        <TitleOrnament side="right" />
        <TitleOrnament side="left" scale={1.5} />
      </Row>
    </Block>
    <Block label="DirectionalArrow">
      <Row gap={12}>
        <DirectionalArrow direction="up" variant="outline" />
        <DirectionalArrow direction="right" variant="solid" />
        <DirectionalArrow direction="down" variant="triangle" />
        <DirectionalArrow direction="left" variant="large" size={24} />
      </Row>
    </Block>
    <Block label="Starburst">
      <Row gap={24}>
        <Starburst size={100} />
        <Starburst size={60} />
      </Row>
    </Block>
    <Block label="TextOrnamentCorner">
      <div style={{ position: 'relative', width: 200, height: 120, border: '1px solid rgba(226,222,211,0.2)', borderRadius: 4 }}>
        <TextOrnamentCorner position="topLeft" />
        <TextOrnamentCorner position="topRight" style={{ position: 'absolute', top: 4, right: 4 }} />
        <TextOrnamentCorner position="bottomLeft" style={{ position: 'absolute', bottom: 4, left: 4 }} />
        <TextOrnamentCorner position="bottomRight" showTriforce style={{ position: 'absolute', bottom: 4, right: 4 }} />
      </div>
    </Block>
    <Block label="TimerOrnament">
      <Row gap={24}>
        <TimerOrnament side="left" />
        <TimerOrnament side="right" />
      </Row>
    </Block>
    <Block label="Logo">
      <Row gap={32} align="flex-start">
        <Logo variant="full" width={200} />
        <Logo variant="mark" width={48} />
      </Row>
    </Block>
  </div>
)

// ─── Page Router ─────────────────────────────────────────────────────────────

const renderPage = (key: string) => {
  switch (key) {
    case 'hud': return <HudPage />
    case 'menu': return <MenuPage />
    case 'titles': return <TitlesPage />
    case 'dialog': return <DialogPage />
    case 'quest': return <QuestPage />
    case 'controls': return <ControlsPage />
    case 'map': return <MapPage />
    case 'sheikah': return <SheikahPage />
    case 'common': return <CommonPage />
    case 'battle': return <BattlePage />
    case 'shop': return <ShopPage />
    case 'settings': return <SettingsPage />
    case 'decorations': return <DecorationsPage />
    default: return <HudPage />
  }
}

// ─── App ─────────────────────────────────────────────────────────────────────

const App: React.FC = () => {
  const getHash = () => window.location.hash.replace('#', '') || 'hud'
  const [active, setActive] = useState(getHash)

  useEffect(() => {
    const onHash = () => setActive(getHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (key: string) => {
    window.location.hash = key
    setActive(key)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#66645D' }}>
      {/* Sidebar */}
      <nav style={{
        width: 220, minWidth: 220, height: '100vh', position: 'sticky', top: 0,
        background: 'rgba(0,0,0,0.4)', borderRight: '1px solid rgba(226,222,211,0.1)',
        overflowY: 'auto', padding: '24px 0',
      }}>
        <div style={{ padding: '0 16px', marginBottom: 24 }}>
          <h1 style={{
            fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 18,
            color: '#E2DED3', letterSpacing: '0.04em', margin: 0,
          }}>Hyrule UI</h1>
          <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', marginTop: 4, fontStyle: 'italic' }}>Component Library</p>
        </div>
        <div style={{ padding: '0 8px' }}>
          <p style={{
            fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '0 8px', marginBottom: 4,
          }}>Components</p>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => navigate(cat.key)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  fontSize: 14, fontWeight: 500,
                  color: isActive ? '#E9E1D1' : 'rgba(233,225,209,0.6)',
                  background: isActive ? 'rgba(60,211,252,0.1)' : 'transparent',
                  padding: '8px 16px', borderRadius: 4,
                  border: 'none', cursor: 'pointer',
                  borderLeft: isActive ? '2px solid #3CD3FC' : '2px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.label}
                <span style={{ fontSize: 11, color: 'rgba(233,225,209,0.3)', marginLeft: 6 }}>
                  {cat.components.length}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px 40px', minWidth: 0 }}>
        {renderPage(active)}
      </main>
    </div>
  )
}

export default App
