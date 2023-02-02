import React from "react";

function List(props) {
    function deleteEnv() {
        props.setList((list) => list.filter(it => it.id !== props.id))
    }

    const ready = () => {
        document.getElementById(props.id).style.textDecoration = 'line-through'
    }

    return (
        <>
            {
                props.text && (
                <div id={props.id} className="toDoList">
                    <span id={props.id} onClick={ready} className="toDoListText">{props.text} </span>
                    <button onClick={deleteEnv}>x</button>
                </div>
                )
            }
        </>
    )
}

export default List