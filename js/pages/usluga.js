//index.js
$(function () {
    $('.uaside__title').on('click', function (e) {
        $(this).toggleClass('active');
        $('.uaside__list').toggleClass('active');
    });
});