const INFO_KEY = 'hm_shopping_info'
// 获取用户信息
export const getUserInfo = () => {
  const res = localStorage.getItem(INFO_KEY)
  return res
    ? JSON.parse(res)
    : {
        token: '',
        userId: ''
      }
}

// 设置用户信息
export const setUserInfo = (userInfo) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(userInfo))
}

// 删除用户信息
export const removeUserInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
