<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <form accept-charset="utf-8" @submit.prevent="submitForm()">
        <div class="form-group">
          <label>用户名</label>
            <input type="name" class="form-control" v-model="name" @click="showNameTip()" @blur="testNameExist()">
            <label v-if="nameLabelShow">{{ nameMessage }}</label>
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control" v-model="password" @click="showPasswordTip()" @blur="testPasswordLegal()">
          <label v-if="passwordLabelShow">{{ passwordMessage }}</label>
        </div>
        <div class="form-group">
          <span v-if="errorShow">{{ errorMessage }}</span>
          <input type="submit" class="btn btn-primary pull-right" value="注册">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const axios = require('axios')
export default {
  name: 'registerForm',
  data () {
    return {
      name: '',
      nameLabelShow: false,
      password: '',
      passwordLabelShow: false,
      errorShow: false
    }
  },
  methods: {
    showNameTip () {
      this.nameLabelShow = true
      this.nameMessage = '请输入10个以内的字符'
    },
    testNameExist () {
      let that = this
      let url = '/server/register/nameExist?username='
      if (this.name) {
        url += this.name
        axios({
          method: 'get',
          url: url
        }).then(function (response) {
          that.$forceUpdate()
          that.nameMessage = response.data.message
        })
      } else {
        this.$forceUpdate()
        this.nameMessage = '用户名错误'
        console.log(this)
      }
    },
    showPasswordTip () {
      this.passwordLabelShow = true
      this.passwordMessage = '请输入6个字符以上'
    },
    testPasswordLegal () {
      this.$forceUpdate()
      if (this.password) {
        if (this.password.length < 6) {
          this.passwordMessage = '密码不满足，请输入6个字符以上'
        }
      } else {
        this.passwordMessage = '密码不能为空'
      }
    },
    submitForm () {
      let that = this
      let url = '/server/register'
      let param = new URLSearchParams()
      param.append('username', this.name)
      param.append('password', this.password)
      axios({
        method: 'post',
        url: url,
        data: param
      }).then(function (response) {
        let state = response.data.state
        if (state === 1) {
          alert(response.data.message)
          that.$router.push('/')
        } else {
          that.$forceUpdate()
          that.errorShow = true
          that.errorMessage = response.data.message
        }
      })
    }
  }
}
</script>

<style>

</style>
