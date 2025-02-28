const INFO_KEY = 'hm_shopping_info'
const SEARCH_HISTORY_KEY = 'hm_shopping_search_history'
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

// 获取搜索历史
export const getSearchHistory = () => {
  const res = localStorage.getItem(SEARCH_HISTORY_KEY)
  return res ? JSON.parse(res) : []
}

// 设置搜索历史
export const setSearchHistory = (history) => {
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history))
}

// 删除搜索历史
export const removeSearchHistory = () => {
  localStorage.removeItem(SEARCH_HISTORY_KEY)
}
