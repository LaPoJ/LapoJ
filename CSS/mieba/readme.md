- 小程序 => React火起来之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁

- vue 语法与小程序共异
  1.思想
    网页，
    ```javascript
    new Vue({
      el: '#app'
    })
    ```
  2.组件
  ```javascript
    Vue.component({
      template: ``,
      data(){
        return {

        }
      }
    })
  ```

- 解决随机消失英雄
  ```javascript
    Math.random() 0~1 <0.5
  ```
  组件
  ```javascript
     Vue.component("Heroes", {
      props: {
        //参数: 参数约束
        heroes: {
          type: Array,
          default: function () {
            return []
          }
        }
      },+++++++++++++++++++++++++

      //模板
      template: ``

     //组件化思维
     <Heroes :heroes="heroes" />
  ```
- 小程序之中 src={{item.src}}
  vue :src="itme.src"
    props
    ref="allAudio"  this.$ref.allAudio
    wx:for  v-for