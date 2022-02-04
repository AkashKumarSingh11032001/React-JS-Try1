import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    // button action declaration
    const handleUpClick = () => {
        console.log("Upper case was clicked")
        setText("Uppercase was clicked")
    }
    const handleOnChange = (event) => {
        console.log("OnChnage was clicked")
        setText(event.target.value) //for updating the text field
    }

    // setting useState properties
    const [text, setText] = useState("Enter Your Text Here!")

    return (
        <div>
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    );
}

TextForm.propTypes = {
    name: PropTypes.string,
}