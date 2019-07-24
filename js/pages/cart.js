//cart.js
$(function () {

    $('.cart__down').on('click', function (e) {
        let $this = $(this),
            count = $this.closest('.count'),
            inputObj = count.find('.count__input'),
            val = inputObj.val();

        val--;

        if (val >= 1) {
            inputObj.val(val);
            inputObj.trigger('change');
        }
        calcTotal();
    });
    $('.cart__up').on('click', function (e) {
        calcTotal();
    });
    $('.cart__del').on('click', function (e) {
        let $this = $(this),
            item = $this.closest('.cart__item');
        item.remove();
        calcTotal();
    });

    function calcTotal() {
        let items = $('.cart__item'),
            countProducts = 0,
            countServices = 0,
            total = 0,
            totalObj = $('.ctotal__price-val'),
            countObj = $('.ctotal__count');

        items.each(function (x, i) {
            let item = $(i),
                type = item.data('type'),
                price = getNumber(item.find('.price__val').text()),
                count = item.find('.cart__input').val();

            if (type == 'product') {
                countProducts++;
            } else {
                countServices++;
            }

            total = total + (price * count);

        });


        countObj.text('Товаров: '+countProducts+'\xa0\xa0\xa0'+'Услуг: '+countServices);
        totalObj.text(number_format(total, '', '', ' '));


    }

});