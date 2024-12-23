$(document).ready(function() {
  $(' .u4m-simple-slider .Cmslider').slick({
    dots: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,  
    pauseOnFocus: false,
    pauseOnHover: true,   
  });
});