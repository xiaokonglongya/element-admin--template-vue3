import request from '@/utils/http/request'

export const queryUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET',
  })
}

export const logout = () => {
  return request({
    url: '/logout',
    method: 'get',
  })
}
