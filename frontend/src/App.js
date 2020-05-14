import React from 'react';
import './App.css';

import {HelloWorld} from "./HelloWorld";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Link to={"/hello"}>Hello</Link>
            <HelloWorld/>
        </div>
    );
}

export default App;
