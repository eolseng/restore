import React, { useState } from 'react';
import {Link} from "react-router-dom";


function Header() {

        return (
            <div className="header-container">
                <div className="header-left">
                    <div id="logo">
                        <Link to="./" >
                            <img id="logo-img" src={ require('../img/logo/restore.png') } alt="logo"/>
                        </Link>
                    </div>
                </div>
                <div className="header-right col-3">
                    <div onClick="showMenu()" id="menu-button" className="link" style={{color: 'black'}}>&#9776;</div>{/* Må
                     legge inn funksjonalitet på burger ikonet hvis vi skal ha det med videre. Må også legge inn funkjonalitet
                     på at den er display: none og at den kommer frem når den skal*/}
                    <Link to="./" className="link">
                        <i className="far fa-user-circle"/>
                    </Link>
                    <Link to="./hello" className="link">Logg inn / Registrer</Link> {/* Må legge inn riktig adresse under to="" når
                            siden er åppe logginn */}
                </div>
            </div>
        )
}

export default Header;