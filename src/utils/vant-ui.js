import Vue from 'vue'
// 按需引入需要使用的 Vant 组件
import { Icon, Toast, Tabbar, TabbarItem, NavBar, Search, Swipe, SwipeItem, Grid, GridItem, Rate } from 'vant'

Vue.use(Rate)
// 注册 Vant 组件到 Vue 实例
Vue.use(Toast) // 消息提示组件
Vue.use(NavBar) // 导航栏组件
Vue.use(Tabbar) // 底部标签栏组件
Vue.use(TabbarItem) // 底部标签栏子项组件
Vue.use(Search) // 搜索组件
Vue.use(Swipe) // 轮播图组件
Vue.use(SwipeItem) // 轮播图子项组件
Vue.use(Grid) // 宫格组件
Vue.use(GridItem) // 宫格子项组件
Vue.use(Icon) // 图标组件
