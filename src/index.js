import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SignIn from "./components/authentication/SignIn";
import {Router, Route, browserHistory} from 'react-router';
import SignUp from "./components/authentication/SignUp";


ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/signin" component = {SignIn}/>
        <Route path = "signup" component = {SignUp} />
        <Route path = "/app" component = {App} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
