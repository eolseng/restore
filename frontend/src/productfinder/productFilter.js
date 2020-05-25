import React from "react";
import {CategoryFilter} from "./categoryFilter";

export function ProductFilter(props){
    return <div>
        <CategoryFilter addSearchParam={props.addSearchParam}></CategoryFilter>
    </div>
}