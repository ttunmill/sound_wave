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

const swiper3 = new Swiper(".sec04_swiper", {
    autoplay : false,
    loop : true,
    slidesPerView: 2,
    pagination: {
        el: '.sec04_swiper .swiper-pagination',
        // clickable: true,
        // type: 'fraction',
    },
    navigation: {
        // nextEl:".swiper-button-next", 
        // prevEl:".swiper-button-prev"
    },
})

const swiper4 = new Swiper(".sec05_swiper", {
    autoplay : false,
    // loop : true,
    slidesPerView: 1,
    pagination: {
        el: '.sec05_swiper .swiper-pagination',
        clickable: true,
        // type: 'fraction',
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})