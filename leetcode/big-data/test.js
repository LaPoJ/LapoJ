const arr = [1,2,3,4,5,6,7,8,9,0]
const chunk = (arr, size) => {
  // return Array.from({
  //   length: Math.ceil(arr.length / size)
  // }, (v, i) => arr.slice(i*size, i*size + size))
  let res = []
  for (let i = 0; i < arr.length; i+=3) {
    res.push(arr.slice(i, i+size))
  }

  return res
}
console.log(chunk(arr, 3))