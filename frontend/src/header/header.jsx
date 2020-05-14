import React, { useState } from 'react';


export class Header extends React.Component {

    render() {
        return (
            <div id="header">
                <div className="header-left">
                    <div id="logo">
                        <a href="./">
                            <img id="logo-img" src={ require('../img/logo/restore.png') }/>
                        </a>
                    </div>
                    <div className="header-right">
                        <div onClick="showMenu()" id="menu-button" style={{color: 'black'}}>&#9776;</div>
                        <nav id="nav">
                            <ul>
                                <a href="./" className="material-icons-outlined user">account_circle</a>
                            </ul>
                            <ul>
                                <a href="">Logg inn / Registrer</a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

//export default Header;