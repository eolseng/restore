import React, {useContext, useState} from 'react'
import {RestoreContext} from "../restoreContext";

export function ProductCard(props) {

    /*
        Gets passed an individual Product as a prop and renders it.
     */

    const {dispatch} = useContext(RestoreContext);
    const product = props.product;
    const imageIndex = props.imageIndex;
    const mainImage = product.images[imageIndex];

    const [displayImage, setDisplayImage] = useState(mainImage.imgUrl);
    const [currentColor, setCurrentColor] = useState(mainImage.colorName);

    return (
        <div className={'product-card'}
             id={'product-card-id-' + product.id}
             onClick={() => {
                 dispatch({type: "setProductColor", payload: currentColor});
                 dispatch({type: "setProductId", payload: product.id});
                 dispatch({type: "setProductLink", payload: product._links.self.href});
                 dispatch({type: "incrementStep"});
             }}>

            <img className={'product-card-image-main'} src={displayImage} alt={''}/>
            <div className={'product-card-name'}>{product.name}</div>
            <div className={'product-card-image-alt-list'}>
                {product.images.map((image) => {
                    return <img key={"ALT_IMAGE" + imageIndex + image.imgUrl}
                                className={"product-card-image-alt"}
                                onMouseEnter={() => {
                                    setDisplayImage(image.imgUrl)
                                    setCurrentColor(image.colorName)
                                }}
                                onMouseLeave={() => {
                                    setDisplayImage(product.images[0].imgUrl)
                                    setCurrentColor(mainImage.colorName)
                                }}
                                src={image.imgUrl}
                                alt={'Alternative colors'}/>
                })}
            </div>
        </div>
    )
}
