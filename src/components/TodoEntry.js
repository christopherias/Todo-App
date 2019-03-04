import React from "react"

const containerStyle = {
    display: "flex",
    borderTop: "20px solid transparent",
    width: "100%",
    height: "100%",
    minHeight: "50px",
    maxHeight: "100px",
    justifyContent: "center",
}

const entryStyle = {
    width: "80%",
    textAlign: "center",
    backgroundColor: "#cccccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem"
}

const buttonStyle = {
    width: "20%",
    backgroundColor: "#ff6666",
    border: "none"
}


function TodoEntry(props) {
    function handleClick() {
        console.log(props.id)
        props.deleteEntry(props.id)
    }

    return(
        <div className="TodoEntry" style={containerStyle}>
            <div style={entryStyle}>{props.content}</div>
            <button type="button" onClick={handleClick} style={buttonStyle}>Delete</button>
        </div>
    )
}

export default TodoEntry