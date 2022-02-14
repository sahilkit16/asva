import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { connect } from "react-redux";

const Todo = (props) => {
  const [todoData, setTodoData] = useState(props.todoList);
  //   const handleTodoChange = (e) => {
  //     let value = e.target.value;
  //     setTodoValue(value);
  //     console.log({ value });
  //   };

  //   const handleAddTodo = () => {
  //     if (todoValue === "") {
  //       alert("todo input cant be empty");
  //     } else {
  //       let todos = props.todoList;
  //       console.log({ todos });
  //       let newTodo = {
  //         id: todos && todos.length,
  //         text: todoValue,
  //         completed: false,
  //       };

  //       todos.push(newTodo);

  //       props.dispatch({ type: "SET_TODO_LIST", data: todos });
  //       setTodoValue("");
  //     }
  //   };

  const updateList = () => {
    setTodoData(props.todoList);
   
  };

  useEffect(() => {
    updateList(todoData);
    console.log({ todoData });
  }, [todoData]);
  console.log(props.todoList);
 
  return (
    <div>
      <TodoInput props={props} />
      <TodoList todoData={todoData} />
    </div>
  );
};

const mapStateToProps = ({ loginData, todoList }) => ({
  loginData,
  todoList,
});

export default connect(mapStateToProps)(Todo);
