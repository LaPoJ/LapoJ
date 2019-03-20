- 清楚浮动的几种方法
    1：父元素底部加上一行代码
        -- <div style="clear:left"></div>
        -- <div style="clear:both"></div>
    2：在父元素上定义css清除样式
        .clearFix{
          float:left;
        }