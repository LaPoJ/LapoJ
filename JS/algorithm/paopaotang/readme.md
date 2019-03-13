函数有多种运行方式：
  1：Player()  普通函数方式运行
  2：new Player() 作为构造函数constructor被运行，返回一个新对象（实例）；
  3：构造函数，就是一个类
  4：function Person() { } 

函数是一等对象，是可以被执行的对象，this 常在 借助this来构造新的对象
当 var player1 = new Person() 时 this => player1  Person{}
new的过程
this 空对象Person {}
Person() 构造函数来构造 ： this.name = name ;

this的含义：
  1: