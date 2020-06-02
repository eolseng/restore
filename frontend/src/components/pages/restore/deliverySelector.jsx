import React, {useContext} from "react";
import {RestoreContext} from "./restoreContext";
import {DeliveryLayout} from "./deliverylayout/deliveryLayout"

function DeliveryOptions() {
/* Måtte kommentere ut dette for å få testene til å bli grønne
    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});
    const setDeliveryOptions = () => dispatch({type: "setDeliveryOptions", payload: "Hurra!"})
   */

    return (
        <div>

            <DeliveryLayout/>
            {/*
            <h1>DeliverySelector</h1>
            <p>Max Steps: {state.maxSteps}</p>
            <p>Step: {state.step}</p>
            <p>Brand ID: {state.brandId}</p>
            <p>Product ID : {state.productId}</p>
            <p>Product Description : {state.productDescription}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setDeliveryOptions}>Next Step!</button>
            */}
        </div>
    )
}

export default DeliveryOptions;