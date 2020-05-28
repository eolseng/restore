import React from 'react'
import {ProductCard} from './productCard'

import '../../../../css/pages/restore/product-finder/product-list.css'

export function ProductList(props) {
    /*
        Gets passed a LIST of Products as a prop and renders these as individual ProductCards in a container.
     */
    const productList = props.products
    const productCards = productList.embedded ? (
        productList.embedded.products.map(product =>
            product.images.map((image, index) =>
                // Render a card for each color of the product
                <ProductCard key={"IMG_KEY" + image.imgUrl} product={product} imageIndex={index}/>
            ))) : (
        <div className={'product-list-no-product'}>Could not find any products.</div>
    )


    const handleNavPage = (pageNum) =>{
        props.addSearchParam("page", pageNum)
    }

    const navLinks = [];
    //Is undefined before first API fetch is completed.
    if (typeof props.page !== 'undefined'){
        let i;
        for (i = props.page.number - 2; i < props.page.number + 2; i++) {
            if (i < 0){continue}
            if (i >= props.page.totalPages){continue}

            //Can't use onClick 'i' as 'i' is dynamic and causes wrong onClick argument.
            const onClickId = i;
            navLinks.push(<button key={"navPage" + onClickId}  onClick={() => handleNavPage(onClickId)}>{onClickId}</button>);
        }
    }


    return (
        <div className='product-list-wrapper col-sm-9'>
            <div className='product-list'>{productCards}</div>
            <div>{navLinks}</div>
        </div>
    )
}
