import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const path = require("path")
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true, // 编译完成是否打开网页
    hot: true, // 开启热加载
    host: "0.0.0.0",
    port: 8088,
    proxy: {
      api: {
        target: process.env.VUE_API_DEV_TARGET, //API服务器的地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      }
      // http://www.web-jshtml.cn/api/vue3  /api/getCode
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/main.scss";'
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  lintOnSave: false
})