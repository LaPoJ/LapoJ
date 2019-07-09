<template>
  <div class="menu">
    {{ msg }}
  </div>
</template>

<script>
import bus from '@/common/bus'
export default {

  data () {
    return {
      msg: 'aaaa'
    }
  },

  created () {
    bus.$on('todo', (val) => {
      console.log(val)
      this.msg = val
    })
  }

}
</script>

<style>

</style>
