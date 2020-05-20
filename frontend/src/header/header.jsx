import React, { useState } from 'react';
import {Link, withRouter} from "react-router-dom";

import logo from "../img/logo/restore.png";

function Progress( {progress} ) {
    /* Logikk for å kun displaye på relevante sider */
    return (
        <div className="progress-bar-container">
            <div>{progress.one}</div>
            <div>{progress.two}</div>
            <div>{progress.three}</div>
            <div>{progress.four}</div>
        </div>
    );
}

function Header() {

    const [progressState, setProgressState] =useState([
        {
            one: "1. Finn produkt",
            current: false
        },
        {
            two: "2. Vurder tilstand",
            current: false
        },
        {
            three: "3. Velg leveransemetode",
            current: false
        },
        {
            four: "4. Få bekreftelse",
            current: false
        }
    ]);

    return (
        <div className="header-container">
            <div className="header-left">
                <div id="logo">
                    <Link to="./" >
                        <img id="logo-img" src={ logo } alt="logo"/>
                    </Link>
                </div>
            </div>

            <div className="progress col-6">
                {progressState.map((progress, index) => (
                    <Progress key={index} index={index} progress={progress} />
                ))}
            </div>

            <div className="header-right col-3">
                <div onClick="showMenu()" id="menu-button" className="link" style={{color: 'black'}}>&#9776;</div>{/* Må
                legge inn funksjonalitet på burger ikonet hvis vi skal ha det med videre. Må også legge inn funkjonalitet
                på at den er display: none og at den kommer frem når den skal*/}
                { /* Icon to profile page*/ }
                <Link to="./profile" className="link">
                    <i className="far fa-user-circle"/>
                </Link>
                <Link to="" className="link">Logg inn / Registrer</Link> {/* Må legge inn riktig adresse under to="" når
                 siden er åppe logginn */}
            </div>
        </div>
    )
}

export default Header;