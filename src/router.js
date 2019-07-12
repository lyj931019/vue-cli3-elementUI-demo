import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        isLogin : true, // 自定义一个属性，true需要登录权限
        title:"主页"
      },
    }
  ]
})

//导航前守卫(跳转前)
router.beforeEach(function(to,from,next){
    // to: 表示要跳转的页面。from:表示从哪个页面来
    let login_in = localStorage.login                  // 是否已登录
    let require = to.matched.some(function(item){      // 是否需要登录
        return item.meta.isLogin
    })
    if( !login_in && require ){       // 当未登录，且跳转的页面需要登录后才能操作时，进行路由拦截
        next({                          // 跳转登录页
            name: "login",
            params: { redirect: to }      // 将 要跳转（即被拦截） 的路由对象，作为参数，传递到登录页面
        });
    }else{                            // 已登录就正常跳转，不做任何拦截
        next()                          // 正常跳转到下一页
    }
})
//导航后守卫(跳转后)
router.afterEach(function(to,from){
    document.title = to.meta.title     //跳转后设置页面的title
})




export default router