import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueTsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueTsx(), UnoCSS()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
