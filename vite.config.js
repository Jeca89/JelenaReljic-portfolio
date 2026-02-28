import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/JelenaReljic-portfolio/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify('/JelenaReljic-portfolio')
  }
})