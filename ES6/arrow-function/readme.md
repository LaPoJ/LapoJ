# 箭头函数
  - 只有一个参数时可省略 ()
  - 只有一条语句的时候可省略 {} return

# 注意
  - 参数箭头之间不能换行
  - 返回一个对象的时候


# 区别
  - 箭头函数不支持重复命名形参，普通函数可以
  - 箭头函数不能使用 call apply 等方法改变this 指向
  - 箭头函数没有 this 它的 this 指向定义时所处的上下文(外部函数)的this
  - 箭头函数没有原型对象 .prototype
  - 箭头函数不能作为构造函数
  - 箭头函数没有 arguments

# argumennts
  - 所有函数里面(除了箭头函数)可使用的变量
  - 将参数存进一个数组 [arg1, arg2, arg3]

# new target
  - es6 中存在， new 的作用于的构造函数(构造函数之中)