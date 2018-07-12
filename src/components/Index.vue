<template>
<div id="index">
  <head-nav></head-nav>
  <welcome></welcome>
</div>
</template>

<script>
import Vue from 'vue'
import headNav from './headNav'
import welcome from './welcome'

Vue.component('head-nav', headNav)
Vue.component('welcome', welcome)

export default {
  name: 'Index'
}
</script>

<style>

</style>
