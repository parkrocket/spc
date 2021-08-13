import React from 'react';
import '../../Css/RankingClub.css';
import club_ranking1 from '../../img/club_ranking1.png';
import club_img01_01 from '../../img/club_img01_01.jpg';

class RankingClub extends React.Component {
    render() {
        return <div className='club_wrap'>
            <div className='title'>
                <h2>주간 동호회 순위</h2>
                <a href='#!'>더보기</a>
            </div>
            <div className='club'>
                <div className='club_ul'>
                    <div className='club_box'>
                        <img className='num' src={club_ranking1} alt='1위' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★ 함께 걷고함께 걷고함께 걷고함께 걷고함께 걷고</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                </div>
                <div className='club_ul'>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                    <div className='club_box'>
                        <img className='num' src='' alt='' />
                        <img className='img' src={club_img01_01} alt='' />
                        <span className='img_bg'></span>
                        <p className='club_tit'>수원시 / 119명 / 너와 함께 걷고 싶다★</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default RankingClub;