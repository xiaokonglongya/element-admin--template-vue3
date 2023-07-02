import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ConfigState {
  // 侧边栏是否展开
  isExpand: boolean
  // 侧边栏是否显示logo
  isShowLogo: boolean
}
export const useConfigStore = defineStore(
  'config-store',
  () => {
    const config = ref<ConfigState>({
      isExpand: true,
      isShowLogo: true,
    })
    return {
      config,
    }
  },
  {
    persist: true,
  }
)
