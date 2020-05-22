import React from "react";

export function ProductCard(props){
    return (
        <tr>
            <td>{props.product.name}</td>
        </tr>
    )
}