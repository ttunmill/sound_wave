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
    // loop : true,
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

// const swiper3 = new Swiper(".sec04_swiper", {
//     autoplay : false,
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     centeredSlides: true,
//     initialSlide: 1,
//     pagination: {
//         el: '.sec04_swiper .swiper-pagination',
//         clickable: true,
//         type: 'bullets',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl:".swiper-button-next", 
//         prevEl:".swiper-button-prev"
//     },
// })

const swiper3 = new Swiper(".sec04_swiper", {
    autoplay: false,
    slidesPerView: 3, // 한 번에 보여지는 슬라이드 개수
    centeredSlides: true,
    initialSlide: 1, // 초기 시작 슬라이드
    pagination: {
        el: '.sec04_swiper .swiper-pagination',
        type: 'bullets', 
        bulletClass: 'sec04-bullet', // 사용자 정의 클래스 지정
        bulletActiveClass: 'sec04-bullet-active', // 활성화된 bullet의 사용자 정의 클래스 지정
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
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