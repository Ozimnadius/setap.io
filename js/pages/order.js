//popup.js
$(function () {

    $('.order__form').validate(
        {
            rules: {
                name: "required",
                tel: "required",
                email: "required"
            },
            messages: {
                name: "Необходимо указать Ваше имя",
                tel: "Необходимо указать номер телефона",
                email: "Необходимо указать Email"
            },
            submitHandler: function (form) {
                //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                console.log('tyt');
            },
        }
    );
    $('input[type=tel]').mask('+7 (999) 999-99-99');

    $('.sradio__input').on('click', function (e) {
        let $this = $(this),
            id = $this.data('id'),
            step = $this.closest('.step'),
            content = step.find('.step__content'),
            template = $(document.querySelector('#' + id).content),
            html = template.find('.sdelivery').clone();

        content.html(html);

    });

});