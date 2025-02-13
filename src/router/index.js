import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout'),
    redirect: '/home',
    children: [
      {
        path: '/cart', component: () => import('../views/layout/cart')
      },
      {
        path: '/category', component: () => import('../views/layout/category')
      },
      {
        path: '/home', component: () => import('../views/layout/home')
      },
      {
        path: '/user', component: () => import('../views/layout/user')
      }
    ]
  },
  {
    path: '/login', component: () => import('../views/login')
  },
  {
    path: '/search', component: () => import('../views/search')
  },
  {
    path: '/myorder', component: () => import('../views/myorder')
  },
  {
    path: '/pay', component: () => import('../views/pay')
  },
  {
    path: '/prodetail:/:id', component: () => import('../views/prodetail')
  },
  {
    path: '/searchlist', component: () => import('../views/search/list')
  }

]

const router = new VueRouter({
  routes
})

export default router
