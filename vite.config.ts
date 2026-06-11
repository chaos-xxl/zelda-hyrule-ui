import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    // lib 模式下 Vite 会强制内联所有资源，本插件绕过该限制，
    // 把字体/图片/SVG 等作为独立文件输出到 dist/files/
    libAssetsPlugin({
      outputPath: 'files',
      name: '[name].[contenthash:8].[ext]',
      limit: 0, // 所有资源都不内联，全部输出为独立文件
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `${format === 'es' ? 'es' : 'cjs'}/index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // 'use client' 指令：让 Next.js App Router 用户能直接 import 用了 hooks 的组件
        // （Toast/Modal 等），不必自己包一层客户端边界。
        banner: `'use client';`,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
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
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`,
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
    },
  },
})
