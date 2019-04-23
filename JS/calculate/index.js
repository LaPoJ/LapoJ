// ali 14.6 2.6
// meituan 16 4
// 51信用卡 17 5

// 规则
// S 5个月
// A 3个月
// B 2个月
// C 1个月
// D 0

// level key

let stratiges = {
  'D': function(salary) {
    return salary*0
  },
  'C': function(salary) {
    return salary*1
  },
  'B': function(salary) {
    return salary*2
  },
  'A': function(salary) {
    return salary*3
  },
  'S': function(salary) {
    return salary*5
  },
}

function calculate(level, salary) {
  return stratiges[level](salary);
}

console.log(calculate('S', 10000));


// READme.md
// - 年终奖 会计
//  ？ 怎么发奖金 -- 老板决定 -> 董事会
// 不经意间，将会计的计算， 跟奖金的策略分开了  =>  解耦
// stratigise 策略对象
// 策略模式 -> 解决分支问题

// 构建对象，面向对象的世界，实现互换使用。
// 策略对象 -> 将年终奖策略封装在他的内部， 实现了计算和策略的分离

// - 传统面向对象设计模式， -> 类
// - js 的做法， 对象字面量搞定
