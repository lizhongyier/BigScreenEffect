import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import path from "path"; // 这个path用到了安装的@types/node
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock'

// 你也可以使用 unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// // 或者使用 unplugin-element-plus
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // console.log(mode)
  const env = loadEnv(mode, process.cwd());
  const { VITE_API_BASE_URL } = env;
  // console.log(env)
  // console.log(VITE_API_BASE_URL)
  return {
    plugins: [vue(), Components({
      resolvers: [VantResolver()],
    }), viteMockServe(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          // directives: true,
          // version: "2.1.5",
        }),
      ],
    }),
    ],
    base: VITE_API_BASE_URL || '/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") // @代替src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element.scss" as *;`
        }
      }
    },
    server: {
      port: 4000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
  }
})
