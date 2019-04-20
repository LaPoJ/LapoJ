// 缓存计算结果
// 计算了的 保存在哪？ 用怎样的方式？
// 采用json的数据格式
let cache = {};
// 1,2,3    4,5,6
// key string <- arguments
function mult() {
  // 参数的数量是不定的
  let a = 1;
  let key = Array.prototype.join.call(arguments, ',')
  // args相关，数组 -> string key
  // key [1, 2, 3] -> "1,2,3"

  if (cache[key]) {
    console.log("从缓存中取");
    return cache[key];
  }
  for (let i = 0; i < arguments.length; i++) {
    a = a*arguments[i];
  }
  cache[key] = a;
  console.log(cache);
  return a;
}
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3, 4, 5));
console.log(mult(1, 2, 3, 4, 5));
console.log(mult(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(mult(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 闭包
function mults() {
  return Array.prototype.reduce.call(arguments, function (x, y) {
    return x * y;
  })
}

console.log("闭包：" + mults(0));
console.log("闭包：" + mults(1, 2, 3));
console.log("闭包：" + mults(1, 2, 3, 4, 5));
console.log("闭包：" + mults(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));