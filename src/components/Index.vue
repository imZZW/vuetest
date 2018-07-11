<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <h1>{{ message }}</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import VueResourc from 'vue-resource'
export default {
  name: 'Index',
  data () {
    return {
      message: '欢迎使用本系统'
    }
  }
}
</script>

<style>

</style>
