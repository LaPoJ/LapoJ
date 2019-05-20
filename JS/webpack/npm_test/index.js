const add = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return +a + +b
  }
  return a + b
}

// 使用测试驱动来进行开发
module.exports = {
  add
}