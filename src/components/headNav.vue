<template>
  <nav class="navbar navbar-static-top navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">SSMV</a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a href="/">首页</a></li>
          <li><a href="/game">游戏</a></li>
        </ul>
        <ul class="nav navbar-nav pull-right" v-if="loginState">
          <li><a href="/login">登录</a></li>
          <li><a href="/register">注册</a></li>
        </ul>
        <ul class="nav navbar-nav pull-right" v-else>
          <li><a href="/profile">欢迎{{ name }}</a></li>
          <li><a href="/logout" @click="quit()">退出</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getCookie, delCookie } from '../assets/js/cookie.js'

export default {
  name: 'headNav',
  data () {
    return {
      loginState: false,
      name: ''
    }
  },
  mounted () {
    let username = getCookie('username')
    this.name = username
    if (username === '') {
      this.loginState = true
    }
  },
  methods: {
    quit () {
      delCookie('username')
    }
  }
}
</script>

<style>

</style>
