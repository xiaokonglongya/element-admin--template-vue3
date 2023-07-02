import { LoginParams, LoginResultModel } from '@/types/auth'
import request from '@/utils/http/request'
import { House } from '@element-plus/icons-vue'

/**
 * 登陆
 * @param body
 * @returns
 */
export const login = (body: LoginParams) => {
  return request<LoginResultModel>({
    url: '/login',
    method: 'POST',
    data: body,
  })
}
export const getRouter = () => {
  return Promise.resolve([
    {
      path: '/dynamic/home',
      name: 'dynamic-home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '动态加载首页',
        icon: House,
        menu: {
          visible: true,
        },
      },
    },
  ])
}
