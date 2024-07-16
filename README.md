# sound_wave (적응형)
<img src="https://github.com/ttunmill/sound_wave/assets/84768554/0e3c2d3e-4558-42ef-a6ab-c1e927a7da82">

* (24.06.19 ~ 24.06.26)
* 총작업기간 7일(56시간)
* 개인 100%
## 🔠사용 언어
<img src="https://github.com/ttunmill/gabiacns/assets/84768554/45aaaff6-aa00-4209-a23e-13ec83f6031a" width="50" height="50">
<img src="https://github.com/ttunmill/gabiacns/assets/84768554/f199d7ad-3c97-4ff3-8f22-8d4546bfeb2a" width="40" height="50">
<img src="https://github.com/ttunmill/gabiacns/assets/84768554/d80fb406-7c87-4150-83eb-af60ab915f35" width="50" height="50">
<!-- <img src="https://github.com/ttunmill/gabiacns/assets/84768554/9a4bbb0d-97ed-4a3e-9d31-b7cf837f43fa" width="180" height="50"> -->
<img src="https://github.com/ttunmill/gabiacns/assets/84768554/a5c08a2c-a93b-48a3-865b-3f07eebe4299" width="100" height="50">
<img src="https://github.com/ttunmill/sound_wave/assets/84768554/a618b627-8063-4474-bc21-59d115928fad" width="50" height="50">
<!-- <img src="https://github.com/ttunmill/sound_wave/assets/84768554/39a4bbb8-459b-49f8-8fe8-bd6224781d3e" width="50" height="50"> -->
<img src="https://github.com/ttunmill/sound_wave/assets/84768554/9f299794-f389-48d2-9e00-feb8460a4f27" width="120" height="50">
<img src="https://github.com/ttunmill/sound_wave/assets/84768554/4cfff206-136b-419f-a3f7-a1e6e83880b8" width="50" height="50">

---

## 넷리파이 주소
* [`메인페이지 PC`](https://soundwave-pf.netlify.app/)
* [`메인페이지 SP`](https://soundwave-pf.netlify.app/mobile/)
## FTP 주소
* [`메인페이지 PC`](http://ttunmill.dothome.co.kr/sound_wave/index.html)
* [`메인페이지 SP`](http://ttunmill.dothome.co.kr/sound_wave/mobile/index.html)
---
## 🔗서브페이지 (4개)
* [`로그인페이지 PC (login.html)`](http://ttunmill.dothome.co.kr/sound_wave/pages/login.html)
* [`로그인페이지 SP (login.html)`](http://ttunmill.dothome.co.kr/sound_wave/mobile/pages/login.html)
* [`회원가입페이지 PC (join.html)`](http://ttunmill.dothome.co.kr/sound_wave/pages/join.html)
* [`회원가입페이지 SP (join.html)`](http://ttunmill.dothome.co.kr/sound_wave/mobile/pages/join.html)
* [`NEW 상품페이지 PC (new.html)`](http://ttunmill.dothome.co.kr/sound_wave/pages/new.html)
* [`NEW 상품페이지 SP (new.html)`](http://ttunmill.dothome.co.kr/sound_wave/mobile/pages/new.html)
* [`상품 상세페이지 PC (detail.html)`](http://ttunmill.dothome.co.kr/sound_wave/pages/detail.html)
* [`상품 상세페이지 SP (detail.html)`](http://ttunmill.dothome.co.kr/sound_wave/mobile/pages/detail.html)
---
### ⏱작업이력
1. (24.6.19) 메인페이지 **pc화면** 작업 시작
2. (24.6.21) 메인페이지 **pc화면** 제작 완료(html, css, javascript)
3. (24.6.21) 메인페이지 **sp화면** 작업 시작
4. (24.6.21) 메인페이지 **sp화면** 제작 완료(html, css, javascript)
5. (24.6.24) NEW페이지, 로그인페이지 제작시작
6. (24.6.24) NEW페이지, 로그인페이지 제작완료(pc, sp)
7. (24.6.25) detail페이지 제작시작
8. (24.6.25) detail페이지 제작완료 (pc, sp)
9. (24.6.26) 회원가입 페이지 제작시작
10. (24.6.26) 회원가입 페이지 제작완료 (pc, sp)
---
### 🗯작업고충
* swiper 플러그인을 많이 사용해보지 않아 여러개의 swiper를 사용하기 어려웠음

  └ swiper공식 사이트에 들어가서 가이드라인 확인 및 다른 사용자들 사용법 확인
* 적응형 페이지 작업

  └ 적응형 페이지에 대해 조사하고 이에 관한 js를 찾음
* pc화면과 sp화면 디자인이 다름

  └ pc와 sp화면을 번갈아가며 계속 보며 디자인이 다른점을 찾으며 페이지를 제작하였음
---
### script
```
  // PC웹페이지에 적용할부분
  var ua = window.navigator.userAgent.toLowerCase();
  var mobileWindowWidth
  if(/iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) || /ipad/.test(ua) || /windows ce/.test(ua)) {
      document.location.replace("./mobile/index.html");
  }
```
- 위 코드를 사용하여 디바이스 크기를 인식하고 PC에 접속하였지만 디바이스 크기에 맞춰 테블릿~모바일 기기는 SP모드 페이지로 이동하도록 설정

```
  const modal = document.querySelector(".cart_bg");
  const add_cart_btn = document.querySelectorAll(".sec01_g > .img_g .img_txt > button");
  const modal_close = document.querySelector(".modal_header button");
  const modal_image = document.querySelector("#user_product_form .top_tbl .image")
  const modal_name = document.querySelector(".modal_body .product_name")
  
  let item_img = ""
  let item_name = ""
  add_cart_btn.forEach((i, j) => {
      i.addEventListener("click", (e) => {
          e.preventDefault();
          modal.style.display = "block"
          item_name = item_title[j].innerText
          modal_name.innerText = item_name
          item_img = img_g[j].children[0].src
          modal_image.children[0].src = item_img;
      })
  })
  
  modal_close.addEventListener("click", () => {
      modal.style.display = "none"
  })
```
- 이미지 src & 제목을 가져와 모달창에도 적용시킴
