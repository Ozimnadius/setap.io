// common.js
function Switches(prop) {
    this.sws = document.querySelector(prop.sws);
    this.swsList = document.querySelectorAll(prop.sw);
    this.tabs = document.querySelectorAll(prop.tab);
    this.tabSelector = prop.tab;
    this.tabsContainer = document.querySelector(prop.tabsContainer);

    let that = this;

    this.init = function () {
        let $this = that.swsList[0],
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

$('input[type=tel]').mask('+7 (999) 999-99-99');