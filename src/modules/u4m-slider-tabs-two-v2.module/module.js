



//   document.addEventListener('DOMContentLoaded', function () {
//     // Initialize Splide
//     const videosplide = new Splide('#expanding-slider', {
//       type: 'slide',
//       // perPage: auto,
//       focus: 'center',
//       gap: '1rem',
//       pagination: false,
//       arrows: false,

//       type: 'slide',
//       autoWidth: true, // Enable dynamic slide widths
//       gap: '1rem', // Space between slides
//       interval: 3000,      // Time between slides (in milliseconds)
//       arrows: false, // Disable default arrows

//     });

//     videosplide.mount();

//     // Select slide and navbar items
//     const slides = document.querySelectorAll('.splide__slide');
//     const navItems = document.querySelectorAll('#custom-navbar .nav-item');

//     // Sync navbar item when a slide becomes active
//     videosplide.on('move', function (index) {
//       navItems.forEach(item => item.classList.remove('active'));
//       slides.forEach(slide => slide.classList.remove('slick-now'));
//       navItems[index].classList.add('active');
//       slides[index].classList.add('slick-now');
//     });

//     // Handle navbar item clicks
//     navItems.forEach((navItem, index) => {
//       navItem.addEventListener('click', () => {
//         // Move slider to corresponding slide
//         videosplide.go(index);
//       });
//     });


//     //     
//     videosplide.on('mounted', function () {
//       document.getElementById('tab-prev-arrow').addEventListener('click', () => videosplide.go('<'));
//       document.getElementById('tab-next-arrow').addEventListener('click', () => videosplide.go('>'));
//     });



//     // Handle slide clicks
//     slides.forEach((slide, index) => {
//       slide.addEventListener('click', () => {
//         // Move slider to corresponding slide
//         videosplide.go(index);
//       });
//     });
//   });
