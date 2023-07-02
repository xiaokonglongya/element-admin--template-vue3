import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
// @ts-ignore
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { queryUserInfo } from '@/api/user'
import { ref } from 'vue'
export const useUserStore = defineStore('user-store', () => {
  const auth_store = useAuthStore()
  const router = useRouter()
  const user_info = ref()
  const getUserInfo = async () => {
    try {
      const result = await queryUserInfo()
      if (result.code !== 0) throw new Error(result.message)
      user_info.value = result.result
    } catch (error) {}
  }

  const logout = async () => {
    try {
      await logout()
      auth_store.token = ''
      ElMessage.success('退出成功')
      router.push('/auth/account-login')
    } catch (error) {
      ElMessage.error('退出失败')
    }
  }
  return {
    logout,
    getUserInfo,
    user_info,
  }
})
