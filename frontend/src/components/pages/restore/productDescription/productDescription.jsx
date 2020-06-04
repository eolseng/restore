import React, {useContext, useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {RestoreContext} from '../restoreContext'
/** CSS Imports */
import '../../../../css/pages/restore/productDescription/productDescription.css'

function ProductDescription() {
    const {state, dispatch} = useContext(RestoreContext)
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [sizeError, setSizeError] = useState(false)

    const setProductDescription = () => {
        if (!selectedSize) {
            setSizeError(true)
        }

        if (!selectedColor || !selectedSize) {
            // TODO: Må vise feilmelding!
            console.log('HAR IKKE VALGT FARGE ELLER STØRRELSE!')
            return
        }

        const payload = {
            color: selectedColor,
            size: selectedSize,
        }
        dispatch({type: 'setProductDescription', payload: payload})
        dispatch({type: 'incrementStep'})

    }

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
            setProduct(product)
            const image = product.images.find(image => image.colorName === state.productColor)
            setCurrentImage(image.imgUrl)
            setSelectedColor(image.colorId)
        })
    }, [state.productId, state.productLink, state.productColor])

    function isSelected(id) {
        if (id === selectedColor || id === selectedSize) {
            return 'selected-item'
        } else {
            return ''
        }
    }

    if (product) {
        return (
            <div className='container-fluid overlay'>
                <div className='container'>
                    <div className={'product-description'}>
                        <div className='product-description-left'>
                            <img
                                className={'product-description-image-main'}
                                src={currentImage}
                                alt={'Selected color: ' + state.productColor}
                            />
                        </div>
                        <div className='product-description-right'>
                            <h4 className="product-name">{product.name}</h4>
                            <div className={'product-description-selects'}>
                                <div className={'product-description-color'}>
                                    <h5>Choose a color:</h5>
                                    <div className={'product-description-colors'}>
                                        {product.images.map(image => {
                                            return (
                                                <div
                                                    className={'product-description-image-alternative ' + isSelected(image.colorId)}
                                                    key={'altImg-' + image.imgUrl}
                                                >
                                                    <img
                                                        className={'product-description-image-alt'}
                                                        src={image.imgUrl}
                                                        alt={'Alternative color - ' + image.colorName}
                                                        onClick={() => {
                                                            setCurrentImage(image.imgUrl)
                                                            setSelectedColor(image.colorId)
                                                        }}
                                                    />
                                                    <div className={'product-description-image-alt-name'}>
                                                        {image.colorName}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className={'product-description-sizes'}>
                                    <h5>Choose size:</h5>
                                    <div id={'sizes-select'} className={"sizes-select" + (sizeError ? " size-error" : "")}>
                                        {product.sizes.map(size => {
                                            return (
                                                <div
                                                    key={size.id}
                                                    className={'product-description-size ' + isSelected(size.id)}
                                                    onClick={() => {
                                                        setSelectedSize(size.id)
                                                        setSizeError(false)
                                                    }}
                                                >
                                                    {size.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {sizeError ? <span>Vennligst velg en størrelse</span> : ""}
                                </div>
                            </div>
                            <button id="btnLeggTil" className="popup-button cta-button"
                                    onClick={setProductDescription}>Legg til
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className={'product-description'}>Loading product...</div>
    }
}

export default withRouter(ProductDescription)
