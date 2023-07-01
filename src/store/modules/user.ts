import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export const useUserStore = defineStore('user-store', () => {
  const auth_store = useAuthStore()
  const router = useRouter()
  const logout = async () => {
    try {
      auth_store.token = ''
      ElMessage.success('退出成功')
      router.push('/auth/account-login')
    } catch (error) {
      ElMessage.error('退出失败')
    }
  }
  return {
    logout,
  }
})
