<script setup lang="ts">
import { useConfigStore } from '@/store/modules/config'
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push({ path: '/' })
}
const global_config = useConfigStore()
</script>
<template>
  <div class="sider-logo h-[60px] flex items-center justify-center" @click="goHome">
    <img
      class="transition-width duration-200"
      :class="[global_config.config.isExpand ? 'w-[40px]' : 'w-[120px]']"
      src="https://element-plus.org/images/element-plus-logo.svg"
      alt=""
    />
  </div>
</template>
