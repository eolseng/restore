import React, {useState} from "react";
import { Link } from "react-router-dom";

import WelcomeText from "./main-content-pages/welcomeText";
import Flow from "./main-content-pages/flow"

function Home() {

    return (
        <div className="content-container col flex-grow-1">
            <WelcomeText/>
            <Flow/>
        </div>
    )
}

export default Home;