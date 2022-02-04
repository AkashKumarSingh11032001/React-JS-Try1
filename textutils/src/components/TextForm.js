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
    const handleOnChange = (event) => {
        console.log("OnChnage was clicked")
        setText(event.target.value) //for updating the text field
    }

    // setting useState properties
    const [text, setText] = useState("Enter Your Text Here!")

    return (
        <div>
            <br></br>
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLenClick}>Text Length</button>
        </div>
    );
}

TextForm.propTypes = {
    name: PropTypes.string,
}