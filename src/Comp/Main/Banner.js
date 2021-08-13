import React from 'react';
import '../../Css/Banner.css';
import main_bn01 from '../../img/main_bn01.jpg';
import sub_bn01 from '../../img/sub_bn01.jpg';
import $ from "jquery";

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    };

    componentDidMount() {

        /* baneer */
        /* main */
        var banner = $(".main_bn_list  div");
        var current01 = 0;


        setInterval(function () {
            var prev01 = banner.eq(current01);
            move01(prev01, 0, "-100%");

            current01++;
            if (current01 === banner.size) { current01 = 0; };


            var next01 = banner.eq(current01);
            move01(next01, "100%", 0);
        }, 5000);

        function move01(tg01, start01, end01) {
            tg01.css('left', start01).stop().animate({ left: end01 });
        };
        /* sub */

    }

    render() {
        return <div className='banner'>
            <div className='main_bn'>
                <div className='main_bn_list'>
                    <div className='main_bn_img'><img src={main_bn01} alt='' /></div>
                    <div className='main_bn_img'><img src={main_bn01} alt='' /></div>
                    <div className='main_bn_img'></div>
                    <div className='main_bn_img'><img src={main_bn01} alt='' /></div>
                </div>
            </div>
            <div className='sub_bn'>
                <div className='sub_bn_list'>
                    <div className='sub_bn_img'><a href='#!'><img src={sub_bn01} alt='이벤트 배너' /></a></div>
                    <div className='sub_bn_img'></div>
                    <div className='sub_bn_img'></div>
                    <div className='sub_bn_img'></div>
                </div>
            </div>
        </div>
    }
}

export default Banner;