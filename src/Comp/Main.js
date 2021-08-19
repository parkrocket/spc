import React from 'react';
import '../Css/Main.css';
import Banner from './Main/Banner.js';
import Best from './Main/Best.js';
import LineBanner from './Main/LineBanner.js';
import BestProduct from './Main/BestProduct.js';
import Market from './Main/Market.js';
import RankingClub from './Main/RankingClub.js';
import Event from './Main/Event.js';
import Header from './Header.js';
import Footer from './Footer.js';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }


    };
    componentDidMount() {

    }



    render() {
        return (

            <div id="wrap">
                <Header></Header>
                <section id="contents">
                    <Banner></Banner>
                    <Best></Best>
                    <LineBanner></LineBanner>
                    <BestProduct></BestProduct>
                    <Market></Market>
                    <RankingClub></RankingClub>
                    <Event></Event>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}

export default Main;