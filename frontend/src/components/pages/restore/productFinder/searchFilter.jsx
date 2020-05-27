import React, {useState} from 'react'

export function SearchFilter(props) {

    const executionDelayInMs = 500;

    const {addSearchParam} = props;
    let [tmpInputText, setTmpInputText] = useState("");
    let [delayTimeout, setDelayTimeout] = useState(0);

    const doSearch = (txt) => {
        setTmpInputText(txt);
        clearTimeout(delayTimeout);
        setDelayTimeout(setTimeout(() => addSearchParam('name', txt), executionDelayInMs));
    }

    return (
        <input type="text"
               value={tmpInputText}
               placeholder="Search for product..."
               onChange={e => doSearch(e.target.value)}/>
        )
}