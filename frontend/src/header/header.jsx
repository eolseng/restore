import React, { useState } from 'react';
import {Link} from "react-router-dom";


export class Header extends React.Component {



    render() {
        return (
            <div id="header">
                <div className="header-left">
                    <div id="logo">
                        <Link to="./" >
                            <img id="logo-img" src={ require('../img/logo/restore.png') } alt="logo"/>
                        </Link>
                    </div>
                </div>
                <div className="header-right col-3">
                    <div onClick="showMenu()" id="menu-button" className="link" style={{color: 'black'}}>&#9776;</div>
                    <Link to="./" className="link">
                        <i className="far fa-user-circle"/>
                    </Link>
                    <Link to="./hello" className="link">Logg inn / Registrer</Link> {/* Må legge inn riktig adresse under to="" når
                            siden er åppe logginn */}
                </div>
            </div>
        )
    }
}

//export default Header;