import { RouteRecordRaw } from 'vue-router'
import router from './index'
export const addRouter = (routers: RouteRecordRaw[]) => {
  routers.forEach((_r) => {
    router.addRoute('layout', _r)
  })
  router.options.routes[0].children?.push(...routers)
}
