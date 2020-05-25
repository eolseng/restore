import React from "react";
import {Link} from "react-router-dom";

/* Css imports */
import "../../../../css/pages/profile/profile.css";

function MyOverview() {

    return(
        <div className="my-overview-container col-9">
            <div className="my-overview ">
                <div className="overview-container col-3 border-right">
                    <div className="overview justify-content">Oversikt</div>
                </div>
                <div className="discounts col-3 justify-content border-right">Rabatter</div>
                <div className="orders col-3 justify-content border-right">Ordre</div>
                <div className="register col-3 justify-content">
                    <Link to="./filter">
                        <button className="profile-button">Registrer plagg</button>
                    </Link>
                </div>
            </div>
            <div className="discount-cards-container col">Her skal rabatt kortene vises</div>
        </div>
    )
}

export default MyOverview;