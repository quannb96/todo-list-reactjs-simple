import React, { useState } from "react";
import "./style.css";

export function AddTodoItemForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter What need to be done?");
      return;
    }
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-item-input"
        placeholder="What need to be done?"
      />
      <button type="submit" className="submit-btn">
        <i style={{ marginRight: "5px" }} class="fa-solid fa-circle-plus"></i>
        Add
      </button>
    </form>
  );
}
