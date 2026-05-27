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

// ─── Types ───────────────────────────────────────────────────────────────────

interface CategoryDef {
  id: string
  label: string
  components: string[]
}

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES: CategoryDef[] = [
  { id: 'hud', label: 'HUD', components: ['HealthBar', 'StaminaWheel', 'WeatherIcon', 'RupeeCounter', 'DivineBeast', 'SheikahAbility', 'RupeeType', 'Temperature', 'SoundMeter', 'Sensor', 'EffectDuration', 'BonusEffectIcon'] },
  { id: 'menu', label: 'Menu', components: ['MenuSections', 'ItemBG', 'Pagination', 'ModalButton', 'Scrollbar', 'ModalTimer', 'StatsStack'] },
  { id: 'titles', label: 'Titles', components: ['TitleLocation', 'TitleQuest', 'TitleShrine', 'TitleLocationLarge', 'TitlePointOfInterest'] },
  { id: 'dialog', label: 'Dialog', components: ['Dialog', 'DialogChoice', 'DialogFloating'] },
  { id: 'quest', label: 'Quest', components: ['QuestListItem', 'QuestDescription', 'QuestTypeIcon', 'QuestNotification'] },
  { id: 'controls', label: 'Controls', components: ['ControllerButton', 'ActionSet'] },
  { id: 'map', label: 'Map', components: ['MapIcon', 'MapBeacon', 'MapQuestMarker', 'MapLocationName', 'MapCursor', 'MapHeroLocation'] },
  { id: 'sheikah', label: 'Sheikah', components: ['SheikahSymbol', 'SheikahBackground', 'SheikahScanlines', 'SheikahRune', 'SheikahCompendiumEntry', 'SheikahTextTitle', 'SheikahCompendiumFilters', 'SheikahAlbumButton'] },
  { id: 'common', label: 'Common', components: ['Button', 'Card', 'Modal', 'Divider', 'Loading', 'Toast'] },
  { id: 'battle', label: 'Battle', components: ['ItemEnchantment', 'StatusHealing', 'AimingReticle', 'AttackDefenseValues'] },
  { id: 'shop', label: 'Shop', components: ['ShopListItem', 'ShopPriceQuantity', 'NumberInput'] },
  { id: 'settings', label: 'Settings', components: ['SettingsToggle'] },
  { id: 'decorations', label: 'Decorations', components: ['TitleOrnament', 'DirectionalArrow', 'Starburst', 'TextOrnamentCorner', 'TimerOrnament', 'Logo'] },
]

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = {
  sidebar: {
    position: 'fixed' as const, top: 0, left: 0, bottom: 0, width: 260,
    background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
    overflowY: 'auto' as const, zIndex: 100, borderRight: '1px solid rgba(60,211,252,0.15)',
  },
  sidebarHome: {
    display: 'block', padding: '16px 20px', color: '#3CD3FC',
    fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 14,
    textDecoration: 'none', borderBottom: '1px solid rgba(233,225,209,0.1)',
    cursor: 'pointer', background: 'none', border: 'none', width: '100%', textAlign: 'left' as const,
  },
  categoryTitle: {
    fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 11,
    color: 'rgba(233,225,209,0.4)', letterSpacing: '0.12em',
    textTransform: 'uppercase' as const, padding: '16px 20px 6px',
  },
  navItem: {
    display: 'block', padding: '8px 20px', color: '#E9E1D1',
    fontSize: 13, fontStyle: 'italic', cursor: 'pointer',
    background: 'none', border: 'none', borderLeft: '2px solid transparent',
    width: '100%', textAlign: 'left' as const, transition: 'all 0.15s',
  },
  navItemActive: {
    borderLeft: '2px solid #3CD3FC', background: 'rgba(60,211,252,0.1)',
    color: '#3CD3FC',
  },
  mainContent: {
    marginLeft: 260, padding: '32px 40px', minHeight: '100vh',
  },
  demoCard: {
    background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(233,225,209,0.08)',
    borderRadius: 4, padding: 24, marginBottom: 16,
  },
  demoRow: {
    display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' as const,
  },
  componentTitle: {
    fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 18,
    color: '#E9E1D1', marginBottom: 16,
  },
}

// ─── Demo Section Renderer ───────────────────────────────────────────────────

const DemoSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={`section-${id}`} style={{ marginBottom: 48 }}>
    <h3 style={styles.componentTitle}>{title}</h3>
    <div style={styles.demoCard}>
      <div style={styles.demoRow}>{children}</div>
    </div>
  </section>
)

// ─── Docs Page ───────────────────────────────────────────────────────────────

const DocsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('hud')
  const [modalOpen, setModalOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const el = document.getElementById(`category-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#66645D', minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <SheikahBackground color="darkBlue" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <SheikahScanlines opacity={0.04} />
        </SheikahBackground>
        <button style={styles.sidebarHome} onClick={() => { window.location.hash = '' }}>
          ← Home
        </button>
        {CATEGORIES.map((cat) => (
          <div key={cat.id}>
            <div style={styles.categoryTitle}>{cat.label}</div>
            {cat.components.map((comp) => (
              <button
                key={comp}
                style={{
                  ...styles.navItem,
                  ...(activeCategory === cat.id ? styles.navItemActive : {}),
                }}
                onClick={() => scrollToCategory(cat.id)}
              >
                {comp}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h1 style={{ fontFamily: "'Hylia Serif', 'Cinzel', serif", fontSize: 32, color: '#E9E1D1', marginBottom: 8 }}>
          Component Documentation
        </h1>
        <p style={{ color: 'rgba(233,225,209,0.5)', fontStyle: 'italic', marginBottom: 40 }}>
          All 84 components with live demos
        </p>

        {/* ═══ HUD ═══ */}
        <div id="category-hud">
          <SheikahTextTitle title="HUD" description="Heads-up display elements" />
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
          <SheikahTextTitle title="Menu" description="Inventory and menu UI elements" />
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
          <SheikahTextTitle title="Titles" description="Location and quest title overlays" />
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
          <SheikahTextTitle title="Dialog" description="Speech and system dialogs" />
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
          <SheikahTextTitle title="Quest" description="Quest tracking and notifications" />
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
          <SheikahTextTitle title="Controls" description="Controller button prompts" />
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
          <SheikahTextTitle title="Map" description="Map markers and navigation" />
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
          <SheikahTextTitle title="Sheikah" description="Sheikah Slate themed components" />
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
          <SheikahTextTitle title="Common" description="General-purpose UI components" />
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
          <SheikahTextTitle title="Battle" description="Combat-related UI elements" />
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
          <SheikahTextTitle title="Shop" description="Shop and trading UI" />
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
          <SheikahTextTitle title="Settings" description="System settings controls" />
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
          <SheikahTextTitle title="Decorations" description="Ornamental and decorative elements" />
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
            <DemoSection id="illustration" title="Illustration">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ position: 'relative', height: 150, background: '#66645D', borderRadius: 4, overflow: 'hidden' }}>
                  <Illustration illustration="sword" opacity={0.5} />
                </div>
                <div style={{ position: 'relative', height: 150, background: '#66645D', borderRadius: 4, overflow: 'hidden' }}>
                  <Illustration illustration="rupee" opacity={0.5} />
                </div>
                <div style={{ position: 'relative', height: 150, background: '#66645D', borderRadius: 4, overflow: 'hidden' }}>
                  <Illustration illustration="slate" opacity={0.5} />
                </div>
                <div style={{ position: 'relative', height: 150, background: '#66645D', borderRadius: 4, overflow: 'hidden' }}>
                  <Illustration illustration="memories" opacity={0.5} />
                </div>
              </div>
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
    <section style={{ position: 'relative', width: '100%', height: '70vh', minHeight: 500, overflow: 'hidden' }}>
      <SheikahBackground color="darkBlue">
        <SheikahScanlines animated opacity={0.08} />
        <Illustration illustration="sword" opacity={0.15} />
        <div style={{
          position: 'relative', zIndex: 1, height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '48px 24px', textAlign: 'center',
        }}>
          <SheikahSymbol size={100} outline={false} />
          <h1 style={{
            fontFamily: "'Hylia Serif', 'Cinzel', serif",
            fontSize: 56, color: '#E2DED3', margin: '24px 0 8px',
            letterSpacing: '0.04em',
            textShadow: '0 0 20px rgba(0,0,0,0.5), 0 0 14px rgba(226,222,211,0.3)',
          }}>
            zelda-hyrule-ui
          </h1>
          <p style={{
            fontSize: 18, fontWeight: 500, fontStyle: 'italic',
            color: 'rgba(233,225,209,0.7)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 32px',
          }}>
            84 React components inspired by The Legend of Zelda: Breath of the Wild.
            Dark theme, Sheikah glow effects, and AI-consumable design specs.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
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
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '64px 24px' }}>
      <SheikahTextTitle title="Features" description="Why choose zelda-hyrule-ui?" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 32 }}>
        <Card variant="sheikah" title="84 Components">
          Full coverage of the BOTW UI Kit — HUD, menus, dialogs, maps, quests, and more.
        </Card>
        <Card variant="golden" title="AI-Ready">
          Drop SKILL.md into Cursor and say &quot;build in Zelda style&quot; — pixel-perfect output.
        </Card>
        <Card variant="default" title="Dark Theme">
          Sheikah blue glows, double-border structure, warm-white text on dark backgrounds.
        </Card>
        <Card variant="sheikah" title="Figma Precision">
          Every SVG path exported directly from the community Figma UI Kit.
        </Card>
        <Card variant="golden" title="TypeScript">
          Full type definitions for all 84 components. IntelliSense out of the box.
        </Card>
        <Card variant="default" title="Lightweight">
          ~112KB ESM, tree-shakeable. Assets externalized via vite-plugin-lib-assets.
        </Card>
      </div>
    </section>

    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
      <Divider variant="sheikah" />
    </div>

    {/* ═══════ LIVE COMPONENT PREVIEW ═══════ */}
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
      <SheikahTextTitle title="Component Preview" description="Real components rendered live" />

      {/* HUD Row */}
      <div style={{ marginTop: 32, marginBottom: 24 }}>
        <p style={{ fontSize: 11, color: 'rgba(233,225,209,0.4)', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>HUD ELEMENTS</p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
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
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
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
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
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
    </section>

    {/* ═══════ VIEW ALL COMPONENTS BUTTON ═══════ */}
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px 48px', textAlign: 'center' }}>
      <Button variant="sheikah" onClick={() => { window.location.hash = '#/docs' }}>
        View All Components →
      </Button>
    </section>

    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
      <Divider variant="golden" />
    </div>

    {/* ═══════ INSTALLATION ═══════ */}
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
      <SheikahTextTitle title="Installation" description="Get started in 30 seconds" />
      <div style={{ marginTop: 32 }}>
        <Dialog type="sheikah" speaker="Terminal" showContinue={false}>
          <span style={{ color: '#6FD49C' }}>npm install</span> zelda-hyrule-ui
        </Dialog>
      </div>
      <div style={{ marginTop: 24 }}>
        <Dialog type="speech" speaker="App.tsx" showContinue={false}>
          <span style={{ color: '#6FD49C' }}>import</span> {'{ Button, Card }'} <span style={{ color: '#6FD49C' }}>from</span> <span style={{ color: '#E2D146' }}>&apos;zelda-hyrule-ui&apos;</span>
        </Dialog>
      </div>
    </section>

    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
      <Divider variant="ornament" />
    </div>

    {/* ═══════ AI USAGE ═══════ */}
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
      <SheikahTextTitle title="AI-Powered" description="Works with Cursor, Copilot, and v0" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 32 }}>
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
    </section>

    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
      <Divider variant="sheikah" />
    </div>

    {/* ═══════ FOOTER ═══════ */}
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px', textAlign: 'center' }}>
      <Logo variant="mark" width={40} />
      <p style={{
        fontFamily: "'Hylia Serif', 'Cinzel', serif",
        fontSize: 20, color: '#E2DED3', margin: '16px 0 8px',
      }}>
        zelda-hyrule-ui
      </p>
      <p style={{ fontSize: 13, color: 'rgba(233,225,209,0.4)', fontStyle: 'italic', marginBottom: 24 }}>
        MIT License — Fan creation for learning purposes only.
        All Zelda trademarks belong to Nintendo.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
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

// ─── App with Hash Routing ───────────────────────────────────────────────────

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'docs'>(() => {
    const hash = window.location.hash
    return hash === '#/docs' ? 'docs' : 'landing'
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      setPage(hash === '#/docs' ? 'docs' : 'landing')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page === 'docs' ? <DocsPage /> : <LandingPage />
}

export default App
