import React, {useState} from "react";

import "../../../../css/pages/restore/deliveryLayout/deviveryLayout.css";
import "../../../../css/style.css";

import heltHjem from "../../../../img/heltHjem/Helt-hjem.png";
import norgeskart from "../../../../img/heltHjem/norgeskart.jpeg";


export function DeliveryLayout() {

    const [selected] = useState()

    const altText = (alt) => {
        return alt.name
    }

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='delivery-selection col-3 border-right'>
                    <h5 className="border-bottom">Velg leveringsmetode</h5>
                    <img src={heltHjem} alt="heltHjem" className="image-size"/>
                    <input
                        className='delivery-input '
                        type={'radio'}
                        value={altText}
                        checked={altText === selected}
                    />
                    <hr/>
                    <h3 className="deliver-shop">Lever i butikk</h3>
                    <input
                        className='delivery-input '
                        type={'radio'}
                        value={altText}
                        checked={altText === selected}
                    />
                </div>
                <div className="delivery-render col-9">
                    <h4>Leveringmetode valgt: Lever i butikk</h4>
                    <h5>Finn butikk</h5>
                    <img src={norgeskart} alt="norgeskart" className="map"/>
                    <button className="cta-button">Fullfør</button> {/* Her trengs det logikk for å komme til bekreftelses steget */}
                </div>
            </div>
        </div>
    )
}