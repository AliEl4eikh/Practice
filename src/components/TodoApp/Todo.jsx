import React, {useState, useReducer} from "react";
import reducer, {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from "./reducer";
import "./Todo.css";

const Todo = () => {
    const [id, setId] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const initialState = [];
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = (e) => {
        e.preventDefault();
        const newId = id + 1;
        setId(newId);
        dispatch({
            type: ADD_TODO,
            id: id,
            text: inputValue,
            completed: false,
        })
        setInputValue("");
    }

    const removeTodo = (id) => {
        dispatch({
            type: REMOVE_TODO,
            id,
        })
    }

    const completeTodo = (id) => {
        dispatch({
            type: COMPLETE_TODO,
            id,
        })
    }

    return <div>
        <h1>Todo Form</h1>
        <form onSubmit={addTodo} className="input">
            <input type="text" value={inputValue} onChange={(evt) => setInputValue(evt.target.value)}/>
            <button type="submit">+</button>
        </form>
        <div className="todos">
            {state.map((todo) => {
                return (
                    <div className="todo-item" key={todo.id}>
                    <p className={todo.completed && "strikethrough"}>{todo.text}</p>
                    <span onClick={() => removeTodo(todo.id)}>&#10005;</span>
                    <span onClick={() => completeTodo(todo.id)}>&#10003;</span>
                    </div>

                )
            })}
        </div>
    </div>
}

export default Todo;