import React from 'react';

import {HelloWorld} from "./HelloWorld";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="test col flex-grow-1">
            <Link to={"/hello"}>Hello</Link>
            <HelloWorld/>
        </div>
    );
}

export default App;
