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
});