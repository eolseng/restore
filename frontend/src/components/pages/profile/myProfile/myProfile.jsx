import React from "react";

/* Css imports */
import "../../../../css/pages/profile/profile.css";

/* image imports*/
import profilePicture from "../../../../img/profilePicture/profile-picture.jpg";

/**
 * Renders user's properties.
 * @returns {*}
 * @constructor
 */
function MyProfile() {

    return (
        <div className="my-profile col-3 border-right">
            <div className="profile-picture-container">
                <img src={profilePicture} alt="profilePicture"/>
            </div>
            <div>Navn:</div>
            <div>E-post:</div>
            <div>Adresse:</div>
            <div>Endre profil knapp</div>
        </div>
    )
}

export default MyProfile;