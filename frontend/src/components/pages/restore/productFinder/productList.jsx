import React from 'react'
import {ProductCard} from './productCard'

import '../../../../css/pages/restore/product-finder/product-list.css'

/**
 * Renders all products fetcher by API.
 * @param props
 * @returns {*}
 * @constructor
 */
export function ProductList(props) {
    /*
        Gets passed a LIST of Products as a prop and renders these as individual ProductCards in a container.
     */
    const productList = props.products
    const productCards = productList.embedded ? (
        productList.embedded.products.map(product =>
            product.images.map((image, index) => {
                    // Render a card for each color of the product
                    return <ProductCard key={"IMG_KEY" + image.imgUrl} product={product} imageIndex={index}/>
                }
            ))) : (
        <div className={'product-list-no-product'}>Could not find any products.</div>
    )

    return (
        <div className='product-list-wrapper col-sm-9'>
            <div className='product-list'>{productCards}</div>
        </div>
    )
}
