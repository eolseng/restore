import React from 'react'
import {Link} from 'react-router-dom'

/** CSS Imports */
import '../../../css/pages/home/home.css'


function HomeMobile() {


    return (
        <div className='home-wrapper'>
            <div className='above-fold container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='above-fold-text-wrapper col-sm-6'>
                            <h1>Restore - pant dine klær i dag</h1>
                            <p>
                                Send inn eller lever dine brukte klær og motta poeng i din profil. Bruk poengene på nye
                                eller brukte klær hos våre samarbeidspartnere.
                                Spar tiden du ellers ville brukt på å undersøke priser og selge dine brukte klær til
                                andre. <br/>
                            </p>
                            <b>Vi gjør jobben for deg- du sender inn brukte klær og mottar poeng til å kjøpe nye
                                klær!</b>
                            <div className='button-container'>
                                <Link className='button-link' to='/restore'>
                                    <button className='cta-button'>Start nå</button>
                                </Link>
                            </div>
                        </div>
                        <div className='above-fold-img-wrapper col-sm-6'>
                            <img src={require('../../../img/homePage/final-hero.svg')} alt={'Hero'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMobile
