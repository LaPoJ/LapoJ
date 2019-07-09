<template>
  <div class="hello">
    <!-- <button @click="submit">登录</button> -->
    <i-button >按钮</i-button>
    <i-menu></i-menu>
  </div>
</template>

<script>
import Button from './com/button'
import Menu from './com/menu';
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    submit () {
      this.$toast('登录成功', 'bottom', )
    }
  },
  components: {
    'i-button': Button,
    'i-menu': Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
