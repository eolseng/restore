import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../img/logo/restore.png";

/** CSS Imports */
import "../../css/layout/header.css";

import Progress from "./progressbar";

function Header() {

  const [progressState] = useState([
    {
      id: 1,
      text: ". Finn produkt",
      progressbar: <div className="filter-progress progress-next"/>,
      progressbarHide: <div/>
    },
    {
      id: 2,
      text: ". Vurder tilstand",
      progressbar: <div className="filter-progress progress-next"/>,
      progressbarHide: <div/>
    },
    {
      id: 3,
      text: ". Velg leveransemetode",
      progressbar: <div className="filter-progress progress-next"/>,
      progressbarHide: <div/>
    },
    {
      id: 4,
      text: ". Få bekreftelse",
      progressbar: <div className="filter-progress progress-next"/>,
      progressbarHide: <div/>
    }
  ]);

  return (
      <div className="header-container">
        <div className="header-left">
          <div id="logo">
            <Link to="./" >
              <img id="logo-img" src={ logo } alt="logo"/>
            </Link>
          </div>
        </div>

        <div className="progress col-6">
          {progressState.map((progress, index) => (
              <Progress key={progress.id} index={index} progress={progress} />
          ))}
        </div>

        <div className="header-right col-3">
          <FontAwesomeIcon
              id='menu-button'
              className='link'
              icon={["fas", "bars"]}
              /*onClick="showMenu()"*/
          />{/* Må legge inn funksjonalitet på burger ikonet hvis vi skal ha det med videre. Må også legge inn
                funkjonalitet på at den er display: none og at den kommer frem når den skal*/}

          { /* Icon to profile page*/ }
          <Link to="./profile" className="link">
            <FontAwesomeIcon className='' icon={["far", "user-circle"]} />
          </Link>
          <Link to="" className="link">Logg inn / Registrer</Link> {/* Må legge inn riktig adresse under to="" når
                 siden er åppe logginn */}
        </div>
      </div>
  )
}

export default withRouter(Header);