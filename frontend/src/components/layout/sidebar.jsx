import React, {useState} from "react";
import {scaleRotate as Menu} from 'react-burger-menu'
import "../../css/layout/sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../img/logo/restore.png";




function Sidebar(props) {
    const [activeNavMenuIdx, setActiveNavMenuIdx] = useState(0)
    const [userIsLoggedIn] = useState(true)
    const [renderedDiv, setRenderedDiv] = useState(
        <div className='row content'>
            <div id='bluprint-img' className='img-container col-sm-6'>
                <img src={require('../../img/homePage/delivery_address.svg')} alt='How it works'/>
            </div>
            <div id='bluprint-text' className='text-wrapper col-sm-6'>
                <h3>Slik fungerer det</h3>
                <ol>
                    <li>Opprett anonym profil</li>
                    <li>Få verdivurdering på klær på forhånd</li>
                    <li>Send inn/lever klær</li>
                    <li>Motta poeng i Store Credit i din profil</li>
                </ol>
            </div>
        </div>
    )

    function renderBlueprint() {
        setRenderedDiv(
            <div className='row content'>
                <div id='bluprint-img' className='img-container col-sm-6'>
                    <img src={require('../../img/homePage/delivery_address.svg')} alt='How it works'/>
                </div>
                <div id='bluprint-text' className='text-wrapper col-sm-6'>
                    <h3>Slik fungerer det</h3>
                    <ol>
                        <li>Opprett anonym profil</li>
                        <li>Få verdivurdering på klær på forhånd</li>
                        <li>Send inn/lever klær</li>
                        <li>Motta Store Credit i din profil</li>
                    </ol>
                </div>
            </div>
        )
        setActiveNavMenuIdx(0)
    }

    function renderServices() {
        setRenderedDiv(
            <div className='row content'>
                <div className='text-wrapper col-sm-6'>
                    <h3>Våre tjenester</h3>
                    <p>
                        Etter du har sendt oss dine brukte klær vil disse bli repartert/renset hos oss i
                        Repairble og sendt til samarbeidspartnernes butikker slik at disse kan bli solgt på nytt i deres
                        bruktavdeling.
                    </p>
                    <p>
                        Som takk for at du sender inn dine brukte klær til oss får du poeng i din Store Credit basert på
                        plaggets
                        tilstand og verdi. På denne måten får alle parter noe igjen for at du leverer inn dine brukte
                        klær til
                        oss.
                    </p>
                    <p>Din profil vil være anonym og poengene du samler kan brukes til kjøp av nye plagg hos våre
                        partnere</p>

                </div>
                <div className='img-container col-sm-6'>
                    <img src={require('../../img/homePage/order_delivered.svg')} alt='Our services'/>
                </div>
            </div>
        )
        setActiveNavMenuIdx(1)
    }

    function renderVision() {
        setRenderedDiv(
            <div className='row content'>
                <div className='text-wrapper col-sm-6'>
                    <h3>Vår visjon</h3>
                    <p>
                        Vårt mål er å skape en kultur for kjøp og salg av gjenbruksklær. Det vil vi gjøre ved å
                        oppfordre deg som bruker til å benytte deg av vår panteløsning, slik at vi på sikt minsker de
                        store mengdene av Norges klesforbruk.
                    </p>
                </div>
                <div className='img-container col-sm-6'>
                    <img src={require('../../img/homePage/wishes_icyp.svg')} alt='Our services'/>
                </div>
            </div>
        )
        setActiveNavMenuIdx(2)
    }

        return (
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <div id="logo">
                    <img id="logo-img" src={logo} alt="logo"/>
                </div>
                <a id="home" className="menu-item" href="/">Hjem</a>
                <a id="how-to" className="menu-item" onClick={renderBlueprint}>Slik gjør vi det</a>
                <a id="tjenester" className="menu-item" onClick={renderServices}>Våre tjenester </a>
                <a id="visjon" className="menu-item" className={activeNavMenuIdx === 2 ? 'active-nav-button' : null} onClick={renderVision}>Vår visjon</a>
                <a id="profile" className="menu-item" href="/profile">
                    <FontAwesomeIcon className='profile-icon' icon={["far", "user-circle"]}/>
                    Min Side
                </a>

            </Menu>




        );
}

export default Sidebar;