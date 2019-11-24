<template>
  <div class='user-list'>
    <div class='list-title'>
      <div class='block'>
        <span class='demonstration'>城市</span>
        <el-cascader
          :options='options'
          v-model='selectedOptions'
          @change='handleChange'>
        </el-cascader>
      </div>
      <div class="block">
        <span class="demonstration">时间</span>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/cities'
export default {
  name: 'UserList',
  data () {
    return {
      /* eslint-disable no-undef */
      options: areajson,
      value1: ''
    }
  }
}
</script>

<style scoped>
.user-list{
  position: absolute;
  left: 200px;
  top: 70px;
  right: 0;
  bottom: 0;
}
.list-title{
  height: 100px;
  line-height: 100px;
  box-shadow: 0 0 20px #cac6c6;
}
.block{
  float: left;
  margin-left: 35px;
}
</style>
