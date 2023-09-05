$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-btn-own slick-prev">&#8592;</div>',
        nextArrow: '<div class="slick-btn-own slick-next">&#8594;</div>'
       });
})
//с dots не получается
