import React, { useState } from "react";
import List from "./List";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('')

  function createToDo(todo) {
    if (todo) {
      let obj = {
        id: Math.random(),
        text: todo,
      }

      setList([...list, obj])
      setTodo('');
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
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDownCapture={keyPress}></input>
      <button onClick={() => createToDo(todo)}>send</button>
      <div className='toDoDiv'>
        {list.map((o) => <List text={o.text} key={o.id} id={o.id} setList={setList}/>)}
      </div>
    </div >
  );
}



export default App;


// start 14.43 end 18.03  02.02.23