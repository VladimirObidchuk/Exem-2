$(".header__content").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    fade: true
});
$(".news__cards").slick({
    autoplay: true,
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