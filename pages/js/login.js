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