import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts:['5173-kathiravanbaskaran-sampl-06affetakm.app.codeanywhere.com']
  },
  plugins: [react()],
})
