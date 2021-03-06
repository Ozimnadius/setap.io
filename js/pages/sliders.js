// slider.js
$(function () {
    let slider = new Swiper ('.slider__container', {
        loop: true,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        pagination: {
            el: '.slider__pag',
            clickable: true
        }
    });

    let productSlider = new Swiper ('.psame__container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        grabCursor: true,
        pagination: {
            el: '.psame__pag',
            clickable: true,
            type: 'bullets'
        },
        breakpoints: {

            // when window width is <= 575.99px
            575.99: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 10,
            }, // when window width is <= 767.99px
            767.99: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
            },
            // when window width is <= 1199.99px
            1199.99: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    });

    let aadvsSlider = new Swiper('.aadvs__container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                spaceBetween: 10,
            },
        }
    });

    let auslugiSlider = new Swiper('.auslugi__container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
    });

});