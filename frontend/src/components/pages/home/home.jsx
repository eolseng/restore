import React from 'react'

/** CSS Imports */
import '../../../css/pages/home/home.css'
import { Link } from 'react-router-dom'

function showContent() {}

function Home() {
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
                            <img src={require('../../../img/homePage/check_boxes.svg')} alt={'Hero'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='under-fold container-fluid'>
                <div className='home-header'>
                    <div className='container'>
                        <button onClick={showContent}>Noe</button>
                        <button onClick={showContent}>Noe annet</button>
                        <button onClick={showContent}>Litt mer</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='tab-1'>
                        <p>Noe</p>
                    </div>
                    <div className='tab-2'>
                        <p>Noe annet</p>
                    </div>
                    <div className='tab-3'>
                        <p>Litt mer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
