import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FatherC from '@/components/view/demo/fat.vue'
import FatherC2 from '@/components/view/demo2/father.vue'
// import ChildC from '@/components/view/demo/child.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fa',
      name: 'demoFather',
      component: FatherC
    },
    {
      path: '/fafa',
      name: 'demo2Father',
      component: FatherC2
    }
  ]
})
