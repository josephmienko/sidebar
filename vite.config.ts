import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    port: 3000, // Ensure the dev server runs on port 3000
  },
  build: {
    sourcemap: true, // Enable sourcemaps
  },
})
