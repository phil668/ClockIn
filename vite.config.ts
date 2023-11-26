import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-pxtorem'
import pxtoviewport from 'postcss-px-to-viewport'
import UnoCSS from 'unocss/vite'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), UnoCSS(), components({
    resolvers: [VarletUIResolver()],
  }), autoImport({
    resolvers: [VarletUIResolver({ autoImport: true })],
  })],
  css: {
    postcss: {
      plugins: [
        // px2rem({
        //   rootValue: 43, // 1rem的大小
        //   propList: ['*', '!border'], // 需要转换的属性，这里选择全部都进行转换
        //   unitPrecision: 10,
        // }),
        pxtoviewport({
          viewportWidth: 375,
          unitPrecision: 6,
          unitToConvert: 'px',
          propList: ['*', '!border'],
        }),
      ],
    },
  },
})
