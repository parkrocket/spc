import React from 'react';
import '../../Css/Event.css'
import Event01 from '../../img/event01.jpg';

class Event extends React.Component {
    render() {
        return <div className='event_wrap'>
            <div className='title'>
                <h2>기회전 &amp; 이벤트</h2>
                <a href='#!'>더보기</a>
            </div>
            <div className='event'>
                <div className='event_box'>
                    <img src={Event01} alt='' />
                    <span className='date'>21/09/21~21/09/03</span>
                    <p className='event_tit'>2021 제1회 키친디자인페어</p>
                </div>
                <div className='event_box'>
                    <img src={Event01} alt='' />
                    <span className='date'>21/09/21~21/09/03</span>
                    <p className='event_tit'>2021 제1회 키친디자인페어</p>
                </div>
                <div className='event_box'>
                    <img src={Event01} alt='' />
                    <span className='date'>21/09/21~21/09/03</span>
                    <p className='event_tit'>2021 제1회 키친디자인페어</p>
                </div>
            </div>
        </div>
    }
}

export default Event;