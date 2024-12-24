import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { securityHeaders } from './src/utils/security'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      ...securityHeaders
    },
    proxy: {
      '/grammarly': {
        target: 'https://app.grammarly.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/grammarly/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          utils: ['@vercel/analytics', '@vercel/speed-insights']
        }
      }
    }
  }
})
