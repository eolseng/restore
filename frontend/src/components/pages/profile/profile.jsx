import React from "react";

/* Css imports */
import "../../../css/pages/profile/profile.css";

/* component imports */
import MyProfile from "./myProfile/myProfile";
import MyOverview from "./myOverview/myOverview";

function Profile() {
    return (
        <div className="content-container col flex-grow-1">
            <div className="row profile-container">
                <div className="margin-left col-2"/>
                <div className="my-profile-container col">
                    <MyProfile/>
                    <MyOverview/>
                </div>

                <div className="margin-right col-2"/>
            </div>
        </div>
    )
}

export default Profile;
