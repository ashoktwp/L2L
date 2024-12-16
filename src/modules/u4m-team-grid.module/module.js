//    $("section.u4m-team-grid .member-wrap>span>div").each(function() {
$("section.u4m-team-grid .member-wrap .member:not(.no-bio)").each(function() {
  var $this = $(this);
  var $inner = $this.find(".inner");
  var $exit = $this.find(".exit");
  var $fullScreen = $this.find(".full-screen");

  $this.click(function() {
    $fullScreen.toggleClass("bio-active");
    $fullScreen.addClass("pop");
    setTimeout(function() {
      $("html").addClass("popped");
      $("html").css('overflow-y', 'hidden');
    }, 200);
  });

  $exit.click(function() {
    $fullScreen.addClass("pop-exit");

    setTimeout(function() {
      $fullScreen.removeClass("pop-exit").removeClass("pop");
      $("html").removeClass("popped");
      $("html").css('overflow-y', 'auto');
    }, 300);
  });




});




$(document).click(function(e) {

  if ($("html").hasClass("popped")) {

    if ($(e.target).closest(".social-links").length > 0) {} else if ($(e.target).closest(".circle").length > 0) {

    } else {
      $(".full-screen.pop").addClass("pop-exit");
      setTimeout(function() {
        $(".full-screen.pop").removeClass("pop-exit").removeClass("pop");
        $("html").removeClass("popped");
        $("html").css('overflow-y', 'auto');
      }, 300);
    }

  }


});