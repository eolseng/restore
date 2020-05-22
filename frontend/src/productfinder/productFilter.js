import React from "react";
import {CategoryFilter} from "./categoryFilter";

export function ProductFilter(props){
    return <div>
        <CategoryFilter searchState={props.searchState} addSearchParam={props.addSearchParam}></CategoryFilter>
    </div>
}