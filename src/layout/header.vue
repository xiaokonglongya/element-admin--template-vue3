<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { Expand } from '@element-plus/icons-vue'
import { useConfigStore } from '@/store/modules/config'
import { useRouter } from 'vue-router'
const global_config = useConfigStore()
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
const switchExpand = () => {
  global_config.config.isExpand = !global_config.config.isExpand
}
</script>
<template>
  <div class="main-header px-[12px] h-[100%] bg-blue-500 flex justify-between items-center">
    <div>
      <el-icon
        class="cursor-pointer menu-icon"
        :class="{
          expand: global_config.config.isExpand,
        }"
        size="22"
        color="#fff"
        @click="switchExpand"
      >
        <Expand
      /></el-icon>
    </div>
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
<style scoped>
.menu-icon {
  transition: all 0.2s;
}
.expand {
  transform: rotate(90deg);
}
</style>
