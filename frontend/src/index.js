import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Footer from "./components/layout/footer";
import Home from "./components/pages/home/home";
import HomeMobile from "./components/pages/homeMobile/homeMobile";
import Sidebar from "./components/layout/sidebar";
//https://github.com/haldarmahesh/use-mobile-detect-hook
import useMobileDetect from "use-mobile-detect-hook";

import {Profile} from "./components/pages/profile/profile";
import {Services} from "./components/pages/homeMobile/services";
import {Vision} from "./components/pages/homeMobile/vision";
import {Blueprint} from "./components/pages/homeMobile/blueprint";
import {RestoreContextProvider} from "./components/pages/restore/restoreContext";
import {Login} from "./components/pages/login/login";
import {Register} from "./components/pages/login/register";
import Restore from "./components/pages/restore/restore";
/** CSS Imports */
import './css/style.css'
/** Font Awesome Icons */
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faArrowLeft,
    faArrowRight,
    faBars,
    faChevronDown,
    faEdit,
    faLaptop,
    faSave,
    faSearch,
    faSignInAlt,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import ThankYou from "./components/pages/restore/thankYou";


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
    faInstagramSquare
)

function notFound() {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>ERROR: the page you requested in not available.</p>
        </div>
    )
}

/**
 * Root component of application
 * @returns {*}
 * @constructor
 */
function App() {
    const path = window.location.pathname;
    const outerContainerId = "outer-container";
    const pageWrapId = "page-wrap";
    const detectMobile = useMobileDetect();

    if (detectMobile.isMobile()) {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <div id={outerContainerId} style={{height: '100%'}}>
                        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
                        <main id={pageWrapId}>
                            <div id='main-container'>
                                {path !== '/'}
                                <Switch>
                                    {/* Husk å legge inn routen i no.repairable.backend.controller.ReactForwardController */}
                                    <Route component={HomeMobile} exact path={'/'}/>
                                    <Route exact path={'/services'} render={(props) => <Services {...props}/>}/>
                                    <Route exact path={'/vision'} render={(props) => <Vision {...props}/>}/>
                                    <Route exact path={'/blueprint'} render={(props) => <Blueprint {...props}/>}/>
                                    <Route exact path="/profile" render={(props) => <Profile {...props}/>}/>
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
                        </main>
                    </div>
                </BrowserRouter>
            </React.StrictMode>
        );

    } else {

        return (
            <React.StrictMode>
                <BrowserRouter>
                    <div id='main-container'>
                        <Switch>
                            {/* Husk å legge inn routen i no.repairable.backend.controller.ReactForwardController */}
                            <Route component={Home} exact path={'/'}/>
                            <Route exact path="/profile" render={(props) => <Profile {...props}/>}/>
                            <Route exact path="/login" render={(props) => <Login {...props}/>}/>
                            <Route exact path="/register" render={(props) => <Register {...props}/>}/>
                            <Route exact path={'/thankyou'} render={(props) => <ThankYou {...props}/>}/>
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
}

ReactDOM.render(<App/>, document.getElementById('root'));