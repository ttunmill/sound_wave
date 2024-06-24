// img 호버시 이벤트
const hover_txt = document.querySelectorAll(".hover_txt")
const item_title = document.querySelectorAll(".img_g + h3")
const img_g = document.querySelectorAll(".img_g")

let text = ""
img_g.forEach((i, j) => {
    text = item_title[j].innerText
    hover_txt[j].innerText = text
})

// total item 갯수 구하기
const total_num = document.querySelector(".total_num")
const item = document.querySelectorAll(".all_list li")

total_num.innerText = item.length;