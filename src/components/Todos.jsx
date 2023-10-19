import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../app/slice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Todos</h1>
      </div>
      <div className="flex justify-between space-x-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;
