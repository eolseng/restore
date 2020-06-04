import React, {useContext, useEffect} from "react";

import {RestoreContext} from "./restoreContext";
import {ProductFinder} from "./productFinder/productFinder";
import BrandSelector from "./brandSelector";
import ProductDescription from "./productDescription/productDescription";
import OrderConfirmation from "./orderConfirmation";
import RestoreProgress from "./restoreProgress";

/** CSS Imports */
import "../../../css/pages/restore/restore.css";
import DeliveryOptions from "./deliveryOptions/deliveryOptions";

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
            component = <ProductFinder/>
            break;
        case 2:
            component = <ProductDescription/>
            break;
        case 3:
            component = <DeliveryOptions/>
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
