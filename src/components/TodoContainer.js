import React from "react"
import TodoEntry from "./TodoEntry"

const containerStyle = {
    gridColumn: 1,
    gridRow: 2
}

function TodoContainer(props) {
    /* id = key (für TodoEntry Component, da key nicht weitergegeben wird) */
    const current_entries = props.entries.map((entry, index) => {
        return (
            <TodoEntry content={entry} key={index} id={index} deleteEntry={props.deleteEntry} />
        )
    })

    console.log(current_entries)

    return(
        <div className="TodoContainer" style={containerStyle}>{current_entries}</div>
    )
}

export default TodoContainer