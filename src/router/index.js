import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let myRouter = new Router({
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
myRouter.beforeEach((to, from, next) => {
  let pathName = to.path.split('/')[1]
  // console.log(pathName)
  let isLogin = Vue.$cookies.get('sessionId')
  // 未登录可以访问的页面
  let arr = ['index','CustomerCase']
  let sarr = ['login']
  // 已经登陆过 要跳转login时
  // if (sarr.indexOf(to.name) !== -1 && isLogin) {
  //  next('/index')
  //  return false
  //}
  if (!isLogin) {
    if (arr.indexOf(pathName) === -1) {
      // 如果是登录页面路径，就直接next()
      if (to.path === '/login') {
        next()
      } else { // 不然就跳转到登录；
        next('/index')
      }
    } else {
      next()
    }
    return false
  } else {
    if(to.path=='/user' && from.name=='orderdetail' && to.query.id == undefined){
      next({path:'/user',query:{id:3}})
    }else if(to.path=='/user' && from.name=='pay' && to.query.id == undefined){
      next({path:'/user',query:{id:3}})
    }else{
      next() 
    }
       
  }
})
export default myRouter