import React, {useContext} from "react";
import {RestoreContext} from "./restoreContext";

function OrderConfirmation() {

    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});

    return (
        <div>
            <h1>OrderConfirmation</h1>
            <p>Max Steps: {state.maxSteps}</p>
            <p>Step: {state.step}</p>
            <p>Brand ID: {state.brandId}</p>
            <p>Product ID : {state.productId}</p>
            <p>Product Description : {state.productDescription}</p>
            <p>Delivery Options : {state.deliveryOptions}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
        </div>
    )
}

export default OrderConfirmation;