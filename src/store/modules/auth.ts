import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore(
  'auth-store',
  () => {
    const token = ref('')

    return { token }
  },
  {
    persist: true,
  }
)
