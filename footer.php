<footer>
        <ul class="ft_list">
            <li><img src="./images/footer_logo.png" alt="sound wave"></li>
            <li>
                <h2>CUSTOMER CENTER</h2>
                <h3>02-381-3758</h3>
                <p>상담시간 10:00 - 17:00</p>
                <p>점심시간 12:00 - 13:00</p>
                <p>토-일요일, 공휴일 휴무</p>
            </li>
            <li class="company_list">
                <div class="company">
                    <h2>COMPANY</h2>
                    <a href="#">회사소개</a>
                    <a href="#">오프라인 매장안내</a>
                    <a href="#">개인정보처리방침</a>
                    <a href="#">이용약관</a>
                </div>
                <div class="company_sns">
                    <a href="#"><img src="./images/footer_twit.png" alt="twitter"></a>
                    <a href="#"><img src="./images/footer_you.png" alt="youtube"></a>
                </div>
            </li>
            <li>
                <div class="delivery">
                    <h2>DELIVERY</h2>
                    <p>실시간 배송정보를 확인하실 수 있습니다.</p>
                    <a href="#">CJ대한통운 택배 바로가기</a>
                </div>
                <ul class="return">
                    <li>
                        <h2>RETURN & EXCHANGE</h2>
                        <p>반품주소 : 경기도 고양시 덕양구 대자동 205-6</p>
                        <p>교환 및 반품을 원하시는 상품은 반드시 반품 주소로 보내주셔야 합니다.</p>
                    </li>
                    <li>
                        <a href="#"><img src="./images/link_2.png" alt="헌터 패밀리"></a>
                        <a href="#"><img src="./images/link_1.png" alt="CIRCLE CHART"></a>
                    </li>
                </ul>
            </li>
        </ul>
    </footer>
    <div class="footer_btm">
        <h3>
            <a href="#">
                <span>COMPANY INFO</span>
                <img src="./images/cate.png" alt="더 보기">
            </a>
        </h3>
        <div class="footer_bottom_cate">
            <p>
                <span>상호명 : 주식회사 사운드웨이브</span>
                <span>CEO : 어주연</span>
                <span>사업자등록번호 : 121-86-36395 <a href="#">[사업자정보확인]</a></span>
                <span> 통신판매업신고 : 2023-서울마포-3950</span>
            </p>
            <p>
                <span>TEL : 02-381-3758</span>
                <span>EMAIL: soundwave@sound-wave.co.kr</span>
                <span>주소 : 서울특별시 마포구 양화로8길 17-5, 3,4,5층 (서교동)</span>
                <span>개인정보보호책임자 : 어우선</span>
            </p>
            <p class="copy">
                <span>COPYRIGHT, <em>SOUNDWAVE CORP.</em> ALL RIGHTS RESERVED.</span>
                <span>호스팅서비스 제공자 카페24</span>
            </p>
        </div>
    </div>
    <div class="cart_bg">
        <div class="cart_area">
            <div class="modal_header">
                <h2>옵션 선택</h2>
                <button type="button"></button>
            </div>
            <div class="modal_body">
                <h3 class="product_name"></h3>
                <form action="" method="post" id="user_product_form">
                    <div class="top_tbl">
                        <p class="image"><img src="" alt=""></p>
                        <ul class="top_list">
                            <li>
                                <p>개인정보 수집 및 이용 동의</p>
                                <select class="ProductOption0" required="true">
                                    <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                    <option value="">-------------------</option>
                                    <option value="101">동의합니다</option>
                                </select>
                            </li>
                            <li>
                                <p>배송일정 내용 동의</p>
                                <select class="ProductOption0"required="true">
                                    <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                    <option value="">-------------------</option>
                                    <option value="105">공지에 기재된 일정에 맞춰서 순차 발송</option>
                                </select>
                            </li>
                            <li>
                                <p>취소 및 환불 불가 동의</p>
                                <select name="" id="">
                                    <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                    <option value="">-------------------</option>
                                    <option value="">동의합니다</option>
                                </select>
                            </li>
                            <li>
                                <p>미성년자 법정 대리인 동의</p>
                                <select name="" id="">
                                    <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                    <option value="">-------------------</option>
                                    <option value="">성인입니다</option>
                                    <option value="">법정 대리인의 동의를 받았습니다</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div class="btm_tbl">
                        <!-- <div>
                            <h3 class="product_name"></h3>
                            <p class="select_result"></p>
                        </div>
                        <div class="quantity">
                            <input type="text" class="quantity_opt" value="1"><a href="#" class="up"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" id="option_box1_up" class="option_box_up" alt="수량증가"></a><a href="#none" class="down eProductQuantityDownClass" data-target="option_box1_down"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" id="option_box1_down" class="option_box_down" alt="수량감소"></a></span>
                        </div>
                        <div>
                            <p class="product_price"></p>
                        </div> -->
                        <div class="result_price">
                            <p>총 상품금액(수량) : <span class="product_price">0</span><span class="product_num">(0개)</span></p>
                        </div>
                        <div class="finish_btn">
                            <button type="submit" id="buy_btn">바로 구매하기</button>
                            <button type="button" id="cart_btn">장바구니 담기</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>