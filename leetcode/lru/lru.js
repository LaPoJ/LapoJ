var LRUCache = function(capacity) {

  this.capacity = capacity;  //容量

  this.obj = {}; //存放数据

  // 最近最少使用
  // obj 存取， 数组来存重要性
  // 开头[0], 结尾 .length-1
  // unshift() pop()
  this.arr = [];
}

LRUCache.prototype.get = function(key) {

}
LRUCache.prototype.set = function(key, val) {

}