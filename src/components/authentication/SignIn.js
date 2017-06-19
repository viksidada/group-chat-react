import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import "../../App.css";


class SignIn extends Component {

    credentials() {
        let userId = document.getElementById("email").value;
        let pwd = document.getElementById("pwd").value;
        console.log('userId', userId, 'pwd', pwd);

        if ((userId === "vikas@mail.com") && (pwd === "viksi")) {
            browserHistory.push("/app");
        } else browserHistory.push("/signUp");
    }

    render() {
        return (
            <div className = "signIn-form">
                <label for = "email">Email Address: </label>
                <input type = "email"
                       placeholder = "email"
                       id = "email"/><br/>
                <label for = "pwd">Password: </label>
                <input type = "password"
                       placeholder = "password"
                       id = "pwd"/><br/>
                <button
                    type = "submit"
                    className="btn btn-primary"
                    onClick={() => this.credentials()}>Submit</button>
            </div>

        );
    }
}

export default SignIn;