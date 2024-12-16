if ($('.u4m-anchor-nav.has-sticky').length) {
  var header = $('.u4m-header');
  var nav = $('.u4m-anchor-nav');
  var innerNav = $('.u4m-anchor-nav .anchor-nav');
  var finalID = $('.u4m-anchor-nav .anchor-nav .single-anchor').last().attr('href');
  var finalSection = $(finalID)[0];
  innerNav.css('height', nav.outerHeight());
  $(window).on("load resize scroll", function(e) {
    var headHeight = header.outerHeight();
    var scroll = $(window).scrollTop();
    var navOffset = nav.offset().top;
    if (scroll >= navOffset - headHeight) {
      nav.addClass('sticky');
      innerNav.css('top', headHeight);
    } else {
      nav.removeClass('sticky');
      innerNav.css('top', '0');
    }
    var finalOffset = $(finalSection).offset().top + $(finalSection).parent().outerHeight();
    if (scroll >= finalOffset) {
      nav.addClass('bottom');
    } else {
      nav.removeClass('bottom');
    }
    $('.u4m-anchor-nav .anchor-nav .single-anchor').each(function() {
      var thisAnchor = $(this);
      var thisId = $(this).attr('href');
      var thisElem = $(thisId).get(0);
      if ($(thisElem).is_on_screen()) {
        thisAnchor.siblings().removeClass('active-anchor');
        thisAnchor.addClass('active-anchor');
      }
    });
  });
}
$.fn.is_on_screen = function() {
  // buffer = buffer || 0;
  // var win = $(window);
  // var viewport = {
  //   top: win.scrollTop(),
  //   left: win.scrollLeft()
  // };
  // viewport.bottom = viewport.top + win.height();
  // var bounds = this.offset();
  // bounds.bottom = bounds.top + this.outerHeight();
  // return (!((viewport.bottom - buffer) < bounds.top || (viewport.top + buffer) > bounds.bottom));
  var elementTop = $(this).offset().top + ($(window).height() - 150);
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};