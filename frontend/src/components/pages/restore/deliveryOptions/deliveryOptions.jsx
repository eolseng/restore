import React, {useContext, useState} from "react";
import {RestoreContext} from "../restoreContext";

import "../../../../css/pages/restore/deliveryOptions/deliveryOptions.css";

import heltHjem from "../../../../img/heltHjem/Helt-hjem.png";
import posten from "../../../../img/logo/posten.png";

function DeliveryOptions() {

    const {dispatch} = useContext(RestoreContext);
    const [selectedOption, setSelectedOption] = useState('HeltHjem')

    const confirmDeliveryOption = () => {
        dispatch({type: 'setDeliveryOption', payload: selectedOption})
        dispatch({type: 'incrementStep'})
    }

    let deliveryInfoContent;
    if (selectedOption === "HeltHjem") {
        deliveryInfoContent =
            <div>
                1. Pakk den i plast.
                2. Riv den i filler
                3. Sett den utenfor døra
                4. Den blir hentet
            </div>
    }
    if (selectedOption === "Posten") {
        deliveryInfoContent =
            <div>
                1. Pakk den i papir.
                2. Gi den til Læffy
                3. Be om hjelo
                4. Takk
            </div>
    }

    return (
        <div className='container-fluid'>
            <div className='container delivery-options-container'>
                <div className={'col-sm-3 delivery-options-select'}>
                    <div className={'delivery-options-select-title'}>Velg leveringsmetode:</div>
                    <div
                        className={'delivery-options-select' + (selectedOption === 'HeltHjem' ? " selected-delivery-option" : "")}
                        onClick={() => setSelectedOption("HeltHjem")}>
                        <img className={'delivery-options-image'} src={heltHjem} alt={'Lever med HeltHjem'}/>
                    </div>
                    <div
                        className={'delivery-options-select' + (selectedOption === 'Posten' ? " selected-delivery-option" : "")}
                        onClick={() => setSelectedOption("Posten")}>
                        <img className={'delivery-options-image'} src={posten} alt={'Lever med Posten'}/>
                    </div>
                </div>
                <div className={'col-sm-9 delivery-options-info'}>
                    <div className={''}>Hvordan levere med {selectedOption}</div>
                    <div className={'delivery-options-info-content'}>{deliveryInfoContent}</div>
                    <div className={'delivery-options-button-container'}>
                        <button className={'delivery-options-button cta-button'}
                        onClick={confirmDeliveryOption}>Lever med {selectedOption}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryOptions;
