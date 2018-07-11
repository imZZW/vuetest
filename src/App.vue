<template>
<div id="app">
  <nav class="navbar navbar-static-top navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html">SSMV</a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/">首页</a></li>
          <li><a href="#">商品</a></li>
        </ul>
        <ul class="nav navbar-nav pull-right">
          <li><a href="login.html">登录</a></li>
          <li><a href="/register">注册</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <v-register></v-register>
</div>

</template>

<script>
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    'v-register': Register
  }
}
</script>

<style>

</style>
