import React from "react";


/**
 * Displays discount coupon available for the user.
 * @param props
 * @returns {*}
 * @constructor
 */
export function DiscountsCard(props) {

    const discount = props.discountData;

    return (
            <button className="card-discounts card-button card-discount">
                <div className="card-brand-display">
                    <div className="row">{discount.brand}</div>
                    <div className="col-6">{discount.discount}</div>
                </div>
                <div>
                    <div className="discount-text">{discount.discount} kroner avslag ved neste kjøp hos {discount.brand}</div>
                    <div className="discount-text">Utstedt: {discount.issued}. Varighet: {discount.duration}</div>
                </div>
            </button>
    )
}