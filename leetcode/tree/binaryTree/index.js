// binary tree
function TreeNode(val){
  this.val = val
  this.leftNode = this.rightNode = null
}

let a1 = new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a1.leftNode = a2
a1.rightNode = a3
a3.leftNode = a4
a3.rightNode = a5

// console.log(a1)

//#regin
  // 遍历
  // function traversing(treeNode) {
  //   console.log(treeNode.val)
  //   if (treeNode.leftNode !== null) {
  //     traversing(treeNode.leftNode)
  //   }
  //   if (treeNode.rightNode !== null) {
  //     traversing(treeNode.rightNode)
  //   }
  // }

  // traversing(a1)
//#regin

function levelOrderTravesal(root){
  if(!root) return []
  const items = []
  const queue = [root, null] // 队列, 等待被了解情况的结点， 出队 shift push
  let levelNodes = [] // 每一层的节点
  while (queue.length > 0) {
    const t = queue.shift()
    if (t) {
      levelNodes.push(t.val)
      if (t.leftNode) {
        queue.push(t.leftNode)
      }
      if (t.rightNode) {
        queue.push(t.rightNode)
      }
    }else{
      items.push(levelNodes)
      levelNodes = []
      // null 上一层 此时结点为 下一层的所有的接地那，没有下下层的节点
      // 按层遍历
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }

  return items
}

console.log(levelOrderTravesal(a1))