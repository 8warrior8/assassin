import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/index'
import Home from '@/components/home'

const About = r => require.ensure([], () => r(require('@/components/about/about.vue')), 'about')
const Blog = r => require.ensure([], () => r(require('@/components/blog/blog.vue')), 'blog')
const Login = r => require.ensure([], () => r(require('@/components/login/login.vue')), 'login')
const UserInfo = r => require.ensure([], () => r(require('@/components/userinfo/userinfo.vue')), 'userinfo')
const Setting = r => require.ensure([], () => r(require('@/components/setting/setting.vue')), 'setting')

Vue.use(Router)

const myRouter = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    // 首页
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    // 博客
    path: '/blog',
    name: 'Blog',
    meta: {
      auth: true
    },
    component: Blog
  }, {
    // 设置
    path: '/about',
    name: 'About',
    component: About
  }, {
    // 用户信息
    path: '/user',
    name: 'User',
    meta: {
      auth: true
    },
    component: UserInfo
  }, {
    // 登陆
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    // 设置
    path: '/setting',
    name: 'Setting',
    component: Setting
  }]
})

myRouter.beforeEach((to, from, next) => {
  let userStorage = JSON.parse(localStorage.getItem("loginInfo"));
  if (userStorage && !myRouter.app.$store.getters.getUserInfo) {
    myRouter.app.$store.dispatch({
      type: 'set_UserInfo',
      data: userStorage
    })
  }

  if (to.meta && to.meta.auth) {
    if (myRouter.app.$store.getters.getUserInfo) {
      next()
    } else {
      const url = encodeURIComponent(to.fullPath)
      next(`/login?redirect_url=${url}`)
    }
  } else {
    next()
  }
})

export default myRouter
