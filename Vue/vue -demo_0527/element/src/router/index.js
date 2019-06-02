import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Main'
import MainDetail from '@/components/MainDetail'
import UserList from '@/components/UserList'
import UsersInfo from '@/components/UsersInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: Index,
      component: Index,
      children: [
        {
          path: '/index',
          name: MainDetail,
          component: MainDetail
        },
        {
          path: '/index/usersList',
          name: UserList,
          component: UserList
        },
        {
          path: '/index/usersInfo',
          name: UsersInfo,
          component: UsersInfo
        }
      ]
    }
  ]
})
