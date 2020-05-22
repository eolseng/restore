import React from "react";

export function ProductList(props){
    //Current state value, and an update for updating current state value.
    const productsLi = props.products.embedded ?
        props.products.embedded.products.map(product =>
            <ProductCard key={product._links.self.href} product={product}/>
        ):
        <div>No products</div>


    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
            </tr>
            {productsLi}
            </tbody>
        </table>
    )
}