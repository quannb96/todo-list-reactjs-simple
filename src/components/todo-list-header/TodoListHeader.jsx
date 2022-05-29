import React from "react";
import "./style.css";

export function TodoListHeader(props) {
  return <div className="todo-list-header">{props.header}</div>;
}
