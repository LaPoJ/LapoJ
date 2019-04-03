const arr = 'bitcoin take over the world maybe who knows perhaps';



function firstShort(str) {
  const firShort = str =>  str.split(' ').map( w => w.lengh).sort((x, y) => x - y)[0];
}

// console.log(firstShort(arr));

function findShort(str) {
  // return Math.min(...str.split(' ').map(w => w.length));
  return Math.min.apply(null,(str.split(' ').map(w => w.length)));

}

console.log(findShort(arr));