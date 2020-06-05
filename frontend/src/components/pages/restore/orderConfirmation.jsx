import React, { useContext, useEffect, useState } from 'react'
import { RestoreContext } from './restoreContext'

import '../../../css/pages/restore/orderConfirmation/orderConfirmation.css'

import heltHjem from '../../../img/heltHjem/Helt-hjem.png'
import posten from '../../../img/logo/posten.png'

function OrderConfirmation() {
    const { state } = useContext(RestoreContext)
    const [imageLink, setImageLink] = useState(null)

    const confirmOrder = () => {
        alert('Bekreftelse kommer her')
    }

    const deliveryOption = <img className="confirmation-delivery-option" src={state.deliveryOption === 'HeltHjem' ? heltHjem : posten} alt="Leveringsalternativ"/>

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
                    <div className={'confirmation-image-container'}>
                        <img className='confirmation-image' src={imageLink} alt="Bilde av det valgte plagget" />
                    </div>
                    <div className={'confirmation-info-container'}>
                        <h5 className="confirmation-description-title">Modell:</h5>
                        <h4 className={'confirmation-name'}>{state.productName}</h4>
                        <h5 className="confirmation-description-title">Farge:</h5>
                        <p className={'confirmation-color'}>{state.productColor}</p>
                        <h5 className="confirmation-description-title">Størrelse:</h5>
                        <p className={'confirmation-size'}>{state.productSize}</p>
                        <div className={'confirmation-delivery-option-container'}>
                            <h5 className="confirmation-description-title">Leveres med:</h5>
                            {deliveryOption}
                        </div>
                        <div className='delivery-options-button-container'>
                            <button className={'delivery-options-button cta-button'} onClick={confirmOrder}>
                                Bekreft ordre
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation

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
