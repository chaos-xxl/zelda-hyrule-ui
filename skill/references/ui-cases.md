# 完整界面案例

> Reference for `skill/SKILL.md`. 5 个真实场景的完整组合代码。Agent 接到"做一个 X 页"的需求时，先在这里找最接近的整页模板。

### 9.1 标题屏（启动页）

```tsx
import { SheikahBackground, SheikahScanlines, SheikahSymbol, Button, Logo } from 'zelda-hyrule-ui'

export function TitleScreen({ onStart }: { onStart: () => void }) {
  return (
    <SheikahBackground color="darkBlue">
      <SheikahScanlines animated opacity={0.12} />
      <div style={{
        position: 'relative', zIndex: 1, minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 32,
      }}>
        <SheikahSymbol size={140} />
        <Logo variant="full" width={400} />
        <p style={{
          fontFamily: "'Hylia Serif', serif", fontSize: 18,
          color: 'rgba(233,225,209,0.6)', fontStyle: 'italic',
        }}>
          The Legend of Zelda: Breath of the Wild
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          <Button variant="sheikah" size="large" onClick={onStart}>Start Game</Button>
          <Button variant="primary" size="large">Continue</Button>
        </div>
      </div>
    </SheikahBackground>
  )
}
```

### 9.2 暂停菜单（HUD overlay）

```tsx
import {
  HealthBar, StaminaWheel, RupeeCounter, WeatherIcon, Temperature,
  DivineBeast, SheikahAbility, MenuSections, Modal, Button,
} from 'zelda-hyrule-ui'

export function PauseMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Paused" width={720}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* 顶部状态栏 */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <HealthBar current={10} max={13} bonus={3} />
          <StaminaWheel value={0.75} size={60} />
          <RupeeCounter amount={13878} />
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <WeatherIcon weather="rain" />
            <Temperature value="cold" />
          </div>
        </div>

        {/* 神兽 + 能力 */}
        <div>
          <p style={{ color: 'rgba(233,225,209,0.5)', fontSize: 11, letterSpacing: '0.1em', marginBottom: 8 }}>
            DIVINE BEASTS &amp; ABILITIES
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <DivineBeast beast="ruta" charges={1} />
            <DivineBeast beast="medoh" charges={3} />
            <DivineBeast beast="naboris" charges={2} />
            <DivineBeast beast="rudania" charges={1} />
            <div style={{ width: 1, height: 50, background: 'rgba(226,222,211,0.1)', margin: '0 8px' }} />
            <SheikahAbility ability="roundBomb" plus />
            <SheikahAbility ability="magnesis" />
            <SheikahAbility ability="stasis" plus />
            <SheikahAbility ability="cryonis" />
          </div>
        </div>

        {/* 菜单分类 */}
        <MenuSections activeSection="weapons" />

        {/* 操作按钮 */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={onClose}>Resume</Button>
          <Button variant="sheikah">Save</Button>
          <Button variant="danger">Quit</Button>
        </div>
      </div>
    </Modal>
  )
}
```

### 9.3 库存/物品页

```tsx
import { Card, MenuSections, ItemBG, Pagination, ItemEnchantment, Scrollbar, StatsStack } from 'zelda-hyrule-ui'

export function InventoryPage() {
  return (
    <Card variant="sheikah" title="Weapons">
      <MenuSections activeSection="weapons" />

      {/* 8x4 物品网格 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 60px)', gap: 6, marginTop: 16 }}>
        <ItemBG state="filled" size={60} />
        <ItemBG state="selected" size={60} />
        <ItemBG state="equipped" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="filled" size={60} />
        <ItemBG state="empty" size={60} />
        <ItemBG state="empty" size={60} />
        {/* ... 重复 */}
      </div>

      {/* 选中物品的属性 */}
      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        <StatsStack type="weapon" value={32} />
        <StatsStack type="armor" value={24} comparison={28} />
        <ItemEnchantment quality={3} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <Pagination totalPages={4} currentPage={1} />
        <Scrollbar location={1} maxSections={5} width={200} />
      </div>
    </Card>
  )
}
```

### 9.4 NPC 对话场景

```tsx
import { Dialog, DialogChoice, ControllerButton, ActionSet, TitleLocation } from 'zelda-hyrule-ui'
import { useState } from 'react'

export function DialogScene() {
  const [step, setStep] = useState(0)

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 顶部地点提示 */}
      <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)' }}>
        <TitleLocation name="Hateno Village" />
      </div>

      {/* 底部对话区 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 80px 40px' }}>
        {step === 0 && (
          <Dialog type="speech" speaker="Old Man">
            It is dangerous to go alone. Take this.
          </Dialog>
        )}
        {step === 1 && (
          <>
            <Dialog type="speech" speaker="Old Man">
              Will you accept this gift?
            </Dialog>
            <DialogChoice
              options={[
                { label: 'Yes, thank you', value: 'yes' },
                { label: 'No, I cannot', value: 'no' },
              ]}
              selectedIndex={0}
            />
          </>
        )}

        {/* 底部操作提示 */}
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
          <ActionSet actions={[
            { button: 'A', label: 'Continue' },
            { button: 'B', label: 'Skip' },
          ]} />
        </div>
      </div>
    </div>
  )
}
```

### 9.5 设置页

```tsx
import { Card, SettingsToggle, Divider, Button } from 'zelda-hyrule-ui'

export function SettingsPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 40 }}>
      <Card variant="sheikah" title="System Settings">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
          <SettingsToggle label="Mini-map" options={['ON', 'OFF']} value="ON" />
          <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
        </div>

        <Divider variant="sheikah" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="OFF" />
          <SettingsToggle label="Vibration" options={['ON', 'OFF']} value="ON" />
          <SettingsToggle label="Subtitles" options={['ON', 'OFF']} value="ON" />
        </div>

        <Divider variant="golden" />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <Button variant="ghost">Reset</Button>
          <Button variant="sheikah">Save</Button>
        </div>
      </Card>
    </div>
  )
}
```

---

