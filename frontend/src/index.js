import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
import Home from "./home/home";
import {ProductPage} from "./ProductPage";
import Profile from "./profile/profile";
import Filter from "./filter/filter";
import Condition from "./condition/condition";
import Delivery from "./delivery/delivery";
import Confirmation from "./confirmation/confirmation";

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
                        <Route exact path={"/profile"}>
                            {Profile}
                        </Route>
                        <Route exact path={"/filter"}>
                            {Filter}
                        </Route>
                        <Route exact path={"/condition"}>
                            {Condition}
                        </Route>
                        <Route exact path={"/delivery"}>
                            {Delivery}
                        </Route>
                        <Route exact path={"/confirmation"}>
                            {Confirmation}
                        </Route>
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
