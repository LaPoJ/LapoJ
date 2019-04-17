// console.log(11 >> 1);
// 位移运算符
// 二进制位 0000 1011
// 0000 0101

// N piles of bananas 每挂香蕉上的香蕉数不一样

// [3, 6, 7, 11] //在H小时内吃完 一小时吃几根？
//一小时吃mid跟香蕉，一次只吃以阿布，一次只吃一把，一小时最少吃几根？可以在H小时内吃完？
/**
 * @desc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */

// function minEatingSpeed(piles, H){
//   let lo = 1;

//   return lo;
// }

// 吃完香蕉   H小时内吃完   最小的一个数
/**
 * @desc 判断能否吃完香蕉
 * @param {number[]} piles
 * @param {number} H
 * @param {number} mid
 * @return {booblean}
 */
function canEatAllBananas(piles, H, mid) {
  let h = 0;
  for (let pile of piles) {
    h += Math.ceil(pile/mid);
  }

  return h <= H;
}

let piles = [3, 6, 7, 11]
console.log(canEatAllBananas(piles, 8, 4));