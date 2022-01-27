var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: false,
    dot: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            loop: true,
            autoplay: true,
        },
        600: {
            items: 2,
            loop: true,
            autoplay: true,
        },
        1000: {
            items: 4,
            loop: true,
            autoplay: true,
        }
    }
});
// Mobile Menu 
function openMenu() {
    document.getElementById('navbar').style.display = 'block';
}
function closeMenu() {
    document.getElementById('navbar').style.display = 'none';
}
$('.popup').magnificPopup({
    type: 'iframe'
    // other options
});
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
