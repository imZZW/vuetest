// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Game from '@/components/Game'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/game', component: Game },
  { path: '*', redirect: '/index' }
]

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new VueRouter(RouterConfig)

const store = new Vuex.Store({
  state: {
    count: 0,
    buttonMessage: '点击开始答题'
  },
  mutations: {
    nextQuestion (state) {
      state.count++
      state.buttonMessage = '第' + state.count + '题'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
