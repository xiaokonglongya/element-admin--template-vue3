import { useAuthStore } from '@/store/modules/auth'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const requestInterceptors = (config: InternalAxiosRequestConfig) => {
  const auth_store = useAuthStore()
  const token = auth_store?.token
  config.headers['Authorization'] = token
  return config
}
export const responseInterceptors = (config: AxiosResponse) => {
  return config.data
}
