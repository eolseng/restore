import React from "react";

/* component imports */
import WelcomeText from "./welcomeText";
import Flow from "./flow";

/** CSS Imports */
import "../../../css/pages/home/home.css";
import "../../../css/pages/home/main.css";

function Home() {
  return (
    <div className='content-container col flex-grow-1'>
      <WelcomeText />
      <Flow />
    </div>
  );
}

export default Home;
