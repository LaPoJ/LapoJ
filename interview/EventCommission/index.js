//#regin
  // function Person(name) {
  //   this.name = name
  // }

  // let p = new Person('wn')

  // // p.__proto__  === Person.prototype
  // // Person.__protp__ === Function.prototype
//#regin

//#regin
  // var foo = {}
  // var F = function() {}

  // Object.prototype.a = 'valA'
  // Function.prototype.b = 'valB'

  // console.log(foo.a)
  // console.log(foo.b)
  // console.log(F.a)
  // console.log(F.b)
//#regin

//#regin 构造函数
  // function Person(name) {
  //   this.name = name
  //   return 666
  // }
  // let p = new Person('wn')
  // console.log(p)
  // ----构造函数 不需要返回值，使用 new 来创建时， 如果 return 的是非对象，会忽略返回值
  // ----如果是对象，则返回该对象 ( return null)
//#regin

//#regin
  // function Person(name) {
  //   this.name = name
  // }
  // function Student() {}

  // Student.prototype = Person.prototype
  // Student.prototype.constructor = Student
  // let p = new Student('wn')
  // console.log(p insta  nceof Person)
//#regin

let gArr = [1, [2, 3], 4, 5, [6,7, [3, 2, 8]]]
let oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]

function outputArr(arr) {
  var res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      res = res.concat(outputArr(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}

console.log(outputArr(gArr))
console.log(oArr)