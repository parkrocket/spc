import React from 'react';
import Main from '../Comp/Main.js';
import Login from '../Pages/Login.js';
import Logout from '../Pages/Logout.js';
import Register from '../Pages/Register.js';
import Club from '../Pages/Club.js';
import ClubView from '../Pages/ClubView.js';
import '../App.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        let isAuthorized = sessionStorage.getItem("isAuthorized");


        this.state = {
            isAuthorized: isAuthorized,
            onLogin: this.onLogin
        }
    }

    render() {
        return (
            <div>
                {/*{!this.state.isAuthorized ? <Redirect to="/login"></Redirect> : <Redirect to="/"></Redirect>}*/}
                <Switch>
                    <Route exact path="/spc"><Main></Main></Route>
                    <Route exact path="/"><Main></Main></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/logout" component={Logout}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route exact path="/Club" component={Club}></Route>
                    <Route exact path="/Club/:no" component={ClubView}></Route>
                </Switch>

                {/*<Route path="/login/" render={() => <Login loginStatus={this.state.loginStatus} changeLogin={this.onLogin}></Login>} ></Route>*/}
            </div>
        )
    }
}

export default App;