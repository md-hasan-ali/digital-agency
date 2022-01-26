var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: false,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            loop: true,
            autoplay: true,
            dots: false
        },
        600: {
            items: 2,
            loop: true,
            autoplay: true,
            dots: false
        },
        1000: {
            items: 4,
            loop: true,
            autoplay: true,
            dots: false
        }
    }
});