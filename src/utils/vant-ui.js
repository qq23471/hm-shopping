import Vue from 'vue'
// 按需引入需要使用的 Vant 组件
import { Toast, Tabbar, TabbarItem, NavBar } from 'vant'

// 注册 Vant 组件到 Vue 实例
Vue.use(Toast) // 消息提示组件
Vue.use(NavBar) // 导航栏组件
Vue.use(Tabbar) // 底部标签栏组件
Vue.use(TabbarItem) // 底部标签栏子项组件
