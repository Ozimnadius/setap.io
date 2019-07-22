//catalog.js
$(function () {

    $('.cat__sort-select').selectize();

    $('.range__range').each(function (indx, elem) {
        var range = $(elem),
            filter = range.closest('.filter'),
            min = filter.data('from'),
            max = filter.data('to'),
            inputFrom = filter.find('.range__input_from'),
            inputTo = filter.find('.range__input_to'),
            numFrom = filter.find('.range__from'),
            numTo= filter.find('.range__to'),
            valMin = inputFrom.val(),
            valMax = inputTo.val();

        var slider = range.slider({
            range: true,
            min: min,
            max: max,
            values: [valMin, valMax],
            slide: function (event, ui) {
                inputFrom.val(ui.values[0]);
                inputTo.val(ui.values[1]);
            }
        });

        inputFrom.on('change', function (e) {
            var valMin = $(this).val(),
                valMax = inputTo.val();
            slider.slider({
                range: true,
                min: min,
                max: max,
                values: [valMin, valMax],
                slide: function (event, ui) {
                    inputFrom.val(ui.values[0]);
                    inputTo.val(ui.values[1]);
                }
            });
        });
        inputTo.on('change', function (e) {
            var valMax = $(this).val(),
                valMin = inputFrom.val();
            slider.slider({
                range: true,
                min: min,
                max: max,
                values: [valMin, valMax],
                slide: function (event, ui) {
                    inputFrom.val(ui.values[0]);
                    inputTo.val(ui.values[1]);
                }
            });
        });
    });

    $('.cmenu__item').on('click', function (e) {
        let item = $(this),
            sub = item.find('.cmenu__sublist');

        if (sub.length>0){
            e.preventDefault();
            if (item.hasClass('open')){
                item.removeClass('open')
            } else {
                item.addClass('open')
            }
            sub.slideToggle(300);
        }

    });

    $('.item__count .count__input').on('change', function (e) {
        let $this = $(this),
            val = $this.val(),
            item = $this.closest('.item'),
            input = item.find('.item__hidden .count__input');

        input.val(val);
    });

});