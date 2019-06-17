//#regin
  // vue开发
  //   1. 组件开发
  //   2. vuex 数据管理(应用程序的数据流)

  // store 超市 new Vuex.Store({
    // state
  //})
  // 集中管理
  // 组件读取数据 this.$store.state.count
  // 组件写数据 actions, mutations, getters

  // vuex 不是什么时候都需要？大项目离不开

  // 公司的概念
  // CEO 旅梦 { state }

  // Vue 实现核心 mvvm，其他的通过 Vue.use() 插入进入


  // - data() 将会被 state 取代
  // methods 改变状态的方法, 会是 actions
//#regin
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  count: 1
}

// 改变 唯一可以修改状态 -- 财务

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  incrementIfOdd (state) {
    state.count++
  }
}

// 动作 不能修改 state
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  // actions 里不能修改 state, 可以读
  incrementIfOdd ({ commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('incrementIfOdd')
    }
  },
  incrementAsync ({ commit }){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})