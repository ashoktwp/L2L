/**
 * jQuery scroroller Plugin 1.0
 *
 * http://www.tinywall.net/
 *
 * Developers: Arun David, Boobalan
 * Copyright (c) 2014
 */
! function($) {


  function numberRoller(a) {
    var b = $(".roller-title-number-" + a).attr("data-min"),
      c = $(".roller-title-number-" + a).attr("data-max"),
      d = $(".roller-title-number-" + a).attr("data-delay"),
      e = $(".roller-title-number-" + a).attr("data-increment"),
      f = c - b,
      g = 1e3 * d / f;
    numberRoll(a, b, c, e, g)
  }

  function numberRoll(slno, min, max, increment, timeout) {
    min <= max ? ($(".roller-title-number-" + slno).html(min), min = parseInt(min) + parseInt(increment), setTimeout(function() {
      numberRoll(eval(slno), eval(min), eval(max), eval(increment), eval(timeout))
    }, timeout)) : $(".roller-title-number-" + slno).html(max)
  }
  $(document).ready(function() {
    $(document).scrollzipInit(), $(document).rollerInit()
  }), $(window).on("load scroll resize", function() {
    $(".numscroller").scrollzip({
      showFunction: function() {
        numberRoller($(this).attr("data-slno"))
      },
      wholeVisible: !1
    })
  }), $.fn.scrollzipInit = function() {
    $("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>")

  }, $.fn.rollerInit = function() {
    var a = 0;
    $(".numscroller").each(function() {
      a++, $(this).attr("data-slno", a), $(this).addClass("roller-title-number-" + a)
    })
  }, $.fn.scrollzip = function(a) {
    var b = $.extend({
      showFunction: null,
      hideFunction: null,
      showShift: 0,
      wholeVisible: !1,
      hideShift: 0
    }, a);
    return this.each(function() {
      return $(this).addClass("scrollzip"), $.isFunction(b.showFunction) && !$(this).hasClass("isShown") && $(window).outerHeight() + $("#scrollzipPoint").offset().top - b.showShift > $(this).offset().top + (b.wholeVisible ? $(this).outerHeight() : 0) && $("#scrollzipPoint").offset().top + (b.wholeVisible ? $(this).outerHeight() : 0) < $(this).outerHeight() + $(this).offset().top - b.showShift && ($(this).addClass("isShown"), b.showFunction.call(this)), $.isFunction(b.hideFunction) && $(this).hasClass("isShown") && ($(window).outerHeight() + $("#scrollzipPoint").offset().top - b.hideShift < $(this).offset().top + (b.wholeVisible ? $(this).outerHeight() : 0) || $("#scrollzipPoint").offset().top + (b.wholeVisible ? $(this).outerHeight() : 0) > $(this).outerHeight() + $(this).offset().top - b.hideShift) && ($(this).removeClass("isShown"), b.hideFunction.call(this)), this
    })
  }
}(jQuery);