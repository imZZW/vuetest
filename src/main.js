// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from './components/Index'
import Register from './components/Register'
import Login from './components/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '*', redirect: '/index' }
]

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new VueRouter(RouterConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
