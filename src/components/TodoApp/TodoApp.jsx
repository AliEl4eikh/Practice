import React, { useState, useReducer } from "react";
import reducer, { ADD_TODO } from "./reducer";
import TodoContext from "./todoContext";
import TodoList from "./TodoList";
import "./styles.css";

const TodoApp = () => {
  const [id, setId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const initialState = [];
  const [todoState, todoDispatch] = useReducer(reducer, initialState);

  const addTodo = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);
    todoDispatch({
      type: ADD_TODO,
      id: id,
      text: inputValue,
      completed: false,
    });
    setInputValue("");
  };

  return (
    <TodoContext.Provider value={[todoState, todoDispatch]}>
      <div>
        <h1>Todo Form</h1>
        <form onSubmit={addTodo} className="input">
          <input
            type="text"
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
          />
          <button disabled={inputValue.length === 0} type="submit">+</button>
        </form>
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
