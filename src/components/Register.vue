<template>
<div id="register">
  <head-nav></head-nav>
  <main>
    <div class="container">
      <register-form></register-form>
    </div>
  </main>
</div>
</template>

<script>
import Vue from 'vue'
import headNav from './headNav'
import registerForm from './registerForm'

Vue.component('head-nav', headNav)
Vue.component('register-form', registerForm)

export default {
  name: 'Register'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
