//auto.js
$(function () {
    if (wWidth<768) {
        $('.aabout__desc').readmore({
            collapsedHeight: 124,
            moreLink: '<a href="#" class="more__link more__link_open">Развернуть</a>',
            lessLink: '<a href="#" class="more__link more__link_close">Свернуть</a>'
        });
    }


});