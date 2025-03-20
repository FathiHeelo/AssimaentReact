import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root:"./index.html",
  plugins: [react()],build: {
    rollupOptions: {
      external: ['bootstrap']
    }
    
  }
})

