import { useAuthStore } from '@/store/modules/auth'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const requestInterceptors = (config: InternalAxiosRequestConfig) => {
  const auth_store = useAuthStore()
  const token = auth_store?.token
  config.headers['Access-Token'] = token
  return config
}
export const responseInterceptors = (config: AxiosResponse) => {
  if (import.meta.env.MODE === 'mock') {
    config.data.code = 0
  }
  return config.data
}
