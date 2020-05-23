import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../img/logo/restore.png";

/** CSS Imports */
import "../../css/layout/header.css";

/* To only show the progressbar in the header on certain the pages */
function Progress({ progress }) {
  const progressbarShow = window.location.pathname;

  return (
    <div className='progress-bar-container'>
      {progressbarShow === "/filter" ||
      progressbarShow === "/condition" ||
      progressbarShow === "/delivery" ||
      progressbarShow === "/confirmation" ? (
        <div>
          <div>{progress.one}</div>
          <div>{progress.two}</div>
          <div>{progress.three}</div>
          <div>{progress.four}</div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

function Header() {
  const [progressState] = useState([
    {
      one: "1. Finn produkt",
      current: false,
      path: "",
    },
    {
      two: "2. Vurder tilstand",
      current: false,
      path: "",
    },
    {
      three: "3. Velg leveransemetode",
      current: false,
      path: "",
    },
    {
      four: "4. Få bekreftelse",
      current: false,
      path: "",
    },
  ]);

  return (
    <div className='header-container'>
      <div className='header-left'>
        <div id='logo'>
          <Link to='./'>
            <img id='logo-img' src={logo} alt='logo' />
          </Link>
        </div>
      </div>

      <div className='progress col-6'>
        {progressState.map((progress, index) => (
          <Progress key={index} index={index} progress={progress} />
        ))}
      </div>

      <div className='header-right col-3'>
        <FontAwesomeIcon
          id='menu-button'
          className='link'
          icon={["fas", "bars"]}
          /*onClick="showMenu()"*/
        />
        {/* Må
                legge inn funksjonalitet på burger ikonet hvis vi skal ha det med videre. Må også legge inn funkjonalitet
                på at den er display: none og at den kommer frem når den skal*/}
        {/* Icon to profile page*/}
        <Link to='./profile' className='link'>
          <FontAwesomeIcon className='' icon={["far", "user-circle"]} />
        </Link>
        <Link to='' className='link'>
          Logg inn / Registrer
        </Link>{" "}
        {/* Må legge inn riktig adresse under to="" når
                 siden er åppe logginn */}
      </div>
    </div>
  );
}

export default withRouter(Header);
