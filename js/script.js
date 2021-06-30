$(".header__content").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    fade: true
});
$(".news__cards").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 3,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

const mapWrapper = document.getElementById("map");

const map = new google.maps.Map(mapWrapper, {
    center: { lat: 40.70194454951203, lng: -73.8974938499736 },
    zoom: 15,
});
const marker = new google.maps.Marker({
    position: { lat: 40.70194454951203, lng: -73.8974938499736 },
    map: map
});

const $formElem = $('.contact__form');
const $formBtn = $('.form__commi');
// $formElem.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('https://mail.google.com/', {
//         method: 'POST',
//         body: new FormData($formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
// };

$formElem.ready(function () {
    $formBtn.click(
        function () {
            sendAjaxForm('ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function (response) {
            result = $.parseJSON(response);
            $('#result_form').html('Имя: ' + result.name + '<br>Email: ' + result.email);
        },
        error: function (response) {
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}