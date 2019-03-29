# 数组的处理
  - arr.find() 寻找单个元素
  - arr.findIndex() 寻找元素的下标
  - arr.filter() 寻找符合要求的元素,没有符合要求的则返回一个空数组
  - arr.every() 依据要求来遍历数组元素，所有元素符合要求则返回true，否则返回fales
  - arr.some() 有一个满足要求则返回true


# 解构赋值
  - 数组解构：const[a, b, c] = [18, 19, 30]
  - 部分解构：const[, , d, e] = [18, 19, 30] -- e = undefined
  - 对象解构：var {foo, baz} = { foo: 'foo val', bar: 'bar val', baz: 'baz val' } 若匹配了不存在的属性则为undefined,匹配顺序可打乱

# 类数组
  - Array.from() 讲一个类数组转换成一个真数组

#扩展运算符
  - 