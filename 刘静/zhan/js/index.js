$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 4,
        loop:true,
        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 1,
            slideShadows : true
        }

    });    
});