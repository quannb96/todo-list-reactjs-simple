import React from "react";
import "./style.css";

export function TodoListItem(props) {
  const { todo, handleDelete, handleDone } = props;

  return (
    <div className="todo-list-item">
      <div className="todo-list-item-hidden">
        <button
          onClick={() => handleDone(todo.id)}
          className={`todo-item-btn ${
            todo.done ? "btn-warning" : "btn-success"
          }`}
        >
          {todo.done ? (
            <i class="fa-solid fa-rotate-right "></i>
          ) : (
            <i className="fa-solid fa-check "></i>
          )}
        </button>

        <span
          className={`todo-list-item-description ${
            todo.done ? "complete" : ""
          }`}
        >
          {todo.description}
        </span>
      </div>
      <button
        style={{ marginLeft: "5px" }}
        className="todo-list-item-delete-btn"
      >
        <i
          className="fa-solid fa-xmark"
          onClick={() => handleDelete(todo.id)}
        ></i>
      </button>
    </div>
  );
}
