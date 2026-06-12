<script lang="ts">
export interface SheikahSymbolProps {
  /** 是否仅显示轮廓 */
  outline?: boolean
  /** 尺寸（默认 380px） */
  size?: number
}
</script>

<script setup lang="ts">
import styles from '@react/components/sheikah/SheikahSymbol/sheikahSymbol.module.less'
import sheikahSymbolSvg from '@core/assets/svg/sheikah-symbol.svg'

const props = withDefaults(defineProps<SheikahSymbolProps>(), {
  outline: true,
  size: 380,
})
</script>

<template>
  <div
    :class="[styles.container, { [styles.outline]: props.outline }]"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  >
    <img :src="sheikahSymbolSvg" alt="Sheikah Symbol" :class="styles.symbol" />
  </div>
</template>
