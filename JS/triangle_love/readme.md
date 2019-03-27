# 1：构造函数 Constructor
# 2：prototype 原型
# 3：实例 instance

- js没有类，只有对象，都是通过原型来拿到的

-通过构造函数Person 生成了person实例，同时在Person的原型 Person.prototype
定义了getName方法
构造函数都是要运行的 , new Person this -> 新的实例 空对象Person{} .name

实例怎么拿到原型对象的方法或属性
  - 任何对象都有__proto__私有属相，试了和类之间没有直接关系
  - 构造函数有prototype属性
  - 原型对象上有constructor属性指向构造函数


js 面向对象是基于原型的

原型链