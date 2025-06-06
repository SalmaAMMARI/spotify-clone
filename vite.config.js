import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: [
        'firebase/auth',
        'firebase/app'
      ]
    }
  },
  optimizeDeps: {
    include: [
      'firebase/auth',
      'firebase/app'
    ]
  }
})