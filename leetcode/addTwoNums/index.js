function LinkedNode(val){
  this.val = val
  this.next = null
}

function addTwoNumbers(l1, l2) {

}

let a1 = new LinkedNode(5) // head结点
// console.log(a1)
let a2 = new LinkedNode(2)
let a3 = new LinkedNode(9) // 尾结点
a1.next = a2
a2.next = a3

let b1 = new LinkedNode(8)
let b2 = new LinkedNode(6)
let b3 = new LinkedNode(3)
b1.next = b2
b2.next = b3

let node = a1
let arr = []
while(node){
  console.log(node.val)
  arr.push(node.val)
  node = node.next
}

console.log(addTwoNumbers(a1, b1))