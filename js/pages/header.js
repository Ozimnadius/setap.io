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

    $('.mmenu-button').on('click', function (e) {
        $('.mmenu').addClass('active');
    });

    $('.mmenu__close').on('click', function (e) {
        $('.mmenu').removeClass('active');
    });

    $('.mmenu__item-link').on('click', function (e) {
        let $this = $(this),
            item = $this.closest('.mmenu__item'),
            wrap = $(item.find('.mmenu__wrapper')[0]),
            parentWrap = item.closest('.mmenu__wrapper');

        if (wrap.length > 0) {
            e.preventDefault();
            wrap.addClass('active');
            parentWrap.addClass('no-scroll');
            $('.mmenu').addClass('no-scroll');
        }
    });

    $('.mmenu__prev').on('click', function (e) {
        let $this = $(this),
            wrap = $(this).closest('.mmenu__wrapper'),
            parentWrap = wrap.parent().closest('.mmenu__wrapper');

        parentWrap.removeClass('no-scroll');
        wrap.removeClass('active');

        if (parentWrap.length == 0) {
            $('.mmenu').removeClass('no-scroll');
        }

    });

    $('.mmenu__city').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            val = $this.find('.mmenu__item-title').text(),
            wrap = $this.closest('.mmenu__wrapper'),
            city = $('.mmenu__item-city');


        city.text(val);
        wrap.removeClass('active');
        $('.mmenu').removeClass('no-scroll');
    });
});

