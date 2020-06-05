import React from "react";
import '../../../css/pages/home/home.css'

/**
 * Renders services page (for mobile user)
 * @returns {*}
 * @constructor
 */
export function Services() {

    return (
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
                <img src={require('../../../img/homePage/order_delivered.svg')} alt='Our services'/>
            </div>
        </div>
    )

}