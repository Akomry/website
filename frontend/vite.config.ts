import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue, { Options } from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import iconify from '@tomjs/vite-plugin-iconify'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
      iconify({
        resources: ['https://unpkg.com/@iconify/json/json'],
        rotate: 3000,
        local: ['ant-design', 'ep', 'mingcute'],
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
