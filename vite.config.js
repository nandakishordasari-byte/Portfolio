import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1';
  return {
    plugins: [react()],
    base: isVercel || command === 'serve' ? '/' : '/My-Portfolio/',
    server: {
      port: 5005
    }
  }
})

