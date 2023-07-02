export interface LoginParams {
  /*用户名*/
  username: string
  /*密码*/
  password: string
}

export interface LoginResultModel {
  avatar: string
  created_at: string
  email: string
  id: number
  nickname: string
  password: string
  phone: string
  role_ids: string
  sex: number
  status: number
  token: string
  updated_at: string
  username: string
}
