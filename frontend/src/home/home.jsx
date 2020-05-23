import React from "react";

import WelcomeText from "./welcomeText";
import Flow from "./flow"

function Home() {

    return (
        <div className="content-container col flex-grow-1">
            <WelcomeText/>
            <Flow/>
        </div>
    )
}

export default Home;