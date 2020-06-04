import React, {useContext, useEffect, useState} from "react";
import {RestoreContext} from "./restoreContext";

import heltHjem from "../../../img/heltHjem/Helt-hjem.png";
import posten from "../../../img/logo/posten.png";

function OrderConfirmation() {

    const {state} = useContext(RestoreContext);
    const [imageLink, setImageLink] = useState(null)

    const confirmOrder = () => {
        alert('Jævlig kult gutta')
    }

    const deliveryOption = <img src={state.deliveryOption === "HeltHjem" ? heltHjem : posten}/>

    // Fetch product from API
    useEffect(() => {
        async function fetchProduct() {
            return await fetch(state.productLink).then(res => res.json())
        }

        fetchProduct().then(res => {
            const emb = res._embedded
            const product = {
                id: state.productId,
                name: res.name,
                description: res.description,
                brand: emb.brand,
                category: emb.category,
                subCategory: emb.subCategory,
                gender: emb.gender,
                sizes: emb.sizes,
                colors: emb.colors,
                images: emb.images,
            }
            const image = product.images.find(image => image.colorName === state.productColor)
            setImageLink(image.imgUrl)
        })
    }, [state])

    return (
        <div className='container-fluid'>
            <div className={'container confirmation-container'}>
                <div className={'confirmation'}>
                    <div className={'col-sm-6'}>
                        <img src={imageLink}/>
                    </div>
                    <div className={'col-sm-6'}>
                        <div className={''}>{state.productName}</div>
                        <div className={'confirmation-color'}>{state.productColor}</div>
                        <div className={'confirmation-size'}>{state.productSize}</div>
                        <div className={'confirmation-delivery-option'}>
                            Leveres med:
                            {deliveryOption}
                        </div>
                        <button className={'delivery-options-button cta-button'}
                                onClick={confirmOrder}>Bekreft ordre</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation;


// const jasså = <div>
//     <h1>OrderConfirmation</h1>
//     <p>Max Steps: {state.maxSteps}</p>
//     <p>Step: {state.step}</p>
//     <p>Brand ID: {state.brandId}</p>
//     <p>Product ID : {state.productId}</p>
//     <p>Product Name : {state.productName}</p>
//     <p>Product Color Name : {state.productColor}</p>
//     <p>Product Color Id : {state.productDescription.color}</p>
//     <p>Product Size Name: {state.productSize}</p>
//     <p>Product Size Id: {state.productDescription.size}</p>
//     <p>Delivery Options : {state.deliveryOption}</p>
// </div>