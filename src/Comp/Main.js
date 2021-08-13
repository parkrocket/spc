import React from 'react';
import '../Css/Main.css';
import Banner from './Main/Banner.js';
import Best from './Main/Best.js';
import LineBanner from './Main/LineBanner.js';
import BestProduct from './Main/BestProduct.js';
import Market from './Main/Market.js';
import RankingClub from './Main/RankingClub.js';
import Event from './Main/Event.js';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    };

    render() {
        return <div>
            <Banner></Banner>
            <Best></Best>
            <LineBanner></LineBanner>
            <BestProduct></BestProduct>
            <Market></Market>
            <RankingClub></RankingClub>
            <Event></Event>
        </div>
    }
}

export default Main;