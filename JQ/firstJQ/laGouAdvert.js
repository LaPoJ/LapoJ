var a = 0;
var interval
function setBannerInterval() {
  interval = setInterval(function() {
    a++
    if (a > 2) {
      a = 0
    }
    addBannerAnimation();
  }, 1000)
}

function addBannerAnimation() {
  $('.banner_bg').animate({marginTop:(-a*160) + 'px' },20);
  $('.banner_control em').animate({top: (a*55) + 'px' }, 20);
  $('.banner_control .current').removeClass('current');
  $('.thumbs li').eq(a).addClass('current');
}

$('.thumbs li').mouseover(function() {
  var n = $(this).index()
  a = n;
  console.log(n)
  addBannerAnimation();
  clearInterval(interval);
})
// .movseout(function(){
//   addBannerAnimation();
// })

setBannerInterval()





// var a = 0;
// var interval

// function setBannerInterval() {
//   interval = setInterval(function () {
//     a++
//     if (a > 2) {
//       a = 0
//     }
//     addBannerAnimation();
//   }, 1000)
// }

// function addBannerAnimation() {
//   $('.banner_bg').animate({
//     marginTop: (-a * 160) + 'px'
//   }, 200);
//   $('.banner_control em').animate({
//     top: (a * 55) + 'px'
//   }, 200);
//   $('.banner_control .current').removeClass('current');
//   $('.thumbs li').eq(a).addClass('current');
// }
// $('.thumbs li').mouseover(function () {
//   var n = $(this).index()
//   a = n;
//   console.log(n)
//   addBannerAnimation();
//   clearInterval(interval)
// }).mouseout(function () {
//   addBannerAnimation();
// })
// setBannerInterval()