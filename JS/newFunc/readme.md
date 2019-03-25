- new --js 关键字 用于创建一个实例
    运算符创建一个用户定义的对象类型的实例

- 1：构造函数上有prototype属性，值为对象
- 2：类 可以由构造函数+ prototype 原型对象组成
- 3：typeof --类型;  instanceof  --实例;
- 4：

# new 结果是一个新的对象，具有构造函数里的属性？
  - 对象要有原型对象，指向构造函数的原型对象

# 空对象 --new Object()
  - 1：如何将构造函数里面的属性交给空对象？
      constructor 本身就医为他人服务
      为实例服务 可以为任何对象服务
      函数内部this 是由函数运行的方式产生决定的
      new Otaku()  this => 新生成的对象。例如: var PJ = new Otaku()  此时 this => PJ;
      Otaku.call(obj,...); 作为普通函数运行 this => obj
      call, apply --可以指定函数运行时的this，手动指向obj
      call 和 apply 的区别：
        1：Object.call(对象名, 参数2, 参数2)
        2：Object.apply(对象名, [参数1, 参数2, 参数3])

# constructor 构造函数 拥有 prototype属性，在上面添加属性和方法，可以被实例引用到。
  - 对象上有 __proto__ 属性，这个原型对象是谁
    对象也可以拿到原型对象上的属性和方法s

  js 的面向对象是基于原型的

# 属性和方法的合集 --对象
  - 构造函数可以给些属性，其他的通过原型对象来拿到
    obj.__proto__ 某一个构造函数的原型对象：
      obj.__proto__ = Otaku.prototype;
      不赋值 => Object;