import React from 'react';


class About extends React.Component {
    constructor(props) {
        super(props);
        const login_mb_id = sessionStorage.getItem("ss_mb_id");
        let type = false;
        if (login_mb_id) {
            type = true;
        } else {
            type = false;
        }

        if (type) {
            console.log(props)
        }

        this.state = {
            loginStatus: type,
            onLogin: this.onLogin
        }
    }

    render() {
        return <div></div>
    }

}

export default About;