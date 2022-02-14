import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  let loginData = useSelector((state) => state.loginData);
  let value = loginData.isAuth ? "true" : "false";
  return (
    <div>
      <TodoInput />
     <TodoList />
    </div>
  );
};

export default Todo;
