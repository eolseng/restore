import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** CSS Imports */
import "../../css/layout/footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      {/* Restore logo*/}
      <div className='footer-content footer-content-1 col-sm-3'>
        <Link className="footer-wrapper footer-wrapper-link" to=''>
          {" "}
          {/* finne ut hvordan man går til en ekstern side */}
          <img id='logo-img' src={require("../../img/logo/logo.png")} alt='logo' />
          {/* <img id='logo-img' src={require("../../img/logo/repairable.png")} alt='logo' /> */}
        </Link>
      </div>

      {/* Information*/}
      <div className='footer-content footer-content-2 col-sm-3'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>KONTAKT</h4>
            <h5 className='footer-wrapper-content kontakt-info'>hei@repairable.no</h5>
          <h5 className='footer-wrapper-content kontakt-info'>+47 407 23 912  (9-15)</h5>
        </div>
      </div>

      {/* Contact info*/}
      <div className='footer-content footer-content-3 col-sm-3 social-media-style'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>VÅRE PARTNERE</h4>
            <div className={"logo-container"}>
          <img id="hh-logo" src={require("../../img/logo/hh-logo.png")} alt={"logo"}/>
          <img id="swix-logo" src={require("../../img/logo/swix-logo.png")} alt={"logo"}/>
            </div>
        </div>
      </div>

      {/* Sosial Media*/}
      <div className='footer-content footer-content-4 col-sm-3 social-media-style'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>FØLG OSS</h4>
          <div className='socialMediaIcons'>
            <Link to=''>
              <FontAwesomeIcon className='footerIcon' icon={["fab", "facebook-square"]} />
            </Link>
            <Link to=''>
              <FontAwesomeIcon className='footerIcon' icon={["fab", "instagram-square"]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;