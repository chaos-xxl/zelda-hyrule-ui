import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',
  build: {
    outDir: 'demo-dist',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'packages/core/styles/variables.less')}";`,
      },
    },
    modules: {
      generateScopedName: 'zelda-[local]-[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages/react/src'),
      '@core': resolve(__dirname, 'packages/core'),
    },
  },
})
