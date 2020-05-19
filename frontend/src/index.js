import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
import Home from "./home";
import {ProductPage} from "./ProductPage";

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
                        {/* Husk å legge inn routen i no.repairable.backend.controller.ReactForwardController */}
                        <Route exact path={"/"}>
                            {Home}
                        </Route>
                        {
                        <Route exact path="/product"
                               render={(props) => (<ProductPage{...props}/>)}/> }
                        <Route path="/404" component={notFound} />
                        <Redirect to="/404" />
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
