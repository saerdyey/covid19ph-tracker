import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://saerdyey.github.io/covid19ph-tracker/
export default defineConfig({
  base: '/covid19ph-tracker/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
