// let str = '123'
// let str2 = '456'
// console.log(+str + (+str2));

var num1 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
var num2 = '99958321098765432102222223333211112222222222222222222'

function addTwoNumbers(str1, str2) {

  // 用字符串来解决  但是字符串不能相加
  // 需要新的数据结构来打理 [] -> 存储每一位的相加，进位
  // 字符串有Index
  // jion() 方法

  let carry = 0 //是够有进位
  let l1 = str1.length //数的长度
  let l2 = str2.length //数的长度
  let arr = []  //位相加的存储

  // 加法
  // 遍历数组的每一位？
  var max = Math.max(l1, l2)  //最长的位数
  for (let i=l1-1, j=l2-1, n=max-1 ; n>=0 ; n--,i--,j--) {
    var sum = (+str1[i]|0) + (+str2[j]|0) + carry
    if (sum >= 10) {
      carry = 1
      arr.push(sum - 10)
    }else{
      carry = 0
      arr.push(sum)
    }
  }
  if (carry > 0) {
    arr.push(carry)
  }
  return arr.reverse().join('')
}

console.log(addTwoNumbers(num1, num2))