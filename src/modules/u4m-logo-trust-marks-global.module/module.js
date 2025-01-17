// const $gallery = $('.MainsliderCnntt');

// $gallery .slick({

//   slidesToShow: 8,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   speed: 3000,
//   pauseOnHover: false,
//   cssEase: 'linear',
//   infinite : true,
//   responsive: [
//     {
//       breakpoint: 1200,        // Medium screens
//       settings: {
//         slidesToShow: 6,       // Show 6 slides
//       }
//     },
//     {
//       breakpoint: 992,         // Small screens
//       settings: {
//         slidesToShow: 4,       // Show 4 slides
//       }
//     },
//     {
//       breakpoint: 768,         // Extra-small screens
//       settings: {
//         slidesToShow: 2,       // Show 2 slides
//       }
//     }
//   ]
// });

// const $gallery = $('.MainsliderCnntt');

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".MainsliderCnntt.splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 6,
    autoScroll: {
      speed: 2.4,
    },
    arrows: false,
    pagination: false,
    breakpoints: {
      680: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      992: {
        perPage: 4,
      },
      1200: {
        perPage: 5,
      },
    },
  }).mount(window.splide.Extensions);
});
