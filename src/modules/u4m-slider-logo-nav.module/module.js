$('.logos a').each(function(i) {
    $(this).on('click', function() {
        $("html").addClass("disable-u4m-slider-logo-nav");
        setTimeout(function() {
            $('html').removeClass("disable-u4m-slider-logo-nav");
        }, 600);

        console.log("clicking");
        $('.quotes').removeClass("autoplay");
        var $this = $(this);

        if ($this.hasClass("active")) {} else {

            $('.logos a.active').removeClass("active");
            $('.quotes .slide.active').addClass("exit");

            setTimeout(function() {
                $('.quotes .slide.exit').removeClass("active exit");
            }, 600);

            $this.addClass("active");
            $('.quotes .slide').eq(i).addClass("active");
        }
    });
});


$(document).ready(function() {
    // Get an array of all element heights
    var elementHeights = $('.quotes .slide').map(function() {
        return $(this).height();
    }).get();

    // Math.max takes a variable number of arguments
    // `apply` is equivalent to passing each height as an argument
    var maxHeight = Math.max.apply(null, elementHeights);

    // Set each height to the max height
    $('.quotes').height(maxHeight);
    $('.quotes .slide').height(maxHeight);
});


var $seconds = $(".autoplay.quotes").attr("seconds");
var $seconds = $seconds * 1000;

window.setInterval(function() {
    var $seconds = $(".autoplay.quotes").attr("seconds");
    if ($(".quotes").hasClass("autoplay")) {

        $("html").addClass("disable-u4m-slider-logo-nav");
        setTimeout(function() {
            $('html').removeClass("disable-u4m-slider-logo-nav");
        }, 600);

        var next = $(".logos a.active").next('a');

        if (next.length) {
            $('.logos a.active').removeClass('active');
            next.addClass('active');

            $('.quotes .slide.active').addClass("exit");

            setTimeout(function() {
                $('.quotes .slide.exit').removeClass("active exit");
            }, 600);

            var nextIndex = $('.logos a.active').index();
            $('.quotes .slide').eq(nextIndex).addClass("active");
        } else {
            $('.logos a.active').removeClass("active");
            $('.logos a:first-child').addClass("active");
            $('.quotes .slide.active').addClass("exit");

            setTimeout(function() {
                $('.quotes .slide.exit').removeClass("active exit");
            }, 600);
            $('.quotes .slide:first-child').addClass("active");
        }
    }
}, $seconds);
