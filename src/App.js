import React,{useState,useRef} from 'react';
import TodoList from "./TodoList"

function App() {

  const [todos,setTodo]=useState([]);

  const todoNameRef=useRef();



  function handleAddTodo(e){
    const name=todoNameRef.current.value;

    if(name==="")return
    setTodo(prevTodos=>{
      return [...prevTodos,{id:1,name:name,complete:false}]
    })
    
    todoNameRef.current.value=null;
    

  }  

  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text"></input>
    <button onClick={handleAddTodo}>Add todo</button>
    <button>Clear todo</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
