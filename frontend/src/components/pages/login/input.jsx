import React, {useState} from 'react'
import PropTypes from 'prop-types'

export function Input(props){
    const [value,setValue] = useState()
    const [className,setClassName] = useState()
    const [error,setError] = useState()




    const {handleError, ...opts} = props;

    return <div>
        <input {...opts} value={value} onChange={(newVal) => setValue(newVal)} className={className}/>
    </div>
}
