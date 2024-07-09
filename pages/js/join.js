/* 
    제작 : 조현우
    갱신일 : 2024.07.09
*/
const all_chk = document.querySelector("#agree_all")
const all_chk_lab = document.querySelector("#agree_all + label")
const agree_chk = document.querySelectorAll(".agree_chk")

// 회원가입 버튼
const submit_btn = document.querySelector(".submit_btn button[type = submit]")

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "../index.html"
})