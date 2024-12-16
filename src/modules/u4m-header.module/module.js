var lazyLoadInstance = new LazyLoad({
  //Your custom settings go here
});

lazyLoadInstance.update();

// Add mega drop class
$("header.u4m-header .menu .hs-menu-flow-horizontal ul li a span.mega").parent().parent().addClass('mega-drop');

const html = document.documentElement;
const body = document.querySelector('body');
const header = document.querySelector('.u4m-header');
const searchToggles = header.querySelectorAll('.search-toggle-button');
const mobileToggle = header.querySelector('.hamburger-toggle');
// for each search toggle button
searchToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    body.classList.toggle('search-overlay-active');
  });
});
// Mobile Menu
mobileToggle.addEventListener('click', function() {
  html.classList.toggle('menu-open');
  if (!this.classList.contains('close')) {
    this.classList.add('close');
    open = true;
  } else {
    this.classList.remove('close');
    html.classList.toggle('menu-closing');
    setTimeout(function() {
      html.classList.toggle('menu-closing');
    }, 800);
    open = false;
  }
});