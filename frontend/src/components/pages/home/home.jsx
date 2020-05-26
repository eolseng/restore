import React from 'react'

/** CSS Imports */
import '../../../css/pages/home/home.css'
import { Link } from 'react-router-dom'
import ShowFoldHeader from "./ShowFoldHeader";


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
                            <img src={require('../../../img/homePage/eco_conscious.svg')} alt={'Hero'} />
                        </div>
                    </div>
                </div>
            </div>
            <ShowFoldHeader />
        </div>
    )
}

export default Home