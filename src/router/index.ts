/**
 * vue route 路由管理
 * 地址：https://next.router.vuejs.org/
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routers.ts'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savaPosition) {
    return {
      top: 0,
    }
  },
})
export default router
