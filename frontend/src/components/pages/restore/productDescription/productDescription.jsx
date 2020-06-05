import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { RestoreContext } from '../restoreContext'
/** CSS Imports */
import '../../../../css/pages/restore/productDescription/productDescription.css'

/**
 * Renders description about a product.
 * @returns {*}
 * @constructor
 */
function ProductDescription() {
    const { state, dispatch } = useContext(RestoreContext)
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)
    const [selectedColorName, setSelectedColorName] = useState(state.productColor)
    const [selectedSizeName, setSelectedSizeName] = useState(null)
    const [selectedColorId, setSelectedColorId] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [sizeError, setSizeError] = useState(false)

    const setProductDescription = () => {
        if (!selectedSize) {
            setSizeError(true)
        }

        if (!selectedColorId || !selectedSize) {
            console.log('HAR IKKE VALGT FARGE ELLER STØRRELSE!')
            return
        }

        const payload = {
            color: selectedColorId,
            size: selectedSize,
        }
        dispatch({ type: 'setProductSize', payload: selectedSizeName })
        dispatch({ type: 'setProductColor', payload: selectedColorName })
        dispatch({ type: 'setProductDescription', payload: payload })
        dispatch({ type: 'incrementStep' })
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
            setSelectedColorId(image.colorId)
        })
    }, [state.productId, state.productLink, state.productColor])

    function isSelected(id) {
        if (id === selectedColorId || id === selectedSize) {
            return 'selected-item'
        } else {
            return ''
        }
    }

    if (product) {
        return (
            <div className='container-fluid'>
                <div className='container product-description-container'>
                    <div className={'product-description'}>
                        <div className='product-description-left'>
                            <img
                                className={'product-description-image-main'}
                                src={currentImage}
                                alt={'Selected color: ' + state.productColor}
                            />
                        </div>
                        <div className='product-description-right'>
                            <h4 className='product-name'>{product.name}</h4>
                            <div className={'product-description-selects'}>
                                <div className={'product-description-color'}>
                                    <h5>Velg fargen på produktet:</h5>
                                    <div className={'product-description-colors'}>
                                        {product.images.map(image => {
                                            return (
                                                <div
                                                    className={
                                                        'product-description-image-alternative ' +
                                                        isSelected(image.colorId)
                                                    }
                                                    key={'altImg-' + image.imgUrl}
                                                >
                                                    <img
                                                        className={'product-description-image-alt'}
                                                        src={image.imgUrl}
                                                        alt={'Alternative color - ' + image.colorName}
                                                        onClick={() => {
                                                            setCurrentImage(image.imgUrl)
                                                            setSelectedColorId(image.colorId)
                                                            setSelectedColorName(image.colorName)
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
                                    <h5>Velg størrelsen på produktet:</h5>
                                    <div
                                        id={'sizes-select'}
                                        className={'sizes-select' + (sizeError ? ' size-error' : '')}
                                    >
                                        {product.sizes.map(size => {
                                            return (
                                                <div
                                                    key={size.id}
                                                    className={'product-description-size ' + isSelected(size.id)}
                                                    onClick={() => {
                                                        setSelectedSizeName(size.name)
                                                        setSelectedSize(size.id)
                                                        setSizeError(false)
                                                    }}
                                                >
                                                    {size.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {sizeError ? (
                                        <span className='error-message'>Vennligst velg en størrelse</span>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                            <div className='popup-button-container'>
                                <button
                                    id='btnLeggTil'
                                    className='popup-button cta-button'
                                    onClick={setProductDescription}
                                >
                                    Gå videre
                                </button>
                            </div>
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
