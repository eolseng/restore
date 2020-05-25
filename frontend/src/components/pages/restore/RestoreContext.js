// Reference: https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

import React, {createContext, useReducer} from "react";

const RestoreContext = createContext();

const initialState = {
    step: 0,
    brandId: null,
    productFilter: null,
    productId: null,
    productCondition: null,
    deliveryOptions: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "incrementStep":
            return {...state, step: state.step + 1};
        case "decrementStep":
            return {...state, step: state.step - 1};
        case "setBrandId":
            return {...state, brandId: action.payload};
        case "setProductFilter":
            return {...state, productFilter: action.payload};
        case "setProductId":
            return {...state, productId: action.payload};
        case "setProductCondition":
            return {...state, productCondition: action.payload};
        case "setDeliveryOptions":
            return {...state, deliveryOptions: action.payload};
        default:
            return;
    }
};

function RestoreContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return (
        <RestoreContext.Provider value={value}>
            {props.children}
        </RestoreContext.Provider>
    );
}

const RestoreContextConsumer = RestoreContext.Consumer;

export {RestoreContext, RestoreContextProvider, RestoreContextConsumer};

