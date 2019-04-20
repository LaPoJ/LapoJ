// 接口的理解

// googleMap => 对象   gaodeMap
const googleMap = {
  show() {
    console.log('开始渲染Google地图！');
  }
}
const gaodeMap = {
  show() {
    console.log('开始渲染Gaode地图！');
  }
}
const sosoMap = {
  show() {
    console.log('开始渲染soso地图！');
  }
}
const sosoTMap = {
  show: "none"
}

const baiduMap = {
  // 为互换做准备
  show() {
    console.log('开始渲染Baidu地图！');
  }
}


// const renderMap = (fn) =>{
//   分支太多
//   if (fn === 'baiduMap') {
//     baiduMap.show();
//   }else{
//     googleMap.show();
//   }
// }

const renderMap = (map) => {
  // map 检测
  // if (map.show && typeof map.show === 'function') {
  //   map.show();
  // }
  if (map.show instanceof Function) {
    map.show();
  }
}
renderMap(baiduMap);
console.log("---------------");
renderMap(googleMap);
console.log("---------------");
renderMap(gaodeMap);
console.log("---------------");
renderMap(sosoMap);
console.log("---------------");
renderMap(sosoTMap);


