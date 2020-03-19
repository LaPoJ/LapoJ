<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_container" v-show="showLogin">
        <div class="manage-tip">
          <span class="title">后台管理系统</span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item>
            <span class="fa-tips"><i class="fa fa-user"></i></span>
            <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"> </el-input>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
      ip: ''
    }
  },
  mounted() {
    this.showLogin = true
  },
  methods: {

  }
}
</script>

<style  scope>
.form-fade-enter-active,
.form-fade-leave-active{
  transition: all 1s;
}
.form-fade-enter,
.form-fade--active-active{
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
