import React from 'react';
import '../Css/TopLineBanner.css';

class TopLineBanner extends React.Component {
    render() {
        return <div className='top_pop_bg'>
            <div className='top_pop'>

                <p>회원가입하고 맥북 받으실래요?</p>
                <div className='close'>
                    <div className='line line01'></div>
                    <div className='line line02'></div>
                    <div className='line line03'></div>
                </div>
            </div>
        </div>
    }
}

export default TopLineBanner;