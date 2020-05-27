import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import ShowFoldHeader from "./ShowFoldHeader";

/** CSS Imports */
import '../../../css/pages/home/home.css'

function Home() {
    const [renderedDiv, setRenderedDiv] = useState('')

    function renderBlueprint() {
        setRenderedDiv(
            <div className='container-fluid'>
                <div className='container'>
                    <div className='text-box'>
                        <h3>Slik fungerer det</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, praesentium.</p>
                    </div>
                    <div className='img-container'>
                        <img src='' alt='Vision' />
                    </div>
                </div>
            </div>
        )
    }
    
    function renderServices() {
        setRenderedDiv(
            <div className='container-fluid'>
                <div className='container'>
                    <div className='text-box'>
                        <h3>Våre tjenester</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, praesentium.</p>
                    </div>
                    <div className='img-container'>
                        <img src='' alt='Vision' />
                    </div>
                </div>
            </div>
        )
    }

    function renderVision() {
        setRenderedDiv(
            <div className='container-fluid'>
                <div className='container'>
                    <div className='text-box'>
                        <h3>Vår visjon</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, praesentium.</p>
                    </div>
                    <div className='img-container'>
                        <img src='' alt='Vision' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='home-wrapper'>
            <div className='above-fold container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='above-fold-text-wrapper col-sm-6'>
                            <h1>Tittel her, kom å redd verden</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam et quasi
                                error nobis, temporibus a recusandae placeat veritatis maxime.
                            </p>
                            <Link to='/filter'>
                                <button className='cta-button'>Start nå</button>
                            </Link>
                        </div>
                        <div className='above-fold-img-wrapper col-sm-6'>
                            <img src={require('../../../img/homePage/eco_conscious.svg')} alt={'Hero'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <button onClick={renderBlueprint}>Slik fungerer det</button>
                    <button onClick={renderServices}>Våre tjenester</button>
                    <button onClick={renderVision}>Vår visjon</button>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div>{renderedDiv}</div>
                </div>
            </div>
        </div>
    )
}

export default Home
