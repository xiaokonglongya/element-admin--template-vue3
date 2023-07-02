<script setup lang="ts">
import { useConfigStore } from '@/store/modules/config'
import Logo from './logo.vue'
import Menu from './menu.tsx'
const global_config = useConfigStore()
</script>
<template>
  <div class="flex flex-col">
    <div class="flex-shrink-0" v-if="global_config.config.isShowLogo">
      <logo />
    </div>
    <div class="sidbar overflow-hidden">
      <!-- 60px 是logo的高度 -->
      <el-scrollbar height="calc(100vh - 60px)">
        <Menu />
      </el-scrollbar>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
