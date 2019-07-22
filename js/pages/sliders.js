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
        pagination: {
            el: '.psame__pag',
            clickable: true
        }
    });

});