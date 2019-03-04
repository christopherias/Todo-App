import React from "react"

const inputContainerStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    minHeight: "50px",
    maxHeight: "100px",
}

const inputStyle = {
    width: "80%",
    textAlign: "center",
    fontSize: "2rem",
    backgroundColor: "#cce6ff",
    border: "none"
}

const buttonStyle = {
    width: "20%",
    backgroundColor: "#00b300",
    border: "none"
}

function Input(props) {
    // für Zugriff auf value im input-Feld
    let userInput = React.createRef()

    function handleClick(input) {
        // Zugriff auf Eingabe über refs current.value
        const currentInput = userInput.current.value
        props.addEntry(currentInput)
    }

    return(
        <div className="Input" style={inputContainerStyle}>
            <input type="text" ref={userInput} style={inputStyle} />
            <button type="button" onClick={handleClick} style={buttonStyle}>Add</button>
        </div>
    )
}

export default Input