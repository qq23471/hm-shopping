import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui' // 引入 Vant UI 组件
import '@/styles/common.less' // 引入公共样式

Vue.config.productionTip = false

// 创建 Vue 根实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
