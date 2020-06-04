import React from "react";
import '../../../css/pages/home/home.css'

export function Blueprint() {

    return (
        <div className='row content'>
            <div id='bluprint-img' className='img-container col-sm-6'>
                <img src={require('../../../img/homePage/delivery_address.svg')} alt='How it works'/>
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
}