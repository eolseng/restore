import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** CSS Imports */
import "../../css/layout/footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      {/* Restore logo*/}
      <div className='footer-content col-3'>
        <Link to=''>
          {" "}
          {/* finne ut hvordan man går til en ekstern side */}
          <img id='logo-img' src={require("../../img/logo/repairable.png")} alt='logo' />
        </Link>
      </div>

      {/* Information*/}
      <div className='footer-content col-3'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>INFORMATION</h4>
          <Link to={"./FAQ"}>
            <h5 className='footer-wrapper-content'>FAQ</h5>
          </Link>
          <h5 className='footer-wrapper-content'>Våre butikker</h5>
        </div>
      </div>

      {/* Contact info*/}
      <div className='footer-content col-3'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>KONTAKT OSS</h4>
          <h5 className='footer-wrapper-content'>
            <Link to={"./"}>something@restore.com</Link> {/* epost link*/}
          </h5>
          <h5 className='footer-wrapper-content'>Tlf: 22 22 22 22</h5>
          <h5 className='footer-wrapper-content'>Testveien 123, 1234 Oslo</h5>
        </div>
      </div>

      {/* Sosial Media*/}
      <div className='footer-content col-3'>
        <div className='footer-wrapper'>
          <div className='socialMediaIcons'>
            <Link to=''>
              <FontAwesomeIcon className='' icon={["fab", "facebook-square"]} />
            </Link>
            <Link to=''>
              <FontAwesomeIcon className='' icon={["fab", "twitter-square"]} />
            </Link>
            <Link to=''>
              <FontAwesomeIcon className='' icon={["fab", "linkedin"]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
