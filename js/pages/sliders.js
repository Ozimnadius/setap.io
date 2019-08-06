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
        },
        breakpoints: {
            // when window width is <= 767.99px
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



});