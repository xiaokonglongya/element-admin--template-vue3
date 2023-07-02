<script setup lang="ts">
import { useConfigStore } from '@/store/modules/config'
import layoutHeader from './header.vue'
import SideBar from './sidebar/index.vue'
const global_config = useConfigStore()
</script>
<template>
  <div class="flex w-[100%] h-[100%] bg-gray-100">
    <div
      class="sidler flex-shrink-0 overflow-hidden bg-white transition-width duration-200"
      :class="[global_config.config.isExpand ? 'w-[60px]' : 'w-[210px]']"
    >
      <side-bar />
    </div>
    <div class="main-container flex-1 flex flex-col">
      <div class="flex-shrink-0 h-[48px]">
        <layout-header />
      </div>
      <div class="flex-1 min-h-[1px] overflow-scroll min-w-[500px] p-[20px]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
