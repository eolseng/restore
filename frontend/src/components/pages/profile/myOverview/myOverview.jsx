import React, {useState} from "react";
import {Link} from "react-router-dom";

/* Css imports */
import "../../../../css/pages/profile/profile.css";

/* component imports */
import {OverviewCard} from "./cards/overviewCard";


function MyOverview() {
    const mockDiscounts =
        {
            id: 0,
            brand: "Swix",
            discount: "kr 100,-",
            count: 1
        }
    ;

    const [discounts, setDiscounts] = useState(mockDiscounts);
    const [rendered, setRendered] = useState();
    const [isRenderOverview, setIsRenderOverview] = useState(true);

    function renderOverview() {
        setIsRenderOverview(false);

        setRendered(
            <div className="my-overview-cards-container">
                {/*<OverviewList mockDiscounts={props.mockDiscounts} mockOrders={props.mockOrders}/>*/}
                <OverviewCard discounts={discounts}/>
            </div>
        )
    }

    function renderDiscounts() {
        setIsRenderOverview(false);
        setRendered(
            <div>Rabattsiden</div>
        )
    }

    function renderOrders() {
        setIsRenderOverview(false);
        setRendered(
            <div>Ordresidensiden</div>
        )
    }

    return(
        <div className="my-overview-container col-9">
            <div className="my-overview ">
                <div className="overview justify-content col-3 border-right" id={1} onClick={renderOverview}>Oversikt</div>
                <div className="discounts col-3 justify-content border-right" id={2} onClick={renderDiscounts}>Rabatter</div>
                <div className="orders col-3 justify-content border-right" id={3} onClick={renderOrders}>Ordre</div>
                <div className="register col-3 justify-content">
                    <Link to="./filter">
                        <button className="profile-button">Registrer plagg</button>
                    </Link>
                </div>
            </div>
            {isRenderOverview ? <div className="my-overview-cards-container">
                {/*<OverviewList mockDiscounts={props.mockDiscounts} mockOrders={props.mockOrders}/>*/}
                <OverviewCard discounts={discounts}/></div> : null
            }
            {rendered}


        </div>
    )
}

export default MyOverview;

