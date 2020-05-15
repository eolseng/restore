import React, { useState } from 'react';
import {Link} from "react-router-dom";


export class Header extends React.Component {

    render() {
        return (
            <div id="header">
                <div className="header-left">
                    <div id="logo">
                        <a href="./">
                            <img id="logo-img" src={ require('../img/logo/restore.png') } alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <div onClick="showMenu()" id="menu-button" style={{color: 'black'}}>&#9776;</div>
                    <nav id="nav">
                        <ul>
                            <Link to="./" className="material-icons-outlined user">
                                <i className="far fa-user-circle"></i>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="./hello">Logg inn / Registrer</Link>  {/* Må legge inn riktig adresse under to="" når
                            siden er åppe logginn */}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

//export default Header;