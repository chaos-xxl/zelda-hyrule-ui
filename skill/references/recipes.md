# 常见配方（Recipes）

> Reference for `skill/SKILL.md`. 把"场景 → 组件组合"写成查询表，Agent 拼装区块时按此抄，不用凭空发明。

### 游戏 HUD（屏幕 overlay）

```tsx
// 左上角：心心 + 精力
<div style={{ position: 'fixed', top: 24, left: 24, display: 'flex', gap: 16 }}>
  <HealthBar current={10} max={13} bonus={3} />
  <StaminaWheel value={0.75} size={60} />
</div>

// 右上角：卢比
<div style={{ position: 'fixed', top: 24, right: 24 }}>
  <RupeeCounter amount={13878} />
</div>

// 右下角：天气 + 温度 + 噪音
<div style={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', gap: 12 }}>
  <WeatherIcon weather="rain" />
  <Temperature value="cold" />
  <SoundMeter level="low" />
</div>
```

### 任务追踪面板

```tsx
<Card variant="sheikah" title="Active Quests">
  <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
  <QuestListItem title="Robbie's Research" location="Akkala Lab" questType="side" />
  <QuestListItem title="The Stolen Heirloom" location="Kakariko" questType="shrine" state="completed" />
</Card>
```

### 对话场景（NPC）

```tsx
<div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '0 80px 40px' }}>
  <Dialog type="speech" speaker="Old Man">
    It is cold here. You should find warm clothes.
  </Dialog>
  <DialogChoice
    options={[
      { label: 'Yes, please', value: 'yes' },
      { label: 'No, I\'m fine', value: 'no' },
    ]}
    selectedIndex={0}
  />
</div>
```

### 库存/物品菜单

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6 }}>
  <ItemBG state="filled" />
  <ItemBG state="selected" />
  <ItemBG state="equipped" />
  <ItemBG state="empty" />
  {/* ... 重复填满 */}
</div>
<MenuSections activeSection="weapons" />
<Pagination totalPages={4} currentPage={1} />
```

### 商店界面

```tsx
<Card variant="default" title="Beedle's Shop">
  <ShopListItem name="Hylian Shield" price={3000} />
  <ShopListItem name="Ancient Arrow" price={90} hovered />
  <ShopListItem name="Mighty Elixir" price={150} />
</Card>
<RupeeCounter amount={13878} />
```

### 神兽 / 能力栏

```tsx
<div style={{ display: 'flex', gap: 16 }}>
  <DivineBeast beast="ruta" charges={1} />
  <DivineBeast beast="medoh" charges={3} />
  <DivineBeast beast="naboris" charges={2} />
  <DivineBeast beast="rudania" charges={1} />
</div>
<div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
  <SheikahAbility ability="roundBomb" plus />
  <SheikahAbility ability="magnesis" />
  <SheikahAbility ability="stasis" plus />
  <SheikahAbility ability="cryonis" />
</div>
```

### 设置页

```tsx
<Card variant="sheikah" title="System Settings">
  <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
  <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
  <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="OFF" />
</Card>
```

### 加载/启动屏

```tsx
<SheikahBackground color="darkBlue">
  <SheikahScanlines animated opacity={0.12} />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <SheikahSymbol size={120} />
    <Loading />
    <p style={{ color: '#E9E1D1', fontStyle: 'italic', marginTop: 24 }}>Loading Hyrule...</p>
  </div>
</SheikahBackground>
```

### 地图标记群

```tsx
<div style={{ position: 'relative', width: 800, height: 600, background: '#66645D' }}>
  <MapHeroLocation rotation={45} vision style={{ position: 'absolute', top: '50%', left: '50%' }} />
  <MapBeacon color="blue" flare style={{ position: 'absolute', top: 100, left: 200 }} />
  <MapIcon icon="shrine" style={{ position: 'absolute', top: 300, left: 450 }} />
  <MapIcon icon="tower" style={{ position: 'absolute', top: 150, left: 600 }} />
  <MapQuestMarker pulse style={{ position: 'absolute', top: 400, left: 300 }} />
</div>
```

---

