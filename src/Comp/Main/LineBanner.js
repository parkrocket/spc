import React from 'react';
import '../../Css/LineBanner.css';
import middle_bn from '../../img/middle_bn.jpg';

class LineBanner extends React.Component {
    render() {
        return <div className='middle_bn'>
            <img src={middle_bn} alt='팝업 배너' />
        </div>
    }
}

export default LineBanner;