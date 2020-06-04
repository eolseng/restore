import React, { useContext, useState } from 'react'
import { RestoreContext } from '../restoreContext'

import '../../../../css/pages/restore/deliveryOptions/deliveryOptions.css'

import heltHjem from '../../../../img/heltHjem/Helt-hjem.png'
import posten from '../../../../img/logo/posten.png'

function DeliveryOptions() {
    const { dispatch } = useContext(RestoreContext)
    const [selectedOption, setSelectedOption] = useState('Posten')

    const confirmDeliveryOption = () => {
        dispatch({ type: 'setDeliveryOption', payload: selectedOption })
        dispatch({ type: 'incrementStep' })
    }

    let deliveryInfoContent
    if (selectedOption === 'HeltHjem') {
        deliveryInfoContent = (
            <div className='delivery-options-info-content'>
                <div className='helthjem-step'>
                    <div class='helthjem-step-image helthjem-step-image-1'></div>
                    <h5 className='step-title'>Bestill henting</h5>
                    <p className='step-text'>
                        Når du bestiller henting får du en kode som du skriver tydelig på pakken.
                    </p>
                </div>
                <div className='helthjem-step'>
                    <div class='helthjem-step-image helthjem-step-image-2'></div>
                    <h5 className='step-title'>Legg pakken ut</h5>
                    <p className='step-text'>
                        Legg pakken ut innen kl. 23. Du får en e-post med beskjed om hvor pakken skal legges.
                    </p>
                </div>
                <div className='helthjem-step'>
                    <div class='helthjem-step-image helthjem-step-image-3'></div>
                    <h5 className='step-title'>Pakken hentes</h5>
                    <p className='step-text'>
                        HeltHjem henter pakken hjemme hos deg i løpet av natten, og sender den til oss.
                    </p>
                </div>
            </div>
        )
    }
    if (selectedOption === 'Posten') {
        deliveryInfoContent = (
            <div className='delivery-options-info-content'>
                <div className='posten-step'>
                    <div class='posten-step-image posten-step-image-1'></div>
                    <h5 className='step-title'>Kjøp adresselapp</h5>
                    <p className='step-text'>Finn pris og sendemåte for det du skal sende. Pakker kan veie opp til 35 kg.</p>
                </div>
                <div className='posten-step'>
                    <div class='posten-step-image posten-step-image-2'></div>
                    <h5 className='step-title'>Adresseinformasjon</h5>
                    <p className='step-text'>Fyll inn nødvendig adresseinformasjon for både avsender og mottaker.</p>
                </div>
                <div className='posten-step'>
                    <div class='posten-step-image posten-step-image-3'></div>
                    <h5 className='step-title'>Lever til Posten</h5>
                    <p className='step-text'>Når informasjonen er fylt ut kan du levere pakken på nærmeste postkontor.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='container-fluid'>
            <div className='container delivery-options-container'>
                <div className={'col-sm-3 delivery-options-select'}>
                    <h4 className={'delivery-options-title'}>Velg leveringsmetode:</h4>
                    <div
                        className={
                            'delivery-options-select-item' +
                            (selectedOption === 'HeltHjem' ? ' selected-delivery-option' : '')
                        }
                        onClick={() => setSelectedOption('HeltHjem')}
                    >
                        <img className={'delivery-options-image'} src={heltHjem} alt={'Lever med HeltHjem'} />
                    </div>
                    <div
                        className={
                            'delivery-options-select-item' +
                            (selectedOption === 'Posten' ? ' selected-delivery-option' : '')
                        }
                        onClick={() => setSelectedOption('Posten')}
                    >
                        <img className={'delivery-options-image'} src={posten} alt={'Lever med Posten'} />
                    </div>
                </div>
                <div className={'col-sm-9 delivery-options-info'}>
                    <h3 className={'delivery-options-info-title'}>Hvordan levere med {selectedOption}</h3>
                    <div className={'delivery-options-info-content-wrapper'}>{deliveryInfoContent}</div>
                    <div className={'delivery-options-button-container'}>
                        <button className={'delivery-options-button cta-button'} onClick={confirmDeliveryOption}>
                            Lever med {selectedOption}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryOptions
