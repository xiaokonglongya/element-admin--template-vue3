import axios, { type AxiosRequestConfig } from 'axios'
import { requestInterceptors, responseInterceptors } from './interceptors'
import { errorRequestInterceptors, errorResponseInterceptors } from './interceptors-errors'
console.log(import.meta.env)
const service = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  timeout: 1000 * 60 * 2,
})
service.interceptors.request.use(requestInterceptors, errorRequestInterceptors)
service.interceptors.response.use(responseInterceptors, errorResponseInterceptors)
const request = <T>(config: AxiosRequestConfig) => {
  return service.request<
    T,
    {
      code: number
      message: string
      result: T
    }
  >(config)
}

export default request
