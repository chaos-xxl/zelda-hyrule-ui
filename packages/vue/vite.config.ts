import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // lib 模式下 Vite 会强制内联所有资源，本插件绕过该限制，
    // 把字体/图片/SVG 等作为独立文件输出到 dist/files/（与 react 包一致）
    libAssetsPlugin({
      outputPath: 'files',
      name: '[name].[contenthash:8].[ext]',
      limit: 0,
    }),
    // .vue 组件的类型声明（依赖 vue-tsc 提供的 @vue/language-core）
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types',
      entryRoot: 'src',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `${format === 'es' ? 'es' : 'cjs'}/index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'index.css'
          return assetInfo.name!
        },
      },
    },
    cssCodeSplit: false,
  },
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
      // 组件级样式单源：直接复用 react 包内同一份 .module.less
      '@react': resolve(__dirname, '../react/src'),
    },
  },
})
