import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../../css/pages/restore/product-finder/product-filter.css'

/**
 * Renders a search bar with possibility to search for a product name.
 * @param props
 * @returns {*}
 * @constructor
 */
export function SearchFilter(props) {

    const executionDelayInMs = 500;

    const {addSearchParam} = props;
    let [tmpInputText, setTmpInputText] = useState("");
    let [delayTimeout, setDelayTimeout] = useState(0);

    /**
     * Searches for product with delay to avoid fetching many times.
     * @param txt
     */
    const doSearch = (txt) => {
        setTmpInputText(txt);
        clearTimeout(delayTimeout);
        setDelayTimeout(setTimeout(() => addSearchParam('name', txt), executionDelayInMs));
    }

    return (<div className={"search-container"}>
        <input type="text"
               value={tmpInputText}
               placeholder="Search for product..."
               onChange={e => doSearch(e.target.value)}
               className={"search-bar"}
        />
        <FontAwesomeIcon icon={["fas", "search"]} className={"search-icon"}/>
        </div>
        )
}