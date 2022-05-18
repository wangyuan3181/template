import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Basic = () => import('../Layouts/Basic.vue')

// 先识别所有的views/文件夹name/*.vue文件
// 这里限制性很高，只有路径为/views/文件夹name/*.vue，的文件才能背识别
const modules = import.meta.glob('../views/*/*.vue')
const loadComponent = (component: string) =>
  modules[`../views/${component}/${component}.vue`]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Basic,
    children: [
      {
        path: '/home',
        component: loadComponent('Home'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/myself',
        component: loadComponent('Myself'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  // history: createWebHistory(), // history 模式
  routes,
})

router.beforeEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
