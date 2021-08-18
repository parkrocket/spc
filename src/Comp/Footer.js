import React from 'react';
import '../Css/Footer.css';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    };

    render() {
        return <footer>
            <div className='footer_wrap'>
                <div className='footer_top'>
                    <p>고객센터</p>
                    <p className='call'>1661-1234</p>
                    <p className='time'>평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:30) 주말 &amp; 공휴일 제외</p>
                </div>
                <div className='footer_middle'>
                    <ul>
                        <li><a href='#!'>브랜드 스토리</a></li>
                        <li><a href='#!'>회사소개</a></li>
                        <li><a href='#!'>채용정보</a></li>
                        <li><a href='#!'>이용약관</a></li>
                        <li><a href='#!'>개인정보처리방침</a></li>
                        <li><a href='#!'>공지사항</a></li>
                        <li><a href='#!'>고객센터</a></li>
                        <li><a href='#!'>고객의 소리</a></li>
                        <li><a href='#!'>전문가 등록</a></li>
                        <li><a href='#!'>사업자 구매회원</a></li>
                        <li><a href='#!'>제휴/광고 문의</a></li>
                        <li><a href='#!'>입점신청 문의</a></li>
                    </ul>
                </div>
                <address>
                    상호명 : 링크비 이메일 : (고객문의) cs@linkbe.kr (제휴문의) contact@linkbe.kr 대표이사 : 홍길동 사업자등록번호 : 123-45-67800
                    통신판매업신고번호 : 제2021-서울서초-1234호 주소 : 서울 서초구 서초대로12길 3 빌리브타워 99층 <br />
                    동키은행 채무지급보증안내 : 링크비는 고객님이 현금결제한 금액에 대해 동키은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 서비스가입사실 확인 <br />
                    링크비는 통신판매중개자로서 통신판매의 당사자가 아니며, 입점업체가 등록한 상품, 상품정보 및 거래에 대하여 링크비는 일체 책임을 지지 않습니다.
                </address>
                <div className='copyright'>
                    Copyright 2021. linkbe, Co., Ltd. All rights reserved
                </div>
            </div>
        </footer>
    }
}

export default Footer;