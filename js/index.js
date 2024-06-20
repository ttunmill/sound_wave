// 네비게이션
const nav = document.querySelector("nav")
const nav_btm = document.querySelector(".nav_btm")
const gnb = document.querySelector(".gnb")
const gnb_a = document.querySelectorAll(".gnb > li > a")
const sub = document.querySelectorAll(".sub")
console.log(nav)
for(var i of sub) {i.style.display = "none"}
gnb_a.forEach((i, j) => {
    i.addEventListener("mouseover", () => {
        // for(var i of sub) {i.style.display = "none"}
        sub[j].style.display = "block"
    })
    gnb.addEventListener("mouseout", () => {
        console.log("skrka");
        for(var i of sub) {i.style.display = "none"}
    })
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
const hover_txt = document.querySelectorAll(".hover_txt")
const sec03_tit = document.querySelectorAll(".sec03_g h3")
const img_g = document.querySelectorAll(".img_g")

let text = ""
img_g.forEach((i, j) => {
    text = sec03_tit[j].innerText
    hover_txt[j].innerText = text
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