import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { House, Setting } from '@element-plus/icons-vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: {
      name: 'home-index-1',
    },
    children: [
      {
        path: '/home/index',
        name: 'home-index-1',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: House },
        children: [
          {
            path: '/home/index/1',
            name: 'home-index-1',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '首页1', icon: House },
          },
          {
            path: '/home/index/2',
            name: 'home-index-2',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '首页1', icon: Setting },
          },
        ],
      },
      {
        path: '/home2/index/2',
        name: 'home2-index-2',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页2-1', icon: House },
      },
      {
        path: '/user/info-page',
        name: 'user-info-page',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '个人信息', icon: House },
      },
    ],
  },

  {
    path: '/auth',
    name: 'auth',
    children: [
      {
        path: '/auth/account-login',
        name: 'auth-account-login',
        component: () => import('@/views/auth/account-login.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: {
      name: 'user-info',
    },
    children: [
      {
        path: '/user/index',
        name: 'user-info',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '用户', keepAlive: false, tabbar: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: { path: '/' },
  },
]
export default routes
