import React from 'react';
import './App.css';

import {HelloWorld} from "./HelloWorld"
import {Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {ProductPage} from "./ProductPage";


class App extends React.Component{
    constructor(props){
        super(props)

    }

    notFound() {
        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>ERROR: the page you requested in not available.</p>
            </div>
        );
    }


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/product"
                            render={(props) => (<ProductPage{...props}/>)}/>
                        <Route component={this.notFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;
