//to.js
$(function () {

    if (document.querySelector('.zones__sws')) {
        let subSwitches = new Switches({
            sws: '.zones__sws',
            sw: '.zones__sw',
            tab: '.zones__tab',
            tabsContainer: '.zones__tabs'
        }).init();
    }
    if (document.querySelector('.market__sws')) {
        let subSwitches = new Switches({
            sws: '.market__sws',
            sw: '.market__sw',
            tab: '.market__tab',
            tabsContainer: '.market__tabs'
        }).init();
    }

    $('.mplace__place-title').on('click', function (e) {
        let $this = $(this),
            item = $this.closest('.mplace__place'),
            sub = item.find('.mplace__place-sub');

        sub.slideToggle(400);
        $this.toggleClass('open');
    });

    $('.mplace__place-input').on('change', function (e) {
        let $this = $(this),
            count = $this.val(),
            price = parseInt($this.data('price').replace(/\s/g, '')),
            item = $this.closest('.mplace__place-item'),
            itemPrice = item.find('.price__val');

        itemPrice.text(number_format(price * count, 0, '.', ' '))
        calcPlaces($this.closest('.mtab'));
    });

    function calcPlaces(tab) {
        let totalObj = tab.find('.mplaces__price-val .price__val'),
            total = 0,
            places = tab.find('.mplace__place-price .price__val'),
            items = tab.find('.mplace__item-price .price__val');

        places.each(function (x,i) {
            let item = $(i),
            price = getNumber(item.text());
            total += price;
        });
        items.each(function (x,i) {
            let item = $(i),
            price = getNumber(item.text());
            total += price;
        });
        totalObj.text(number_format(total, 0, '.', ' '))

    }

    let marketSlider1 = new Swiper('.mslider__container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
    });
    let marketSlider2 = new Swiper('.mslider2__container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
    });

    $('.market__more').on('click', function (e) {
        let button = $(this),
            content = $('.market__contentm-position');

        button.toggleClass('active');
        content.toggleClass('active');

    });

});