<template>
  <div class="login">
    <div class="container">
      <p class="title">后台管理系统</p>
      <div class="msg mt20">
        <el-input v-model="user" placeholder="请输入内容"></el-input>
        <span class="username-err">{{ userErr }}</span>
      </div>
      <div class="msg mt20">
        <el-input v-model="password" type="password" placeholder="请输入内容"></el-input>
        <span class="username-err">{{ passErr }}</span>
      </div>
      <div class="btn mt20">
        <!-- <router-link to="hello"> -->
        <el-button type="primary" @click="login">登录</el-button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: '',
      userErr: '',
      passErr: ''
    }
  },
  methods: {
    login () {
      const userName = localStorage.getItem('userName')
      const password = localStorage.getItem('password')
      if (this.user && this.password) {
        if (this.user !== userName && this.password === password) {
          this.userErr = '用户名错误'
          this.passErr = ''
        }
        if (this.user === userName && this.password !== password) {
          this.userErr = ''
          this.passErr = '密码错误'
        }
        if (this.user !== userName && this.password !== password) {
          this.userErr = '用户名错误'
          this.passErr = '密码错误'
        }
        if (this.user === userName && this.password === password) {
          localStorage.setItem('userName', this.user)
          localStorage.setItem('password', this.password)
          this.$router.push('/index') // 字符串跳转
          // this.$router.push({ path: '/hello'}) //对象跳转
          // this.$router.push({ name: 'HelloWorld', param: {userId: 1} })
        }
      }
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
}
.container{
  width: 300px;
  padding: 50px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 0 20px #cac6c6;
}
.mt20{
  margin-top: 20px;
}
.btn button {
  width: 100%;
}
.title{
  font-size: 26px;
  font-weight: bold;
  color: #505458;
}
.username-err{
  font-size: 12px;
  color: red;
}
</style>
