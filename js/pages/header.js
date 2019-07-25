//header.js
$(function () {

    $(window).on('scroll', function () {
        let currScroll = $(window).scrollTop();
        let itemPosition = $('.header__bottom').offset().top;


        if (currScroll > itemPosition) {
            $('.header-fixed').addClass('active');
        } else {
            $('.header-fixed').removeClass('active');
        }
    });
});

