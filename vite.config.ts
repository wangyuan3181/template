import { defineConfig, ConfigEnv, loadEnv, UserConfig } from 'vite'

import vue from '@vitejs/plugin-vue' // 提供 Vue 3 单文件组件支持
import vueJsx from '@vitejs/plugin-vue-jsx' // 提供 Vue 3 JSX 支持
import viteCompression from 'vite-plugin-compression' // 使用 gzip & brotli 来压缩资源
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 标签加上name
import ViteRestart from 'vite-plugin-restart' // 监听本文件修改，自动重启 vite 服务
import AutoImport from 'unplugin-auto-import/vite' // vue3等插件 hooks 自动引入
import legacy from '@vitejs/plugin-legacy' // 为打包后的文件提供传统浏览器兼容性支持
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 使用icons
import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers' // 组件按需引入

import { resolve } from 'path'
const CWD = process.cwd() // 项目根目录

export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD) // mode环境变量

  return {
    base: VITE_BASE_URL,
    // css: {
    //   modules: {
    //     localsConvention: 'camelCase', // 默认只支持驼峰，修改为同时支持横线和驼峰
    //   },
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "./src/styles/index.scss";',
    //     },
    //   },
    // },
    plugins: [
      vue(),
      vueJsx(),
      // viteCompression({
      //   verbose: true,
      //   disable: false,
      //   threshold: 10240,
      //   algorithm: 'gzip',
      //   ext: '.gz',
      // }), //  压缩
      vueSetupExtend(),
      ViteRestart({
        restart: ['my.config.[jt]s'],
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: 'src/auto-import.d.ts',
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      createSvgIconsPlugin({
        // 配置路径在你的src里的svg存放文件
        iconDirs: [resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[name]',
      }),
      Components({
        dts: true,
        dirs: ['src/components'], // 按需加载的文件夹
        resolvers: [AntDesignVueResolver()], // ElementPlus按需加载
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    // 打包配置
    build: {
      // 清除console和debugger
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 超大静态资源拆分
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
      chunkSizeWarningLimit: 600, // 打包大小超出警示 默认500KB 单位kb
      target: 'modules',
      polyfillModulePreload: true,
      outDir: 'dist', //指定输出路径
      assetsDir: 'static', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
    },
    optimizeDeps: {
      include: ['vue', 'vue-router'],
      exclude: ['vue-demi'],
    },
    server: {
      host: '0.0.0.0',
      port: 3186, // 设置服务启动端口号
      open: true,
      strictPort: false,
      https: false, // 支持https
      cors: true, // 允许跨域
      // 设置代理，根据项目实际情况配置
      proxy: {
        '/netbus': {
          target: 'https://fw.cnwaterservice.com.cn/',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/netbus/, '/'),
        },
      },
    },
  }
}
