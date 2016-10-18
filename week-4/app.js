// $(document).ready(function(){
//
//   console.log("good");
//
//   $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
//
// });

window.onload=function(){
  $('.slider').slick({
  autoplay: true,
  autoplaySpeed:1500,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:3,
  slidesToScroll:2,
  variableWidth: true
  });

  $('.flexslider').flexslider({
    animation: "slide"
  });
};
