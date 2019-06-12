<template>
  <div class="container">
    <child :sendMsg="sendMsg"></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'demoFather',
  data () {
    return {
      sendMsg: {
        msg: '我很帅',
        data: '2019-6-11',
        age: '18'
      }
    }
  },
  components: {
    'child': Child
  }
}
</script>

<style scoped>

</style>
