import React from 'react'
import {
  Button, Card, Dialog, Divider,
  HealthBar, StaminaWheel, WeatherIcon, RupeeCounter, DivineBeast,
  SheikahAbility, Temperature, SoundMeter,
  SheikahBackground, SheikahScanlines, SheikahSymbol, SheikahTextTitle,
  TitleLocation,
  QuestListItem,
  MapIcon, ItemBG, MenuSections,
  ItemEnchantment,
  Logo,
} from '../src'
import '../src/styles/global.less'

// ─── App ─────────────────────────────────────────────────────────────────────

const App: React.FC = () => {

  return (
    <div style={{ background: '#66645D', minHeight: '100vh' }}>

      {/* ═══════ HERO SECTION ═══════ */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', minHeight: 500, overflow: 'hidden' }}>
        <SheikahBackground color="darkBlue">
          <SheikahScanlines animated opacity={0.08} />
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
            Drop SKILL.md into Cursor and say "build in Zelda style" — pixel-perfect output.
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
            <span style={{ color: '#6FD49C' }}>import</span> {'{ Button, Card }'} <span style={{ color: '#6FD49C' }}>from</span> <span style={{ color: '#E2D146' }}>'zelda-hyrule-ui'</span>
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
}

export default App
