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
});