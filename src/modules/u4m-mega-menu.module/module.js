$('.trigger').click(function () {
    $(this).next('.mb_menu_wrap').slideToggle(500);
    return false;
});


$('.childTrigger').click(function () {
    $(this).next('.child_wrapper').slideToggle(500).parent('li').siblings().children('.child_wrapper').slideUp(500);
    $(this).parent('li').toggleClass('child-open').siblings().removeClass('child-open');
    return false;
});
