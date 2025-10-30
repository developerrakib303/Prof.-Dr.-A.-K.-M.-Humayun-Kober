import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'
export default defineConfig({
  plugins: [
    react(), 
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  // Shudhu ei line-ti add kora hoyeche
  base: '/Prof.-Dr.-A.-K.-M.-Humayun-Kober/', 
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})