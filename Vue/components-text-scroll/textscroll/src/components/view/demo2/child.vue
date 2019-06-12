<template>
  <div class="container-child">
    <button @click="handleMsg" >提交</button>
  </div>
</template>

<script>
export default {
  data () {
    name: 'demo2C'
    return {
      message: '我依然很帅...'
    }
  },
  methods: {
    handleMsg () {
      this.$emit('woNiu', this.message)
    }
  }
}
</script>

<style scoped>

</style>
