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

    let quiz = new Swiper ('.quiz__container', {
        effect: 'cube',
        speed: 1500,
        grabCursor: true,
        cubeEffect: {
            shadow: false,
        },

        scrollbar: {
            el: '.quiz__scrollbar',
            draggable: true,
        },
    });

});