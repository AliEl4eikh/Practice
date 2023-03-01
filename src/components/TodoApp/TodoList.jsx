import React, {useContext} from "react";
import TodoContext from "./todoContext";
import Todo from "./Todo";


const TodoList = () => {
    const [state] = useContext(TodoContext);
    
    return (
        <div className="todos">
          {state.map((todo) => {
              return (
                  <Todo todo={todo} key={todo.id}/>
            );
        })}
        </div>
        )
}

export default TodoList;