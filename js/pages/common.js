// common.js
function Switches(prop) {
    this.sws = document.querySelector(prop.sws);
    this.swsList = document.querySelectorAll(prop.sw);
    this.tabs = document.querySelectorAll(prop.tab);
    this.tabSelector = prop.tab;
    this.tabsContainer = document.querySelector(prop.tabsContainer);
    this.activeTab = prop.activeTab || 0;

    let that = this;

    this.init = function () {
        let $this = that.swsList[that.activeTab],
            id = $this.dataset.id,
            maxH = 0,
            tab = document.querySelector(that.tabSelector + '[data-id="' + id + '"]');


        for (let i = 0; i < that.swsList.length; i++) {
            that.swsList[i].classList.remove('active');
        }

        for (let i = 0; i < that.tabs.length; i++) {
            that.tabs[i].classList.remove('active');
            let height =  that.tabs[i].offsetHeight;

            if (maxH<height) {
                maxH = height;
            }
        }

        tab.classList.add('active');
        $this.classList.add('active');
        that.tabsContainer.style.height = maxH+'px';

    };

    for (let i = 0; i < that.swsList.length; i++) {
        that.swsList[i].addEventListener('click', function (e) {

            let percent = (this.offsetLeft / that.width) * 100,
                id = this.dataset.id,
                tab = document.querySelector(that.tabSelector + '[data-id="' + id + '"]');


            for (let i = 0; i < that.swsList.length; i++) {
                that.swsList[i].classList.remove('active');
            }

            for (let i = 0; i < that.tabs.length; i++) {
                that.tabs[i].classList.remove('active');
            }

            tab.classList.add('active');
            this.classList.add('active');

        });
    }
}

function getNumber(str) {
    return parseInt(str.replace(/\s/g, ''));
}

function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}

$('input[type=tel]').mask('+7 (999) 999-99-99');

const wWidth = $(window).width();