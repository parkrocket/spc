import React from 'react'
import Footer from '../Comp/Footer';
import Header from '../Comp/Header';
import '../Css/ClubView.css';

import notice_photo from "../img/notice_photo.jpg";
import profile from "../img/profile.png";
import notice_list_img from "../img/notice_list_img.jpg";
class ClubView extends React.Component {
    constructor(props) {
        super(props);
        let isAuthorized = sessionStorage.getItem("isAuthorized");
        this.state = {
            isAuthorized: isAuthorized,
            menu: "club",
            submenu: "home",
            wrid: this.props.match.params.no
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {

        return <div id="wrap">
            <Header menu={this.state.menu} wrid={this.state.wrid} submenu={this.state.submenu}></Header>
            <section id="contents">
                <div className='main_side_wrap'>
                    <div className='main'>
                        <div className='photo'>
                            <img src={notice_photo} alt='게시판 사진' />
                        </div>
                        <div className='notice'>
                            <h2>게시판</h2>
                            <ul>
                                <li><a href='#!'><span>[공지]</span> 7/10(토) 칠보산 산행 안내</a></li>
                                <li><a href='#!'><span>[공지]</span> 산스타그램 공통 숙지사항</a></li>
                                <li><a href='#!'><span>[공지]</span> 산스타그램 20-21시즌 일정 안내(부분수정)</a></li>
                            </ul>
                        </div>
                        <div className='notice_list'>
                            <ul>
                                <li>
                                    <a href='#!'>
                                        <div className='n_text'>
                                            <p className='tit'>자전거 어떤거 살지 모르겠어요. 추천 좀 해주세요 ㅠㅠ</p>
                                            <p className='cont'>
                                                로드 자전거 추천 부탁드립니다. MTB는 너무 바퀴가 두꺼워서 일단 패스합니다. 로드 자전거 중에서 사이클같이 바퀴가
                                                아주 얇은 것은 시내주행 겸하는데에는 불편하지 않을까요?  요즘 나오는 바퀴 얇은 로드 자전거는 괜챦은가요?  주행성 12345679123456789123456879
                                            </p>
                                        </div>
                                        <div className="img"><img src={notice_list_img} alt='' /></div>
                                    </a>
                                    <div className='info_wrap'>
                                        <div className='nick'>
                                            <img className='profile' src={profile} alt='프로필 사진' />
                                            <p className='name'>nettle</p>
                                        </div>
                                        <span className='date'>방금 &middot; &nbsp;</span>
                                        <span className='cmnt'>댓글 &middot; &nbsp;</span>
                                        <span className='coutn'>조회 2</span>
                                    </div>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='n_text'>
                                            <p className='tit'>자전거 어떤거 살지 모르겠어요. 추천 좀 해주세요 ㅠㅠ</p>
                                            <p className='cont'>
                                                로드 자전거 추천 부탁드립니다. MTB는 너무 바퀴가 두꺼워서 일단 패스합니다. 로드 자전거 중에서 사이클같이 바퀴가
                                                아주 얇은 것은 시내주행 겸하는데에는 불편하지 않을까요?  요즘 나오는 바퀴 얇은 로드 자전거는 괜챦은가요?  주행성 12345679123456789123456879
                                            </p>
                                        </div>
                                        <div className="img"><img src={notice_list_img} alt='' /></div>
                                    </a>
                                    <div className='info_wrap'>
                                        <div className='nick'>
                                            <img className='profile' src={profile} alt='프로필 사진' />
                                            <p className='name'>nettle</p>
                                        </div>
                                        <span className='date'>방금 &middot; &nbsp;</span>
                                        <span className='cmnt'>댓글 &middot; &nbsp;</span>
                                        <span className='coutn'>조회 2</span>
                                    </div>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='n_text'>
                                            <p className='tit'>자전거 어떤거 살지 모르겠어요. 추천 좀 해주세요 ㅠㅠ</p>
                                            <p className='cont'>
                                                로드 자전거 추천 부탁드립니다. MTB는 너무 바퀴가 두꺼워서 일단 패스합니다. 로드 자전거 중에서 사이클같이 바퀴가
                                                아주 얇은 것은 시내주행 겸하는데에는 불편하지 않을까요?  요즘 나오는 바퀴 얇은 로드 자전거는 괜챦은가요?  주행성 12345679123456789123456879
                                            </p>
                                        </div>
                                        <div className="img"><img src={notice_list_img} alt='' /></div>
                                    </a>
                                    <div className='info_wrap'>
                                        <div className='nick'>
                                            <img className='profile' src={profile} alt='프로필 사진' />
                                            <p className='name'>nettle</p>
                                        </div>
                                        <span className='date'>방금 &middot; &nbsp;</span>
                                        <span className='cmnt'>댓글 &middot; &nbsp;</span>
                                        <span className='coutn'>조회 2</span>
                                    </div>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='n_text'>
                                            <p className='tit'>자전거 어떤거 살지 모르겠어요. 추천 좀 해주세요 ㅠㅠ</p>
                                            <p className='cont'>
                                                로드 자전거 추천 부탁드립니다. MTB는 너무 바퀴가 두꺼워서 일단 패스합니다. 로드 자전거 중에서 사이클같이 바퀴가
                                                아주 얇은 것은 시내주행 겸하는데에는 불편하지 않을까요?  요즘 나오는 바퀴 얇은 로드 자전거는 괜챦은가요?  주행성 12345679123456789123456879
                                            </p>
                                        </div>
                                        <div className="img"><img src={notice_list_img} alt='' /></div>
                                    </a>
                                    <div className='info_wrap'>
                                        <div className='nick'>
                                            <img className='profile' src={profile} alt='프로필 사진' />
                                            <p className='name'>nettle</p>
                                        </div>
                                        <span className='date'>방금 &middot; &nbsp;</span>
                                        <span className='cmnt'>댓글 &middot; &nbsp;</span>
                                        <span className='coutn'>조회 2</span>
                                    </div>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='n_text'>
                                            <p className='tit'>자전거 어떤거 살지 모르겠어요. 추천 좀 해주세요 ㅠㅠ</p>
                                            <p className='cont'>
                                                로드 자전거 추천 부탁드립니다. MTB는 너무 바퀴가 두꺼워서 일단 패스합니다. 로드 자전거 중에서 사이클같이 바퀴가
                                                아주 얇은 것은 시내주행 겸하는데에는 불편하지 않을까요?  요즘 나오는 바퀴 얇은 로드 자전거는 괜챦은가요?  주행성 12345679123456789123456879
                                            </p>
                                        </div>
                                        <div className="img"><img src={notice_list_img} alt='' /></div>
                                    </a>
                                    <div className='info_wrap'>
                                        <div className='nick'>
                                            <img className='profile' src={profile} alt='프로필 사진' />
                                            <p className='name'>nettle</p>
                                        </div>
                                        <span className='date'>방금 &middot; &nbsp;</span>
                                        <span className='cmnt'>댓글 &middot; &nbsp;</span>
                                        <span className='coutn'>조회 2</span>
                                    </div>
                                </li>
                            </ul>
                            <div className='page_num'>
                                <div className='arrow'>&lt;</div>
                                <div>1</div>
                                <div className='on'>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div className='arrow'>&gt;</div>
                            </div>
                        </div>

                    </div>
                    <div className='side_warp'>
                        <div className='side_fixed'>
                            <div className='club_info_box'>
                                <p className='club_info'>가산동 &middot; 헬스 &middot; 멤버 239,947명</p>
                                <p className='club_name'>북앤잉 | 독서와 영어회화</p>
                                <p className='time'>대전 수통골 <span>&middot;</span> 7.2(금) 오전 9시</p>
                            </div>
                            <div className='button'>
                                <button type='button' className='like'><img src='' alt='' />1816</button>
                                <button type='button' className='link'><img src='' alt='' />공유하기</button>
                                <button type='button' className='join'>참여하기</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </div>
    }
}

export default ClubView;