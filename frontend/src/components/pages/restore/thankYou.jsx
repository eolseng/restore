import React from 'react'
import { Link } from 'react-router-dom'

import '../../../css/pages/restore/thankYou/thankYou.css'

function ThankYou() {
    return (
        <div className={'container-fluid'}>
            <div className={'container thankyou-container'}>
                <div className='thankyou-content'>
                    <div className='image-content'>
                        <img className="thankyou-image" src={require('../../../img/thankYou/super-thank-you.svg')} alt='Tusen takk' />
                    </div>
                    <div className='text-content'>
                        <h1>Tusen takk!</h1>
                        <p>Din ordre er nå registrert og du vil innen kort tid motta informasjon om veien videre.</p>
                        <p>Dersom du skulle ha noen spørsmål tilknyttet din ordre, send oss gjerne en e-post på hei@repairable.no.</p>
                        <p>Tusen takk for at du har benyttet deg av Restore by Repairable!</p>
                        <div className='continue-button-container'>
                    <Link to={'/'}>
                        <button className='continue-button cta-button'>Gå tilbake til hovedsiden</button>
                    </Link>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ThankYou
