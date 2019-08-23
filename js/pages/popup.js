//popup.js
$(function () {
    let popup = $('.popup'),
        popupWrapper = popup.find('.popup__wrapper');



    $('.jsCallback').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            template = $(document.querySelector('#callback').content),
            html = template.find('.callback').clone();

        popupWrapper.html(html);
        popup.addClass('active');
        $('.callback__form').validate(
            {
                rules: {
                    name: "required",
                    tel: "required"
                },
                messages: {
                    name: "Необходимо указать Ваше имя",
                    tel: "Необходимо указать номер телефона"
                },
                submitHandler: function (form) {
                    //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                    success();
                },
            }
        );
        $('input[type=tel]').mask('+7 (999) 999-99-99');
    });

    $('.jsOneClick').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            template = $(document.querySelector('#callbuy').content),
            html = template.find('.callbuy').clone();

        popupWrapper.html(html);
        popup.addClass('active');
        $('.callbuy__form').validate(
            {
                rules: {
                    name: "required",
                    tel: "required"
                },
                messages: {
                    name: "Необходимо указать Ваше имя",
                    tel: "Необходимо указать номер телефона"
                },
                submitHandler: function (form) {
                    //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                    success();
                },
            }
        );
        $('input[type=tel]').mask('+7 (999) 999-99-99');
    });

    popup.on('click', function (e) {
        let target = $(e.target);

        if (target.closest('.popup__wrapper').length === 0){
            popup.removeClass('active');
        }
    });

    $('body').on('click', '.jsCloseForm', function (e) {
        e.preventDefault();
        popup.removeClass('active');
    });

    function success() {
        let template = $(document.querySelector('#success').content),
            html = template.find('.success').clone();
        popupWrapper.html(html);
    }

});