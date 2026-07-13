import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages serves this repo under /Bahadir-Giyim/, but the production
// domain (bahadirgiyim.com) serves it from the root — only the Pages CI
// build sets DEPLOY_TARGET=pages, so a plain `npm run build` here stays
// root-relative for cPanel/public_html.
export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'pages' ? '/Bahadir-Giyim/' : '/',
  plugins: [react(), tailwindcss()],
})
