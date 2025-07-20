import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0'
  },
  preview: {
    allowedHosts: ['korol-serhii.onrender.com', 'localhost', '127.0.0.1']
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  define: {
    __BASE_URL__: JSON.stringify(process.env.NODE_ENV === 'production' ? './' : '/')
  }
}) 