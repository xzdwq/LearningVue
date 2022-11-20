import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

export default defineConfig({
  server: { port: 5173 },
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
