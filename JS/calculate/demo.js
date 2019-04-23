var Bounce = function(salary) {
  this.salary = salary
}
Bounce.prototype.setStrategy = function(strategy){
  this.strategy = strategy
}
Bounce.prototype.getBounce = function(){
  return this.strategy.caculate(this.salary);
}


// 面向对象的世界， 创建很多对象， 策略对象
// 实现的同样的接口 caculate , 可以互换使用  -> 互换策略 => 策略模式
// S
var PerformanceS = function(){}
PerformanceS.prototype.caculate = function (salary) {
  return salary*5
}
// A
var PerformanceA = function(){}
PerformanceA.prototype.caculate = function (salary) {
  return salary*3
}
// B
var PerformanceB = function(){}
PerformanceB.prototype.caculate = function (salary) {
  return salary*2
}
// C
var PerformanceC = function(){}
PerformanceC.prototype.caculate = function (salary) {
  return salary*1
}
// D
var PerformanceD = function(){}
PerformanceD.prototype.caculate = function (salary) {
  return salary*0
}

const bounce = new Bounce(10000)
bounce.setStrategy(new PerformanceS())
console.log(bounce.getBounce())

const bounce2 = new Bounce(5000)
bounce2.setStrategy(new PerformanceA())
console.log(bounce2.getBounce())
