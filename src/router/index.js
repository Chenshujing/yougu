import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index', // 首页
      name: 'index',
      component:()=> import('./../pages/index/index')
    },
  ]
})
