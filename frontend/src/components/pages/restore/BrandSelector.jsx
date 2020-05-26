import React, {useContext} from "react";
import {RestoreContext} from "./RestoreContext";

function BrandSelector() {

    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});
    const setBrandId = brandId => () => dispatch({type: "setBrandId", payload: brandId})

    return (
        <div>
            <h1>BrandSelector</h1>
            <p>Max Steps: {state.maxSteps}</p>
            <p>Step: {state.step}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setBrandId(1)}>Set Brand ID!</button>
        </div>
    )
}

export default BrandSelector;