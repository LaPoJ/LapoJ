// let ran_num = Math.random();


// 函数表达式
const hongbao = (total, num) => {
  const arr = [];  //待分配的金额数组

  // 定义计算量
  let restAmount = total;
  let restNum = num;

  for (let i = 0; i < num - 1; i++) {
    // 前n-1发随机,怎么发才能使金额比较公平

    let amout = (Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
    arr[i] = amout;
    restAmount -= amout;
    restNum--;
  }
  arr.push(restAmount.toFixed(2));

  console.log(arr);

  return arr;
}

hongbao(20,48);
