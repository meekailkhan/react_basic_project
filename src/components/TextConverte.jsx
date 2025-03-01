import React, { useState, useEffect } from 'react'
import './TextConver.css'

const TextConverte = () => {
    const [inputVal, setInputVal] = useState('')
    function handleInputChange(e) {
        setInputVal(e.target.value)
    }

    function handleLowerCase() {
        setInputVal(preVal => preVal.toLowerCase())
    }
    function handleUpperCase() {
        setInputVal(preVal => preVal.toUpperCase())
    }
    function handleCopy() {
        navigator.clipboard.writeText(inputVal)
    }

    useEffect(() => { }, [])

    return (
        <div className='main-container'>
            <h1 className='heading'>Enter Your text you want to change</h1>
            <textarea value={inputVal} onChange={handleInputChange} name="" className='text-area' id="" placeholder='Text Here'></textarea>
            <div className='btn-container'>
                <button className='btn lower-btn' onClick={handleLowerCase}>Lower Case</button>
                <button className='btn upper-btn' onClick={handleUpperCase}>Upper Case</button>
                <button className='btn copy-btn' onClick={handleCopy}>Copy</button>
            </div>
        </div>
    )
}

export default TextConverte
