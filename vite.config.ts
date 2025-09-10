import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/library/', // 👈 this makes all assets use the right path on GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
