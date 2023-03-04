import React, { lazy, Suspense, useEffect, useRef } from "react";
// import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css";

const TodoApp = lazy(() => import("./components/TodoApp/TodoApp"))

function App() {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [])
  
  return (
    <div className="App">
      <Suspense fallback={<div>loading ...</div>}>
        <TodoApp textVal="To do"/>
      </Suspense>
    </div>
  );
}

export default App;
