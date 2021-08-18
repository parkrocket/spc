import React from 'react';
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';
import '../Css/Register.css';

import ico_naver from '../img/ico_naver.png';
import ico_app from '../img/ico_app.png';
import ico_fb from '../img/ico_fb.png';


import axios from 'axios';
import $ from 'jquery';

class Register extends React.Component {
    constructor(props) {
        super(props);
        const isAuthorized = sessionStorage.getItem("isAuthorized");


        this.state = {
            isAuthorized: isAuthorized
        }

        if (this.state.isAuthorized) {
            props.history.push("/");
        }

    };

    componentDidMount() {


        $(document).on("keyup", "input", function () {

            form_chk();
        });
        $(document).on("change", ".select", function () {

            form_chk();
        });

        $(document).on("click", "input, .select", function () {

            $("input, .select, .agree_box").css("border-color", "#ddd");
            var ccc = $(this).attr('className');
            if (ccc === 'checkbox_1') {
                $(".agree_box").css("border-color", "#ddd");
                $(".agree_box").css("border-color", "#0055b8");
            } else {
                $(this).css("border-color", "#0055b8");
            };
        });

        $(".checkbox_1, .checkbox").on("change", function () {
            var checked_all = $('.checkbox_1').is(':checked');
            var checked = $('.checkbox').is(':checked');

            if (checked_all || checked) {
                $(".agree_box").css("border-color", "#ddd");
                $(".agree_box").css("border-color", "#0055b8");
            } else {
                $(this).css("border-color", "#0055b8");
            }
        });
        $(document).on("click", "#all_click", function () {

            var checked = $('#all_click').is(':checked');
            if (checked) {
                $('input:checkbox').prop('checked', true);
            } else {
                $('input:checkbox').prop('checked', false);
            };

            form_chk();
        });
        $(document).on("click", ".checkbox", function () {

            var checked = $('#all_click').is(':checked');
            if (checked) {
                $('#all_click').prop('checked', false);
            } else {

            };

            form_chk();
        });



        function form_chk() {
            var chk1 = $("#click_1").is(":checked");
            var chk2 = $("#click_2").is(":checked");
            var chk3 = $("#click_3").is(":checked");
            var input_1 = $(".email_write").val();
            var input_2 = $(".pw_2_box").val();
            var input_3 = $(".pw_ok_3_box").val();
            var input_4 = $(".nickname_4_box").val();
            var input_5 = $(".select").val();

            console.log(chk1);

            if (input_1 !== "" && input_2 !== "" && input_3 !== "" && input_4 !== "" && input_5 !== "" && chk1 && chk2 && chk3) {
                $(".register_btn2").css("background-color", "#0055b8");
            } else {
                $(".register_btn2").css("background-color", "#ddd");
            };
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'Content-type': 'application/json'
        }

        axios.post("https://g5g5.info/test/register_test.php", {
            w: e.target.w.value,
            mb_id: e.target.email.value + "@" + e.target.email_tail.value,
            mb_password: e.target.mb_password.value,
            mb_nick: e.target.mb_nick.value
        }, { headers }).then(function (response) {
            if (response.data.reg_result) {
                alert("가입완료");
                this.props.history.push("/");
            } else {
                alert("가입실패!");
            }
            console.log(response);
        }.bind(this)).catch(function (error) {
            // 오류발생시 실행
        }).then(function () {
            // 항상 실행
        });

        // async await 함수를 사용할 때, 

    }

    render() {
        return <div id="wrap">
            <Header></Header>
            <section id="contents">

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="hidden" name="w" value=""></input>
                    <div className="register_wrap">
                        <p className="register_title">회원가입</p>

                        <div className="social_login2">
                            <p>SNS계정으로 간편 로그인/회원가입</p>
                            <div className="social_2">
                                <a href="https://www.naver.com/"><img src={ico_naver} alt='' /></a>
                                <a href="https://www.naver.com/"><img src={ico_app} alt='' /></a>
                                <a href="https://www.naver.com/"><img src={ico_fb} alt='' /></a>
                            </div>
                        </div>

                        <div className="register_box">
                            <div className="email_1">
                                <p>이메일</p>
                                <div className="email_box">
                                    <input type="text" name="email" className="email_write" placeholder="이메일" /> @
                                    <select className="select" name="email_tail">
                                        <option value="">선택해주세요</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="hotmail.com">hotmail.com</option>
                                        <option value="nate.com">nate.com</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pw_2">
                                <p>비밀번호</p>
                                <span>8자 이상 입력해주세요.</span>
                                <input className="pw_2_box" type="password" name="mb_password" placeholder="비밀번호" />
                            </div>

                            <div className="pw_ok_3">
                                <p>비밀번호 확인</p>
                                <input className="pw_ok_3_box" type="password" name="mb_password_re" placeholder="비밀번호 확인" />
                            </div>

                            <div className="nickname_4">
                                <p>별명</p>
                                <span>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</span>
                                <input className="nickname_4_box" name="mb_nick" placeholder="별명 (2~15자)" />
                            </div>

                            <div className="agree_5">
                                <p>약관동의</p>
                                <div className="agree_box">
                                    <div className="all_agree">
                                        <input type="checkbox" className="checkbox_1" id="all_click" /><label className="all_agree2">전체동의</label>
                                    </div>
                                    <div className="all_agree3">
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_1" />
                                            <label className="all_agree4">만 14세 이상입니다.</label>
                                            <span className="on_1">(필수)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_2" />
                                            <label className="all_agree4"><a href="https://www.naver.com/">이용약관</a></label>
                                            <span className="on_1">(필수)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_3" />
                                            <label className="all_agree4"><a href="https://www.naver.com/">개인정보수집 및 이용동의</a></label>
                                            <span className="on_1">(필수)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_4" />
                                            <label className="all_agree4">이벤트, 프로모션 알림 메일 및 SMS 수신</label>
                                            <span className="on_2">(선택)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="register_btn">
                                <button className="register_btn2">회원가입 완료</button>
                            </div>

                            <div className="register_etc">
                                <span>이미 아이디가 있으신가요?</span>
                                <a href="#!">로그인</a>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer></Footer>
        </div>
    }
}

export default Register