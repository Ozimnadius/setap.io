//index.js
$(function () {
    if (wWidth > 767.9) {
        let maxH = 0,
            uslugiTitle = $('.uslugi__item-title');

        uslugiTitle.each(function (x, i) {
            let height = $(i).outerHeight();

            if (maxH < height) {
                maxH = height;
            }
        });

        uslugiTitle.css('height', maxH);
    }
});