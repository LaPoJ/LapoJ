<template>
  <button @click="handle">
    <slot></slot>
  </button>
</template>

<script>
import bus from '@/common/bus'
export default {
  data () {
    return {
      msg: 'button 的哈哈'
    }
  },
  methods: {
    handle () {
      bus.$emit('todo', this.msg)
    }
  }
}
</script>

<style>

</style>
