import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary">Convert To UpperCase</button>
        </div>
    );
}

TextForm.propTypes = {
    name: PropTypes.string,
}