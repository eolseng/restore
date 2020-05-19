import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
import Home from "./home";

function notFound() {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>ERROR: the page you requested in not available.</p>
        </div>
    );
}

function App() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <div id="main-container">
                    <Header/>
                    <Switch>
                        <Route path={"/"}>
                            {Home}
                        </Route>
                        {/*
                        <Route exact path="/product"
                               render={(props) => (<ProductPage{...props}/>)}/> */}
                        <Route component={notFound} />
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
