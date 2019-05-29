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
      <div class='block'>
        <span class='demonstration'>时间</span>
        <el-cascader
          :options='options'
          v-model='selectedOptions'
          @change='handleChange'>
        </el-cascader>
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
      options: areajson
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
}
.block{
  float: left;
  width: 500px;
  margin: 10px;
  background-color: red;
}
.demonstration{

}
</style>
