import React, {Component} from 'react'

/** CSS Imports */
import '../../../css/pages/home/home.css'

class ShowFoldHeader extends Component {

    constructor() {
        super()
        this.state = {
            showNoe: false,
            showNoeAnnet: false,
            showLittMer: false
        }
    }


    render() {
        return (
            <div className='under-fold container-fluid'>
                <div className='home-header'>
                    <div className='container'>
                        <button onClick={() => this.isNoeShownOrHidden()}>Slik fungerer det</button>
                        <button onClick={() => this.isNoeAnnetShownOrHidden()}>Våre tjenester</button>
                        <button onClick={() => this.isLittMerShownOrHidden()}>Vår visjon</button>
                    </div>
                    { this.state.showNoe ? <div className={""}>
                        <h3>Slik fungerer det</h3>
                        <img src={require("../../../img/homePage/delivery_address.svg")} alt="unDraw"/>
                        </div> : null }
                    { this.state.showNoeAnnet ? <div className={""}>
                        <h3>Våre tjenester</h3>
                        <img src={require("../../../img/homePage/order_delivered.svg")} alt="unDraw"/>
                        </div> : null }
                    { this.state.showLittMer ? <div className={""}>
                        <h3>Vår visjon</h3>
                        <img src={require("../../../img/homePage/wishes_icyp.svg")} alt="unDraw"/>
                        </div> : null }
                </div>
            </div>
        )
    }

    isNoeShownOrHidden() {
        if(this.state.showNoeAnnet || this.state.showLittMer) {
            this.state.showNoeAnnet = false;
            this.state.showLittMer = false;
        }
            this.setState({
                showNoe: !this.state.showNoe
            })
    }

    isNoeAnnetShownOrHidden() {
        if (this.state.showNoe || this.state.showLittMer) {
            this.state.showNoe = false;
            this.state.showLittMer = false;
        }

            this.setState({
                showNoeAnnet: !this.state.showNoeAnnet
            })
    }

    isLittMerShownOrHidden() {
        if(this.state.showNoeAnnet || this.state.showNoe) {
            this.state.showNoeAnnet = false;
            this.state.showNoe = false;
        }

            this.setState({
                showLittMer: !this.state.showLittMer
            })
    }
}

export default ShowFoldHeader;