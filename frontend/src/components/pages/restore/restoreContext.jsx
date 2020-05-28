// Reference: https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

import React, {createContext, useReducer} from "react";

const initialState = {
    maxSteps: 1,
    step: 1,
    brandId: null,
    productFilter: null,
    productId: null,
    productColor: null,
    productDescription: null,
    deliveryOptions: null
};

const RestoreContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setStep":
            return {...state, step: action.payload};
        case "setMaxSteps":
            return {...state, maxSteps: action.payload};
        case "incrementStep":
            return {...state, step: state.step >= state.maxSteps ? state.maxSteps : state.step + 1};
        case "decrementStep":
            return {...state, step: state.step > 0 ? state.step - 1 : 0};
        case "setBrandId":
            return {...state, brandId: action.payload, step: state.step + 1};
        case "setProductFilter":
            return {...state, productFilter: action.payload};
        case "setProductId":
            return {...state, productId: action.payload, step: state.step + 1};
        case "setProductColor":
            return {...state, productColor: action.payload};
        case "setProductDescription":
            return {...state, productDescription: action.payload, step: state.step + 1};
        case "setDeliveryOptions":
            return {...state, deliveryOptions: action.payload, step: state.step + 1};
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

// const RestoreContextConsumer = RestoreContext.Consumer;

export {RestoreContext, RestoreContextProvider};
