import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
import Home from "./home";

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
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
