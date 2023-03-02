import React, { useState, useReducer, forwardRef } from "react";
import reducer, { ADD_TODO } from "./reducer";
import TodoContext from "./todoContext";
import TodoList from "./TodoList";
import "./styles.css";
import {useScrollPos} from './useScrollPos'


// if i want to control it from the parent 
// i can use forwardRef
const TodoApp = forwardRef((props, ref) => {
  const [id, setId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const initialState = [];
  const [todoState, todoDispatch] = useReducer(reducer, initialState);
  const scrollPos = useScrollPos()

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
      <div style={{height: "5000px"}}>
        <h1>Todo Form</h1>
        <form onSubmit={addTodo} className="input">
          <input
            ref={ref}
            placeholder={props.textVal}
            type="text"
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
          />
          <button disabled={inputValue.length === 0} type="submit">+</button>
        </form>
        <TodoList />
        <div>
          <p>{scrollPos.x}</p>
          <p>{scrollPos.y}</p>
        </div>
      </div>
    </TodoContext.Provider>
  );
});

export default TodoApp;
