import React from "react";
import '../../../css/pages/home/home.css'

/**
 * Renders vision page (for mobile user)
 * @returns {*}
 * @constructor
 */
export function Vision() {

    return (
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
                <img src={require('../../../img/homePage/wishes_icyp.svg')} alt='Our services'/>
            </div>
        </div>
    )
}

