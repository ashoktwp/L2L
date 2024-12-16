$(document).ready(function() {
  $('.u4m-slider-simple .items').slick({
    dots: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});