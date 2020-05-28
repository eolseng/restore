import React, {useContext, useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import {RestoreContext} from "../restoreContext";
/** CSS Imports */
import "../../../../css/pages/restore/productDescription/productDescription.css";

function ProductDescription() {

    const {state, dispatch} = useContext(RestoreContext);

    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const setProductDescription = () => {

        if (!selectedColor || !selectedSize) {
            console.log("HAR IKKE VALGT FARGE ELLER STØRRELSE!")
            return
        }

        const payload = {
            color: selectedColor,
            size: selectedSize
        }
        dispatch({type: "setProductDescription", payload: payload})
    };

    // Fetch product from API
    useEffect(() => {
        async function fetchProduct() {
            return await fetch(state.productLink)
                .then(res => res.json())
        }

        fetchProduct()
            .then(res => {
                const emb = res._embedded;
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
                    images: emb.images
                }
                setProduct(product)
                const image = product.images.find(image => image.colorName === state.productColor)
                setCurrentImage(image.imgUrl)
                setSelectedColor(image.colorId)
            })
    }, [state.productId, state.productLink, state.productColor])

    function handleSizeChange(e) {
        setSelectedSize(e.target.value)
    }

    if (product) {
        console.log(product)
        return (
            <div className={"product-description"}>
                <h1>{product.name}</h1>
                <img className={"product-description-image-main"} src={currentImage}
                     alt={'Selected color: ' + state.productColor}/>

                <div className={"product-description-selects"}>
                    <div className={"product-description-color"}>
                        <h4>Choose a color:</h4>
                        <div className={"product-description-colors"}>
                            {product.images.map(image => {
                                return (
                                    <div className={"product-description-image-alternatives"}
                                         key={"altImg-" + image.imgUrl}>
                                        <img className={"product-description-image-alt"}
                                             src={image.imgUrl}
                                             alt={'Alternative color - ' + image.colorName}
                                             onClick={() => {
                                                 setCurrentImage(image.imgUrl);
                                                 setSelectedColor(image.colorId);
                                             }}/>
                                        <div className={"product-description-image-alt-name"}>
                                            {image.colorName}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={"product-description-sizes"}>
                        <label>Choose size:
                            <select name={"sizes"} id={"sizes-select"} onChange={handleSizeChange}>
                                {product.sizes.map(size => {
                                    return <option key={size.id} value={size.id}>{size.name}</option>
                                })}
                            </select>
                        </label>
                    </div>

                </div>
                <button onClick={setProductDescription}>Set description</button>
            </div>
        )
    } else {
        return (
            <div className={"product-description"}>
                Loading product...
            </div>
        )
    }
}

export default withRouter(ProductDescription);