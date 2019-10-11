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

    $('.zones__sw').on('click', function (e) {
        let btn = $(this),
            src = btn.data('img'),
            imgObj = $('.market__zones-img');
        imgObj.attr('src', src);
    });

    if (document.querySelector('.market__sws')) {
        let subSwitches = new Switches({
            sws: '.market__sws',
            sw: '.market__sw',
            tab: '.market__tab',
            tabsContainer: '.market__tabs',
            activeTab: 1
        }).init();
    }

    $('.mplace__place-title').on('click', function (e) {
        let $this = $(this),
            item = $this.closest('.mplace__place'),
            sub = item.find('.mplace__place-sub');

        sub.slideToggle(400);
        $this.toggleClass('open');
    });

    $('.mplace__input').on('change', function (e) {
        let $this = $(this),
            count = $this.val(),
            item = $this.closest('.mplace'),
            price = parseInt(item.data('price').replace(/\s/g, '')),
            itemPrice = item.find('.mplace__price-val');

        let priceText = number_format(price * count, 0, '.', ' ');
        itemPrice.text(priceText);
        calcPlaces($this.closest('.mtab'));
    });

    $('.mserv__item-input').on('change', function (e) {
        let $this = $(this),
            checked = $this.prop('checked'),
            item = $this.closest('.mserv__item');

        if (checked) {
            item.addClass('checked');
        } else {
            item.removeClass('checked');
        }
        calcServ($this.closest('.mtab'));
    });

    function calcServ(tab) {
        let mserv = tab.find('.mserv'),
            total = 0,
            items = mserv.find('.mserv__item-input:checked');

        items.each(function (x, i) {
            let item = $(i).closest('.mserv__item'),
                price = getNumber(item.find('.mplace__item-val').text());
            total += price;
        });


        let totalText = number_format(total, 0, '.', ' ');
        mserv.attr('data-price', totalText);
        calcPlaces(tab);
    }

    function calcPlaces(tab) {
        let totalObj = tab.find('.mplaces__price-val .price__val'),
            total = 0,
            places = tab.find('.mplace'),
            totalPrice = tab.find('.mplaces__bottom'),
            count = tab.find('.mplaces__input').val();

        places.each(function (x, i) {
            let item = $(i),
                price = getNumber(item.attr('data-price')),
                count = item.find('.mplace__input').val() || 1;
            total += (price * count);
        });

        total = total * count;
        totalObj.text(number_format(total, 0, '.', ' '));
        totalPrice.attr('data-price', number_format(total, 0, '.', ' '));
    }

    $('.mplaces__input').on('change', function (e) {
        let $this = $(this),
            val = $this.val(),
            item = $this.closest('.mplaces__bottom'),
            price = getNumber(item.attr('data-price')),
            totalObj = item.find('.mplaces__price-val .price__val');
        let total = price * val;
        totalObj.text(number_format(total, 0, '.', ' '));
    });

    $('.mserv__check-input').on('change', function (e) {
        let $this = $(this),
            mserv = $this.closest('.mserv'),
            checked = $this.prop('checked'),
            inputs = mserv.find('.mserv__item-input');

        inputs.prop('checked', checked);
        inputs.trigger('change');
        inputs.trigger('change');

    });

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

    $('.mchars__top').on('click', function (e) {
        let $this = $(this),
            mchars = $this.closest('.mchars'),
            bottom = mchars.find('.mchars__bottom');
        $this.toggleClass('close');
        bottom.slideToggle();
    });

});