// // const $gallery = $('.MainsliderCnnt');

// // $gallery .slick({
// //   autoplay: true,
// //   autoplaySpeed: 0,
// //   speed: 1500,
// //   arrows: false,
// //   swipe: false,
// //   slidesToShow: 8,
// //   cssEase: 'linear',
// //   pauseOnFocus: false,
// //   pauseOnHover: true,   
// //   rtl: false,   
// //   arrows: false,
// //   swipe: false,
// //   slidesToShow: 8,
// //   slidesToScroll: 1,
// //   autoplay: true,
// //   autoplaySpeed: 0,
// //   speed: 2000,
// //   pauseOnHover: true,  
// //   cssEase: 'linear',

// //   responsive: [
// //     {
// //       breakpoint: 1200,        // Medium screens
// //       settings: {
// //         slidesToShow: 6,       // Show 6 slides
// //       }
// //     },
// //     {
// //       breakpoint: 992,         // Small screens
// //       settings: {
// //         slidesToShow: 4,       // Show 4 slides
// //       }
// //     },
// //     {
// //       breakpoint: 768,         // Extra-small screens
// //       settings: {
// //         slidesToShow: 2,       // Show 2 slides
// //       }
// //     }
// //   ]
// // });





document.addEventListener('DOMContentLoaded', function () {
  new Splide('.MainsliderCnntt.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 6,
    autoScroll: {
      speed: 2.4,
    },
    arrows: false,
    pagination: false,
    breakpoints: {
      650: {
        perPage: 1,

      },
      768: {
        perPage: 2,

      },
      992: {
        perPage: 3,

      },
      1200: {
        perPage: 5,

      },
    }
  }).mount( window.splide.Extensions );
});


