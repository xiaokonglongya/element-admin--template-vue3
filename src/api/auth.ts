import request from '@/utils/http/request'
export const login = () => {
  return request<{ uid: string }>({
    url: '/login',
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
        menu: {
          visible: true,
        },
      },
    },
  ])
}
