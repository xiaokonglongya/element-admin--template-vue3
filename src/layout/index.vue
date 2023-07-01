<script setup lang="ts">
import layoutHeader from './header.vue'
import SideBar from './sidebar/index.vue'
</script>
<template>
  <div class="flex w-[100%] h-[100%] bg-gray-100">
    <div class="sidler flex-shrink-0 w-[210px] w-[100%] overflow-hidden bg-white">
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
