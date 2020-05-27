import React, {useContext} from 'react'
import {RestoreContext} from "../restoreContext";

export function ProductCard(props) {
    /*
        Gets passed an individual Product as a prop and renders it.
     */

    const {dispatch} = useContext(RestoreContext);
    const setProductId = productId => () => dispatch({type: "setProductId", payload: productId});
    const product = props.product;

    return (
        <div className={'product-card'} id={'product-card-id-' + product.id} onClick={setProductId(product.id)}>
            <img className={'product-card-image'} src={product.images[0].imgUrl} alt={''}/>
            <div className={'product-card-brand'}>{product.brand}</div>
            <div className={'product-card-name'}>{product.name}</div>
            <div className={'product-card-color'}>{product.color}</div>
        </div>
    )
}
