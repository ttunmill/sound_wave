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

// sec05 비디오 버튼
const video_img = document.querySelectorAll(".video_img")
const sec05_video = document.querySelector(".sec05_video")

let video_flag = false;
sec05_video.style.display = "none"
for(var i = 0; i < video_img.length; i++) {
    video_img[i].addEventListener("click", (e) => {
        e.preventDefault();
        sec05_video.style.display = "flex"
    }) 
    sec05_video.children[0].addEventListener("click", () => {
        sec05_video.style.display = "none"
    })
}