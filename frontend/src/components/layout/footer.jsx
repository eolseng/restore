import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/** CSS Imports */
import '../../css/layout/footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='container'>
                <div className='row'>
                    {/* Restore logo*/}
                    <div id="footer-wrapper-1" className='col-sm-3'>
                        <div className='footer-content'>
                            <Link className='footer-logo-wrapper' to=''>
                                <img className='footer-logo' src={require('../../img/logo/logo.png')} alt='logo' />
                            </Link>
                        </div>
                    </div>

                    {/* Information*/}
                    <div id="footer-wrapper-2" className='col-sm-3'>
                        <div className='footer-content'>
                            <h4 className='footer-title'>KONTAKT</h4>
                            <h5 className='footer-text'>hei@repairable.no</h5>
                            <h5 className='footer-text'>+47 407 23 912 (9-15)</h5>
                        </div>
                    </div>

                    {/* Contact info*/}
                    <div id="footer-wrapper-3" className='col-sm-3'>
                        <div className='footer-content'>
                            <h4 className='footer-title'>VÅRE PARTNERE</h4>
                            <div className='footer-partner-container'>
                                <img
                                    className='footer-partner'
                                    src={require('../../img/logo/hh-logo.png')}
                                    alt={'logo'}
                                />
                                <img
                                    className='footer-partner'
                                    src={require('../../img/logo/swix-logo.png')}
                                    alt={'logo'}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sosial Media*/}
                    <div id="footer-wrapper-4" className='col-sm-3'>
                        <div className='footer-content'>
                            <h4 className='footer-title'>FØLG OSS</h4>
                            <div className='footer-icon-container'>
                                <Link to='footer-icon-wrapper'>
                                    <FontAwesomeIcon className='footer-icon' icon={['fab', 'facebook-square']} />
                                </Link>
                                <Link to='footer-icon-wrapper'>
                                    <FontAwesomeIcon className='footer-icon' icon={['fab', 'instagram-square']} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
