$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1225,
                settings: {
                    dots: false
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 571,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

     $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
     });
     $('.menu__list-link').on('click', function(){
        $('.menu__list').toggleClass('menu__list--inactive');
        $('.menu__list').removeClass().toggleClass('menu__list');
     });

});

