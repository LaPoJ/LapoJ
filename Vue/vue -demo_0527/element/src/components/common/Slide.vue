<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eeeeee"
      router
    >
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/usersList">
            <i class="el-icon-user-solid"></i>用户列表
          </el-menu-item>
          <el-menu-item index="/index/usersInfo">
            <i class="el-icon-s-unfold"></i>用户信息
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  naem: 'Sidebar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.sidebar{
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2d363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
