<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'

const user_store = useUserStore()
const router = useRouter()

const pushInfo = () => {
  router.push({
    name: 'user-info',
  })
}

const logout = () => {
  user_store.logout()
}
</script>
<template>
  <div class="main-header h-[100%] bg-blue-500 flex justify-end items-center">
    <el-dropdown>
      <el-avatar class="mr-3" :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="pushInfo">个人信息</el-dropdown-item>
          <el-dropdown-item divided @click="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
