// 상세정보/쇼핑가이드 버튼
const detail_tap = document.querySelectorAll(".menu_btn a")
const sec02 = document.querySelector(".sec02")
const sec03 = document.querySelector(".sec03")

detail_tap[0].addEventListener("click", (e) => {
    e.preventDefault();
    sec02.style.display = "block"
    sec03.style.display = "none"
    detail_tap[0].classList.add("active")
    detail_tap[1].classList.remove("active")
})
detail_tap[1].addEventListener("click", (e) => {
    e.preventDefault();
    sec02.style.display = "none"
    sec03.style.display = "block"
    detail_tap[0].classList.remove("active")
    detail_tap[1].classList.add("active")
})


// 오른쪽 fixed 박스
/* const fixed_box = document.querySelector(".fixed_box")
const fixed_box_buy = document.querySelector(".fixed_box a")

window.addEventListener("scroll", () => {
    if(this.window.pageYOffset >= 700) {
        fixed_box.style.opacity = 1
        fixed_box.style.visibility = "visible"
    } else {
        fixed_box.style.opacity = 0
        fixed_box.style.visibility = "hidden"
    }
}) */

// fixed 박스 buy now를 눌렀을 때
/* const popup_wrap = document.querySelector(".popup_wrap")
const popup_close = document.querySelector(".popup_wrap .popup .close_btn")

fixed_box_buy.addEventListener("click", (e) => {
    e.preventDefault();
    popup_wrap.style.opacity = 1
    popup_wrap.style.visibility = "visible"
})

popup_close.addEventListener("click", (e) => {
    e.preventDefault();
    popup_wrap.style.opacity = 0
    popup_wrap.style.visibility = "hidden"
}) */

// 구매 금액
const num_down = document.querySelector(".num_down")
const num_up = document.querySelector(".num_up")
const total = document.querySelector(".total_result .result .total")
const count = document.querySelector(".total_result .result .count")
let num_value = document.querySelector("#num_value")

let item_num = Number(num_value.value)
let price = 17800
let total_price = 0
num_down.addEventListener("click", () => {
    item_num -= 1;
    if(item_num <= 0) {
        alert("최소 주문수량은 1개 입니다.")
        item_num = 1;
    }
    count.innerHTML = `(${item_num}개)`
    num_value.value = item_num
    total_price = price * item_num
    total.innerHTML = `${total_price.toLocaleString('ko-KR')}원`
})

num_up.addEventListener("click", () => {
    item_num += 1;
    count.innerHTML = `(${item_num}개)`
    num_value.value = item_num
    total_price = price * item_num
    total.innerHTML = `${total_price.toLocaleString('ko-KR')}원`
})


// 팝업 구매 금액
/* const p_num_down = document.querySelectorAll(".num_down")[1]
const p_num_up = document.querySelectorAll(".num_up")[1]
const p_total = document.querySelectorAll(".total_result .result .total")[1]
const p_count = document.querySelectorAll(".total_result .result .count")[1]
let p_num_value = document.querySelectorAll("#num_value")[1]

let p_item_num = Number(p_num_value.value)
let p_price = 17800
let p_total_price = 0
p_num_down.addEventListener("click", () => {
    p_item_num -= 1;
    if(p_item_num <= 0) {
        alert("최소 주문수량은 1개 입니다.")
        p_item_num = 1;
    }
    p_count.innerHTML = `(${p_item_num}개)`
    p_num_value.value = p_item_num
    p_total_price = p_price * p_item_num
    p_total.innerHTML = `${p_total_price.toLocaleString('ko-KR')}원`
})

p_num_up.addEventListener("click", () => {
    p_item_num += 1;
    p_count.innerHTML = `(${p_item_num}개)`
    p_num_value.value = p_item_num
    p_total_price = p_price * p_item_num
    p_total.innerHTML = `${p_total_price.toLocaleString('ko-KR')}원`
}) */

// sec03 아코디언
const sec03_h3 = document.querySelectorAll(".sec03_txt h3")
const sec03_accordion = document.querySelectorAll(".sec03_accordion")
const sec03_h3_arrow = document.querySelectorAll(".sec03_txt h3 span")
console.log(sec03_h3_arrow)

for(var i of sec03_accordion) {i.style.display = "block"}

sec03_h3.forEach((i, j) => {
    i.addEventListener("click", () => {
        const isOpen = sec03_accordion[j].style.display == "block";
        if (isOpen) {
            sec03_accordion[j].style.display = "none";
            sec03_h3_arrow[j].style.backgroundImage = "url(./images/detail/ico_toggle_arow_down.png)";
        } else {
            sec03_accordion[j].style.display = "block";
            sec03_h3_arrow[j].style.backgroundImage = "url(./images/detail/ico_toggle_arow_up.png)";
        }
    })
})
