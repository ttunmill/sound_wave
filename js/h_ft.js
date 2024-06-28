/* 
    제작 : 조현우
    갱신일 : 2024.06.21
*/
// 네비게이션
const nav_btm = document.querySelector(".nav_btm")
const gnb = document.querySelector(".gnb")
const gnb_li = document.querySelectorAll(".gnb > li")
const sub = document.querySelectorAll(".sub")
for(var i of sub) {i.style.display = "none"}
gnb_li.forEach((i, j) => {
    i.addEventListener("mouseover", () => {
        sub[j].style.display = "block"
    })
    gnb.addEventListener("mouseout", () => {
        for(var i of sub) {i.style.display = "none"}
    })
})

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

// 언어 버튼
const lang_list = document.querySelector(".select_lang")
const lang_btn = document.querySelector(".select_down > li > .btn")
const lang_btn_img = document.querySelector(".select_down > li > .btn img")

lang_list.style.display = "none"
let lang_flag = false;
lang_btn.addEventListener("click", () => {
    lang_flag = !lang_flag
    if(lang_flag == true) {
        lang_list.style.display = "block"
        lang_btn_img.style.transform = "rotate(180deg)"
    } else {
        lang_list.style.display = "none"
        lang_btn_img.style.transform = "rotate(0)"
    }
})

// 검색 버튼
const search_a = document.querySelector(".search_a")
const search_form = document.querySelector("#searchBarForm")

let search_flag = false;
search_form.style.visibility = "hidden"
let search_img = search_a.children[0].src
search_a.addEventListener("click", (e) => {
    search_flag = !search_flag
    e.preventDefault();
    if(search_flag == true) {
        search_form.style.visibility = "visible"
        search_form.style.opacity = "1"
        search_a.children[0].src = "./images/close.png" 
    } else {
        search_form.style.visibility = "hidden"
        search_form.style.opacity = "0"
        search_a.children[0].src = "./images/search_ico.png" 
    }
})

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
        ft_cate.style.height = "110px"
        ft_btn_img.style.transform = "rotate(180deg)"
    } else {
        ft_cate.style.height = "0"
        ft_btn_img.style.transform = "rotate(0)"
    }
})