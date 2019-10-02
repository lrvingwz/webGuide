$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // 设置slider容器能够同时显示的slides数量(carousel模式)。
        // 可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。
        slidesPerView: 3,

        //slide之间的距离
        // spaceBetween: 20,

        // 设定为true时，活动块会居中，而不是默认状态下的居左。
        centeredSlides: true,

        // 设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 
        // loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // }

        // slide的切换效果，默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        effect: 'coverflow',

        // 设定初始化时slide的索引。
        initialSlide: 5,

        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 1,
            slideShadows: true
        }
    })
})