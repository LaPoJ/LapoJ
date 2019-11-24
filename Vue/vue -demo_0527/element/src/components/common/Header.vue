<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">设置密码</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    userName () {
      return localStorage.getItem('userName')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('userName')
        this.$router.push('./')
      }
      if (command === 'setting') {
        const userName = localStorage.getItem('userName')
        this.$prompt('请输入新密码：由字母和数字组成，至少6位数', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[a-zA-Z0-9]{6,21}$/,
          inputErrorMessage: '密码格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '密码更新成功!'
          })
          localStorage.setItem('userName', userName)
          localStorage.setItem('password', value)
          this.$router.push('/')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    }
  }
}

</script>

<style scoped>
.header{
  background-color: #409eff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #ffffff;
}
.header .logo{
  float: left;
  width: 250px;
}
.header .user-info{
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #ffffff;
}
.el-dropdown-link{
  text-align: center;
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #ffffff;
  cursor: pointer;
  vertical-align: middle;
}
</style>
