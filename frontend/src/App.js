import React from 'react';

import {HelloWorld} from "./HelloWorld";
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Link to={"/hello"}>Hello</Link>
            <HelloWorld/>
        </div>
    );
}

export default App;
