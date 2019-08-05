//product.js
$(function () {

    $('.product__img').on('click', function (e) {
        let $this = $(this),
            src = $this.data('img'),
            imgs = $('.product__img'),
            image = $('.product__image-img');

        imgs.removeClass('active');
        $this.addClass('active');
        image.attr('src', src);
    });

    $('.pkit__radio-input').on('change', function (e) {

        let $this = $(this),
            price = $this.data('price'),
            val = $this.val(),
            item = $this.closest('.pdop'),
            tarif = item.find('.pdop__tarif-tarif'),
            itemPrice = item.find('.pdop__price-val');

        tarif.text(val);
        itemPrice.text(number_format(price,'','',' '));
        calcTotal();
    });

    $('.pdop__input, .product__input').on('change',function (e) {
       calcTotal();
    });

    function calcTotal() {
        let productPrice = getNumber($('.product__price .price__val').text()),
            productCount = $('.product__count .count__input').val(),
            dops = $('.pdop__input:checked'),
            total = 0,
            totalObj = $('.ptotal__price-val');

        dops.each(function (x, i) {
            let item = $(i).closest('.pdop'),
                price = getNumber(item.find('.pdop__price-val').text());
            total = price + total;
        });

        total = (total+productPrice)*productCount;

        totalObj.text(number_format(total,'','',' '));
    }

    $('.product__drop-button').on('click', function (e) {
        let $this = $(this),
            drop = $this.closest('.product__drop'),
            block = drop.find('.product__drop-block');

        $this.toggleClass('active');
        block.slideToggle();

    });

});