import React from 'react';
import '../../Css/Market.css';
import Market_item01_01 from '../../img/market_item01_01.jpg';

class Market extends React.Component {
    render() {
        return <div className='market_wrap'>
            <div className='title'>
                <h2>중고마켓</h2>
                <a href='#!'>더보기</a>
            </div>
            <div className='market_item_wrap'>
                <div className='market_item'>
                    <div className='item_box'>
                        <a href='#!'>
                            <img src={Market_item01_01} alt='' />
                            <span className='area'>서울 금천구</span>
                            <p className='product'>컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                        </a>
                        <div className='price'>
                            <span className='sell'></span>
                            <p>49,900원</p>
                        </div>
                        <div className='tag'>
                            <p>#!자전거용품</p>
                        </div>
                    </div>
                    <div className='item_box'>
                        <a href='#!'>
                            <img src={Market_item01_01} alt='' />
                            <span className='area'>서울 금천구</span>
                            <p className='product'>컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                        </a>
                        <div className='price'>
                            <span className='sell'></span>
                            <p>49,900원</p>
                        </div>
                        <div className='tag'>
                            <p>#!자전거용품</p>
                        </div>
                    </div>
                    <div className='item_box'>
                        <a href='#!'>
                            <img src={Market_item01_01} alt='' />
                            <span className='area'>서울 금천구</span>
                            <p className='product'>컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                        </a>
                        <div className='price'>
                            <span className='sell'></span>
                            <p>49,900원</p>
                        </div>
                        <div className='tag'>
                            <p>#!자전거용품</p>
                        </div>
                    </div>
                    <div className='item_box'>
                        <a href='#!'>
                            <img src={Market_item01_01} alt='' />
                            <span className='area'>서울 금천구</span>
                            <p className='product'>컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                        </a>
                        <div className='price'>
                            <span className='sell'></span>
                            <p>49,900원</p>
                        </div>
                        <div className='tag'>
                            <p>#!자전거용품</p>
                        </div>
                    </div>
                    <div className='item_box'>
                        <a href='#!'>
                            <img src={Market_item01_01} alt='' />
                            <span className='area'>서울 금천구</span>
                            <p className='product'>컬러웨이 퓨전 14 카모 스탠드백 팝 컬러웨이 퓨전 14 카모 스탠드백 팝</p>
                        </a>
                        <div className='price'>
                            <span className='sell'></span>
                            <p>49,900원</p>
                        </div>
                        <div className='tag'>
                            <p>#!자전거용품</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Market;