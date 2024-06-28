/* 
    제작 : 조현우
    갱신일 : 2024.06.21
*/
const modal = document.querySelector(".cart_bg");
const add_cart_btn = document.querySelectorAll(".sec03_g > .img_g .img_txt > button");
const modal_close = document.querySelector(".modal_header button");
const modal_image = document.querySelector("#user_product_form .top_tbl .image")
const modal_name = document.querySelector(".modal_body .product_name")

// modal.style.display = "none"
let sec03_img = ""
let sec03_name = ""
add_cart_btn.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block"
        sec03_name = sec03_tit[j].innerText
        modal_name.innerText = sec03_name
        sec03_img = img_g[j].children[0].src
        modal_image.children[0].src = sec03_img;
    })
})

modal_close.addEventListener("click", () => {
    modal.style.display = "none"
})