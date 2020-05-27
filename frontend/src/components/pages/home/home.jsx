import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** CSS Imports */
import '../../../css/pages/home/home.css'

function Home() {
    const [renderedDiv, setRenderedDiv] = useState(
        <div className='row content'>
            <div className='img-container col-sm-6'>
                <img src={require('../../../img/homePage/delivery_address.svg')} alt='How it works' />
            </div>
            <div className='text-wrapper col-sm-6'>
                <h3>Slik fungerer det</h3>
                <ol>
                    <li>Send / lever brukte plagg til oss</li>
                    <li>Få en verdivurdering på plagget</li>
                    <li>Motta Store Credit i din profil</li>
                </ol>
            </div>
        </div>
    )

    const [activeNavMenuIdx, setActiveNavMenuIdx] = useState(0)

    function renderBlueprint() {
        setRenderedDiv(
            <div className='row content'>
                <div className='img-container col-sm-6'>
                    <img src={require('../../../img/homePage/delivery_address.svg')} alt='How it works' />
                </div>
                <div className='text-wrapper col-sm-6'>
                    <h3>Slik fungerer det</h3>
                    <ol>
                        <li>Send / lever brukte plagg til oss</li>
                        <li>Få en verdivurdering på plagget</li>
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
                    <p>Noe</p>
                    <p>Som takk for at du sender inn dine brukte klær til oss får du Store Credit basert på plaggets tilstand. På denne måten får alle parter noe igjen for at du leverer inn dine brukte klær til oss</p>
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
                    <p>Vårt mål er å skape en kultur for kjøp og salg av gjenbruksklær. Det vil vi gjøre ved å oppfordre deg som bruker til å sende inn plagg til oss.</p>
                    <p>Vi sender brukte klær i god stand til butikkenes merker slik at disse kan bli solgt på nytt i deres bruktavdelinger. Samtidig som du bidrar til et bedre miljø vil du kunne få muligheten til å kjøpe noe nytt med gavekortene du får. Slik minsker vi på sikt store mengder av klesforbruket.</p>
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
                <Link to='/profile'>
                    <FontAwesomeIcon className='user-icon' icon={['far', 'user']} />
                </Link>
                <div className='container'>
                    <div className='row'>
                        <div className='above-fold-text-wrapper col-sm-6'>
                            <h1>Restore - Tise, bare bedre</h1>
                            <p>
                                Send inn / lever dine brukte klær og motta Store Credit hos våre samarbeidspartnere. Spar tiden du ellers
                                ville brukt på å undersøke priser, beskrive dine plagg og avtale møtested med kjøper. <br/>
                                Vi gjør jobben for deg!
                            </p>
                            <div className='button-container'>
                                <Link className='button-link' to='/filter'>
                                    <button className='cta-button'>Start nå</button>
                                </Link>
                            </div>
                        </div>
                        <div className='above-fold-img-wrapper col-sm-6'>
                            <img src={require('../../../img/homePage/hero-final.svg')} alt={'Hero'} />
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
                            <Link className='header-link' to='/profile'>
                                <FontAwesomeIcon className='user-icon' icon={['far', 'user']} />
                            </Link>
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
