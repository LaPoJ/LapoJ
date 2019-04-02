function generateHashtag(str) {
  // 复杂模式
  // if (str.lenght > 140) {
  //   return false;
  // }
  // if (str === '') {
  //   return false;
  // }
  // str = '#' + str;

  // str.map(element => { return element.charAt(0).toUpperCase() + element.slice(1)});
  // return str;

  return (str.length>14 || str == ' ') ? false : '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w) {
  console.log(w);
  return w.charAt(0).toUpperCase() + w.slice(1);
}
console.log(generateHashtag('How are you'));
console.log(generateHashtag('How are you How are you How are you How are you'));
