LRU Least Recently Used

最少使用原则

<!-- 发生在操作系统的内存中 -->
node fs
硬盘 ->
  内存 -> CPU  => 小，快 存储上线：N
  内存容量是多少   超过容量后要有一个淘汰的机制
  最近最少使用

  meet 缓存

  LRUCache
    -> 两个
    put [index:value] {key:value}
    1 -> 存入 put(1, 1)
    2 -> 存入 put(2, 2)
    3 -> 存入 put(3, 3) 移除1 存入3
    4 -> 存入 put(4, 4) 移除2 存入3
    5 -> get(3, 3)
      数组 [1,2,3,4] O(n)
      对象 {1:1, 2:2, 3:3, 4:4}  O(1)
      对象字面量 -> 存取的数据结构