import React, {createContext, useContext, useEffect} from "react";

import {RestoreContext, RestoreContextProvider} from "./RestoreContext";

function Restore() {

    return (
        <RestoreContextProvider>
            <ProductCondition/>
        </RestoreContextProvider>
    )
}

function ProductCondition() {

    const {state, dispatch} = useContext(RestoreContext);

    const nextStep = () => dispatch({type: "incrementStep"});
    const prevStep = () => dispatch({type: "decrementStep"});
    const setBrandId = brandId => () => dispatch({type: "setBrandId", payload: brandId})

    return (
        <div>
            <p>Step: {state.step}</p>
            <p>Brand ID: {state.brandId}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setBrandId(1)}>Set Brand ID!</button>

        </div>
    )
}

export default Restore;