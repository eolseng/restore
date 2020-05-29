import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./components/pages/home/home";

import {Profile} from "./components/pages/profile/profile";
import Restore from "./components/pages/restore/restore";
import {RestoreContextProvider} from "./components/pages/restore/restoreContext";

/** CSS Imports */
import './css/style.css'

/** Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faLaptop, faSave, faEdit, faChevronDown, faSignInAlt, faSearch, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

/** Font Awesome Icon Library */
library.add(
    faBars,
    faTimes,
    faLaptop,
    faSave,
    faEdit,
    faUser,
    faChevronDown,
    faSignInAlt,
    faSearch,
    faArrowLeft,
    faArrowRight,
    faFacebookSquare,
    faTwitterSquare,
    faLinkedin,
    faInstagramSquare,
)

function notFound() {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>ERROR: the page you requested in not available.</p>
        </div>
    )
}

function App() {
    const path = window.location.pathname

    return (
        <React.StrictMode>
            <BrowserRouter>
                <div id='main-container'>
                    {path !== '/' || path !== '/restore' && <Header />}
                    <Switch>
                        {/* Husk å legge inn routen i no.repairable.backend.controller.ReactForwardController */}
                        <Route component={Home} exact path={'/'} />
                        <Route exact path="/profile" render={(props) => <Profile {...props}/>} />
                        <Route exact path={"/restore"}>
                            <RestoreContextProvider>
                                <Restore/>
                            </RestoreContextProvider>
                        </Route>
                        <Route path='/404' component={notFound}/>
                        <Redirect to='/404'/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))