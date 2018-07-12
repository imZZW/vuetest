import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'

Vue.use(VueRouter)

const Routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  Routers
})
