<template>
  <div>
    <h3>动态 渲染 .vue 文件的组件 -- display </h3>
    <i-display :code="code" />
  </div>
</template>

<script>
import iDisplay from '@/components/com/display'
import defaultCode from './default-code.js';
export default {
  components: {
    iDisplay
  },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>

</style>
