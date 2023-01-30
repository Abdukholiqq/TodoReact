import React from "react";
const Todo = ({todo , deleteTodo , complete})=> {
    return (
      <li className="list-group-item d-flex justify-content-between p-2 fs-5">
        <p style={{ textDecoration: todo?.completed ? "line-through" : "" }}>
          {todo.title}
        </p>
        <div>
          <button
            onClick={() => complete(todo.id)}
            className="comp btn bg-success me-2 text-warning">
            {todo.completed ? "Complated" : "InComplated"}
          </button>

          <button className="btn bg-info text-primary">Edit</button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn bg-danger ms-2 text-light">
            Delete
          </button>
        </div>
      </li>
    );
}
export default Todo;