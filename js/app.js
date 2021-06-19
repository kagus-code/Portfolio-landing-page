new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity:0.1,
  image1:'./me.png',
  image2:'./my-photo.png',
  angle: Math.PI / 4,
  displacementImage: './heightMap.png'

})

// $(document).ready(function(){
//   $(window).scroll(function(){
//     if (this.scrollY > 20){

//     }else{

//     }
//   })

// });





$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    

  });

});