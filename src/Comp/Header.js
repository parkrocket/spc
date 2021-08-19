import React from 'react';
import $ from "jquery";
import '../Css/Header.css';
import search_icon from '../img/search_icon.png';
import test_img from '../img/test_img.jpg';
import TopLineBanner from './TopLineBanner';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';


class Header extends React.Component {
    constructor(props) {
        let isAuthorized = sessionStorage.getItem("isAuthorized");
        let mb_id = sessionStorage.getItem("ss_mb_id");
        super(props);
        this.state = {
            isAuthorized: isAuthorized,
            mb_id: mb_id,
            menu: this.props.menu,
            submenu: this.props.submenu,
            wrid: this.props.wrid
        }

    };

    componentDidMount() {
        console.log(this.state)

        const API_KEY = "63be2048de414bd803af8187d5fe47f7";


        function geoOn(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            weatherHourGet(lat, lng);

        }

        function geoError() {
            alert("위치 찾기 실패!!!!!!!");
        }
        /*
        const geo_options = {
            enableHighAccuracy: true, // 불리언 
            maximumAge: 30000, // 천분의 1초 단위 
            timeout: 27000 // 천분의 1초 단위 
        };
        */


        function unixDateIncoding(unixTime) {
            let utcTime = new Date(unixTime * 1000);
            const utcYear = utcTime.getFullYear();
            const utcMonth = utcTime.getMonth() + 1;
            const utcDate = utcTime.getDate();
            const utcHours = utcTime.getHours();
            const utcMinutes = utcTime.getMinutes();

            return `${utcYear}.${utcMonth}.${utcDate} ${utcHours}:${utcMinutes}`;
        }

        function weatherHourGet(lat, lng) {

            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}&exclude=alerts&lang=en&units=metric`;

            //console.log(url);

            fetch(url).then(response => response.json()).then(data => {


                let nowTime = unixDateIncoding(data.current.dt);
                let nowTemp = data.current.temp.toFixed(1);
                let nowIcon = data.current.weather[0].icon;
                let week = ['일', '월', '화', '수', '목', '금', '토'];
                let str = "";
                let i = 0;

                $("#temp").text(`${nowTemp} °C`);
                $("#weather_img").attr("src", `http://openweathermap.org/img/wn/${nowIcon}@2x.png`);
                $("#now_date").text(nowTime);

                // console.log(data.current, nowTime);

                $.each(data.daily, function (index, value) {

                    let time = new Date(value.dt * 1000).getDay();
                    //console.log(time);
                    let pop = `${Math.round(value.pop * 100)}%`;
                    const tempMin = value.temp.max.toFixed(1);
                    const tempMax = value.temp.min.toFixed(1);
                    const wIcon = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
                    let yoil = "";
                    if (i === 0) {
                        yoil = "오늘";
                    } else {
                        yoil = week[time];
                    }

                    str += `<li><p class="day">${yoil}</p><img src="${wIcon}" alt=""><p class="rain"><img class="weather_icon" src="img/weather_icon.png"><span>${pop}</span></p><p class="temp"><span class="high">${tempMax}º</span><span class="low">${tempMin}º</span></p></li>`;
                    i++;
                    // console.log(i);
                });
                $("#weather_wrap").html(str);

                localStorage.setItem("lat", lat);
                localStorage.setItem("lng", lng);

            });
        }



        const userLat = localStorage.getItem("lat");
        const userLng = localStorage.getItem("lng");

        if (userLat === null || userLng === null) {
            navigator.geolocation.getCurrentPosition(geoOn, geoError);
        } else {
            // weatherGet(userLat, userLng);
            weatherHourGet(userLat, userLng);
        }


        $(".weather_more").hide();
        let weather = document.querySelector('.weather');

        weather.addEventListener("click", function () {
            let result = weather.classList.toggle("on");
            if (result) {
                $(".weather_more").slideDown();
            } else {
                $(".weather_more").slideUp();
            }
        })




        /* 빠른연결 */

        $(".header_bg .more ul").hide();
        let speedlink = document.querySelector('.more_btn .btn');

        speedlink.addEventListener("click", function () {
            let result = speedlink.classList.toggle("on");
            if (result) {
                $('.more_btn .btn').addClass('on');
                $(".header_bg").animate({
                    height: '216px'
                });
                $(".header_bg .more ul").slideDown();
                $(".more_btn .btn_text").hide();
            } else {
                $('.more_btn .btn').removeClass('on');
                $(".header_bg").stop().animate({
                    height: '115px'
                });
                $(".header_bg .more ul").slideUp();
                $(".more_btn .btn_text").show();
            }
        });






    }



    render() {
        return <header>
            <TopLineBanner></TopLineBanner>
            <div className='header_bg'>
                <div className='search_bar_wrap'>
                    <div className='weather_box'>
                        <div className='weather'>
                            <img id='weather_img' src='' alt='' />
                            <p id='temp'></p>
                        </div>
                        <div className='weather_more'>
                            <p className='date' id='now_date'></p>
                            <ul id='weather_wrap'>
                                <li>
                                    <p className='day'>오늘</p>
                                    <p className='rain'>
                                        <img className='weather_icon' src='' alt='' />
                                        <span>50%</span>
                                    </p>
                                    <p className='temp'>
                                        <span className='high'>35º</span>
                                        <span className='low'>25º</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='day'>토</p>
                                    <img src='' alt='' />
                                    <p className='temp'>
                                        <span className='high'>35º</span>
                                        <span className='low'>25º</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='day'>일</p>
                                    <img src='' alt='' />
                                    <p className='temp'>
                                        <span className='high'>35º</span>
                                        <span className='low'>25º</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='day'>월</p>
                                    <img src='' alt='' />
                                    <p className='temp'>
                                        <span className='high'>35º</span>
                                        <span className='low'>25º</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='day'>화</p>
                                    <img src='' alt='' />
                                    <p className='temp'>
                                        <span className='high'>35º</span>
                                        <span className='low'>25º</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form action='#'>
                        <input type='search' placeholder='검색' />
                        <button><img src={search_icon} alt='검색' /></button>
                    </form>
                </div>
                <div className='more'>
                    <div className='more_btn'>
                        <div className='btn'></div>
                        <p className='btn_text'>빠른 연결</p>
                    </div>
                    <ul>
                        <li className='on'>
                            <a href='#!'><img src={test_img} alt='' /><p>등산</p></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'><img src={test_img} alt='' /></a>
                            <span className='icon_bg'></span>
                        </li>
                        <li>
                            <a href='#!'>+</a>
                            <span className='icon_bg'></span>
                        </li>
                    </ul>
                </div>
            </div>
            <nav>
                <div className='menu_wrap'>

                    <select
                        defaultValue="default"
                        name=''
                        id=''
                    >
                        <option value=''>전체 카테고리</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>

                    <HeaderMenu menu={this.state.menu} wrid={this.state.wrid} submenu={this.state.submenu}></HeaderMenu>

                    <span className='login'>
                        {this.state.isAuthorized ? (<Link to="/logout">{this.state.mb_id}로그아웃</Link>) : (<Link to="/login">로그인</Link>)}

                    </span>
                </div>
            </nav>
        </header>
    }
}

export default Header;