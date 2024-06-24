// 네비게이션
const nav_btm = document.querySelector(".nav_btm")
const gnb = document.querySelector(".gnb")
const gnb_li = document.querySelectorAll(".gnb > li")
const sub = document.querySelectorAll("nav .nav_btm .gnb > li .sub")

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
nav_clone_area.appendChild(nav_clone)
const menu_btn = document.querySelector(".menu_btn")
const nav_clone_con = document.querySelector(".nav_clone_content")
const nav_clone_gnb = document.querySelectorAll(".nav_clone_area nav .nav_btm .gnb > li > a")
const nav_clone_gnb_child = document.querySelectorAll(".nav_clone_area nav .nav_btm .gnb > li > a span")
const nav_clone_sub = document.querySelectorAll(".nav_clone_area nav .nav_btm .gnb > li .sub")
const nav_close_btn = document.querySelector(".nav_clone_area .nav_close")

nav_clone.lastElementChild.style.display = "none"
nav_clone_area.style.opacity = 0;
nav_clone_area.style.width = 0;
nav_clone_area.style.height = 0;
for(var i of nav_clone_sub) {
    i.style.display = "block"
    i.style.height = '0';
    i.style.transition = 'height 0.3s ease';
}
nav_clone.style.transform = "translateX(-100%)" 

menu_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nav_clone_area.style.opacity = 1;
    nav_clone_area.style.width = "100%";
    nav_clone_area.style.height = "100%";
    nav_clone.style.transform = "translateX(0)"
    document.body.style.overflow = 'hidden'; /* 뒤 배경 스크롤 막기 */
    
})

nav_close_btn.addEventListener("click" , (e) => {
    e.preventDefault();
    nav_clone_area.style.opacity = 0
    nav_clone_area.style.width = 0;
    nav_clone_area.style.height = 0;
    nav_clone.style.transform = "translateX(-100%)"
    document.body.style.overflow = 'auto'; /* 뒤 배경 스크롤 다시 가능함 */
})

nav_clone_gnb.forEach((gnbItem, index) => {
    gnbItem.addEventListener('click', (e) => {
        e.preventDefault();

        let subMenu = nav_clone_sub[index];
        let isOpen = subMenu.classList.toggle('on');

        // 모든 sub 메뉴 닫기
        nav_clone_sub.forEach((menu, idx) => {
            if (idx !== index && menu.classList.contains('on')) {
                menu.classList.remove('on');
                menu.style.height = '0';
            }
        });

        // 모든 rotate 효과 초기화
        nav_clone_gnb_child.forEach((child, idx) => {
            if (idx !== index) {
                child.classList.remove('on');
            }
        });

        // 현재 메뉴 아이템에 rotate 효과 적용
        nav_clone_gnb_child[index].classList.toggle('on');

        // sub 메뉴 열고 닫을 때 높이 계산 및 설정
        if (isOpen) {
            subMenu.style.height = subMenu.scrollHeight + 'px'; // 현재 높이로 설정
        } else {
            subMenu.style.height = '0'; // 닫을 때 높이 0으로 설정
        }
    });
});

//언어 버튼
const lang_list = document.querySelector(".nav_clone_area .select_lang")
const lang_btn = document.querySelector(".nav_clone_area .select_down > .btn")
const lang_btn_img = document.querySelector(".nav_clone_area .select_down > .btn img")

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
search_form.style.visibility  = "hidden"
let search_img = search_a.children[0].src
search_a.addEventListener("click", (e) => {
    search_flag = !search_flag
    e.preventDefault();
    if(search_flag == true) {
        search_form.style.visibility = "visible"
        search_form.style.opacity = "1"
        search_a.children[0].src = "./images/close.png" 
    } else {
        search_form.style.visibility  = "hidden"
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
        ft_cate.style.height = "236px"
        ft_btn_img.style.transform = "rotate(180deg)"
    } else {
        ft_cate.style.height = "0"
        ft_btn_img.style.transform = "rotate(0)"
    }
})