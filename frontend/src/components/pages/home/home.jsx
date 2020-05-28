import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** CSS Imports */
import '../../../css/pages/home/home.css'

function Home() {
    const [activeNavMenuIdx, setActiveNavMenuIdx] = useState(0)
    const [userIsLoggedIn] = useState(true)
    const [renderedDiv, setRenderedDiv] = useState(
        <div className='row content'>
            <div id='bluprint-img' className='img-container col-sm-6'>
                <img src={require('../../../img/homePage/delivery_address.svg')} alt='How it works' />
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
                    <img src={require('../../../img/homePage/delivery_address.svg')} alt='How it works' />
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
                        Repairble og sendt til samarbeidspartnernes butikker slik at disse kan bli solgt på nytt i deres bruktavdeling.
                    </p>
                    <p>
                        Som takk for at du sender inn dine brukte klær til oss får du poeng i din Store Credit basert på plaggets
                        tilstand og verdi. På denne måten får alle parter noe igjen for at du leverer inn dine brukte klær til
                        oss.
                    </p>
                    <p>Din profil vil være anonym og poengene du samler kan brukes til kjøp av nye plagg hos våre partnere</p>

                </div>
                <div className='img-container col-sm-6'>
                    <img src={require('../../../img/homePage/order_delivered.svg')} alt='Our services' />
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
                        oppfordre deg som bruker til å benytte deg av vår panteløsning, slik at vi på sikt minsker de store mengdene av Norges klesforbruk.
                    </p>
                </div>
                <div className='img-container col-sm-6'>
                    <img src={require('../../../img/homePage/wishes_icyp.svg')} alt='Our services' />
                </div>
            </div>
        )
        setActiveNavMenuIdx(2)
    }

    return (
        <div className='home-wrapper'>
            <div className='above-fold container-fluid'>
                {userIsLoggedIn ? (
                    <Link className='above-fold-link' to='/profile'>
                        <FontAwesomeIcon className='user-icon' icon={['far', 'user']} />
                        <span>Hei UserName</span>
                    </Link>
                ) : (
                    <Link className='above-fold-link' to='/login'>
                        <FontAwesomeIcon className='user-icon' icon={['fas', 'sign-in-alt']} />
                        <span>Logg inn / Registrer deg</span>
                    </Link>
                )}
                <div className='container'>
                    <div className='row'>
                        <div className='above-fold-text-wrapper col-sm-6'>
                            <h1>Restore - pant dine klær i dag</h1>
                            <p>
                                Send inn eller lever dine brukte klær og motta poeng i din profil. Bruk poengene på nye eller brukte klær hos våre samarbeidspartnere.
                                Spar tiden du ellers ville brukt på å undersøke priser og selge dine brukte klær til andre. <br />
                            </p>
                            <b>Vi gjør jobben for deg- du sender inn brukte klær og mottar poeng til å kjøpe nye klær!</b>
                            <div className='button-container'>
                                <Link className='button-link' to='/filter'>
                                    <button className='cta-button'>Start nå</button>
                                </Link>
                            </div>
                        </div>
                        <div className='above-fold-img-wrapper col-sm-6'>
                            <img src={require('../../../img/homePage/final-hero.svg')} alt={'Hero'} />
                        </div>
                    </div>
                </div>
                <a href='#anchor' className='down-icon-container'>
                    <FontAwesomeIcon className='down-icon' icon={['fa', 'chevron-down']} />
                </a>
            </div>
            <div className='under-fold'>
                <div id='anchor' className='container-fluid header-wrapper'>
                    <div className='container header-container'>
                        <div className='header-left'>
                            <span
                                className={activeNavMenuIdx === 0 ? 'active-nav-button' : null}
                                onClick={renderBlueprint}
                            >
                                Slik fungerer det
                            </span>
                            <span
                                className={activeNavMenuIdx === 1 ? 'active-nav-button' : null}
                                onClick={renderServices}
                            >
                                Våre tjenester
                            </span>
                            <span
                                className={activeNavMenuIdx === 2 ? 'active-nav-button' : null}
                                onClick={renderVision}
                            >
                                Vår visjon
                            </span>
                        </div>
                        <div className='header-right'>
                            <Link className='header-link' to='/filter'>
                                <button className='cta-button'>Start nå</button>
                            </Link>
                            {userIsLoggedIn ? (
                                <Link className='header-link header-link-user' to='/profile'>
                                    <FontAwesomeIcon className='user-icon' icon={['far', 'user']} />
                                    <span>UserName</span>
                                </Link>
                            ) : (
                                <Link className='header-link header-link-user' to='/login'>
                                    <FontAwesomeIcon className='user-icon' icon={['fas', 'sign-in-alt']} />
                                    <span>Logg inn</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='container-fluid content-wrapper'>
                    <div className='container content-container'>{renderedDiv}</div>
                </div>
            </div>
        </div>
    )
}

export default Home
