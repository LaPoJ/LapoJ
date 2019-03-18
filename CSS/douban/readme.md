- css 命名词汇
    feeds *-item

- html结构及布局
    从上到下，从左到右，语义化和功能性
    1：套路
      content > h3+p
    2：盒子
    3：a作为盒子在移动端属于正常
        display:block;
    4：盒子模型
        文字line-height padding margin
    5：文字截断
        Tmall 商铺信息信息是有商家填的，高度不会被限制。
        display：-webkit-box;  新的盒子模型，想flex来划分父元素的空间。
        overflow: hidden;  超出部分隐藏
        -webkit-line-clamp:3; 显示的行数，一般默认显示3行
        -webkit-box-orient:vertical;  默认在水平方向划分
    6：浮动
        离开文档流
        在一个盒子里，将一个要浮动的元素写在最前面，
        在flex布局前，我们一般借助一float来布局
        图片的宽高？ 宽度用百分比，自适应的需求
        高度怎么做？ div padding-top: 自身的宽高来做比例100%   --正方形
        自适应设备的盒子的等比例设置 width 百分比
        高度用padding-top 