import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your GitHub repository name
  build: {
    outDir: 'dist'
  }
})