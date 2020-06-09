$(document).ready(function() { // Ждём загрузки страницы

	// $(".btn-step1").prop( "disabled", true );
	// $(".btn-step3").prop( "disabled", true );
	// $(".btn-step4").prop( "disabled", true );
	// $(".btn-input").prop( "disabled", true );
	// $(".btn-input1").prop( "disabled", true );

	var steps = $("form").children(".step"); // находим все шаги формы
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	$("#next").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$('#time').hide();
			$('#about-text').hide();
	});

	function next() {
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$('#time').hide();
			$('#about-text').hide();
	};

	$("#next1").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#next1").show();
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$('#third_button').show();
			$('#third_button_question').show();
	});

	$("#next2").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#next2").show();
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$('#third_button').hide();
			$('#third_button_question').hide();
	});

	$("#next3").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#next3").show();
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$("#adress-step5").show();
			$("#about-text1").show();
	});

	$("#next4").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}
			$("#next4").show();
			$("#back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			$("#adress-step5").hide();
			$("#about-text1").hide();
	});

	$("#next5").click(function(){	// Событие клика на ссылку "Следующий шаг"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
			}

			$.ajax({
				url: '/success',
				type: 'POST',
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			
			$("#next5").show();
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг

	});
	
	$("#back").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
		$('#time').show();
		$('#about-text').show();
	});

	$("#back1").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
		$('#third_button').hide();
		$('#third_button_question').hide();
	});

	$("#back2").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
		$('#third_button').show();
		$('#third_button_question').show();
	});

	$("#back3").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
	});

	$("#back4").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
	});

	$("#back5").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#next5").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
	});
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
	}
});

function checkParams1() {

		var phone_number = $("#phone_number").val();
		var email = $("#email").val();
		
		if(phone_number.length != 0 && email.length != 0) {
	        $(".btn-input1").prop( "disabled", false );
	    } else {
	        $(".btn-input1").prop( "disabled", true );
	    }
	};

function checkParams() {

		var index = $("#index").val();
		var flat = $("#flat").val();
		var house = $("#house").val();
		var street = $("#street").val();
		var city = $("#city").val();
		
		if(index.length != 0 && flat.length != 0 && house.length != 0 && street.length != 0 && city.length != 0) {
	        $(".btn-input").prop( "disabled", false );
	    } else {
	        $(".btn-input").prop( "disabled", true );
	    }
	};

function image() {
	var file1 = document.getElementById('img1').files[0];
	var file2 = document.getElementById('img2').files[0];
	var file3 = document.getElementById('img3').files[0];
	var file4 = document.getElementById('img4').files[0];
	var file5 = document.getElementById('img5').files[0];
	var file6 = document.getElementById('img6').files[0];

	if (file1) {
		document.getElementById('outImg3').innerHTML = file1.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	} else {
		document.getElementById('outImg3').innerHTML = file2.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	}

	if (file3) {
		document.getElementById('outImg4').innerHTML = file3.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	} else {
		document.getElementById('outImg4').innerHTML = file4.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	}

	if (file5) {
		document.getElementById('outImg5').innerHTML = file5.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	} else {
		document.getElementById('outImg5').innerHTML = file6.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	}

	

};

function validateImage(id) {
    var formData = new FormData();
    var file = id[0];
 	
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Неправильный формат изображения');
        document.getElementById("img").value = '';
        return false;
    }
    // if (file.size > 1024000) {
    //     alert('Максимальный объем файла 1мб');
    //     document.getElementById("img").value = '';
    //     return false;
    // }
    document.getElementById('outImg').innerHTML = file.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
    document.getElementById('textImg').hidden = true;
    $(".btn-step1").prop( "disabled", false );
    $(".btn-step1").click();
    return true;
};

function validateImage1(id) {
    var formData = new FormData();
    var file = id[0];
 	
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Неправильный формат изображения');
        document.getElementById("img").value = '';
        return false;
    }
    // if (file.size > 1024000) {
    //     alert('Максимальный объем файла 1мб');
    //     document.getElementById("img").value = '';
    //     return false;
    // }
    var file1 = document.getElementById('img1').files[0];
	var file2 = document.getElementById('img2').files[0];
	if (file1) {
		document.getElementById('outImg-step1').innerHTML = file1.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	} else {
		document.getElementById('outImg-step1').innerHTML = file2.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
	}
    document.getElementById('outImg1').innerHTML = file.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
    document.getElementById('btn-step2').style.margin = "0px 0px 10px 0px";
    $(".btn-step3").prop( "disabled", false );
    $(".btn-step3").click();
    return true;
};

function validateImage2(id) {
    var formData = new FormData();
    var file = id[0];
 	
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Неправильный формат изображения');
        document.getElementById("img").value = '';
        return false;
    }
    // if (file.size > 1024000) {
    //     alert('Максимальный объем файла 1мб');
    //     document.getElementById("img").value = '';
    //     return false;
    // }
    document.getElementById('outImg').innerHTML = file.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
    document.getElementById('outImg1').innerHTML = file.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
    document.getElementById('outImg2').innerHTML = file.name + "<i class='fa fa-check' style='color: #38F9D7; margin-left: 10px;'></i>";
    $(".btn-step4").prop( "disabled", false );
    $(".btn-step4").click();
    return true;
};

var link_is_clicked = false;
$('#uid_help_link').click(function () {
    link_is_clicked = true;
    $('#myUidModal').modal('show');
});

$('#first_button').click(function () {
    $('#myUidModal1').modal('show');
});

$('#about_button').click(function () {
    $('#myUidModal2').modal('show');
});

$('#second_button').click(function () {
    $('#myUidModal3').modal('show');
});

$('#third_button').click(function () {
    $('#myUidModal4').modal('show');
});

$('#third_button_question').click(function () {
    $('#myUidModal5').modal('show');
});

$('#link-adress-step5').click(function () {
    $('#myUidModal6').modal('show');
});

$('#about-texth6').click(function () {
    $('#myUidModal7').modal('show');
});

$('#more').click(function () {
    $('#myUidModal8').modal('show');
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




//Вывод сообщения, если количество ключей - >2
$('#number_of_keys').change(function () {
    if($('#number_of_keys').val() > 2) {
        $('#number_of_keys').val(2);
        $('#myInfoModal').modal('show');
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
                length: "5", // Габариты в см
                width: "5",
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
};

//Пересчет цены доставки, если индекс изменился
$('#index').change( function() {
    index = $('#index').val();
    if(index.length == 6) {
        set_delivery_price(index);
    } else {
       $('#price').hide();
   }
});

