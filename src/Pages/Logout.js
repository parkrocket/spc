import React from 'react';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        sessionStorage.removeItem("ss_mb_id");
        sessionStorage.removeItem("isAuthorized");

        const isAuthorized = sessionStorage.getItem("isAuthorized");


        this.state = {
            isAuthorized: isAuthorized
        }

        if (!this.state.isAuthorized) {
            props.history.push("/");
        }

    };

    render() {
        return "";
    }
}

export default Logout;