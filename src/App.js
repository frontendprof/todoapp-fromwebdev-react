import React,{useState} from 'react';
import TodoList from "./TodoList"

function App() {

  const [todos,setTodo]=useState(["Todo1","Todo2"]);


  return (
    <>
    <TodoList todos={todos}/>
    <input type="text"></input>
    <button>Add todo</button>
    <button>Clear todo</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
