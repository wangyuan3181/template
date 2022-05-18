import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import label from './modules/label'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // label,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      // 指定需要持久化缓存的state
      // reducer(val) {
      //   return {
      //     key1: val.key1,
      //   }
      // },
    }),
  ],
})
