import React, {useContext, useEffect} from "react";

import {RestoreContext} from "./RestoreContext";
import BrandSelector from "./BrandSelector";
import ProductCondition from "./ProductCondition";
import DeliverySelector from "./DeliverySelector";
import OrderConfirmation from "./OrderConfirmation";
import RestoreProgress from "./RestoreProgress";

function Restore() {

    const {state, dispatch} = useContext(RestoreContext);

    const maxSteps = 4;
    useEffect(() => {
        dispatch({type: "setMaxSteps", payload: maxSteps})
    }, [dispatch, maxSteps]);

    let component;
    switch (state.step) {
        case 0:
            component = <BrandSelector/>
            break;
        case 1:
            component = <ProductCondition/>
            break;
        case 2:
            component = <ProductCondition/>
            break;
        case 3:
            component = <DeliverySelector/>
            break;
        case 4:
            component = <OrderConfirmation/>
            break;
        default:
            new Error("RestoreContext: Step not defined. This should not happen...")
    }

    return (
        <React.Fragment>
            <RestoreProgress/>
            {component}
        </React.Fragment>
    );
}

export default Restore;