import React, { useEffect, useRef } from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  return (
    <div className="App">
      <TodoApp ref={inputRef} textVal="To do"/>
    </div>
  );
}

export default App;
