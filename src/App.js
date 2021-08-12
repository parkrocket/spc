import './App.css';
import React from 'react';
import Header from './Comp/Header.js';
import Footer from './Comp/Footer.js';
import Main from './Comp/Main.js';
import $ from "jquery"; // eslint-disable-line no-unused-vars

class App extends React.Component {
  render() {
    return <div id="wrap">
      <Header></Header>
      <section id="contents"><Main></Main></section>
      <Footer></Footer>
    </div>
  }
}


export default App;
