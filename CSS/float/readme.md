- 清楚浮动的几种方法：
    1：父元素底部加上一行代码
        -- <div style="clear:left"></div>
        -- <div style="clear:both"></div>
    2：在父元素上定义css清除样式
        .clearFix{
          float:left;
        }
    3：使用css中的伪类after（不能用before），给父元素添加一个咱们用来清楚浮动的类
        .cleraFix:after{
          content:"";
          display: block;
          clear: both;
        }
    4：bfc：块级格式化上下文
      利用bfc的效果来弥补父容器的高度塌;
      div.content{
        overflow: hidden; auto; scroll;
      }
    5.尼古拉斯大师 方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果
      .content{
        display:table;
      }
      不推荐使用，可能造成很多未知错误
