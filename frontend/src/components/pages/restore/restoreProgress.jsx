import React, { useContext } from 'react'
import { RestoreContext } from './restoreContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Displays progress bar of current order.
 * @returns {*}
 * @constructor
 */
function RestoreProgress() {
    const { state, dispatch } = useContext(RestoreContext)

    const isPastStep = index => {
        // Marks past steps for styling
        return state.step > index ? 'restore-progress-item-past ' : ''
    }

    const isActiveStep = index => {
        return state.step === index ? 'restore-progress-item-active ' : ''
    }

    const goToStep = index => () => {
        // Only activates if the index is less than the current step.
        if (index < state.step) dispatch({ type: 'setStep', payload: index })
    }
    // const prevStep = () => dispatch({type: "decrementStep"});

    return (
        <div className={"restore-progress"}>
            <div className={"restore-progress-items"}>
                {/*<div className={"restore-progress-navigation-button restore-progress-navigation-button-prev"}*/}
                {/*     onClick={prevStep}>*/}
                {/*         <FontAwesomeIcon className="arrow-icon" icon={["fas", "arrow-left"]}/>*/}
                {/*    Tilbake*/}
                {/*</div>*/}
                <div className={"restore-progress-item " + isPastStep(1) + isActiveStep(1)}
                     onClick={goToStep(1)} data-testid='1.step'>
                    <div className='restore-progress-number'>
                        <span data-testid='step-1'>1</span>
                    </div>
                    <span className='restore-progress-text' data-testid='find-product'>Finn produkt</span>
                </div>
                <div className={'restore-progress-item ' + isPastStep(2) + isActiveStep(2)}
                     onClick={goToStep(2)} data-testid='2.step'>
                    <div className='restore-progress-number'>
                        <span data-testid='step-2'>2</span>
                    </div>
                    <span className='restore-progress-text' data-testid='describe-product'>Beskriv produkt</span>
                </div>
                <div className={'restore-progress-item ' + isPastStep(3) + isActiveStep(3)}
                     onClick={goToStep(3)} data-testid='3.step'>
                    <div className='restore-progress-number'>
                        <span data-testid='step-3'>3</span>
                    </div>
                    <span className='restore-progress-text' data-testid='delivery-selection'>Velg leveringsmetode</span>
                </div>
                <div className={'restore-progress-item ' + isPastStep(4) + isActiveStep(4)}
                     onClick={goToStep(4)} data-testid='4.step'>
                    <div className='restore-progress-number'>
                        <span data-testid='step-4'>4</span>
                    </div>
                    <span className='restore-progress-text' data-testid='confirmation'>Bekreftelse</span>
                </div>
            </div>
        </div>
    )
}

export default RestoreProgress
