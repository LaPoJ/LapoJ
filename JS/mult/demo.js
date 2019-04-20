// 全局变量太多， cache只为mult服务
// 会造成空间的污染

// 函数里面的变量运行后就会消失
// const mult = (function(){
//   const cache = {};
//   return function() {
//     let key = Array.prototype.join.call(args, ',');
//       if (key in cache) {
//         return cache[key];
//        }
//     return Array.prototype.reduce.call(arguments, function (x, y) {
//       return x * y;
//     })
//   }
// })();

const mult = (function () {
  const cache = {};
  return function(...args) {
    let key = Array.prototype.join.call(args, ',');
    if (key in cache) {
      return cache[key];
    }
    let a = 1 ;
    for (let i = 0; i < args.length; i++) {
      a = a*args[i];
    }
    cache[key] = a;
    return a;
  }
})();

console.log(mult(1, 2, 3));
