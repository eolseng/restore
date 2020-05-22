import React from "react";
import {ProductCard} from "./productCard"

export function ProductList(props) {

    /*
        Gets passed a LIST of Products as a prop and renders these as individual ProductCards in a container.
     */

    const productList = props.products;
    const productCards = productList ? productList.map(product =>
            <ProductCard key={product.id} product={product}/>) :
        <div className={"product-list-no-product"}>Could not find any products.</div>

    return (
        <div className={"product-list"}>
            {productCards}
        </div>
    )
}