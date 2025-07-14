import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@css":path.resolve(__dirname, "./src/css"),
      "@assets":path.resolve(__dirname, "./src/assets"),
      "@components":path.resolve(__dirname, "./src/components"),
    }
  }
})
