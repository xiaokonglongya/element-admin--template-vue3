import { useAuthStore } from '@/store/modules/auth'
const wihte_list = ['/auth/account-login']
/**
 * vue route路由拦截中间件
 */
import router from './index'
router.beforeEach(async (to, _, next) => {
  const auth_store = useAuthStore()
  const token = auth_store.token
  if (!token && !wihte_list.includes(to.path)) {
    next('/auth/account-login')
  }
  next()
})
