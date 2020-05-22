import {useState} from "react";
import React from "react";
import useFetch from "./ProductFinder";

export function CategoryFilter(props){
    const [categories, setCategories] = useState([])
    const [{data, isLoading, isError}, doFetch] = useFetch('categories')


    const selectCategory = (ctg) => {
        props.addSearchParam(ctg)
    }

    const allCategories =
        data.embedded ?
            data.embedded.categories.map(function (category, index){
                return <div key={index} onClick={() => (selectCategory(category.name))}>{category.name}</div>
            })
            :
            <div>Categories are loading</div>
    return (
        <div>
            {allCategories}
        </div>
    )
}