import React from "react";

/* css imports */
import "../../../../../css/pages/profile/overwiewCards/overviewCard.css"

/**
 * Renders the header of profile page with statistics of the user's orders & coupons.
 * @param props
 * @returns {*}
 * @constructor
 */
export function OverviewCard(props) {

    const discount = props.discounts;

    return (
        <div>
            <button className="card-discounts card-button col-12 card">
                <div>Logo</div>
                <div>Rabatter</div>
                <div>Antall rabattkort: {discount.count}</div>
            </button>
            <button className="card-orders card-button col-12 card">
                <div>Logo</div>
                <div>Ordre</div>
                <div>
                    <div>Antall ordre: {discount.count}</div>
                </div>
            </button>
        </div>
    )
}