import React, { useContext } from 'react'
import { RestoreContext } from './restoreContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className={'restore-progress'}>
            <div className='container'>
                <div className={'restore-progress-items'}>
                    {/*<div className={"restore-progress-navigation-button restore-progress-navigation-button-prev"}*/}
                    {/*     onClick={prevStep}>*/}
                    {/*         <FontAwesomeIcon className="arrow-icon" icon={["fas", "arrow-left"]}/>*/}
                    {/*    Tilbake*/}
                    {/*</div>*/}
                    <div className={'restore-progress-item ' + isPastStep(1) + isActiveStep(1)} onClick={goToStep(1)}>
                        <div className='restore-progress-number'>
                            <span>1</span>
                        </div>
                        <span className='restore-progress-text'>Finn produkt</span>
                    </div>
                    <div className={'restore-progress-item ' + isPastStep(2) + isActiveStep(2)} onClick={goToStep(2)}>
                        <div className='restore-progress-number'>
                            <span>2</span>
                        </div>
                        <span className='restore-progress-text'>Beskriv produkt</span>
                    </div>
                    <div className={'restore-progress-item ' + isPastStep(3) + isActiveStep(3)} onClick={goToStep(3)}>
                        <div className='restore-progress-number'>
                            <span>3</span>
                        </div>
                        <span className='restore-progress-text'>Velg leveringsmetode</span>
                    </div>
                    <div className={'restore-progress-item ' + isPastStep(4) + isActiveStep(4)} onClick={goToStep(4)}>
                        <div className='restore-progress-number'>
                            <span>4</span>
                        </div>
                        <span className='restore-progress-text'>Bekreftelse</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestoreProgress
