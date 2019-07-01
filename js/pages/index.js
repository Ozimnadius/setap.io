//index.js
$(function () {

    let maxH = 0,
        icatsTitle = $('.icat__title');

    icatsTitle.each(function (x, i) {
        let height = $(i).outerHeight();

        if (maxH<height){
            maxH = height;
        }
    });

    icatsTitle.css('height', maxH);

    let subSwitches = new Switches({
        sws: '.sols__sws',
        sw: '.sols__sw',
        tab: '.sols__tab',
        tabsContainer: '.sols__tabs'
    }).init();

    let switches = new Switches({
        sws: '.iready__sws',
        sw: '.iready__sw',
        tab: '.iready__tab',
        tabsContainer: '.iready__tabs'
    }).init();


});