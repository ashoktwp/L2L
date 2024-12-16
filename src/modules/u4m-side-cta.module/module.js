//Fade in for Slide in ctas
$(document).ready(function() {
  setTimeout(function() {
    $(".u4m-side-cta").fadeIn(500);
  }, 1500);

  $viewportWidth = $(window).width();

  if ($viewportWidth < 768) {
    $("section.u4m-side-cta").remove();
  }
});