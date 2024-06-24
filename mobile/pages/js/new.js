// total item 갯수 구하기
const total_num = document.querySelector(".total_num")
const item = document.querySelectorAll(".all_list li")

total_num.innerText = item.length;