<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Card,
  Dialog,
  Divider,
  HealthBar,
  Loading,
  Modal,
  SheikahBackground,
  SheikahScanlines,
  SheikahSymbol,
  StaminaWheel,
} from '../src'

const modalOpen = ref(false)
const stamina = ref(0.75)
</script>

<template>
  <div style="background: #66645d; min-height: 100vh; padding: 40px; font-family: Roboto, sans-serif">
    <h1 style="color: #e9e1d1; font-family: 'Hylia Serif', Cinzel, serif; font-weight: 400">
      zelda-hyrule-ui-vue · MVP playground
    </h1>

    <!-- 风味起手式：SheikahBackground + Scanlines + Symbol -->
    <SheikahBackground color="darkBlue" style="margin-top: 24px">
      <SheikahScanlines animated :opacity="0.1" />
      <div style="position: relative; z-index: 1; padding: 40px; display: flex; gap: 40px; align-items: center">
        <SheikahSymbol :size="120" />
        <div>
          <h2 style="color: #e9e1d1; font-family: 'Hylia Serif', Cinzel, serif; font-weight: 400; margin: 0">
            Hyrule
          </h2>
          <p style="color: rgba(233, 225, 209, 0.6); font-style: italic">The Legend Continues — now in Vue 3</p>
        </div>
      </div>
    </SheikahBackground>

    <Divider variant="ornament" style="margin: 32px 0" />

    <!-- HUD -->
    <section style="display: flex; gap: 32px; align-items: center">
      <HealthBar :current="10" :max="13" :bonus="3" />
      <StaminaWheel :value="stamina" :size="70" />
      <StaminaWheel :value="0.15" :size="70" />
      <StaminaWheel :value="0.6" :size="70" bonus />
      <input v-model.number="stamina" type="range" min="0" max="1" step="0.05" />
    </section>

    <Divider variant="sheikah" style="margin: 32px 0" />

    <!-- Buttons -->
    <section style="display: flex; gap: 12px; flex-wrap: wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="sheikah">Sheikah</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="sheikah" loading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="sheikah" size="small">Small</Button>
      <Button variant="sheikah" size="large">Large</Button>
      <Button variant="primary" @click="modalOpen = true">Open Modal</Button>
    </section>

    <Divider variant="golden" style="margin: 32px 0" />

    <!-- Cards -->
    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px">
      <Card title="Default Card">Plain container.</Card>
      <Card variant="sheikah" title="Sheikah Slate">Distilling rune...</Card>
      <Card variant="item" title="Item" selected>Selected item card.</Card>
      <Card variant="golden" title="Golden">Quest reward.</Card>
    </section>

    <Divider variant="subtle" style="margin: 32px 0" />

    <!-- Dialog -->
    <section style="display: grid; gap: 24px">
      <Dialog type="speech" speaker="Old Man">It is dangerous to go alone. Take this.</Dialog>
      <Dialog type="sheikah" speaker="Sheikah Slate" :show-continue="false">Rune distilled. Magnesis ready.</Dialog>
    </section>

    <Divider variant="subtle" style="margin: 32px 0" />

    <!-- Loading -->
    <section style="display: flex; gap: 48px; align-items: center">
      <Loading size="small" />
      <Loading tip="Loading..." />
      <Loading size="large" tip="Opening shrine..." />
    </section>

    <!-- Modal -->
    <Modal :open="modalOpen" title="System" @close="modalOpen = false" @ok="modalOpen = false">
      Save and quit to the title screen?
    </Modal>
  </div>
</template>
