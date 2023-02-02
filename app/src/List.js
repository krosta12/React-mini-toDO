import React from "react";

function List(props) {
    function deleteEnv() {
        document.getElementById(props.id).remove()
    }

    const ready = () => {
        document.getElementById(props.id).style.textDecoration = 'line-through'
    }


    if (props.text) {
        return (
            <div id={props.id} className="toDoList">
                <span id={props.id} onClick={ready} className="toDoListText">{props.text} </span>
                <button onClick={deleteEnv}>x</button>
            </div>
        )
    }
    else {
        return (0)
    }
}

export default List