<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Action, Mutation, State } from 'vuex-class'

export default class Home extends Vue {
  private cate: string = 'in_theaters'
  private active: number = 0
  private loading: boolean = true
  private movieListData = null

  @Action private movieList!: (cate: string) => any

  constructor () {
    super()
    console.log(1)
    this.created()
  }


  private created () {
    console.log('home')
    this.movieList(this.cate)
      .then((res: any) => {
        this.movieListData = res.subjects
        this.loading = false
        console.log(1)
      })
  }
}

</script>
