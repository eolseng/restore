import React from "react";
import {scaleRotate as Menu} from 'react-burger-menu'
import "../../css/layout/sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import logo from "../../img/logo/restore.png";




function Sidebar(props) {

        return (
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                {/* <div id="logo">
                    <img id="logo-img" src={logo} alt="logo"/>
                </div> */}
                <a id="home" className="menu-item" href="/">Hjem</a>
                <a id="how-to" className="menu-item" href="/blueprint">Slik gjør vi det</a>
                <a id="services" className="menu-item" href="/services">Våre tjenester </a>
                <a id="vision" className="menu-item" href="/vision">Vår visjon</a>
                <a id="profile" className="menu-item" href="/profile">
                    <FontAwesomeIcon className='profile-icon' icon={["far", "user-circle"]}/>
                    Min Side
                </a>
            </Menu>
        );
}

export default Sidebar;