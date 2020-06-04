import React, {useContext} from "react";
import {RestoreContext} from "./restoreContext";

function BrandSelector() {

    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});
    const setBrandId = brandId => () => dispatch({type: "setBrandId", payload: brandId});

    return (
        <div>
            <h1>BrandSelector</h1>
            <p data-testid='Max Steps'>Max Steps: {state.maxSteps}</p>
            <p data-testid='step'>Step: {state.step}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setBrandId(1)}>Set Brand ID!</button>
        </div>
    )
}

export default BrandSelector;