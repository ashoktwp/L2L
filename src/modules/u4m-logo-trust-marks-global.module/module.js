const $gallery = $('.MainsliderCnntt');

$gallery .slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 1500,
  arrows: false,
  swipe: false,
  slidesToShow: 8,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: true,   
    rtl: false,   
  responsive: [
    {
      breakpoint: 1200,        // Medium screens
      settings: {
        slidesToShow: 6,       // Show 6 slides
      }
    },
    {
      breakpoint: 992,         // Small screens
      settings: {
        slidesToShow: 4,       // Show 4 slides
      }
    },
    {
      breakpoint: 768,         // Extra-small screens
      settings: {
        slidesToShow: 2,       // Show 2 slides
      }
    }
  ]
});
