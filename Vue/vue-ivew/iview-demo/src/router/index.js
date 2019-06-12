import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import User from '@/components/detail/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/table',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})
