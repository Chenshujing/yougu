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
    {
      path: '/CustomerCase',
      name: 'CustomerCase',
      component:()=> import('./../pages/CustomerCase')
    },
    {
      path: '/activityorder', // 活动页
      name: 'activityorder',
      component:()=> import('./../pages/activity/order'),
      children:[
        {
          path: 'indent',
          name: 'indent',
          component:()=> import('./../pages/activity/indent'),

        },
        {
          path: '/pay/:id',
          name: 'pay',
          component:()=> import('./../pages/activity/pay'),

        },
        {
          path: '/detail/:id',
          name: 'detail',
          component:()=> import('./../pages/activity/detail'),

        },
        {
          path: '/orderdetail/:id',
          name: 'orderdetail',
          component:()=> import('./../pages/order/order'),

        }
      ]

    },
    {
      path: '/user',
      name: 'user',
      component:()=> import('./../pages/user/user'),
    }

  ]
})