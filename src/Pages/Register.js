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
                alert("????????????");
                this.props.history.push("/");
            } else {
                alert("????????????!");
            }
            console.log(response);
        }.bind(this)).catch(function (error) {
            // ??????????????? ??????
        }).then(function () {
            // ?????? ??????
        });

        // async await ????????? ????????? ???, 

    }

    render() {
        return <div id="wrap">
            <Header></Header>
            <section id="contents">

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="hidden" name="w" value=""></input>
                    <div className="register_wrap">
                        <p className="register_title">????????????</p>

                        <div className="social_login2">
                            <p>SNS???????????? ?????? ?????????/????????????</p>
                            <div className="social_2">
                                <a href="https://www.naver.com/"><img src={ico_naver} alt='' /></a>
                                <a href="https://www.naver.com/"><img src={ico_app} alt='' /></a>
                                <a href="https://www.naver.com/"><img src={ico_fb} alt='' /></a>
                            </div>
                        </div>

                        <div className="register_box">
                            <div className="email_1">
                                <p>?????????</p>
                                <div className="email_box">
                                    <input type="text" name="email" className="email_write" placeholder="?????????" /> @
                                    <select className="select" name="email_tail">
                                        <option value="">??????????????????</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="hotmail.com">hotmail.com</option>
                                        <option value="nate.com">nate.com</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pw_2">
                                <p>????????????</p>
                                <span>8??? ?????? ??????????????????.</span>
                                <input className="pw_2_box" type="password" name="mb_password" placeholder="????????????" />
                            </div>

                            <div className="pw_ok_3">
                                <p>???????????? ??????</p>
                                <input className="pw_ok_3_box" type="password" name="mb_password_re" placeholder="???????????? ??????" />
                            </div>

                            <div className="nickname_4">
                                <p>??????</p>
                                <span>?????? ????????? ????????? ?????? ????????? ??????????????????. (2~15???)</span>
                                <input className="nickname_4_box" name="mb_nick" placeholder="?????? (2~15???)" />
                            </div>

                            <div className="agree_5">
                                <p>????????????</p>
                                <div className="agree_box">
                                    <div className="all_agree">
                                        <input type="checkbox" className="checkbox_1" id="all_click" /><label className="all_agree2">????????????</label>
                                    </div>
                                    <div className="all_agree3">
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_1" />
                                            <label className="all_agree4">??? 14??? ???????????????.</label>
                                            <span className="on_1">(??????)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_2" />
                                            <label className="all_agree4"><a href="https://www.naver.com/">????????????</a></label>
                                            <span className="on_1">(??????)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_3" />
                                            <label className="all_agree4"><a href="https://www.naver.com/">?????????????????? ??? ????????????</a></label>
                                            <span className="on_1">(??????)</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox" id="click_4" />
                                            <label className="all_agree4">?????????, ???????????? ?????? ?????? ??? SMS ??????</label>
                                            <span className="on_2">(??????)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="register_btn">
                                <button className="register_btn2">???????????? ??????</button>
                            </div>

                            <div className="register_etc">
                                <span>?????? ???????????? ????????????????</span>
                                <a href="#!">?????????</a>
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