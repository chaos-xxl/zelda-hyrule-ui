import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 内部 dev playground（不发布）：npm run dev -w zelda-hyrule-ui-vue
export default defineConfig({
  plugins: [vue()],
  root: resolve(__dirname, 'dev'),
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, '../core/styles/variables.less')}";`,
      },
    },
    modules: {
      generateScopedName: 'zelda-[local]-[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, '../core'),
      '@react': resolve(__dirname, '../react/src'),
    },
  },
})
