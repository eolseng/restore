import React, {useContext, useState} from "react";
import {RestoreContext} from "../restoreContext";

import "../../../../css/pages/restore/deliveryOptions/deliveryOptions.css";

import heltHjem from "../../../../img/heltHjem/Helt-hjem.png";

function DeliveryOptions() {

    const {state, dispatch} = useContext(RestoreContext);
    const [selectedOption, setSelectedOption] = useState()

    return (
        <div className='container-fluid'>
            <div className='container delivery-options-container'>
                <div className={'col-sm-3'}>
                    <div className={'delivery-options-select-title'}>Velg leveringsmetode:</div>
                    <div className={'delivery-options-select' + (selectedOption === 'HeltHjem' ? " selected-delivery-option" : "")}
                         onClick={() => setSelectedOption("HeltHjem")}>
                        <img className={'delivery-options-image'} src={heltHjem} alt={'HeltHjem'}/>
                        <div className={'delivery-options-name'}>HeltHjem</div>
                    </div>
                    <div className={'delivery-options-select' + (selectedOption === 'Posten' ? " selected-delivery-option" : "")}
                         onClick={() => setSelectedOption("Posten")}>
                        <img className={'delivery-options-image'} src={heltHjem} alt={'Posten'}/>
                        <div className={'delivery-options-name'}>Posten</div>
                    </div>
                </div>
                <div className={'col-sm-9'}>
                    JASSÅ
                </div>
            </div>
        </div>
    )
}

export default DeliveryOptions;
