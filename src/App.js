import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";


function App (){
  return(
    <div className="d-flex container mt-5">
        <Timerr></Timerr>
       <TodoApp></TodoApp>
       <Counterr></Counterr>
    </div>
  )
}



function Timerr() {
  const [coun, setCounter] = useState(260);
  function inCreaseCounter() {
    setCounter(coun - 1);
  }
  //  if orqali vaqtni to'xtatish
  // if (coun != 0) {
  //   setTimeout(() => {
  //     setCounter(coun - 1);
  //   }, 1000);
  // }

  // clearTimeOut orqali vaqtni to'xtatish
  const timer =  setTimeout(() => {
      setCounter(coun - 1);
    }, 1000);

    if (coun === 0 ) {
clearTimeout(timer)      
    }
  return (
    <div className="App"> 
    <h1>Timer</h1>
      <h1>{coun === 0 ? "OLG'A !!!  Yengmaguningcha Yengilma!" : coun}</h1> 
      
    </div>
  );
} 

// counter +++
function Counterr() {
const [counter,setCounter] = useState(0);
  function inCreaseCounter() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
       <button className="btn bg-info" onClick={inCreaseCounter}>Add</button>
       <h1>{counter}</h1> 
    </div>
  );
}

//   ToDo App
 function TodoApp () {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState( [
    {
      id: 1,
      title: "You can also add information here",
    },
    {
      id: 2,
      title: "title 2",
    },
    {
      id: 3,
      title: "title 3",
    },
  ] );

  const addTodoHandler = ()=> {
const newTodo = {
  id : todos[todos.length-1] ? todos[todos.length-1].id +1 :0,
  title: input,
};
setTodos([ ...todos, newTodo])
setInput("");
  } 
 
  const deleteHandler = (id)=>{
    console.log(id);
 const result =  todos.filter((todo) => {
      if (todo.id !== id) {
        return todo
      }
    })
    setTodos(result)
  }
  return (
    <div className="App container">
      <div className="card">
        <input
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          type="text"
          pleaseholder="Add Todo"
          className="p-2 form-control"
        />
        <button
          onClick={addTodoHandler}
          className="bg-primary mt-2 p-1 border-0 rounded-4 fs-5">
          Add Post
        </button>
      </div>
      <div className="card-body mt-4">
        <ul className="list-group">
          {todos.map((todo) => (
            // <li
            //   key={todo.id}
            //   className="list-group-item d-flex justify-content-between p-2 fs-5">
            //   <p>{todo.title}</p>
            //   <div>
            //     <button className="btn bg-info">Edit</button>
            //     <button onClick={() => deleteHandler(todo.id)} className="btn bg-danger ms-2">Delete</button>
            //   </div>
            // </li>
            <Todo  deleteTodo={deleteHandler} 
            todo={todo} key={todo.id}></Todo>
          ))}
        </ul>
      </div>
    </div>
  );
 }





export default App;
