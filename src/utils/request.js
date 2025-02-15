import axios from 'axios'
import { Toast } from 'vant'

// 创建 axios 实例，配置基础参数
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api', // 接口基础路径
  timeout: 5000, // 请求超时时间
  headers: { platform: 'H5 ' } // 设置请求头，标识来自 H5 平台
})

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 展示加载提示
    Toast.loading({
      message: '加载中...',
      forbidClick: true, // 禁止背景点击
      loadingType: 'spinner', // 加载图标类型
      duration: 0 // 持续展示，不自动关闭
    })
    return config
  },
  function (error) {
    // 请求发送失败的错误处理
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 获取接口返回数据
    const res = response.data
    if (res.status === 200) {
      // 请求成功，清除加载提示
      Toast.clear()
      return res
    } else {
      // 业务失败，显示错误信息
      Toast(res.message)
      return Promise.reject(res.message)
    }
  },
  function (error) {
    // HTTP 请求失败的错误处理
    return Promise.reject(error)
  }
)

export default instance
