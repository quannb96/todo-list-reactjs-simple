import React, { useState } from "react";
import { AddTodoItemForm } from "./add-todo-item-form/AddTodoItemForm";
import { TodoListHeader } from "./todo-list-header/TodoListHeader";
import { TodoListItem } from "./todo-list-item/TodoListItem";
import "./style.css";

export function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = {
      id: id,
      description: description,
      done: false,
    };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDone = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      console.log(todo);
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <AddTodoItemForm addTodo={addTodo} />
      <div className="todo-list-panel">
        <TodoListHeader header="Todo List" />
        <div className="list-item-wrapper">
          {todos.map((todo) => {
            return (
              <TodoListItem
                handleDelete={handleDelete}
                handleDone={handleDone}
                todo={todo}
                key={todo.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
