import { useAuthStore } from '@/store/modules/auth'
const wihte_list = ['/auth/account-login']
import router from './index'
import { useTitle } from '@vueuse/core'
import { name } from '@/../package.json'
router.beforeEach(async (to, _, next) => {
  useTitle((name + to.meta.title) as string)
  const auth_store = useAuthStore()
  const token = auth_store.token
  if (!token && !wihte_list.includes(to.path)) {
    next('/auth/account-login')
  }
  next()
})
