import React from "react";
import {ProductCard} from "./productCard"

export function ProductList(props) {

    /*
        Gets passed a LIST of Products as a prop and renders these as individual ProductCards in a container.
     */

<<<<<<< HEAD
    const productList = props.products
    const productCards = productList.embedded ? ( productList.embedded.products.map((product) => 
        <ProductCard key={product.id} product={product} />)
    ) : (
        <div className='product-list-no-product'>Could not find any products.</div>
    )
=======
    const productList = props.products;
    const productCards = productList ? productList.map(product =>
            <ProductCard key={product.id} product={product}/>) :
        <div className={"product-list-no-product"}>Could not find any products.</div>
>>>>>>> 7c4b7a08f5a338ec178e5ed2ee136e09e6d351bb

    return (
        <div className={"product-list"}>
            {productCards}
        </div>
    )
}