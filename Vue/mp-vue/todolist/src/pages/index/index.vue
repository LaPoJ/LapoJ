<template>
  <div>
    <swiper indicator-dots="false" :autoplay="true">
      <block v-for="(imgUrl, i) in imgUrls" :key="i">
        <swiper-item>
          <image :src="imgUrl" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>

    <p class="title">{{ title }}</p>
    <input type="text" placeholder="input todo" v-model="todoContent" />
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul class="todos">
      <li v-for="(item, index) in todos" :key="index" @click="toggle(index)" :class="{ 'done': item.done }" >{{ item.text }}</li>
      <li>未完成/已完成：{{ todoCount }} / {{ todos.length }}</li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      title: 'Hello,mpvue...',
      todoContent: '',
      todos: [
        { text: '吃饭...', done: false },
        { text: '睡觉...', done: false },
        { text: '打豆豆...', done: false }
      ],
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
    }
  },
  computed: {
    todoCount () {
      return this.todos.filter( todo => !todo.done).length
    }
  },
  components: {

  },

  methods: {
    toggle(index){
      const todos = this.todos.slice(0)
      todos[index].done = !todos[index].done
      this.todos = todos
      // this.todos[index].done = !this.todos[index].done
    },
    addTodo () {
      if (this.todoContent) {
        this.todos.push({
          text: this.todoContent,
          done: false
        })
        this.todoContent = ''
      }
    },
    clearTodo () {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch: {
    todos: function(todos) {
      wx.setStorageSync('todos', todos)
    }
  },
  created () {
    this.todos = wx.getStorageSync('todos')
  }
}
</script>

<style scoped>
.done{
  text-decoration: line-through;
}
</style>
