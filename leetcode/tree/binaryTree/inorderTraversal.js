// 中序遍历 方案 1: 递归
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function inorderTraversal(root) {
  let arr = []
  const inorder = (root) => {
    if (root === null) return null
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return arr
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
a1.left = a2
a1.right = a3

console.log(inorderTraversal(a1))