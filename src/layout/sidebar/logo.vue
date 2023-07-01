<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push({ path: '/' })
}
</script>
<template>
  <div class="sider-logo p-x-[30px] h-[60px] flex items-center" @click="goHome">
    <img src="https://element-plus.org/images/element-plus-logo.svg" alt="" />
  </div>
</template>
