import React from "react";
const Todo = ({todo , deleteTodo})=> {
    return (
      <li className="list-group-item d-flex justify-content-between p-2 fs-5">
        <p>{todo.title}</p>
        <div>
          <button className="btn bg-info">Edit</button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn bg-danger ms-2">
            Delete
          </button>
        </div>
      </li>
    );
}
export default Todo;