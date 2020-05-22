import React from "react";

export function ProductCard(props){

    /*
        Gets passed an individual Product as a prop and renders it.
     */

    const product = props.product;

    return (
        <a className={"product-card"}
           id={"product-card-id-" + product.id}
            href={"/"}>
            <img className={"product-card-image"} src={product.imgUrl} alt={""}/>
            <div className={"product-card-brand"}>{product.brand}</div>
            <div className={"product-card-name"}>{product.name}</div>
            <div className={"product-card-color"}>{product.color}</div>
        </a>
    )
}