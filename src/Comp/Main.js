import React from 'react';
import '../Css/Main.css';
import Banner from './Banner.js';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    };

    render() {
        return <Banner></Banner>
    }
}

export default Main;