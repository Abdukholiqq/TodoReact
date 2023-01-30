import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";
import Timerr from "./Components/Timer";
import Counterr from "./Components/Counter";

function App() {
  return (
    <div className=" container mt-5">
      <div className="d-flex mb-5">
        <Timerr></Timerr>
        <Counterr></Counterr>
      </div>
      <TodoApp></TodoApp>
    </div>
  );
}

//   ToDo App
function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "You can also add information here",
      completed: false,
    },
    {
      id: 2,
      title: "title 2",
      completed: true,
    },
    {
      id: 3,
      title: "title 3",
      completed: true,
    },
  ]);

  const addTodoHandler = () => {
    const newTodo = {
      id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 0,
      title: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteHandler = (id) => {
    const result = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodos(result);
  };
  const editHandler = (id) => {

  }
  const complateHandlerTodo = (id) =>{  
 const array = todos.map((todo)=>{ 
      if (todo.id === id) {
        todo.completed = !todo.completed;

      }
      return todo
    })
    setTodos(array)
  }
  return (
    <div className="App container">
      <div className="">
        <input
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          type="text"
          placeholder="Add Todo ..."
          className="p-2 form-control"
        />
        <button
          onClick={addTodoHandler}
          className="bg-primary mt-2 p-1 border-0 rounded-4 fs-5 w-100">
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
            <Todo
              complete={complateHandlerTodo}
              deleteTodo={deleteHandler}
              todo={todo}
              key={todo.id}></Todo>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
