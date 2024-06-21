// 네비게이션
const nav_btm = document.querySelector(".nav_btm")
const gnb = document.querySelector(".gnb")
const gnb_li = document.querySelectorAll(".gnb > li")
const sub = document.querySelectorAll(".sub")
for(var i of sub) {i.style.display = "none"}

// 네비게이션 스크롤시 고정
const nav = document.querySelector("nav")
const inquiry_line = document.querySelector(".inquiry_line")
window.addEventListener("scroll", () => {
    if(this.window.pageYOffset >= 150) {
        inquiry_line.style.display = "none"
        nav.style.position = "fixed"
    } else {
        inquiry_line.style.display = "block"
        nav.style.position = "relative"
    }
})

// 네비게이션 클론
const nav_clone = nav.cloneNode(true)
const nav_clone_area = document.querySelector(".nav_clone_area")
console.log(nav_clone)
nav_clone.appendChild(nav_clone_area)

//언어 버튼
// const lang_wrap = document.querySelector("")
// const lang_list = document.querySelector(".select_lang")
// const lang_btn = document.querySelector(".select_down > li > .btn")
// const lang_btn_img = document.querySelector(".select_down > li > .btn img")

// lang_list.style.display = "none"
// let lang_flag = false;
// lang_btn.addEventListener("click", () => {
//     lang_flag = !lang_flag
//     if(lang_flag == true) {
//         lang_list.style.display = "block"
//         lang_btn_img.style.transform = "rotate(180deg)"
//     } else {
//         lang_list.style.display = "none"
//         lang_btn_img.style.transform = "rotate(0)"
//     }
// })

// 검색 버튼
const search_a = document.querySelector(".search_a")
const search_form = document.querySelector("#searchBarForm")

let search_flag = false;
let search_img = search_a.children[0].src
search_a.addEventListener("click", (e) => {
    search_flag = !search_flag
    e.preventDefault();
    if(search_flag == true) {
        search_form.style.opacity = "1"
        search_a.children[0].src = "./images/close.png" 
    } else {
        search_form.style.opacity = "0"
        search_a.children[0].src = "./images/search_ico.png" 
    }
})

// sec03 이벤트 버튼
const sec03_btn = document.querySelectorAll(".event_btn a")
const sec03_ul = document.querySelectorAll(".sec03 > .all_list")

sec03_btn[0].style.color = "#0a5e5a"
for(var i = 1; i < sec03_ul.length; i++) {
    sec03_ul[i].style.display = "none"
}

sec03_btn.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
        for(var btn of sec03_btn) {btn.style.color = "#aaa"}
        i.style.color = "#0a5e5a";
        for(var ul of sec03_ul) {ul.style.display = "none"}
        sec03_ul[j].style.display = "flex"
    })
})

// sec03 img 호버시 이벤트
// const hover_txt = document.querySelectorAll(".hover_txt")
// const sec03_tit = document.querySelectorAll(".sec03_g h3")
// const img_g = document.querySelectorAll(".img_g")

// let text = ""
// img_g.forEach((i, j) => {
//     text = sec03_tit[j].innerText
//     hover_txt[j].innerText = text
// })

// sec05 비디오 버튼
const video_img = document.querySelectorAll(".video_img")
const sec05_video = document.querySelector(".sec05_video")

let video_flag = false;
sec05_video.style.display = "none"
for(var i = 0; i < video_img.length; i++) {
    video_img[i].addEventListener("click", (e) => {
        e.preventDefault();
        sec05_video.style.display = "flex"
    }) 
    sec05_video.children[0].addEventListener("click", () => {
        sec05_video.style.display = "none"
    })
}

// footer bottom 버튼
const ft_btn = document.querySelector(".footer_btm h3")
const ft_btn_img = document.querySelector(".footer_btm h3 img")
const ft_cate = document.querySelector(".footer_bottom_cate")

ft_cate.style.height = "0"
let ft_flag = false;
ft_btn.addEventListener("click", (e) => {
    e.preventDefault();
    ft_flag = !ft_flag
    if(ft_flag == true) {
        ft_cate.style.height = "236px"
        ft_btn_img.style.transform = "rotate(180deg)"
    } else {
        ft_cate.style.height = "0"
        ft_btn_img.style.transform = "rotate(0)"
    }
})