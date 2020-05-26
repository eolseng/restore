import React, {useContext} from "react";
import {RestoreContext} from "./RestoreContext";

function ProductDescription() {

    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});
    const setProductDescription = () => dispatch({type: "setProductDescription", payload: "Hurra!"})

    return (
        <div>
            <h1>ProductCondition</h1>
            <p>Max Steps: {state.maxSteps}</p>
            <p>Step: {state.step}</p>
            <p>Brand ID: {state.brandId}</p>
            <p>Product ID : {state.productId}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setProductDescription}>Set condition</button>
        </div>
    )
}

export default ProductDescription