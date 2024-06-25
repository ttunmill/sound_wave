const member_btn = document.querySelectorAll(".select_login a")
const login_frm = document.querySelector("#user_login_form")
const non_login_frm = document.querySelector("#non_user_form")

non_login_frm.style.display = "none"

member_btn[0].addEventListener("click", () => {
    member_btn[1].classList.remove("active")
    non_login_frm.style.display = "none"
    member_btn[0].classList.add("active")
    login_frm.style.display = "block"
})

member_btn[1].addEventListener("click", () => {
    member_btn[0].classList.remove("active")
    login_frm.style.display = "none"
    member_btn[1].classList.add("active")
    non_login_frm.style.display = "block"
})
// ============ 로그인 상태 유지 버튼
const check_box = document.querySelector("#user_login_form .user_insert span")
const check_img = document.querySelector("#user_login_form .user_insert img")
console.log(check_box)

let img_scr = "./images/login/bg_checkbox_checked.png"
let img_original = "./images/login/bg_checkbox.png"

let chk_flag = false;

check_box.addEventListener("click", () => {
    chk_flag = !chk_flag
    if(chk_flag == true) {
        let chk_message = confirm("로그인 상태를 유지하시겠습니까?\n타인이 개인정보를 도용할 수 있으니,\n주의하시기 바랍니다.")

        if(chk_message == true) {
            chk_flag = true;
            check_img.src = img_scr;
        } else {
            chk_flag = false;
            check_img.src = img_original;
        }
    } else {
        chk_flag = false;
        check_img.src = img_original;
    }
})