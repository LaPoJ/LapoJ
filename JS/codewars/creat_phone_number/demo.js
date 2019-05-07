// [1,2,3,4,5,6,7,8,9]

// const phoneNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//

// 字符串拼接， 下标选取
// const creatPhoneNumber = (arr) => {
//   // str = str.replace(/[()\ -]/g, '')
//   // console.log(str , str.length);
//   arr = [...arr].toString().replace(/,/g,'')
//   return `(${arr.slice(0, 3)}) ${arr.slice(3, 6)}-${arr.slice(6, 9)}`
// }

// console.log(creatPhoneNumber(phoneNumberArr));

function creatPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx"
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  return format
}

console.log(creatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));