import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mindex',
    component: () => import('../views/Mindex.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, 
  // 李立新路由
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/Affirm',
    name: 'Affirm',
    component: () => import('../views/Affirm.vue')
  },
  {
    path: '/PayShow',
    name: 'PayShow',
    component: () => import('../components/PayShow.vue')
  },
  {
    path: '/PayWin',
    name: 'PayWin',
    component: () => import('../views/PayWin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* // 注册全局守卫
// 在访问路由之前进行拦截
router.beforeEach((to, from, next) => {
  // 获取 token，登录的标识
  var token = sessionStorage.getItem("token")

  if(to.meta.auth) { // 判断是否需要权限
    if(token) { // 再次判断是否已经有权限了
      next()
    } else {
      next({ // 没有权限，导向登录页
        path: "/login",
        query: {redirect: to.fullPath} // 记录原本想访问的路由
      })
    }
  } else {
    next() // 想去哪就去哪
  }
}) */


export default router
