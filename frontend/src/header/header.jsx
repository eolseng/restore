import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../img/logo/restore.png";

/* To only show the progressbar in the header on certain the pages */

function Progress({ progress, index }) {
    const progressShow = window.location.pathname;
    let showProgressBar;

    if(progressShow === "/filter") {
        if(progress.id === 1) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div>
                    <div style={{display: "none"} }>{progress.progressbar}</div>
                </div>
        }
    } else if(progressShow === "/condition") {
        if(progress.id === 2) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div>
                    <div style={{display: "none"} }>{progress.progressbar}</div>
                </div>
        }
    } else if(progressShow === "/delivery") {
        if (progress.id === 3) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div>
                    <div style={{display: "none"} }>{progress.progressbar}</div>
                </div>
        }
    }else if(progressShow === "/confirmation") {
        if (progress.id === 4) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div>
                    <div style={{display: "none"} }>{progress.progressbar}</div>
                </div>
        }
    }


    return (
        <div className="progress-bar-container">

            {progressShow === "/filter" || progressShow === "/condition" || progressShow === "/delivery"
                || progressShow === "/confirmation"
                ? <div>
                    <div>{progress.id + progress.text}</div>
                    {showProgressBar}
                    {/*
                    <div>{progress.progressbar}</div>
                    */}
                </div>
                : <div/>
                }

            {/*
            {progressShow === "/filter" ?
                progress.progressbar :
                progress.progressbarNone
            }

            {progressShow === "/condition" ?
                progress.progressbar :
                progress.progressbarNone
            }

            {progressShow === "/delivery" ?
                progress.progressbar :
                progress.progressbarNone
            }

            {progressShow === "/confirmation" ?
                progress.progressbar :
                progress.progressbarNone
            }
*/}
        </div>
    );
}

function Header() {

    const [progressState, setProgressState] = useState([
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
                <div onClick="showMenu()" id="menu-button" className="link" style={{color: 'black'}}>&#9776;</div>{/* Må
                legge inn funksjonalitet på burger ikonet hvis vi skal ha det med videre. Må også legge inn funkjonalitet
                på at den er display: none og at den kommer frem når den skal*/}
                { /* Icon to profile page*/ }
                <Link to="./profile" className="link">
                    <i className="far fa-user-circle"/>
                </Link>
                <Link to="" className="link">Logg inn / Registrer</Link> {/* Må legge inn riktig adresse under to="" når
                 siden er åppe logginn */}
            </div>
        </div>
    )
}

export default withRouter(Header);