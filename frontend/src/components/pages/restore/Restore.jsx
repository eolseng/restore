import React, {useContext, useEffect} from "react";

import {RestoreContext} from "./RestoreContext";
import BrandSelector from "./BrandSelector";
import ProductCondition from "./ProductCondition";
import DeliverySelector from "./DeliverySelector";
import OrderConfirmation from "./OrderConfirmation";

function Restore() {

    const {state, dispatch} = useContext(RestoreContext);

    const maxSteps = 4;
    useEffect(() => {
        dispatch({type: "setMaxSteps", payload: 4})
    }, [maxSteps]);


    switch (state.step) {
        case 0:
            return <BrandSelector/>
        case 1:
            return <ProductCondition/>
        case 2:
            return <ProductCondition/>
        case 3:
            return <DeliverySelector/>
        case 4:
            return <OrderConfirmation/>
        default:
            new Error("RestoreContext: Step not defined")
    }
}

export default Restore;