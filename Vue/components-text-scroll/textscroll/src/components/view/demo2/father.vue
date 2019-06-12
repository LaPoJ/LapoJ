<template>
  <div class="container">
    {{ msg }}
    <child @woNiu="getWn"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    name: 'demo2Fa'
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getWn (data) {
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>
