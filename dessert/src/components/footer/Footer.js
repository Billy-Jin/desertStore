import React, { useState } from "react";
import "./Footer.css";

const termsOfList = [
  "이용약관",
  "개인정보 처리방침",
  "공지사항",
  "자주 묻는 질문",
  "이벤트",
  "About 회사",
];

const Footer = () => {
  const [termsOf, setTermOf] = useState(termsOfList);
  return (
    <div className='footer'>
      <div className='ft-div'>
        <nav>
          <ul>
            <li>
              <span className='termsOf-text'>이용약관</span>
              <span>|</span>
            </li>
            <li>
              <span className='termsOf-text'>개인정보 처리방침</span>
              <span>|</span>
            </li>
            <li>
              <span className='termsOf-text'>공지사항</span>
              <span>|</span>
            </li>
            <li>
              <span className='termsOf-text'>이용약관</span>
              <span>|</span>
            </li>
            <li>
              <span className='termsOf-text'>이벤트</span>
              <span>|</span>
            </li>
            <li>
              <span className='termsOf-text'>About 회사</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className='ft-div'>
        <div className='ft-div2'>
          <div className='text-box'>
            <div className='logo'>로고사진</div>
          </div>
          <div className='text-box'>
            <ul>
              <li>
                <strong>(주)회사명</strong>
              </li>
              <li>
                <span>대표이사 : 강민규,진우람</span>
              </li>
              <li>
                <span>서울특별시 OO구 OO로 OO길 OO</span>
              </li>
              <li>
                <span>사업자 등록번호 : 123-45-67890</span>
              </li>
              <li>
                <span>통신판매업신고: 2022-서울OO-1234</span>
              </li>
            </ul>
            <span className='mt-fix1'>
              저희회사는 통신 판매중개지이며 통신 판매의 당사자가 아닙니다.
              <br />
              따라서 저희회사는 상품 거래정보 및 거래에 대하여 책임을 지지
              않습니다.
              <br />
            </span>
            <span className='copyright'>
              Copyright © 2022 Backpackr All right reserved.
            </span>
          </div>
          <div className='text-box'>
            <ul>
              <li>
                <label>고객센터</label>
                <span className='service-time'>월~금 오전 9시~ 오후 6시</span>
              </li>
              <li>
                <label>카카오톡</label>
                <span //오픈톡 링크
                >
                  회사명
                </span>
              </li>
              <li>
                <label>
                  <strong>대표번호</strong>
                </label>
                <span>1234-5678</span>
              </li>
              <li>
                <label>메일</label>
                <span>support@abc.com</span>
              </li>
              <li>
                <label>제휴문의</label>
                <span>uram@abc.com</span>
              </li>
            </ul>
            <span className='mt-fix1'>
              저희회사를 이용중 궁금하신점이 있으신가요?
              <br />
              메일또는 플러스친구 '회사명'로 연락해주세요.
              <br />
              최선을 다해 도와드리겠습니다.
            </span>
          </div>
          <div className='text-box'>
            <div>
              <strong>FollowUs</strong>
              <nav>
                <span>페이스북</span>
                <span>인스타그램</span>
                <span>블로그</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    //http://www.dessertgenie.co.kr/
    //https://smartstore.naver.com/cakedrama
    //https://www.idus.com/w/main/popular-category
  );
};

export default Footer;
