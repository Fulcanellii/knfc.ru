$(document).ready(function () {

// Установка имени файла в поле загрузки
    $('#Photo1').on('change', function( event ){
        var fileName1 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
        if(fileName1) {
          $(".photo2").css("display", "block");
        };
    });

    $('#Photo2').on('change', function( event ){
        var fileName2 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
        if(fileName2) {
            $(".photo3").css("display", "block");
        };
    });
    $('#Photo3').on('change', function( event ){
        var fileName3 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
    });

    $('#File1').on('change', function( event ){
        var fileName1 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
        if(fileName1) {
            $(".file2").css("display", "block");
        };
    });

    $('#File2').on('change', function( event ){
        var fileName2 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
        if(fileName2) {
            $(".file3").css("display", "block");
        };
    });
    
    $('#File3').on('change', function( event ){
        var fileName3 = $(this).val();
        $(this).next('.custom-file-label').html(event.target.files[0].name);
    });



// Настройки подсказок адреса
    var options =
        {
            fields:
                [
                    { id: 'city', levels: ['Region','District','City','Place'] },
                    { id: 'street', levels: ['Site','Street'] },
                    { id: 'house', levels: ['House','Building','Structure'] },
                    { id: 'flat', levels: ['Flat'] }
                ]
        };

    AhunterSuggest.Address.Discrete( options );

// Автозаполнение индекса
    var index;
    $('#house').focusout(function () {
        $.ajax({
            type: 'GET',
            datatype: 'json',
            url: 'https://ahunter.ru/site/suggest/address',
            data: {
                output: 'json',
                addresslim: '1',
                query: $('#city').val() + ' ' + $('#street').val() + ' ' + $('#house').val(),
            },
            success: function(data){
                index = data['suggestions'][0]['zip'];
                $('#index').val(index);
                set_delivery_price(index);
            }
        });
    });

//Пересчет цены доставки, если индекс изменился
    $('#index').change( function() {
        index = $('#index').val();
        if(index.length == 6) {
            set_delivery_price(index);
        } else {
            $('#price').hide();
        }
    });

//Расчет цены доставки
    function set_delivery_price(receiverIndex) {
        var data = {
            version: "1.0",
            senderCityPostCode: "115409",
            receiverCityPostCode: receiverIndex,
            tariffId: "11",
            goods: [
                {
                    weight: "0.1", // Вес в кг
                    length: "10", // Габариты в см
                    width: "7",
                    height: "5"
                }
            ]
        };

        $.ajax({
            url : 'https://api.cdek.ru/calculator/calculate_price_by_jsonp.php',
            jsonp : 'callback',
            data : {
                "json" : JSON.stringify(data)
            },
            type : 'GET',
            dataType : "jsonp",
            success: function(data) {
                echo_price(data['result']['price']);
            }
        });
    };

//Вывод цены доставки
    function echo_price(price) {
        $('#price_value').text(price);
        $('#delivery_price').val(price);
        $('#price').show();
    }

//Вывод сообщения, если количество ключей - >2
    $('#number_of_keys').change(function () {
        if($('#number_of_keys').val() > 2) {
            $('#number_of_keys').val(2);
            $('#myInfoModal').modal('show');
        }
    });

//Разрешаем в поле индекс только цифры
    function forceNumeric(){
        var $input = $(this);
        $input.val($input.val().replace(/[^\d]+/g,''));
    }
    $('#index').on('propertychange input', forceNumeric);

// Модальное окно помощи UID
    var link_is_clicked = false;
    $('#uid_help_link').click(function () {
        link_is_clicked = true;
        $('#myUidModal').modal('show');
    })

    var uid_focused = false;
    $('#uid').focus(function () {
        if(uid_focused == false) {
            uid_focused = true;
            if(link_is_clicked == false) {
                $('#myUidModal').modal('show');
            }
        }
    });


});


