const svgContainer1 = document.querySelector('#svgContainer1')
if (svgContainer1){
  const anlottie1 = lottie.loadAnimation({
    container: svgContainer,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: './json/key_visual.json',
  });
  anlottie1.play();
}

const svgContainer2 = document.querySelector('#svgContainer1')
if (svgContainer2){
  const anlottie2 = lottie.loadAnimation({
    container: svgContainer,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: './json/feature1.json',
  });
  anlottie2.play();
}