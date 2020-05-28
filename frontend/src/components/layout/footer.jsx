import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** CSS Imports */
import "../../css/layout/footer.css";

function Footer() {
  return (
      <div>
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
          <h4 className='footer-wrapper-content'>Kontakt</h4>
          <Link to={"./FAQ"}>
            <h5 className='footer-wrapper-content'>testmail@restore.com</h5>
          </Link>
          <h5 className='footer-wrapper-content'>tlf: 222 22 222</h5>
        </div>
      </div>

      {/* Contact info*/}
      <div className='footer-content col-3 social-media-style'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>Våre partnere:</h4>
          <Link to=''>
            <FontAwesomeIcon className='' icon={["fab", "facebook-square"]} />
          </Link>
          <Link to=''>
            <FontAwesomeIcon className='' icon={["fab", "instagram-square"]} />
          </Link>
        </div>
      </div>

      {/* Sosial Media*/}
      <div className='footer-content col-3 social-media-style'>
        <div className='footer-wrapper'>
          <h4 className='footer-wrapper-content'>Følg oss</h4>
          <div className='socialMediaIcons'>
            <Link to=''>
              <FontAwesomeIcon className='' icon={["fab", "facebook-square"]} />
            </Link>
            <Link to=''>
              <FontAwesomeIcon className='' icon={["fab", "instagram-square"]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;