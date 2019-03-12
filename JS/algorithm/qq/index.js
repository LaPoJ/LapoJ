// 数组是最廉价的的数据结构
let enc_qq = [6,3,1,7,5,8,9,2,4],qq = [];//真正的数组

// 指针
let head = 0 , //队首指针，要移除的元素位置
 tail = 9 ; //队尾指针，要加入的元素位置

// 指针操作
//第一个数移除
while(head < tail)
{
    qq.push(enc_qq[head]);
    head++;

    enc_qq[tail] = enc_qq[head];
    tail++;
    head++;
}
// enc_qq.shift();
console.log(qq);

console.log()

// API
// 第一个数移除
// qq.push(enc_qq[0]);
// enc_qq.shift();
// console.log(enc_qq);



// 删除数组中的第一个元素
// enc_qq.shift();
//插入元素
// enc_qq.unshift(0);
//删除数组最后一个元素
// enc_qq.pop();
// 数组的末尾添加元素
// enc_qq.push(0);
// console.log(enc_qq);

// // 字符串是字符合集
// console.log(enc_qq.length,enc_qq[0]);