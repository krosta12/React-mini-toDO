import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import List from "./List";

function App() {
  let [liste, addList] = useState([])

  const clearToPlaceholder = (value) => {
    value.value = '';
  }
  function createToDo() {

    let value = document.getElementById('Appa').firstChild;
    if (value.value != '') {
      let obj = {
        id: Math.random(),
        text: value.value,
      }

      addList([...liste, obj])
      clearToPlaceholder(value)
    }
  }

  const keyPress = (key) => {
    if (key.key === 'Enter') {
      createToDo();
    }
  };

  return (
    <div className="App" id='Appa'>
      <input
        placeholder="create"
        onKeyDownCapture={keyPress}></input>
      <button onClick={createToDo}>send</button>
      <div className='toDoDiv'>
        {liste.map((o) => <List text={o.text} key={o.id} id={o.id} />)}
      </div>
    </div >
  );
}



export default App;


// start 14.43 end 18.03  02.02.23