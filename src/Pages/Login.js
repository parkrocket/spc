import React from 'react';
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';
import axios from 'axios';// eslint-disable-line no-unused-vars
import '../Css/Login.css';
import $ from 'jquery';
import ico_naver from '../img/ico_naver.png';
import ico_app from '../img/ico_app.png';
import ico_fb from '../img/ico_fb.png';
import login_banner from '../img/login_banner.png';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        const login_mb_id = sessionStorage.getItem("ss_mb_id");
        const isAuthorized = sessionStorage.getItem("isAuthorized");


        this.state = {
            isAuthorized: isAuthorized,
            id: login_mb_id,
            nick: ""
        }

        if (this.state.isAuthorized) {
            props.history.push("/");
        }

    };


    componentDidMount() {
        $(document).on("click", ".login_box", function () {
            $(".login_box").css("border-color", "#ddd");
            $(this).css("border-color", "#0055b8");
        });

        $(document).on("keyup", ".login_box", function () {
            var box_1 = $("#box_1").val();
            var box_2 = $("#box_2").val();
            if (box_1 !== "" && box_2 !== "") {
                $(".login_btn").css("background-color", "#0055b8");
            } else {
                $(".login_btn").css("background-color", "#ddd");
            };
        });



    };




    handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'Content-type': 'application/json'
        }

        axios.post("https://g5g5.info/test/RestApi_spc_push.php", {

            mb_id: e.target.email.value,
            mb_password: e.target.pwd.value
        }, { headers }).then(function (response) {
            console.log(response);
            if (response.data.mb_id) {
                console.log(response.data.mb_state);
                if (response.data.mb_state) {
                    sessionStorage.setItem("ss_mb_id", response.data.mb_id);
                    sessionStorage.setItem("isAuthorized", true);
                    this.props.history.push("/");
                } else {
                    alert("로그인 실패 ^-^");
                }
                //this.props.history.push("/");
            }


        }.bind(this)).catch(function (error) {
            // 오류발생시 실행
        }).then(function () {
            // 항상 실행
        });

        // async await 함수를 사용할 때, 

    }


    render() {
        return (

            <div id="wrap">
                <Header></Header>
                <section id="contents">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="body_wrap">
                            <p className="logo_title">로그인</p>
                            <div className="input_wrap">
                                <input className="login_box box_1" id="box_1" name="email" placeholder="이메일" />
                                <input type="password" className="login_box box_2" id="box_2" name="pwd" placeholder="비밀번호" />
                                <button className="login_btn">로그인</button>
                                <div className="check_email">
                                    <input type="checkbox" /><label className="email_save">이메일 저장</label>
                                </div>
                                <p className="or">
                                    <span className="or_2">또는</span>
                                </p>

                                <div className="social_login">
                                    <p>SNS계정으로 간편 로그인/회원가입</p>
                                    <div className="social">
                                        <a href="https://www.naver.com/"><img src={ico_naver} alt='' /></a>
                                        <a href="https://www.naver.com/"><img src={ico_app} alt='' /></a>
                                        <a href="https://www.naver.com/"><img src={ico_fb} alt='' /></a>
                                    </div>
                                    <div className="login_banner">
                                        <Link to="/register"><img src={login_banner} alt='' /></Link>
                                    </div>
                                    <div className="login_etc">
                                        <Link to="/register">이메일로 가입</Link>
                                        <a href="https://www.naver.com/">비밀번호 찾기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/*
                    <h2><Link to="/">홈으로 이동</Link></h2>
                    <h1>여기는 로그인을 처리하는 페이지입니다용!</h1>
                    <input type="button" value="db연결" onClick={
                        function () {
                            axios.get("https://g5g5.info/test/RestApi_spc.php")
                                .then((response) => {
                                    console.log(response.data.mb_id);
                                    this.setState({
                                        id: response.data.mb_id,
                                        nick: response.data.mb_nick
                                    })
                                })
                        }.bind(this)
                    }></input>
                    <div id="test_div">{this.state.id}</div>
                    <div id="test_div">{this.state.nick}</div>
                 */}
                </section>
                <Footer></Footer>
            </div >
        )
    }
}

export default Login;