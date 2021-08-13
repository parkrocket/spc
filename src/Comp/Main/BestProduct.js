import React from 'react';
import '../../Css/BestProduct.css';
import $ from "jquery";
import Ranking_up from '../../img/ranking_up.png';
import Ranking_item01_01 from '../../img/ranking_item01_01.jpg';
import Club_img01_01 from '../../img/club_img01_01.jpg';

class BestProduct extends React.Component {
    componentDidMount() {

        /* ranking */
        var ranking = $(".rank_list li");
        var rank_item = $(".ranking_item_wrap .ranking_item");
        var current02 = 0;
        var current03 = 0;

        setInterval(function () {
            var prev02 = ranking.eq(current02);
            move02(prev02, 0, "-100%");

            current02++;
            if (current02 === ranking.length) { current02 = 0; };

            var next02 = ranking.eq(current02);
            move02(next02, "100%", 0);
        }, 5000);

        function move02(tg02, start02, end02) {
            tg02.css('top', start02).stop().animate({ top: end02 });
        };

        setInterval(function () {
            var prev03 = rank_item.eq(current03);
            move03(prev03, 0, "-100%");

            current03++;
            if (current03 === rank_item.length) { current03 = 0; };

            var next03 = rank_item.eq(current03);
            move03(next03, "100%", 0);
        }, 5000);

        function move03(tg03, start03, end03) {
            tg03.css('top', start03).stop().animate({ top: end03 });
        };


    }
    render() {
        return <div className='ranking_wrap'>
            <div className='title'>
                <h2>베스트</h2>
                <div>
                    <p className='on'>일간 &nbsp; |</p>
                    <p> &nbsp;주간</p>
                </div>
                <a href='#!'>더보기</a>
            </div>
            <div className='ranking'>
                <ul className='rank_list'>
                    <li>
                        <span>1</span>
                        <img className='up_down' src={Ranking_up} alt='' />
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>2</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>3</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>4</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>5</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>6</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>7</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>8</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>9</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                    <li>
                        <span>10</span>
                        <a href='#!'>닭가슴살</a>
                    </li>
                </ul>
                <div className='ranking_item_wrap'>
                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g + 200g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'>32%</span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>59,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g + 200g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'>32%</span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>59,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>9,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>59,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Club_img01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>

                    <div className='ranking_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <img src={Ranking_item01_01} alt='' />
                                <span className='brand'>잇메이트</span>
                                <p className='product'>골든팜 지웨이 올스타 스팀 닭가슴살 오리지널맛 100g</p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <p>49,900원</p>
                            </div>
                            <div className='tag'>
                                <p>#!닭가슴살볼</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BestProduct;