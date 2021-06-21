new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity:0.1,
  image1:'./me.png',
  image2:'./my-photo.png',
  angle: Math.PI / 4,
  displacementImage: './heightMap.png'

})


var typed = new Typed(".typing",{
  strings: ["Full stack Software Developer", "an Economist", "a Crypto Enthusiast", " a Gamer"],
  typeSpeed : 100,
  backSpeed: 60,
  loop: true
});














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
  $('#more-btn').click(function(){
    $('#readmore').toggle("show");
  });






  $('.demo').percentcircle({

    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#FF2052',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });
    
        $('.demo1').percentcircle({
    
    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#B284BE',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });
    
          $('.demo2').percentcircle({
    
    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#7C0A02',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });
    
            $('.demo3').percentcircle({
    
    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#4AFF00',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });
    
              $('.demo4').percentcircle({
    
    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#1DACD6',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });
                  $('.demo5').percentcircle({
    
    animate : true,
    diameter : 100,
    guage: 2,
    coverBg: '#fff',
    bgColor: '#efefef',
    fillColor: '#FFC300',
    percentSize: '15px',
    percentWeight: 'normal'
    
    });





AOS.init();



});




