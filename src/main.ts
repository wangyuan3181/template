import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-global-api' // unplugin-auto-import的继承者，解决因自动导入导致的eslint报错
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

import '@/assets/styles/reset.scss'

// createApp(App).mount('#app')
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(router).use(store).mount('#app')
