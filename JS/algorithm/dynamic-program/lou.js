/* function lou(n) {
  if (n < 0) {
    return 0;
  }
  // 边界
  if (n === 1) {
    return 1;
  }
  // 从大到小递归也有从边界来的回溯
  if (n === 2) {
    return 2;
  }
  return lou(n-1) + lou(n-2);
}

console.log(lou(12)); */

// 什么可以存储之前的楼数？
// 变量
function lou(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 1 ) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  // 抽象能力
  var
    a = 1, //a -> n-2阶
    b = 2, //b -> n-1阶
    temp = 0; //temp -> n阶

    // a => b, b => temp, temp => a+b
    for (let i = 3; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return temp;
}
console.log(lou(12));