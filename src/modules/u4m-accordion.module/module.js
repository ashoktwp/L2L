$('.acc_ttl').click(function () {
    $(this).next().slideToggle(500).parent().siblings().children('.acc_cnt').slideUp();
    $(this).toggleClass('active').parent().siblings().children('.acc_ttl').removeClass('active')
})