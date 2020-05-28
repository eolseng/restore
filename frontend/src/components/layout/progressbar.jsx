import React from "react";

/* css imports */
import "../../css/layout/progressbar.css"

function Progress({ progress}) {
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
                <div className="progress-none"/>
        }
    } else if(progressShow === "/condition") {
        if(progress.id === 2) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div className="progress-none"/>
        }
    } else if(progressShow === "/delivery") {
        if (progress.id === 3) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div className="progress-none"/>
        }
    }else if(progressShow === "/confirmation") {
        if (progress.id === 4) {
            showProgressBar =
                <div>
                    <div>{progress.progressbar}</div>
                </div>
        } else {
            showProgressBar =
                <div className="progress-none"/>
        }
    }

    return (
        <div className="progress-bar-container">

            {progressShow === "/filter" || progressShow === "/condition" || progressShow === "/delivery"
            || progressShow === "/confirmation"
                ? <div>
                    <div>{progress.id + progress.text}</div>
                    {showProgressBar}
                </div>
                : <div/>
            }
        </div>
    );
}

export default Progress;