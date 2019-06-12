<template>
  <section class="hello">
    <div class="scroll-box">
      <text-scroll :dataList="data" scrolltype="scroll-up"></text-scroll>
      <text-scroll :dataList="data" scrolltype="scroll-left"></text-scroll>
    </div>
  </section>
</template>

<script>
import TestScroll from './textscroll'
export default {
  name: '',
  data () {
    return {
    data: [
      { text: 'data1'},
      { text: 'data2'},
      { text: 'data3'},
      ]
    }
  },
  components: {
    'text-scroll': TestScroll
  }
}
</script>

<style scoped>
.hello {
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e8e9;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.scroll-box {
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  border-radius: 5px;
}
</style>
