<script setup lang="ts">
import Logo from './logo.vue'
import Menu from './menu.tsx'
</script>
<template>
  <div class="flex flex-col">
    <div class="flex-shrink-0">
      <logo />
    </div>
    <div class="">
      <!-- 60px 是logo的高度 -->
      <el-scrollbar height="calc(100vh - 60px)">
        <Menu />
      </el-scrollbar>
    </div>
  </div>
</template>
