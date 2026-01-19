import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // načtení env proměnných (pokud nějaké máš)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 🔑 KLÍČOVÉ pro GitHub Pages (repo name)
    base: '/Terragramy/',

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
    },

    server: {
      port: 5173,
      open: true,
    },

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})
