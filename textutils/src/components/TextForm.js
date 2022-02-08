import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    // button action declaration
    const handleUpClick = () => {
        console.log("Upper case was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Lower case was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleLenClick = () =>{
        console.log("Text Length")
        let newText = text.length
        setText(newText)
    }
    const handleTitClick = () =>{
        console.log("Title Case")
        let newText = text.charAt(0).toUpperCase()+text.slice(1)
        setText(newText)
    }
    const handleRevClick = () =>{
        console.log("reverse text")
        setText(text.split(" ").reverse().join(" "))
    }
    const handleOnChange = (event) => {
        console.log("OnChnage was clicked")
        setText(event.target.value) //for updating the text field
    }
    const handleCopy = (event) => {
        console.log("Copy clicked")
        var text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    // setting useState properties
    const [text, setText] = useState("")

    return (

        <>
        <div className ="container" style={{backgroundColor: props.mode === "dark"?"grey":"white"}}>
            <br></br>
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} style={{backgroundColor: props.mode === "dark"?"grey":"white", color:props.mode === "dark"?"white":"black" }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleTitClick}>Title Case</button>
            <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={handleLenClick}>Text Length</button>
        </div>
        <div className="container" style={{backgroundColor: props.mode === "dark"?"grey":"white"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Approx. reading time {0.008*text.split(" ").length} min</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        </>
    );
}

TextForm.propTypes = {
    name: PropTypes.string,
}