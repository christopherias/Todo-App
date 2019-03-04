import React from "react"
import Input from "./Input"

const containerStyle = {
    gridColumn: 1,
    gridRow: 1
}

function InputContainer(props) {
    return(
        <div className="InputContainer" style={containerStyle}>
            <Input addEntry={props.addEntry} />
        </div>
    )
}

export default InputContainer