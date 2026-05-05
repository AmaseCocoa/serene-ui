import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import VueRouter from 'vue-router/vite'

export default defineConfig({
  plugins: [VueRouter(), vue(), tailwindcss(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.ts'),
      name: 'SereneUI',
      fileName: (format) => `serene-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' }
      }
    }
  }
})
