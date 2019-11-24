// 中序遍历 方案 2：栈
function TreeNode(val) {
  this.val = val
  this.l = this.r = null
}

var inorderTraversal = (root) => {
  var stack = [] //堆栈
  var result = []  // 解脱
  var cur;  // 当前的
  cur = root
  while (stack.length > 0 || cur !== null) {
    // 结点不为空
    if (cur !== null) {
      stack.push(cur)
      cur = cur.l   // cur === null
    } else {
      cur = stack.pop()   // 第一次 是 最左边的叶子
      result.push(cur.val)
      cur = cur.r
    }
  }
  return result
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
a1.l = a2
a1.r = a3

console.log(inorderTraversal(a1))
