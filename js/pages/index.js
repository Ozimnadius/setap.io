//index.js
$(function () {




    if (wWidth > 767.9) {
        let maxH = 0,
            icatsTitle = $('.icat__title');

        icatsTitle.each(function (x, i) {
            let height = $(i).outerHeight();

            if (maxH < height) {
                maxH = height;
            }
        });

        icatsTitle.css('height', maxH);
    }

    if (document.querySelector('.sols__sws')) {
        let subSwitches = new Switches({
            sws: '.sols__sws',
            sw: '.sols__sw',
            tab: '.sols__tab',
            tabsContainer: '.sols__tabs'
        }).init();
    }
    if (document.querySelector('.iready__sws')) {
        let switches = new Switches({
            sws: '.iready__sws',
            sw: '.iready__sw',
            tab: '.iready__tab',
            tabsContainer: '.iready__tabs'
        }).init();
    }
    if (document.querySelector('.iready__msws')) {
        let switches = new Switches({
            sws: '.iready__msws',
            sw: '.iready__msw',
            tab: '.iready__mtab',
            tabsContainer: '.iready__mtabs'
        }).init();
    }


    let ireadySws = new Swiper('.iready__sws-container', {
        slidesPerView: 'auto',
        grabCursor: true
    });

    let ireadySlider = new Swiper('.iready__container', {
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 10
    });


    let quiz = new Swiper('.quiz__container', {
        effect: 'cube',
        speed: 1500,
        allowTouchMove: false,
        cubeEffect: {
            shadow: false,
        },
        on: {
            slideChange: function (e) {
                // console.log(this);
                let counter = this.slides.length,
                    i = this.activeIndex + 1,
                    slide = $(this.slides[this.activeIndex]),
                    scrollbar = slide.find('.quiz__scrollbar'),
                    scrollbarLine = scrollbar.find('.quiz__scrollbar-line'),
                    width = '';

                width = ((100 / counter) * i) + '%'
                scrollbarLine.css('width', width);

            }
        }
    });

    $('.quiz__submit').on('click', function (e) {
        $(this).closest('.quiz__form').submit();
    });

    $('.quiz__form').validate(
        {
            rules: {
                quizName: "required",
                quizEmail: "required"
            },
            messages: {
                quizName: "Необходимо указать Ваше имя",
                quizEmail: "Неправильно указан адрес электронной почты"
            },
            submitHandler: function (form) {
                //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                quiz.slideNext();
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
            }
        }
    );

    $('.jsQuizNext').on('click', function (e) {
        e.preventDefault();
        quiz.slideNext();
    });

    $('.ichart__item-after').each(function (x, i) {

        let item = $(i),
            parent = item.closest('.ichart__item'),
            height = parent.outerHeight() - 33,
            arr = parent.find('.ichart__item-arr'),
            line = parent.find('.ichart__line'),
            bottomLine = parent.find('.ichart__item-before');

        if (x == 0) {
            $('.ichart__list').css({
                // paddingRight: (height/2)+'px'
            });
        }

        item.css({
            height: height + 'px',
            width: height + 'px',
            // left: 'calc(100% - '+(height/2)+'px)'
        });
        line.css({
            marginRight: (height / 2) + 'px'
        });
        arr.css({
            right: (height / 2) + 'px'
        });
        bottomLine.css({
            right: (height / 2) + 'px'
        });

    });

    $('.feed__form').validate(
        {
            rules: {
                name: "required",
                tel: "required"
            },
            messages: {
                name: "Укажите Ваше имя",
                tel: "Укажите Ваш телефон"
            },
            submitHandler: function (form) {
                //ToDo здесь должен быть ajax, при успешной отправке данных появляется всплывающее окно с результатом
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
            }
        }
    );

    $('.count__up').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            count = $this.closest('.count'),
            inputObj = count.find('.count__input'),
            val = inputObj.val();
        val++;
        inputObj.val(val);
        inputObj.trigger('change');
    });
    $('.count__down').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            count = $this.closest('.count'),
            inputObj = count.find('.count__input'),
            val = inputObj.val();

        val--;
        if (val >= 1) {
            inputObj.val(val);
            inputObj.trigger('change');
        }
    });


    let icats = $('.icats'),
        row = icats.find('.icats__hidden-row');

    if (wWidth < 768) {
        let icatItems = icats.find('.icat').slice(6);
        row.append(icatItems);
    } else if (wWidth < 1200) {
        let icatItems = icats.find('.icat').slice(16);
        row.append(icatItems);
    }

    $('.icats__more').on('click', function (e) {
        $('.icats__hidden').slideDown();
        $(this).hide();
    });


});