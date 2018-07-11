<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form>
            <div class="form-group" id="name-div">
              <label>用户名</label>
              <input class="form-control" v-model="name" @click="showTip()" @blur="testExist()">
              <label v-if="show">{{ message }}</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      show: false,
      message: 'test'
    }
  },
  methods: {
    showTip () {
      this.show = true
      this.message = '请输入10个以内的字符'
    },
    testExist () {
      let that = this
      let url = '/server/register/nameExist?username='
      url += this.name
      this.$axios.get(url).then(function (response) {
        console.log(response.data.message)
        that.message = response.data.message
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
