# css 预编译语言stylus
  写的是stylus  .styl 在浏览器端运行的是.css文件
  前端工作流在发生改变
  界面开发工作被重新定义
  stylus main.styl -o main.css  编译功能
  编译 -o 输出
  stylus 提供了变量定义，模块化，
  函数，快捷， 新的语法
  -w watch 监听文件修改，同步编译


  - 1：定义变量
    2：减少输入{} :;
    3：定义函数
    4：嵌套
        .book-bought --购买模块
          .label
            img
            &引用上一级的层次类名，同时可以缩进，省去重复上一次的选择

flex是css在移动时代最爽的布局方案，手机端子元素的对齐方式
  水平--主轴：justify-content
  垂直--纵轴：align-items center
  传统方案：img + 兄弟节点 vertical-align:middle

- flex --自适应
    1：flex:1 比例划分--如果只给一个元素设置，占据其他元素之外的所有
    2：父元素与子元素之间的关系
        水平对齐 justify-content
        垂直对齐 align-items:
    3：剩余的空间 flex-grow可用来分配剩余空间
        flex-gorw:1 --剩余空间全部占据

