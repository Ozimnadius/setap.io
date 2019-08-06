//to.js
$(function () {

    if (document.querySelector('.to__sws')) {
        let subSwitches = new Switches({
            sws: '.to__sws',
            sw: '.to__sw',
            tab: '.to__tab',
            tabsContainer: '.to__tabs'
        }).init();
    }
    $('.tarifs__sw').on('click', function (e) {
        let sw = $(this),
            sws = $('.tarifs__sw'),
            id = sw.data('id'),
            tab = $('.tarifs__tab[data-id='+id+']'),
            tabs = $('.tarifs__tab');

        sws.removeClass('active');
        sw.addClass('active');
        tabs.removeClass('active');
        tab.addClass('active');
    });




    let productSlider = new Swiper('.to__advs-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                spaceBetween: 10,
            }
        }
    });

    let productToSlider = new Swiper('.to__slider-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
    });

    $('.to__tab-more').on('click', function (e) {
        let $this = $(this),
            tab = $this.closest('.to__tab'),
            content = tab.find('.to__tab-content');

        $this.toggleClass('active');
        content.toggleClass('active');
    });

    if (wWidth<768){

    }
});