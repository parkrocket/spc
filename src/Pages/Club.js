import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Comp/Footer';
import Header from '../Comp/Header';
import '../Css/Club.css';

import rec_meet_1 from "../img/rec_meet_1.jpg";
import sub_meet_1 from "../img/sub_meet_1.png";



class Club extends React.Component {
    constructor(props) {
        super(props);
        let isAuthorized = sessionStorage.getItem("isAuthorized");


        this.state = {
            isAuthorized: isAuthorized,
            menu: "club"
        }
    }

    render() {
        return <div id="wrap">
            <Header menu={this.state.menu}></Header>
            <section id="contents">
                <div className="main_meet">
                    <div className="meet">
                        <div className="rec_meet">
                            <div className="rec_meet_top">
                                <p className="rec_meet_title">추천동호회</p>
                                <div className="arrow_btn">
                                    <button type="button" title="이전" className="arrow_left1"></button>
                                    <button type="button" title="다음" className="arrow_right1"></button>
                                </div>
                            </div>

                            <ul className="rec_meet_main">
                                <li className="rec_meget_list">
                                    <Link to="/club/123" className="rec_meet_list_all">
                                        <div className="meet_img"><img alt='' src={rec_meet_1} /></div>
                                        <div className="content_wrap">
                                            <div className="content_title">수원시 / 119명 / 너와 함께 걷고 싶다★</div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rec_meget_list">
                                    <Link to="/club/123" className="rec_meet_list_all">
                                        <div className="meet_img"><img alt='' src={rec_meet_1} /></div>
                                        <div className="content_wrap">
                                            <div className="content_title">수원시 / 119명 / 너와 함께 걷고 싶다★</div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rec_meget_list">
                                    <Link to="/club/123" className="rec_meet_list_all">
                                        <div className="meet_img"><img alt='' src={rec_meet_1} /></div>
                                        <div className="content_wrap">
                                            <div className="content_title">수원시 / 119명 / 너와 함께 걷고 싶다★</div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="rec_meget_list">
                                    <Link to="/club/123" className="rec_meet_list_all">
                                        <div className="meet_img"><img alt='' src={rec_meet_1} /></div>
                                        <div className="content_wrap">
                                            <div className="content_title">수원시 / 119명 / 너와 함께 걷고 싶다★</div>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div className="subject_meet">
                            <div className="sub_meet_in">
                                <div className="sub_top">
                                    <div className="sub_title">주제별 동호회</div>
                                    <ul className="sub_category">
                                        <li className="sub_category_all">
                                            <a href="#!" className="sub_url">헬스</a>
                                        </li>
                                        <li className="sub_category_all">
                                            <a href="#!" className="sub_url">자전거</a>
                                        </li>
                                        <li className="sub_category_all">
                                            <a href="#!" className="sub_url">골프</a>
                                        </li>
                                        <li className="sub_category_all">
                                            <a href="#!" className="sub_url">등산</a>
                                        </li>
                                        <li className="sub_category_box">
                                            <select className="sub_select">
                                                <option value="">인기순</option>
                                                <option value="">최신순</option>
                                                <option value="">추천순</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sub_meet_list">
                                    <ul className="meet_list_ul">
                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="meet_list_li">
                                            <a className="list_a" href="https://www.naver.com/">
                                                <div className="list_img"><img alt='' src={sub_meet_1} /></div>
                                                <div className="list_txt">
                                                    <p>가산동・자전거・멤버 239,947명</p>
                                                    <h1>Walking Mate</h1>
                                                    <span>대전 수통골 ・ 7.2(금) 오전 9시</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    }
}

export default Club;