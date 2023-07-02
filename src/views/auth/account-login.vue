<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth'
import { useRouter } from 'vue-router'
import { login } from '@/api/auth'
import { useUserStore } from '@/store/modules/user'
const router = useRouter()
const _login = async () => {
  try {
    const result = await login({
      username: 'test',
      password: 'test',
    })
    if (result.code !== 0) {
      throw new Error(result.message)
    }
    useAuthStore().token = result.result.token
    await useUserStore().getUserInfo()
    router.push({ path: '/' })
  } catch (error) {
    window.$message.error(error instanceof Error ? error.message : '登录失败、请重试')
  }
}
</script>
<template>
  账号登陆
  <el-button @click="_login"> 登陆 </el-button>
</template>
