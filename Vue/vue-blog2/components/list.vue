<template>
  <div class="lsit">
    <template v-if="total === 0">
      <div class="list-null">空空如也</div>
    </template>
    <template v-else>
      <ul></ul>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'baseList',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('article', [
      'articles',
      'total',
      'limit',
      'articlesTop'
    ])
  }
}
</script>

<style>

</style>
