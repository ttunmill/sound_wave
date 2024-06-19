const swiper1 = new Swiper(".main_swiper", {
    autoplay : {delay : 5000},
    loop : true,
    pagination: {
        el: '.main_swiper .swiper-pagination',
        clickable: true,
        // type: 'fraction',
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})

const swiper2 = new Swiper(".sec02_swiper", {
    autoplay : false,
    loop : true,
    slidesPerView: 3,
    pagination: {
        el: '.sec02_swiper .swiper-pagination',
        clickable: true,
        // type: 'fraction',
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})