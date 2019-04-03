const nums = ['c', 'a', 'z', 'y'];
// 按照字母顺序排序
// console.log(nums.sort());

// 数字排序
const nums2 = [1, 10, 2, 28]
// console.log(nums2.sort(function (x, y) {
//   return x-y;
// }));

const people = [
    { name: 'zh1', age: 18, },
    { name: 'zh2', age: 35, },
    { name: 'zh3', age: 24, },
    { name: 'zh4', age: 56, },
    { name: 'zh5', age: 76, }
]

var orderPeople = function(people) {
  return people.sort((a, b) =>{
    return a.age - b.age;
  });
}

console.log(orderPeople(people));