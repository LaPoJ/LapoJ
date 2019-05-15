/**
 * @param { arr[] } arr
 * @param { num } data
 */
function binary_search(arr, data) {
  // 不停的二分查找
  // 停下来？ 没得再分

  let min = 0
  let max = arr.length - 1
  let mid

  while (min <= max) {
    // mid = parseInt((min + max) / 2)
    // mid = min + (max + min) / 2
    mid = min + ((max-min) >> 1)
    if (arr[mid] > data) {
      max = mid - 1
    }else if( arr[mid] < data){
      min = mid + 1
    }else{
      return mid
    }
  }
  return -1
}

// console.log(binary_search([1,4,7,9,10,12], 10))

let arr = []
for (let i = 0; i < 10000000; i++) {
  arr.push(i)
}
console.log(binary_search(arr, 2019))