/*YANDEX*/
$(function ()   {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {

        if ($('#map').length) {
            var center = [55.833849568909045,37.29893099999997];
            // if ($(window).width() < 576) {
            //     center = [55.609501798660396, 37.61325538360591];
            // }

            myMap = new ymaps.Map("map", {
                center: center,
                zoom: 16,
                controls: []
            });


            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {});


            myPlacemark1 = new ymaps.Placemark([55.833849568909045,37.29893099999997], {
                    balloonContentHeader: "Inthestore",
                    balloonContentBody: "Inthestore",
                    balloonContentFooter: "Московская область,  г. Красногорск, ул. Ленина, д. 38-б, офис 88",
                    hintContent: "Inthestore.ru"
                },
                {

                    preset: 'islands#violetDotIcon'
                });


            myPin.add(myPlacemark1);
            myMap.geoObjects.add(myPin);
        }
    }
});
/*END YANDEX*/