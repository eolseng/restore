// Reference: https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

import React, {createContext, useReducer} from "react";

/**
 * Initial order state.
 * @type {{productFilter: null, productId: null, brandId: null, productColor: null, maxSteps: number, step: number, productLink: null, productDescription: null, deliveryOptions: null}}
 */
const initialState = {
    maxSteps: 1,
    step: 1,
    brandId: null,
    productFilter: null,
    productLink: null,
    productId: null,
    productName: null,
    productSize: null,
    productColor: null,
    productDescription: null,
    deliveryOption: null
};

const RestoreContext = createContext(initialState);

/**
 * Traces step of current order.
 * @param state
 * @param action
 * @returns {*}
 */
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
            return {...state, brandId: action.payload};
        case "setProductFilter":
            return {...state, productFilter: action.payload};
        case "setProductLink":
            return {...state, productLink: action.payload};
        case "setProductId":
            return {...state, productId: action.payload};
        case "setProductName":
            return {...state, productName: action.payload};
        case "setProductColor":
            return {...state, productColor: action.payload};
        case "setProductSize":
            return {...state, productSize: action.payload};
        case "setProductDescription":
            return {...state, productDescription: action.payload};
        case "setDeliveryOption":
            return {...state, deliveryOption: action.payload};
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