import React from "react";
import {CategoryFilter} from "./categoryFilter";

export function ProductFilter(props){
    return <div>
        <CategoryFilter searchState={props.searchState} setSearchState={props.addSearchParam}></CategoryFilter>
    </div>
}