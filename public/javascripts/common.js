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

const svgContainer4 = document.querySelector('#svgContainer4')
if (svgContainer4){
  const anlottie4 = lottie.loadAnimation({
    container: svgContainer4,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: './feature2.json',
  });
  anlottie4.play();
}

const svgContainer5 = document.querySelector('#svgContainer5')
if (svgContainer5){
  const anlottie5 = lottie.loadAnimation({
    container: svgContainer5,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: './create-bean.json',
  });
  anlottie5.play();
}

function svgInview2() {
  $('#svgContainer6').each(function () {
      $(this).on('inview', function (event, isInView) {
          if (isInView) {
            const anlottie6 = lottie.loadAnimation({
              container: svgContainer6,
              animType: 'svg',
              loop: false,
              autoplay: false,
              path: './successful.json',
            });
            anlottie6.play();
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
  svgInview2();
});