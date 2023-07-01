import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const errorRequestInterceptors = (config: InternalAxiosRequestConfig) => {
  return config
}
export const errorResponseInterceptors = (config: AxiosResponse) => {
  if (config.status === 200) {
  }
  return config
}
