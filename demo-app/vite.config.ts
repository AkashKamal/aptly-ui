import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwind()],
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  server: {
    port: 5174,
    strictPort: true
  }
})
