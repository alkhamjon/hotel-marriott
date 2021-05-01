$(function () {
    $('.home__carousel').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.rooms__carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.restaurants__carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
            {
                breakpoint: 933,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});