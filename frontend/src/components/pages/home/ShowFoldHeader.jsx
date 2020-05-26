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
                        <button onClick={() => this.isNoeShownOrHidden()}>Noe</button>
                        <button onClick={() => this.isNoeAnnetShownOrHidden()}>Noe annet</button>
                        <button onClick={() => this.isLittMerShownOrHidden()}>Litt mer</button>
                    </div>
                    { this.state.showNoe ? <div className={""}>Noe</div> : null }
                    { this.state.showNoeAnnet ? <div className={""}>Noe Annet</div> : null }
                    { this.state.showLittMer ? <div className={""}>Litt mer</div> : null }
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
            this.state.showLittMer = false;
        }

            this.setState({
                showLittMer: !this.state.showLittMer
            })
    }
}

export default ShowFoldHeader;