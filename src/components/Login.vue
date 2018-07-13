<template>
<div id="register">
  <head-nav></head-nav>
  <main>
    <div class="container">
      <login-form></login-form>
    </div>
  </main>
</div>
</template>

<script>
import Vue from 'vue'
import headNav from './headNav'
import loginForm from './loginForm'

Vue.component('head-nav', headNav)
Vue.component('login-form', loginForm)

export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
