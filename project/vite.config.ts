import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/project-bolt-callingconventions/",
  plugins: [react()],
  build: {
    outDir: "dist"
  }
})
