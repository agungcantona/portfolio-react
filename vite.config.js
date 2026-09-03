import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi Vite.
// base: './' membuat hasil build bisa dibuka dari subfolder mana pun
// (berguna kalau nanti di-upload ke subfolder di Hostinger).
export default defineConfig({
  plugins: [react()],
  base: './',
})
