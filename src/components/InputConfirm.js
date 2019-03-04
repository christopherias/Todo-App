import React from "react"

function InputConfirm(props) {
    function handleClick(input) {
        props.handleNewEntry(input.value)
    }

    return(
        <button className="InputConfirm" type="button" onClick={handleClick}>Add</button>
    )
}

export default InputConfirm