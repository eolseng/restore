import React, {useState} from 'react'
import useFetch from './productFinder'

export function ProductFilter(props) {
    const { addSearchParam, subPath, filterName } = props
    // eslint-disable-next-line no-unused-vars
    const [{ data, isLoading, isError }, doFetch] = useFetch(subPath)
    const [selected, setSelected] = useState()

    const selectFilter = (value) => {
        addSearchParam(filterName + '.name', value)
        setSelected(value)
    }

    //Returns the text of an filter alternative
    const getAltText = (alt) => {
        if (filterName === 'genders'){
            return alt.genderType;
        }
        //By default, the 'name' of the alternative is what's displayed.
        return alt.name
    }

    const renderFilters = () => {
        return data.embedded ? (
            data.embedded[subPath].map(function (filerAlt, index) {
                const altText = getAltText(filerAlt)
                return (
                    <div key={"container-"+ index} className='product-filter-content'>
                        <label className='product-filter-label'>
                            <input
                                className='product-filter-input'
                                type={'radio'}
                                value={altText}
                                checked={altText === selected}
                                key={index}
                                onChange={() => selectFilter(altText)}
                            />
                            {altText}
                        </label>
                    </div>
                )
            })
        ) : (
            <div>{filterName} is loading...</div>
        )
    }

    return (
        <div className='product-filter-type'>
            <h5 className='product-filter-title'>{filterName}</h5>
            {renderFilters()}
        </div>
    )
}
