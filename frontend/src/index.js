import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App';
import Header from './header/header';
import Footer from './footer/footer';
import WelcomeText from "./main-content-pages/welcomeText";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div id="main-container">
                <Header/>
                <Switch>
                    <Route path={"/hello"}>
                        <Hello/>
                    </Route>
                    <Route path={"/"}>
                        <App/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

function Hello() {
    return (
        <div>
            <h2>HELLO!</h2>
        </div>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
