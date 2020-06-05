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
                        <p>Tusen takk for at du har benyttet deg av Restore by Repairable.</p>
                        <p>Du vil innen kort tid motta en epost med mer informasjon.</p>
                        <p>Skulle du ha noen spørsmål tilknyttet din ordre? Send oss en epost på hei@repairable.no!</p>
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
