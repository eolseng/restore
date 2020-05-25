import React, {useContext} from "react";
import {RestoreContext} from "./RestoreContext";

function RestoreProgress() {

    const {state, dispatch} = useContext(RestoreContext);

    const isPastStep = index => {
        // Marks past steps for styling
        return state.step > index ? "restore-progress-item-past " : "";
    }

    const isActiveStep = index => {
        return state.step === index ? "restore-progress-item-active " : "";
    }

    const goToStep = index => () => {
        // Only activates if the index is less than the current step.
        if (index < state.step) dispatch({type: "setStep", payload: index})
    }
    const prevStep = () => dispatch({type: "decrementStep"});
    const nextStep = () => dispatch({type: "incrementStep"});

    return (
        <div className={"restore-progress"}>
            <div className={"restore-progress-items"}>
                <div className={"restore-progress-item " + isPastStep(1) + isActiveStep(1)}
                     onClick={goToStep(1)}>
                    1. ProductFinder
                </div>
                <div className={"restore-progress-item " + isPastStep(2) + isActiveStep(2)}
                     onClick={goToStep(2)}>
                    2. ProductDescription
                </div>
                <div className={"restore-progress-item " + isPastStep(3) + isActiveStep(3)}
                     onClick={goToStep(3)}>
                    3. DeliverySelector
                </div>
                <div className={"restore-progress-item " + isPastStep(4) + isActiveStep(4)}
                     onClick={goToStep(4)}>
                    4. OrderConfirmation
                </div>
            </div>
            <div className={"restore-progress-navigation"}>
                <div className={"restore-progress-navigation-button restore-progress-navigation-button-next"}
                     onClick={prevStep}>
                    Previous Step
                </div>
                <div className={"restore-progress-navigation-button restore-progress-navigation-button-next"}
                     onClick={nextStep}>
                    Next Step
                </div>
            </div>
        </div>
    );
}

export default RestoreProgress;