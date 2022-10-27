import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import postCssPxRem from 'postcss-pxtorem'
console.log(" path.resolve(__dirname, 'src')", path.resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
      }
    },
    postcss: {
      plugins: [
        postCssPxRem({
          rootValue: 32,
          propList: ['*'],
          selectorBlackList: ['adm-', ':root']
        })
      ]
    }
  }
})
