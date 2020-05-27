import React, {useState} from 'react'

export function SearchFilter(props) {
    const {addSearchParam} = props
    let [tmpInputText, setTmpInputText] = useState("")
    let delayTimer;

    const doSearch = (txt) => {
        setTmpInputText(txt)
        clearTimeout(delayTimer)
        setTimeout(function () {
            addSearchParam('name', txt)
        }, 500)
    }

    return <div>
        <input type="text" value={tmpInputText} placeholder="Search for product..." onChange={e => doSearch(e.target.value)}>

        </input>
    </div>
}