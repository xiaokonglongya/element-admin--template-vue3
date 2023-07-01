<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const login = () => {
  useAuthStore().token = '123'
  router.push({ path: '/' })
}
</script>
<template>
  账号登陆
  <el-button @click="login"> 登陆 </el-button>
</template>
