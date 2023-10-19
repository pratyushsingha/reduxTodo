import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <form onSubmit={submitHandler}>
          <input
            placeholder="Add Todo"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input !== "" && <button>Add Todo</button>}
        </form>
      </div>
    </>
  );
};

export default AddTodo;
