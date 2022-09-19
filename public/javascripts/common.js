const svgContainer1 = document.querySelector('#svgContainer1')
if (svgContainer1){
  const anlottie1 = lottie.loadAnimation({
    container: svgContainer1,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: './key_visual.json',
  });
  anlottie1.play();
}

//圖往右滑的效果
function svgInview() {
  $('#svgContainer2').each(function () {
      $(this).on('inview', function (event, isInView) {
          if (isInView) {
            const anlottie2 = lottie.loadAnimation({
              container: svgContainer2,
              animType: 'svg',
              loop: false,
              autoplay: false,
              path: './no_repeat.json',
            });
            anlottie2.play();
            const anlottie3 = lottie.loadAnimation({
              container: svgContainer3,
              animType: 'svg',
              loop: true,
              autoplay: false,
              path: './repeat.json',
            });
            anlottie3.play();
          }
      });
  });
}

// ScrollLottie({
//   target: '#svgContainer2',
//   path: './feature1.json', 
//   duration: 4, 
//   speed: 'medium'
// })

$(document).ready(function () {
  svgInview();
});