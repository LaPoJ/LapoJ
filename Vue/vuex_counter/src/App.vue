<template>
  <div id="app">
    <div class="count">clicked {{$store.state.count}} times, count is {{evenOrOdd}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  },
  computed: {
    ...mapGetters['evenOrOdd']
  }
}
</script>

<style>

</style>
