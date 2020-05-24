import React from "react";
import "./profile-midlertidig.css";
import {Link} from "react-router-dom";

import profilePicture from "../img/profilePicture/profile-picture.jpg"

function Profile() {
    // Tingene på denne siden bør trekkes ut til egne komponenter, men det får gjøres i neste sprint
    return (
        <div className="content-container col flex-grow-1">
            <div className="row profile-container">
                <div className="margin-left col-2"/>
                {/* profile */}
                <div className="my-profile-container col">
                    <div className="my-profile col-3 border-right">
                        <div className="profile-picture-container">
                            <img src={profilePicture} alt="profilePicture"/>
                        </div>
                        <div>Navn:</div>
                        <div>E-post:</div>
                        <div>Adresse:</div>
                        <div>Endre profil knapp</div>
                    </div>
                    {/* overview, discounts and orders */}
                    <div className="my-items-container col-9">
                        <div className="my-items ">
                            <div className="overview-container col-3 border-right">
                                <div className="overview">Oversikt</div>
                            </div>
                            <div className="discounts col-3 border-right">Rabatter</div>
                            <div className="orders col-3 border-right">Ordre</div>
                            <div className="register col-3">
                                <Link to="./filter">
                                    <button className="profile-button">Registrer plagg</button>
                                </Link>
                            </div>
                        </div>
                        <div className="discount-cards-container col">Her skal rabatt kortene vises</div>
                    </div>
                </div>

                <div className="margin-right col-2"/>
            </div>
        </div>
    )
}

export default Profile;
