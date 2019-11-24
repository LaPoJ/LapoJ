<template>
  <div>
    <h1>Welcome!</h1>
    <!-- <NLink to="/about">
    About Page
    </NLink> -->
    <div class="index container">
      <base-list />
    </div>
  </div>
</template>

<script>
import BaseList from '../components/list'
export default {
  head: {
    title: 'Home Page'
  },
  async fetch () {

  }
}
</script>

<style>

</style>
